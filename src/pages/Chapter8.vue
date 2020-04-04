<template>
  <q-page padding>
    <q-markdown :src="chapter8"/>
  </q-page>
</template>

<script>
import chapter8 from '../markdowns/chapter-8.md';

export default {
  name: 'PageChapter8',
  data() {
    return {
      chapter8: chapter8
    }
  }
}
</script>
