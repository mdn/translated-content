---
title: border-end-end-radius
slug: Web/CSS/border-end-end-radius
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-end-end-radius
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>border-end-end-radius</code></strong> définit le rayon de courbure de la bordure pour un angle d'un élément. Cette propriété logique correspond à une propriété physique de rayon de bordure selon la directionalité du texte et le mode d'écriture. Autrement dit, cette propriété concerne un angle différent selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.</p>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt; */
/* Avec une valeur, le coin sera circulaire */
border-end-end-radius: 10px;
border-end-end-radius: 1em;

/* Avec deux valeurs, le coin sera une ellipse */
border-end-end-radius: 1em 2em;

/* Valeurs globales */
border-end-end-radius: inherit;
border-end-end-radius: initial;
border-end-end-radius: unset;
</pre>

<p>Ainsi, avec un mode d'écriture <code>horizontal-tb</code>, cette propriété logique correspondra à la propriété physique {{CSSxRef("border-bottom-right-radius")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>Cette valeur exprime le rayon de courbure ou les demi-axes d'une ellipse. Pour les valeurs qui expriment une longueur, on peut utiliser n'importe quelle valeur du type de donnée {{cssxref("&lt;length&gt;")}}. Les pourcentages sur l'axe horizontal sont relatifs à la largeur de la boîte et à la hauteur de la boîte pour l'axe vertical. Les valeurs négatives sont invalides.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{CSSSyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: rebeccapurple;
  width: 120px;
  height: 120px;
  border-end-end-radius: 10px;
}

.texteExemple {
  writing-mode: vertical-rl;
  padding: 10px;
  background-color: #fff;
  border-end-end-radius: 10px;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="texteExemple"&gt;Exemple&lt;/p&gt;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-end-end-radius", "border-end-end-radius")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{CSSInfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-end-end-radius")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La propriété physique correspondante : {{CSSxRef("border-bottom-right-radius")}}</li>
 <li>{{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}</li>
</ul>
