import { TuiTextTransform } from 'vue-termui'
import { defineComponent, h, PropType, ref } from '@vue/runtime-core'
import { getHighlighter, Highlighter, Lang, Theme } from 'shiki'
import c from 'chalk'

const shiki = ref<Highlighter>()
let shikiLoading: Promise<void> | undefined

export const SyntaxHighlight = defineComponent({
  props: {
    theme: {
      type: String as PropType<Theme>,
      default: 'vitesse-dark',
    },
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String as PropType<Lang>,
      required: true,
    },
  },
  setup(props, { slots }) {
    if (!shikiLoading && !shiki.value) {
      shikiLoading = getHighlighter({
        theme: props.theme,
        langs: [props.lang],
      }).then((hl) => {
        shiki.value = hl
      })
    }

    const isLoading = ref(true)

    watch(
      () => [shiki.value, props.theme],
      () => {
        if (shiki.value) load(shiki.value)
      },
      { immediate: true }
    )

    function load(shiki: Highlighter) {
      isLoading.value = true

      Promise.all([
        shiki.loadTheme(props.theme),
        shiki.loadLanguage(props.lang),
      ])
        .catch()
        .finally(() => {
          isLoading.value = false
        })
    }

    return () =>
      h(
        TuiTextTransform,
        {
          transform: (text) => {
            if (isLoading.value) return text

            const tokens = shiki.value?.codeToThemedTokens(
              text,
              props.lang,
              props.theme
            )
            if (!tokens) return text

            const result = tokens
              .map((line) =>
                line
                  .map((token) =>
                    token.color
                      ? c.hex(token.color)(token.content)
                      : token.content
                  )
                  .join('')
              )
              .join('\n')

            return result
          },
        },
        () => slots.default?.() ?? props.code
      )
  },
})
