---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/seal
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/seal
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.seal()</strong></code> scelle un objet afin d'empêcher l'ajout de nouvelles propriétés, en marquant les propriétés existantes comme non-configurables. Les valeurs des propriétés courantes peuvent toujours être modifiées si elles sont accessibles en écriture.</p>

<div>{{EmbedInteractiveExample("pages/js/object-seal.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.seal(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>obj</dt>
 <dd>L'objet à sceller. Ce peut être n'importe quelle valeur qui n'ait pas <a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Types_de_données">un type primitif</a>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet qui est scellé.</p>

<h2 id="Description">Description</h2>

<p>Par défaut, les objets sont {{jsxref("Object.isExtensible()", "extensibles", "", 1)}} (ce qui signifie que de nouvelles propriétés peuvent leur être ajoutées). Sceller un objet empêche l'ajout de nouvelles propriétés et marque les propriétés existantes comme non-configurables. Ainsi, l'ensemble de propriétés de l'objet devient fixé et immuable. Le fait de rendre les propriétés non-configurables empêche également de transformer des propriétés de données en accesseurs et vice versa. Cela n'empêche pas de modifier la valeur des propriétés. Toute tentative de suppression ou d'ajout de propriétés à un objet qui est scellé, de conversion d'une propriété de données en accesseurs ou vice versa échouera, soit de manière silencieuse soit en lançant une exception {{jsxref("TypeError")}} (la plupart du temps en {{jsxref("Fonctions_et_portee_des_fonctions/Strict_mode","mode strict","",1)}}.</p>

<p>La chaîne de prototypes reste la même. Cependant, la propriété {{jsxref("Object.proto", "__proto__")}} ( {{deprecated_inline}} ) est scellée également.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var obj = {
    prop: function () {},
    toto: "truc"
  };

// On peut ajouter de nouvelles propriétés
// Les propriétés existantes peuvent être
// changées ou retirées
obj.toto = "machin";
obj.blop = "blip";
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// On peut toujours changer la valeur
// d'une propriété d'un objet scellé
obj.toto = "moh";

// Mais on ne peut pas convertir les données
// en accesseurs (ou vice versa)
Object.defineProperty(obj, "toto", { get: function() { return "g"; } });
// lancera une TypeError

// Tout autre changement que celui d'une valeur
// ne fonctionnera pas

obj.coincoin = "mon canard";
// la propriété n'est pas ajoutée

delete obj.toto;
// la propriété n'est pas supprimée

// ...en mode strict, cela lancera des TypeErrors
function échec() {
  "use strict";
  delete obj.toto; // lance une TypeError
  obj.tutu = "arf"; // lance une TypeError
}
échec();

// L'utilisation de la méthode Object.defineProperty ne fonctionnera pas

Object.defineProperty(obj, "ohai", { value: 17 });
// lance une TypeError

Object.defineProperty(obj, "toto", { value: "eit" });
// modifie une propriété existante</pre>

<h2 id="Notes">Notes</h2>

<p>Pour ES5, si l'argument passé à la méthode n'est pas un objet (mais une valeur d'un autre type primitif), cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, un argument qui n'est pas un objet sera traité comme un objet ordinaire scellé et la méthode renverra cet objet.</p>

<pre class="brush: js">Object.seal(1);
// TypeError : 1 n'est pas un objet (code ES5)

Object.seal(1);
// 1 (code ES2015)</pre>

<h3 id="Comparaison_avec_Object.freeze()">Comparaison avec <code>Object.freeze()</code></h3>

<p>Lorsqu'on utilise la méthode {{jsxref("Object.freeze()")}}, les propriétés existantes d'un objet gelé deviennent immuables. En revanche, avec <code>Object.seal()</code>, il est toujours possible de modifier la valeur des propriétés existantes d'un objet scellé.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.3.8', 'Object.seal')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.<br>
    Implémentée par JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.seal', 'Object.seal')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.seal', 'Object.seal')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.seal")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.isSealed()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
