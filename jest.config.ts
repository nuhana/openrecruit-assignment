import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
 transform: {
    "^.+\\.(t|j)sx?$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tsconfig.jest.json" }
    ],
  },
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"],
};

export default config;
