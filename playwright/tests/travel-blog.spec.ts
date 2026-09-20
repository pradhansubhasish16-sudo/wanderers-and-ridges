import { test, expect } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCREENSHOT_DIR = path.resolve(__dirname, '../screenshots');

test.describe('Wanderers & Ridges - Full Travel Blog Verification Suite', () => {

  test('01. Home Page loads with zero console errors and valid metrics', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/Wanderers & Ridges/);

    // Verify Hero Section headline
    const heroTitle = page.locator('h1');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('Where the Pavement Ends');

    // Verify metrics bar
    const peakElevation = page.locator('text=15,200 FT').first();
    await expect(peakElevation).toBeVisible();

    // Verify Featured Cards
    const arunachalCard = page.locator('text=Into the Land of Dawn-Lit Mountains').first();
    await expect(arunachalCard).toBeVisible();

    // Take Full Page Desktop Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '01-home-desktop.png'),
      fullPage: true,
    });

    expect(consoleErrors).toHaveLength(0);
  });

  test('02. Mobile Viewport & Hamburger Navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuBtn = page.locator('#mobile-menu-btn');
    await expect(menuBtn).toBeVisible();

    // Open mobile menu
    await menuBtn.click();
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Take Mobile Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '02-home-mobile.png'),
    });
  });

  test('03. Trips Archive and Interactive Category Filtering', async ({ page }) => {
    await page.goto('/trips');
    await expect(page.locator('h1')).toContainText('The Expedition Archives');

    // Initial state: both cards visible
    const initialItems = page.locator('.trip-item');
    await expect(initialItems).toHaveCount(2);

    // Take Trips Archive Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '03-trips-archive.png'),
      fullPage: true,
    });

    // Filter by "Motorcycle Trails"
    const motorcycleBtn = page.locator('button[data-filter="Motorcycle Trails"]');
    await motorcycleBtn.click();
    await page.waitForTimeout(300);

    const meghalayaCard = page.locator('text=Chasing Clouds, Craters & Crystal Waters').first();
    await expect(meghalayaCard).toBeVisible();

    // Take Motorcycle Filter Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '04-trips-filter-motorcycle.png'),
    });

    // Filter by "Himalayan High Passes"
    const himalayanBtn = page.locator('button[data-filter="Himalayan High Passes"]');
    await himalayanBtn.click();
    await page.waitForTimeout(300);

    const arunachalCard = page.locator('text=Into the Land of Dawn-Lit Mountains').first();
    await expect(arunachalCard).toBeVisible();

    // Take Himalayan Filter Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '05-trips-filter-himalayan.png'),
    });
  });

  test('04. Arunachal Expedition Article and Images Integrity', async ({ page }) => {
    await page.goto('/trips/arunachal-pradesh-2023');
    await expect(page.locator('h1')).toContainText('Himalayan Winter Road Trip');

    // Verify key itinerary milestones
    await expect(page.locator('text=Sela Pass (13,700 FT) & Nuranang Cataracts')).toBeVisible();
    await expect(page.locator('text=The Frozen Frontier: Bum La (15,200 FT)')).toBeVisible();
    await expect(page.locator('h2:has-text("Tandem Paragliding")')).toBeVisible();

    // Verify all rendered content images have loaded (scroll lazy-loaded images into view)
    const images = page.locator('img:not(#lightbox-img)');
    const count = await images.count();
    expect(count).toBeGreaterThan(5);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await img.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(isLoaded).toBeTruthy();
    }

    // Take Arunachal Article Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '06-arunachal-expedition.png'),
      fullPage: true,
    });
  });

  test('05. Meghalaya Expedition Article and Images Integrity', async ({ page }) => {
    await page.goto('/trips/meghalaya-canyons-2026');
    await expect(page.locator('h1')).toContainText('A Meghalaya Motorcycle Odyssey');

    // Verify key itinerary milestones
    await expect(page.locator('text=The Cobalt Basin: Phe Phe Falls')).toBeVisible();
    await expect(page.locator('text=The Subterranean River: Krem Chympe')).toBeVisible();
    await expect(page.locator('text=The Crystal River: Shnongpdeng')).toBeVisible();
    await expect(page.locator('text=Prehistoric Oceans: Mawsmai Cave Fossils')).toBeVisible();

    // Verify all content images loaded (scroll lazy-loaded images into view)
    const images = page.locator('img:not(#lightbox-img)');
    const count = await images.count();
    expect(count).toBeGreaterThan(5);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await img.scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
      const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(isLoaded).toBeTruthy();
    }

    // Take Meghalaya Article Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '07-meghalaya-expedition.png'),
      fullPage: true,
    });
  });

  test('06. About Page & Gear Manifesto', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('The Traveler Behind the Ridges');
    await expect(page.locator('h2:has-text("Subhasish Pradhan")')).toBeVisible();
    await expect(page.locator('text=The Field & Photography Kit')).toBeVisible();

    // Take About Page Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '08-about-page.png'),
      fullPage: true,
    });
  });

  test('07. Fullscreen Image Lightbox Interactivity', async ({ page }) => {
    await page.goto('/trips/arunachal-pradesh-2023');

    // Click on the first zoomable photo
    const firstPhoto = page.locator('[data-lightbox-trigger="true"]').first();
    await firstPhoto.scrollIntoViewIfNeeded();
    await firstPhoto.click();

    const lightbox = page.locator('#image-lightbox');
    await expect(lightbox).toHaveClass(/opacity-100/);

    const lightboxImg = page.locator('#lightbox-img');
    await expect(lightboxImg).toBeVisible();

    // Take Lightbox Screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '09-lightbox-open.png'),
    });

    // Press Escape to close
    await page.keyboard.press('Escape');
    await expect(lightbox).toHaveClass(/opacity-0/);
  });

});
