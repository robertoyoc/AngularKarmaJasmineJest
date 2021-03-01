const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).jest.+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  coverageDirectory: 'coverage/my-app'
};