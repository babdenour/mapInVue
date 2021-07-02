<script lang="ts">
export default {
	name: 'MapC',
	props: ['location'],
};
</script>

<template>
	<div class="map">
		<p>Carte</p>
	</div>
</template>

<style lang="scss" scoped>
@import '../style/app.scss';

.map {
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	p {
		color: $red-primary;
	}
}
</style>
