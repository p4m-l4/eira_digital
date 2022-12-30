<template>
	<div
		class="container-fluid"
		style="
			border-width: 0px;
			border-color: black;
			border-style: dashed;
			margin-top: 0vh;
			margin-bottom: 100px;
		"
	>
		<div
			class="container-fluid row"
			style="
				background-color: ;
				align-content: right;
				margin-top: 10vh;
				margin-bottom: 100px;
				background-image: url(../assets/topImage2.jpg);
				background-repeat: no-repeat;
				background-attachment: fixed;
				background-size: 100% 100%;
				box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
			"
		>
			<div
				class="col-5 d-flex align-items-center"
				style="
					color: black;
					font-weight: bolder;
					border-width: 0px;
					border-color: black;
					border-style: dashed;
					padding-left: 400px;
					margin-left: 0px;
					padding-right: 20px;
					opacity: 0.8;
					text-align: justify;
				"
			>
				<div class="card-body top-card">
					<h4 class="card-title" style="text-align: center">Technologies to Explore!</h4>
					<p
						class="card-text"
						style="
							text-decoration: none !important;
							margin-top: 20px;
							font-weight: lighter;
						"
					>
						New and evolving technologies are rapidly reshaping how we work—offering
						creative opportunities for developers who are willing to pivot and adopt new
						skills.
					</p>
				</div>
			</div>
			<div class="col-7">
				<img
					src="../assets/topImage2.jpg"
					class="img-fluid rounded-start top-image"
					style="
						border-width: 0px;
						border-radius: 0px;
						border-color: blue;
						border-style: dashed;
						margin-left: 0px;
						margin-right: 0px;
						padding-left: 0px;
						height: 500px;
						width: 1300px;
						align-self: right;
					"
					alt="Image"
				/>
			</div>
		</div>
		<div class="container-fluid" style="padding-left: 30vh; opacity: 0.6">
			<div
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				class="div row"
				style="margin-top: 5vh; height: 200px"
				:class="{ 'div-hover': hover }"
			>
				<h3 style="padding-bottom: 20px; text-align: left; padding-left: 600px">
					Programming Languages
				</h3>
				<div class="col-3 cell">
					<div class="div card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/python.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Python</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/kotlin.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Kotlin</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/swift.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Swift</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/go.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Go</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 5vh; height: 200px">
				<h3 style="padding-bottom: 20px; text-align: left; padding-left: 600px">
					Frameworks
				</h3>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/bootstrap.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Bootstrap</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/django.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Django</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 5vh; height: 200px">
				<h3 style="padding-bottom: 20px; text-align: left; padding-left: 600px">
					Databases and stores
				</h3>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/postgresql.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">PostgreSQL</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/kafka.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Kafka</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/redis.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Redis</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img src="" class="card-img-top" alt="Image" style="margin-left: 0px" />
						</div>
						<div class="card-body">
							<h5 class="card-title">RabbitMQ</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 5vh; height: 200px">
				<h3 style="padding-bottom: 20px; text-align: left; padding-left: 600px">
					Cloud Services
				</h3>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/amazon-aws.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">AWS</h5>
						</div>
					</div>
				</div>
			</div>

			<div class="row" style="margin-top: 5vh; height: 200px">
				<h3 style="padding-bottom: 20px; text-align: left; padding-left: 600px">
					Collaboration and Teamwork
				</h3>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/google.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Google</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/trello.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Trello</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/slack.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Slack</h5>
						</div>
					</div>
				</div>
				<div class="col-3 cell">
					<div class="card" style="width: 18rem; height: auto; border-width: 0px">
						<div class="container">
							<img
								src="../assets/asana.svg"
								class="card-img-top"
								alt="..."
								style="margin-left: 0px"
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title">Asana</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<FooterPrompt />
</template>

<script>
import FooterPrompt from "./FooterPrompt.vue";

export default {
	components: {
		FooterPrompt,
	},
};
</script>

<style>
.cell {
	border-color: black;
	border-width: 0px;
	border-style: ridge;
	height: 300px;
	width: 300px;
}
.mid-cell {
	border-color: black;
	border-width: 2px;
	border-style: ridge;
	height: 300px;
	width: 150px;
}
.div {
	background-color: rgb(253, 253, 253);
}
.div-hover {
	background-color: rgb(97, 97, 97);
	color: white;
}
</style>
