---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-emphasis-style
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-emphasis-style</code></strong> définit le type d'emphase utilisée. Celui-ci peut également être (re)défini via la propriété raccourcie {{cssxref("text-emphasis")}}.</p>

<pre class="brush:css no-line-numbers">/* Valeur initiale */
/* Aucune marque d'emphase */
text-emphasis-style: none;

/*  Valeur distincte */
text-emphasis-style: 'x';
text-emphasis-style: '点';
text-emphasis-style: '\25B2';
text-emphasis-style: '*';

/* Valeurs avec un mot-clé */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Valeurs globales */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Aucune marque d'emphase.</dd>
 <dt><code>filled</code></dt>
 <dd>La forme est remplie avec une couleur unie. Si <code>filled</code> ou <code>open</code> est absent, ce sera la valeur par défaut.</dd>
 <dt><code>open</code></dt>
 <dd>La forme est vide.</dd>
 <dt><code>dot</code></dt>
 <dd>Cette valeur permet d'afficher des marques en forme de points. Le point rempli est le caractère <code>'•'</code> (<code>U+2022</code>) et le point vide est le caractère <code>'◦'</code> (<code>U+25E6</code>).</dd>
 <dt><code>circle</code></dt>
 <dd>Cette valeur permet d'afficher des marques en forme de cercles (plus grands que les points). Le cercle rempli est le caractère <code>'●'</code> (<code>U+25CF</code>) et celui pour le cercle ouvert est <code>'○'</code> (<code>U+25CB</code>).</dd>
 <dt><code>double-circle</code></dt>
 <dd>Cette valeur permet d'afficher des marques en forme de doubles cercles. Le double-cercle rempli est le caractère <code>'◉'</code> (<code>U+25C9</code>), et le double-cercle ouvert est le caractère <code>'◎'</code> (<code>U+25CE</code>).</dd>
 <dt><code>triangle</code></dt>
 <dd>Cette valeur permet d'afficher des marques en forme de triangles. Le triangle rempli correspond au caractère <code>'▲'</code> (<code>U+25B2</code>) et le triangle ouvert au caractère <code>'△'</code> (<code>U+25B3</code>).</dd>
 <dt><code>sesame</code></dt>
 <dd>Cette valeur permet d'afficher des marques en forme de points sésame :<code>'﹅'</code> (<code>U+FE45</code>) pour le caractère rempli et <code>'﹆'</code> (<code>U+FE46</code>) pour le caractère ouvert.</dd>
 <dt><code>&lt;string&gt;</code></dt>
 <dd>Utilise la chaîne fournie comme marque. Attention, l'agent utilisateur peut tronquer la chaîne ou choisir d'ignorer les chaînes qui ont plus d'un graphème. Il est donc conseillé de n'utiliser qu'une seule lettre.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;&lt;em&gt;Coucou&lt;/em&gt;, je suis &lt;em&gt;là&lt;/em&gt;&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css"><code>em {
  text-emphasis-style: sesame;
}</code></pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Text Decoration', '#text-emphasis-style-property', 'text-emphasis')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-emphasis-style")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref('text-emphasis-color')}}</li>
 <li>{{cssxref('text-emphasis')}}.</li>
 <li>{{cssxref('text-emphasis-position')}}</li>
</ul>
