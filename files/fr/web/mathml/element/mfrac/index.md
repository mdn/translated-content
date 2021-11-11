---
title: mfrac
slug: Web/MathML/Element/mfrac
tags:
  - MathML
  - 'MathML:Element'
  - 'MathML:Référence'
translation_of: Web/MathML/Element/mfrac
---
<p>L'élément MathML <code>&lt;mfrac&gt;</code> est utilisé pour afficher des fractions.</p>
<p>La syntaxe est la suivante : <code>&lt;mfrac&gt;<em>numérateur</em> <em>dénominateur</em>&lt;/mfrac&gt;</code>.</p>
<h2 id="Attributs">Attributs</h2>
<dl>
 <dt id="attr-bevelled">
  bevelled</dt>
 <dd>
  Définit la façon dont la fraction est affichée. Si l'attribut vaut <code>true</code>, la ligne de fraction est biseautée (/) et le numérateur et le dénominateur sont affichés côte à côté. S'il vaut <code>false</code> (la valeur par défaut), le numérateur sera au-dessus du dénominateur.</dd>
 <dt id="attr-class-id-style">
  class, id, style</dt>
 <dd>
  Afin d'être utilisés avec les <a href="/fr/docs/CSS">feuilles de styles</a>.</dd>
 <dt id="attr-denomalign">
  denomalign</dt>
 <dd>
  L'alignement du dénominateur sous la fraction. Les valeurs possibles : <code>left</code>, <code>center</code> (valeur par défaut), et <code>right</code>.</dd>
 <dt id="attr-href">
  href</dt>
 <dd>
  Un hyperlien pointant vers un URI donné.</dd>
 <dt id="attr-linethickness">
  linethickness</dt>
 <dd>
  L'épaisseur de la ligne de fraction horizontale. La valeur par défaut est <code>medium</code>, mais l'attribut peut prendre d'autres valeurs comme <code>thin</code>, <code>thick</code>, et <a href="/fr/docs/CSS/length">autres</a>.</dd>
 <dt id="attr-mathbackground">
  mathbackground</dt>
 <dd>
  La couleur de fond. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
 <dt id="attr-mathcolor">
  mathcolor</dt>
 <dd>
  La couleur du texte. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
 <dt id="attr-numalign">
  numalign</dt>
 <dd>
  L'alignement du numérateur au dessus de la barre de fraction. Les valeurs possibles sont : <code>left</code>, <code>center</code> (la valeur par défaut), et <code>right</code>.</dd>
</dl>
<h2 id="Exemple">Exemple</h2>
<p>Exemple d'affichage : <img alt="(a/b)/(c/d)" src="mfrac.png"></p>
<p>Affichage dans votre navigateur: <math> <mfrac bevelled="true"> <mfrac> <mi> a </mi> <mi> b </mi> </mfrac> <mfrac> <mi> c </mi> <mi> d</mi></mfrac></mfrac></math></p>
<pre class="brush: html">&lt;math&gt;
  &lt;mfrac bevelled="true"&gt;
     &lt;mfrac&gt;
        &lt;mi&gt; a &lt;/mi&gt;
        &lt;mi&gt; b &lt;/mi&gt;
     &lt;/mfrac&gt;
     &lt;mfrac&gt;
        &lt;mi&gt; c &lt;/mi&gt;
        &lt;mi&gt; d &lt;/mi&gt;
     &lt;/mfrac&gt;
  &lt;/mfrac&gt;
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
   <td>{{ SpecName('MathML3', 'chapter3.html#presm.mfrac', 'mfrac') }}</td>
   <td>{{ Spec2('MathML3') }}</td>
   <td>Spécification actuelle</td>
  </tr>
  <tr>
   <td>{{ SpecName('MathML2', 'chapter3.html#presm.mfrac', 'mfrac') }}</td>
   <td>{{ Spec2('MathML2') }}</td>
   <td>Spécification initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("mathml.elements.mfrac")}}</p>
