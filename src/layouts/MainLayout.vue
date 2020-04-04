<template>
  <q-layout view="lhh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-teal">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Guidebook on Market-Oriented Public Investment Programming
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
            title: 'Home',
            icon: 'home',
            link: '/'
        },
        {
          title: 'Chapter 1',
          caption: 'Background and Rationale',
          icon: 'school',
          link: '/chapters/1'
        },
        {
          title: 'Chapter 2',
          caption: 'Review of Planning and Investment Programming Practices and Methods',
          icon: 'school',
          link: '/chapters/2'
        },
        {
          title: 'Chapter 3',
          caption: 'Discussion of Basic Concepts',
          icon: 'school',
          link: '/chapters/3'
        },
        {
          title: 'Chapter 4',
          caption: 'The Market and Market-Oriented Public Investment Programming',
          icon: 'school',
          link: '/chapters/4'
        },
        {
          title: 'Chapter 5',
          caption: 'Understand the Setting',
          icon: 'school',
          link: '/chapters/5'
        },
        {
          title: 'Chapter 6',
          caption: 'Know your market',
          icon: 'school',
          link: '/chapters/6'
        },
        {
          title: 'Chapter 7',
          caption: 'Model the Chain and Identify Interventions',
          icon: 'school',
          link: '/chapters/7'
        },
        {
          title: 'Chapter 8',
          caption: 'Screening and Prioritization of Public Investments',
          icon: 'school',
          link: '/chapters/8'
        },
      ]
    }
  }
}
</script>
