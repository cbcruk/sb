import { ref } from 'vue'
import { Child } from './useComponent'

export interface Section {
  id: string
  name: string
  background: string
  backgroundType: string
  children: Child[]
}

export type Id = number

function useSection() {
  const section = ref(1)
  const sections = ref<Section[]>([
    {
      id: 'section1',
      name: '',
      background: '',
      backgroundType: '',
      children: [],
    },
  ])
  const addSection = () => {
    const next = sections.value.length + 1

    section.value = next
    sections.value.push({
      id: 'section' + next,
      name: '',
      background: '',
      backgroundType: '',
      children: [],
    })
  }

  return {
    section,
    sections,
    addSection,
  }
}

export default useSection
