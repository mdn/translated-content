---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/inset-inline-end
original_slug: inset-inline-end
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>inset-inline-end</code></strong> définit la fin du décalage logique en ligne (<em>inline</em>) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou  {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<div class="note">
<p><strong>Note :</strong> Avant Firefox 63, cette propriété était implémentée avec le nom <code>offset-inline-end</code>. Firefox 63 a mis à jour son implémentation afin de suivre les modifications apportées à la spécification.</p>
</div>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type &lt;percentage&gt;              */
inset-inline-end: 10%;

/* Valeurs avec un mot-clé */
inset-inline-end: auto;

/* Valeurs globales */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: unset;
</pre>

<p>Elle est liée aux propriétés {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} et {{cssxref("inset-inline-start")}} qui permettent de définir les autres décalages de l'élément.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<p>La propriété <code>inset-inline-end</code> peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.</p>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exemple"&gt;Texte pour l'exemple&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  position: relative;
  inset-inline-end: 20px;
  background-color: #c8c800;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 140, 140)}}</p>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-inset-inline-end", "inset-inline-end")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.inset-inline-end")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés physiques correspondantes :
  <ul>
   <li>{{cssxref("top")}}</li>
   <li>{{cssxref("right")}}</li>
   <li>{{cssxref("bottom")}}</li>
   <li>{{cssxref("left")}}</li>
  </ul>
 </li>
 <li>{{cssxref("writing-mode")}}</li>
 <li>{{cssxref("direction")}}</li>
 <li>{{cssxref("text-orientation")}}</li>
 <li>Les propriétés qui définissent les autres décalages :
  <ul>
   <li>{{cssxref("inset-block-start")}},</li>
   <li>{{cssxref("inset-block-end")}},</li>
   <li>{{cssxref("inset-inline-start")}}</li>
  </ul>
 </li>
</ul>
