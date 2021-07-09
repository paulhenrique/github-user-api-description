<template>
  <div class="container">
    <Header :user="user" />
    <h4 class="mt-5 mb-3">Repositórios</h4>
    <ReposList :repos="repos" />
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/Header";
import ReposList from "./components/ReposList";
export default {
  name: "App",
  data: () => ({
    user: {},
    reposURL: "",
    repos: []
  }),
  components: {
    Header,
    ReposList
  },
  mounted() {
    this.getUserInfo();
    this.getReposFromUser();
  },
  methods: {
    getUserInfo: async function() {
      const response = await axios.get("https://api.github.com/users/laravel");
      this.user = await response.data;
    },
    getReposFromUser: async function() {
      const { data } = await axios.get(
        "https://api.github.com/users/laravel/repos",
        {
          params: { per_page: 5, page: 4 }
        }
      );
      this.repos = data;
    }
  }
};
</script>
