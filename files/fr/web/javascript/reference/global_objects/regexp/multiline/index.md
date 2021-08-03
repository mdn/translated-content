---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/multiline
---
<div>{{JSRef}}</div>

<p>La propriété <code><strong>multiline</strong></code> indique si le drapeau (<em>flag</em>) "<code>m</code>" a été utilisé ou non pour l'expression rationnelle. <code>multiline</code> est une propriété liée à l'instance, accessible en lecture seule.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}</div>



<div>{{js_property_attributes(0,0,1)}}</div>

<h2 id="Description">Description</h2>

<p>La valeur de <code>multiline</code> est un booléen. Elle vaut <code>true</code> si le drapeau "<code>m</code>" a été utilisé et <code>false</code> sinon. Le flag "<code>m</code>" indique qu'une chaine de caractères qui s'étend sur plusieurs lignes doit être traitée comme une série de ligne. Ainsi, si "<code>m</code>" est utilisé, "<code>^</code>" et "<code>$</code>" ne correspondent plus au début et à la fin de la chaîne mais aux débuts et aux fins de chaque ligne de la chaîne.</p>

<p>Cette propriété ne peut pas être modifiée directement.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var regex = new RegExp("toto", "m");

console.log(regex.multiline); // true
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2. Avec JavaScript 1.5 : <code>multiline</code> est une propriété liée à l'instance de {{jsxref("RegExp")}} et non à l'objet <code>RegExp</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.10.7.4', 'RegExp.prototype.multiline')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-get-regexp.prototype.multiline', 'RegExp.prototype.multiline')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td><code>multiline</code> est désormais un propriété du prototype sous forme d'accesseur plutôt qu'une propriété directement liée à l'instance.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-regexp.prototype.multiline', 'RegExp.prototype.multiline')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.multiline")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>Avant Firefox 48 , une propriété globale non-standard <code>RegExp.multiline</code> existait en plus de la propriété <code>RegExp.prototype.multiline</code>. Elle a été retirée dans les nouvelles versions du moteur (cf. {{bug(1219757)}}). On utilisera la propriété décrite sur cette page ou le <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières#Effectuer_des_recherches_avancées_en_utilisant_les_drapeaux_(flags)">marqueur <code>m</code></a> à la place.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RegExp.prototype.global")}}</li>
 <li>{{jsxref("RegExp.prototype.lastIndex")}}</li>
 <li>{{jsxref("RegExp.prototype.ignoreCase")}}</li>
 <li>{{jsxref("RegExp.prototype.source")}}</li>
 <li>{{jsxref("RegExp.prototype.sticky")}}</li>
</ul>
