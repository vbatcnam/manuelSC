var main = document.querySelector("main");

//=======================================================================
//					Chargement du site
//=======================================================================
var intro = `
	<section id= "intro">
		<h1>Introduction</h1>
		<details id="CKOISC">
			<summary>Qu'est ce que SugarCubesJS ?</summary>
			<p>SugarCubes est un formalisme dérivée de la Programmation Synchrone comme le langage Esterel.
				<br>Il utilise le paradigme synchrone de Frédéric Boussinot  et permet d'écrire des programmes réactifs parallèles par-dessus Javascript.
				<br>On écrit des programmes dont l'exécution est découpée en une succession d'étapes.
				<br>Syntaxiquement, le langage propose deux opérateurs d'ordonnancement traités au même niveau : un opérateur de mise en séquence de sous programmes et un opérateur de mise en parallèle...</p>
			<p>La méthode d’exécution de SC, c'est de rythmer l’exécution par une série d'instants : 
				<br>A chaque instant, SC exécute un petit bout de code parallèle.</p>
			<a href="https://github.com/LordManta/SugarCubesJS/blob/master/README.md"target="blank">Explication plus en détail donnée par Jean-Ferdy Susini</a>
		</details>
		<details id="instantSC">
			<summary>Un instant SugarCubesJS ?</summary>
			<p></p>
			<a href="https://github.com/LordManta/SugarCubesJS/blob/master/Note.md" target="blank">Lire l'explication donnée par Jean-Ferdy Susini</a>
		</details>
		<details id= "KEPEFERSC">
			<summary>Que peut faire SugarCubesJS ?</summary>
			<p>SugarCubes permet de faire des programmes réactifs.</p>
			<p>SugarCubes permet de faire des actions en parallèle.</p>
		</details>
		<details id= "KEFOTIL">
			<summary>Que faut-il pour programmer en SugarCubesJS ?</summary>
			<p>Il suffit de télécharger <a target="_blank" href="http://jeanferdysusini.free.fr/SugarCubes.js">SugarCubes.js</a> ou de pointer vers son lien.</p>
			<pre><code> 
				&lt;script src="http://jeanferdysusini.free.fr/SugarCubes.js"&gt;
			</code></pre>
			<p>Vous pouvez également télécharger <a target="_blank" href="https://github.com/cl4cnam/SugarCubesFacile/blob/masterHub/syntaxeSimplifieeSC.js">SugarCubesFacile.js</a>. 
				<br>Cette syntaxe alternative permet une programmation plus aisée des SugarCubes.
		</details>
		<details id= "pagePrems">
			<summary>Mon premier script</summary>
			<pre><code>
				var monde = SC.machine(int_nbreDeMilisecondesEntreChaqueDemarrageDEtape);
				monde.addProgram(objetSugarCube_monObjet);
			</code></pre>
		</details>
		<details id= "tuto">
			<summary>Tutos sur SugarCubesJS</summary>
			<p><a target="_blank" href="https://github.com/vbatcnam/tuto_sugarCubes/blob/master/miniSweet/tuto.md">Les miniSweet</a> pour apprendre à programmer avec ScugarCubesJS. Niveau débutant.</p>
			<p><a target="_blank" href="https://github.com/ponsatcnam/SCJSpedago">SCJSpedago</a> Une description étape par étape des implémentations des objets synchrones réactifs en Javascript.</p>
			<p><a target="_blank" href="https://github.com/vbatcnam/minimonde">un mini monde</a> une démo de ce qu'il est possible de faire avec ScubesJS.</p>
			<p><a target="_blank" href="https://github.com/vbatcnam/casseBriqueSC">un casse briques réalisé avec sugarCubesJS</a></p>
		</details>
	</section>`
	
main.innerHTML = intro;
let codes = document.querySelectorAll("pre code");
for(pre of codes){hljs.highlightBlock(pre);}

//=======================================================================
//					Section  Intro
//=======================================================================
var lienVersIntro = document.getElementById("versIntro");
lienVersIntro.addEventListener("click", function(){
	main.innerHTML = intro});

//=======================================================================
//					Section  Syntaxe sugarCubes
//=======================================================================
var lienVersSyntaxeScubes = document.getElementById("versSyntaxeScubes");

lienVersSyntaxeScubes.addEventListener("click", function(){
	main.innerHTML = `
	<section id= "syntaxeScubes">
		<h1>Syntaxe de SugarCubesJS</h1>
		<label for="chercheSyntaxesSC">Rechercher
			<input id ="chercheSyntaxesSC" type="search" name="q">
		</label>
		<button id="searchSyntaxeSC">Ok</button>
	</section>`

	var chercheSyntaxeSC = document.getElementById("searchSyntaxeSC")
	chercheSyntaxeSC.addEventListener("click", function(){
		var valeurDeRecherche = document.getElementById("chercheSyntaxesSC").value;
	});
	
	section = document.createElement("section");
	section.id="dico";
	section.append(crateDicoSyntaxes(syntaxeSC));
	main.append(section)
	
});

//=======================================================================
//					Section  Syntaxe sugarCubes python
//=======================================================================
var lienVersSyntaxeScubesPython = document.getElementById("versSyntaxeScubesPython");
lienVersSyntaxeScubesPython.addEventListener("click", function(){
	main.innerHTML = `
	<section id= "syntaxeSCPython">
		<h1>Syntaxe sugarCubes python</h1>
		<nav id="lesSyntaxesSCPython"></nav>
		<p>Pour coder avec SugarCubes python vous devez télécharger <a href="https://github.com/cl4cnam/SugarCubesPython/blob/masterHub/SugarCubes.py" target="_blank">sugarCubes.py</a> disponible sur github.</p>
		
		<a href="https://github.com/cl4cnam/SugarCubesPython" target="_blank">Le code de sugarCubes python sur github</a>
		
	</section>`

});

//=======================================================================
//					Section sugarCubes java
//=======================================================================
var lienVersScubesJava = document.getElementById("versScubesJava");
lienVersScubesJava.addEventListener("click", function(){
	main.innerHTML = `
	<section id= "sCJava">
		<hgroup>
			<h1>SugarCubes Java</h1>
			<img src="images/SugarCubes.gif">
		</hgroup>
		<p>SugarCubes a été initialement écrit pour java dans les années 90.</p>
		<ul>
		<li><a href="http://jeanferdysusini.free.fr/index.php?action=SCread&ver=5.0" target="_blank">Un aperçu de sugarCubes java</a></li>
		<li><a href="http://jeanferdysusini.free.fr/v5.0/jdoc/index.html" target="_blank">Le manuel de référence avec la syntaxe de sugarCubes java</a></li>
		<li><a href="http://jeanferdysusini.free.fr/index.php?action=SC" target="_blank">Le site de J-F Susini pour plus de détail</a></li>
		</ul>
	</section>`
});
