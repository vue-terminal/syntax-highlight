<script lang="ts" setup>
import SyntaxHighlight from '@vue-termui/syntax-highlight'

const n = ref(10)
setInterval(() => {
  n.value--
  n.value < 0 && (n.value = 10)
}, 1000)

const code = computed(
  () => `
const n = ref(${n.value})
setInterval(()=> {
  n.value--
}, 1000)
`
)
</script>

<template>
  <Box
    :padding="2"
    :width="50"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    borderColor="blue"
    borderStyle="round"
  >
    <SyntaxHighlight :code="code" lang="js" />
  </Box>
</template>
