---
title: 'Attribut HTML : required'
slug: Web/HTML/Attributes/required
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - Forms
  - required
translation_of: Web/HTML/Attributes/required
---
<div>{{HTMLSidebar}}</div>

<p>L'attribut booléen <strong><code>required</code></strong>, s'il est présent, indique que l'utilisateur doit spécifier une valeur pour l'entrée avant que le formulaire propriétaire puisse être soumis. L'attribut <code>required</code> est pris en charge pour les éléments <a href="/fr/docs/Web/HTML/Element/Input/text"><code>text</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/search"><code>search</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/url"><code>url</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/tel"><code>tel</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/email"><code>email</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/password"><code>password</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/date"><code>date</code></a>, <a href=" /fr/docs/Web/HTML/Element/Input/month" ><code>month</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/week"><code>week</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/time"><code>time</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/datetime-local"><code>datetime-local</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/number"><code>number</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/checkbox"><code>checkbox</code></a>, <a href="/fr/docs/Web/HTML/Element/Input/radio"><code>radio</code></a>, les éléments <a href="/fr/docs/Web/HTML/Element/Input/file"><code>file</code></a>, <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> de contrôle de formulaire. Si elle est présente sur l'un de ces types de saisie et éléments, la pseudo-classe <a href="/fr/docs/Web/CSS/:required"><code>:required</code></a> s'appliquera. Si l'attribut n'est pas inclus, la pseudo-classe <a href="/fr/docs/Web/CSS/:optional"><code>:optional</code></a> s'appliquera.</p>

<p>L'attribut n'est pas pris en charge ou n'est pas pertinent pour <a href="/fr/docs/Web/HTML/Element/Input/range"><code>range</code></a> et <a href="/fr/docs/Web/HTML/Element/Input/color"><code>color</code></a>, car les deux ont des valeurs par défaut. Il n'est pas non plus pris en charge sur <a href="/fr/docs/Web/HTML/Element/Input/hidden"><code>hidden</code></a> car on ne peut pas s'attendre à ce qu'un utilisateur remplisse un formulaire qui est caché. Il n'est pas non plus supporté sur aucun des types de boutons, y compris <code>image</code>.</p>

<p>Notez que <code>color</code> et <code>range</code> ne supportent pas <code>required</code>, mais le type <code>color</code> est par défaut <code>#000000</code>, et <code>range</code> prend par défaut le point médian entre <code>min</code> et <code>max</code> — avec <code>min</code> et <code>max</code> prenant par défaut les valeurs 0 et 100 respectivement dans la plupart des navigateurs s'ils ne sont pas déclarés — donc a toujours une valeur.</p>

<p>Dans le cas d'un groupe de boutons <a href="/fr/docs/Web/HTML/Element/Input/radio"><code>radio</code></a> de même nom, si un seul bouton radio dans le groupe a l'attribut <code>required</code>, un bouton radio dans ce groupe doit être vérifié, bien que ce ne soit pas nécessairement celui où l'attribut est appliqué. Ainsi, pour améliorer la maintenance du code, il est recommandé d'inclure l'attribut <code>required</code> dans chaque bouton radio de même nom dans le groupe, ou bien dans aucun.</p>

<p>Dans le cas d'un même groupe nommé de types d'entrée <a href="/fr/docs/Web/HTML/Element/Input/checkbox"><code>checkbox</code></a>, seules les cases à cocher avec l'attribut <code>required</code> sont obligatoires.</p>

<div class="note">
  <p><strong>Note :</strong>Le réglage <code><a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute">aria-required</a>="true"</code> indique à un lecteur d'écran qu'un élément (n'importe lequel) est requis, mais n'a aucune incidence sur le caractère facultatif de l'élément.</p>
</div>

<h2 id="attribute_interactions">Interactions entre attributs</h2>

<p>Comme un champ en lecture seule ne peut pas avoir de valeur, <code>required</code> n'a aucun effet sur les entrées dont l'attribut <a href="readonly"><code>readonly</code></a> est également spécifié.</p>

<h2 id="usability">Utilisabilité</h2>

<p>Lorsque vous incluez l'attribut <code>required</code>, fournissez une indication visible à proximité du contrôle informant l'utilisateur que les éléments <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/Textarea"><code>&lt;textarea&gt;</code></a> sont obligatoires. En outre, ciblez les contrôles de formulaire requis avec la pseudo-classe <a href="/fr/docs/Web/CSS/:required"><code>:required</code></a>, en les stylisant de manière à indiquer qu'ils sont requis. Cela améliore la convivialité pour les utilisateurs voyants. Les technologies d'assistance doivent informer l'utilisateur que le contrôle de formulaire est obligatoire sur la base de l'attribut required, mais l'ajout de <code><a href="/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute">aria-required</a>="true"</code> ne fait pas de mal, au cas où la combinaison navigateur / lecteur d'écran ne prendrait pas encore en charge <code>required</code>.</p>

<h2 id="constraint_validation">Validation des contraintes</h2>

<p>Si l'élément est requis et que la valeur de l'élément est la chaîne vide, alors l'élément souffre de <a href="/fr/docs/Web/API/ValidityState/valueMissing"><code>valueMissing</code></a> et l'élément correspondra à la pseudo classe <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a>.</p>

<h2 id="examples">Exemple</h2>

<h3 id="html">HTML</h3>

<pre class="brush: html">&lt;form&gt;
  &lt;div class="group"&gt;
    &lt;input type="text"&gt;
    &lt;label&gt;Normal&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="group"&gt;
    &lt;input type="text" required="required"&gt;
    &lt;label&gt;Requis&lt;/label&gt;
  &lt;/div&gt;
  &lt;input type="submit"&gt;
&lt;/form&gt;</pre>

<h3 id="result">Résultat</h3>

<div>{{EmbedLiveSample('examples')}}</div>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Fournissez une indication aux utilisateurs pour les informer que le contrôle de formulaire est requis. Veillez à ce que le message soit multiforme (texte, couleur, marquage, attribut, etc.) afin que tous les utilisateurs comprennent les exigences, qu'ils soient daltoniens, qu'ils présentent des différences cognitives ou qu'ils utilisent un lecteur d'écran.</p>


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
      <td>{{SpecName('HTML WHATWG', 'forms.html#attr-input-required', 'l\'attribut required')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'forms.html#attr-input-required', 'l\'attribut required')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5.1', 'sec-forms.html#the-required-attribute', 'l\'attribut required')}}</td>
      <td>{{Spec2('HTML5.1')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.attributes.required")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>La propriété <a href="/fr/docs/Web/API/validityState/valueMissing"><code>validityState.valueMissing</code></a></li>
  <li>Les pseudo-classes <a href="/fr/docs/Web/CSS/:required"><code>:required</code></a> et <a href="/fr/docs/Web/CSS/:optional"><code>:optional</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/Input"><code>&lt;input&gt;</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a></li>
</ul>
