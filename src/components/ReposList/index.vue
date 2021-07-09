<template>
  <span>
    <div
      class="mb-5 card shadow-lg border-0 p-3"
      v-for="repo in repos"
      :key="repo"
    >
      <div class="row">
        <div class="col">
          <a
            :href="repo.html_url"
            target="_blank"
            class="link-dark hoverable-link"
          >
            <h3 class="d-inline">{{ repo.name }}</h3>
          </a>
          <p class="text-secondary">{{ repo.description }}</p>

          <a
            :href="`${repo.html_url}/network/members`"
            class="btn btn-sm"
            target="_blank"
          >
            <i class="fas fa-code-branch"></i> {{ repo.forks }}
          </a>

          <a
            :href="`${repo.html_url}/watchers`"
            class="btn btn-sm"
            target="_blank"
          >
            <i class="fas fa-eye"></i> {{ repo.watchers_count }}
          </a>

          <a class="hoverable-link text-secondary" href="">Updated {{ timeSince(repo.updated_at) }} ago</a>
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
  },
  methods: {
    timeSince: function(date) {
      date = new Date(date);
      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }
  }
};
</script>
<style lang="scss">
.hoverable-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
