import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'swc-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 70,
      functions: 70,
      branches: 70
    }
  },
  silent: true
};

export default config;
