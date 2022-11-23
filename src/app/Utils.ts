import { UrlWithParsedQuery, parse } from "url";

export class Utils {

    public static parseUrl(url: string): UrlWithParsedQuery{
        if (!url) {
            throw new Error('Empty url!');
        }
        return parse(url, true);
    }

    public static toUpperCase(arg: string): string {
        return arg.toUpperCase();
    }

    /*istanbul ignore next */ 
    // this can be used when you want to ignore a function or a class in the unit tests
    public static ignoreFunction(arg: string): string {
        return ''
    }
}