---
title: Affectation après OU logique (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or_assignment
translation-of: Web/JavaScript/Reference/Operators/Logical_OR_assignment
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur d'affectation après OU logique (<code>x ||= y</code>) n'affecte la valeur de l'opérande droit uniquement si l'opérande gauche est <a href="/fr/docs/Glossary/Falsy">équivalent à faux (<i>falsy</i>)</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
<var>expr1</var> ||= <var>expr2</var>
</pre>

<h2 id="description">Description</h2>

<h3 id="short-circuit_evaluation">Évaluation en court-circuit</h3>

<p>L'opérateur <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR">OU logique</a> fonctionne ainsi :</p>

<pre class="brush: js">
x || y;
// renvoie x lorsque x est équivalent à vrai
// renvoie y lorsque x n'est pas équivalent à vrai
</pre>

<p>L'opérateur OU logique peut utiliser un court-circuit : le second opérande est uniquement évalué si le premier opérande n'est pas équivalent à vrai.</p>

<p>L'opérateur d'affectation après OU logique observe les mêmes règles : l'affectation a uniquement lieu si l'opération logique a besoin d'évaluer l'opérande droit. Autrement dit, <code>x ||= y</code> est équivalent à :</p>

<pre class="brush: js">
x || (x = y);
</pre>

<p>En revanche, il n'est pas équivalent à l'expression suivante qui effectue, quoi qu'il arrive, une affectation :</p>

<pre class="brush: js example-bad">
x = x || y;
</pre>

<p>On notera que ce comportement est différent entre les opérateurs binaires et les opérateurs logiques.</p>

<h2 id="examples">Exemples</h2>

<h3 id="setting_default_content">Affecter une valeur par défaut</h3>

<p>Dans l'exemple qui suit, si <code>paroles</code> est vide, on y place une valeur par défaut :</p>

<pre class="brush: js">
document.getElementById('paroles').textContent ||= 'Aucune parole.'
</pre>

<p>Ici, la notion de court-circuit est utile, car l'élément ne sera pas mis à jour si ce n'est pas nécessaire. Il n'y aura pas d'effet de bord indésiré comme une autre étape de rendu ou la perte du focus, etc.</p>

<p>Attention toutefois à la valeur qu'on teste. Si on souhaite affecter une valeur lorsqu'on rencontre une chaîne de caractère vide (équivalente à faux), on pourra utiliser <code>||=</code>. Sinon, si on souhaite uniquement distinguer <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a> ou <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/null"><code>undefined</code></a>, on utilisera l'opérateur <a href="/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"><code>??=</code></a>.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR">L'opérateur OU logique (||)</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">L'opérateur de coalescence des nuls (<code>??</code>)</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment">L'opérateur d'affectation après OU binaire (<code>|=</code>)</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Le type <code>Boolean</code></a>
  <li><a href="/fr/docs/Glossary/Truthy"><i>Truthy</i></a></li>
  <li><a href="/fr/docs/Glossary/Falsy"><i>Falsy</i></a></li>
</ul>
