---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-padding-left
---
<div>{{CSSRef}}</div>

<p>La propriété <code><strong>scroll-padding-left</strong></code> est une propriété qui permet de définir le remplissage sur le côté gauche entre l'élément et la zone de défilement.</p>

<p>Les propriétés pour le remplissage de la zone de défilement permettent de définir des décalages par rapport à la zone de défilement de l'élément (<em>scrollport</em>). On peut ainsi éviter à un élément d'être affiché là où d'autres barres sont présentes ou encore donner plus d'espace entre un élément et les barres de défilement pour y naviguer.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Valeurs avec un mot-clé */
scroll-padding-left: auto;

/* Valeurs de longueur */
/* Type &lt;length&gt; */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Valeurs globales */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>Un décalage intérieur entre la boîte de défilement et le bord correspondant de l'élément. C'est une longueur ou un pourcentage valide.</dd>
 <dt><code>auto</code></dt>
 <dd>Le décalage est déterminé par l'agent utilisateur. Cette valeur correspond généralement à <code>0px</code> mais le navigateur peut utiliser une heuristique et déterminer si une valeur non nulle est préférable au regard du contexte dans lequel se trouve l'élément.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

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
   <td>{{SpecName("CSS Scroll Snap Points", "#propdef-scroll-padding-left", "scroll-padding-left")}}</td>
   <td>{{Spec2("CSS Scroll Snap Points")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.scroll-padding-left")}}</p>
