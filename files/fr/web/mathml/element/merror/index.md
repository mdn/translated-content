---
title: merror
slug: Web/MathML/Element/merror
tags:
  - MathML
  - 'MathML:Element'
  - 'MathML:Référence'
translation_of: Web/MathML/Element/merror
---
<p>L'élément MathML <code>&lt;merror&gt;</code> est utilisé afin d'afficher des contenus en tant que messages d'erreur. Sous Firefox, ce message d'erreur est affiché de la même façon qu'un message d'erreur XML. Attention : cette erreur <strong>n'est pas déclenchée</strong> lorsque le contenu MahtML est incorrect ou mal formé. Ces deux cas de figure déclencheront une erreur d'analyse du XML (dans le cas de la notation XHTML de MathML), cette erreur n'ayant aucun lien avec <code>&lt;merror&gt;</code>.</p>
<h2 id="Attributs">Attributs</h2>
<dl>
  <dt id="attr-class-id-style">
    class, id, style</dt>
  <dd>
    Afin d'être utilisés avec les <a href="/fr/docs/CSS">feuilles de styles</a>.</dd>
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
</dl>
<h2 id="Exemple">Exemple</h2>
<pre class="brush: html">&lt;math&gt;

&lt;merror&gt;
  &lt;mrow&gt;
    &lt;mtext&gt; Division par zéro : &lt;/mtext&gt;
    &lt;mfrac&gt;
      &lt;mn&gt; 1 &lt;/mn&gt;
      &lt;mn&gt; 0 &lt;/mn&gt;
    &lt;/mfrac&gt;
  &lt;/mrow&gt;
&lt;/merror&gt;

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
      <td>{{ SpecName('MathML3', 'chapter3.html#presm.merror', 'merror') }}</td>
      <td>{{ Spec2('MathML3') }}</td>
      <td>Spécification actuelle</td>
    </tr>
    <tr>
      <td>{{ SpecName('MathML2', 'chapter3.html#presm.merror', 'merror') }}</td>
      <td>{{ Spec2('MathML2') }}</td>
      <td>Spécification initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("mathml.elements.merror")}}</p>
