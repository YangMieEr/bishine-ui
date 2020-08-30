<template>
<!-- 点击事件只对自身起作用，对child不起作用 -->
  <transition name="bs-dialog-fade">
    <div class="bs-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="bs-dialog" :style="{width, marginTop: top}">
        <div class="bs-dialog__header">
          <div class="bs-dialog__title">
            <slot name="title">
              <span class="bs-dialog__title">{{title}}</span>
            </slot>
          </div>
          <button class="bs-dialog__headerbtn" @click="handleClose">
            <i class="bs-icon-baseline-close"></i>
          </button>
        </div>
        <div class="bs-dialog__body">
          <slot/>
        </div>
        <div class="bs-dialog__footer" v-if="$slots.footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bs-dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-dialog-fade-enter-active{
  animation: fade .3s;
}

.bs-dialog-fade-leave-active{
  animation: fade .3s reverse;
}

@keyframes fade {
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 100;
    transform: translateY(0);
  }
}
.bs-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,.5);

  & .bs-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header{
      padding: 20px 20px 10px;
      .bs-dialog__title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .bs-dialog__headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .bs-icon-close {
          color: #909399;
        }
      }
    }

    &__body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &__footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .bs-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>
