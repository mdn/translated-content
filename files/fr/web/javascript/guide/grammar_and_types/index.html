---
title: Types et grammaire
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Guide/Grammar_and_types
original_slug: Web/JavaScript/Guide/Types_et_grammaire
---
<div> {{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs")}}</div>

<p>Ce chapitre décrit les bases de la grammaire et des types de données JavaScript.</p>

<h2 id="Les_bases_du_langage">Les bases du langage</h2>

<p>JavaScript emprunte la plupart des éléments de sa syntaxe à Java, C et C++ mais sa syntaxe est également influencée par Awk, Perl et Python.</p>

<p>JavaScript est <strong>sensible à la casse</strong> et utilise l'ensemble de caractères <strong>Unicode</strong>. On pourrait donc tout à fait utiliser le mot früh comme nom de variable :</p>

<pre class="brush: js">var früh = "toto";
typeof Früh; // undefined car JavaScript est sensible à la casse
</pre>

<p>En JavaScript, les instructions sont appelées ({{Glossary("Statement", "statements")}}) et sont séparées par des points-virgules.</p>

<p>Il n'est pas nécessaire d'inclure un point-virgule si l'on écrit une instruction sur une nouvelle ligne. Mais si vous voulez écrire plus d'une déclaration sur une seule ligne, alors elles doivent être séparées par un point-virgule. Ceci étant dit, la bonne pratique est d'inclure un point-virgule après chaque instruction. Les espaces, les tabulations et les caractères de nouvelles lignes sont considérés comme des blancs. Il existe aussi un ensemble de règles pour ajouter automatiquement des points-virgules à la fin des instructions (<a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Insertion_automatique_de_points-virgules">ASI</a> pour<em> Automatic Semicolon Insertion</em>). Cependant, il est conseillé de toujours ajouter des points-virgules à la fin des instructions afin d'éviter des effets de bord néfastes.</p>

<p>Le texte d'un code source JavaScript est analysé de gauche à droite et est converti en une série d'unités lexicales, de caractères de contrôle, de fins de lignes, de commentaires et de blancs. ECMAScript définit également certains mots-clés et littéraux. Pour plus d'informations, voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">la grammaire lexicale de JavaScript</a> dans la référence JavaScript.</p>

<h2 id="Commentaires">Commentaires</h2>

<p>La syntaxe utilisée pour <strong>les commentaires</strong> est la même que celle utilisée par le C++ et d'autres langages :</p>

<pre class="brush: js">// un commentaire sur une ligne

/* un commentaire plus
   long sur plusieurs lignes
 */

/* Par contre on ne peut pas /* imbriquer des commentaires */ SyntaxError */
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Vous pourrez également rencontrer une troisième forme de commentaires au début de certains fichiers JavaScript comme <code>#!/usr/bin/env node</code>. Ce type de commentaire indique le chemin d'un interpréteur JavaScript spécifique pour exécuter le script. Pour plus de détails, voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Commentaire_d'environnement_(hashbang)">les commentaires d'environnement</a>.</p>
</div>

<h2 id="Déclarations">Déclarations</h2>

<p>Il existe trois types de déclarations de variable en JavaScript.</p>

<dl>
 <dt>{{jsxref("Instructions/var", "var")}}</dt>
 <dd>On déclare une variable, éventuellement en initialisant sa valeur.</dd>
 <dt>{{jsxref("Instructions/let", "let")}}</dt>
 <dd>On déclare une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.</dd>
 <dt>{{jsxref("Instructions/const", "const")}}</dt>
 <dd>On déclare une constante nommée, dont la portée est celle du bloc courant, accessible en lecture seule.</dd>
</dl>

<h3 id="Variables">Variables</h3>

<p>Les variables sont utilisées comme des noms symboliques désignant les valeurs utilisées dans l'application. Les noms des variables sont appelés <em>identifiants</em>. Ces identifiants doivent respecter certaines règles.</p>

<p>Un identifiant JavaScript doit commencer par une lettre, un tiret bas (_) ou un symbole dollar ($). Les caractères qui suivent peuvent être des chiffres (0 à 9).<br>
À noter : puisque Javascript est sensible aux majuscules et minuscules: les lettres peuvent comprendre les caractères de « A » à « Z » (en majuscule) mais aussi les caractères  de « a » à « z » (en minuscule).</p>

<p>On peut aussi utiliser la plupart lettres Unicode ou ISO 8859-1 (comme å et ü, pour plus de détails, voir <a href="https://mathiasbynens.be/notes/javascript-identifiers-es6">ce billet de blog, en anglais</a>) au sein des identifiants. Il est également possible d'utiliser les \uXXXX <a href="#littéraux chaînes">séquences d'échappement Unicode</a> comme caractères dans les identifiants.</p>

<p>Voici des exemples d'identifiants valides : <code>Nombre_touches</code>, <code>temp99</code>, <code>$credit</code>, et <code>_nom</code>.</p>

<h3 id="Déclaration_de_variables">Déclaration de variables</h3>

<p>Il est possible de déclarer des variables de plusieurs façons :</p>

<ul>
 <li>En utilisant le mot-clé {{jsxref("Instructions/var","var")}}, par exemple : <code>var x = 42</code>. Cette syntaxe peut être utilisée pour déclarer des variables <a href="#Portées">locales ou globales</a> selon le contexte d'exécution.</li>
 <li>En utilisant le mot-clé {{jsxref("Instructions/const","const")}} ou le mot-clé {{jsxref("Instructions/let","let")}}, par exemple avec <code>let y = 13</code>. Cette syntaxe peut être utilisée pour déclarer une variable dont la portée sera celle du bloc. Voir le paragraphe sur <a href="#Portées">les portées des variables</a> ci-après.</li>
</ul>

<p>Il est également possible d'affecter une valeur à une variable sans utiliser de mot-clé (ex. <code>x = 42</code>). Cela créera une variable globale non-déclarée. Cette forme génèrera également un avertissement avec <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">le mode strict</a>. Attention, les variables globales non-déclarées peuvent mener à des comportements inattendus et sont considérées comme une mauvaise pratique.</p>

<h3 id="Évaluation_de_variables">Évaluation de variables</h3>

<p>Une variable déclarée grâce à l'instruction <code>var</code> ou <code>let</code> sans valeur initiale définie vaudra {{jsxref("undefined")}}.</p>

<p>Tenter d'accéder à une variable qui n'a pas été déclarée ou tenter d'accéder à un identifiant déclaré avec <code>let</code> avant son initialisation provoquera l'envoi d'une exception {{jsxref("ReferenceError")}}.</p>

<pre class="brush: js">var a;
console.log("La valeur de a est " + a); // La valeur de a est undefined

console.log("La valeur de b est " + b); // La valeur de b est undefined
var b; // La déclaration de la variable est "remontée" (voir la section ci-après)

console.log("La valeur de x est " + x); // signale une exception ReferenceError
let x;
let y;
console.log("La valeur de y est " + y); // La valeur de y est undefined
</pre>

<p>Il est possible d'utiliser <code>undefined</code> pour déterminer si une variable possède une valeur. Dans l'exemple qui suit, la condition de l'instruction <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if</a></code> sera validée car la variable n'a pas été initialisée (elle a simplement été déclarée) :</p>

<pre class="brush: js">var input;
if (input === undefined){
  faireCeci();
} else {
  faireCela();
}
</pre>

<p>La valeur <code>undefined</code> se comporte comme le booléen <code>false</code> lorsqu'elle est utilisée dans un contexte booléen. Ainsi, le fragment de code qui suit exécutera la fonction <code>maFonction</code> puisque le premier élément de <code>monTableau</code> n'est pas défini :</p>

<pre class="brush: js">var monTableau = new Array();
if (!monTableau[0]){
  maFunction();
}
</pre>

<p>La valeur <code>undefined</code> est convertie en {{jsxref("NaN")}} (pour <em>Not a Number</em> : « n'est pas un nombre ») lorsqu'elle est utilisée dans un contexte numérique.</p>

<pre class="brush: js">var a;
a + 2; // NaN</pre>

<p>Une variable valant <code>null</code> sera toujours considérée comme 0 dans un contexte numérique et comme <code>false</code> dans un contexte booléen. Par exemple, on aura :</p>

<pre class="brush: js">var n = null;
console.log(n * 32); // Le log affichera 0</pre>

<h3 id="Les_portées_de_variables">Les portées de variables</h3>

<p>Lorsqu'une variable est déclarée avec <code>var</code> en dehors des fonctions, elle est appelée variable <em>global</em>e car elle est disponible pour tout le code contenu dans le document. Lorsqu'une variable est déclarée dans une fonction, elle est appelée variable <em>locale</em> car elle n'est disponible qu'au sein de cette fonction.</p>

<p>Avant ECMAScript 2015 (ES6), JavaScript ne définissait pas de portée pour une <a href="/fr/docs/Web/JavaScript/Reference/Instructions/bloc">instruction de bloc</a> ; les éléments du bloc seront locaux pour le code qui contient le bloc (que ce soit une fonction ou le contexte global). Ainsi, l'exemple qui suit affichera 5 car la portée de <code>x</code> est la fonction (ou le contexte global) dans lequel <code>x</code> est déclaré, pas le bloc (correspondant à l'instruction <code>if</code> dans ce cas) :</p>

<pre class="brush: js">if (true) {
  var x = 5;
}
console.log(x); // x vaut 5
</pre>

<p>La déclaration {{jsxref("Instructions/let","let")}}, introduite avec ECMAScript 2015, ajoute un nouveau comportement :</p>

<pre class="brush: js">if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined
</pre>

<h3 id="Remontée_de_variables_(hoisting)">Remontée de variables (<em>hoisting</em>)</h3>

<p>Une autre chose peut paraître étrange en JavaScript : il est possible, sans recevoir d'exception, de faire référence à une variable qui est déclarée plus tard. Ce concept est appelé « remontée » (<em>hoisting</em> en anglais) car, d'une certaine façon, les variables sont remontées en haut de la fonction ou de l'instruction. En revanche, les variables qui n'ont pas encore été initialisées renverront la valeur <code>undefined</code>. Ainsi, même si on déclare une variable et qu'on l'initialise après l'avoir utilisée ou y avoir fait référence, la valeur utilisée « la plus haute » sera toujours <code>undefined</code>.</p>

<pre class="brush: js">/**
 * Exemple 1
 */
console.log(x === undefined); // donne "true"
var x = 3;

/**
 * Exemple 2
 */
// renverra undefined
var maVar = "ma valeur";

(function () {
  console.log(maVar); // undefined
  var maVar = "valeur locale";
})();
</pre>

<p>Les exemples précédents peuvent être reformulés plus explicitement ainsi :</p>

<pre class="brush: js">/**
 * Exemple 1
 */
var x;
console.log(x === undefined); // donne "true"
x = 3;

/**
 * Exemple 2
 */
var maVar = "ma valeur";

(function () {
  var maVar;
  console.log(maVar); // undefined
  maVar = "valeur locale";
})();
</pre>

<p>C'est pourquoi il est conseillé de placer les instructions <code>var</code> dès que possible dans le code. De plus, cette bonne pratique aide à rendre le code plus lisible.</p>

<p>Avec ECMAScript 2015, <code>let (const)</code> <strong>remontera la variable en haut du bloc mais ne l'initialisera pas</strong>. Aussi, si on fait référence à la variable dans le bloc avant la déclaration, on obtient une {{jsxref("ReferenceError")}} car la variable est dans une « zone morte temporelle ». entre le début du bloc et le traitement de la déclaration</p>

<pre class="brush: js">function faire_quelquechose() {
  console.log(toto); // ReferenceError
  let toto = 2;
}</pre>

<h3 id="Remontée_de_fonctions">Remontée de fonctions</h3>

<p>En ce qui concerne les fonctions, seules les déclarations de fonctions sont remontées. Pour les expressions de fonctions, il n'y a pas de telle remontée car la variable associée n'a pas encore été affectée avec la valeur finale (comme vu avant) :</p>

<pre class="brush: js">/* Déclaration de fonction */
toto();  // "truc"
function toto(){
  console.log("truc");
}

/* Expression de fonction */
machin();      // erreur TypeError : machin n'est pas une fonction
var machin = function() {
  console.log("titi");
}
</pre>

<h3 id="Les_variables_globales">Les variables globales</h3>

<p>Les variables globales sont en réalité des propriétés de l'<em>objet global</em>. Dans les pages web, l'objet global est {{domxref("window")}}, et on peut donc accéder ou modifier la valeur de variables globales en utilisant la syntaxe suivante : <code>window.<em>variable</em></code> .</p>

<p>Ainsi, il est possible d'accéder à des variables déclarées dans une fenêtre ou dans un cadre depuis une autre fenêtre ou depuis un autre cadre (<em>frame</em>) en spécifiant son nom. Si, par exemple, une variable appelée <code>numTéléphone</code> est déclarée dans un document <code>FRAMESET</code>, il est possible d'y faire référence, depuis un cadre fils, avec la syntaxe <code>parent.numTéléphone</code>.</p>

<h3 id="Constantes">Constantes</h3>

<p>Il est possible de créer des constantes en lecture seule en utilisant le mot-clé {{jsxref("Instructions/const","const")}}. La syntaxe d'un identifiant pour une constante est la même que pour les variables (elle doit débuter avec une lettre, un tiret du bas, un symbole dollar et peut contenir des caractères numériques, alphabétiques et des tirets bas voire des caractères Unicode).</p>

<pre class="brush: js">const préfixe = '212';
</pre>

<p>Une constante ne peut pas changer de valeur grâce à une affectation ou être re-déclarée pendant l'exécution du script.</p>

<p>Les règles de portée des constantes sont les mêmes que pour les variables, à l'exception du mot-clé <code>const</code> qui est obligatoire. S'il est oublié, l'identifiant sera considéré comme celui d'une variable.</p>

<p>Il est impossible de déclarer une constante avec le même nom qu'une autre variable ou fonction dans la même portée.</p>

<pre class="example-bad brush: js">// Renverra une erreur
function f() {};
const f = 5;

// Renverra également une erreur
function f() {
  const g = 5;
  var g;

  //instructions
}
</pre>

<p>Cependant, les propriétés des objets qui sont affectés comme constantes ne sont pas protégées, on pourra ainsi exécuter sans problème le code suivant :</p>

<pre class="brush: js">const MON_OBJET = {"clé": "valeur"};
MON_OBJET.clé = "autreValeur";</pre>

<p>De même, le contenu d'un tableau peut être modifié sans alerte :</p>

<pre class="brush: js">const MON_TABLEAU = ["HTML", "CSS"];
MON_TABLEAU.push("JavaScript");
console.log(MON_TABLEAU); // ["HTML", "CSS", "JavaScript"]
</pre>

<h2 id="Structures_de_données_et_types">Structures de données et types</h2>

<h3 id="Types_de_données">Types de données</h3>

<p>La dernière version du standard ECMAScript définit sept types de données :</p>

<ul>
 <li>Six types de données primitifs :
  <ul>
   <li>Type booléen : <code>true</code> et <code>false</code>.</li>
   <li>Type nul (<code>null</code>), un mot-clé spécial pour indiquer une valeur nulle (au sens informatique). JavaScript étant sensible à la casse, <code>null</code> n'est pas <code>Null</code>, <code>NULL</code>, ou toute autre variante.</li>
   <li>Un type pour les valeurs indéfinies (<code>undefined</code>).</li>
   <li>Un type pour les nombres entiers ou décimaux. Par exemple : <code>42</code> ou <code>3.14159</code>.</li>
   <li>Un type pour représenter les grands nombres entiers <code>BigInt</code>, par exemple <code>9007199254740992n</code>.</li>
   <li>Un type pour les chaînes de caractères, une séquence de caractères qui représente une valeur textuelle. Par exemple : "Coucou"</li>
   <li>Un type pour les symboles, apparus avec ECMAScript 2015 (ES6). Ce type est utilisé pour représenter des données immuables et uniques.</li>
  </ul>
 </li>
 <li>et un type pour les objets (<em>Object</em>)</li>
</ul>

<p>Bien que cette description couvre peu de types de données, ceux-ci vous permettent d'implémenter une grande variété de fonctions au sein de vos applications. <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object">Les objets</a> et <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function">les fonctions</a> sont parmi les briques fondamentales du langage. On peut considérer, à première vue, les objets comme des conteneurs de valeurs et de fonctions pour une application.</p>

<h3 id="Conversion_de_types_de_données">Conversion de types de données</h3>

<p>JavaScript est un langage à typage dynamique. Cela signifie qu'il n'est pas nécessaire de spécifier le type de données d'une variable lors de sa déclaration. Les types de données sont convertis automatiquement durant l'exécution du script. Ainsi, il est possible de définir une variable de cette façon :</p>

<div>
<pre class="brush: js">var réponse = 42;
</pre>
</div>

<p>Et plus tard, d'affecter une chaîne de caractères à cette même variable :</p>

<div>
<pre class="brush: js">réponse = "Merci pour le dîner...";
</pre>
</div>

<p>JavaScript utilisant un typage dynamique, cette dernière instruction ne renverra pas d'erreur.</p>

<p>Lorsque des expressions impliquent des chaînes de caractères et des valeurs numériques ainsi que l'opérateur +, JavaScript convertit les nombres en chaînes de caractères :</p>

<pre class="brush: js">x = "La réponse est " + 42; // "La réponse est 42"
y = 42 + " est la réponse"; // "42 est la réponse"
</pre>

<p>Avec des instructions impliquant d'autres opérateurs, JavaScript ne convertit pas nécessairement les valeurs numériques en chaînes de caractères. Ainsi, on aura :</p>

<pre class="brush: js">"37" - 7; // 30
"37" + 7; // "377"
</pre>

<h3 id="Conversion_de_chaînes_de_caractères_en_nombres">Conversion de chaînes de caractères en nombres</h3>

<p>Si un nombre est représenté en mémoire par une chaîne de caractères, il y a des méthodes pour effectuer la bonne conversion :</p>

<ul>
 <li>{{jsxref("Objets_globaux/parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Objets_globaux/parseFloat", "parseFloat()")}}</li>
</ul>

<p><code>parseInt</code> renverra uniquement des nombres entiers, étant ainsi inappropriée pour la manipulation de nombre décimaux. Une bonne pratique pour cette fonction est de toujours inclure l'argument qui indique dans quelle base numérique le résultat doit être renvoyé (base 2, base 10...).</p>

<pre class="brush: js">parseInt("101", 2); // 5</pre>

<h4 id="L'opérateur_unaire">L'opérateur + unaire</h4>

<p>Une autre méthode pour récupérer un nombre à partir d'une chaîne de caractères consiste à utiliser l'opérateur +.</p>

<pre class="brush: js">"1.1" + "1.1" = "1.11.1"
+"1.1" = 1.1 // fonctionne seulement avec le + unaire
</pre>

<h2 id="Littéraux">Littéraux</h2>

<p>Les littéraux sont utilisés pour représenter des valeurs en JavaScript. Ce sont des valeurs fixes, pas des variables, qui sont fournies <em>littéralement</em> au script. Cette section décrit les différents types de littéraux :</p>

<ul>
 <li><a href="#littéraux tableaux">Littéraux de tableaux</a></li>
 <li><a href="#littéraux booléens">Littéraux booléens</a></li>
 <li><a href="#littéraux décimaux">Littéraux de nombres flottants</a></li>
 <li><a href="#littéraux numériques">Littéraux numériques</a></li>
 <li><a href="#littéraux objets">Littéraux d'objets</a></li>
 <li><a href="#regexp">Littéraux d'expressions rationnelles</a></li>
 <li><a href="#littéraux chaînes">Littéraux de chaînes de caractères</a></li>
</ul>

<h3 id="Les_littéraux_de_tableaux">Les littéraux de tableaux</h3>

<p>Un littéral de tableau est une liste de zéro ou plusieurs expressions, dont chacune représente l'élément d'un tableau, encadrées par des crochets (<code>[]</code>). Lorsqu'un tableau est créé à partir d'un littéral, il est initialisé avec les valeurs spécifiées qui sont ses éléments, sa longueur correspondant au nombre d'arguments donnés.</p>

<p>L'exemple suivant crée ainsi le tableau <code>cafés</code> avec trois éléments et une taille égale à 3 :</p>

<pre class="brush: js">var cafés = ["Brésilien", "Colombien", "Kona"];
</pre>

<div class="note">
<p><strong>Note :</strong> Un littéral de tableau est du type d'un initialisateur d'objets. Voir <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet">l'utilisation d'initialisateurs d'objets</a>.</p>
</div>

<p>Si un tableau est créé en utilisant un littéral dans un script du plus haut niveau, JavaScript interprète le tableau chaque fois qu'il évalue l'expression contenant le littéral. De plus, un littéral utilisé dans une fonction est créé chaque fois que la fonction est appelée.</p>

<p>Les littéraux de tableaux sont également des objets <code>Array</code>. Voir la page sur l'objet <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array">Array</a></code> pour plus de détails.</p>

<h4 id="Les_virgules_supplémentaires">Les virgules supplémentaires</h4>

<p>Il n'est pas nécessaire de définir tous les éléments dans un littéral de tableau. Si vous utilisez deux virgules, l'une à la suite de l'autre, le tableau utilisera la valeur <code>undefined</code> pour les éléments non définis. L'exemple qui suit utilise le tableau poisson :</p>

<pre class="brush: js">var poisson = ["Clown", , "Chat"];
</pre>

<p>Ce tableau possède deux éléments ayant une valeur et un élément vide (<code>poisson[0]</code> vaut "Clown", <code>poisson[1]</code> vaut <code>undefined</code>, et <code>poisson[2]</code> vaut "Chat").</p>

<p>Si une virgule est ajoutée à la fin de la liste des éléments, elle est ignorée. Dans le prochain exemple, la longueur du tableau est égale à 3. Il n'y a pas d'élément <code>maListe[3]</code>. Les autres virgules indiquent un nouvel élément.</p>

<div class="note">
<p><strong>Note :</strong> Avec d'anciennes versions de navigateurs, les virgules de fin peuvent causer des erreurs, il est fortement conseillé de les retirer.</p>
</div>

<pre class="brush: js">var maListe = ['maison', , 'école', ];
</pre>

<p>Dans l'exemple qui suit, la longueur du tableau est égale à 4 et <code>maListe[0]</code> et <code>maListe[2]</code> sont manquants.</p>

<pre class="brush: js">var maListe = [ , 'maison', , 'école'];
</pre>

<p>Dans l'exemple qui suit, la longueur du tableau est égale à 4 et <code>maListe[1]</code> et <code>maListe[3]</code> sont manquants.</p>

<pre class="brush: js">var maListe = ['maison', , 'école', , ];
</pre>

<p>Comprendre le fonctionnement des virgules supplémentaires est important. Cependant, lorsque vous écrivez du code, veillez, dès que c'est possible, à déclarer les éléments manquants avec <code>undefined</code> : cela améliorera la lisibilité de votre code et il sera ainsi plus facile à maintenir.</p>

<h3 id="Les_littéraux_booléens">Les littéraux booléens</h3>

<p>Le type booléen possède deux valeurs littérales : <code>true</code> et <code>false</code>.</p>

<p>Il ne faut pas confondre les valeurs <code>true</code> et <code>false</code> du type primitif booléen et les valeurs true et false de l'objet <code>Boolean</code>. L'objet <code>Boolean</code> permet de créer un objet autour du type de donnée booléen. Voir la page sur l'objet<a href="/fr/docs/JavaScript/Reference/Objets_globaux/Boolean"> <code>Boolean</code></a> pour plus d'informations.</p>

<h3 id="Les_littéraux_numériques">Les littéraux numériques</h3>

<p>Les nombres {{jsxref("Number")}} et les grands entiers {{jsxref("BigInt")}} peuvent être exprimés en notation décimale (base 10), hexadécimale (base 16), octale (base 8) et binaire (base 2).</p>

<ul>
 <li>Les littéraux représentant des entiers décimaux sont une suite de chiffres qui ne commence pas par un 0 (zéro)</li>
 <li>Un 0 (zéro) en préfixe indique que le littéral est en notation octale. Ces nombres ne peuvent être composés que des chiffres de 0 (zéro) à 7 (sept).</li>
 <li>Un préfixe 0x (ou 0X) indique une notation hexadécimale. Les nombres hexadécimaux peuvent être composés de chiffres (0-9) et des lettres A à F (minuscules et majuscules) (la casse d'un caractère ne modifie pas sa valeur : <code>0xa = 0xA = 10</code> et <code>0xf = 0xF = 15</code>).</li>
 <li>Un préfixe 0b (ou 0B) indique une notation binaire. Les nombres binaires peuvent être composés de 0 ou de 1 uniquement.</li>
</ul>

<p>Voici des exemples pour ces littéraux :</p>

<pre class="eval">0, 117, -345, 123456789123456789n (notation décimale, base 10)
015, 0001, -077, 0o7777777777777n (notation octale, base 8)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn (notation hexadécimale, base 16)
0b11, 0B0011, -0b11, 0b11101001010101010101n (notation binaire, base 2)
</pre>

<p>Pour plus d'informations, voir <a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Littéraux_numériques">les littéraux numériques dans la grammaire lexicale de JavaScript</a>.</p>

<h3 id="Les_littéraux_de_nombres_décimaux">Les littéraux de nombres décimaux</h3>

<p>Un littéral de nombre décimal peut être composé de ces différentes parties :</p>

<ul>
 <li>Un entier, pouvant être signé (précédé d'un « + » ou d'un « - »),</li>
 <li>Un point, séparateur décimal (« . »),</li>
 <li>La partie décimale (un autre nombre)</li>
 <li>Un exposant.</li>
</ul>

<p>L'exposant est la partie du nombre décimal commençant par un « e » ou un « E », suivie d'un entier pouvant être signé (précédé d'un « + » ou d'un « - »). Un littéral de nombre décimal doit comporter au moins un chiffre et soit un point (séparateur décimal) soit un « e » ou un « E ».</p>

<p>Des exemples sont : 3.1415, -3.1E12, .1e12, et 2E-12.</p>

<p>On peut raccourcir cette syntaxe en :</p>

<pre class="eval">[(+|-)][chiffres].[chiffres][(E|e)[(+|-)]chiffres]
</pre>

<p>Par exemple :</p>

<pre class="eval">3.14
2345.789
.3333333333333333333
</pre>

<h3 id="Les_littéraux_d'objets">Les littéraux d'objets</h3>

<p>Un littéral d'objet - ou 'objet littéral' - est une liste de zéro ou plusieurs propriétés définies par des paires de noms/valeurs. Ces paires sont délimitées par des accolades (<code>{}</code>). N'utilisez pas un tel littéral en début d'instruction. En effet, l'accolade ouvrante sera mal interprétée (début de bloc) et causera une erreur ou un comportement incohérent.</p>

<p>L'exemple qui suit montre l'utilisation d'un littéral d'objet. Le premier élément de l'objet <code>voiture</code> définit une propriété <code>maVoiture</code>, le deuxième élément : la propriété <code>getVoiture</code> invoque une fonction <code>(carTypes("Honda")),</code> le troisième élément, la propriété <code>special</code> utilise une variable existante (<code>soldes</code>).</p>

<pre class="brush: js">var soldes = "Toyota";

function carTypes(nom) {
  return (nom === "Honda") ?
    nom :
    "Désolé, nous ne vendons pas de " + nom + "." ;
}

var voiture = { maVoiture: "Saturn", getVoiture: carTypes("Honda"), spécial: soldes };

console.log(voiture.maVoiture);   // Saturn
console.log(voiture.getVoiture);  // Honda
console.log(voiture.spécial); // Toyota
</pre>

<p>Il est également possible d'utiliser un littéral numérique ou un littéral de chaîne de caractères pour désigner le nom d'une propriété ou pour imbriquer un objet dans un autre. L'exemple qui suit illustre cette possibilité :</p>

<pre class="brush: js">var voiture = { plusieursVoitures: {a: "Saab", b: "Jeep"}, 7: "Mazda" };

console.log(voiture.plusieursVoitures.b); // Jeep
console.log(voiture[7]); // Mazda
</pre>

<p>Les noms des propriétés d'objets peuvent être n'importe quelle chaîne de caractères, y compris la chaîne vide. Si le nom de la propriété n'est pas un <a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Variables">identifiant</a> valide, il faudra qu'il soit placé entre guillemets. Les noms de propriétés qui ne sont pas des identifiants valides ne peuvent pas être utilisés pour accéder à la valeur en utilisant la notation pointée (objet.propriété). En revanche, il est possible d'y accéder avec la notation utilisant les crochets ("<code>[]</code>") comme pour les tableaux.</p>

<pre class="brush: js">var nomsBizarres = {
  "": "Chaîne vide",
  "!": "Bang !"
}
console.log(nomsBizarres."");   // SyntaxError: Unexpected string
console.log(nomsBizarres[""]);  // Chaîne vide
console.log(nomsBizarres.!);    // SyntaxError: Unexpected token !
console.log(nomsBizarres["!"]); // Bang !

</pre>

<h4 id="Augmentation_des_littéraux_d'objets_avec_ES2015ES6">Augmentation des littéraux d'objets avec ES2015/ES6</h4>

<p>Avec ES2015, les littéraux d'objets permettent de définir le prototype lors de la construction de l'objet, permettent d'utiliser les affectations en notation raccourcie : <code>toto: toto</code>, de définir des méthodes, d'appeler les méthodes de l'objet parent avec <code>super</code> et d'utiliser des noms de propriétés calculées.</p>

<pre class="brush: js">var obj = {
    // __proto__
    __proto__: lePrototypeDeLObjet,
    // Notation raccourcie pour ‘handler: handler’
    handler,
    // Méthodes
    toString() {
     // Appelle les méthodes de l'objet parent
     return "d " + super.toString();
    },
    // Noms de propriétés calculés dynamiquement
    [ 'prop_' + (() =&gt; 42)() ]: 42
};</pre>

<p>Attention :</p>

<pre class="brush: js">var toto = {a: "alpha", 2: "deux"};
console.log(toto.a);    // alpha
console.log(toto[2]);   // deux
//console.log(toto.2);  // Erreur: parenthèse ) manquante après la liste d'argument
//console.log(toto[a]); // Erreur: a n'est pas défini
console.log(toto["a"]); // alpha
console.log(toto["2"]); // deux
</pre>

<h3 id="Les_littéraux_d'expressions_rationnelles">Les littéraux d'expressions rationnelles</h3>

<p>Un littéral d'<a href="/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res">expression rationnelle</a> est un motif encadré par deux barres obliques. Par exemple :</p>

<pre class="brush: js">var re = /ab+c/;</pre>

<h3 id="Les_littéraux_de_chaînes_de_caractères">Les littéraux de chaînes de caractères</h3>

<p>Un littéral de chaîne de caractères consiste en zéro ou plusieurs caractères encadrés par des guillemets droits doubles (<code>"</code>) ou des guillemets droits simples (<code>'</code>). Une chaîne de caractères doit être encadrée par des symboles du même type (guillemets droits doubles ou guillemets droits simples) :</p>

<ul>
 <li><code>"toto"</code></li>
 <li><code>'truc'</code></li>
 <li><code>"1234"</code></li>
 <li><code>"Une ligne \n une autre ligne"</code></li>
 <li><code>"Aujourd'hui j'ai mangé une pomme"</code></li>
</ul>

<p>Il est possible d'utiliser les méthodes de <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String"><code>String</code></a> sur un tel littéral. JavaScript convertira automatiquement le littéral en un objet <code>String</code>, appellera la méthode puis détruira l'objet <code>String</code>. On peut également utiliser la propriété <code>String.length</code> sur un littéral de chaîne de caractère :</p>

<pre class="brush: js">console.log("j'ai mangé une pomme".length)
// Affichera le nombre de caractères (y compris les blancs).
// Dans ce cas, 20.
</pre>

<p>Il est préférable d'utiliser des littéraux de chaînes de caractères s'il n'est pas spécifiquement nécessaire d'utiliser un objet <code>String</code>. Voir la page sur l'objet <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String"><code>String</code></a> pour plus de détails sur les objets <code>String</code>.</p>

<p>Avec ECMAScript 2015, on peut également utiliser des littéraux sous forme de <em>gabarits</em> (<em>templates</em>) en utilisant le caractère accent grave (`) comme séparateur. Les gabarits de chaînes de caractères sont semblables aux fonctionnalités d'interpolation existantes en Python, Perl, etc. Ces gabarits permettent d'utiliser des balises afin d'adapter la construction de chaînes.</p>

<pre class="brush: js">// Littéral simple pour une chaîne
`Un saut de ligne '\n' en JavaScript.`

// On peut écrire une chaîne sur plusieurs
// lignes
`Dans les gabarits, on peut écrire
  sur plusieurs lignes. `

// Interpolation de chaîne
var nom = "Robert", jour = "aujourd'hui";
`Bonjour ${nom}, comment allez-vous ${jour} ?`

// On peut construire un préfixe HTTP
// afin de construire plus facilement
// des requêtes via des substitutions
POST`http://toto.org/truc?a=${a}&amp;b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "toto": ${toto},
       "truc": ${truc}}`(myOnReadyStateChangeHandler);</pre>

<h4 id="Utilisation_des_caractères_spéciaux">Utilisation des caractères spéciaux</h4>

<p>En plus des caractères « classiques », il est possible d'insérer des caractères spéciaux dans les chaînes de caractères. Voici un exemple :</p>

<pre class="brush: js">"une ligne \n une autre ligne"
</pre>

<p>Voici un tableau listant les caractères spéciaux qu'il est possible d'utiliser dans les chaînes de caractères JavaScript :</p>

<table class="standard-table">
 <caption>Caractères spéciaux en JavaScript</caption>
 <thead>
  <tr>
   <th scope="col">Caractère</th>
   <th scope="col">Signification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>Octet null</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>Retour arrière</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>Saut de page</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>Nouvelle ligne</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>Retour chariot</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>Tabulation</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>Tabulation verticale</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>Apostrophe ou guillemet droit simple</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>Guillemet droit double</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>Barre oblique inversée</td>
  </tr>
  <tr>
   <td><code>\<em>XXX</em></code></td>
   <td>Le caractère dont l'encodage Latin-1 est spécifié grâce à, au plus, 3 chiffres octaux<em> XXX</em> entre 0 et 377. \251, par exemple représente le caractère copyright.</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\x<em>XX</em></code></td>
   <td>Le caractère dont l'encodage Latin-1 est spécifié par deux chiffres hexadécimaux entre 00 et FF. Ainsi, \xA9 correspond à la séquence hexadécimale pour le caractère copyright.</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\u<em>XXXX</em></code></td>
   <td>Le caractère Unicode spécifié par quatre chiffres hexadécimaux <em>XXXX</em>. Ainsi, \u00A9 correspondra à la séquence Unicode du symbole copyright. Voir {{anch("Unicode escape sequences")}}.</td>
  </tr>
  <tr>
   <td><code>\u{<em>XXXXX}</em></code></td>
   <td>Échappement de codes Unicode. Par exemple, \u{2F804} est équivalent à la combinaison d'échappements « simples » \uD87E\uDC04.</td>
  </tr>
 </tbody>
</table>

<h4 id="Les_caractères_d'échappement">Les caractères d'échappement</h4>

<p>Pour les caractères qui ne font pas partie du tableau précédent, les barres obliques inversées (<em>backslash</em>) les précédant sont ignorées. Cependant, cet usage est obsolète et devrait être évité.</p>

<p>En précédant d'une barre oblique inversée les guillemets droits doubles, on <em>échappe </em>ces caractères. Voici un exemple :</p>

<pre class="brush: js">var citation = "Il lit \"Bug Jargal\" de V. Hugo.";
console.log(citation);
</pre>

<p>Le résultat serait alors</p>

<pre class="eval">Il lit "Bug Jargal" de V. Hugo.</pre>

<p>Pour inclure une barre oblique inversée dans une chaîne de caractères, il faut aussi l'échapper. Par exemple, pour stocker le chemin <code>c:\temp</code> dans une chaîne de caractères, on utilisera le code suivant :</p>

<pre class="brush: js">var chemin = "c:\\temp";
</pre>

<p>Il est également possible d'échapper des sauts de lignes de la même façon. La barre oblique inversée et le saut de ligne seront alors ignorés dans la valeur de la chaîne de caractères.</p>

<pre class="brush: js">var str = "cette chaîne \
est cassée \
sur plusieurs \
lignes."
console.log(str);   // cette chaîne est cassée sur plusieurs lignes.
</pre>

<p>Avant ECMAScript 2015 (ES6), JavaScript ne disposait pas d'une syntaxe permettant de traiter les chaînes de caractères comme des contenus de fichier, il est possible d'ajouter un caractère de saut de ligne échappé et un saut de ligne en fin de ligne en utilisant cette façon :</p>

<pre class="brush: js">var poème =
"Les roses sont rouges,\n\
Les violettes sont bleues.\n\
Le miel est sucré,\n\
Et moi je suis."
</pre>

<p>Grâce à ES6, on peut utiliser des <a href="https://tech.mozfr.org/post/2015/05/27/ES6-en-details-%3A-les-gabarits-de-chaines-de-caracteres">littéraux de gabarits qui offrent de nouvelles fonctionnalités</a> dont une qui permet d'avoir des chaînes de caractères écrites sur plusieurs lignes :</p>

<pre class="brush: js">var poème =
`Les roses sont rouges,
Les violettes sont bleues,
Le miel est sucré,
Et moi je suis.`</pre>

<h2 id="En_savoir_plus">En savoir plus</h2>

<p>Ce chapitre est centré sur les bases de la syntaxe, les déclarations et les types utilisés en JavaScript. Pour en savoir plus sur les différents composants du langage, voir les chapitres suivants du guide:</p>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs">Contrôle du flux et gestion des erreurs</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Boucles_et_itération">Boucles et itération</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Fonctions">Fonctions</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs">Expressions et opérateurs</a></li>
</ul>

<p>Dans le chapitre suivant, on abordera les structures conditionnelles, permettant de diriger le flux d'instructions et la gestion des erreurs.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs")}}</p>
