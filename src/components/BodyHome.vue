<template>
	<div class="content">
		<div class="row g-0" style="margin-top: 20vh">
			<div
				class="col-md-4 d-flex align-items-center"
				style="
					border-width: 0px;
					border-color: black;
					border-style: dashed;
					margin-left: 30vh;
					margin-right: 0px;
				"
			>
				<div class="card-body top-card">
					<h1 class="card-title" style="text-align: left">
						Leading software development company in Africa.
					</h1>
					<br />
					<p class="card-text" style="text-align: left">
						We partner with product owners and founders by developing products from
						scratch or growing the existing product
					</p>
				</div>
			</div>
			<div class="col-md-5">
				<img
					src="../assets/globe2.jpg"
					class="img-fluid rounded-start top-image"
					style="
						border-width: 0px;
						border-color: blue;
						border-style: dashed;
						margin-left: 0px;
					"
					alt="Image"
				/>
			</div>
		</div>

		<div
			class="row g-0"
			style="
				margin-top: 0vh;
				border-width: 0px;
				border-color: blue;
				border-style: dashed;
				background-color: white;
				color: black;
				height: 700px;
				padding-top: 100px;
			"
		>
			<div
				class="card col-4"
				style="
					width: 400px;
					height: 500px;
					margin-left: 200px;
					border-radius: 10px;
					background-color: white;
					border-width: 2px;
				"
			>
				<img
					src="../assets/globe2.jpg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 400px;
						margin-left: 0px;
						height: 400px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						Some quick example text to build on the card title and make up the bulk of
						the card's content. Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height: 500px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 2px;
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/globe2.jpg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 400px;
						margin-left: 0px;
						height: 300px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						Some quick example text to build on the card title and make up the bulk of
						the card's content. Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height: 500px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 2px;
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/globe2.jpg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 400px;
						margin-left: 0px;
						height: 400px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						Some quick example text to build on the card title and make up the bulk of
						the card's content. Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hover: false,
		};
	},
	methods: {},
};
</script>

<style>
.content {
	margin-top: 10vh;
	margin-bottom: 100px;
}
/* .card-body{
    max-width: 700px;
    margin-left: 20px;
} */
.top-card {
	padding-right: 0px;
	border-color: rgba(255, 255, 255, 0);
	margin: 0px;
}
.top-image {
	width: fit-content;
	background-color: white;
}
.card-body {
	border-color: rgba(255, 255, 255, 0);
	border-width: 2px;
}
.div {
	background-color: rgb(253, 253, 253);
}
.div-hover {
	background-color: rgb(97, 97, 97);
	color: white;
}
.image1 {
	max-width: 100px;
}
</style>
