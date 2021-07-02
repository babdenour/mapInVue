<script lang="ts">
export default {
	name: 'NotFound',
	mounted(): void {
		// this.$router.push('/home');
		window.location.href = 'http://localhost:8083/#/';
	},
};
</script>

<template>
	<h1>Oops, it looks like the page you're looking for doesn't exist or you don't have acces.</h1>
</template>
