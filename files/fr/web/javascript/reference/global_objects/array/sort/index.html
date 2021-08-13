---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/sort
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>sort()</code></strong> trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.</p>

<p>La complexité en espace mémoire et en temps utilisée pour le tri ne peut pas être garantie car elle dépend de l'implémentation.</p>

<div>{{EmbedInteractiveExample("pages/js/array-sort.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.sort()
<var>arr</var>.sort(fonctionComparaison)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>fonctionComparaison</code> {{optional_inline}}</dt>
 <dd>Ce paramètre optionnel permet de spécifier une fonction définissant l'ordre de tri. Si absente, le tableau est trié selon la valeur de point de code <a href="/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_litt%C3%A9raux#Unicode">Unicode</a> de chaque caractère, d'après la conversion en chaine de caractères de chaque élément. Cette fonction prendra deux arguments : le premier élément à comparer et le deuxième élément à comparer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau trié (le tri est effectué sur le tableau courant qui est modifié, aucune copie n'est réalisée).</p>

<h2 id="Description">Description</h2>

<p>Si le paramètre <code>fonctionComparaison</code> n'est pas fourni, les éléments qui ne valent pas <code>undefined</code> sont triés en les convertissant en chaines de caractères et en comparant ces chaines selon l'ordre des points de code Unicode. Par exemple, "banane" sera trié avant "cerise", mais "Cerise" arrivera avant "banane" à cause de la majuscule (les majuscules arrivent avant dans la liste). Dans un tri numérique, 9 sera trié avant 80, mais comme ces nombres sont convertis en chaînes de caractères, "80" arrive avant "9" selon l'ordre des unités de code UTF-16. Les éléments valant <code>undefined</code> sont placés à la fin du tableau.</p>

<div class="note">
<p><strong>Note :</strong> En UTF-16, les caractères Unicode situés après <code>\uFFFF</code> sont encodés avec deux unités de code <em>surrogates</em> sur l'intervalle <code>\uD800</code>-<code>\uDFFF</code>. Pour comparer les chaînes de caractères entre elles, ce sont les unités de code séparées qui sont prises en compte. Ainsi, le caractère formé par la paire <em>surrogate</em> <code>\uD655 \uDE55</code> sera trié avant le caractère <code>\uFF3A</code>.</p>
</div>

<p>Si le paramètre <code>fonctionComparaison</code> est fourni, les éléments du tableau (qui ne valent pas <code>undefined</code>) sont triés selon la valeur de retour de la fonction de comparaison. Si <code>a</code> et <code>b</code> sont deux éléments à comparer, alors :</p>

<ul>
 <li>Si <code>fonctionComparaison(a, b)</code> est inférieur à 0, on trie <code>a</code> avec un indice inférieur à <code>b</code> (<code>a</code> sera classé avant <code>b</code>)</li>
 <li>Si <code>fonctionComparaison(a, b)</code> renvoie 0, on laisse <code>a</code> et <code>b</code> inchangés l'un par rapport à l'autre, mais triés par rapport à tous les autres éléments. Note : la norme ECMAScript ne garantit pas ce comportement, par conséquent tous les navigateurs (par exemple les versions de Mozilla antérieures à 2003) ne respectent pas ceci.</li>
 <li>Si <code>fonctionComparaison(a, b)</code> est supérieur à 0, on trie <code>b</code> avec un indice inférieur à <code>a</code>.</li>
 <li><code>fonctionComparaison(a, b)</code> doit toujours renvoyer le même résultat à partir de la même paire d'arguments. Si la fonction renvoie des résultats incohérents, alors l’ordre dans lequel sont triés les éléments n’est pas défini.</li>
</ul>

<p>Une fonction de comparaison aura donc généralement la forme suivante :</p>

<pre class="brush: js">function compare(a, b) {
  if (<em>a est inférieur à b selon les critères de tri</em>)
     return -1;
  if (<em>a est supérieur à b selon les critères de tri</em>)
     return 1;
  // a doit être égal à b
  return 0;
}
</pre>

<p>Pour comparer des nombres plutôt que des chaînes, la fonction de comparaison peut simplement soustraire <code>b</code> à <code>a</code> (cela fonctionnera si le tableau ne contient pas {{jsxref("NaN")}} ou {{jsxref("Infinity")}}) :</p>

<pre class="brush: js">function compareNombres(a, b) {
  return a - b;
}
</pre>

<p>L'usage des {{jsxref("Opérateurs/L_opérateur_function", "expressions de fonctions","",11)}} s'avère très pratique avec la méthode <code>sort()</code> :</p>

<pre class="brush: js">var nombres = [4, 2, 5, 1, 3];
nombres.sort(function(a, b) {
  return a - b;
});
console.log(nombres);
// [1, 2, 3, 4, 5]
</pre>

<p>ECMAScript 2015 permet d'utiliser <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es">les fonctions fléchées</a> et ainsi d'obtenir une syntaxe plus concise :</p>

<pre class="brush: js">let nombres = [4, 2, 5, 1, 3];
nombres.sort((a, b) =&gt; a - b);
console.log(nombres);</pre>

<p>Les objets peuvent être triés d'après les valeurs d'une de leurs propriétés.</p>

<pre class="brush: js">var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];
items.sort(function (a, b) {
  return a.value - b.value;
});</pre>

<h3 id="Différences_dimplémentation">Différences d'implémentation</h3>

<p>Certaines implémentations de JavaScript utilisent un tri stable : l'ordre partiel de <code>a</code> et <code>b</code> ne change pas si <code>a</code> et <code>b</code> sont égaux. Si l'indice de <code>a</code> était inférieur à celui de <code>b</code> avant le tri, il le sera toujours après, quels que soient les mouvements de <code>a</code> et <code>b</code> dus au tri.</p>

<p>Le tri est stable dans <a href="/fr/docs/SpiderMonkey">SpiderMonkey</a> et tous les navigateurs basés sur Mozilla à partir de <a href="/fr/docs/Gecko">Gecko</a> 1.9 (voir le {{ Bug(224128) }}).</p>

<p>Le comportement de la méthode <code>sort()</code> a changé entre JavaScript 1.1 et JavaScript 1.2.</p>

<p>En JavaScript 1.1, sur certaines plateformes, la méthode <code>sort</code> ne fonctionnait pas. Le tri fonctionne sur toutes les plateformes à partir de JavaScript 1.2.</p>

<p>En JavaScript 1.2, cette méthode ne convertit plus les éléments non définis (<code>undefined</code>) en <code>null</code> ; elle les place en fin de tableau. Par exemple, supposons que vous ayez ce script :</p>

<pre class="brush: js">var a = [];
a[0] = "araignée";
a[5] = "zèbre";

function writeArray(x) {
  for (i = 0; i &lt; x.length; i++) {
    console.log(x[i]);
    if (i &lt; x.length-1)
      console.log(", ");
  }
}

writeArray(a);
a.sort();
console.log("\n");
writeArray(a);
</pre>

<p>En JavaScript 1.1, cette fonction affichait :</p>

<pre class="eval">araignée, null, null, null, null, zèbre
araignée, null, null, null, null, zèbre
</pre>

<p>En JavaScript 1.2, elle affichera :</p>

<pre class="eval">araignée, undefined, undefined, undefined, undefined, zèbre
araignée, zèbre, undefined, undefined, undefined, undefined
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Création_affichage_et_tri_dun_tableau">Création, affichage et tri d'un tableau</h3>

<p>L'exemple qui suit crée quatre tableaux et affiche le tableau original, puis les tableaux triés. Les tableaux numériques sont triés d'abord sans, puis avec une fonction de comparaison.</p>

<pre class="brush: js">var stringArray = ["Bosse", "Bleue", "Béluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNombres(a, b) {
  return a - b;
}

console.log("Chaînes : " + stringArray.join() +"\n");
console.log("Triées : " + stringArray.sort() +"\n\n");

console.log("Nombres : " + numberArray.join() +"\n");
console.log("Triés sans fonction de comparaison : " + numberArray.sort() +"\n");
console.log("Triés avec compareNombres : " + numberArray.sort(compareNombres) +"\n\n");

console.log("Chaînes numériques : " + numericStringArray.join() +"\n");
console.log("Triées sans fonction de comparaison : " + numericStringArray.sort() +"\n");
console.log("Triées avec compareNombres : " + numericStringArray.sort(compareNombres) +"\n\n");

console.log("Nombres et chaînes numériques : " + mixedNumericArray.join() +"\n");
console.log("Triés sans fonction de comparaison : " + mixedNumericArray.sort() +"\n");
console.log("Triés avec compareNombres : " + mixedNumericArray.sort(compareNombres) +"\n\n");
</pre>

<p>Cet exemple produit la sortie suivante. Comme on peut le voir, lorsqu'on utilise la fonction de comparaison, les nombres sont triés correctement qu'ils soient des nombres ou des chaînes numériques.</p>

<pre class="eval">Chaînes : Bosse,Bleue,Béluga
Triées : Bleue,Bosse,Béluga

Nombres : 40,1,5,200
Triés sans fonction de comparaison : 1,200,40,5
Triés avec compareNombres : 1,5,40,200

Chaînes numériques : 80,9,700
Triées sans fonction de comparaison : 700,80,9
Triées avec compareNombres : 9,80,700

Nombres et chaînes numériques : 80,9,700,40,1,5,200
Triés sans fonction de comparaison : 1,200,40,5,700,80,9
Triés avec compareNombres : 1,5,9,40,80,200,700
</pre>

<h3 id="Trier_des_caractères_non-ASCII">Trier des caractères non-ASCII</h3>

<p>Pour des chaines de caractères contenant des caractères non ASCII, c'est à dire des chaines de caractères contenant par exemple des accents (é, è, a, ä, etc.) : utilisez {{jsxref("String.localeCompare")}}. Cette fonction peut comparer ces caractères afin qu'ils apparaissent dans le bon ordre.</p>

<pre class="brush: js">var items = ["réservé", "premier", "cliché", "communiqué", "café" ,"adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]</pre>

<h3 id="Trier_avec_map">Trier avec map</h3>

<p>La fonction de comparaison peut être amenée à être appelée plusieurs fois pour un même élément du tableau. Selon la fonction utilisée, cela peut entraîner des problèmes de performances. Plus le tableau est grand et plus la fonction de comparaison est complexe, plus il sera judicieux d'envisager des opérations de fonctions appliquées au tableau (<em>map</em>). L'idée est la suivante : on extrait les valeurs du tableau original, en appliquant des opérations dans un tableau temporaire, puis on trie ce tableau temporaire. Enfin, on recompose le tableau final avec les éléments du premier tableau et l'ordre obtenu.</p>

<pre class="brush: js">// le tableau à trier
var liste = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Création d'objet temporaire qui contient les positions
// et les valeurs en minuscules
var mapped = liste.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
})

// on trie l'objet temporaire avec les valeurs réduites
mapped.sort(function(a, b) {
  if (a.value &gt; b.value) {
    return 1;
  }
  if (a.value &lt; b.value) {
    return -1;
  }
  return 0;
});

// on utilise un objet final pour les résultats
var result = mapped.map(function(e){
  return liste[e.index];
});
</pre>

<div class="note">
<p><strong>Note :</strong> Une bibliothèque <em>open source</em> utilise cette approche : <code><a href="https://null.house/open-source/mapsort">mapsort</a></code>.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.11', 'Array.prototype.sort')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.sort', 'Array.prototype.sort')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.sort', 'Array.prototype.sort')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.sort")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.reverse()")}}</li>
 <li>{{jsxref("String.prototype.localeCompare()")}}</li>
 <li><a href="https://v8.dev/blog/array-sort">À propos de la stabilité du tri pour le moteur V8</a></li>
</ul>
