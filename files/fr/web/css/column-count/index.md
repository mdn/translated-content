---
title: column-count
slug: Web/CSS/column-count
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-count
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>column-count</code></strong> décrit le nombre de colonnes d'un élément lorsqu'on utilise une disposition en colonnes.</p>

<div>{{EmbedInteractiveExample("pages/css/column-count.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
column-count: auto;

/* Valeurs numériques */
/* Type &lt;number&gt; */
column-count: 3;

/* Valeurs globales */
column-count: inherit;
column-count: initial;
column-count: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Un mot-clé qui indique que le nombre de colonnes doit être déterminé à partir d'autres propriétés CSS (par exemple à partir de {{cssxref("column-width")}}).</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>Un nombre (type {{cssxref("&lt;integer&gt;")}}) strictement positif qui décrit le nombre idéal de colonnes avec lequel répartir le contenu de l'élément. Si la valeur de {{cssxref("column-width")}} n'est pas <code>auto</code>, cette propriété indique simplement le nombre maximal de colonnes autorisé.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.exemple {
  border: 10px solid #000000;
  column-count:3;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;
  « Mais alors, » pensa Alice, « ne serai-je donc
  jamais plus vieille que je ne le suis maintenant ?
  D’un côté cela aura ses avantages, ne jamais être
  une vieille femme. Mais alors avoir toujours des
  leçons à apprendre ! Oh, je n’aimerais pas cela du
  tout. »
  « Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ?
  Il y a à peine de la place pour vous, et il n’y en
  a pas du tout pour vos livres de leçons. »
&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","800","300")}}</p>

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
   <td>{{SpecName('CSS3 Multicol', '#cc', 'column-count')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.column-count")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Apprendre - la disposition multi-colonnes</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">Les concepts de bases pour la disposition multi-colonnes</a></li>
</ul>
