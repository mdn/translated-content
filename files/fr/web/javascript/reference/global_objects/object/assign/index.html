---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/assign
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/assign
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.assign()</strong></code> est utilisée afin de copier les valeurs de toutes les propriétés directes (non héritées) d'un objet qui sont énumérables sur un autre objet cible. Cette méthode renvoie l'objet cible.</p>

<div>{{EmbedInteractiveExample("pages/js/object-assign.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.assign(<var>cible</var>, ...<var>sources</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>sources</code></dt>
 <dd>Le(s) objet(s) source(s).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet cible, éventuellement modifié, est renvoyé.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>Object.assign</code> permet de ne copier que les propriétés énumérables et propres (les propriétés qui ne sont pas héritées) depuis un objet source vers un objet cible. Elle utilise <code>[[Get]]</code> sur l'objet source et <code>[[Set]]</code> sur l'objet cible, ainsi, elle déclenchera les accesseurs/mutateurs. De cette façon, elle <em>affecte</em> les propriétés plutôt que de juste les copier ou d'en définir de nouvelles. Aussi, il est déconseillé d'utiliser cette méthode si on souhaite uniquement fusionner de nouvelles propriétés dans un prototype si un des objets sources contient des accesseurs. Pour uniquement copier les définitions des propriétés (y compris leur énumérabilité) dans des prototypes, on utilisera plutôt {{jsxref("Object.getOwnPropertyDescriptor()")}} et {{jsxref("Object.defineProperty()")}}.</p>

<p>Les propriétés {{jsxref("String")}} et {{jsxref("Symbol")}} sont copiées. Les propriétés de l'objet cible sont surchargées par celles de l'objet source si elles ont la même clé.</p>

<p>En cas d'erreur, si une propriété n'est pas accessible en écriture par exemple, une exception {{jsxref("TypeError")}} sera levée mais l'objet cible aura été modifié avec les propriétés ajoutées avant l'erreur.</p>

<p><code>Object.assign</code> ne donnera pas d'erreur si on fournit les valeurs {{jsxref("null")}} ou {{jsxref("undefined")}} pour la valeur source.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cloner_un_objet">Cloner un objet</h3>

<pre class="brush: js">var obj = { a: 1 };
var copie = Object.assign({}, obj);
console.log(copie); // {a: 1}</pre>

<div class="note">
<p><strong>Note :</strong> Attention, pour un clone réel (<em>deep clone</em>), il faudra utiliser d'autres méthodes car <code>Object.assign()</code> ne copie que les valeurs des propriétés depuis l'objet source, il ne recopie pas intégralement une nouvelle propriété. Si la valeur est une référence à un objet, il copiera uniquement la référence.</p>
</div>

<h3 id="Fusionner_des_objets">Fusionner des objets</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, l'objet cible est aussi modifié
</pre>

<h3 id="Fusionner_des_objets_partageant_des_propriétés">Fusionner des objets partageant des propriétés</h3>

<pre class="brush: js">var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
</pre>

<p>Les propriétés communes sont surchargées selon l'ordre des paramètres.</p>

<h3 id="Copier_des_propriétés_symboliques">Copier des propriétés symboliques</h3>

<pre class="brush: js">var o1 = { a: 1 };
var o2 = { [Symbol('toto')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("toto")]: 2 }
// Attention : dans Firefox le symbole n'est pas affiché
// en raison du bug 1207182
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(toto)]
</pre>

<h3 id="Les_propriétés_héritées_et_les_propriétés_non-énumérables_ne_peuvent_être_copiées">Les propriétés héritées et les propriétés non-énumérables ne peuvent être copiées</h3>

<pre class="brush: js">var obj = Object.create({ toto: 1 }, { // toto est héritée
  truc: {
    value: 2  // truc est non-enumerable (par défaut)
  },
  bidule: {
    value: 3,
    enumerable: true  // bidule est une propriété propre et énumérable
  }
});

var copie = Object.assign({}, obj);
console.log(copie); // { bidule: 3 }
</pre>

<h3 id="Les_types_primitifs_seront_passés_en_objets">Les types primitifs seront passés en objets</h3>

<pre class="brush: js">var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('toto')

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Les valeurs primitives seront converties, null et undefined seront ignorés.
// Note : seules les chaînes peuvent avoir des propriétés énumérables.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
</pre>

<h3 id="Les_exceptions_interrompent_la_copie">Les exceptions interrompent la copie</h3>

<pre class="brush: js">var target = Object.defineProperty({}, 'toto', {
  value: 1,
  writable: false
}); // target.toto est en lecture seule

Object.assign(target, { truc: 2 }, { toto2: 3, toto: 3, toto3: 3 }, { bidule: 4 });
// TypeError: "toto" est en lecture seule
// L'exception est levée lorsqu'on affecte target.toto

console.log(target.truc);  // 2, le premier objet source est bien copié
console.log(target.toto2); // 3, la première propriété du deuxième objet source est bien copiée
console.log(target.toto);  // 1, on a une exception ici
console.log(target.toto3); // undefined, assign est terminé toto3 ne sera pas copié
console.log(target.bidule);// undefined, le troisième objet source ne sera pas copié non plus.
</pre>

<h3 id="Copier_des_accesseurs">Copier des accesseurs</h3>

<pre class="brush: js">var obj = {
  toto: 1,
  get truc() {
    return 2;
  }
};

var copie = Object.assign({}, obj);
console.log(copie);
// { toto: 1, truc: 2 }, la valeur de copie.truc
// est la valeur renvoyée par l'accesseur d'obj.truc.

// Voici une fonction qui copie les descripteurs
// dans leur intégralité
function completeAssign(target, ...sources) {
  sources.forEach(source =&gt; {
    let descriptors = Object.keys(source).reduce((descriptors, key) =&gt; {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // Par défaut, Object.assign copie également
    // les symboles énumérables
    Object.getOwnPropertySymbols(source).forEach(sym =&gt; {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copie = completeAssign({}, obj);
console.log(copie);
// { toto:1, get truc() { return 2 } }</pre>

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
   <td>{{SpecName('ES2015', '#sec-object.assign', 'Object.assign')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.assign', 'Object.assign')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.assign")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.defineProperties()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Le caractère énumérable des propriétés</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition#Utiliser_la_décomposition_avec_les_littéraux_objet">La décomposition des littéraux objets</a></li>
</ul>
