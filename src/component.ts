import { TuiTextTransform } from 'vue-termui'
import type { PropType } from '@vue/runtime-core'
import { defineComponent, h } from '@vue/runtime-core'
import { highlight, Theme } from 'cli-highlight'

export const SyntaxHighlight = defineComponent({
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: false,
    },
    code: {
      type: String,
      required: true,
    },
    lang: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        TuiTextTransform,
        {
          transform: (text) =>
            highlight(text, { theme: props.theme, language: props.lang }),
        },
        () => slots.default?.() ?? props.code
      )
  },
})
