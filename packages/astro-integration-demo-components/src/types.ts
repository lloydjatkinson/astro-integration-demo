export interface Foo {
	readonly bar: string;
	readonly qux: string;
}

export type SnipcartProductDimensions = {
	readonly weightInGrams?: number;
	readonly lengthInCentimeters?: number;
	readonly heightInCentimeters?: number;
	readonly widthInCentimeters?: number;
};

export type SnipcartProduct = {
	readonly id: string;
    readonly name: string;
    readonly price: number;
    readonly url?: string | URL;
    readonly description?: string;
    readonly image?: string | URL;
    readonly categories?: readonly string[];
    readonly metadata?: object;
    readonly fileGuid?: string;
    readonly quantity?: number;
    readonly minimumQuanity?: number;
    readonly maximumQuanity?: number;
    readonly quantityStep?: number;
    readonly dimensions?: SnipcartProductDimensions;
};