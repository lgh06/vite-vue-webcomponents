import { defineCustomElement } from 'vue'
import Element from './TitleComp.ce.vue'

// convert into custom element constructor
const CustomElement = defineCustomElement(Element)

// register
if(typeof window !== 'undefined'){
  window.customElements.define('title-comp', CustomElement)
}