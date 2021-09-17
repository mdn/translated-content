---
title: path()
slug: Web/CSS/path()
translation_of: 'Web/CSS/path()'
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/CSS_Functions">fonction</a> <a href="/fr/docs/Web/CSS">CSS</a> <code><strong>path()</strong></code> accepte comme paramètre une chaîne représentant un tracé SVG. Elle est utilisée dans les formes CSS et les animations de tracés CSS pour permettre de dessiner une forme.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: css">path( [[&lt;'fill-rule'&gt;,]?&lt;string&gt;)</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
 <dt><code>&lt;'fill-rule'&gt;</code></dt>
 <dd>La règle de remplissage de l'intérieur du tracé. Les valeurs possibles sont <code>nonzero</code> ou <code>evenodd</code>. La valeur par défaut est <code>nonzero</code>. Voir <a href="/fr/docs/Web/SVG/Attribute/fill-rule">fill-rule</a> pour plus de détails.</dd>
 <dt><code>&lt;string&gt;</code></dt>
 <dd>Doit être une <a href="/fr/docs/Web/SVG/Element/path">chaîne représentant les données d'un chemin SVG</a>.</dd>
</dl>

<h2 id="examples">Exemples</h2>

<h3 id="examples_of_correct_values_for_path">Exemples de valeurs correctes pour path()</h3>

<pre class="brush: css">path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
</pre>

<h3 id="use_in_offset_path">Utilisation en tant que valeur de offset-path</h3>

<p>La fonction <code>path()</code> est utilisée pour créer un tracé à suivre pour l'élément. La modification de l'une de ces valeurs conduira celui-ci à ne pas pouvoir suivre le tracé de façon nette lors de l'animation.</p>

<p>{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}</p>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
     <th scope="col">Spécification</th>
     <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('CSS Shapes', '#funcdef-path', 'path()')}}</td>
      <td>{{Spec2('CSS Shapes')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>{{cssxref("&lt;shape-outside&gt;")}}</li>
  <li><a href="/fr/docs/Web/CSS/CSS_Shapes">Formes CSS</a></li>
  <li><a href="/fr/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes">Vue d'ensemble des formes CSS</a></li>
  <li><a href="https://css-tricks.com/svg-path-syntax-illustrated-guide/"><i lang="en">SVG Path Syntax Illustrated Guide</i> (en anglais)</a></li>
</ul>
