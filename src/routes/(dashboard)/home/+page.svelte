<script lang="ts">
	import { Container } from 'sveltestrap';

	//Import Breadcrumb
	import Breadcrumbs from '$lib/common/Breadcrumb.svelte';
</script>

<div class="page-content">
	<Container fluid>
		<Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />
		<h1>Welcome to the Thunderdome</h1>
	</Container>
</div>
