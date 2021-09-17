---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/max-height
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>max-height</code></strong> est utilisée pour définir la hauteur maximale d'un élément donné. Elle empêche la valeur de la propriété {{cssxref("height")}} de devenir supérieure à la valeur spécifiée par <code>max-height</code> (autrement dit, <code>max-height</code> est une borne supérieure pour <code>height</code>).</p>

<div>{{EmbedInteractiveExample("pages/css/max-height.html")}}</div>

<p>La valeur de <code>max-height</code> surcharge la valeur de {{cssxref("height")}} mais elle est surchargée par {{cssxref("min-height")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur de longueur */
/* Type &lt;length&gt;      */
max-height: 3.5em;

/* Valeurs relatives */
/* Type &lt;percentage&gt; */
max-height: 10%;

/* Valeurs avec un mot-clé */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* Valeurs globales */
max-height: inherit;
max-height: initial;
max-height: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>La hauteur maximale fixée, exprimée comme une valeur absolue. Voir {{cssxref("&lt;length&gt;")}} pour les unités qu'on peut utiliser.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>La hauteur maximale fixée, exprimée comme un fraction de la hauteur du bloc englobant. Voir la page {{cssxref("&lt;percentage&gt;")}} sur les valeurs possibles avec ce type.</dd>
 <dt><code>none</code></dt>
 <dd>Il n'y pas de limite à la hauteur que peut prendre la boîte.</dd>
 <dt><code>max-content</code> {{experimental_inline}}</dt>
 <dd>La hauteur intrinsèque préférée.</dd>
 <dt><code>min-content</code> {{experimental_inline}}</dt>
 <dd>La hauteur intrinsèque minimale.</dd>
 <dt><code>fill-available</code>{{experimental_inline}}</dt>
 <dd>La hauteur du bloc englobant moins la marge verticale, la bordure et le remplissage (<em>padding</em>). Certains navigateurs implémentent cette valeur avec un ancien nom : <code>available</code>.</dd>
 <dt><code>fit-content</code> {{experimental_inline}}</dt>
 <dd>Un synonyme pour <code>max-content</code>.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt; Lorem ipsum tralala sit amet, consectetur adipisicing
  &lt;p&gt;
     Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  &lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  height: 250px;
  border: solid 1px red;
}

p {
  max-height: 30%;
  border: solid 1px blue;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100%")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Veiller à s'assurer que les éléments ciblés avec une règle utilisant <code>max-height</code> ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.</p>

<ul>
 <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">Comprendre les règles WCAG 1.4</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html" rel="noopener"><em>Understanding Success Criterion 1.4.4, W3C Understanding WCAG 2.0</em> (en anglais)</a></li>
</ul>

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
   <td>{{SpecName('CSS3 Sizing', '#height-height-keywords', 'max-height')}}</td>
   <td>{{Spec2('CSS3 Sizing')}}</td>
   <td>Ajout des mots-clés <code>max-content</code>, <code>min-content</code>, <code>fit-content</code> et <code>fill-available</code>. Les deux brouillons de spécification CSS3 Box et CSS3 Writing Modes définissaient ces mots-clés mais ces spécifications ont été remplacées par celles-ci.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Transitions', '#animatable-css', 'max-height')}}</td>
   <td>{{Spec2('CSS3 Transitions')}}</td>
   <td><code>max-height</code> peut désormais être animée.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visudet.html#min-max-heights', 'max-height')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.max-height")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("height")}}</li>
 <li>{{cssxref("min-height")}}</li>
 <li>{{cssxref("box-sizing")}}</li>
 <li><a href="/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte" title="en/CSS/box_model">Le modèle de boîtes</a></li>
</ul>
