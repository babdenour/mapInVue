<script lang="ts">
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();

	export let data;
	export let clear: boolean;
Afficher plus
message.txt
6 Ko
et le deuxieme c est la route
mais visiblement il part pas
﻿
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();

	export let data;
	export let clear: boolean;
	export let placeholder: string = "Country Name";

	let filteredDatas: string[] = [];
	let filterDatasNoBold: string[] = [];
	let searchInput: any;
	let inputValue: string = "";
	let highLightIndex: number = null;

	$: if (clear) clearInput();
	$: if (!inputValue) {
		filteredDatas = [];
		highLightIndex = null;
	}

	//To filter the research data in the dataList
	const filterDatas = (): string[] => {
		let storageArr: string[] = [];
		let dataNoBold: string[] = [];
		if (inputValue != "") {
			Object.keys(data).filter((key) => {
				if (key.toLowerCase().includes(inputValue.toLowerCase())) {
					dataNoBold = [...dataNoBold, key];
					storageArr = [...storageArr, makeMatchBold(key)];
				}
			});
		}
		filteredDatas = storageArr;
		filterDatasNoBold = dataNoBold;

		return filteredDatas;
	};

	//To see matching strings in list as bold letters
	const makeMatchBold = (str: string): string => {
		//TO find why first letter and not matched letters
		if (!str) return;
		let found = str.toLowerCase().match(inputValue.toLowerCase());
		let matched: string = str.substr(found.index, inputValue.length);
		let makeBold: string = `<strong>${matched}</strong>`;
		// replace part of (data name === inputValue) with strong tags
		let boldedMatch: string = str.replace(matched, makeBold);

		return boldedMatch;
	};

	//To remove the bold from the selecting list
	const removeBold = (str: string): string => {
		//replace < and > all characters between
		return str.replace(/<(.)*?>/g, "");
	};

	//To navigate in the list wiht keybord  and enter to send value
	const navigateListWithKeyBoard = (e: any): void => {
		//TODO add of scroll-focus in
		if (e.key === "ArrowDown" && highLightIndex <= filteredDatas.length - 1) {
			highLightIndex === null ? (highLightIndex = 0) : (highLightIndex += 1);
		} else if (e.key === "ArrowUp" && highLightIndex !== null) {
			highLightIndex === 0
				? (highLightIndex = filteredDatas.length - 1)
				: (highLightIndex -= 1);
		} else if (e.key === "Enter") {
			if (filteredDatas[highLightIndex]) {
				inputValue = inputValue;
				setInputVal(filteredDatas[highLightIndex]);
			} else if (e.key === "Enter" || filterDatasNoBold.includes(inputValue)) submitValue();
		} else {
			return;
		}
	};

	const setInputVal = (data: string): void => {
		inputValue = removeBold(data);
		filteredDatas = [];
		highLightIndex = null;
		document.getElementById("data-input").focus();
	};

	//To send the value from to parent
	const submitValue = (): void => {
		if (filterDatasNoBold.includes(inputValue)) {
			dispatch("submitValue", inputValue);
		} else {
			dispatch("submitValue", (inputValue = ""));
		}
	};

	//To clear the research input
	const clearInput = (): void => {
		inputValue = "";
		searchInput.focus();
	};
</script>

<svelte:window on:keydown={navigateListWithKeyBoard} />

<div class="container">
	<div class="container-top">
		<div class="autocomplete">
			<input
				id="data-input"
				type="text"
				{placeholder}
				bind:this={searchInput}
				bind:value={inputValue}
				on:input={filterDatas}
			/>
		</div>
		<button on:click={submitValue} type="submit">Envoyer</button>
	</div>
	<!-- FILTERED LIST OF Datas -->
	{#if filteredDatas.length > 0}
		<ul id="autocomplete-items-list">
			{#each filteredDatas as data, i}
				<li
					class="autocomplete-items"
					class:autocomplete-active={i === highLightIndex}
					on:click={() => setInputVal(data)}
				>
					{@html data}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<!-- TODO add the good css for the harmonisation  -->
<style lang="scss">
	@import "../../../style/theme.scss";

	.container {
		width: 100%;
	}
	.container-top {
		@include flex-y;
		flex-direction: row;
		justify-content: stretch;
	}
	div.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;
		width: 20rem;
		margin-right: 1rem;
	}
	input {
		border: 1px solid transparent;
		background-color: $lighter-grey;
		padding: 10px;
		font-size: 16px;
		margin: 0;
		border-radius: $m-rad;
		margin-right: 0.1rem;
	}
	input[type="text"] {
		background-color: $lighter-grey;
		width: 100%;
	}

	#autocomplete-items-list {
		position: relative;
		margin: 0;
		padding: 0;
		top: 0;
		width: 65%;
		max-height: 20rem;
		overflow: auto;
		border: 1px solid $light-grey;
		background-color: $light-grey;
	}

	li.autocomplete-items {
		list-style: none;
		border-bottom: 1px solid $light-grey;
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		top: 100%;
		left: 0;
		right: 0;
		padding: 10px;
		cursor: pointer;
		background-color: $white;
	}

	li.autocomplete-items:active {
		/*when navigating through the items using the arrow keys:*/
		background-color: $s-dark !important;
		color: $white;
	}
	li.autocomplete-items:hover {
		/*when hovering an item:*/
		background-color: $primary;
		color: $white;
	}
	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: $primary !important;
		color: $white;
	}
</style>
message.txt
6 Ko