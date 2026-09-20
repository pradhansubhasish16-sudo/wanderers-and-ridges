---
name: playwright-cli
description: End-to-end browser automation, visual regression testing, UI verification, and screenshot capture using Playwright CLI and test runner for modern web applications.
---

# Playwright CLI Testing Skill

This skill provides comprehensive instructions for configuring, authoring, executing, and analyzing Playwright end-to-end tests, UI visual verifications, and browser automation workflows.

---

## 1. Capabilities & Core Workflows

- **Automated Route & Page Testing:** Verify all static and dynamic routes load with HTTP 200, correct titles, metadata, and zero unexpected console errors.
- **Visual Capture & Layout Verification:** Take full-page and element-level screenshots across multiple viewports (Desktop 1440x900, Tablet 768x1024, Mobile 375x812).
- **Interactive UI Testing:** Validate interactive elements such as image lightboxes, modal dialogs, category filter tabs, navigation toggles, and form inputs.
- **Network & Asset Auditing:** Ensure all embedded assets (images with spaces/special characters, stylesheets, fonts, media) resolve successfully without 404/500 errors.
- **Accessibility & Contrast Checks:** Verify semantic hierarchy, contrast ratios, and keyboard navigability (`Escape` for modals, tab order).

---

## 2. Playwright Configuration Standards

When setting up Playwright for static sites (Astro, Next.js static, Vite):

```typescript
// playwright/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'node server.js',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
```

---

## 3. Test Authoring Patterns

### A. Route Validation & Console Error Trap
```typescript
test('page loads with zero console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/');
  await expect(page).toHaveTitle(/Wanderers & Ridges/);
  expect(errors).toHaveLength(0);
});
```

### B. Image Asset Integrity Check
```typescript
test('all rendered images load successfully', async ({ page }) => {
  await page.goto('/trips/arunachal-pradesh-2023');
  const images = page.locator('img');
  const count = await images.count();
  
  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const naturalWidth = await img.evaluate((node: HTMLImageElement) => node.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  }
});
```

### C. Interactive Filtering Test
```typescript
test('category filter updates visible cards dynamically', async ({ page }) => {
  await page.goto('/trips');
  const canyonFilter = page.locator('button[data-filter="Canyons & Caves"]');
  await canyonFilter.click();
  
  const visibleCards = page.locator('.trip-item:visible');
  await expect(visibleCards).toHaveCount(1);
  await expect(visibleCards.first()).toContainText('Meghalaya');
});
```

### D. Fullscreen Lightbox Interaction
```typescript
test('lightbox opens on photo click and closes on Escape', async ({ page }) => {
  await page.goto('/trips/arunachal-pradesh-2023');
  const firstPhoto = page.locator('[data-lightbox-trigger="true"]').first();
  await firstPhoto.click();
  
  const lightbox = page.locator('#image-lightbox');
  await expect(lightbox).toHaveClass(/opacity-100/);
  
  await page.keyboard.press('Escape');
  await expect(lightbox).toHaveClass(/opacity-0/);
});
```

---

## 4. Screenshot Capture Workflow

Organize visual artifacts into a dedicated `playwright/screenshots/` directory:
- `{route}-desktop.png` (1440x900 full page)
- `{route}-mobile.png` (375x812 full page)
- `lightbox-open.png` (Modal in active focus)
- `trips-filtered-{category}.png` (Filtered state validation)

---

## 5. Execution Commands

```bash
# Run all Playwright tests
npx playwright test --config=playwright/playwright.config.ts

# Run with interactive UI
npx playwright test --ui

# Run single test file
npx playwright test playwright/tests/travel-blog.spec.ts

# Generate HTML report
npx playwright show-report
```
