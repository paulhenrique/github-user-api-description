<template>
  <div class="container">
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
    },
    getReposFromUser: async function() {
      const { data } = await github.get("/repos", {
        params: { per_page: this.itemsPerPage, page: this.currentPage }
      });
      console.log(this.currentPage, data);
      this.repos = data;
    },
    updateCurrentPage: function(page) {
      console.log(page);
      this.currentPage = page;
      this.getReposFromUser();
    }
  }
};
</script>
