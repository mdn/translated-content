---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyNames
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.getOwnPropertyNames()</strong></code> renvoie un tableau de toutes les propriétés (qu'elles soient énumérables ou non, tant qu'elles ne sont pas désignées par un <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol">symbole</a>) propres à un objet (c'est-à-dire n'étant pas héritées via la chaîne de prototypes).</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.getOwnPropertyNames(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont seront listées les propriétés propres énumérables <em>et non-énumérables</em>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau de chaînes de caractères qui sont les noms des propriétés propres (celles directement rattachées à l'objet) de l'objet passé en argument.</p>

<h2 id="Description">Description</h2>

<p><code>Object.getOwnPropertyNames</code> renvoie un tableau dont les éléments sont des chaînes de caractères correspondant aux noms des propriétés énumerables <em>et non-énumerables</em> appartenant directement à l'objet <code>obj</code>. L'ordre des propriétés énumérables est cohérent avec l'ordre utilisé dans une boucle {{jsxref("Instructions/for...in","for...in")}} (ou avec {{jsxref("Object.keys")}}) parmi les propriétés de l'objet. L'ordre des propriétés non-énumérables dans le tableau et parmi les propriétés énumérables n'est pas défini.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Object.getOwnPropertyNames()">Utiliser <code>Object.getOwnPropertyNames()</code></h3>

<pre class="brush: js">var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Objet semblable à un tableau (array-like)
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]


// On affiche les noms et les valeurs
// des propriétés avec Array.forEach
Object.getOwnPropertyNames(obj).forEach(
  function(val, idx, array) {
    console.log(val + " -&gt; " + obj[val]);
});
// affiche
// 0 -&gt; a
// 1 -&gt; b
// 2 -&gt; c

// propriété non-énumérable
var mon_obj = Object.create({}, {
  getToto: {
    value: function() { return this.toto; },
    enumerable: false
  }
});
mon_obj.toto = 1;

console.log(Object.getOwnPropertyNames(mon_obj).sort());
// ["toto", "getToto"]
</pre>

<p>Si on souhaite n'avoir que les propriétés énumérables, on peut utiliser {{jsxref("Object.keys")}} ou bien une boucle {{jsxref("Instructions/for...in","for...in")}} (cette méthode renverra également les propriétés héritées via la chaîne de prototypes si on ne filtre pas avec la méthode {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}).</p>

<p>Les propriétés héritées via la chaîne de prototype ne sont pas listées :</p>

<pre class="brush: js">function ClasseParente() {}
ClasseParente.prototype.inheritedMethod = function () {};

function ClasseFille () {
  this.prop = 5;
  this.method = function () {};
}
ClasseFille.prototype = new ClasseParente();
ClasseFille.prototype.prototypeMethod = function () {};

console.log(
  Object.getOwnPropertyNames(
    new ClasseFille() // ["prop", "method"]
  )
)
</pre>

<h3 id="Obtenir_uniquement_les_propriétés_non-énumérables">Obtenir uniquement les propriétés non-énumérables</h3>

<p>On utilise ici la fonction {{jsxref("Array.prototype.filter()")}} pour retirer les clés énumérables (obtenus avec {{jsxref("Object.keys()")}}) de la liste de toutes les clés (obtenues avec <code>Object.getOwnPropertynames</code>) afin de n'avoir que les propriétés propres non-énumérables.</p>

<pre class="brush: js">var target = myObject;
var enum_et_nonenum = Object.getOwnPropertyNames(target);
var enum_uniquement = Object.keys(target);
var nonenum_uniquement = enum_et_nonenum.filter(function(key) {
  var indexInEnum = enum_uniquement.indexOf(key)
  if (indexInEnum == -1) {
    // non trouvée dans enum_uniquement indique
    // que la clé est non-énumérable, on la
    // garde donc dans le filtre avec true
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_uniquement);
</pre>

<h2 id="Notes">Notes</h2>

<p>Pour ES5, si l'argument passé à la méthode n'est pas un objet (mais une valeur d'un autre type primitif), une exception {{jsxref("TypeError")}} sera levée. Pour ES2015, un argument qui n'est pas un objet sera d'abord transformé en objet avant que la méthode soit appliquée.</p>

<pre class="brush: js">Object.getOwnPropertyNames('toto')
TypeError: "toto" n'est pas un objet // code ES5

Object.getOwnPropertyNames('toto')
['length', '0', '1', '2']         // code ES2015</pre>

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
   <td>{{SpecName('ES5.1', '#sec-15.2.3.4', 'Object.getOwnPropertyNames')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.<br>
    Implémentée avec JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.getOwnPropertyNames")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<p>Pour les versions antérieures à Firefox 28 {{geckoRelease("28")}}, <code>Object.getOwnPropertyNames</code> ne listait pas les propriétés non-résolues des objets {{jsxref("Error")}}. Cela a été résolu dans les versions suivantes ({{bug("724768")}}).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement">Énumérabilité et possession des propriétés</a></li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Array.forEach()")}}</li>
</ul>
