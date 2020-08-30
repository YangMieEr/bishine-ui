<template>
  <div class="bs-form">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'bs-form',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
