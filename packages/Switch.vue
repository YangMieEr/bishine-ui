<template>
  <span class="bs-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="bs-switch__core" ref="core">
      <span class="bs-switch__button" />
    </span>
    <input class="bs-switch__input" :name="name" type="checkbox" :checked="value"/>
  </span>
</template>

<script>
export default {
  name: 'bs-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 等待父组件改完value值发生变化后更新dom
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss">
.bs-switch{
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    vertical-align: middle;
    transition: border-color .3s, background-color .3s;
    .bs-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition:  all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked{
    .bs-switch__core{
      border-color: #409eff;
      background-color: #409eff;
      .bs-switch__button{
        transform: translateX(20px);
      }
    }
  }
  &__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
</style>
