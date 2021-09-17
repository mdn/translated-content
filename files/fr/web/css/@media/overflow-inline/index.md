---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/overflow-inline
---
<div>{{CSSRef}}</div>

<p><strong><code>overflow-inline</code></strong> est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui indique la façon dont l'appareil d'affichage gère le contenu qui dépasse de la zone d'affichage (<em>viewport</em>) dans l'axe logique en ligne (c'est-à-dire le sens correspondant au sens de lecture).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>overflow-inline</code> est définit avec un mot-clé parmi ceux de la liste suivante :</p>

<dl>
 <dt><code>none</code></dt>
 <dd>Le contenu qui dépasse n'est pas affiché.</dd>
 <dt><code>scroll</code></dt>
 <dd>Le contenu qui dépasse peut être visualisé en utilisant une barre de défilement.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nullam ac turpis eleifend, fringilla velit ac, aliquam tellus.
  Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices posuere cubilia Curae; Nunc velit erat, tempus id
  rutrum sed, dapibus ut urna. Integer vehicula nibh a justo
  imperdiet rutrum. Nam faucibus pretium orci imperdiet
  sollicitudin. Nunc id facilisis dui. Proin elementum et
  massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros
  accumsan tincidunt sed eget ex.
&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@media (overflow-inline: scroll) {
  p {
    color: red;
  }
}</pre>

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
   <td>{{SpecName('CSS4 Media Queries', '#mf-overflow-inline', 'overflow-inline')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.overflow-inline")}}</p>
