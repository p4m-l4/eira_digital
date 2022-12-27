<template>
	<div class="bottom">
		<div class="row statement container-fluid d-flex align-items-center">
			<div class="col-8">
				<h3>Enough talk, Let's build Something Together</h3>
			</div>
			<div class="col-4">
				<a class="btn btn-primary btn-lg" href="#" role="button">Link</a>
			</div>
		</div>
		<div
			class="container-fluid footer row"
			style="
				border-width: 0px;
				border-color: greenyellow;
				border-style: dashed;
				height: 30vh;
				background-color: white;
				color: black;
                ;
			"
		>
			<div
				class="col-4"
				style="border-width: 0px; border-color: yellow; border-style: dashed; margin-left: 100px; "
			>
				<h5 class="footer-heading">Want to work with us?</h5>
				<p style="width:500px">
					We build technology rich app and solutions which gives best user experience. We
					always use latest technologies and methodology to build the products. We are
					providing extensive support to our client in the areas of design, development
					and marketing.
				</p>
				<h5>Hire us today!</h5>
			</div>
			<div
				class="col-3"
				style="border-width: 0px; border-color: purple; border-style: dashed"
			>
				<h5 class="footer-heading1">Services</h5>
				<ul class="list">
					<li>UI/UX Design</li>
					<li>Web App Development</li>
					<li>Mobile App Development</li>
					<li>Website Design</li>
				</ul>
			</div>
			<div
				class="col-4"
				style="border-width: 0px; border-color: yellow; border-style: dashed"
			>
				<h5 class="footer-heading1">Academy</h5>
				<ul class="list">
					<li>Mobile App Academy</li>
					<li>Web Academy</li>
					<li>UI/UX Design Academy</li>
				</ul>
			</div>
		</div>
		<div class="row"></div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.statement {
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	height: 20vh;
	margin-top: 100px;
	margin-block: 50px;
    font-weight: bolder;
}
.footer {
}
.list {
	list-style: none;
	text-align:left;
}
.footer-heading{
	text-align:center;
}
.footer-heading1{
	text-align:left;
	margin-left: 30px;
}
</style>
