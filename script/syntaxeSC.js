'use strict';

var syntaxeSC = {
	'SC.action':{
		syntaxe: 'SC.action()',
		definition: `C'est une action atomique au sens des SugarCubes. Cela veut dire qu’elle s’exécute intégralement de manière atomique au cours de l’instant ou l’instruction <code>SC.action</code> est activée par le moteur réactif.
		<br> SC.action() fait une action externe qui ne fait pas partie de SugarCubes : L’action est une fonction JavaScript.
		<br>Dans le cadre d’un cube (sorte d’objet réactif), l’action est une méthode de l’objet JavaScript associé.`,
		theme:'action' 
	},
	'SC.actionOn':{
		syntaxe: 'SC.actionOn(evt, actionDeclancheSiEvtPresent, actionDeclancheSiEvtAbsant, nbreDinstant)',
		definition: `<p>C'est une construction qui a intuitivement la sémantique suivante :</p> 
			<ul>
				<li>On regarde si une configuration événementielle est vérifiée (la configuration est le premier paramètre).</li>
				<li>Si la configuration est vraie à l’instant où cette instruction est exécutée on appelle la méthode passée en deuxième paramètre.</li>
				<li>Si la configuration est fausse alors on exécute le troisième paramètre.</li>
				<li>Le quatrième paramètre permet quant à lui de répéter l’opération en boucle sur un nombre d’intrants donné (par défaut 1 seul instant).</li> 
			</ul>`,
		theme:'action' 
	},
	'addProgram':{
		syntaxe: 'machineExecution.addProgram(objetSugarCubes)',
		definition: "Ajoute  un programme à la machine d'exécution",
		theme:'ajouter un programme' 
	},
	'SC.await':{
		syntaxe: 'SC.await(evt(s))',
		definition:`Attend un évenement ou une liste d'évenements mis en paramètre.`,
		theme:"",
	},
	'SC.cell':{
		syntaxe: '',
		definition:``,
		theme:"",
	},
	'SC.control':{
		syntaxe: '',
		definition:`C'est une instruction qui contrôle l'exécution d'un programme
		elle fait ce qu'on appelle communément du sous échantillonnage 
		en gros elle exécute pour un instant le programme contrôlé P si et seulement si l'événement de contrôle est présent.`,
		theme:"",
	},
	'SC.evt':{
		syntaxe: 'SC.evt("affichagePourDebug");',
		definition:`La valeur de SC.evt(...) permet la communication entre cube : C'est ce qui se trouve dans le paramètre qui ne sert qu'au debug.
		<br>Lorsqu'on genère(émet) un événement, tout les cubes sont au courant que l'evènement est présent à cet instant.`,
		theme:"",
	},
	'SC.generate':{
		syntaxe: 'SC.generate(evt, valeurAssocieAEvt, nbreDinstant)',
		definition: `C'est une instruction SugarCubes qui génère un événement à un instant précis. C’est à dire qu’elle « dit » que l’événement est présent à cet instant. Il s’agit là de la partie booléenne de l’information : un événement à chaque instant est soit présent (il a été émis) soit absent (personne ne l’a émis). On peut utiliser cette information booléenne dans plein de tests pour réagir à la présence ou l’absence d’un événement.
		<br>Mais un événement possède également une liste de valeurs associées à chaque émission ayant lieu au cours du même instant. C’est cette liste de valeurs qui sera traitée par les autres éléments en parallèle en particulier les instruction <code>SC.actionOn</code>.
		<code>SC.generate(evt, SC.my("fonction"))</code>
		<br>Ici on dit à l’instant ou cette instruction est exécutée par le moteur réactif on émet l’événement. L’événement sera donc présent à l’instant exact ou il est émis. Et tout le monde pourra le voir et réagir à la présence de cet événement de façon totalement déterministe.
		<br>L'événement ainsi généré va intéresser les autres objet. Mais ici on ne le fait qu’une fois au premier instant ce qui est ennuyeux puisqu’aux instants suivants cet événement n’est plus émis :
		<br>Donc si on veut émettre l’événement à chaque instant, il faudrait écrire :
		<code>SC.generate(evt, SC.my("fonction"), SC.forever);</code>`,
		theme:'' 
	},
	'SC.kill':{
		syntaxe: 'SC.kill(evt, instruction)',
		definition:`Execute l'instruction et si l'évènement arrive, l'instruction est interrompue`,
		theme:"",
	},
	'SC.machine':{
		syntaxe: 'SC.machine(int_nbreDeMilisecondesEntreChaqueDemarrageDEtape)',
		definition: ``,
		theme:'machine sugarCubes' 
	},
	'SC.my':{
		syntaxe: '',
		definition:`Permet de récupérer le champ d’un objet associé par un cube. Par exemple : 
		<code>SC.my("sc_requestDisplayFun");</code> permet de récupérer la méthode <code>sc_requestDisplayFun()</code> du canvas.
		<br>L’instruction <code>javascript SC.my()</code> réalise l’association à runtime (car à l’écriture du programme on ne connaît pas encore le cube dans lequel cette instruction va être exécutée et donc on ne connaît pas non plus l’objet javascript sur lequel il va falloir appeler la méthode )."
		<code>SC.action(SC.my("fonction")) </code> voir  SC.action()`,
		theme:"",
	},
	'SC.par':{
		syntaxe: 'SC.par(instruction1, instructionN,..)',
		definition:`Met en parallèle des instructions; nombre de paramètres variables`,
		theme:"instruction en parallèle",
	},
	'SC.pause':{
		syntaxe: 'SC.pause(nbreDePauses)',
		definition:`Sert à attendre l'étape suivante.
			<br><code>SC.pauseForever()</code> est un raccourcit de <code>SC.pause(SC.forever)</code>`,
		theme:"",
	},
	'SC.repeat': {
		syntaxe: 'SC.repeat()',
		definition:`Répète un certain nombre de fois les instructions des arguments placés en séquence. On peut utiliser la constante  pour une répétition infinie.
		<br>Exemple :
		<code>
			SC.repeat(SC.forever, actionToRepeat);
			SC.repeat(30, actionToRepeat); 
		</code>`
		<br> SC.repeat(N) peut se traduire par répète 30 fois :<code>
			SC.seq(
				actionToRepeat,
				SC.pause, //1 fois
				actionToRepeat,
				SC.pause,//2 fois
				...// encore 27 fois
				actionToRepeat//fin
			); 

		</code>`
		,
		theme:"",
	},
	'SC.seq':{
		syntaxe: 'SC.seq(instruction1, instruction2, ...,insstrucN)',
		definition:`Exscute les instructions les une après les autres comme dans les programmes habituels (python, JS...). On sort du parallélisme. (c'est l'inverse de SC.par(instruction1, instruction2, ...,insstrucN).
		<br>SC.seq est souvent utilisée à l'interieur de SC.par() ou remplacé par SC.repeat si on veut faire plusieurs SC.seq`,
		theme:"",
	},
	'SC.write':{
		syntaxe: 'SC.write(texte)',
		definition:``,
		theme:"",
	},
	//~ '':{
		//~ syntaxe: '',
		//~ definition:``,
		//~ theme:"",
	//~ },
	//~ '':{
		//~ syntaxe: '',
		//~ definition:``,
		//~ theme:"",
	//~ },
}

