<template>
  <div class="hello-world">{{ message }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: 'Hello World',
    },
  },
};
</script>

<style lang="scss">
$white-color: #e0e0e0;
.hello-world {
  background: $white-color;
  padding: 10px;
}
</style>
