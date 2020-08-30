<template>
  <label class="bs-checkbox" :class="{'is-checked': isChecked}">
    <span class="bs-checkbox__input">
      <input type="checkbox" class="bs-checkbox__original" v-model="model" :value="label" />
      <span class="bs-checkbox__inner"></span>
    </span>
    <span class="bs-checkbox__label">
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'bs-checkbox',
  props: {
    label: {
      type: [Number, String, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      },
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style  lang="scss" scoped>
.bs-checkbox{
  margin-right: 30px;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  &__input{
    white-space: nowrap;
    display: inline-block;
    cursor: pointer;
    outline: none;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .bs-checkbox__inner{
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46); ;
      &:after{
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .bs-checkbox__original{
      opacity: 0;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      outline: none;
      z-index: -1;
    }
  }
  &__label{
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
  &.is-checked{
    .bs-checkbox__input{
      .bs-checkbox__inner{
        background-color: #409eff;
        border-color: #409eff;
        &::after{
          transform: rotate(45deg);
        }
      }
    }
    .bs-checkbox__label{
      color: #409eff;
    }
  }
}
</style>
