<script setup>
import Search from '@/components/Search.vue';
import Menu from '@/components/Menu.vue';
import Banner from '@/components/Banner.vue';
</script>
<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <Menu />
        <div class="col-lg-9">
          <Search />
          <Banner />
        </div>
      </div>
    </div>
  </section>
</template>