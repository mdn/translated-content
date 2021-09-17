---
title: ':only-child'
slug: 'Web/CSS/:only-child'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:only-child'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:only-child</code></strong> représente n'importe quel élément qui est le seul enfant de son élément parent. Elle permet d'obtenir le même effet que <code>:first-child:last-child</code> ou <code>:nth-child(1):nth-last-child(1)</code>, mais avec une spécificité inférieure.</p>

<pre class="brush: css no-line-numbers">/* Cible chaque élément &lt;p&gt; si celui-ci   */
/* est le seul élément fils de son parent */
p:only-child {
  background-color: lime;
}</pre>

<div class="note">
<p><strong>Note :</strong> En CSS3, pour cibler l'élément, il fallait que celui-ci ait un élément parent. Cette restriction a été levée avec CSS4.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">span:only-child {
  color:red;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;span&gt;
    Ce span est l'unique enfant
    de son parent
  &lt;/span&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;span&gt;
    Ce span est l'un des deux
    enfants de son parent
  &lt;/span&gt;
  &lt;span&gt;
    Ce span est l'un des deux
    enfants de son parent
  &lt;/span&gt;
&lt;/div&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('Exemple_simple', '100%', 150)}}</p>

<h3 id="Exemple_avec_une_liste">Exemple avec une liste</h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">li li {
  list-style-type : disc;
}

li:only-child {
  color: #6699ff;
  font-style: italic;
  list-style-type: square;
}</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;Premier
    &lt;ul&gt;
      &lt;li&gt;Ceci est l'unique élément enfant&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Deuxième
    &lt;ul&gt;
      &lt;li&gt;Cette liste a deux éléments&lt;/li&gt;
      &lt;li&gt;Cette liste a deux éléments&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Troisième
    &lt;ul&gt;
      &lt;li&gt;Cette liste a trois éléments&lt;/li&gt;
      &lt;li&gt;Cette liste a trois éléments&lt;/li&gt;
      &lt;li&gt;Cette liste a trois éléments&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ol&gt;
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample('Exemple_avec_une_liste', '100%', 150)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Il n'est plus nécessaire qu'un élément ait un parent pour être ciblé.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.only-child")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":only-of-type")}}</li>
 <li>{{cssxref(":first-child")}}</li>
 <li>{{cssxref(":last-child")}}</li>
 <li>{{cssxref(":nth-child")}}</li>
</ul>
