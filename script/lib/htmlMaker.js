function createEltHtml (balise, texte){
	var b = document.createElement(balise);
	b.innerHTML = texte;
	return b;
}

function crateDicoSyntaxes(dico){
	var liste = document.createElement("dl");

	for (cle in dico){
		liste.append(createEltHtml ("dt", cle));
		liste.append(createEltHtml ("dd", dico[cle]["definition"]));
		console.log(dico[cle]);
	}
	return liste
}
