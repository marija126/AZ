<template>
	<osobna-scan>
	</osobna-scan>
	<podaci-upis>
	</podaci-upis>
</template>

<script>
import osobnaScan from '@/components/osobnaScan.vue';
import podaciUpis from '@/components/podaciUpis.vue';
export default {
	components: {
		'osobna-scan':osobnaScan,
		'podaci-upis':podaciUpis
	}
}
</script>