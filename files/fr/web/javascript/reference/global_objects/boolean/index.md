---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Constructeur
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Boolean</code></strong> est un objet permettant de représenter une valeur booléenne.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Boolean([<var>valeur</var>])</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt><code>valeur</code>{{optional_inline}}</dt>
 <dd>Paramètre optionnel, la valeur initiale de l'objet <code>Boolean</code>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. Si la valeur est omise ou est <code>0</code>, <code>-0</code>, {{jsxref("null")}}, <code>false</code>, {{jsxref("NaN")}}, {{jsxref("undefined")}} ou une chaine de caractères vide (""), l'objet a un valeur initiale à <code>false</code> (faux). Si l'objet DOM {{domxref("document.all")}} est passé en argument, la valeur initiale sera également <code>false</code>. Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (<code>[]</code>), ou une chaine de caractères <code>"false"</code>, créént un objet avec une valeur initiale à <code>true</code> (vrai).</p>

<p>Ne pas confondre les valeurs primitives booléennes <code>true</code> et <code>false</code> avec les valeurs <em>true</em> et <em>false</em> d'un objet Booléen.</p>

<p>Tout objet dont la valeur n'est ni  <code>undefined</code> ni <code>null</code>, incluant un objet Booléen dont la valeur est fausse, évalue à <code>true</code> lorsqu'il est à une instruction conditionnelle. Par exemple, la condition (voir {{jsxref("Instructions/if...else", "if")}}), dans le code suivant, est validée si l'expression est évaluée à <code>true</code> :</p>

<pre class="brush: js">var x = new Boolean("false");
if (x) {
  // . . . le code est exécuté
}

var y = new Boolean(false);
if (y) {
  // ce code est également exécuté
}
</pre>

<p>Ce comportement ne s'applique pas aux valeurs primitives booléennes. Par exemple, la condition, dans le code suivant, est évaluée à <code>false</code> :</p>

<pre class="brush: js">var x = false;
if (x) {
  // . . . le code n'est pas exécuté
}
</pre>

<p>Ne pas utiliser un objet <code>Boolean</code> pour convertir une valeur non-booléenne en une valeur booléenne. Utilisez plutot une fonction booléenne pour effectuer cette tâche :</p>

<pre class="brush: js">var x = Boolean(expression);     // conseillé
var y = new Boolean(expression); // à ne pas utiliser
</pre>

<p>Si vous spécifiez un objet quelconque, incluant un objet booléen qui a une valeur fausse, le nouvel objet <code>Boolean</code> a une valeur vraie.</p>

<pre class="brush: js">var myFalse = new Boolean(false);   // valeur initiale à false
var g = Boolean(myFalse);       // valeur initiale à true
var myString = new String("Hello"); // un object String
var s = Boolean(myString);      // valeur initiale à true
</pre>

<p>Ne pas utiliser un objet Booléen à la place d'une valeur primitive booléenne.</p>

<div class="note">
<p><strong>Note :</strong> Lorsque la propriété historique, non-standard, <code><a href="/fr/docs/Web/API/Document#Properties">document.all</a></code> est utilisée comme argument, le constructeur <code>Boolean</code> renvoie un objet booléen faux. Cette propriété étant non-standard, son utilisation est déconseillée.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>Boolean.length</code></dt>
 <dd>Renvoie 1. Le nombre d'arguments pris en charge par le constructeur.</dd>
 <dt>{{jsxref("Boolean.prototype")}}</dt>
 <dd>Représente le prototype du constructeur <code>Boolean</code>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p>L'objet global <code>Boolean</code> ne contient pas ses propres méthodes, cependant, il hérite de certaines méthodes à travers la chaine de prototypes.</p>

<h2 id="Instances_de_Boolean">Instances de <code>Boolean</code></h2>

<p>Toutes les <code>Boolean</code> héritent de {{jsxref("Boolean.prototype")}}. Comme avec tous les constructeurs, l'objet prototype dicte les propriétés et les méthodes héritées par les instances.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/JavaScript/Reference/Objets_globaux/Boolean/prototype','Propri.C3.A9t.C3.A9s')}}</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>{{page('fr/docs/JavaScript/Reference/Objets_globaux/Boolean/prototype','M.C3.A9thodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Création_dobjets_Boolean_avec_une_valeur_initiale_à_faux">Création d'objets <code>Boolean</code> avec une valeur initiale à faux</h3>

<pre class="brush: js">var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
</pre>

<h3 id="Création_dobjets_Boolean_avec_une_valeur_initiale_à_vrai">Création d'objets <code>Boolean</code> avec une valeur initiale à vrai</h3>

<pre class="brush: js">var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
var bSuLin = new Boolean("Su Lin");
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
   <td>{{SpecName('ES5.1', '#sec-15.6', 'Boolean')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-boolean-objects', 'Boolean')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-boolean-objects', 'Boolean')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Boolean")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Boolean.prototype")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives">Les valeurs primitives en JavaScript</a></li>
 <li>{{Glossary("Boolean","booléen")}}</li>
 <li><a href="https://fr.wikipedia.org/wiki/Bool%C3%A9en">Le type de données booléen (Wikipédia)</a></li>
</ul>
