---
title: ':focus-visible'
slug: 'Web/CSS/:focus-visible'
tags:
  - CSS
  - Pseudo-classe
  - Reference
  - Web
translation_of: 'Web/CSS/:focus-visible'
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La pseudo-classe <strong><code>:focus-visible</code></strong> s'applique lorsqu'un élément correspond à la pseudo-classe {{cssxref("focus")}} et que l'agent utilisateur détermine, via une heuristique, que le focus devrait être mis en évidence sur l'élément (la plupart des navigateurs affichent un contour en surbrillance par défaut).</p>

<p>Ce sélecteur peut être utile afin de fournir un indicateur de focus différent selon le mode de navigation de l'utilisateur (souris ou clavier).</p>

<p>On notera que Firefox prend en charge cette fonctionnalité via une ancienne pseudo-classe préfixée  <code>:-moz-focusring</code>. Voir la page {{cssxref(":-moz-focusring")}} pour plus d'informations.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>:focus-visible</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<p>Dans cet exemple, le sélecteur <code>:focus-visible</code> utilise le comportement de l'agent utilisateur afin de déterminer lorsqu'il doit s'appliquer. Pour utiliser l'exemple, comparez ce qui se produit selon que vous utilisez une souris ou un clavier et notez la différence avec les éléments ciblés par <code>:focus</code>.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;input value="Styles par défaut"&gt;&lt;br&gt;
&lt;button&gt;Styles par défaut&lt;/button&gt;&lt;br&gt;
&lt;input class="focus-only" value=":focus only"&gt;&lt;br&gt;
&lt;button class="focus-only"&gt;:focus only&lt;/button&gt;&lt;br&gt;
&lt;input class="focus-visible-only" value=":focus-visible only"&gt;&lt;br&gt;
&lt;button class="focus-visible-only"&gt;:focus-visible only&lt;/button&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">input, button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
</pre>

<p>{{EmbedLiveSample('Exemple_simple', '100%', '300')}}</p>

<h3 id="Choisir_d'afficher_l’indicateur_de_focus">Choisir d'afficher l’indicateur de focus</h3>

<p>Un contrôle personnalisé (par exemple un bouton provenant d'un <em><a href="/fr/docs/Web/Web_Components/Using_custom_elements">custom element</a></em>) peut utiliser <code>:focus-visible</code> afin d'appliquer ou non un indicateur de focus pour la navigation au clavier afin de calquer au comportement natif de {{htmlelement("button")}}.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;custom-button tabindex="0" role="button"&gt;Cliquez-moi&lt;/custom-button&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Fournir une alternative pour les navigateurs
     qui ne prennent pas en charge :focus-visible */
  outline: 2px solid red;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Retirer l'indicateur de focus à la souris
     pour les navigateurs qui prennent en charge :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Dessiner un contour pour les navigateurs qui
     prennent en charge :focus-visible lorsque la
     navigation est au clavier */
  outline: 4px dashed darkorange;
  background: transparent;
}</pre>

<p>{{EmbedLiveSample("Choisir_d'afficher_l’indicateur_de_focus", '100%', '300')}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<h3 id="Troubles_de_la_vision">Troubles de la vision</h3>

<p>Il faut s'assurer que l'indicateur visuel de focus puisse être vu par des personnes ayant une vision faible. Cela pourra d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">WCAG 2.1 SC 1.4.11 Non-Text Contrast</a> nécessite un contraste minimum de 3 à 1.</p>

<ul>
 <li>Indicateurs visuels de focus accessibles : <a href="https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/">Conseils sur la conception d'indicateurs utiles et utilisables (en anglais)</a></li>
</ul>

<h3 id="Troubles_cognitifs">Troubles cognitifs</h3>

<p>L'apparition ou la disparition d'un indicateur de focus peut être source de confusion pour les personnes souffrant de troubles cognitifs ou pour les personnes qui ne sont pas habituées à ces interfaces.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Selectors", "#the-focus-visible-pseudo", ":focus-visible")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.focus-visible")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":focus")}}</li>
 <li>{{cssxref(":focus-within")}}</li>
</ul>
