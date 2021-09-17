---
title: ':focus'
slug: 'Web/CSS/:focus'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:focus'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:focus</code></strong> permet de cibler un élément lorsque celui-ci reçoit le focus (soit il est sélectionné à l'aide du clavier, soit il est activé avec la souris comme par exemple le champ d'un formulaire).</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel élément &lt;input&gt; */
/* uniquement lorsqu'il a le focus */
input:focus {
  color: red;
}</pre>

<p>Cette pseudo-classe ne s'applique qu'aux éléments avec le focus, elle ne s'applique pas à ses parents (comme {{cssxref(":checked")}}, {{cssxref(":enabled")}} mais pas comme {{cssxref(":active")}} ou {{cssxref(":hover")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.prenom:focus {
  background: yellow;
  color: red;
}

.nom:focus {
  background: yellow;
  color: lime;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input class="prenom" value="Rouge si focus"&gt;
&lt;input class="nom" value="Vert si focus"&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%', 40)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Il faut s'assurer que l'indicateur visuel de focus puisse être vu par des personnes ayant une vision faible. Cela pourra d'autant plus bénéficier aux personnes qui consultent le document dans un endroit fortement éclairé (dehors au soleil par exemple). La recommandation <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">WCAG 2.1 SC 1.4.11 Non-Text Contrast</a> nécessite un contraste minimum de 3 à 1.</p>

<ul>
 <li>Indicateurs visuels de focus accessibles : <a href="https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/">Conseils sur la conception d'indicateurs utiles et utilisables (en anglais)</a></li>
</ul>

<h3 id="focus_outline_none"><code>:focus { outline: none; }</code></h3>

<p>Il ne faut jamais retirer l'indicateur de focus sans le remplacer par un autre indicateur qui respecte la recommandation <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">WCAG 2.1 SC 1.4.11 Non-Text Contrast</a> :</p>

<ul>
 <li><a href="https://a11yproject.com/posts/never-remove-css-outlines/">Ne jamais retirer les bordures/contours CSS (en anglais)</a></li>
</ul>

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
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-focus', ':focus')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Définition de la sémantique relative à HTML.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#focus-pseudo', ':focus')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':focus')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':focus')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.focus")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{CSSxRef(":focus-visible")}} {{Experimental_Inline}}</li>
 <li>{{cssxref(":focus-within")}}</li>
</ul>
