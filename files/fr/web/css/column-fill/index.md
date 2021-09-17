---
title: column-fill
slug: Web/CSS/column-fill
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/column-fill
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>column-fill</code></strong> permet de contrôler la façon dont le contenu est réparti entre les colonnes. Le contenu peut être équilibré (afin de prendre la même hauteur sur toutes les colonnes) ou être réparti de façon automatique (avec <code>auto</code>) et remplir l'espace nécessaire.</p>

<div>{{EmbedInteractiveExample("pages/css/column-fill.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* Valeurs globales */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
</pre>

<p>Cette propriété est définie grâce à l'un des mots-clés définis ci-après.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Un mot-clé indiquant que les colonnes sont remplies dans l'ordre.</dd>
 <dt><code>balance</code></dt>
 <dd>Un mot-clé indiquant que le contenu doit être équitablement réparti entre les colonnes. Pour les médias paginés, seule la dernière page est équilibrée.</dd>
 <dt><code>balance-all</code></dt>
 <dd>Un mot-clé indiquant que le contenu doit être équitablement réparti entre les colonnes. Pour les média paginés, toutes les pages sont équilibrées.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.exemple {
  border: 10px solid #000000;
  column-count:3;
  column-fill: balance;
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
   <td>{{SpecName('CSS3 Multicol', '#cf', 'column-fill')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.column-fill")}}</p>
