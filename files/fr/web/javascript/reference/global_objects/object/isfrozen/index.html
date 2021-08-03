---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isFrozen
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.isFrozen()</strong></code>permet de déterminer si un objet est {{jsxref("Object.freeze()", "gelé", "", 1)}}.</p>

<div>{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.isFrozen(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite vérifier s'il est gelé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si oui ou non l'objet passé en argument est gelé.</p>

<h2 id="Description">Description</h2>

<p>Un objet est gelé si et seulement s'il n'est pas {{jsxref("Object.isExtensible", "extensible","",1)}}, que toutes ses propriétés sont non-configurables et que ses propriétés de données (c'est-à-dire les propriétés qui ne sont pas des accesseurs ou des mutateurs) sont non-accessibles en écriture.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Un objet nouvellement créé est extensible
// et est donc dégelé
Object.isFrozen({}); // false

// Un objet vide et non extensible est gelé
var videGelé = Object.preventExtensions({});
Object.isFrozen(videGelé); // true

// Un nouvel objet avec une propriété est
// extensible et donc dégelé
var uneProp = { p: 42 };
Object.isFrozen(uneProp); // false

// Si on empêche d'étendre un objet non vide,
// cela ne le rend pas gelé car la propriété
// est toujours configurable (et accessible
// en écriture)
Object.preventExtensions(uneProp);
Object.isFrozen(uneProp); // false

// ...si on supprime la seule propriété existante
// en revanche, on a bien un objet gelé
delete uneProp.p;
Object.isFrozen(uneProp); // true

// Un objet non-extensible et avec une propriété
// non-accessible en écriture mais toujours configurable
// n'est pas gelé
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);

Object.defineProperty(nonWritable, "e", { writable: false });
// on la rend non accessible en écriture

Object.isFrozen(nonWritable); // false

// Si on rend la propriété non-configurable,
// l'objet devient gelé

Object.defineProperty(nonWritable, "e", { configurable: false });
// on la rend non-configurable

Object.isFrozen(nonWritable) === true);

// Un objet non-extensible avec une propriété non-configurable
// mais accessible en écriture n'est pas gelé
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
Object.isFrozen(nonConfigurable); // false

// Si cette propriété devient non accessible
// en écriture, l'objet est gelé
Object.defineProperty(nonConfigurable, "release", { writable: false });
Object.isFrozen(nonConfigurable); // true

// Un objet non-extensible avec un accesseur
// configurable n'est pas gelé
var accesseur = { get manger() { return "miam"; } };
Object.preventExtensions(accesseur);
Object.isFrozen(accesseur); // false

// ...si on rend la propriété non-configurable,
// l'objet est gelé.
Object.defineProperty(accesseur, "manger", { configurable: false });
Object.isFrozen(accesseur); // true

// La façon la plus simple est d'utiliser la
// méthode Object.freeze
var gelé = { 1: 81 };
Object.isFrozen(gelé); // false
Object.freeze(gelé);
Object.isFrozen(gelé); // true

// Par définition, un objet gelé est non-extensible.
Object.isExtensible(gelé); // false

// Par définition, un objet gelé est scellé.
Object.isSealed(gelé); // true
</pre>

<h2 id="Notes">Notes</h2>

<p>Pour ES5, si l'argument passé à la méthode n'est pas un objet (mais est d'un autre type primitif), cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, un argument qui n'est pas un objet sera traité comme s'il était un objet gelé et la méthode renverra <code>true</code>.</p>

<pre class="brush: js">Object.isFrozen(1);
// TypeError: 1 n'est pas un objet (code ES5)

Object.isFrozen(1);
// true                            (code ES2015)
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
   <td>{{SpecName('ES5.1', '#sec-15.2.3.12', 'Object.isFrozen')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée par JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.isfrozen', 'Object.isFrozen')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.isfrozen', 'Object.isFrozen')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.isFrozen")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.isSealed()")}}</li>
</ul>
