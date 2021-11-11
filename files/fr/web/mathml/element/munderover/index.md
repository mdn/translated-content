---
title: <munderover>
slug: Web/MathML/Element/munderover
tags:
  - MathML
  - 'MathML:Element'
  - Référence MathML
translation_of: Web/MathML/Element/munderover
---
<p>{{MathMLRef()}}</p>

<p>L'élément MathML <code>&lt;munderover&gt;</code> est utilisé pour attacher des accents et limites à la fois en-dessous et au-dessus d'une expression.<br>
 La syntaxe est la suivante: <code>&lt;munder&gt; <em>base script-en-dessous script-au-dessus</em> &lt;/munder&gt;</code></p>

<h2 id="Attributs">Attributs</h2>

<dl>
 <dt>accent</dt>
 <dd>Lorsqu'il vaut <code>true</code>, le script au dessus est un <em>accent</em>, qui est affiché plus près de la base.<br>
 Lorsqu'il vaut <code>false</code> (valeur par défaut), le script au dessus est une <em>limite</em> au dessus de la base.</dd>
 <dt>accentunder</dt>
 <dd>Lorsqu'il vaut <code>true</code>, le script en dessous est un <em>accent</em>, qui est affiché plus près de la base.<br>
 Lorsqu'il vaut <code>false</code> (valeur par défaut), le script en dessous est une <em>limite</em> en dessous de la base.</dd>
 <dt>align {{deprecated_inline}}</dt>
 <dd>L'alignment des scripts en dessous et au dessus. Les valeurs possibles sont: <code>left</code>, <code>center</code>, et <code>right</code>.</dd>
 <dt>class, id, style</dt>
 <dd>Afin d'être utilisés avec les <a href="/fr/docs/CSS">feuilles de styles</a>.</dd>
 <dt>href</dt>
 <dd>Un hyperlien pointant vers un URI donné.</dd>
 <dt>mathbackground</dt>
 <dd>La couleur de fond. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
 <dt>mathcolor</dt>
 <dd>La couleur du texte. Il est possible d'utiliser les codes au format <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s">noms de couleurs HTML</a>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Exemple de rendu: <img alt="integral-0-infinity" src="munderover.png"></p>

<pre class="brush: html">&lt;math displaystyle="true"&gt;

  &lt;munderover &gt;
    &lt;mo&gt; &amp;#x222B; &lt;!--INTEGRAL--&gt; &lt;/mo&gt;
    &lt;mn&gt; 0 &lt;/mn&gt;
    &lt;mi&gt; &amp;#x221E; &lt;!--INFINITY--&gt; &lt;/mi&gt;
  &lt;/munderover&gt;

&lt;/math&gt;
</pre>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('MathML3', 'chapter3.html#presm.munderover', 'munderover') }}</td>
   <td>{{ Spec2('MathML3') }}</td>
   <td>Current specification</td>
  </tr>
  <tr>
   <td>{{ SpecName('MathML2', 'chapter3.html#presm.munderover', 'munderover') }}</td>
   <td>{{ Spec2('MathML2') }}</td>
   <td>Initial specification</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("mathml.elements.munderover")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ MathMLElement("munder") }} (Underscript)</li>
 <li>{{ MathMLElement("mover") }} (Overscript)</li>
</ul>
