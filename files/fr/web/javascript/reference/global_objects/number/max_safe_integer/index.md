---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/MAX_SAFE_INTEGER
---
<div>{{JSRef}}</div>

<p>La constante <code><strong>Number.MAX_SAFE_INTEGER </strong></code>représente la valeur (sûre) maximale d’un nombre entier en JavaScript (2^53 -1).</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Pour représenter des entiers supérieurs à cette valeur, on pourra utiliser le type {{jsxref("BigInt")}}.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}</div>



<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Description">Description</h2>

<p>La constante <code>MAX_SAFE_INTEGER</code> a une valeur de <code>9007199254740991</code>. Cette valeur s'explique par le fait que JavaScript utilise <a href="http://en.wikipedia.org/wiki/Double_precision_floating-point_format">les nombres au format de virgule flottante à double précision</a> comme spécifié dans <a href="http://fr.wikipedia.org/wiki/IEEE_754">IEEE 754</a> et ne peut représenter avec certitude qu’un nombre entre <code>-(2^53-1)</code> et <code>2^53 -1</code>.</p>

<p>Dans ce contexte, « sûr » fait référence à la capacité à représenter exactement les entiers et à les comparer entre eux. Par exemple, <code>Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2</code> vaudra <code>true</code> ce qui est mathématiquement incorrect. Pour plus d'informations, voir également {{jsxref("Number.isSafeInteger()")}}.</p>

<p><code>MAX_SAFE_INTEGER</code> est une propriété statique de {{jsxref("Number")}}, elle doit toujours être utilisée comme <code>Number.MAX_SAFE_INTEGER</code> et non pas comme la propriété d'un objet <code>Number</code> qui aurait été instancié.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">Number.MAX_SAFE_INTEGER // 9007199254740991
Math.pow(2, 53) -1      // 9007199254740991
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
   <td>{{SpecName('ES2015', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.MAX_SAFE_INTEGER")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Number.MIN_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.isSafeInteger()")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
