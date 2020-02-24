//=======================================================================
//					Section  Syntaxe simplifiée
//=======================================================================
var lienVersSyntaxeSimple = document.getElementById("versSyntaxeSimple");

lienVersSyntaxeSimple.addEventListener("click", function(){
	main.innerHTML = `
	<section id= "syntaxeSimple">
		<h1>Syntaxe simplifiée sugarCubesJS</h1>
		<nav id="lesSyntaxesSimple"></nav>
		<p>Cette syntaxe facilite l'utilisation de sugarCubes. 
		<br>Pour coder avec la syntaxe symplifiée de SugarCubesJS vous devez télécharger 
		<a href="https://github.com/cl4cnam/SugarCubesFacile/blob/masterHub/syntaxeSimplifieeSC.js" target="_blank">syntaxeSimplifieeSC.js</a> disponible sur github.</p>
		<p>Pour raccourcir je vais l'appeler "SCEasy"</p>
		<h2>Ce qui change avec SCEasy</h2>
		<p>Avec SugarCubes je devais créer des objets JS puis des cubes SC dans lesquels je mettait mes objets JS.
		<br>Ici, on crée un objet SCCube qui s’occupe de tout.</p>
		<pre><code class="javascript">
			class MaClasse extends SCCube{
				constructor(p1, pn){
					super();
					this.1 = p1;
					this.n = pn;
			}
		</code></pre>

		<h2>Action sur les événement</h2>
		<p>Pour appeler les fonctions de SugarCubes, j'utilise les syntaxes suivante : </p>
		<pre><code class="JavaScript ">
			$actionForever_descriptionAction(){}; // si l'action est forever
			$on_nomEvenement[_descriptionAction](){};
			$onNo_nomEvenement[_descriptionAction](){};
			$publicConst_nomEvenement() {<span class="key">return</span> valAEnvoyer}; //permet de faire un SC.generate()
			$publicVar_nomEvenement() {<span class="key">return</span> valAEnvoyer}; //permet de faire un SC.generate()//calcule à chaque instant
		</code></pre>
		<h2></h2>
		<p></p>
	</section>`
	let codes = document.querySelectorAll("pre code");
	for(pre of codes){hljs.highlightBlock(pre);}

});

