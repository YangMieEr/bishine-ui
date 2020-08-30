<template>
  <button
    class="bs-button"
    :class="[`bs-button--${type}`,  {'is-plain': plain, 'is-round': round, 'is-disabled': disabled, 'is-circle': circle}]"
    @click="handleClick"
    :disabled="disabled">
    <i v-if="icon" :class="icon"/>
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  name: 'bs-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;

  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,&:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &.is-plain{
    &:hover,&:focus{
      color: #409eff;
      background-color: #fff;
      border-color: #409eff;
    }
  }

  &--primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,&:focus{
      color: #fff;
      background-color: #66b1ff;
      border-color: #66b1ff;
    }

    &.is-plain{
      color: #409eff;
      background-color: #fff;
      border-color: #b3d8ff;
      &:hover,&:focus{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
    }
  }

  &--success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,&:focus{
      color: #fff;
      background-color: #85ce61;
      border-color: #85ce61;
    }

    &.is-plain{
      color: #67c23a;
      background-color: #f0f9eb;
      border-color: #67c23a;

      &:hover,&:focus{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
      }
    }
  }

  &--info{
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,&:focus{
      color: #fff;
      background-color: #a6a9ad;
      border-color: #a6a9ad;
    }

    &.is-plain{
      color: #909399;
      background-color: #f4f4f5;
      border-color: #d3d4d6;

      &:hover,&:focus{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
      }
    }
  }

  &--warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,&:focus{
      color: #fff;
      background-color: #ebb536;
      border-color: #ebb536;
    }

    &.is-plain{
      color: #e6a23c;
      background: #fdf6ec;
      border: #f5dab1;
      &:hover,&:focus{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
      }
    }
  }

  &--danger{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,&:focus{
      color: #fff;
      background-color: #f78989;
      border-color: #f78989;
    }

    &.is-plain{
      color: #f56c6c;
      background-color: #fef0f0;
      border-color: #fbc4c4;

      &:hover,&:focus{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
    }
  }

  &.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.is-disabled{
    cursor: not-allowed;
  }

  &.is-circle{
    padding: 12px;
    border-radius: 50%;
  }

  & [class*=bs-icon-]+span {
    margin-left: 5px;
  }
}
</style>
