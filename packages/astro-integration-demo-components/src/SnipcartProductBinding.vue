<template>
    <div>
        Hello world2
    </div>
    <component :is="as">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SnipcartProduct } from './types';

type Test = {
    test: string;
};

export default defineComponent({
    name: 'Example',

    props: {
        as: {
            type: String as PropType<keyof HTMLElementTagNameMap>,
            required: false,
            default: 'div',
        },

        test: {
            type: Object as PropType<SnipcartProduct>,
            required: true,
            default: () => ({}),
        }
    },
});
</script>