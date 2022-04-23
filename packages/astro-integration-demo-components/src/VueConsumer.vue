<template>
    <SnipcartProductBinding />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SnipcartProduct } from './types';
import SnipcartProductBinding from './SnipcartProductBinding.vue';

export default defineComponent({
    name: 'Consumer',

    components: {
        SnipcartProductBinding
    },

    data: () => ({

    })
});
</script>