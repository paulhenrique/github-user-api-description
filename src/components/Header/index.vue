<template>
  <div class="card shadow-lg border-0 mt-5">
    <div class="card-body">
      <div class="row justify-center align-items-center">
        <div class="col-4 col-md-2">
          <img
            :src="user.avatar_url"
            :alt="`Foto de perfil do ${user.name}`"
            class="img-fluid"
          />
        </div>
        <div class="col">
          <a
            :href="`${user.html_url}`"
            class="hoverable-link text-dark"
            title="Ver no github"
            target="_blank"
          >
            <h1>{{ user.name }}</h1>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Ver repositórios no github"
            :href="`${user.html_url}?tab=repositories`"
            class="btn btn-faded btn-sm"
          >
            <i class="fas fa-book"></i> {{ user.public_repos }} repositórios
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            title="Ver blog"
            :href="`${user.blog}`"
            class="btn btn-faded btn-sm"
          >
            <i class="fas fa-link"></i> {{ user.blog }}
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            title="Ver twitter do usuário"
            :href="`https://twitter.com/${user.twitter_username}`"
            class="btn btn-faded btn-sm"
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
