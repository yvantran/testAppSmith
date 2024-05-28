export default {
	myVar1: [],
	myVar2: {},

	getOptions(data) {
		return Api1.data.filter((obj) => obj.name.startsWith('ELECTRICITE_PART_FIXE_'))
	},

	getFormattedOptions(data) {
		const options = this.getOptions(data);
		return options.map( (obj) =>{  return   {'label': obj.name, 		'value': obj.name } })
	},

	getCharacs(option) {
		const characs = option.productSpecification.characteristics;
		const truc = this.getOptions(Api1.data)[0].productSpecification
		.characteristics;
		console.log('truc ', truc);
		console.log('truc 2 ', truc.map( (obj) =>{  return   {'label': obj.name, 		
		'value': obj.characteristicValues } }));
		return characs.map( (obj) =>{  return   {'label': obj.name, 		
		'value': obj.characteristicValues } })
	},
}