# syntax-highlight

Syntax highlight component for [vue-termui](https://github.com/vue-terminal/vue-termui).

<div align="center">
	<br>
	<br>
	<img width="380"  src="./example.gif">
	<br>
	<br>
	<br>
</div>

## Install

```shell
npm install @vue-termui/syntax-highlight
```

## Usage

```html
<script lang="ts" setup>
  import { TuiBox } from 'vue-termui'
  import SyntaxHighlight from '@vue-termui/syntax-highlight'

  const code = `const hello = 'world'`
</script>

<template>
  <TuiBox>
    <SyntaxHighlight :code="code" />
  </TuiBox>
</template>
```

## Props

### code

- Type: `string`

Source code to highlight.

### lang

- Type: [Lang](https://github.com/shikijs/shiki/blob/main/docs/languages.md)

### theme

- Type: [Theme](https://github.com/shikijs/shiki/blob/main/docs/themes.md)<br>

## Credits

Syntax Highlight is based on [Shiki](https://github.com/shikijs/shiki)
