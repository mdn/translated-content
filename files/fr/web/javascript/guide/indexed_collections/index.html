---
title: Collections indexées
slug: Web/JavaScript/Guide/Indexed_collections
tags:
  - Array
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Guide/Indexed_collections
original_slug: Web/JavaScript/Guide/Collections_indexées
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_régulières", "Web/JavaScript/Guide/Collections_avec_clés")}}</div>

<p>Ce chapitre présente les collections de données qui sont ordonnées par un indice. Cela inclue les tableaux et les objets semblables à des tableaux que sont les objets {{jsxref("Array")}} et les objets {{jsxref("TypedArray")}}.</p>

<h2 id="Le_type_Array">Le type <code>Array</code></h2>

<p>Un <em>tableau</em> (<em>array</em> en anglais) est un ensemble ordonné de valeurs auxquelles on peut faire référence avec un nom et un indice. Par exemple, si on a un tableau <code>emp</code> qui contient les noms d'employés indexés par leurs numéros d'employé, on pourrait utiliser <code>emp[1]</code> pour accéder à l'employé n°1, <code>emp[2]</code> pour accéder au deuxième et ainsi de suite.</p>

<p>JavaScript ne possède pas de type particulier pour représenter un tableau de données. En revanche, il est possible d'utiliser l'objet natif <code>Array</code> ainsi que ses méthodes pour manipuler des tableaux. L'objet <code>Array</code> possède plusieurs méthodes qui permettent de manipuler les tableaux pour les fusionner, les inverser, les trier, etc. Il possède une propriété de longueur ainsi que d'autres propriétés qui peuvent être utilisées avec les expressions rationnelles.</p>

<h3 id="Créer_un_tableau">Créer un tableau</h3>

<p>Les instructions qui suivent sont équivalentes et permettent de créer le même tableau :</p>

<pre class="brush: js notranslate">var arr = new Array(élément0, élément1, ..., élémentN);
var arr = Array(élément0, élément1, ..., élémentN);
var arr = [élément0, élément1, ..., élémentN];
</pre>

<p><code>élément0, élément1, ..., élémentN</code> est une liste de valeurs qui formeront les éléments du tableau. Lorsque ces valeurs sont définies, le tableau initialisera la valeur des éléments correspondants. La propriété <code>length</code> du tableau permet de connaître le nombre d'arguments du tableau.</p>

<p>Parmi les instructions précédentes, une utilise des crochets, on appelle ceci un « littéral de tableau » ou un « initialisateur de tableau ». Cette notation est plus courte que les autres et est souvent préférée pour sa lisibilité. Pour plus d'informations sur cette notation, voir la page sur <a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire">les littéraux de tableaux</a> pour plus détails.</p>

<p>Afin de créer un tableau de longueur non nulle mais sans aucun élément initialisé, on peut utiliser l'une des deux instructions suivantes :</p>

<pre class="brush: js notranslate">var arr = new Array(longueurTableau);
var arr = Array(longueurTableau);

// Cela aura le même effet que :
var arr = [];
arr.length = longueurTableau;
</pre>

<div class="note">
<p><strong>Note :</strong> Dans le code ci-dessus <code>longueurTableau</code> doit être un nombre. Si ce n'est pas le cas, un tableau d'un seul élément (ayant la valeur fournie) sera créé. <code>arr.length</code> renverra <code>longueurTableau</code>, mais le tableau ne contiendra que des éléments « vides » non définis. Si on utilise une boucle {{jsxref("Instructions/for...in")}} sur ce tableau, on ne trouvera aucun élément.</p>
</div>

<p>On a vu comment créer un tableau, il est aussi possible d'affecter des tableaux à des propriétés d'objets (que ce soit lors de leur création ou pour les modifier) :</p>

<pre class="brush: js notranslate">var obj = {};
// ...
obj.prop = [élément0, élément1, ..., élémentN];

// OU
var obj = {prop: [élément0, élément1, ...., élémentN]}
</pre>

<p>Si on souhaite initialiser un tableau avec un seul élément et que cet élément est un nombre, il est nécessaire d'utiliser la notation littérale. En effet, si un nombre est passé à la fonction <code>Array()</code> pour construire le tableau, celui-ci sera interprété comme une longueur et non comme la valeur d'un élément.</p>

<pre class="brush: js notranslate">var arr1 = [42];      // Le tableau créé contient bien un élément qui vaut 42
var arr2 = Array(42); // Crée un tableau sans élément
                      // mais dont arr.length vaut 42

// Le code ci-dessus est équivalent à
var arr = [];
arr.length = 42 ;
</pre>

<p>Si N est un nombre décimal dont la partie fractionnaire n'est pas nulle, tout appel à <code>Array(N)</code> renverra une exception <code>RangeError</code>. Par exemple :</p>

<pre class="brush: js notranslate">var arr = Array(9.3);  // RangeError: Invalid array length
</pre>

<p>Si on souhaite créer un tableau d'un seul élément et ce quel que soit le type de données, il sera préférable d'utiliser les littéraux de tableaux. Sinon, on peut créer un tableau vide puis lui ajouter un seul élément.</p>

<p>Avec ES2015 (anciennement ECMAScript 6), on peut utiliser la méthode {{jsxref("Array.of")}} afin de créer un tableau composé d'un seul élément :</p>

<pre class="brush: js notranslate">let monTableau = Array.of("Joconde"); // monTableau contient uniquement "Joconde"</pre>

<h3 id="Remplir_un_tableau">Remplir un tableau</h3>

<p>Il est possible de remplir un tableau en affectant des valeurs à ses éléments. Par exemple :</p>

<pre class="brush: js notranslate">var emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
</pre>

<div class="note">
<p><strong>Note :</strong> Si on utilise une valeur non entière pour désigner un élément du tableau, cela créera une propriété sur l'objet plutôt qu'un élément du tableau :</p>

<pre class="brush: js notranslate">var arr = [];
arr[3.4] = "Oranges";
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
</pre>
</div>

<p>Il est aussi possible de remplir un tableau directement lors de sa création :</p>

<pre class="brush: js notranslate">var monTableau = new Array("Coucou", maVar, 3.14159);
var monTableau = ["Mangue", "Pomme", "Orange"]
</pre>

<h3 id="Faire_référence_aux_éléments_dun_tableau">Faire référence aux éléments d'un tableau</h3>

<p>Il est possible de faire référence aux éléments d'un tableau en utilisant un nombre ordinal lié à l'élément. Ainsi, si on définit le tableau suivant :</p>

<pre class="brush: js notranslate">var monTableau = ["Air", "Eau", "Feu"];
</pre>

<p>On pourra accéder au premier élément du tableau en utilisant <code>monTableau[0]</code>, on accèdera au deuxième élément avec <code>monTableau[1]</code>. Les indices des éléments sont comptés à partir de 0.</p>

<div class="note">
<p><strong>Note :</strong> Les crochets peuvent également être utilisés pour faire référence aux propriétés du tableau (les tableaux sont des objets JavaScript à part entière). On pourra donc avoir :</p>

<pre class="brush: js notranslate">var arr = ["un", "deux", "trois"];
arr[2];         // "trois" - on accède à un élément du tableau
arr["length"];  // 3 - on accède à une propriété du tableau
</pre>
</div>

<h3 id="Comprendre_la_propriété_length">Comprendre la propriété <code>length</code></h3>

<p>En termes d'implémentation, les tableaux JavaScript stockent leurs éléments comme des propriétés normales, l'indice étant utilisé comme nom pour désigner la valeur de la propriété. La propriété <code>length</code> est elle un peu spéciale : elle renvoie toujours la valeur du plus grand indice du tableau plus 1. Dans l'exemple suivant, "Biduche" est placé à l'indice 30, <code>chats.length</code> renvoie donc 30 + 1). On rappelle que les indices des tableaux JavaScript commencent à partir de 0 et pas à partir de 1. Cela signifie que la valeur de la propriété <code><code>length</code></code> sera plus grande, de 1, par rapport à l'indice le plus élevé :</p>

<pre class="brush: js notranslate">var chats = [];
chats[30] = ['Biduche'];
console.log(chats.length); // 31
</pre>

<p>Il est aussi possible d'affecter une valeur à la propriété <code>length</code>. Si la valeur fournie est inférieure au nombre d'éléments stockés, cela tronquera la tableau. Si la valeur est 0, cela videra le tableau :</p>

<pre class="brush: js notranslate">var chats = ['Marie', 'Toulouse', 'Berlioz'];
console.log(chats.length); // 3

chats.length = 2;
console.log(chats); // affiche "Marie,Toulouse" - Berlioz a été retiré

chats.length = 0;
console.log(chats); // affiche [], le tableau est vide

chats.length = 3;
console.log(chats); // [ &lt;3 empty slots&gt; ]
</pre>

<h3 id="Parcourir_un_tableau">Parcourir un tableau</h3>

<p>Un tableau est une structure de données qui se prête particulièrement aux boucles, on pourra utiliser ces dernières pour parcourir les éléments du tableau de façon itérative. Voici un exemple de parcours simple :</p>

<pre class="brush: js notranslate">var couleurs = ['rouge', 'vert', 'bleu'];
for (var i = 0; i &lt; couleurs.length; i++) {
  console.log(couleurs[i]);
}
</pre>

<p>Si on sait qu'aucun des éléments ne vaut <code>false</code> dans un contexte booléen (par exemple, si le tableau contient des nœuds du <a href="/fr/docs/Web/API/Référence_du_DOM_Gecko">DOM</a>), on peut utiliser une formulation encore plus concise :</p>

<pre class="brush: js notranslate">var divs = document.getElementsByTagName('div');
for (var i = 0, div; div = divs[i]; i++) {
  /* On effectue un traitement sur les  div */
}
</pre>

<p>Cette syntaxe permet d'éviter d'avoir à vérifier la longueur du tableau et de gérer l'affectation de la variable <code>div</code> pour chaque élément du tableau.</p>

<p>La méthode {{jsxref("Array.forEach", "forEach()")}} fournit une autre méthode pour parcourir un tableau :</p>

<pre class="brush: js notranslate">var couleurs = ['rouge', 'vert', 'bleu'];
couleurs.forEach(function(couleur) {
  console.log(couleur);
});
</pre>

<p>Avec les fonctions fléchées (apparues avec ES6 / ECMAScript 2015), on peut obtenir un code plus concis :</p>

<pre class="brush: js notranslate">var couleurs = ['rouge', 'vert', 'bleu'];
couleurs.forEach(couleur =&gt; console.log(couleur));</pre>

<p>La fonction passée comme argument à <code>forEach()</code> est exécutée une fois pour chacun des éléments du tableau (l'élément du tableau sera passé comme argument de cette fonction). Les éléments qui n'ont pas de valeur affectée ne sont pas parcourus lors d'une boucle <code>forEach</code>.</p>

<p>On notera que les éléments ne sont pas parcourus lorsqu'ils n'ont pas eu de valeur d'affectée. Cependant, si on a affecté la valeur {{jsxref("undefined")}} de façon explicite à un élément, il sera pris en compte lors de la boucle :</p>

<pre class="brush: js notranslate">var tableau = ['premier', 'deuxième', , 'quatrième'];

// affiche ['premier', 'deuxième', 'quatrième'];
tableau.forEach(function(élément) {
  console.log(élément);
});

if(tableau[2] === undefined) { console.log('tableau[2] vaut undefined'); } // true

var tableau = ['premier', 'deuxième', undefined, 'quatrième'];

// renvoie ['premier', 'deuxième', undefined, 'quatrième'];
tableau.forEach(function(élément) {
  console.log(élément);
})</pre>

<p>Étant donné que les éléments des tableaux sont stockés comme des propriétés classiques, il n'est pas conseillé d'utiliser des boucles {{jsxref("Instructions/for...in")}} pour parcourir les tableaux car cela listerait également les propriétés énumérables (en plus des éléments).</p>

<h3 id="Méthodes_des_tableaux">Méthodes des tableaux</h3>

<p>L'objet <code>Array</code> possède les méthodes suivantes :</p>

<ul>
 <li>{{jsxref("Array.concat", "concat()")}} permet de fusionner deux ou plusieurs tableaux et de renvoyer le résultat dans un nouveau tableau :
  <pre class="brush: js notranslate">var monTableau = new Array("1", "2", "3");
monTableau = monTableau.concat("a", "b", "c"); // monTableau is now ["1", "2", "3", "a", "b", "c"]
</pre>
 </li>
 <li>{{jsxref("Array.join", "join(délimiteur = ',')")}} permet de fusionner les éléments du tableau en une chaîne de caractères :
  <pre class="brush: js notranslate">var monTableau = new Array("Air", "Eau", "Feu");
var list = monTableau.join(" - "); // list sera "Air - Eau - Feu"
</pre>
 </li>
 <li>{{jsxref("Array.push", "push()")}} permet d'ajouter un ou plusieurs éléments à la fin d'un tableau et renvoie la longueur du tableau :
  <pre class="brush: js notranslate">var monTableau = new Array("1", "2");
monTableau.push("3"); // monTableau vaut désormais ["1", "2", "3"]
</pre>
 </li>
 <li>{{jsxref("Array.pop", "pop()")}} permet de retirer le dernier élément (le plus à droite) du tableau et renvoie cet élément :
  <pre class="brush: js notranslate">var monTableau = new Array("1", "2", "3");
var dernier = monTableau.pop(); // monTableau vaut désormais ["1", "2"], dernier = "3"
</pre>
 </li>
 <li>{{jsxref("Array.shift", "shift()")}} retire le premier élément d'un tableau (le plus à gauche) et renvoie cet élément :
  <pre class="brush: js notranslate">var monTableau = new Array("1", "2", "3");
var premier = monTableau.shift(); // monTableau vaut désormais ["2", "3"], premier vaut "1"
</pre>
 </li>
 <li>{{jsxref("Array.unshift", "unshift()")}} ajoute un ou plusieurs éléments au début du tableau et renvoie la longueur du tableau ainsi modifié :
  <pre class="brush: js notranslate">var monTableau = new Array("1", "2", "3");
monTableau.unshift("4", "5"); // monTableau devient ["4", "5", "1", "2", "3"]</pre>
 </li>
 <li>{{jsxref("Array.slice", "slice(indice_début, indice_fin)")}} extrait une portion d'un tableau et renvoie un nouveau tableau avec ce fragment :
  <pre class="brush: js notranslate">var monTableau = new Array ("a", "b", "c", "d", "e");
monTableau = monTableau.slice(1, 4); // extrait les éléments entre l'indice 1 et jusqu'à
                                     // celui d'indice 3 (4-1), elle renvoie
                                     // [ "b", "c", "d"]
</pre>
 </li>
 <li>{{jsxref("Array.splice", "splice(indice, nbASupprimer, ajouterElement1, ajouterElement2, ...)")}} retire des éléments du tableau et (éventuellement) les remplace :
  <pre class="brush: js notranslate">var monTableau = new Array ("1", "2", "3", "4", "5");
monTableau.splice(1, 3, "a", "b", "c", "d"); // monTableau vaut désormais ["1", "a", "b", "c", "d", "5"]
  // Le code remplace à partir de l'indice 1 (où il y avait la valeur "2"), supprime trois éléments puis
  // insère les arguments fournis à la suite.
</pre>
 </li>
 <li>{{jsxref("Array.reverse", "reverse()")}} transpose les éléments du tableau à même ce tableau : le premier élément devient le dernier, le dernier devient le premier et ainsi de suite :
  <pre class="brush: js notranslate">var monTableau = new Array ("1", "2", "3");
monTableau.reverse(); // monTableau vaut maintenant [ "3", "2", "1" ]
</pre>
 </li>
 <li>{{jsxref("Array.sort", "sort()")}} trie les éléments d'un tableau à même ce tableau :
  <pre class="brush: js notranslate">var monTableau = new Array("Air", "Feu", "Eau");
monTableau.sort(); // trie le tableau [ "Air", "Eau", "Feu" ]
</pre>

  <p><code>sort()</code> peut également utiliser une fonction de rappel (<em>callback</em>) qui détermine comment les éléments sont comparés. La fonction compare deux arguments et renvoie une valeur selon les règles suivantes :</p>

  <ul>
   <li>Si <code>a</code> est inférieur à <code>b</code> selon l'ordre, renvoie -1 (ou un autre nombre négatif)</li>
   <li>Si <code>a</code> est supérieur à <code>b</code> selon l'ordre, renvoie 1 (ou un autre nombre positif)</li>
   <li>Si <code>a</code> et <code>b</code> sont considérés égaux, renvoie 0.</li>
  </ul>

  <p>Par exemple, on peut utilise la fonction suivante pour trier par rapport à la dernière lettre du mot :</p>

  <pre class="brush: js notranslate">var sortFn = function(a, b){
  if (a[a.length - 1] &lt; b[b.length - 1]) return -1;
  if (a[a.length - 1] &gt; b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
monTableau.sort(sortFn); // le tableau devient = ["Air","Feu","Eau"]</pre>
 </li>
</ul>

<p>Du code permettant d'émuler ces fonctions est disponible sur chacune des pages (<em>polyfill</em>). Le support natif de ces fonctionnalités dans les différents navigateurs peut être trouvé <a href="http://www.robertnyman.com/javascript/">ici</a><a href="http://www.robertnyman.com/javascript/">.</a></p>

<ul>
 <li>{{jsxref("Array.indexOf", "indexOf(élémentRecherché[, indiceDépart])")}} recherche la valeur <code>élémentRecherché</code> dans le tableau et renvoie l'indice du premier élément qui correspond :

  <pre class="brush: js notranslate">var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b'));    // Affiche 1
// On recherche après la première correspondance :
console.log(a.indexOf('b', 2)); // Affiche 3
console.log(a.indexOf('z'));    // Affiche -1 car 'z' n'a pas été trouvé
</pre>
 </li>
 <li>{{jsxref("Array.lastIndexOf", "lastIndexOf(élémentRecherché[, fromIndex])")}} fonctionne comme <code>indexOf</code>, mais recherche à partir de la fin du tableau :
  <pre class="brush: js notranslate">var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b'));    // Affiche 5
// On continue la recherche après la première correspondance en fin de tableau
console.log(a.lastIndexOf('b', 4)); // Affiche 1
console.log(a.lastIndexOf('z'));    // Affiche -1
</pre>
 </li>
 <li>{{jsxref("Array.forEach", "forEach(callback[, objetThis])")}} exécute la fonction <code>callback</code> sur chaque élément du tableau.
  <pre class="brush: js notranslate">var a = ['a', 'b', 'c'];
a.forEach(console.log); // Affichera la valeur de chaque élément dans la console
</pre>
 </li>
 <li>{{jsxref("Array.map", "map(callback[, objetThis])")}} renvoie un nouveau tableau dont les éléments sont les images des éléments du tableau courant par la fonction <code>callback</code> :
  <pre class="brush: js notranslate">var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // affichera A,B,C dans la console
</pre>
 </li>
 <li>{{jsxref("Array.filter", "filter(callback[, objetThis])")}} renvoie un nouveau tableau qui contient les éléments du tableau courant pour lesquels <code>callback</code> a renvoyé <code>true</code>.
  <pre class="brush: js notranslate">var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
console.log(a2); // Affichera 10,20,30 dans la console
</pre>
 </li>
 <li>{{jsxref("Array.every", "every(callback[, objetThis])")}} renvoie <code>true</code> si <code>callback</code> renvoie <code>true</code> pour chaque élément du tableau.
  <pre class="brush: js notranslate">function isNumber(value){
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // affiche true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // affiche false
</pre>
 </li>
 <li>{{jsxref("Array.some", "some(callback[, objetThis])")}} renvoie <code>true</code> si <code>callback</code> renvoie <code>true</code> pour au moins un élément du tableau.
  <pre class="brush: js notranslate">function isNumber(value){
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // Affiche true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // Affiche true
var a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // Affiche false
</pre>
 </li>
</ul>

<p>Les méthodes présentées ci-avant qui prennent une fonction de rappel (<em>callback</em>) en argument sont appelées méthodes itératives car elles parcourent le tableau de façon itérative. Chacune de ces méthodes peut prendre en compte un deuxième argument (optionnel) qui sera l'objet <code>this</code> pris en compte par le <em>callback</em>. Si ce deuxième argument n'est pas fourni, <code>this</code> vaudra la valeur de l'objet global.</p>

<p>La fonction de rappel est appelée avec trois arguments : le premier étant la valeur de l'élément courant, le deuxième est l'indice de cet élément et le troisième représente le tableau lui-même. Les fonctions JavaScript ignorent les arguments supplémentaires qui ne sont pas déclarés explicitement dans la liste des paramètres, on peut donc utiliser une fonction prenant un seul argument comme fonction de rappel.</p>

<ul>
 <li>{{jsxref("Array.reduce", "reduce(callback[, valeurInitiale])")}} applique <code>callback(premièreValeur, secondeValeur)</code> au fur et à mesure sur le tableau pour le réduire en une seule valeur, c'est cette valeur qui est renvoyée par la fonction :

  <pre class="brush: js notranslate">var a = [10, 20, 30];
var total = a.reduce(function(premier, deuxième) { return premier + deuxième; }, 0);
console.log(total) // Affiche 60
</pre>
 </li>
 <li>{{jsxref("Array.reduceRight", "reduceRight(callback[, valeurInitiale])")}} fonctionne comme <code>reduce()</code>, mais débute avec le dernier élément (parcourt le tableau de droite à gauche).</li>
</ul>

<p><code>reduce()</code> et <code>reduceRight()</code> sont à utiliser lorsqu'on souhaite n'obtenir qu'une seule valeur, récursivement, à partir des différents éléments du tableau. Pour plus d'informations sur l'utilisation d'une valeur d'initialisation pour ces deux fonctions, se référer à leurs pages : {{jsxref("Array.reduceRight")}} et {{jsxref("Array.reduce")}}</p>

<h3 id="Tableaux_multi-dimensionnels">Tableaux multi-dimensionnels</h3>

<p>Les tableaux peuvent être imbriqués les uns dans les autres. Cela signifie qu'un tableau peut avoir un élément dont la valeur est un tableau. En utilisant ce comportement, on peut donc créer des matrices, voire des tableaux à plusieurs dimensions.</p>

<p>Par exemple, avec le code suivant :</p>

<pre class="brush: js notranslate">var a = new Array(4);
for (i = 0; i &lt; 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j &lt; 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}
</pre>

<p>On pourra avoir le tableau suivant sur deux dimensions :</p>

<pre class="brush: js notranslate">Ligne 0 : [0,0] [0,1] [0,2] [0,3]
Ligne 1 : [1,0] [1,1] [1,2] [1,3]
Ligne 2 : [2,0] [2,1] [2,2] [2,3]
Ligne 3 : [3,0] [3,1] [3,2] [3,3]
</pre>

<h3 id="Les_tableaux_et_les_expressions_rationnelles">Les tableaux et les expressions rationnelles</h3>

<p>Lorsqu'un tableau est le résultat d'une correspondance entre une expression rationnelle et une chaîne de caractères, les éléments et propriétés du tableau fournissent des informations sur la correspondance. Les méthodes suivantes peuvent renvoyer un tableau : {{jsxref("Objets_globaux/RegExp/exec","RegExp.exec()")}}, {{jsxref("Objets_globaux/String/match/exec","String.match()")}},  {{jsxref("Objets_globaux/String/split","String.split()")}}. Pour plus d'informations sur les tableaux et les expressions rationnelles, voir le chapitre du guide JavaScript sur <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">les expressions rationnelles</a>.</p>

<h3 id="Manipuler_des_objets_semblables_à_des_tableaux">Manipuler des objets semblables à des tableaux</h3>

<p>Certains objets JavaScript tels que {{domxref("NodeList")}} (renvoyé par {{domxref("document.getElementsByTagName()")}}) ou l'objet <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments"><code>arguments</code></a> (disponible au sein d'une fonction) ressemblent à des tableaux mais n'en sont pas (ils n'ont pas toutes les méthodes décrites ci-avant par exemple). Ainsi, l'objet <code>arguments</code> fournit une propriété {{jsxref("Objets_globaux/Function/length","length")}} mais n'implémente pas la méthode {{jsxref("Array.forEach", "forEach()")}}.</p>

<p>Les méthodes du prototype des tableaux permettent d'utiliser les méthodes d'objets <code>Array</code> sur des objets semblables à des tableaux :</p>

<pre class="brush: js notranslate"> function alertArguments() {
   Array.prototype.forEach.call(arguments, function(item) {
     console.log(item);
   });
 }
</pre>

<p>Il est possible d'utiliser ces méthodes génériques sur des chaînes de caractères :</p>

<pre class="brush: js notranslate">Array.prototype.forEach.call("une chaîne", function(chr) {
   console.log(chr);
});</pre>

<h2 id="Les_tableaux_typés">Les tableaux typés</h2>

<p><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés JavaScript</a> sont des objets semblables à des tableaux qui fournissent un moyen d'accéder à des données binaires. Comme on l'a vu ci-avant, les objets {{jsxref("Array")}} grandissent et rétrécissent dynamiquement et peuvent contenir n'importe quelle valeur JavaScript. Les moteurs JavaScript effectuent des optimisations afin que les tableaux puissent être utilisés rapidement. Cependant, avec le développement des applications web, les applications viennent à manipuler des données audio, vidéo, binaires et accèdent à des données brutes via les <a href="/fr/docs/WebSockets">WebSockets</a> d'autres outils. Il apparaît donc nécessaire d'avoir les outils JavaScript pertinents pour manipuler efficacement des données binaires, organisées au sein de tableaux typés.</p>

<h3 id="Les_vues_et_les_tampons_de_mémoire_buffers_larchitecture_des_tableaux_typés">Les vues et les tampons de mémoire (<em>buffers</em>) : l'architecture des tableaux typés</h3>

<p>Afin de permettre un maximum de flexibilité et d'efficacité, les tableaux typés JavaScript séparent l'implémentation entre <strong>les tampons (<em>buffers</em>)</strong> et <strong>les vues (<em>views</em>)</strong>. Un tampon de mémoire, implémenté par l'objet {{jsxref("ArrayBuffer")}}, est un objet représentant un fragment de données. Un tampon n'a pas de format a proprement parler et il ne fournit aucun mécanisme pour accéder à son contenu. Afin d'accéder à la mémoire contenu dans le tampon, on a besoin d'utiliser une vue. Une vue fournit un contexte, c'est-à-dire un type de donnée, un indice de départ et un nombre d'éléments, qui permet de traiter les données initiales comme un vrai tableau typé.</p>

<p><img alt="Typed arrays in an ArrayBuffer" src="https://mdn.mozillademos.org/files/8629/typed_arrays.png"></p>

<h3 id="ArrayBuffer"><code>ArrayBuffer</code></h3>

<p>Le type {{jsxref("ArrayBuffer")}} est un type de donnée utilisé pour représenter un tampon de données binaire générique dont la longueur est fixée. Un tampon de données ne peut pas être manipulé directement. Pour manipuler les données, il faut créer une vue sur le tableau typé ou un objet {{jsxref("DataView")}} qui représente le tampon dans un format spécifique et qui pourra être utilisé pour lire et écrire des informations du tampon.</p>

<h3 id="Les_vues_qui_sont_des_tableaux_typés">Les vues qui sont des tableaux typés</h3>

<p>Les vues de tableaux typés possèdent des noms explicites et fournissent des vues pour les types numériques usuels tels que <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> et ainsi de suite. Il existe un type de vue spécial qui est <code>Uint8ClampedArray</code>. Ce type ramène les différentes valeurs exploitées entre 0 et 255. Cela peut notamment être utile pour <a href="/fr/docs/Web/API/ImageData">le traitement des données d'un canvas</a>.</p>

<p>{{page("/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray", "Les_objets_TypedArray")}}</p>

<p>Pour plus d'informations sur les tableaux typés, voir <a href="/fr/docs/Web/JavaScript/Tableaux_typés">l'article de la référence</a> sur les différents objets {{jsxref("TypedArray")}}.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Expressions_régulières", "Web/JavaScript/Guide/Collections_avec_clés")}}</p>
