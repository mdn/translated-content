---
title: min-inline-size
slug: Web/CSS/min-inline-size
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/min-inline-size
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>min-inline-size</code></strong> définit la taille minimale horizontale ou verticale d'un élément en ligne (<em>inline</em>) selon le mode d'écriture utilisé. Cette propriété « logique » correspond à la propriété {{cssxref("min-width")}} ou {{cssxref("min-height")}} selon la valeur utilisée pour {{cssxref("writing-mode")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/min-inline-size.html")}}</div>

<p>Si le mode d'écriture est orienté verticalement, <code>min-inline-size</code> fait référence à la hauteur minimale de l'élément. Sinon, elle fait référence à la largeur minimale de l'élément.  to the minimal height of the element, otherwise it relates to the minimal width of the element. La propriété {{cssxref("min-block-size")}} peut être utilisée pour les blocs.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
min-inline-size: 100px;
min-inline-size: 5em;

/* Valeurs proportionnelles à la */
/* largeur du bloc englobant     */
/* Type &lt;percentage&gt;             */
min-inline-size: 10%;

/* Valeurs avec un mot-clé */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fill-available;

/* Valeurs globales */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<p>La propriété <code>min-inline-size</code> peut prendre les mêmes valeurs que les propriétés {{cssxref("min-width")}} ou {{cssxref("min-height")}}.</p>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;Texte d'exemple&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-min-inline-size", "min-inline-size")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.min-inline-size")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés physiques correspondantes
  <ul>
   <li>{{cssxref("min-width")}}</li>
   <li>{{cssxref("min-height")}}</li>
  </ul>
 </li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>
