---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/valueOf
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>valueOf()</strong></code> renvoie la valeur primitive d'un objet donné.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>object</var>.valueOf()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur primitive de l'objet appelant.</p>

<h2 id="Description">Description</h2>

<p>JavaScript appelle la méthode <code>valueOf</code> pour convertir un objet en une valeur primitive. Il est rarement nécessaire d'appeler soi-même la méthode <code>valueOf</code> ; JavaScript l'invoque automatiquement lorsqu'il rencontre un objet alors qu'il attend une valeur primitive.</p>

<p>Par défaut, la méthode <code>valueOf</code> est héritée par tout objet descendant d'{{jsxref("Object")}}. Tous les objets globaux natifs redéfinissent cette méthode pour renvoyer une valeur appropriée. Si un objet n'a pas de valeur primitive, <code>valueOf</code> renvoie l'objet lui-même, ce qui sera affiché comme :</p>

<pre class="brush: js">[object Object]
</pre>

<p><code>valueOf</code> peut être utilisée afin de convertir un objet prédéfini en une valeur primitive. Si un objet est défini dans un script, il est possible de surcharger <code>Object.prototype.valueOf</code> pour appeler une méthode personnalisée au lieu de la méthode par défaut d'<code>Object</code>.</p>

<h3 id="Surcharger_valueOf_pour_des_objets_personnalisés">Surcharger <code>valueOf</code> pour des objets personnalisés</h3>

<p>Il est possible de créer une fonction à appeler à la place de la méthode <code>valueOf</code> par défaut. Celle-ci ne peut pas recevoir de paramètres.</p>

<p>Supposons qu'on ait un type d'objet <code>monTypeDeNombre</code> et qu'on désire lui ajouter une méthode <code>valueOf</code> spécifique, on pourra utiliser le code suivant :</p>

<pre class="brush: js">monTypeDeNombre.prototype.valueOf = function(){ return valeurPrimitive;};
</pre>

<p>En utilisant ce code, chaque fois qu'un objet de type <code>monTypeDeNombre</code> sera utilisé dans un contexte où il doit être représenté comme une valeur primitive, JavaScript appellera automatiquement la fonction qui y est définie.</p>

<p>C'est habituellement JavaScript qui invoquera la méthode <code>valueOf</code>, mais il est aussi possible de l'appeler soi-même :</p>

<pre class="brush: js">monNombre.valueOf()
</pre>

<div class="note">
<p><strong>Note :</strong> Les objets à utiliser dans un contexte textuel sont convertis avec la méthode {{jsxref("Object.toString", "toString()")}} ce qui est différent de la conversion d'objets {{jsxref("String")}} en valeurs primitives avec <code>valueOf</code>. Tous les objets peuvent être convertis en chaînes de caractères (la façon la plus générique étant "<code>[object <em>type</em>]</code>"). En revanche, la plupart des objets ne peut pas être convertie en nombre ou booléen par exemple.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_valueOf">Utiliser <code>valueOf</code></h3>

<pre class="brush: js">function MonTypeDeNombre(n) {
    this.nombre = n;
}

MonTypeDeNombre.prototype.valueOf = function(){
  return this.nombre;
}

var monObj = new MonTypeDeNombre(4);
console.log(monObj + 3); // 7 car l'opération a implicitement utilisé valueOf</pre>

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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.4', 'Object.prototype.valueOf')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.valueof', 'Object.prototype.valueOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.valueOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
 <li>{{jsxref("parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Symbol.toPrimitive")}}</li>
</ul>
