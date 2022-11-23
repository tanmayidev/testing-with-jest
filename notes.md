1. npm init
2. installed following as devDependencies using --save-dev
    * typescript
    * ts-node
    * @types/node
    * jest
    * ts-jest
    * @types/jest
3. Added jest.config.js file by referring to the jest configuration documentation
    *  By default, Jest can run without any config files, but it will not compile .ts files. To make it transpile TypeScript with ts-jest, we will need to create a configuration file that will tell Jest to use a ts-jest preset.
4. Added a tsconfig.json file for typescript
5. Github repo link - writing configuration launch.json 
    * https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests
6. Github repo link - istanbul ignore next, code coverage
    * https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md