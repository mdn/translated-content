---
title: mask-border
slug: Web/CSS/mask-border
translation_of: Web/CSS/mask-border
browser-compat: css.properties.mask-border
---
<div>{{cssref}}{{SeeCompatTable}}</div>

<p>La propriété CSS <strong><code>mask-border</code></strong> permet de créer un masque le long de la bordure d'un élément.</p>

<p>Cette propriété est une propriété <a href="/fr/docs/Web/CSS/Shorthand_properties">raccourcie</a> pour les propriétés {{cssxref("mask-border-source")}}, {{cssxref("mask-border-slice")}}, {{cssxref("mask-border-width")}}, {{cssxref("mask-border-outset")}}, {{cssxref("mask-border-repeat")}} et {{cssxref("mask-border-mode")}}. Comme pour l'ensemble des propriétés raccourcies, toutes les propriétés qui ne sont pas explicitement utilisées dans la règle utilisent leur <a href="/fr/docs/Web/CSS/initial_value">valeur initiale</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* source | slice */
mask-border: url('border-mask.png') 25;

/* source | slice | repeat */
mask-border: url('border-mask.png') 25 space;

/* source | slice | width */
mask-border: url('border-mask.png') 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url('border-mask.png') 25 / 35px / 12px space alpha;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;'mask-border-source'&gt;</code></dt>
 <dd>L'image source, pour plus d'informations, voir {{cssxref("mask-border-source")}}.</dd>
 <dt><code>&lt;'mask-border-slice'&gt;</code></dt>
 <dd>Les dimensions qui permettent de découper l'image source en différentes régions. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-slice")}}.</dd>
 <dt><code>&lt;'mask-border-width'&gt;</code></dt>
 <dd>La largeur du masque pour la bordure. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-width")}}.</dd>
 <dt><code>&lt;'mask-border-outset'&gt;</code></dt>
 <dd>La distance entre le masque de la bordure et le bord extérieur de l'image. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-outset")}}.</dd>
 <dt><code>&lt;'mask-border-repeat'&gt;</code></dt>
 <dd>Cette valeur indiique la façon dont les régions du bord de l'image source sont ajustées afin de correspondre aux dimensions du masque. Il est possible d'utiliser jusqu'à deux valeurs. Voir {{cssxref("mask-border-repeat")}}.</dd>
 <dt><code>&lt;'mask-border-mode'&gt;</code></dt>
 <dd>Cette valeur définit si l'image source est traitée comme un masque de luminance ou comme un masque alpha. Voir {{cssxref("mask-border-mode")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Image_matricielle_(bitmap)">Image matricielle (<em>bitmap</em>)</h3>

<p>Dans cet exemple, on utilise un masque en losange. L'image source utilisée est un fichier PNG de 90 pixels de long et de large :</p>

<p><img alt="" src="mask-border-diamonds.png"></p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="bitmap"&gt;
  Cet élément est entouré d'un masque de bordure
  matriciel. C'est pas mal.
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<p>Pour avoir un seul losange, on divise le carré en 3 (avec la valeur <code>30</code>). On utilise la valeur <code>round</code> pour que le masque soit réparti également de part et d'autre.</p>

<pre class="brush: css">div {
  width: 200px;
  background-color: lavender;
  border: 18px solid salmon;
  padding: 10px;

  mask-border:
    url("https://mdn.mozillademos.org/files/15836/mask-border-diamonds.png")  /* source */
    30 /         /* slice */
    36px 18px    /* width */
    round;       /* repeat */
}
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Image_matricielle_(bitmap)")}}</p>

<h2 id="spécifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>