<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name:'JobDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { id: 1, title: 'Web Developer', details: 'lorem' },
                { id: 2, title: 'Web Designer', details: 'lorem' },
                { id: 3, title: 'UI|UX Designer', details: 'lorem' }
            ]
        }
    }
}
</script>

<style>
    .job h2 {
        background:#f4f4f4;
        padding:20px;
        border-radius:10px;
        margin:10px auto;
        max-width:600px;
        cursor:pointer;
        color:#444;
    }
    .job h2:hover {
        background:#ddd;
    }
    .job a {
        text-decoration:none;
    }
</style>