<template>
  <div class="bs-checkbox-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'bs-checkbox-group',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>
