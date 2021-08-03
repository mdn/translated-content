---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
  - Erreurs
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/No_properties
original_slug: Web/JavaScript/Reference/Erreurs/No_properties
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Les valeurs {{jsxref("null")}} et {{jsxref("undefined")}} n'ont aucunes propriétés auxquelles accéder.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js example-bad">null.toto;
// TypeError: null has no properties

undefined.truc;
// TypeError: undefined has no properties
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("null")}}</li>
 <li>{{jsxref("undefined")}}</li>
</ul>
