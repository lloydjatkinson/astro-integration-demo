export interface Foo {
	readonly bar: string;
	readonly qux: string;
}

export interface Element {
    readonly as?: keyof HTMLElementTagNameMap;
};

/**
 * 
 */
export type SnipcartProductStackable =
    | 'auto'
    | 'never'
    | 'always';

export interface SnipcartProductDimensions {
	readonly weightInGrams?: number;
	readonly lengthInCentimeters?: number;
	readonly heightInCentimeters?: number;
	readonly widthInCentimeters?: number;
};

export type CustomFields = {
    readonly name: string;
    readonly type?: string;
    readonly value: readonly string [];
};

export interface SnipcartProduct {
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
    readonly minimumQuantity?: number;
    readonly maximumQuantity?: number;
    readonly quantityStep?: number;
    readonly dimensions?: SnipcartProductDimensions;
    readonly customFields?: readonly CustomFields[];
    readonly stackable?: SnipcartProductStackable;
    readonly shippable?: boolean;
    readonly hasTaxesIncluded?: boolean;
    readonly taxes?: readonly string[];
};