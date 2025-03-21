# Playwright Automation with Page Object Model (POM)

## 📌 Overview
This project implements automated UI testing using [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** pattern to enhance maintainability and scalability.

## 🛠 Tech Stack
- **Playwright** - Web automation framework
- **Node.js** - Runtime environment
- **TypeScript** - Strongly typed JavaScript
- **Jest** - Test runner

## 📂 Project Structure
```
📂 tests
 ├── 📂 pages              # Page Object classes
 │    ├── loginPage.ts     # Example: Login page POM
 │    ├── homePage.ts      # Example: Home page POM
 ├── 📂 specs              # Test cases
 │    ├── login.spec.ts    # Example: Login test
 ├── 📂 utils              # Helpers & configurations
 │    ├── testConfig.ts    # Test configuration setup
 ├── playwright.config.ts  # Playwright configuration
 ├── package.json          # Project dependencies
 ├── README.md             # Project documentation
```

## 🚀 Getting Started

### 1️⃣ Prerequisites
- Install **Node.js** (>=16.x)
- Install dependencies:
  ```sh
  npm install
  ```

### 2️⃣ Run Tests
- Run all tests:
  ```sh
  npx playwright test
  ```
- Run a specific test:
  ```sh
  npx playwright test tests/specs/login.spec.ts
  ```

### 3️⃣ Generate Test Report
- View HTML report:
  ```sh
  npx playwright show-report
  ```

## 🏗 Page Object Model (POM) Example
Example `LoginPage.ts`:
```ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}
```

Example `login.spec.ts`:
```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('testuser', 'password123');
  
  // Verify login success
  await expect(page).toHaveURL(/dashboard/);
});
```

## 📌 Execution command
- **Execute specific file**: `npx playwright test tests/escenario1.js  --headed`
- **Execute specific file**: `npx playwright test tests/escenario2.js  --headed`
- **Execute specific file**: `npx playwright test  --headed`

## 📝 Notes
- Ensure Playwright browsers are installed:
  ```sh
  npx playwright install
  ```
- Adjust `playwright.config.ts` for environment-specific settings.

## 📜 License
This project is licensed under the MIT License.
