<template>
  <q-page padding>
    <q-markdown :src="chapter6" />
  </q-page>
</template>

<script>
import chapter6 from '../markdowns/chapter-6.md';

export default {
  name: 'PageChapter6',
  data() {
    return {
      chapter6: chapter6
    }
  }
}
</script>
