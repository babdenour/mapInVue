<script lang="ts">
import MapC from '../components/MapC.vue';
import NavC from '../components/NavC.vue';
import EncardPubC from '../components/EncardPubC.vue';

export default {
	name: 'Map',
	components: {
		MapC,
		NavC,
		EncardPubC,
	},
};
</script>

<template>
	<div class="map-page">
		<encard-pub-c />
		<div class="nav">
			<nav-c />
		</div>
		<div class="map">
			<map-c />
		</div>
		<encard-pub-c />
	</div>
</template>

<style lang="scss">
.map-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: flex-start;
}
.nav {
	display: flex;
	justify-content: space-around;
	width: 97vw;
	margin: 0.3rem;
}
.map {
	background-color: rgba(223, 223, 223, 0.918);
	padding: 0.3rem;
	height: 50vh;
	width: 90%;
}
</style>
