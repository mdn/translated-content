---
title: mask-border-source
slug: Web/CSS/mask-border-source
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-source
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété CSS <strong><code>mask-border-source</code></strong> définit l'image à utiliser pour créer <a href="/fr/docs/Web/CSS/mask-border">le masque de bordure</a> d'un élément.</p>

<p>C'est la propriété {{cssxref("mask-border-slice")}} qui est utilisée afin de découper l'image en tranches/régions ensuite appliquées dynamiquement pour créer le masque final.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur avec un mot-clé */
mask-border-source: none;

/* Valeurs de type &lt;image&gt; */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Aucun masque de bordure n'est utilisé.</dd>
 <dt>{{cssxref("&lt;image&gt;")}}</dt>
 <dd>Une référence vers une image qu'on utilise pour le masque de la bordure.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Voir la page {{cssxref("mask-border")}}.</p>

<h2 id="Specifications">Spécifications</h2>

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
   <td>{{SpecName("CSS Masks", "#propdef-mask-border-source", "mask-border-source")}}</td>
   <td>{{Spec2("CSS Masks")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>TBD</p>
