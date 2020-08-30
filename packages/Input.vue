<template>
  <div class="bs-input" :class="{'bs-input--suffix': showSuffix}">
    <input
      class="bs-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password')  : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"/>
      <span class="bs-input__suffix">
        <i class="bs-input__icon bs-icon-baseline-close" v-if="clearable && value" @click="handleClear"/>
        <i class="bs-input__icon" :class="passwordVisible ? 'bs-icon-eye-blind' : 'bs-icon-eye'" v-if="showPassword" @click="passwordVisible = !passwordVisible"/>
      </span>
  </div>
</template>

<script>
export default {
  name: 'bs-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss">
.bs-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    width: 100%;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.235, 1);
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &--suffix{
    .bs-input__inner {
      padding-right: 30px;
    }
    .bs-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645, .045, .355, 1);
      }
    }
  }
}
</style>
