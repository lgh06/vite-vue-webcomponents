import { defineCustomElement } from 'vue'
import Element from './CardComp.ce.vue'

// convert into custom element constructor
const CustomElement = defineCustomElement(Element)

// register
if(typeof window !== 'undefined'){
  window.customElements.define('card-comp', CustomElement)
}