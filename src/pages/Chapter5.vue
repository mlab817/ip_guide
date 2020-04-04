<template>
  <q-page padding>
    <q-markdown :src="chapter5" />
  </q-page>
</template>

<script>
import chapter5 from '../markdowns/chapter-5.md';

export default {
  name: 'PageChapter5',
  data() {
    return {
      chapter5: chapter5
    }
  }
}
</script>
