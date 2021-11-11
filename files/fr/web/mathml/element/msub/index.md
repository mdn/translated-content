---
title: <msub>
slug: Web/MathML/Element/msub
translation_of: Web/MathML/Element/msub
---
<div>{{MathMLRef}}</div>

<p>L'élément MathML <code>&lt;msub&gt;</code> est utilisé pour attaché un indice à une expression. On utilise la syntaxe suivante: <code>&lt;msub&gt; base indice &lt;/msub&gt;</code>.</p>

<h2 id="Attributes">Attributes</h2>

<dl>
 <dt>class, id, style</dt>
 <dd>Fournit pour être utilisé avec <a href="/fr/docs/CSS">stylesheets</a>.</dd>
 <dt>href</dt>
 <dd>Utilisé pour ajouter un hyperlien vers une URI.</dd>
 <dt>mathbackground</dt>
 <dd>La couleur d'arrière plan. Vous pouvez utiliser <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/Web/CSS/Type_color#Les_mots-cl%C3%A9s">noms de couleurs HTML</a>.</dd>
 <dt>mathcolor</dt>
 <dd>La couleur du texte. Vous pouvez utiliser <code>#rgb</code>, <code>#rrggbb</code> et les <a href="/fr/docs/Web/CSS/Type_color#Les_mots-cl%C3%A9s">noms de couleurs HTML</a>.</dd>
 <dt>subscriptshift</dt>
 <dd>The minimum space by which to shift the subscript below the baseline of the expression, as a <a href="/fr/docs/MathML/Attributes/Values#Lengths">length value</a>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>Image fixe: <img alt="x1" src="msub.png"></p>

<p>Rendu dans votre navigateur: <math> <msub> <mi>X</mi> <mn>1</mn> </msub> </math></p>

<pre class="brush: html">&lt;math&gt;

  &lt;msub&gt;
    &lt;mi&gt;X&lt;/mi&gt;
    &lt;mn&gt;1&lt;/mn&gt;
  &lt;/msub&gt;

&lt;/math&gt;
</pre>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{ SpecName('MathML3', 'chapter3.html#presm.msub', 'msub') }}</td>
   <td>{{ Spec2('MathML3') }}</td>
   <td>Spécification actuelle</td>
  </tr>
  <tr>
   <td>{{ SpecName('MathML2', 'chapter3.html#presm.msub', 'msub') }}</td>
   <td>{{ Spec2('MathML2') }}</td>
   <td>Spéficication initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("mathml.elements.msub")}}</p>

<h2 id="Notes_spécifiques_à_Gecko">Notes spécifiques à Gecko</h2>

<ul>
 <li>À partir de Gecko 26.0 {{geckoRelease("26")}} il ne sera bientôt plus possible d'utiliser <code>&lt;none/&gt;</code> comme un élément enfant. The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msup")}} and {{MathMLElement("mmultiscripts")}} and a bug with an incorrect application <code>of the </code><code>superscriptshift</code> attribute has been fixed (see {{bug("827713")}} for details).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{ MathMLElement("msup") }} (Superscript)</li>
 <li>{{ MathMLElement("msubsup") }} (Subscript-superscript pair)</li>
 <li>{{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)</li>
</ul>
