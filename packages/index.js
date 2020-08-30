import './icon/iconfont.css'
import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Switch from './Switch'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import Form from './Form'
import FormItem from './FormItem'

const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}

export default install
