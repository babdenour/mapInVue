<script lang="ts">
export default {
	name: 'NavC',
};
</script>

<template>
	<div class="nav">
		<router-link to="/map">
			<button class="nav__button">
				<img src="../assets/icone-gps.png" alt="gps" />
			</button>
		</router-link>

		<!-- recherche and map have to be hidden -->
		<router-link to="/list">
			<button class="nav__button">
				<img src="../assets/icone-liste.png" alt="logo" />
			</button>
		</router-link>

		<!-- active while List button not clicked -->
		<form action="" method="post">
			<input class="nav__input" name="recherche" placeholder="🔍" type="text" />
			<input class="nav__input" type="submit" />
		</form>
	</div>
</template>

<!-- autocomplet for the list, recherche active-->
<style lang="scss" scoped>
@import '../style/app.scss';
.nav {
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	justify-self: stretch;
	background-color: $blue-background;
	width: fit-content;
	border-radius: 1rem;
	padding: 0.3rem;

	&__button {
		margin: 0.3rem;

		img {
			width: 3rem;
			height: 3rem;
		}
	}

	&__input {
		height: 2.8rem;
		border: 3px solid $red-primary;
		border-radius: 0.3rem;
		padding: 0.3rem;
		margin: 0.3rem;
	}
}
</style>
