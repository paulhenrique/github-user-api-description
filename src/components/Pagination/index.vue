<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li
        v-if="currentPage !== 1"
        :class="`page-item ${currentPage === 1 && 'disabled'}`"
        @click="goToPreviousPage"
      >
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          >Previous</a
        >
      </li>
      <li class="page-item disabled">
        <a class="page-link disabled" href="#">{{ currentPage }}</a>
      </li>
      <li
        v-if="maxPages !== currentPage"
        :class="`page-item ${maxPages === currentPage && 'disabled'}`"
      >
        <a class="page-link" @click="goToNextPage" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    currentPage: { type: Number, default: 1 },
    totalRepos: { type: Number },
    itemsPerPage: { type: Number }
  },
  computed: {
    maxPages: function() {
      return Math.round(this.totalRepos / this.itemsPerPage);
    }
  },
  methods: {
    goToNextPage: function() {
      if (this.maxPages === this.currentPage) return;
      this.$emit("updateCurrentPage", this.currentPage + 1);
    },
    goToPreviousPage: function() {
      if (this.currentPage === 1) return;
      this.$emit("updateCurrentPage", this.currentPage - 1);
    }
  }
};
</script>
