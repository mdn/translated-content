---
title: border-block-width
slug: Web/CSS/border-block-width
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-block-width
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>border-block-width</code></strong> définit la largeur de la bordure sur les côtés d'un élément sur les côtés de l'axe de bloc. Cette propriété logique peut correspondre à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à {{cssxref("border-top-width")}} et {{cssxref("border-bottom-width")}} ou à {{cssxref("border-left-width")}} et {{cssxref("border-right-width")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<pre class="brush:css no-line-numbers">/* Valeurs de type &lt;'border-width'&gt; */
border-block-width: 5px 10px;
border-block-width: 5px;
border-block-width: thick;
</pre>

<p>The border width in the other dimension can be set with {{cssxref("border-inline-width")}}, which sets {{cssxref("border-block-inline-width")}}, and {{cssxref("border-block-inline-width")}}.</p>

<p>{{cssinfo}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeur">Valeur</h3>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>La largeur de la bordure. Voir {{ cssxref("border-width") }}.</dd>
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

.texteExemple {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-block-width: 5px 10px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="texteExemple"&gt;Texte d'exemple&lt;/p&gt;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-block-width", "border-block-width")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-block-width")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés physiques qui peuvent correspondre à cette propriété logique {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
