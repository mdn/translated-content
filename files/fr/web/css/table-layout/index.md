---
title: table-layout
slug: Web/CSS/table-layout
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/table-layout
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>table-layout</code></strong> définit l'algorithme utilisé pour disposer les cellules, lignes et colonnes d'un tableau.</p>

<div>{{EmbedInteractiveExample("pages/css/table-layout.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeur utilisant un mot-clé */
table-layout: auto;
table-layout: fixed;

/* Valeurs globales */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt>{{cssxref("auto")}}</dt>
 <dd>Un algorithme automatique, utilisé communément par la plupart des navigateurs, est utilisé pour gérer la disposition du tableau. La largeur du tableau et de ses cellules dépendent de leur contenu.</dd>
 <dt><code>fixed</code></dt>
 <dd>La largeur du tableau et celles des colonnes sont définies grâce aux largeurs des éléments <code>table</code> et <code>col</code> ou grâce à la largeur (explicite) de la première ligne de cellules. Les cellules des lignes suivantes n'affectent pas la largeur des colonnes.<br>
 <br>
 Avec cette méthode « fixée », tout le tableau peut être rendu dès que la première ligne a été téléchargée et analysée. Cela permet d'accélérer le temps de rendu par rapport à la valeur <code>auto</code>. En revanche, le contenu des lignes (en dehors de la première), peut ne pas rentrer dans les colonnes avec la largeur calculée. Les cellules dont le contenu est trop large utiliseront la propriété {{cssxref("overflow")}} pour déterminer comment gérer le dépassement.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple utilise <code>table-layout: fixed</code> et une largeur donnée (avec la propriété <code>width</code>) afin que le tableau ne s'agrandisse pas avec son contenu. Ainsi, on peut voir l'effet de la propriété {{cssxref("text-overflow")}} et l'application d'une ellipse pour les mots trop longs pour le tableau.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table class="exemple"&gt;
  &lt;tr&gt;
    &lt;td width="7em"&gt;Jean&lt;/td&gt;
    &lt;td width="7em"&gt;Biche&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Jean-Roger-Michel&lt;/td&gt;
    &lt;td&gt;du Domaine de la Biche&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

tr, td {
  border: solid;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS2.1', 'tables.html#width-layout', 'table-layout')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.table-layout")}}</p>
