<script lang="ts">
import ListItems from '../utils/list';

export default {
	name: 'ListC',
	emits: [],

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	data() {
		return {
			showAlphabetList: false,
			showBrandList: false,
			listItems: ListItems,
		};
	},
	methods: {
		handleLetterClick(letterSelected: string): void {
			console.log('letter selected: ', letterSelected);
		},
	},
	computed: {},
	watch: {},
};
</script>

<template>
	<div class="list">
		<div class="list__div-category">
			<ul v-for="list in listItems" :key="list.id" :name="list.category">
				<h4 @click="showAlphabetList = !showAlphabetList">{{ list.category }} ⬇</h4>
				<br />
				<div v-show="showAlphabetList">
					<ul v-for="items in list.alphabet" :key="items.id" :name="items.letter">
						<div class="list__div-category__letters">
							<br />
							<h5 @click="showBrandList = !showBrandList">{{ items.letter }}</h5>
							<div v-show="showBrandList" class="list__div-category__letters__brands">
								<li
									@click="handleLetterClick(item)"
									v-for="item in items.brand"
									:key="item.id"
									:name="item"
								>
									<a :href="'/#/map/' + item">{{ item }}</a>
								</li>
							</div>
						</div>
					</ul>
					<br />
				</div>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../style/app.scss';

h4 {
	margin: 40px 0 0;
}

h5 {
	font-weight: bolder;
	margin-bottom: 0.5rem;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0.2rem;
	&:hover {
		transform: scale(1.2);
	}
}

a {
	color: #42b983;
}

.list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	p,
	li {
		color: $red-primary;
		font-weight: bold;
		list-style-type: none;
	}

	&__div-category {
		overflow: auto;

		&__letters {
			display: flex;
			flex-direction: column;
			align-items: center;

			&__brands {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}
}
// transition https://fr.vuejs.org/v2/guide/transitions.html
</style>
