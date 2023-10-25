import { defineStore } from 'pinia';
import { useSecondStore } from './info.js'

export const useStore = defineStore({
    id: 'myStore',

    state: () => ({
        count: 0,
        data: 'Hello World!',
        role: ''
    }),

    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
        getInfo(state) {
            return state.item
        },
        getRole(state){
             return state.role
        }
    },

    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        asyncIncrement() {
            setTimeout(() => {
                this.increment();
            }, 3000);
        },
        asyncDecrement() {
            setTimeout(() => {
                this.decrement();
            }, 3000);
        },
        sendDataToInfo() {
            const infoStore = useSecondStore();
            infoStore.receiveData(this.data);
        },
        setRole(info){
            this.role = info
        }
    },
});
