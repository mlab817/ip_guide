<template>
  <q-page padding>
    <q-markdown :src="chapter1"/>
  </q-page>
</template>

<script>
import chapter1 from '../markdowns/chapter-1.md';

export default {
  name: 'PageChapter1',
  data() {
    return {
      chapter1: chapter1
    }
  }
}
</script>
