<script lang="ts" setup>
	defineProps({
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
		:src="`https://player.vimeo.com/video/${videoId}`"
		title="Video player"
		style="border: 0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</template>
