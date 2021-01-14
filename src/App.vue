<template>
  <router-view />
</template>

<script>
import { WOW } from "wowjs";
/**
 * @import @Global_Components
 */

export default {
  mounted() {
    new WOW({
      animateClass: "animate__animated",
      live: false,
    }).init();
  },
};
</script>
