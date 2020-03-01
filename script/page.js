var main = document.querySelector("main");

//=======================================================================
//					Chargement du site
//=======================================================================
var intro = `
	<section id= "intro">
		<h1>Introduction</h1>
		<p>Vous pouvez accéder à la <a href="http://jeanferdysusini.free.fr/index.php?action=SCJS" target="_balnk">page perso</a> de Jean-Ferdi Susini développeur de sugarCubesJS pour plus de détails.</p>
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
			<p>Voir le <a href="https://github.com/LordManta/SugarCubesJS" target="_blank">read-me</a> de Jean-Ferdy Susini sur github</p>
		</details>
		<details id= "scseq">
			<summary>Les instructions réactives</summary>
					<p>Un programme SugarCubesJS est une structure arborescente dont les nœuds sont des instructions réactives.</p>
			<p> Une instruction réactive est implantée par un objet JavaScript.
				<br>Pour chaque type d'instruction, une fonction permet de créer un objet implantant cette instruction :
				<br>Certaines ont plusieurs instructions réactives en paramètres comme par exemple SC.seq, SC.par, SC.kill.</p>
			<p>
				<code>SC.seq()</code> permet de créer une instruction séquence à partir d'instructions passé en paramètre à <code>SC.seq()</code> permettant de créer une séquence d'instructions :
			</p>
			<figure>
				<img src="images/arbreInstruction.svg"/>
				<figcaption>
					<pre><code>SC.seq(instruction1,instruction2,instruction3)</code></pre>
				</figcaption>
			</figure>
			<p>Ce chapitre est Réalisé à partir de <a href="http://jeanferdysusini.free.fr/index.php?action=SCJS" target="_balnk">page perso de Jean-Ferdi Susini</a> que j'ai réadapté pour les débutant(e)s</p>
		</details>
		<details id= "tuto">
			<summary>Tutos et démos sur SugarCubesJS</summary>
			<p><a target="_blank" href="https://github.com/vbatcnam/tuto_sugarCubes/blob/master/miniSweet/tuto.md">Les miniSweet</a> pour apprendre à programmer avec ScugarCubesJS. Niveau débutant.</p>
			<p><a target="_blank" href="https://github.com/vbatcnam/minimonde">Un mini monde</a> une démo de ce qu'il est possible de faire avec ScubesJS.</p>
			<p><a target="_blank" href="https://github.com/vbatcnam/touchesMusicale">Les touches musicales.</a> Une petite démo.</p>
			<p><a target="_blank" href="https://github.com/vbatcnam/casseBriqueSC">Un jeu de casse briques</a> réalisé avec Jean-Ferdy Susiny et Olivier Pons.</p>
			<p><a target="_blank" href="http://jeanferdysusini.free.fr/LibReact9.html">Fight club.</a> Démo réalisée par Jean-Ferdy Susini.</p>
			<p><a target="_blank" href="http://jeanferdysusini.free.fr/MeteorJS.php">Meteor.</a> Simulation d'un système planétaire réalisée par Jean-Ferdy Susini.</p>
			<p><a target="_blank" href="http://jeanferdysusini.free.fr/ProiePredateur.php">Prédateur proie.</a> Simulation réalisée par Jean-Ferdy Susini.</p>
			<p><a target="_blank" href="http://jeanferdysusini.free.fr/KeyboardTrainer.html">Keyboard Trainer.</a> réalisé par Jean-Ferdy Susini.</p>
			<p><a target="_blank" href="https://github.com/ponsatcnam/SCJSpedago">SCJSpedago</a> Une description étape par étape des implémentations des objets synchrones réactifs en Javascript réalisée par Olivier Pons</p>
		</details>
	</section>`
	
main.innerHTML = intro;
let codes = document.querySelectorAll("pre code");
for(pre of codes){hljs.highlightBlock(pre);}

//=======================================================================
//					Section  Intro
//=======================================================================
var lienVersIntro = document.getElementById("versIntro");
lienVersIntro.addEventListener("click", function(){main.innerHTML = intro});

//=======================================================================
//					Section  Syntaxe sugarCubes
//=======================================================================
var lienVersSyntaxeScubes = document.getElementById("versSyntaxeScubes");

lienVersSyntaxeScubes.addEventListener("click", function(){
	main.innerHTML = `
	<section id= "syntaxeScubes">
		<h1>Syntaxe de SugarCubesJS</h1>
		<section id= "recherche">
			<label for="chercheSyntaxesSC">Rechercher
				<input id ="chercheSyntaxesSC" type="search" name="q">
			</label>
			<button id="searchSyntaxeSC">Ok</button>
		</section>
		<section id= "lien ext">
			<p>Sur <a href="" targe="_blank">le site de Jean-Ferdy Susiny</a> vous avez des explictions plus en détail de la syntaxe et de la manière de les utiliser.</p>
		</section>
	</section>`

	var chercheSyntaxeSC = document.getElementById("searchSyntaxeSC")
	chercheSyntaxeSC.addEventListener("click", function(){
		var valeurDeRecherche = document.getElementById("chercheSyntaxesSC").value;
	});
	
	section = document.createElement("section");
	section.id="dico";
	section.append(crateDicoSyntaxes(syntaxeSC));
	main.append(section)
	
	let codes = document.querySelectorAll("pre code");
	for(pre of codes){hljs.highlightBlock(pre);}
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
