<script>
	let inputRef;
	let modalRef;
	let isModalOpen = false;

	const openModal = () => {
		console.log('open modal');

		isModalOpen = true;
		inputRef.focus();
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
		} else if (isModalOpen && event.keyCode === 40) {
			console.log('down');
			selectItem(true);
		} else if (isModalOpen && event.keyCode === 38) {
			console.log('up');
			selectItem(false);
		}
	}

	function selectItem(moveSelectDown) {
		const selectedEl = modalRef.querySelector('.selected');

		if (selectedEl) {
			selectedEl.classList.remove('selected');

			console.log('prev', selectedEl.previousElementSibling);
			console.log('next', selectedEl.nextElementSibling);

			if (moveSelectDown) {
				if (selectedEl.nextElementSibling) {
					// Select the next sibling
					selectedEl.nextElementSibling.classList.add('selected');
				} else {
					// Loop back to the beginning
					modalRef.firstChild.classList.add('selected');
				}
			} else {
				if (selectedEl.previousElementSibling) {
					// Select the prev sibling
					selectedEl.previousElementSibling.classList.add('selected');
				} else {
					// Loop back to the end
					modalRef.lastChild.classList.add('selected');
				}
			}
		} else {
			modalRef.firstChild.classList.add('selected');
		}
	}

	const mouseOver = (ev) => {
		ev.target.classList.add('selected');
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<header>
	<div class="wrapper">
		<input bind:this={inputRef} on:focus={openModal} on:blur={closeModal} type="text" />
		{#if isModalOpen}
			<div bind:this={modalRef} class="modal">
				<!-- <p onmouseover={mouseOver}>modal 1</p> -->
				<p class="item">modal 1</p>
				<p class="item">modal 2</p>
				<p class="item">modal 3</p>
				<p class="item">modal 4</p>
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
		height: 500px;
		background: papayawhip;
		position: absolute;

		.item:hover,
		:global(.selected) {
			background-color: red;
		}
	}
</style>
