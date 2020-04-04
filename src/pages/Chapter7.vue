<template>
  <q-page padding>
    <q-markdown :src="chapter7"/>
  </q-page>
</template>

<script>
import chapter7 from '../markdowns/chapter-7.md';
export default {
  name: 'PageChapter7',
  data() {
    return {
      chapter7: chapter7
    }
  }
}
</script>
