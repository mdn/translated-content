---
title: outline-offset
slug: Web/CSS/outline-offset
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/outline-offset
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>outline-offset</code></strong> définit l'espace qu'il y a entre la bordure dessinée par {{cssxref("outline")}} et le bord de <a href="/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte">la boîte de bordure</a> d'un élément. Cet espace est transparent et la couleur visible en arrière-plan sera déterminée par l'élément parent.</p>

<div>{{EmbedInteractiveExample("pages/css/outline-offset.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de longueur */
/* Type &lt;length&gt;       */
outline-offset: 3px;
outline-offset: 0.2em;

/* Valeurs globales */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>La largeur de l'espace, voir la page {{cssxref("&lt;length&gt;")}} pour plus d'informations. Les valeurs négatives sont utilisées et font que la bordure dessinée est dessinée dans l'élément.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  outline: 1px dashed red;
  /* On décale la ligne de 10px */
  outline-offset: 10px;
  background: yellow;
  margin: 15px;
  border: 1px solid black;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;La bordure est décalée&lt;p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

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
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'outline-offset')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>outline-offset</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#outline-offset', 'outline-offset')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.outline-offset")}}</p>
