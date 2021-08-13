---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/toString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toString()</strong></code> renvoie une chaîne de caractères représentant l'objet.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>obj</var>.toString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères représentant l'objet.</p>

<h2 id="Description">Description</h2>

<p>Chaque object possède une méthode <code>toString()</code> qui est appelée de façon automatique à chaque fois que l'objet doit être représenté sous forme de texte ou à chaque fois qu'on utilise un objet et que la valeur attendue est une chaîne de caractères. Par défaut, chaque objet qui descend d'<code>Object</code> hérite de la méthode <code>toString()</code>. Si cette méthode n'est pas surchargée, <code>toString()</code> renvoie "[object <em>type</em>]", où <code><em>type</em></code> est le type de l'objet. Par exemple :</p>

<pre class="brush: js">var o = new Object();
o.toString();           // renvoie [object Object]
</pre>

<div class="note">
<p><strong>Note :</strong> À partir de JavaScript 1.8.5 <code>toString()</code>, lorsqu'elle est appelée sur {{jsxref("null")}} renvoie <code>[object <em>Null</em>]</code>, et lorsqu'elle est appelée sur {{jsxref("undefined")}} renvoie <code>[object <em>Undefined</em>]</code>, ce qui est conforme à ECMAScript 5 et aux errata qui ont suivis. Voir l'exemple ci-après <a href="#detect">Utiliser <code>toString</code> pour détecter le type d'un objet</a>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Surcharger_la_méthode_toString()_par_défaut">Surcharger la méthode <code>toString()</code> par défaut</h3>

<p>Il est possible de surcharger la méthode <code>toString()</code>. La méthode <code>toString()</code> ne prend pas d'argument et doit renvoyer une chaîne de caractères. La méthode <code>toString()</code> peut renvoyer n'importe quelle valeur mais elle sera plus pertinente si elle renvoie des informations sur l'objet courant.</p>

<p>Le code qui suit définit un type d'objet <code>Chien</code> et instancie <code>monChien</code>, qui est de type <code>Chien</code> :</p>

<pre class="brush: js">function Chien(nom, race, couleur, sexe) {
  this.nom = nom;
  this.race = race;
  this.couleur = couleur;
  this.sexe = sexe;
}

monChien = new Chien('Gabby', 'Labrador', 'chocolat', 'femelle');
</pre>

<p>Si on appelle la méthode <code>toString()</code> sur cet objet, on aura le résultat suivant (provenant de la méthode originale, héritée d'{{jsxref("Object")}}) :</p>

<pre class="brush: js">monChien.toString(); // renvoie [object Object]
</pre>

<p>Dans le code qui suit, on surcharge la méthode <code>toString()</code> avec <code>chienToString()</code>. Cette méthode produit une chaîne qui contient l'ensemble des propriétés (race, couleur, sexe, nom) de l'objet :</p>

<pre class="brush: js">Chien.prototype.toString = function chienToString() {
  var ret = 'Le chien ' + this.nom + ' est un ' + this.race + ' ' + this.sexe + ' ' + this.couleur;
  return ret;
}
</pre>

<p>En utilisant la fonction ci-avant, à chaque fois que <code>monChien</code> sera utilisé là où on attend une chaîne, le moteur JavaScript appellera automatique la fonction <code>chienToString()</code>qui renverra la chaîne suivante :</p>

<pre class="brush: js">Le chien Gabby est un labrador femelle chocolat.
</pre>

<h3 id="Utiliser_toString()_pour_détecter_le_type_d'un_objet">Utiliser <code>toString()</code> pour détecter le type d'un objet</h3>

<p><code>toString()</code> peut être utilisée pour tous les objets afin d'obtenir son type. Pour utiliser <code>Object.prototype.toString()</code> avec n'importe quel objet, il sera nécessaire d'appeler {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}} (pour éviter les versions surchargées).</p>

<pre class="brush: js">var toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Depuis JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.2', 'Object.prototype.toString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Lorsque la méthode est appelée sur {{jsxref("null")}}, elle renvoie <code>[object <em>Null</em>]</code>, et sur {{jsxref( "undefined")}} elle renvoie <code>[object <em>Undefined</em>]</code></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.tostring', 'Object.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.tostring', 'Object.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.toString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toSource()")}}</li>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
