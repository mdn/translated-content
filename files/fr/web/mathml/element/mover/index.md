---
title: <mover>
slug: Web/MathML/Element/mover
translation_of: Web/MathML/Element/mover
---
<p>{{MathMLRef()}}</p>
<p>L'élément MathML <code>&lt;mover&gt;</code> est utilisé pour attacher un accent ou une limite au-dessus d'une expression. La syntaxe est la suivante: <code>&lt;mover&gt; <em>base overscript</em> &lt;/mover&gt;</code></p>
<h2 id="Attributs">Attributs</h2>
<dl>
 <dt id="attr-accent">
  accent</dt>
 <dd>
  Lorsqu'il vaut <code>true</code> le script au-dessus est un <em>accent</em>, qui est affiché plus près de la base.<br>
  Lorsqu'il vaut <code>false</code> (valeur par défaut) le script au-dessus est une <em>limite</em> au-dessus de la base.</dd>
 <dt id="attr-align">
  align</dt>
 <dd>
  L'alignement du script au-dessus. Les valeurs possibles sont : <code>left</code>, <code>center</code>, et <code>right</code>.</dd>
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
<h2 id="Exemples">Exemples</h2>
<p>Exemple de rendu: <img alt="x+y+z" src="mover.png"></p>
<p>Rendu dans votre navigateur : <math> <mover accent="true"> <mrow> <mi> x </mi> <mo> + </mo> <mi> y </mi> <mo> + </mo> <mi> z </mi> </mrow> <mo> ⏞ </mo> </mover> </math></p>
<pre class="brush: html">&lt;math&gt;

&lt;mover accent="true"&gt;
  &lt;mrow&gt;
    &lt;mi&gt; x &lt;/mi&gt;
    &lt;mo&gt; + &lt;/mo&gt;
    &lt;mi&gt; y &lt;/mi&gt;
    &lt;mo&gt; + &lt;/mo&gt;
    &lt;mi&gt; z &lt;/mi&gt;
  &lt;/mrow&gt;
  &lt;mo&gt; &amp;#x23DE; &lt;!--TOP CURLY BRACKET--&gt; &lt;/mo&gt;
&lt;/mover&gt;

&lt;/math&gt;
</pre>

<h2 id="Specifications">Spécifications</h2>
<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('MathML3', 'chapter3.html#presm.mover', 'mover') }}</td>
   <td>{{ Spec2('MathML3') }}</td>
   <td>Spécification courante</td>
  </tr>
  <tr>
   <td>{{ SpecName('MathML2', 'chapter3.html#presm.mover', 'mover') }}</td>
   <td>{{ Spec2('MathML2') }}</td>
   <td>Spécification initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("mathml.elements.mover")}}</p>

<h2 id="See_also">Voir aussi</h2>
<ul>
 <li>{{ MathMLElement("munder") }} (Underscript)</li>
 <li>{{ MathMLElement("munderover") }} (Underscript-overscript pair)</li>
</ul>
