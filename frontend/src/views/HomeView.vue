<script setup>
import Categories from '@/components/Categories.vue';
import Featured from '@/components/Featured.vue';
import Banners from '@/components/Banners.vue';
import LatestProducts from '@/components/LatestProducts.vue';
import BlogPosts from '@/components/BlogPosts.vue';

import {onMounted} from 'vue';

import {
    setBg,
    categoriesSlider,
    latestProductsSlider,
    productDiscountSlider,
    productDetailsSlider,
    rangerSlider,
    niceSelect,
    singleProduct
} from '@/assets/js/main.js';

onMounted(() => {
    setBg(),
    categoriesSlider(),
    latestProductsSlider(),
    productDiscountSlider(),
    productDetailsSlider(),
    rangerSlider(),
    niceSelect(),
    singleProduct();
});

</script>

<template>
  <Categories />

  <Featured />

  <Banners />

  <LatestProducts />

  <BlogPosts />
</template>
