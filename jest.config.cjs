/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Nếu bạn muốn sử dụng một file setup riêng

  "moduleNameMapper": {
    "\\.(s?css|less)$": "identity-obj-proxy",
    '^.+\\.(svg\\?react)$': 'jest-transformer-svg'
  }
};