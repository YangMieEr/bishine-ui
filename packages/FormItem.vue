<template>
  <div class="bs-form-item">
    <label class="bs-form-item__label" :style="{width: Form.labelWidth}">{{label}}</label>
    <div class="bs-form-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bs-form-item',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.bs-form-item{
  margin-bottom: 25px;
  &__label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}

</style>
