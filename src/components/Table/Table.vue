<template>
	<div class="data-table-table">
		<table :class="tableClass" :style="tableStyle">
			<thead :class="theadClass">
				<tr>
					<th
						v-for="(column, i) in columns"
						:key="i"
						:data-sorting="column.sortingMode"
						:class="{ sortable: column.sortable, column.classes }"
						:style="column.styles"
						class="p-2"
						@click="$emit('sort-column', column)">
						<div class="column-content">
							<span>{{ column.title }}</span>
							<component
								:index="column.sortingIndex"
								:is="sortingIndexComponent"
								v-if="column.sortingIndex > 0"
							/>
							<component
								:is="sortingIconComponent"
								v-if="column.sortable"
							/>
						</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="isEmpty">
					<td :colspan="numberOfColumns" class="empty-table-cell">
						{{ emptyTableText }}
					</td>
				</tr>
				<tr v-for="(data, i) in dataDisplayed" :key="i" :class="data.trClasses">
					<td v-for="(column, j) in columns" :key="j" :class="data[column.key].tdClasses" class="p-2">
						<component
							v-if="column.component"
							v-bind:is="column.component"
							:data="data[column.key]"
							:column="column"
						/>
						<span v-else-if="typeof data[column.key] == 'object'" :style="data[column.key].styles" :class="data[column.key].classes">
							{{ data[column.key].text }}
						</span>
						<span v-else>{{ data[column.key] }}</span>
					</td>
				</tr>
			</tbody>
			<component
				v-if="footerComponent !== null"
				:is="footerComponent"
				v-bind="{ data, dataDisplayed, dataFiltered }"
			/>
		</table>
	</div>
</template>
<script src="./Table.js"></script>
<style src="./Table.scss" lang="scss"></style>
