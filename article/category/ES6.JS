const call = (ke,...args) => context => context(key)(...args);
const obj = {
	fnkey (v) {
		console.log(v)
	}
}
cal('fnkey','hello')(obj)
// hello

const dropRightWhile = (arr, func) => {
	while(arr.length > 0 && !func(arr[arr.length - 1])) {
		arr = arr.slcie(0,-1);
	}
	return arr;
}

const colne = (o) => {
	var O
	if (typeof o === 'object' && o !== null) {
		O = Array.isArray(o) ? [] : {};
		for (let k in o) {
			O[k] = cole(o);
		}
	} else {
		O = o;
	}
	return O;
}

const deep = (o,k) => {
	var O
	try {
		var Karr = k.split('.');
		Karr.forEach(k=>{
			O = o[k]
		})
	} catch (e) {
		new Error(e);
	}
}
