---
title: ':nth-last-of-type'
slug: 'Web/CSS/:nth-last-of-type'
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:nth-last-of-type'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:nth-last-of-type</code></strong> permet de cibler des éléments qui possèdent <code><em>a</em>n+<em>b</em>-1</code> nœud frères étant les mêmes éléments à partir de la fin de l'arbre et qui ont le même élément parent (l'indice <code>n</code> sera incrémenté à partir de 0). Autrement dit, la pseudo-classe parcourra les éléments d'un type donné en partant de la fin de l'élément parent, selon le motif passé en argument.</p>

<pre class="brush: css no-line-numbers">/* Cible les éléments &lt;div&gt; qui sont les 4e */
/* 8e, 16e, 20e, à partir du dernier élément */
/* &lt;div&gt; d'un élément parent */
div:nth-last-of-type(4n) {
  background-color: lime;
}</pre>

<p>Pour plus de détails sur les arguments passés à cette pseudo-classe, voir {{cssxref(":nth-child")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La pseudo-classe <code>nth-last-of-type</code> prend un seul argument qui représente le motif de répétition des éléments correspondants, comptés à partir de la fin.</p>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Ici, on souhaite mettre en avant le deuxième élément {{HTMLElement("span")}} en partant de la fin :</p>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">span:nth-last-of-type(2) {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;span&gt;Ce span est le premier !&lt;/span&gt;
  &lt;span&gt;Ce span ne l'est pas. :(&lt;/span&gt;
  &lt;em&gt;Celui-ci est bizarre.&lt;/em&gt;
  &lt;span&gt;Celui-ci l'est !&lt;/span&gt;
  &lt;strike&gt;C'est un autre type&lt;/strike&gt;
  &lt;span&gt;Malheureusement, celui-ci ne l'est pas.&lt;/span&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<div>{{EmbedLiveSample('Exemples')}}</div>

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
   <td>{{SpecName('CSS4 Selectors', '#nth-last-of-type-pseudo', ':nth-last-of-type')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>L'élément ciblé ne doit pas nécessairement avoir un élément parent.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#nth-last-of-type-pseudo', ':nth-last-of-type')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.nth-last-of-type")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":last-of-type")}}</li>
 <li>{{cssxref(":nth-of-type")}}</li>
</ul>
