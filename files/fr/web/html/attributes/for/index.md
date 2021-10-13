---
title: 'Attribut HTML : for'
slug: Web/HTML/Attributes/for
tags:
  - Attribute
  - Attributes
  - HTML
  - for
  - Reference
translation_of: Web/HTML/Attributes/for
---
<p>{{HTMLSidebar}}</p>

<p>L'attribut <strong><code>for</code></strong> est un attribut autorisé pour <a href="/fr/docs/Web/HTML/Element/label"><code>&lt;label&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/output"><code>&lt;output&gt;</code></a>. Lorsqu'il est utilisé sur un élément <code>&lt;label&gt;</code>, il indique l'élément de formulaire que ce label décrit. Lorsqu'il est utilisé sur un élément <code>&lt;output&gt;</code>, il permet une relation explicite entre les éléments, qui représentent les valeurs, qui sont utilisées dans le résultat représenté par <code>&lt;output&gt;</code>.</p>

<h2 id="usage">Utilisation</h2>

<p>Lorsqu'il est utilisé comme attribut de <code>&lt;label&gt;</code>, l'attribut <code>for</code> a une valeur qui est l'<code>id</code> de l'élément de formulaire, auquel il se rapporte.</p>

<pre class="brush: html">&lt;label for="username"&gt;Votre nom&lt;/label&gt;
&lt;input type="text" id="username"&gt;</pre>

<p>Lorsqu'il est utilisé comme attribut de <code>&lt;output&gt;</code>, l'attribut <code>for</code> a une valeur qui est une liste séparée, par des espaces, des valeurs <code>id</code> des éléments, qui sont utilisés pour créer l'output.</p>

<pre class="brush: html">&lt;input type="range" id="b" name="b" value="50"&gt; +
&lt;input type="number" id="a" name="a" value="10"&gt; =
&lt;output name="result" for="a b">60&lt;/output&gt;</pre>

<h2 id="examples">Exemples</h2>

<p>Voir des exemples d'utilisation sur les pages des éléments pour <a href="/fr/docs/Web/HTML/Element/label"><code>&lt;label&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/output"><code>&lt;output&gt;</code></a>.</p>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'forms.html#attr-label-for', 'for as used with label')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'form-elements.html#attr-output-for', 'for as used with output')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'sec-forms.html#element-attrdef-label-for', 'for as used with label')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'sec-forms.html#element-attrdef-output-for', 'for as used with output')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<h3>Prise en charge pour label</h3>

<p>{{Compat("html.elements.label.for")}}</p>

<h3>Prise en charge pour output</h3>

<p>{{Compat("html.elements.output.for")}}</p>
