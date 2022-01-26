<template>
	<div class="data-table-search-filter">
		<!--<span>{{ searchText }}</span>-->
		<input type="search" class="form-control form-control-sm form-input-bordered" :placeholder="searchText" :value="search" @input="$emit('set-search')" />
	</div>
</template>
<script src="./SearchFilter.js"></script>
<style src="./SearchFilter.scss" lang="scss"></style>
