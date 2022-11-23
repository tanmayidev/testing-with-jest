module.exports = {
    // refer to configuring jest documentation
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