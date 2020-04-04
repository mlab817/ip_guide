<template>
  <q-page padding>
    <q-markdown :src="chapter4"/>
  </q-page>
</template>

<script>
import chapter4 from '../markdowns/chapter-4.md';

export default {
  name: 'PageChapter4',
  data() {
    return {
      chapter4: chapter4
    }
  }
}
</script>
