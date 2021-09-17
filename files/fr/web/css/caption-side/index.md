---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/caption-side
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>caption-side</code></strong> permet de choisir l'emplacement de la légende d'un tableau (représentée par l'élément {{HTMLElement("caption")}} du tableau). Les valeurs sont relatives au mode d'écriture (cf. {{cssxref("writing-mode")}}) du tableau.</p>

<div>{{EmbedInteractiveExample("pages/css/caption-side.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
/* Valeurs directionnelles */
caption-side: top;
caption-side: bottom;

/* Valeurs non-standards */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;


/* Valeur globales */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>top</code></dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée au-dessus du tableau.</dd>
 <dt><code>bottom</code></dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée en-dessous du tableau.</dd>
 <dt><code>left</code> {{non-standard_inline}}</dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée à gauche du tableau.<br>
 {{Note("Cette valeur a été proposée pour CSS 2, mais fut retirée avec la spécification CSS 2.1. Elle est non-standard.")}}</dd>
 <dt><code>right</code> {{non-standard_inline}}</dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée à droite du tableau.<br>
 {{Note("Cette valeur a été proposée pour CSS 2, mais fut retirée avec la spécification CSS 2.1. Elle est non-standard.")}}</dd>
 <dt><code>top-outside</code> {{non-standard_inline}}</dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée au-dessus du tableau sans que la largeur ou l'alignement horizontal soient liées à la disposition horizontale du tableau.<br>
 {{Note("La spécification CSS 2.1 note que la spécification CSS 2 a défini un autre comportement pour la valeur <code>top</code>, réintroduit avec cette valeur dans une future spécification.")}}</dd>
 <dt><code>bottom-outside</code> {{non-standard_inline}}</dt>
 <dd>Un mot-clé qui indique que la boîte de la légende doit être positionnée en-dessous du tableau sans que la largeur ou l'alignement horizontal soient liées à la disposition horizontale du tableau.<br>
 {{Note("La spécification CSS 2.1 note que la spécification CSS 2 a défini un autre comportement pour la valeur <code>bottom</code>, réintroduit avec cette valeur dans une future spécification.")}}</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">caption {
  caption-side: bottom;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table&gt;
  &lt;caption&gt;Une légende&lt;/caption&gt;
  &lt;tr&gt;
    &lt;td&gt;Des données d'un tableau&lt;/td&gt;
    &lt;td&gt;Pfiou encore des données&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","300","300")}}</p>

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
   <td>{{SpecName('CSS Logical Properties', '#caption-side', 'caption-side')}}</td>
   <td>{{Spec2('CSS Logical Properties')}}</td>
   <td>Les valeurs <code>top</code> et <code>bottom</code> sont désormais définies comme relatives à la valeur de <code>writing-mode</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'tables.html#caption-position', 'caption-side')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.caption-side")}}</p>
