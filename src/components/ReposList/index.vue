<template>
  <span>
    <div
      class="mt-5 card shadow-lg border-0 p-3"
      v-for="repo in repos"
      :key="repo"
    >
      <div class="row">
        <div class="col">
          <h3>{{ repo.name }}</h3>
          <p>{{ repo.description }}</p>
          <i class="fas fa-code-branch"></i>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
export default {
  name: "ReposList",
  props: {
    repos: Array
  }
};
</script>
