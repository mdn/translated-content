---
title: 'Attribut HTML : maxlength'
slug: Web/HTML/Attributes/maxlength
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Input
  - Reference
  - maxlength
  - textarea
translation_of: Web/HTML/Attributes/maxlength
---
<p>{{HTMLSidebar}}</p>

<p>L'attribut <strong><code>maxlength</code></strong> définit le nombre maximal de caractères (en unités de code UTF-16) que l'utilisateur peut saisir dans un <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a> ou un <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a>. Il doit s'agir d'un nombre entier égal ou supérieur à 0. Si aucune longueur maximale n'est spécifiée, ou si une valeur non valide est spécifiée, l'entrée ou la zone de texte n'a pas de longueur maximale.</p>

<p>Toute valeur de <code>maxlength</code> doit être supérieure ou égale à la valeur de <a href="/fr/docs/Web/HTML/Attributes/minlength"><code>minlength</code></a>, si elle est présente et valide. L'entrée échoue à la validation des contraintes si la longueur de la valeur textuelle du champ est supérieure à la longueur maximale des unités de code UTF-16. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur.</p>

<h3 id="constraint_validation">Validation des contraintes</h3>

<p>Bien que le navigateur empêche généralement l'utilisateur de saisir plus de texte que ne l'autorise l'attribut <code>maxlength</code>, si la longueur est supérieure à ce dernier, la propriété en lecture seule <a href="/fr/docs/Web/API/ValidityState/tooLong"><code>tooLong</code></a> d'un objet <a href="/fr/docs/Web/API/ValidityState"><code>ValidityState</code></a> sera vraie.</p>

<h2 id="examples">Exemple</h2>

<pre class="brush: html">&lt;input type="password" maxlength="4"/&gt;</pre>

<div>{{EmbedLiveSample('examples', '', 100)}}</div>

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
      <td>{{SpecName('HTML WHATWG', 'input.html#attr-input-maxlength', 'maxlength attribute')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5.1', 'input.html#attr-maxlength-accept', 'maxlength attribute')}}</td>
      <td>{{Spec2('HTML5.1')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.attribute.maxlength")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/minlength"><code>minlength</code></a></li>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/size"><code>size</code></a></li>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/pattern"><code>pattern</code></a></li>
  <li><a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">Validation des contraintes</a></li>
  <li>L'API <a href="/fr/docs/Web/API/Constraint_validation">Constraint validation</a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a></li>
</ul>
