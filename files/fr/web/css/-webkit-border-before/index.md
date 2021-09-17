---
title: '-webkit-border-before'
slug: Web/CSS/-webkit-border-before
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-border-before
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>-webkit-border-before</code></strong> est une propriété raccourcie qui permet de définir les propriétés de la bordure pour le début d'un élément dans l'axe de bloc (l'axe logique orthogonal à l'axe de lecture).</p>

<pre class="brush:css no-line-numbers">/* Valeurs décrivant une bordure */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Valeurs globales */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
</pre>

<p><code>-webkit-border-before</code> peut ainsi être utilisée pour définir les valeurs d'une ou plusieurs de ces propriétés : {{cssxref("-webkit-border-before-width")}}, {{cssxref("-webkit-border-before-style")}}, et {{cssxref("-webkit-border-before-color")}}. Cette propriété est une propriété logique qui correspond à une propriété physique selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}ou {{cssxref("border-left")}} selon les valeurs définies pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<p>Cette propriété est à mettre en relation avec les propriétés {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, et {{cssxref("-webkit-border-end")}} qui définissent les autres bordures de l'élément.</p>

<p>L'équivalent standard de cette propriété est la propriété non-préfixée {{cssxref("border-block-start")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<p>Une ou plusieurs valeurs parmi les suivantes, dans n'importe quel ordre :</p>

<dl>
 <dt><code>&lt;border-width&gt;</code></dt>
 <dd>Voir {{cssxref("border-width")}}.</dd>
 <dt><code>&lt;border-style&gt;</code></dt>
 <dd>Voir {{cssxref("border-style")}}.</dd>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Voir {{cssxref("color")}}.</dd>
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
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="texteExemple"&gt;Texte pour l'exemple&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 140, 140)}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Toutefois, on peut la rapprocher de la propriété standard {{cssxref("border-block-start")}}.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-webkit-border-before")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("border-block-start")}}</li>
 <li>Les propriétés physiques correspondantes :
  <ul>
   <li>{{cssxref("border-top")}}</li>
   <li>{{cssxref("border-right")}}</li>
   <li>{{cssxref("border-bottom")}}</li>
   <li>{{cssxref("border-left")}}</li>
  </ul>
 </li>
 <li>Les propriétés qui déterminent les propriétés logiques par rapport aux propriétés physiques
  <ul>
   <li>{{cssxref("writing-mode")}}</li>
   <li>{{cssxref("direction")}}</li>
   <li>{{cssxref("text-orientation")}}</li>
  </ul>
 </li>
</ul>
