import { Section } from '../BuilderComponent/useSection'

interface Model {
  el: string
  type: null
  parallax: boolean
  game: null
  cnb: boolean
  caution: typeof caution | null
  components: Section[]
  footer: {
    fixed: boolean
    theme: string
  }
  headerButton: {
    cookie: {
      type: string
      key: string
      value: boolean
    }
    home: boolean
    event: boolean
    update: boolean
    sns: boolean
    theme: string
  }
  hashChange: boolean
  menu: boolean
  preventInitToPage: boolean
  preventMouseWheel: boolean
  topButton: boolean
  remote: typeof remote | null
}

export const caution = {
  el: '',
  template: '',
  noRule: false,
}

const footer = {
  fixed: false,
  theme: 'black',
}

const headerButton = {
  cookie: {
    type: '',
    key: '',
    value: false,
  },
  home: false,
  event: false,
  update: false,
  sns: false,
  theme: 'black',
}

export const remote = {
  title: '',
  home: false,
  coupon: false,
  nshop: false,
  active: false,
  template: '',
}

const model: Model = {
  el: '#promo-app',
  type: null,
  parallax: false,
  game: null,
  cnb: false,
  caution: null,
  components: [],
  footer,
  headerButton,
  hashChange: false,
  menu: false,
  preventInitToPage: false,
  preventMouseWheel: false,
  topButton: false,
  remote: null,
}

export default model
