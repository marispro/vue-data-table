export default {
	name: "DataTableTable",
	props: {
		tableClass: String,
		theadClass: String,
		tableStyle: String,
		columns: Array,
		data: Array,
		dataDisplayed: Array,
		dataFiltered: Array,
		emptyTableText: String,
		footerComponent: [Object, String],
		isEmpty: Boolean,
		numberOfColumns: Number,
		sortingIconComponent: Object,
		sortingIndexComponent: Object,
	},
};
