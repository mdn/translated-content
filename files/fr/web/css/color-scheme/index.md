---
title: color-scheme
slug: Web/CSS/color-scheme
browser-compat: css.properties.color-scheme
translation_of: Web/CSS/color-scheme
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>color-scheme</code></strong> permet d'indiquer les jeux de couleurs dans lesquels un élément peut être rendu sans risque.</p>
<p>Les jeux de couleurs communément utilisés par les systèmes d'exploitation sont <i>light</i> (clair) et <i>dark</i> (sombre), ou <i>day mode</i> (mode jour) et <i>night mode</i> (mode nuit). Lorsqu'un utilisateur sélectionne un de ces jeux de couleurs, le système d'exploitation fait des ajustements à l'interface utilisateur. Cela comprend les contrôles de formulaires, les barres de défilement et les valeurs utilisées par le système de couleurs CSS.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: css">color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* Valeurs globales */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: unset;</pre>

<p>La valeur de la propriété <code>color-scheme</code> doit être un des mots-clés suivants.</p>

<h3 id="Values">Valeurs</h3>

<dl>
  <dt><code>normal</code></dt>
  <dd>Indique que l'élément ne tient pas compte d'un éventuel jeu de couleurs et qu'il devrait être rendu à l'aide du jeu de couleurs par défaut du navigateur.</dd>
  <dt><code>light</code></dt>
  <dd>Indique que l'élément peut être rendu en utilisant le jeu de couleurs claires du système d'exploitation.</dd>
  <dt><code>dark</code></dt>
  <dd>Indique que l'élément peut être rendu en utilisant le jeu de couleurs sombres du système d'exploitation.</dd>
</dl>

<h2 id="Formal_definition">Définition formelle</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Syntaxe formelle</h2>

<p>{{csssyntax}}</p>

<h2 id="Examples">Exemples</h2>

<h3 id="Adapting_to_color_schemes">Adaptation aux jeux de couleurs</h3>

<p>Pour activer la préférence de jeu de couleurs de l'utilisateur sur l'ensemble de la page, <code>color-scheme</code> peut être déclaré sur l'élément {{cssxref(":root")}}.</p>

<pre class="brush: css">:root {
  color-scheme: light dark;
}
</pre>

<h2 id="Specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/HTML/Applying_color">Appliquer des couleurs aux éléments HTML grâce à CSS</a></li>
  <li>Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}</li>
  <li>{{cssxref("background-image")}}</li>
  <li>{{cssxref("-webkit-print-color-adjust")}}</li>
</ul>
