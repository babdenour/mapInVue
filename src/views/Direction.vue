<script lang="ts">
import EncardPubC from '../components/EncardPubC.vue';

export default {
	components: { EncardPubC },
	name: 'Direction',
};
</script>

<template>
	<div class="me-diriger">
		<div class="top">
			<encard-pub-c />
		</div>
		<div class="center">
			<div class="me-diriger__logo">
				<img src="../assets/mapIn-logo-1.png" alt="logo" />
			</div>
			<div class="me-diriger__title">
				<h1>
					<router-link to="/map">me diriger</router-link>
				</h1>
				<!-- MOdal d'info user -->
				<!-- <ModalAuth /> -->
			</div>
		</div>
		<div class="bot">
			<encard-pub-c />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../style/app.scss';

.me-diriger {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: stretch;

	&__title {
		padding-bottom: 2vh;
		h1 {
			color: $red-primary;

			a {
				text-decoration: none;
				background-color: $blue-background;
				color: $red-primary;
				border-radius: 0.5em;
				border: 3px solid $red-secondary;
				padding: 0.7rem;
			}

			a:hover {
				border: 3px solid $red-primary;
				background-color: $red-secondary;
				color: $blue-background;
			}

			a:active {
				background-color: $blue-background;
				color: $red-primary;
			}
		}
	}

	&__logo {
		img {
			height: 25vh;
			width: 40vw;
		}
	}
}

.center {
	height: 100%;
	width: 100%;
}

.top {
	display: flex;
	align-items: flex-start;
}
.bot {
	display: flex;
	align-items: flex-end;
}
</style>
