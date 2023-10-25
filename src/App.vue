<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="asyncIncrement">Async Increment</button>
    <button @click="asyncDecrement">Async Decrement</button>
    <p>Double Count: {{ doubleCount }}</p>
    <hr>
    <h1>Отримані дані в іншому сторі: {{ receivedData }}</h1>
    <button @click="sendDataToInfo">Надіслати дані</button>
    <div>
      <ul>
        <li v-for="item in getPaginatedData" :key="item.id">{{ item.title }}</li>
      </ul>
      <button @click="goToPreviousPage" :disabled="currentPage === 1">Previous Page</button>
      <button @click="goToNextPage" :disabled="currentPage * itemsPerPage >= totalItems">Next Page</button>
    </div>
    <router-view />
    <button @click="setRole('user')">User</button>
  </div>
</template>

<script>
import { useStore } from './store.js';
import { useSecondStore } from './info.js'
import { dataApi } from './dataApi.js'
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(useStore, ['increment', 'decrement', 'asyncIncrement', 'asyncDecrement', 'sendDataToInfo','setRole']),
    ...mapActions(dataApi, ['goToNextPage', 'goToPreviousPage', 'fetchDataFromAPI']),
  },
  computed: {
    ...mapState(useStore, ['count', 'doubleCount']),
    ...mapState(useSecondStore, ['receivedData']),
    ...mapState(dataApi, ['currentPage', 'items', 'itemsPerPage', 'totalItems']),
    ...mapState(dataApi, ['getPaginatedData'])
  },
  created() {
    this.fetchDataFromAPI()
  }
}
</script>

