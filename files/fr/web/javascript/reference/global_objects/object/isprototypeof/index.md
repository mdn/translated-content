---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
  - isPrototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isPrototypeOf
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>isPrototypeOf()</strong></code> permet de tester si un objet existe dans la chaîne de prototypes d'un autre objet.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}</div>

<div class="note">
<p><strong>Note :</strong> <code>isPrototypeOf()</code> est différent de l'opérateur {{jsxref("Opérateurs/instanceof", "instanceof")}}. Dans l'expression "<code>object instanceof AFunction</code>", on compare la chaîne de prototypes d'<code>object</code> avec <code>AFunction.prototype</code> et non avec <code>AFunction</code>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>prototypeObj</var>.isPrototypeOf(<var>objet</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>objet</code></dt>
 <dd>L'objet dont la chaîne de prototypes sera parcourue.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{jsxref("Boolean")}} indiquant si l'objet appelant se trouve dans sa chaîne de prototypes de l'objet indiqué.</p>

<h3 id="Erreurs_déclenchées">Erreurs déclenchées</h3>

<dl>
 <dt>{{jsxref("TypeError")}}</dt>
 <dd>Une exception {{jsxref("TypeError")}} est déclenchée si <code>prototypeObj</code> est <code>undefined</code> ou <code>null</code>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>La méthode isPrototypeOf () vous permet de vérifier si un objet existe ou non dans la chaîne de prototypes d'un autre objet.</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple montre que <code>Bidule.prototype</code>, <code>Truc.prototype</code>, <code>Machin.prototype</code> et <code>Object.prototype</code> font bien partie de la chaîne de prototype pour l'objet <code>bidule</code> :</p>

<pre class="brush: js">function Machin() {}
function Truc() {}
function Bidule() {}

Truc.prototype = Object.create(Machin.prototype);
Bidule.prototype = Object.create(Truc.prototype);

var bidule = new Bidule();

console.log(Bidule.prototype.isPrototypeOf(bidule)); // true
console.log(Truc.prototype.isPrototypeOf(bidule)); // true
console.log(Machin.prototype.isPrototypeOf(bidule)); // true
console.log(Object.prototype.isPrototypeOf(bidule)); // true
</pre>

<p>La méthode <code>isPrototypeOf()</code>, avec l'opérateur {{jsxref("Operators/instanceof", "instanceof")}} en particulier, s'avère particulièrement utile si vous avez du code qui ne peut fonctionner que lorsqu'il traite des objets descendant d'une chaîne de prototypes donnée, par ex., pour garantir que certaines méthodes ou propriétés seront présentes dans cet objet.</p>

<p>Par exemple, vérifier que <code>bidule</code> descend bien de <code>Machin.prototype</code> :</p>

<pre class="brush: js">if (Toto.prototype.isPrototypeOf(bidule)) {
  // effectuer quelque chose de sûr
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.isPrototypeOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Opérateurs/instanceof", "instanceof")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.proto","Object.prototype.__proto__")}}</li>
</ul>
