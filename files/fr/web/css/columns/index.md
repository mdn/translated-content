---
title: columns
slug: Web/CSS/columns
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/columns
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>columns</code></strong> est une propriété raccourcie permettant de définir les deux propriétés {{cssxref('column-width')}} (qui définit la largeur des colonnes) et {{cssxref("column-count")}} (qui définit le nombre de colonnes) en même temps.</p>

<div>{{EmbedInteractiveExample("pages/css/columns.html")}}</div>

<p>Comme pour toute propriété raccourcie, toute propriété détaillée qui n'est pas définie se voit réinitialisée à sa valeur par défaut (surchargeant ainsi les éventuelles règles déclarées avant).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Largeur */
columns: 18em;

/* Nombre de colonnes */
columns: 1;
columns: auto;

/* Combinaison d'une largeur et d'un nombre */
columns: 1 auto;
columns: auto 12em;
columns: auto auto;


/* Valeurs globales */
columns: inherit;
columns: initial;
columns: unset;
</pre>

<p>La propriété <code>columns</code> se définit avec un ou deux valeurs parmi celles décrites ci-après. L'ordre de ces valeurs n'a pas d'importance.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;'column-width'&gt;</code></dt>
 <dd>Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) fournissant une indication quant à la largeur optimale de la colonne ou le mot-clé auto. La colonne réelle peut être plus large (pour remplir l'espace disponible) ou plus étroite (s'il n'y a pas suffisamment d'espace disponible). La longueur exprimée doit être strictement positive, dans le cas contraire, la déclaration sera invalide.</dd>
 <dt><code>&lt;'column-count'&gt;</code></dt>
 <dd>Une quantité (type {{cssxref("&lt;integer&gt;")}}) strictement positive qui décrit le nombre idéal de colonnes parmi lesquelles disposer le contenu de l'élément. Si la valeur de {{cssxref("column-width")}} n'est pas une valeur automatique, cette valeur indique simplement le nombre maximal de colonnes.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.exemple {
  margin: 0;
  height: 90px;
  border: 3px solid black;
  columns: 3;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class=exemple&gt;
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

<p>{{EmbedLiveSample("Exemples",300,120)}}</p>

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
   <td>{{SpecName('CSS3 Multicol', '#columns', 'columns')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.columns")}}</p>
