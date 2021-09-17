---
title: transform-box
slug: Web/CSS/transform-box
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-box
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>transform-box</code></strong> définit la boîte à laquelle les propriétés {{cssxref("transform")}} et {{cssxref("transform-origin")}} font référence.</p>

<pre class="brush:css no-line-numbers">/* Avec un mot-clé */
transform-box: border-box;
transform-box: fill-box;
transform-box: view-box;

/* Valeurs globales */
transform-box: inherit;
transform-box: initial;
transform-box: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>transform-box</code> est définie grâce à l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>border-box</code></dt>
 <dd>La boîte de bordure (<em>border</em>) est utilisée comme boîte de référence. La boîte de référence d'un tableau est la boîte de bordure englobante (celle qui inclue les éventuelles légendes ou titres rattachés au tableau) et non uniquement celle autour du tableau.</dd>
 <dt><code>fill-box</code></dt>
 <dd>La boîte liée à l'objet est utilisée comme boîte de référence.</dd>
 <dt><code>view-box</code></dt>
 <dd>Le plus proche <em>viewport</em> {{Glossary("SVG")}} est utilisé comme boîte de référence. Si l'attribut {{SVGAttr("viewBox")}} est défini pour le <em>viewport</em> de l'élément, la boîte de référence est positionnée à l'origine du système de coordonnées défini par l'attribut <code>viewBox</code> et les dimensions de la boîte de référence sont définies avec les valeurs de hauteur et largeur de l'attribut <code>viewBox</code>.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="premier"&gt;"I saw Mr. Hyde"&lt;/p&gt;

&lt;p class="deuxieme"&gt;"Quite right, Mr. Utterson"&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  transform: rotate(90deg);
  transform-origin: bottom left;
  transform-box: border-box;
}

.premier {
   border: 3px black solid;
}

.deuxieme {
  border: 3px black solid;
  padding: 3em;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple","100%","300")}}</p>

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
   <td>{{SpecName('CSS3 Transforms', '#transform-box', 'transform-box')}}</td>
   <td>{{Spec2('CSS3 Transforms')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.transform-box")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS">Utiliser les transformations CSS</a></li>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("transform-origin")}}</li>
</ul>
