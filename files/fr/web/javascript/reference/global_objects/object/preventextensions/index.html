---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/preventExtensions
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.preventExtensions()</strong></code> permet d'empêcher l'ajout de nouvelles propriétés à un objet (i.e. d'étendre l'objet grâce à de nouvelles caractéristiques).</p>

<div>{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.preventExtensions(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet qu'on souhaite rendre non-extensible.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet rendu non-extensible.</p>

<h2 id="Description">Description</h2>

<p>Un objet est extensible si on peut lui ajouter de nouvelles propriétés. <code>Object.preventExtensions()</code> marque un objet et le rend non-extensible. Ainsi, cet objet ne pourra avoir d'autres propriétés que celles à l'instant où il a été marqué comme non-extensible. Attention, les propriétés existantes d'un objet non-extensible peuvent toujours être supprimées. Toute tentative d'ajout de nouvelles propriétés à un objet non-extensible échouera, soit de façon silencieuse, soit en levant une exception {{jsxref("TypeError")}} (le plus souvent en {{jsxref("Strict_mode", "mode strict", "", 1)}}).</p>

<p><code>Object.preventExtensions()</code> n'empêche que l'ajout des propriétés directement sur l'objet, il n'empêche pas d'ajouter des propriétés sur le prototype.</p>

<p>Cette méthode rend la propriété interne <code>[[prototype]]</code> de la cible immuable, toute réaffectation de <code>[[prototype]]</code> déclenchera une exception <code>TypeError</code>. Ce comportement est spécifique à la propriété interne <code>[[prototype]]</code>, les autres propriétés de la cible restent modifiables.</p>

<p>Si, grâce à cette méthode, on peut rendre un objet non-extensible, il n'existe aucune méthode pour effectuer l'action inverse (rendre un objet non-extensible à nouveau extensible).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Object.preventExtensions renvoie l'objet
// non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Par défaut, les objets sont extensibles.
var vide = {};
Object.isExtensible(vide); // true

// ...mais cela peut être modifié.
Object.preventExtensions(vide);
Object.isExtensible(vide) === false);

// Object.defineProperty lève une exception
// lorsqu'on tente d'ajouter de nouvelles propriétés
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);

Object.defineProperty(nonExtensible, 'nouvelle', { value: 8675309 });
/ lève une TypeError

// En mode strict, toute tentative d'ajout
// lève une exception TypeError
function échec() {
  'use strict';
  nonExtensible.nouvelleProp = 'ÉCHEC'; //
}
échec();

// EXTENSION (ne fonctionne que pour les moteurs
// qui utilisent __proto__ ) :
// Le prototype (via __proto__) d'un objet non-extensible
// n'est pas modifiable :
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hey' }; // lève une TypeError
</pre>

<h2 id="Notes">Notes</h2>

<p>Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, une valeur qui n'est pas un objet sera traitée comme un objet ordinaire qui n'est pas extensible et la méthode renverra cette valeur.</p>

<pre class="brush: js">Object.preventExtensions(1);
// TypeError : 1 n'est pas un object (code ES5)

Object.preventExtensions(1);
// 1                             (code ES2015)
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.3.10', 'Object.preventExtensions')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.preventextensions', 'Object.preventExtensions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.preventextensions', 'Object.preventExtensions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.preventExtensions")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
