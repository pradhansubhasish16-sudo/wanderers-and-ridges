---
name: playwright
description: End-to-end browser automation, visual regression testing, UI verification, and screenshot capture using Playwright CLI and test runner for modern web applications.
---

# Playwright Testing Skill

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

## 3. Screenshot Capture Workflow

Organize visual artifacts into a dedicated `playwright/screenshots/` directory:
- `{route}-desktop.png` (1440x900 full page)
- `{route}-mobile.png` (375x812 full page)
- `lightbox-open.png` (Modal in active focus)
- `trips-filtered-{category}.png` (Filtered state validation)

---

## 4. Execution Commands

```bash
# Run all Playwright tests
npx playwright test --config=playwright/playwright.config.ts
```
