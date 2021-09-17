---
title: inset-block-end
slug: Web/CSS/inset-block-end
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/inset-block-end
original_slug: inset-block-end
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>inset-block-end</code></strong> définit la fin du décalage logique en bloc (<em>block</em>) d'un élément, selon le mode d'écriture, la directionnalité et l'orientation. Elle correspond à une des propriétés parmi {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} ou  {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<div class="note">
<p><strong>Note :</strong> Avant Firefox 63, cette propriété était implémentée avec le nom <code>offset-block-end</code>. Firefox 63 a mis à jour le nom de la propriété afin de s'accorder avec les modifications apportées à la spécification.</p>
</div>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
inset-block-end: 3px;
inset-block-end: 2.4em;

/* Valeurs relatives à la largeur */
/* du bloc englobant              */
/* Type &lt;percentage&gt;              */
inset-block-end: 10%;

/* Valeurs avec un mot-clé */
inset-block-end: auto;

/* Valeurs globales */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: unset;
</pre>

<p>Elle est liée aux propriétés {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}} et {{cssxref("inset-inline-start")}} qui permettent de définir les autres décalages de l'élément.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<p>La propriété <code>inset-block-end</code> peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.</p>

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
  inset-block-end: 20px;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-inset-block-end", "inset-block-end")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.inset-block-end")}}</p>

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
 <li>Les autres propriétés qui définissent les décalages logiques
  <ul>
   <li>{{cssxref("inset-block-start")}}</li>
   <li>{{cssxref("inset-inline-start")}}</li>
   <li>{{cssxref("inset-inline-end")}}</li>
  </ul>
 </li>
 <li>{{cssxref("writing-mode")}}</li>
 <li>{{cssxref("direction")}}</li>
 <li>{{cssxref("text-orientation")}}</li>
</ul>
