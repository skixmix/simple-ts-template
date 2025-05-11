export default {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec).ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }],
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true,
  coverageDirectory: "./test-results/coverage",
  coverageReporters: ["html", "text-summary"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "./test-results/full-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
