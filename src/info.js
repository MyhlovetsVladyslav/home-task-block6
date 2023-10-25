import { defineStore } from 'pinia';


export const useSecondStore = defineStore({
    id: 'secondStore',
    state: () => ({
        receivedData: null,
    }),
    actions: {
        receiveData(data) {
            this.receivedData = data;
        },
    },
});
