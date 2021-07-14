---
title: Collections avec clés
slug: Web/JavaScript/Guide/Keyed_collections
tags:
  - Collections
  - Guide
  - JavaScript
  - Map
  - set
translation_of: Web/JavaScript/Guide/Keyed_collections
original_slug: Web/JavaScript/Guide/Collections_avec_clés
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Collections_indexées", "Web/JavaScript/Guide/Utiliser_les_objets")}}</div>

<p>Ce chapitre présente les collections de données qui sont ordonnées avec une clé. Les objets <code>Map</code> et <code>Set</code> contiennent des éléments sur lesquels on peut itérer dans leur ordre d'insertion.</p>

<h2 id="Maps">Maps</h2>

<h3 id="Le_type_Map">Le type <code>Map</code></h3>

<p>ECMAScript 2015 introduit une nouvelle structure de données pour faire correspondre des données entre elle. Un objet {{jsxref("Map")}} représente une collection de données qui sont des correspondances entre des clés ou valeurs et pour lequel on peut itérer dans l'ordre d'insertion pour lister les différentes clés / valeurs.</p>

<p>Le code suivant illustre certaines opérations basiques avec <code>Map</code>. Pour plus d'informations sur cet objet, voir également la page de référence {{jsxref("Map")}}. Il est possible d'utiliser une boucle {{jsxref("Instructions/for...of","for...of")}} pour renvoyer un tableau <code>[clé, valeur]</code> à chaque itération.</p>

<pre class="brush: js">var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"
</pre>

<h3 id="Comparaison_entre_les_types_Object_et_Map">Comparaison entre les types <code>Object</code> et <code>Map</code></h3>

<p>Habituellement, les objets {{jsxref("Object", "objets", "", 1)}} ont été utilisés pour faire correspondre des chaînes avec des valeurs. Les objets permettent d'associer des clés avec des valeurs, de récupérer ces valeurs, de supprimer des clés, de détecter si quelque chose est enregistré dans une clé. Le type <code>Map</code> possède cependant certains avantages pour être utilisés comme <em>maps</em>.</p>

<ul>
 <li>Les clés d'un objet de type <code>Object</code> sont des chaînes de caractères. Pour <code>Map</code>, une clé peut être une valeur de n'importe quel type.</li>
 <li>On peut simplement obtenir la taille d'un objet <code>Map</code> alors qu'il faut tenir compte manuellement du nombre de clés contenue dans un objet <code>Object</code>.</li>
 <li>Les itérations sur les <em>maps</em> se font dans l'ordre d'insertion des éléments.</li>
 <li>Un objet de type <code>Object</code> possède un prototype, il y a donc des clés par défaut déjà présentes dans l'objet. (cela peut être surchargé en utilisant <code>map = Object.create(null)</code>).</li>
</ul>

<p>Pour savoir si on doit utiliser le type <code>Map</code> ou le type <code>Object</code>, on peut considérer les aspects suivants :</p>

<ul>
 <li>On utilisera des <em>maps</em> plutôt que des objets lorsque les clés sont inconnues avant l'exécution et lorsque toutes les clés sont de même type et que les valeurs sont de même type.</li>
 <li>On utilisera des <em>maps</em> lorsque les clés peuvent être des valeurs primitives autres que des chaînes de caractères (en effet, les objets considèrent toutes leurs clés comme des chaînes en convertissant les valeurs).</li>
 <li>On utilisera des objets lorsqu'il y a une logique propre à des éléments individuels.</li>
</ul>

<h3 id="Le_type_WeakMap">Le type <code>WeakMap</code></h3>

<p>L'objet {{jsxref("WeakMap")}} est une collection de paires clés/valeurs pour lesquelles <strong>les clés sont uniquement des objets</strong> (les valeurs peuvent être d'un type arbitraire). Les références vers les objets sont des références « faibles ». Cela signifie qu'elles seront collectées par le ramasse-miettes s'il n'y a pas d'autres références vers cet objet. L'API <code>WeakMap</code> offre les mêmes fonctionnalités que l'API <code>Map</code>.</p>

<p>La différence entre le type <code>Map</code> et le type <code>WeakMap</code> est que les clés d'un objet <code>WeakMap</code> ne sont pas énumérables (c'est-à-dire qu'on n'a pas de méthode pour donner la liste des clés). S'il en existait une, la liste dépendrait de l'état d'avancement du ramasse-miettes, ce qui introduirait un non-déterminisme.</p>

<p>Pour plus d'informations et d'exemples, voir également le paragraphe « Pourquoi WeakMap ? » sur l'article {{jsxref("WeakMap")}} de la référence.</p>

<p>Un cas d'utilisation des objets <code>WeakMap</code> est le stockage de données privées d'un objet ou pour cacher certains détails d'implémentation. L'exemple qui suit est tiré du billet de blog de Nick Fitzgerald <a href="http://fitzgeraldnick.com/weblog/53/">« Masquer des détails d'implémentation avec les WeakMaps ECMAScript 6 »</a>. Les données et méthodes privées sont stockées dans l'objet WeakMap <code>privates</code>. Tout ce qui est exposé par l'instance et le prototype est public. Tout ce qui est en dehors est inaccessible car <code>privates</code> n'est pas exporté depuis le module :</p>

<pre class="brush: js">const privates = new WeakMap();

function Public() {
  const me = {
    // Les données privées ici
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // On fait des choses avec les données privées dans `me`...
};

module.exports = Public;
</pre>

<h2 id="Les_ensembles">Les ensembles</h2>

<h3 id="Le_type_Set">Le type <code>Set</code></h3>

<p>Les objets {{jsxref("Set")}} sont des ensembles de valeurs. Il est possible de les parcourir dans l'ordre d'insertion des éléments. Une valeur d'un élément <code>Set</code> ne peut y apparaître qu'une seule fois, il est unique pour cette instance de <code>Set</code>.</p>

<p>Le code suivant illustre certaines opérations basiques avec <code>Set</code>. Voir aussi la page {{jsxref("Set")}} pour plus d'exemples et l'API complète.</p>

<pre class="brush: js">var monEnsemble = new Set();
monEnsemble.add(1);
monEnsemble.add("du texte");
monEnsemble.add("toto");

monEnsemble.has(1); // true
monEnsemble.delete("toto");
monEnsemble.size; // 2

for (let item of monEnsemble) console.log(item);
// 1
// "du texte"
</pre>

<h3 id="Convertir_des_tableaux_(Array)_en_ensembles_(Set)">Convertir des tableaux (<code>Array</code>) en ensembles (<code>Set</code>)</h3>

<p>Il est possible de créer un {{jsxref("Array")}} à partir d'un <code>Set</code> grâce à {{jsxref("Array.from")}} ou l'<a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition">opérateur de décomposition</a>. Pour effectuer la conversion dans l'autre sens, on peut utiliser le constructeur <code>Set</code> avec un argument de type <code>Array</code>. Encore une fois, les objets <code>Set</code> stockent des valeurs uniques, les éléments dupliqués dans un tableau seront supprimés lors de la conversion.</p>

<pre class="brush: js">Array.from(monSet);
[...monSet2];

monSet2 = new Set([1,2,3,4]);
</pre>

<h3 id="Comparaison_entre_Array_et_Set">Comparaison entre <code>Array</code> et <code>Set</code></h3>

<p>Historiquement, on représentait des ensembles avec des tableaux JavaScript. Ce nouveau type, <code>Set</code>, possède certains avantages :</p>

<ul>
 <li>Lorsqu'on souhaite vérifier si un élément existe déjà dans un tableau, on est obligé d'utiliser {{jsxref("Array.indexOf", "indexOf")}} ce qui peut diminuer les performances.</li>
 <li>Les objets <code>Set</code> permettent de supprimer les éléments avec leur valeur. Avec un tableau, il faudrait « découper » le tableau sur l'indice de l'élément.</li>
 <li>Dans un tableau, la valeur {{jsxref("NaN")}} ne peut pas être trouvée avec la méthode <code>indexOf</code>.</li>
 <li>Les objets <code>Set</code> permettent de stocker des valeurs uniques, il n'est pas nécessaire d'effectuer des vérifications manuellement.</li>
</ul>

<h3 id="Le_type_WeakSet">Le type <code>WeakSet</code></h3>

<p>Les objets {{jsxref("WeakSet")}} sont des ensembles d'objets. Un objet d'un <code>WeakSet</code> ne peut y apparaître qu'une seule fois maximum. On ne peut pas itérer sur les objets <code>WeakSet</code> (ils ne sont pas énumérables).</p>

<p>Les principales différences avec l'objet {{jsxref("Set")}} sont :</p>

<ul>
 <li>Contrairement aux objets <code>Set</code>, les objets <code>WeakSet</code> sont des ensembles qui ne comprennent <strong>que des objets</strong>, les valeurs ne peuvent pas être d'un type arbitraire.</li>
 <li>Les objets <code>WeakSet</code> utilisent des références faibles vers les objets. Ainsi, s'il n'y a pas d'autres références vers l'objet stocké dans le <code>WeakSet</code>, celui-ci pourra être collecté par le ramasse-miettes pour libérer de la mémoire. Cela signifie également qu'on ne peut pas maintenir une liste des différents objets contenus dans l'ensemble : les objets <code>WeakSet</code> ne sont pas énumérables.</li>
</ul>

<p>Les cas d'utilisations pour les objets <code>WeakSet</code> objects sont relativement limités. Ils empêcheront toute fuite mémoire donc on pourra, de façon sécurisée, les utiliser avec des éléments DOM qui pourront être des clés (pour les utiliser par ailleurs, etc.).</p>

<h2 id="Égalité_des_clés_et_des_valeurs_avec_Map_et_Set">Égalité des clés et des valeurs avec <code>Map</code> et <code>Set</code></h2>

<p>L'égalité utilisée pour les clés des objets <code>Map</code> et celle utilisée pour les valeurs des objets <code>Set</code> sont les mêmes : elles sont basées sur <a href="https://tc39.github.io/ecma262/#sec-samevaluezero">l'algorithme suivant</a> :</p>

<ul>
 <li>L'égalité fonctionne de la même façon qu'avec l'opérateur d'égalité stricte <code>===</code>.</li>
 <li><code>-0</code> et <code>+0</code> sont considérés égaux.</li>
 <li>{{jsxref("NaN")}} est considéré égal à lui-même (contrairement à ce qu'on obtient avec <code>===</code>).</li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Collections_indexées", "Web/JavaScript/Guide/Utiliser_les_objets")}}</p>
