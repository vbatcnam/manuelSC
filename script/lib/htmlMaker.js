function createEltHtml (balise, texte){
	let b = document.createElement(balise);
	b.innerHTML = texte;
	return b;
}

function crateDicoSyntaxes(dico){
	let liste = document.createElement("dl");
	for (cle in dico){
		liste.append(createEltHtml ("dt", cle));
		liste.append(createEltHtml ("dd", dico[cle]["definition"]));
	}
	return liste
}
