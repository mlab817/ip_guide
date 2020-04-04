<template>
  <q-page padding>
    <q-markdown :src="chapter3"></q-markdown>

  </q-page>
</template>

<script>
import chapter3 from '../markdowns/chapter-3.md';

export default {
  name: 'PageChapter3',
  data() {
    return {
      chapter3: chapter3
    }
  }
}
</script>
