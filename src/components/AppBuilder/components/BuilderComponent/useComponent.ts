import { Ref, ref } from 'vue'
import { Section, Id } from './useSection'

export enum ChildTypes {
  Texture = 'texture',
  Video = 'video',
  Youtube = 'youtube',
  Slide = 'slide',
  Layer = 'layer',
  Sequence = 'sequence',
  Viewer = 'viewer',
}

export interface Child {
  type: ChildTypes
  text: string
  class: string
}

interface Params {
  section: Ref<number>
  sections: Ref<Section[]>
  showModal: Ref<boolean>
}

function useComponent({ section, sections, showModal }: Params) {
  const defaultValue = () => ({
    type: ChildTypes.Texture,
    text: '',
    class: '',
  })
  const form = ref<Child>(defaultValue())
  const addComponent = (id: Id) => {
    form.value = defaultValue()

    sections.value[id - 1].children.push(form.value)

    showModal.value = false
  }
  const removeComponent = (targetIndex: number) => {
    const sectionIndex = section.value - 1

    sections.value = sections.value.map((sec, index) => {
      if (sectionIndex === index) {
        return {
          ...sec,
          children: sec.children.filter(
            (_child, index) => index !== targetIndex
          ),
        }
      }
      return sec
    })
  }

  return {
    form,
    addComponent,
    removeComponent,
  }
}

export default useComponent
