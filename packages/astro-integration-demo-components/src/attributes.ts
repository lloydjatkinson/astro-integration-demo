import { SnipcartProductDimensions, SnipcartProductCustomField } from './types';

export const buildDimensionsAttributes = (dimensions: SnipcartProductDimensions) => {
    if (!dimensions) {
        return {};
    }
        
    const {
        weightInGrams,
        lengthInCentimeters,
        heightInCentimeters,
        widthInCentimeters,
    } = dimensions;

    return {
        ...(weightInGrams && {
            [`data-item-weight`]: weightInGrams,
        }),
        ...(lengthInCentimeters && {
            [`data-item-length`]: lengthInCentimeters,
        }),
        ...(heightInCentimeters && {
            [`data-item-height`]: heightInCentimeters,
        }),
        ...(widthInCentimeters && {
            [`data-item-width`]: widthInCentimeters,
        }),
    }
};

export const buildCustomFieldAttributes = (customFields: readonly SnipcartProductCustomField[]) => {
    return Object.assign({}, ...customFields.map((customField, index) => {
        const { name, options, type, required, placeholder } = customField;
        const oneBasedIndex = index + 1;

        return {
            [`data-item-custom${oneBasedIndex}-name`]: name,
            ...(options && {
                [`data-item-custom${oneBasedIndex}-options`]: options.join('|'),
            }),
            ...(type && {
                [`data-item-custom${oneBasedIndex}-type`]: type,
            }),
            ...(required && {
                [`data-item-custom${oneBasedIndex}-required`]: required,
            }),
            ...(placeholder && {
                [`data-item-custom${oneBasedIndex}-placeholder`]: placeholder,
            }),
        }
    }));
};