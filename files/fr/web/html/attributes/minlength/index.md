---
title: 'Attribut HTML : minlength'
slug: Web/HTML/Attributes/minlength
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Input
  - Reference
  - minlength
  - textarea
translation_of: Web/HTML/Attributes/minlength
---
<p>{{HTMLSidebar}}</p>

<p>L'attribut <strong><code>minlength</code></strong> définit le nombre minimal de caractères (sous forme d'unités de code UTF-16) que l'utilisateur peut saisir dans un élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a>. Il doit s'agir d'une valeur entière égale ou supérieure à 0. Si aucune longueur minimale n'est spécifiée, ou si une valeur invalide est spécifiée, l'entrée n'a pas de longueur minimale. Cette valeur doit être inférieure ou égale à la valeur de <a href="/fr/docs/Web/HTML/Attributes/maxlength"><code>maxlength</code></a>, sinon la valeur ne sera jamais valide, car il est impossible de satisfaire aux deux critères.</p>

<p>L'entrée échouera à la validation des contraintes si la longueur de la valeur textuelle du champ est inférieure à <code>minlength</code> unités de code UTF-16, avec <a href="/fr/docs/Web/API/validityState/tooShort"><code>validityState.tooShort</code></a> retournant <code>true</code>. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur. En cas d'échec de la soumission, certains navigateurs affichent un message d'erreur indiquant la longueur minimale requise et la longueur actuelle.</p>

<h2 id="examples">Exemples</h2>

<p>En ajoutant <code>minlength="5"</code>, la valeur doit soit être vide, soit comporter cinq caractères ou plus pour être valide.</p>

<pre class="brush: html">&lt;label for="fruit"&gt;Entrez un nom de fruit d'au moins 5 lettres.&lt;/label&gt;
&lt;input type="text" minlength="5" id="fruit"&gt;</pre>

<p>Nous pouvons utiliser des pseudo-classes pour donner un style à l'élément en fonction de la validité de la valeur. La valeur sera valide tant qu'elle sera soit nulle (vide), soit longue de cinq caractères ou plus. <em>Vert</em> est invalide, <em>Citron</em> est valide.</p>

<pre class="brush: css">input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}</pre>

<div>{{EmbedLiveSample('examples', '', 40)}}</div>

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
      <td>{{SpecName('HTML WHATWG', 'input.html#attr-input-minlength', 'l\'attribut minlength')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5.1', 'input.html#attr-minlength-accept', 'l\'attribut minlength')}}</td>
      <td>{{Spec2('HTML5.1')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.attribute.minlength")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/maxlength"><code>maxlength</code></a></li>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/size"><code>size</code></a></li>
  <li>L'attribut <a href="/fr/docs/Web/HTML/Attributes/pattern"><code>pattern</code></a></li>
  <li><a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">Validation des contraintes</a></li>
  <li>L'API <a href="/fr/docs/Web/API/Constraint_validation">Constraint validation</a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a></li>
</ul>
