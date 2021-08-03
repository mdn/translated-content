---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isSealed
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isSealed
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.isSealed()</strong></code> permet de déterminer si un objet est scellé.</p>

<div>{{EmbedInteractiveExample("pages/js/object-issealed.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.isSealed(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite savoir s'il est scellé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen indiquant si l'objet est scellé ou non.</p>

<h2 id="Description">Description</h2>

<p>Renvoie <code>true</code> si l'objet est scellé, <code>false</code> sinon. Un objet scellé est un objet qui n'est pas {{jsxref("Object.isExtensible", "extensible","",1)}} et dont toutes les propriétés sont non-configurables (on ne peut donc pas les retirer, en revanche on peut avoir un droit de modification).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Par défaut, les objets ne sont pas scellés
var vide = {};
Object.isSealed(vide); // false

// Si un objet vide est rendu non-extensible,
// il est scellé
Object.preventExtensions(vide);
Object.isSealed(vide); // true

// Ce qui n'est pas vrai pour un objet non-vide,
// sauf si toutes ses propriétés sont non-configurables
var avecPropriétés = { pif: "paf pouf" };
Object.preventExtensions(avecPropriétés);
Object.isSealed(avecPropriétés); // false

// Si on rend les propriétés non configurables,
// l'objet est scellé
Object.defineProperty(avecPropriétés, "pif", { configurable: false });
Object.isSealed(avecPropriétés); // true

// La méthode la plus simple est d'utiliser Object.seal.
var scellé = {};
Object.seal(scellé);
Object.isSealed(scellé); // true

// Un objet scellé est, par définition, non-extensible
Object.isExtensible(scellé); // false

// Un objet scellé peut être gelé mais ce n'est pas
// nécessaire. gelé signifie que les propriétés ne
// peuvent pas être modifiées
Object.isFrozen(scellé); // true

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false ("p" est toujours modifiable)

var s3 = Object.seal({ get p() { return 0; } });
// pour les accesseurs, seule l'accès en
// configuration est important
Object.isFrozen(s3); // true </pre>

<h2 id="Notes">Notes</h2>

<p>Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, une valeur qui n'est pas un objet sera traitée comme si c'était un objet scellé et la méthode renverra <code>true</code>.</p>

<pre class="brush: js">Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
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
   <td>{{SpecName('ES5.1', '#sec-15.2.3.11', 'Object.isSealed')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.issealed', 'Object.isSealed')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.issealed', 'Object.isSealed')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.isSealed")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
