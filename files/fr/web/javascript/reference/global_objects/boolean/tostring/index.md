---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean/toString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toString()</strong></code> renvoie une chaine de caractères correspondant à l'objet <code>Boolean</code> courant.</p>

<div>{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>bool</var>.toString()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente l'objet {{jsxref("Boolean")}}.</p>

<h2 id="Description">Description</h2>

<p>L'objet {{jsxref("Boolean")}} surcharge la méthode <code>toString()</code> de l'objet {{jsxref("Object")}} ; il n'hérite pas de la méthode {{jsxref("Object.prototype.toString()")}}. Pour les objets de type <code>Boolean</code>, la méthode <code>toString()</code> renvoie une chaine de caractère representative de l'objet.</p>

<p>La méthode <code>toString()</code> est automatiquement appelée quand le <code>Boolean</code> doit être representé comme une texte ou lorsque qu'il est concaténé avec une chaine de caractères.</p>

<p>Pour les objets de type <code>Boolean</code> , la fonction native <code>toString()</code> renvoie la chaine de caractère "<code>true</code>" ou "<code>false</code>" en fonction de la valeur de l'objet.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toString()">Utiliser <code>toString()</code></h3>

<p>Dans ce code, <code>flag.toString()</code> renvoie "<code>true</code>" :</p>

<pre class="brush: js">var flag = new Boolean(true);
var maVar = flag.toString();
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.6.4.2', 'Boolean.prototype.toString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Boolean.toString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
