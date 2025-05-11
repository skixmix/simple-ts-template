# TypeScript with Node.js and Jest Template

This is a simple Node.js template using TypeScript, Jest, Prettier, and Husky. It provides a solid foundation for building applications with automated testing, code formatting, and Git hooks.

## Structure

```
simple-ts-template/
├── src/                 # Source files
├── .husky/              # Husky git hooks
├── test-results/        # Test reports (e.g., HTML output from test runs)
├── dist/                # Compiled build output
├── .prettierrc          # Prettier configuration
├── .nvmrc               # Node.js version for NVM
├── package.json         # Project metadata and scripts
├── tsconfig.json        # Main TypeScript configuration
├── tsconfig.test.json   # TypeScript config specifically for tests
└── jest.config.ts       # Jest configuration
```

## Features

- **Node.js** with TypeScript
- **Jest** for testing
- **Prettier** for consistent code formatting
- **Husky** for Git hooks:
  - **pre-commit**: Automatically formats code before commit
  - **pre-push**: Runs tests before pushing to prevent broken code from being pushed

## How to run

### 1. Install NVM (Node Version Manager)

Ensure that you are using the right Node.js version by using **NVM**. Run the following command to switch to the correct version:

```bash
nvm use
```

The correct version of Node.js will be automatically selected based on the `.nvmrc` file in the project.

### 2. Install Dependencies

After setting the correct Node.js version, install the project dependencies:

```bash
npm install
```

This will install all dependencies, including Husky, Prettier, Jest, and any other required packages.

> The postinstall script will also automatically prepare Husky for it to work properly.

### 3. Running the Project

You can run the project using the following scripts:

- **Development**: Start the development server with file watching enabled.

  ```bash
  npm run dev
  # Or, if you want to debug
  npm run debug
  ```

- **Start**: Start the application without file watching.

  ```bash
  npm start
  ```

- **Build**: Clean and build the project.

  ```bash
  npm run build
  ```

## Testing

You can run the tests using the following commands:

- **Run Tests (without coverage)**: Run Jest tests without generating a coverage report.

  ```bash
  npm test
  ```

- **Run Tests with Coverage**: Run Jest tests and generate a coverage report.

  ```bash
  npm run test:coverage
  ```

- **Watch Tests**: Run Jest tests in watch mode. This allows tests to re-run automatically when files change.
  ```bash
  npm run test:watch
  ```

> Note: test reports and coverage reports will be saved in the `test-results` folder.

## License

This project is open source and available under the [MIT License](LICENSE).
