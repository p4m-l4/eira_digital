<template>
	<div>
	<div class="content">
		<div class="row g-0" style="margin-top: 10vh">
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
					<h5 class="card-title">Experience and Expertise</h5>
					<p class="card-text">
						A developer commited to personal and organizational growth 
						through experimentation and teamwork.
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
				margin-top: 10vh;
				border-width: 0px;
				border-color: blue;
				border-style: dashed;
				background-color: #0085f2;
				color: white;
				opacity: 0.7;
				height: 600px;
				padding-top: 150px;
				padding-left: 50px;
			"
		>
			<div
				class="card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 200px;
					border-radius: 0px;
					background-color: #0085f2;
					border-width: 0px;
				"
			>
				<img
					src="../assets/business-launch.svg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 100px;
						height: 100px;
						align-self:center;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">Start-up Experience</h5>
					<p class="card-text" style="text-align:justify">
						Over 4 years of experience working in a startup environment with first-hand knowledge of the iterative nature, pace and dedication associated with building and developing an organization. 
						
					</p>
				</div>
			</div>
			<div
				class="card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 100px;
					border-radius: 0px;
					color: white;
					background-color: #0085f2;
					border-width: 0px;
				"
			>
				<img
					src="../assets/technology.svg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 100px;
						height: 100px;
						align-self:center;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">Technical capabilities</h5>
					<p class="card-text" style="text-align:justify">
						Experience with building and contributing to projects through different stages of the development process ie ideation,planning, designing, development and testing.
					</p>
				</div>
			</div>
			<div
				class="card col-4"
				style="
					width: 400px;
					height: 400px;
					margin-left: 100px;
					border-radius: 0px;
					background-color: #0085f2;
					border-width: 0px;
				"
			>
				<img
					src="../assets/communication.svg"
					class="card-img-top"
					alt="..."
					style="
						border-width: 0px;
						border-color: greenyellow;
						border-style: dashed;
						margin-bottom: 30px;
						max-width: 100px;
						margin-left: 100px;
						height: 100px;
						align-self:center;
					"
				/>
				<div class="card-body">
					<h5 class="card-title" style="text-align:center">Social Capabilities</h5>
					<p class="card-text" style="text-align:justify">
						A good team player who also has experience engaging with a vast number of stakeholders both within and outside the organization towards achieving organizational goals.
					</p>
				</div>
			</div>
		</div>
	</div>
	<FooterPrompt/>
	</div>
	
</template>

<script>
import FooterPrompt from "./FooterPrompt.vue"

export default {
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
.image1 {
	max-width: 100px;
}
</style>
