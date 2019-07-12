'use strict';
//local storage
var Syntaxe = {
	'SC.machine':{
		syntaxe: 'SC.machine(int_nbreDeMilisecondesEntreChaqueDemarrageDEtape)',
		definition: '',
		theme:'machine sugarCubes' 
	},
	'addProgram':{
		syntaxe: 'addProgram(objetSugarCubes)',
		definition: '',
		theme:'ajouter un proramme' 
	},
	'':{
		syntaxe: '',
		definition: '',
		theme:'' 
	},
	'SC.action':{
		syntaxe: 'SC.action()',
		definition: "<p>SC.action() est une action atomique au sens des SugarCubes. Cela veut dire qu’elle s’exécute intégralement de manière atomique au cours de l’instant ou l’instruction <em>SC.action<em> est activée par le moteur réactif.<br>SC.action() fait une action externe qui ne fait pas partie de SugarCubes : L’action est une fonction JavaScript.<br>Dans le cadre d’un cube (sorte d’objet réactif), l’action est une méthode de l’objet JavaScript associé.</p>"
		theme:'' 
	},
	'SC.actionOn':{
		syntaxe: 'SC.actionOn(evt, actionDeclancheSiEvtPresent, actionDeclancheSiEvtAbsant, nbreDinstant)',
		definition: `<p>SC.actionOn() est une construction qui a intuitivement la sémantique suivante :</p> <ul><li>On regarde si une configuration événementielle est vérifiée (la configuration est le premier paramètre).</li><li>Si la configuration est vraie à l’instant où cette instruction est exécutée on appelle la méthode passée en deuxième paramètre.</li><li>Si la configuration est fausse alors on exécute le troisième paramètre.</li>
- Le quatrième paramètre permet quant à lui de répéter l’opération en boucle sur un nombre d’intrants donné (par défaut 1 seul instant). `,
		theme:'' 
	},
}

