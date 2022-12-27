<template>
	<NavBar />
	<BodyTechnologies/>
	
</template>

<script>
import NavBar from "./NavBar.vue";
import BodyTechnologies from "./BodyTechnologies.vue";

export default {
    name: "TechnologiesPage",

	components: {
		NavBar,
		BodyTechnologies,
	},
};
</script>

<style></style>
