---
title: mi
slug: Web/MathML/Element/mi
tags:
  - MathML
  - 'MathML:Element'
  - 'MathML:Référence'
translation_of: Web/MathML/Element/mi
---
<p>L'élément MathML <code>&lt;mi&gt;</code> indique que le contenu doit être affiché comme un <strong>identifiant</strong> (comme les noms de fonctions, de variables ou les constantes symboliques). Il est également possible de l'utiliser avec du texte en général pour annoter.</p>
<h2 id="Attributs">Attributs</h2>
<dl>
  <dt id="attr-class-id-style">
    class, id, style</dt>
  <dd>
    Afin d'être utilisés avec les <a href="/fr/docs/CSS">feuilles de styles</a>.</dd>
  <dt id="attr-dir">
    dir</dt>
  <dd>
    Le sens de lecture du texte. Les valeurs possibles sont soit <code>ltr</code> (<em>left to right</em> pour gauche à droite) or <code>rtl</code> (<em>right to left</em> pour droite à gauche).</dd>
  <dt id="attr-href">
    href</dt>
  <dd>
    Un hyperlien pointant vers un URI donné.</dd>
  <dt id="attr-mathbackground">
    mathbackground</dt>
  <dd>
    La couleur de fond. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
  <dt id="attr-mathcolor">
    mathcolor</dt>
  <dd>
    La couleur du texte. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
  <dt id="attr-mathsize">
    mathsize</dt>
  <dd>
    La taille du contenu. Les valeurs possibles sont :
    <ul>
      <li><code>small :</code> La police utilisée sera plus petite que la police courante.</li>
      <li><code>normal :</code> Équivalent à 100% ou 1em.</li>
      <li><code>big :</code> La police utilisée sera plus grande que la police courante.</li>
      <li>Une <a href="/fr/docs/CSS/longueur">longueur quelconque</a>.</li>
      <li>ou une valeur sans unité qui multiplie la taille par défaut.</li>
    </ul>
  </dd>
  <dt id="attr-mathvariant">
    mathvariant (implémenté en partie : voir {{ bug("114365") }} et {{ bug("162405") }})</dt>
  <dd>
    La classe logique des identifiants, variant selon la typographie. Cela veut dire que, bien que les noms suggèrent une certaine mise en forme, les éléments d'une même classe seront traités de la même manière au sein d'une même expression. Cela peut, ou pas, impliquer un affichage avec la typographie mentionnée. Les valeurs suivantes sont autorisées :
    <ul>
      <li><code>normal</code> (La valeur par défaut pour plus d'un caractère)</li>
      <li><code>bold</code></li>
      <li><code>italic</code> (La valeur par défaut pour un seul caractère)</li>
      <li><code>bold-italic</code></li>
    </ul>
    <ul>
      <li><code>double-struck</code> {{ unimplemented_inline() }}</li>
      <li><code>bold-fraktur</code> {{ unimplemented_inline() }} (la mise en gras fonctionne)</li>
      <li><code>script</code> {{ unimplemented_inline() }}</li>
      <li><code>bold-script</code> {{ unimplemented_inline() }} (la mise en gras fonctionne)</li>
      <li><code>fraktur</code> {{ unimplemented_inline() }}</li>
    </ul>
    <ul>
      <li><code>sans-serif</code></li>
      <li><code>bold-sans-serif</code></li>
      <li><code>sans-serif-italic</code></li>
      <li><code>sans-serif-bold-italic</code></li>
      <li><code>monospace</code></li>
    </ul>
    <ul>
      <li><code>initial</code> {{ unimplemented_inline() }}</li>
      <li><code>tailed</code> {{ unimplemented_inline() }}</li>
      <li><code>looped</code> {{ unimplemented_inline() }}</li>
      <li><code>stretched</code> {{ unimplemented_inline() }}</li>
    </ul>
  </dd>
</dl>
<h2 id="Exemples">Exemples</h2>
<pre class="brush: html">&lt;math&gt;

  &lt;mi&gt; y &lt;/mi&gt;

  &lt;mi&gt; sin &lt;/mi&gt;

  &lt;mi mathvariant="monospace"&gt; x &lt;/mi&gt;

  &lt;mi mathvariant="bold"&gt; &amp;pi; &lt;/mi&gt;

&lt;/math&gt;
</pre>

<h2 id="Specifications">Spécifications</h2>
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
      <td>{{ SpecName('MathML3', 'chapter3.html#presm.mi', 'mi') }}</td>
      <td>{{ Spec2('MathML3') }}</td>
      <td>Spécification actuelle</td>
    </tr>
    <tr>
      <td>{{ SpecName('MathML2', 'chapter3.html#presm.mi', 'mi') }}</td>
      <td>{{ Spec2('MathML2') }}</td>
      <td>Spécification initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("mathml.elements.mi")}}</p>

<h3 id="Gecko-specific_notes">Note relative à Gecko</h3>

<p>À partir de Gecko 20.0 {{geckoRelease("20.0")}} une valeur sans unité est autorisée pour <code>mathsize</code>.</p>
