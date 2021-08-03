---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/defineProperty
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Reflect</strong></code><strong><code>.defineProperty()</code></strong> est semblable à {{jsxref("Object.defineProperty()")}} mais renvoie un {{jsxref("Boolean")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Reflect.defineProperty(<var>cible</var>, <var>cléPropriété</var>, <var>attributs</var>)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible sur lequel on veut définir la propriété.</dd>
 <dt><code>cléPropriété</code></dt>
 <dd>Le nom de la propriété qu'on souhaite définir ou modifier.</dd>
 <dt><code>attributs</code></dt>
 <dd>Les attributs de de la propriété qu'on ajoute ou qu'on modifie.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{jsxref("Boolean","booléen","",1)}} qui indique si la propriété a bien été définie.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Une erreur {{jsxref("TypeError")}} si <code>cible</code> n'est pas un {{jsxref("Object")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>Reflect.defineProperty</code> permet d'ajouter ou de modifier finement une propriété d'un objet. Pour plus de détails, voir la méthode {{jsxref("Object.defineProperty")}} qui est très similaire. <code>Object.defineProperty</code> renvoie l'objet et lève une {{jsxref("TypeError")}} si la propriété n'a pas correctement été définie. <code>Reflect.defineProperty</code> renvoie simplement un {{jsxref("Boolean")}} qui indique si la propriété a été définie avec succès ou non.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Reflect.defineProperty()">Utiliser <code>Reflect.defineProperty()</code></h3>

<pre class="brush: js">var obj = {};
Reflect.defineProperty(obj, "x", {value: 7}); // true
obj.x; // 7
</pre>

<h3 id="Vérifier_si_la_définition_de_propriété_a_réussi">Vérifier si la définition de propriété a réussi</h3>

<p>{{jsxref("Object.defineProperty")}} renvoie un objet si la définition a réussi ou lève une exception {{jsxref("TypeError")}} sinon, ce qui implique d'utiliser un bloc <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/try...catch">try...catch</a></code> pour attraper l'erreur. <code>Reflect.defineProperty</code> renvoie un booléen pour indiquer la réussite ou l'échec, un bloc <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if...else</a></code> suffit :</p>

<pre class="brush: js">if (Reflect.defineProperty(cible, propriété, attributs)) {
  // succès
} else {
  // échec
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-reflect.defineproperty', 'Reflect.defineProperty')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-reflect.defineproperty', 'Reflect.defineProperty')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Reflect.defineProperty")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
</ul>
