---
title: ':last-child'
slug: 'Web/CSS/:last-child'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:last-child'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:last-child</code></strong> permet de cibler un élément qui est le dernier enfant de son parent.</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel élément &lt;li&gt; tant que    */
/* celui-ci est le dernier enfant de son élément */
/* parent */
li:last-child {
  background-color: lime;
}</pre>

<div class="note">
<p><strong>Note :</strong> En CSS3, l'élément ciblé devait avoir un élément parent, cette restriction a été levée en CSS4.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">li:last-child {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
   &lt;li&gt;Cet élément n'est pas vert !&lt;/li&gt;
   &lt;li&gt;Celui-ci est vert.&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%', 100)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#last-child', ':last-child')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Il n'est plus obligatoire que l'élément ciblé ait un parent.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#last-child', ':last-child')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.last-child")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":first-child")}}</li>
 <li>{{cssxref(":nth-child")}}</li>
 <li>{{cssxref(":last-of-type")}}</li>
 <li>{{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}</li>
</ul>
