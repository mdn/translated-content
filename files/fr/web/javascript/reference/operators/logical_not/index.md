---
title: NON logique (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_not
translation-of: Web/JavaScript/Reference/Operators/Logical_NOT
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur logique NON (<code>!</code>) prend l'opposé logique de la valeur fournie par son opérande. Vrai devient faux et vice versa. Il est généralement utilisé avec les <a href="/fr/docs/Web/JavaScript/Data_structures#boolean_type">booléens</a>. Lorsque cet opérateur est utilisé avec une valeur non-booléenne, il renvoie <code>false</code> si son opérande peut être converti en <code>true</code> et <code>true</code> sinon.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
!<var>expr</var>
</pre>

<h2 id="description">Description</h2>

<p>Cet opérateur renvoie <code>false</code> si son opérande peut être converti en <code>true</code> ; sinon il renvoie <code>true</code>.</p>

<p>Si une valeur peut être convertie en <code>true</code>, on dira en anglais qu'elle est <a href="/fr/docs/Glossary/Truthy"><i>truthy</i></a>. À l'inverse, si elle peut être convertie en <code>false</code>, on dira en anglais qu'elle est <a href="/fr/docs/Glossary/Falsy"><i>falsy</i></a>.</p>

<p>Voici des exemples d'expression qui peuvent être converties en <code>false</code> :</p>

<ul>
  <li><code>null</code> ;</li>
  <li><code>NaN</code> ;</li>
  <li><code>0</code> ;</li>
  <li>la chaîne vide (<code>""</code> ou <code>''</code> ou <code>``</code>) ;</li>
  <li><code>undefined</code>.</li>
</ul>

<p>Bien que l'opérateur <code>!</code> puisse être utilisé avec des opérandes non booléens, sa valeur de retour sera toujours un <a href="/fr/docs/Web/JavaScript/Data_structures#boolean_type">booléen</a>. Pour convertir une valeur (ou une expression) en sa valeur booléenne correspondante, on pourra utiliser un double NON ou le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_NOT">Utiliser NON</h3>

<p>Le code suivant illustre l'utilisation de l'opérateur <code>!</code> pour le NON logique.</p>

<pre class="brush: js">
let n1 = !true     // !t renvoie false
let n2 = !false    // !f renvoie true
let n3 = !''       // !f renvoie true
let n4 = !'Cat'    // !t renvoie false
</pre>

<h3 id="Double_NOT_!!">Double NON (<code>!!</code>)</h3>

<p>Il est possible d'utiliser deux opérateurs NON à la suite pour convertir n'importe quelle valeur en booléen selon qu'elle est <a href="/fr/docs/Glossary/Truthy"><i>truthy</i></a> ou <a href="/fr/docs/Glossary/Falsy"><i>falsy</i></a>.</p>

<p>Une conversion équivalente pourra être obtenue avec le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a>.</p>

<pre class="brush: js">
let n1 = !!true                   // !!truthy renvoie true
let n2 = !!{}                     // !!truthy renvoie true : <strong>tout</strong> objet est truthy
let n3 = !!(new Boolean(false))   // Attention, un objet Boolean est toujours truthy !
let n4 = !!false                  // !!falsy renvoie false
let n5 = !!""                     // !!falsy renvoie false
let n6 = !!Boolean(false)         // !!falsy renvoie false
</pre>

<h3 id="Converting_between_NOTs">Équivalence booléenne de la double négation</h3>

<p>L'expression qui suit, utilisée avec des booléens :</p>

<pre class="brush: js">!!bCondition</pre>

<p>est toujours égale à :</p>

<pre class="brush: js">bCondition</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>{{jsxref("Boolean")}}</li>
  <li>{{Glossary("Truthy")}}</li>
  <li>{{Glossary("Falsy")}}</li>
</ul>
