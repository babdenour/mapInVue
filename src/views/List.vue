<script lang="ts">
import EncardPubC from '@/components/EncardPubC.vue';
import ListC from '../components/ListC.vue';
import NavC from '../components/NavC.vue';

export default {
	name: 'List',
	components: {
		ListC,
		NavC,
		EncardPubC,
	},
};
</script>

<template>
	<div class="list">
		<encard-pub-c />
		<div class="list__nav">
			<nav-c />
		</div>
		<div class="list__list">
			<list-c />
		</div>
		<encard-pub-c />
	</div>
</template>

<style lang="scss">
.list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: flex-start;

	&__nav {
		display: flex;
		justify-content: space-around;
		width: 97vw;
		margin: 0.3rem;
	}

	&__list {
		padding: 0.3rem;
		height: 50vh;
		width: 90%;
		margin-bottom: 0.6rem;
	}
}
</style>
