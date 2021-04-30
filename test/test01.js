function tiers(index) {

	let linea = "";
	let dibujo = "";

	for(let i = 1; i <= index; i++){
		for(let x = 1; x <= (index - i); x++){
			line += " ";
		}

		for(let z = 1; z <= i; z++){
			line += "*";
		}

		dibujo += linea;
		dibujo += "\n";
	}

	return dibujo;
}
module.exports = tiers;

