<script>
	let inputEl;
	let isModalOpen = false;

	const openModal = () => {
		console.log('open modal');

		isModalOpen = true;
		inputEl.focus();
	};

	const closeModal = () => {
		console.log('close modal');

		isModalOpen = false;
	};

	function onKeyDown(event) {
		console.log('keyCode', event.keyCode);

		// 191 = /
		if (event.keyCode === 191 && !isModalOpen) {
			event.preventDefault();
			openModal();
		} else if (event.keyCode === 27) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<header>
	<div class="wrapper">
		<input bind:this={inputEl} on:focus={openModal} on:blur={closeModal} type="text" />
		{#if isModalOpen}
			<div class="modal">
				<p>modal</p>
			</div>
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		position: relative;
		padding: 32px;
		background-color: aquamarine;
	}

	.wrapper {
		width: 100%;
		position: relative;
	}

	input {
		border: 1.5px solid #000000;
		border-radius: 0px;
		width: 100%;
	}

	.modal {
		width: 100%;
		background: papayawhip;
		position: absolute;
	}
</style>
