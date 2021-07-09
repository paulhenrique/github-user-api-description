<template>
  <div class="container" v-if="loading">
    <div class="row min-vh-100 justify-content-center align-items-center">
      <div
        class="spinner-grow text-secondary"
        role="status"
        style="width: 5rem; height: 5rem;"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <Header :user="user" />
    <h4 class="mt-5 mb-3">Repositórios</h4>
    <ReposList :repos="repos" />
    <Pagination
      :currentPage="currentPage"
      @updateCurrentPage="updateCurrentPage"
      :totalRepos="user.public_repos"
      :itemsPerPage="itemsPerPage"
    ></Pagination>
  </div>
</template>
<script>
import github from "./services/github";
import Header from "./components/Header";
import ReposList from "./components/ReposList";
import Pagination from "./components/Pagination";
export default {
  name: "App",
  data: () => ({
    user: {},
    loading: true,
    reposURL: "",
    repos: [],
    currentPage: 1,
    itemsPerPage: 10
  }),
  components: {
    Header,
    ReposList,
    Pagination
  },
  mounted() {
    this.getUserInfo();
    this.getReposFromUser();
  },
  methods: {
    getUserInfo: async function() {
      const response = await github("");
      this.user = await response.data;
      this.loading = false;
    },
    getReposFromUser: async function() {
      const { data } = await github.get("/repos", {
        params: { per_page: this.itemsPerPage, page: this.currentPage }
      });
      this.repos = data;
    },
    updateCurrentPage: function(page) {
      this.currentPage = page;
      this.getReposFromUser();
    }
  }
};
</script>
