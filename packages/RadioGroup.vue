<template>
  <div class="bs-radio-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'bs-radio-group',
  provide () {
    return {
      RadioGroup: this
    }
  },
  // bs-radio-group接收到了value值，将来还需要触发当前组件的input事件
  props: {
    value: null
  }
}
</script>
