---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - ECMAScript2016
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/entries
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.entries()</strong></code> renvoie un tableau des propriétés propres énumérables d'un objet dont la clé est une chaîne de caractères, sous la forme de paires <code>[clé, valeur]</code>, dans le même ordre qu'une boucle {{jsxref("Instructions/for...in", "for...in")}} (la boucle <code>for-in</code> est différente car elle parcourt la chaîne des prototypes).</p>

<p>L'ordre du tableau renvoyé par cette méthode ne dépend pas de la façon dont l'objet est défini. S'il faut garantir un certain ordre, on pourra utiliser la méthode {{jsxref("Array.sort()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/object-entries.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.entries(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite connaître les propriétés propres énumérables dont la clé est une chaîne de caractères, sous la forme de paires <code>[clé, valeur]</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau qui contient les propriétés énumérables propres de l'objet sous la forme de paires <code>[clé, valeur]</code>.</p>

<h2 id="Description">Description</h2>

<p><code>Object.entries()</code> renvoie un tableau dont les éléments sont des paires (des tableaux à deux éléments)  <code>[clé, valeur]</code> qui correspondent aux propriétés énumérables qui sont directement présentes sur l'objet passé en argument. L'ordre du tableau est le même que celui utilisé lorsqu'on parcourt les valeurs manuellement.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var obj = { toto: "truc", machin: 42 };
console.log(Object.entries(obj)); // [ ['toto', 'truc'], ['machin', 42] ]

// Un objet semblable à un tableau
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Un objet semblable à un tableau
// dont les clés sont aléatoirement ordonnées
var un_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(un_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getToto est une propriété non énumérable
var mon_obj = Object.create({}, { getToto: { value: function() { return this.toto; } } });
mon_obj.toto = "truc";
console.log(Object.entries(mon_obj)); // [ ['toto', 'truc'] ]

// un argument de type primitif sera
// converti en un objet
console.log(Object.entries("toto")); // [ ['0', 't'], ['1', 'o'], ['2', 't'],  ['3', 'o'] ]

// Un tableau vide pour les types primitifs qui n'ont pas de propriétés
console.log(Object.entries(100)); // [ ]

// parcourir les clés-valeurs
var autreObjet = {a:5, b:7, c:9};

for (var [cle, valeur] of Object.entries(autreObjet)){
  console.log(cle + ' ' + valeur);
}

// Ou encore, en utilisant les méthodes génériques
Object.entries(autreObjet).forEach(([clé, valeur]) =&gt; {
  console.log(clé + ' ' + valeur);
});
</pre>

<h3 id="Convertir_un_objet_en_Map">Convertir un objet en <code>Map</code></h3>

<p>Le constructeur {{jsxref("Map", "new Map()")}} accepte un argument itérable pour décrire les entrées du tableau associatif. Grâce à <code>Object.entries</code>, il est possible de convertir simplement un objet {{jsxref("Object")}} en un objet {{jsxref("Map")}} :</p>

<pre class="brush: js">var obj = { toto: "truc", machin: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { toto: "truc", machin: 42 }</pre>

<h3 id="Parcourir_un_objet">Parcourir un objet</h3>

<p>En utilisant <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition#Décomposition_d'un_tableau">la décomposition des tableaux</a>, on peut simplement parcourir les différentes propriétés d'un objet :</p>

<pre class="brush: js">const obj = { toto: "truc", bidule: 42 };
Object.entries(obj).forEach(
  ([clé, valeur]) =&gt; console.log(`${clé}: ${valeur}`)
);
// "toto: truc"
// "bidule: 42"</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Afin d'ajouter le support pour <code>Object.entries</code> dans des environnements plus anciens qui ne supportent pas la méthode nativement, vous pouvez utiliser une prothèse comme celle proposée sur le dépôt <a href="https://github.com/tc39/proposal-object-values-entries">tc39/proposal-object-values-entries</a> ou sur le dépôt <a href="https://github.com/es-shims/Object.entries">es-shims/Object.entries</a>.</p>

<p>Vous pouvez également utiliser la prothèse suivante (qui nécessitera la prothèse pour <code>Object.prototype.keys()</code> si on souhaite être compatible avec IE 8 et les versions antérieures) :</p>

<pre class="brush: js">if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}</pre>

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
   <td>{{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-object.entries', 'Object.entries')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.entries")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Énumérabilité et rattachement des propriétés</a></li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.values()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.fromEntries()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Map.prototype.entries()")}}</li>
 <li>{{jsxref("Map.prototype.keys()")}}</li>
 <li>{{jsxref("Map.prototype.values()")}}</li>
</ul>
