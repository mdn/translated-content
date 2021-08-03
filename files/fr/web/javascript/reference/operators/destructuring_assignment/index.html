---
title: Affecter par décomposition
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
tags:
  - Destructuration
  - Affectation de déstructuration
  - ECMAScript 2015
  - ES6
  - JavaScript
  - Caractéristiques de la langue
  - Déstructuration des objets imbriqués et des tableaux
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Destructuring_assignment
original_slug: Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'<strong>affectation par décomposition </strong>(<em>destructuring </em>en anglais) est une expression JavaScript qui permet d'extraire (<em>unpack</em> en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20

// Proposition de syntaxe (niveau 4)
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
</pre>

<div class="note">
<p><strong>Note :</strong> <code>{a, b} = {a:1, b:2}</code> n'est pas syntaxiquement valide en tant que tel, en effet <code>{a, b}</code> est ici considéré comme un bloc et non comme un objet littéral.</p>

<p>Cependant, <code>({a, b} = {a:1, b:2})</code> sera valide comme pour la forme <code>let {a, b} = {a:1, b:2}</code>.</p>
</div>

<h2 id="Description">Description</h2>

<p>Ces expressions utilisant des littéraux pour les <a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Litt.C3.A9raux_objets">objets</a> ou les <a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Litt.C3.A9raux_de_tableaux">tableaux</a> permettent de créer simplement des données regroupées. Une fois créées, on peut les utiliser de n'importe quelle façon, y compris comme valeur renvoyée par une fonction.</p>

<pre class="brush: js">const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de données
const [y, z] = x; // On utilise l'affectation par décomposition
console.log(y); // 1
console.log(z); // 2
</pre>

<p>L'intérêt de l'assignation par décomposition est de pouvoir lire une structure entière en une seule instruction. Il y a également d'autres choses que vous pouvez faire avec cette expression, comme montré dans les exemples ci-dessous.</p>

<p>Cette syntaxe est semblable aux fonctionnalités offertes par des langages tels que Perl et Python.</p>

<h2 id="Décomposition_dun_tableau">Décomposition d'un tableau</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: js">const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un    = toto[0];
const deux  = toto[1];
const trois = toto[2];

// en utilisant la décomposition
const [un, deux, trois] = toto;</pre>

<h3 id="Affectation_sans_déclaration">Affectation sans déclaration</h3>

<p>L'affectation par décomposition peut être effectuée sans qu'il y ait de déclaration directement dans l'instruction d'affectation. Par exemple :</p>

<pre class="brush: js">let a, b;
[a, b] = [1, 2];
console.log(a);  // 1
console.log(b);  // 2</pre>

<h3 id="Valeurs_par_défaut">Valeurs par défaut</h3>

<p>On peut définir une valeur par défaut au cas où la valeur extraite du tableau soit {{jsxref("undefined")}}. Par exemple :</p>

<pre class="brush: js">let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
</pre>

<h3 id="Échange_de_variables">Échange de variables</h3>

<p>Une fois le fragment de code exécuté, on aura <var>b</var> égal à 1 et <var>a</var> égal à 3. S'il n'avait pas été possible d'utiliser l'affectation par décomposition, l'échange des valeurs aurait nécessité une variable temporaire (pour des données binaires, on aurait pu utiliser une <a class="external" href="https://fr.wikipedia.org/wiki/Permutation_(informatique)#En_utilisant_l.27op.C3.A9ration_XOR">permutation XOR</a>).</p>

<pre class="brush:js">let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1</pre>

<h3 id="Renvoyer_plusieurs_valeurs">Renvoyer plusieurs valeurs</h3>

<p>Grâce à l'affectation par décomposition, les fonctions peuvent renvoyer plusieurs valeurs. Il était déjà possible de renvoyer un tableau mais cela ajoute un nouveau degré de flexibilité.</p>

<pre class="brush:js">function f() {
  return [1, 2];
}
</pre>

<p>Les valeurs de retour sont déclarées via une syntaxe semblable à celle utilisée pour déclarer les tableaux, utilisant les crochets. On peut ainsi renvoyer autant de valeurs que souhaité. Dans cet exemple, <code>f()</code> renvoie les valeurs <code>[1, 2]</code>.</p>

<pre class="brush:js">let a, b;
[a, b] = f();
console.log("A vaut " + a + " B vaut " + b);
</pre>

<p>L'instruction <code>[a, b] = f()</code> assigne, dans l'ordre, les résultats de la fonction aux variables représentées entre les crochets. Ainsi, ici <var>a</var> vaut 1 et b vaut 2.</p>

<p>On peut également récupérer la valeur de retour comme un tableau :</p>

<pre class="brush:js">const x = f();
console.log("X vaut " + x);
</pre>

<p>Et on aura x qui sera égal au tableau contenant 1 et 2.</p>

<h3 id="Ignorer_certaines_valeurs">Ignorer certaines valeurs</h3>

<p>On peut également ignorer certaines des valeurs renvoyées qu'on ne souhaiterait pas traiter :</p>

<pre class="brush:js">function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log("A vaut " + a + " B vaut " + b);
</pre>

<p>Après avoir exécuté ce code, on aura a égal à 1 et b égal à 3. La valeur 2 est ignorée. On peut ignorer n'importe laquelle des valeurs (voire toutes). Par exemple :</p>

<pre class="brush:js">[,,] = f();
</pre>

<h3 id="Exploiter_les_résultats_dune_expression_rationnelle">Exploiter les résultats d'une expression rationnelle</h3>

<p>Lorsque la méthode <code><a href="/fr/docs/JavaScript/Reference/Objets_globaux/Object/RegExp/Exec">exec()</a></code>, liées aux expressions rationnelles, trouve une correspondance, elle renvoie un tableau qui contient d'abord la partie complète de la chaîne qui correspond puis ensuite les différentes portions correspondant aux différents groupes. L'affectation par décomposition permet de filtrer simplement les valeurs qu'on souhaite exploiter. Ici, on ignore le premier élément qui est la correspondance complète :</p>

<pre class="brush:js">function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/fr/Web/JavaScript", "https", "developer.mozilla.org", "fr/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
</pre>

<h3 id="Affecter_le_reste_dun_tableau_à_une_variable">Affecter le reste d'un tableau à une variable</h3>

<p>On peut également utiliser la décomposition d'un tableau afin d'en affecter une partie à une variable :</p>

<pre class="brush: js">const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]</pre>

<p>Un exception {{jsxref("SyntaxError")}} sera levée si une virgule est laissée à la fin de l'élément du reste du tableau de gauche :</p>

<pre class="brush: js example-bad">const [a, ...b,] = [1, 2, 3]
// SyntaxError : un élément du reste ne peut pas avoir
//               de virgule à la fin</pre>

<h2 id="Décomposer_un_objet">Décomposer un objet</h2>

<h3 id="Exemple_simple_2">Exemple simple</h3>

<pre class="brush: js">const o = {p: 42, q: true};
const {p, q} = o;

console.log(p); // 42
console.log(q); // true

// Assign new variable names
const {p: toto, q: truc} = o;

console.log(toto); // 42
console.log(truc); // true
</pre>

<h3 id="Affectation_sans_déclaration_2">Affectation sans déclaration</h3>

<p>Il est possible d'effectuer une affectation par décomposition même si aucune déclaration n'est directement utilisée dans l'instruction d'affectation. Par exemple :</p>

<pre class="brush: js">let a, b;
({a, b} = {a:1, b:2});
</pre>

<div class="note">
<p><strong>Note :</strong> Les parenthèses <code>( ... )</code> utilisées autour de l'instruction sont nécessaires pour que la partie gauche soit bien interprétée comme un objet littéral et non comme un bloc. Il est également nécessaire d'avoir un point-virgule avant les parenthèses de l'instruction car sinon, ces parenthèses peuvent être interprétées comme un appel de fonction.</p>
</div>

<h3 id="Affecter_avec_un_nom_différent">Affecter avec un nom différent</h3>

<p>Lorsqu'on décompose un objet, on peut affecter la variable obtenue sur une variable qui possède un autre nom (que celui de la propriété) :</p>

<pre class="brush: js">const o = {p: 42, q: true};
const {p: toto, q: truc} = o;

console.log(toto); // 42
console.log(truc); // true</pre>

<p>Ici, par exemple, <code>const {p: toto} = o</code> prend la propriété <code>p</code> de l'objet <code>o</code> pour l'affecter à une variable locale intitulée <code>toto</code>.</p>

<h3 id="Valeurs_par_défaut_2">Valeurs par défaut</h3>

<p>Une variable peut recevoir une valeur par défaut lors de la décomposition si la propriété correspondante de l'objet vaut <code>undefined</code>.</p>

<pre class="brush: js">const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5</pre>

<h3 id="Affecter_de_nouveaux_noms_aux_variables_et_fournir_des_valeurs_par_défaut">Affecter de nouveaux noms aux variables et fournir des valeurs par défaut</h3>

<p>Il est possible d'extraitre une valeur d'un objet pour lui affecter un nouveau nom et lui affecter une valeur par défaut au cas où la valeur extraite vaut <code>undefined</code>.</p>

<pre class="brush: js">const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5</pre>

<h3 id="Arguments_par_défaut_dune_fonction">Arguments par défaut d'une fonction</h3>

<h4 id="Version_ES5">Version ES5</h4>

<pre class="brush: js">function dessinGrapheES5(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var coords = options.coords === undefined ? { x: 0, y: 0 } : options.coords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, coords, radius);
  // seulement ensuite on dessine le graphe
}

dessinGrapheES5({
  coords: { x: 18, y: 30 },
  radius: 30
});</pre>

<h4 id="Version_ES2015">Version ES2015</h4>

<pre class="brush: js">function dessinGrapheES2015({size = 'big', coords = { x: 0, y: 0 }, radius = 25} = {})
{
  console.log(size, coords, radius);
  // on dessine le graphe
}

dessinGrapheES2015({
  coords: { x: 18, y: 30 },
  radius: 30
});</pre>

<div class="note">
<p><strong>Note :</strong> Dans la signature de la fonction <code>dessinGrapheES2015</code> ci avant, la valeur décomposée à gauche utilise un objet vide comme opérande droit (<code>{size = 'big', coords = { x: 0, y: 0 }, radius = 25} = {}</code>). On aurait également pu écrire la fonction sans cet objet vide mais, dans ce cas, il aurait fallu au moins un argument pour utiliser la fonction. Avec cette « forme », <code>dessinGrapheES2015()</code> pourra être appelée sans paramètre.</p>
</div>

<h3 id="Décomposition_imbriquée_avec_objets_et_tableaux">Décomposition imbriquée avec objets et tableaux</h3>

<pre class="brush:js">const metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

let { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"</pre>

<h3 id="Décomposition_et_utilisation_de_for_of">Décomposition et utilisation de <a href="/fr/docs/JavaScript/Référence_JavaScript/Instructions/for...of">for of</a></h3>

<pre class="brush: js">const personnes = [
  {
    nom: "Alain Dupont",
    famille: {
      mere: "Isabelle Dupont",
      pere: "Jean Dupont",
      soeur: "Laure Dupont"
    },
    age: 35
  },
  {
    nom: "Luc Marchetoile",
    famille: {
      mere: "Patricia Marchetoile",
      pere: "Antonin Marchetoile",
      frere: "Yann Marchetoile"
    },
    age: 25
  }
];

for (const {nom: n, famille: { pere: f } } of personnes) {
  console.log("Nom : " + n + ", Père : " + f);
}

// "Nom : Alain Dupont, Père : Jean Dupont"
// "Nom : Luc Marchetoile, Père : Antonin Marchetoile"</pre>

<h3 id="Décomposer_les_propriétés_dobjets_passés_en_arguments">Décomposer les propriétés d'objets passés en arguments</h3>

<pre class="brush:js">const user = {
  id: 42,
  displayName: "jbiche",
  fullName: {
    firstName: "Jean",
    lastName: "Biche"
  }
};

function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " est " + name);
}

console.log("userId: " + userId(user)); w// "userId: 42"
whois(user); // "jbiche est Jean"</pre>

<p>Cela permet d'accéder directement à <code>id</code>, <code>displayName</code> et <code>firstName</code> depuis l'objet <code>user</code>.</p>

<h3 id="Les_noms_de_propriétés_calculés_et_la_décomposition">Les noms de propriétés calculés et la décomposition</h3>

<p>Il est possible d'utiliser des noms de propriétés calculés, comme avec les <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet#Noms_de_propri.C3.A9t.C3.A9s_calcul.C3.A9s">littéraux objets</a>, avec la décomposition.</p>

<pre class="brush: js">let clef = "z";
let { [clef]: toto } = { z: "truc" };

console.log(toto); // "truc"</pre>

<h3 id="Syntaxe_du_«_reste_»_et_décomposition_dun_objet">Syntaxe du « reste » et décomposition d'un objet</h3>

<p><a href="https://github.com/tc39/proposal-object-rest-spread">La proposition de décomposition des propriétés et de la syntaxe du reste dans ECMAScript</a> ajoute <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste">la syntaxe du reste</a> pour la décomposition. La propriété du reste permet de collecter les propriétés énumérables restantes qui n'auraient pas été extraites par la décomposition :</p>

<pre class="brush: js">let {a, b, ...reste } = {a: 10, b: 20, c: 30, d: 40};
a; // 10
b; // 20
reste; // { c: 30, d: 40 }</pre>

<h3 id="Gestion_des_identifiants_invalides_comme_noms_de_propriétés">Gestion des identifiants invalides comme noms de propriétés</h3>

<p>Si besoin, on peut également utiliser la décomposition pour fournir un alias à des noms de propriétés qui ne seraient pas des identifiants valides. Par exemple :</p>

<pre class="brush: js">const toto = {'truc-bidule': true}
const {'truc-bidule': trucBidule } = toto;

console.log(trucBidule);  // "true"</pre>

<h3 id="Combiner_la_décomposition_de_tableaux_et_dobjets">Combiner la décomposition de tableaux et d'objets</h3>

<p>Il est possible de décomposer un tableau et un objet simultanément. Dans l'exemple qui suit, on accède ainsi à la propriété <code>nom</code> du troisième élément du tableau <code>props</code>:</p>

<pre class="brush: js">const props = [
  { id: 1, nom: "Toto"},
  { id: 2, nom: "Truc"},
  { id: 3, nom: "Bidule"}
];

const [,, {nom}] = props;
console.log(nom); // Bidule</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-destructuring-assignment', 'Destructuring assignment')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-destructuring-assignment', 'Destructuring assignment')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.destructuring")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation">Opérateurs d'affectation</a></li>
 <li><a href="https://tech.mozfr.org/post/2015/06/05/ES6-en-details-%3A-la-decomposition">ES6 en détails : La décomposition sur tech.mozfr.org</a></li>
</ul>
