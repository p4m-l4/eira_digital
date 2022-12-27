<template>
	<nav class="navbar navbar-expand-lg" style="border-width: 0px;border-color: blue;border-style: dashed;">
		<div class="container-fluid">
            <img alt="E logo" src="../assets/logo.png" class="navbar-brand" >
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<router-link to = "/">
                        <a class="nav-link active" aria-current="page" >Home</a>
                    </router-link>
					</li>
					<li class="nav-item">
                        <router-link to ='/technologies'>
						<a class="nav-link">Technologies</a>
                        </router-link>
					</li>
					<li class="nav-item">
						<router-link to = "/offer">
                            <a class="nav-link">Offer</a>
                        </router-link>
					</li>
				</ul>
				<div class="d-flex" role="search">
					<h5>Start A Project</h5>
                </div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	methods:{
		say(message) {
			alert(message)
		}
	}
};
// methods: {

// }
</script>

<style>
    a{
        text-decoration: none !important;
    }
    img{
        width: 70px;
        height: 70px;
        margin-left: 30vh;
        margin-right: 100px;
    }
    .nav-item{
        margin-left: 60px;
    }
    .collapse{
        margin-left: 40vh;
    }
    .navbar{
        margin-top:0vh;
        background-color: white;
    }
</style>
