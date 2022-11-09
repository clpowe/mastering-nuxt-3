<script lang="ts" setup>
	const props = defineProps({
		videoId: {
			type: Number,
			required: true
		}
	})
</script>

<template>
	<iframe
		width="560"
		height="315"
		:src="`https://player.vimeo.com/video/${props.videoId}`"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		title="Video content"
	></iframe>
</template>

<style scoped>
	iframe {
		border: 0px;
	}
</style>
