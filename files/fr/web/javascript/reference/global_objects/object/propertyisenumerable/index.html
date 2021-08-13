---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/propertyIsEnumerable
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>propertyIsEnumerable()</strong></code> renvoie un booléen qui indique si la propriété donnée est énumérable.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>obj</var>.propertyIsEnumerable(<var>prop</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Le nom de la propriété dont on souhaite savoir si elle est énumérable ou non.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si la propriété passée en argument est énumérable.</p>

<h2 id="Description">Description</h2>

<p>Chaque objet possède une méthode <code>propertyIsEnumerable</code>. Cette méthode est utilisée afin de savoir s'il est possible d'énumérer la propriété donnée au moyen d'une boucle {{jsxref("Instructions/for...in", "for...in")}}. Cela concerne uniquement les propriétés propres à l'objet (celles qui ne sont pas héritées via la chaîne de prototypes). Si un objet ne possède pas la propriété, cette méthode renverra <code>false</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_propertyIsEnumerable">Utiliser <code>propertyIsEnumerable</code></h3>

<p>Dans l'exemple qui suit, on illustre comment utiliser <code>propertyIsEnumerable</code> sur les objets et tableaux :</p>

<pre class="brush: js">var o = {};
var a = [];
o.prop = 'est énumérable';
a[0] = 'est énumérable';

o.propertyIsEnumerable('prop');   // renvoie true
a.propertyIsEnumerable(0);        // renvoie true
</pre>

<h3 id="Objets_natifs_et_objets_définis_par_l'utilisateur">Objets natifs et objets définis par l'utilisateur</h3>

<p>Dans l'exemple ci-dessous, on illustre l'énumérabilité des propriétés des objets natifs et celle des objets tiers, définis dans les scripts :</p>

<pre class="brush: js">var a = ['est énumérable'];

a.propertyIsEnumerable(0);          // renvoie true
a.propertyIsEnumerable('length');   // renvoie false

Math.propertyIsEnumerable('random');   // renvoie false
this.propertyIsEnumerable('Math');     // renvoie false
</pre>

<h3 id="Propriétés_héritées_et_propriétés_propres">Propriétés héritées et propriétés propres</h3>

<pre class="brush: js">var a = [];
a.propertyIsEnumerable('constructor');         // renvoie false

function premierConstructeur() {
  this.propriete = 'non énumérable';
}

premierConstructeur.prototype.premiereMethode = function() {};

function secondConstructeur() {
  this.methode = function methode() { return 'énumérable'; };
}

secondConstructeur.prototype = new premierConstructeur;
secondConstructeur.prototype.constructor = secondConstructeur;

var o = new secondConstructeur();
o.propArbitraire = 'is enumerable';

o.propertyIsEnumerable('propArbitraire');   // renvoie true
o.propertyIsEnumerable('méthode');          // renvoie true
o.propertyIsEnumerable('propriété');        // renvoie false

o.propriete = 'énumérable';

o.propertyIsEnumerable('propriété');        // renvoie true

// Ces instructions renvoient false car propertyIsEnumerable
// ne prend pas en compte la chaîne de prototypes
o.propertyIsEnumerable('prototype');   // renvoie false
o.propertyIsEnumerable('constructor'); // renvoie false
o.propertyIsEnumerable('premièreMéthode'); // renvoie false
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.7', 'Object.prototype.propertyIsEnumerable')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.propertyisenumerable', 'Object.prototype.propertyIsEnumerable')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.propertyisenumerable', 'Object.prototype.propertyIsEnumerable')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.propertyIsEnumerable")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Caractère énumérable et rattachement des propriétés</a></li>
 <li>{{jsxref("Instructions/for...in", "for...in")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
