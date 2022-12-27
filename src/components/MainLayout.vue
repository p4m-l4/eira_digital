<template>
	<div>
		<HeaderSection />
		<BodySection />
		<FooterSection />
	</div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import BodySection from "./BodySection.vue";
import FooterSection from "./FooterSection.vue";

export default {
	name: "MainLayout",

	components: {
		HeaderSection,
		BodySection,
		FooterSection,
	},
	methods: {},
};
</script>

<style></style>
