<template>
  <div class="card shadow-lg border-0 mt-5">
    <div class="card-body">
      <div class="row justify-center align-items-center">
        <div class="col-2">
          <img :src="user.avatar_url" alt="" class="img-fluid" />
        </div>
        <div class="col">
          <h1>{{ user.name }}</h1>
          <a
            target="_blank"
            rel="noopereferrer"
            :href="`${user.html_url}?tab=repositories`"
            class="btn btn-faded btn-sm hoverable"
          >
            <i class="fas fa-book"></i> {{ user.public_repos }} repositórios
          </a>
          <a
            target="_blank"
            rel="noopereferrer"
            :href="`${user.blog}`"
            class="btn btn-faded btn-sm hoverable"
          >
            <i class="fas fa-link"></i> {{ user.blog }}
          </a>

          <a
            target="_blank"
            rel="noopereferrer"
            :href="`https://twitter.com/${user.twitter_username}`"
            class="btn btn-faded btn-sm hoverable"
          >
            <i class="fab fa-twitter"></i> @{{ user.twitter_username }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    user: Object
  }
};
</script>
