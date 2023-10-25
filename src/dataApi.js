import { defineStore } from 'pinia';
import axiosInstanse from './axios.js';

export const dataApi = defineStore({
    id: 'dataApi',
    state: () => ({
        items: null,
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: 0,
    }),
    getters: {
        getPaginatedData() {
            if (this.items !== null) {
                const startIndex = (this.currentPage - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;
                return this.items.slice(startIndex, endIndex)
            }
        }
    },
    actions: {
        async fetchDataFromAPI() {
            await axiosInstanse
                .get('/todos')
                .then((response) => {
                    this.updateItem(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updateItem(data) {
            this.items = data;
            this.totalItems = data.length;
        },
        setCurrentPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.setCurrentPage(this.currentPage - 1);
            }
        },
        goToNextPage() {
            if (this.currentPage * this.itemsPerPage < this.totalItems) {
                this.setCurrentPage(this.currentPage + 1);
            }
        },
    },
});
