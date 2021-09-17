---
title: border-inline-start
slug: Web/CSS/border-inline-start
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-inline-start
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété<strong> <code>border-inline-start</code></strong> est une propriété raccourcie qui permet de définir la bordure d'un élément pour le côté correspondant au début de l'élément dans le sens de lecture. Elle peut être utilisée pour définir les valeurs de {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}} et {{cssxref("border-inline-start-color")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-start.html")}}</div>

<p>Cette propriété logique correspond à l'une des propriété physique équivalente selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} ou {{cssxref("border-left")}} selon les valeurs utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<p>On peut rapprocher cette propriété des autres propriétés logiques raccourcies définissant les bordures des autres côtés :</p>

<ul>
 <li>{{cssxref("border-block-start")}},</li>
 <li>{{cssxref("border-block-end")}},</li>
 <li>{{cssxref("border-inline-end")}}.</li>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<p>Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre :</p>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>La largeur de la bordure, voir {{cssxref("border-width")}}.</dd>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>Le style utilisé pour la ligne de la bordure sur ce côté, voir {{cssxref("border-style")}}.</dd>
 <dt><code>&lt;'color'&gt;</code></dt>
 <dd>La couleur utilisé pour la bordure sur ce côté, voir {{cssxref("color")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-rl;
  border-inline-start: 5px dashed blue;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exemple"&gt;Texte d'exemple&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 140, 140)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-start", "border-inline-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-inline-start")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés physiques correspondantes :
  <ul>
   <li>{{cssxref("border-top")}},</li>
   <li>{{cssxref("border-right")}},</li>
   <li>{{cssxref("border-bottom")}},</li>
   <li>{{cssxref("border-left")}}</li>
  </ul>
 </li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
