<template>
  <q-page padding>
    <q-markdown :src="chapter2" />
  </q-page>
</template>

<script>
import chapter2 from '../markdowns/chapter-2.md';

export default {
  name: 'PageChapter2',
  data() {
    return {
      chapter2: chapter2
    }
  }
}
</script>
