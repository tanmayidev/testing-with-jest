/** Typescript Jest Configuration file */
// Deleted the jest.config.js file 
// This file can be added in multiple places when we need different configurations
// We can also have a single file to have all the common configurations at one place
// Example of this can be seen in nx mono repo

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: ['<rootDir>/src'],
    transform: { 
        '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: [],
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true, // get more explanation in console
    /* Coverage: config, collectCoverageFrom, Statements, Branches, Functions, Lines */
    // this creates a coverage folder and gives all the information about statements, branc, functions, lines and uncovered lines
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
}

export default config;