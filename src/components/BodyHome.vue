<template>
	<div class="content">
		<div class="row g-0" style="margin-top: 20vh; box-shadow: (0, 0, 0, 0.45) 0px 25px 20px -20px ;">
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
					<div class="rect d-flex align-items-center" style="width:400px; height:50px; background-color:#0085f2; color:white;margin-top:30px">
						<h3 style="padding-left:10px;">Let's talk about your project</h3>
					</div>
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
		
		<h5 style="margin-top:200px;box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"><strong>Technologies I can use today</strong></h5>
		<div class="container-fluid" style="padding-left: 250px;">
		<div
			class="row g-0"
			style="
				margin-top: 0vh;
				border-width: 0px;
				border-color: blue;
				border-style: dashed;
				background-color: white;
				color: black;
				height: 500px;
				padding-top: 100px;

			"
		>
		
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height:400px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 0px;
					text-align: justify;
				"
				:class="{ 'div-hover': hover }">
				<img
					src="../assets/html_icon.png"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 0px;
						height: 100px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">HTML</h5>
					<p class="card-text">
						HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.
					</p>
				</div>
			</div>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height:400px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 0px;
					text-align:left
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/css_icon2.png"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 0px;
						height: 100px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">CSS</h5>
					<p class="card-text">
						CSS is a computer language for laying out and structuring web pages (HTML or XML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
					</p>
				</div>
			</div>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 0px;
					text-align:left
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/vuetify_icon.png"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 0px;
						height: 100px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">VueJs</h5>
					<p class="card-text">
						Vue.js is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces.
					</p>
				</div>
			</div>
		</div>
		</div>
		<div class="container-fluid" style="padding-left: 250px;">
		<div
			class="row g-0"
			style="
				margin-top: 0vh;
				border-width: 0px;
				border-color: blue;
				border-style: dashed;
				background-color: white;
				color: black;
				height: 500px;
				padding-top: 0px;
				align-content: center;
			"
		>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 0px;
					text-align:left
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/nodejs_logo.png"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 0px;
						height: 100px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">NodeJs</h5>
					<p class="card-text">
						Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code
					</p>
				</div>
			</div>
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 50px;
					border-radius: 10px;
					border-width: 0px;
					text-align:left
				"
				:class="{ 'div-hover': hover }"
			>
				<img
					src="../assets/nodejs_icon.png"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 0px;
						height: 100px;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">Javascript</h5>
					<p class="card-text">
						JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
					</p>
				</div>
			</div>
			
		</div></div>
		<FooterPrompt/>
	</div>
</template>

<script>
import FooterPrompt from "./FooterPrompt.vue"

export default {
	data() {
		return {
			hover: false,
		};
	},
	methods: {},

	components: {
		FooterPrompt
	}
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
