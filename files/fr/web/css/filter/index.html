---
title: filter
slug: Web/CSS/filter
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/filter
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>filter</code></strong> permet d'appliquer des filtres et d'obtenir des effets graphiques de flou, de saturation, etc. Les filtres sont généralement utilisés pour ajuster le rendu d'une image, d'un arrière-plan ou des bordures.</p>

<p>Plusieurs fonctions sont inclues dans le standard CSS et permettent d'obtenir des effets prédéfinis. Il est également possible d'utiliser un filtre SVG via une URL référençant <a href="/fr/docs/Web/SVG/Element/filter">un élément SVG <code>filter</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/css/filter.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css">/* URL vers un filtre SVG */
filter: url("filters.svg#filter-id");

/* Fonctions de filtre */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* On applique plusieurs filtres */
filter: contrast(175%) brightness(3%);

/* On utilise aucun filtre */
filter: none;

/* Valeurs globales */
filter: inherit;
filter: initial;
filter: unset;
</pre>

<p>Avec une fonction, on utilisera la forme suivante :</p>

<pre class="syntaxbox">filter: &lt;filter-function&gt; [&lt;filter-function&gt;]* | none
</pre>

<p>En utilisant un élément SVG {{SVGElement("filter")}}, on utilisera la forme suivante :</p>

<pre class="syntaxbox">filter: url(file.svg#filter-element-id)
</pre>

<h3 id="Interpolation">Interpolation</h3>

<p>Si les deux filtres possèdent chacun une liste de même longueur (sans {{cssxref("&lt;url&gt;")}}, chacune des fonctions est interpolée selon ses propres règles. Si les deux listes ont des longueurs différentes, les derniers filtres de la liste la plus longue sont utilisés avec leurs valeurs par défaut afin de compléter la liste la plus courte, ensuite chaque fonction est interpolée selon ses propres règles. Si un filtre vaut <code>none</code>, il est remplacé avec la fonction de filtre (avec ses valeurs par défaut) de l'autre liste puis l'ensemble des fonctions est interpolé selon les règles de chacune. Dans les autres cas, on utilise un interpolation discrète.</p>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Voici un rapide exemple de filtre fonctionnel. Chaque fonction est illustrée en détail par la suite.</p>

<pre class="brush: css">.mydiv { filter: grayscale(50%) }

/* on applique un niveau de gris à 50% */
/* et un flou dont le rayon vaut 10px  */
img {
  filter: grayscale(0.5) blur(10px);
}</pre>

<p>Voici un rapide exemple de filtre utilisant une ressource SVG :</p>

<pre class="brush: css">.target { filter: url(#c1); }

.mydiv { filter: url(commonfilters.xml#large-blur) }
</pre>

<h2 id="Fonctions_prédéfinies">Fonctions prédéfinies</h2>

<p>Pour utiliser la propriété CSS <code>filter</code>, on utilisera <code>none</code> ou une ou plusieurs des fonctions listées ci-après avec, pour chacune, un argument. Si la valeur est invalide, la fonction renverra <code>none</code>. Sauf mention contraire, les fonctions qui acceptent des valeurs exprimées en pourcentages (34%) acceptent également des valeurs décimales (0.34).</p>

<h3 id="url"><code>url()</code></h3>

<p>La fonction <code>url()</code> prend comme argument l'emplacement d'un fichier XML qui définit le filtre SVG à appliquer. L'URL peut faire référence à une ancre d'un élément spécifique.</p>

<pre class="brush: css">filter: url(resources.svg#c1)
</pre>

<h3 id="blur"><code>blur()</code></h3>

<p>Cette fonction applique un flou gaussien à l'image d'entrée. La valeur du paramètre correspond au rayon de flou (l'écart-type de la gaussienne) utilisé. Plus la valeur est importante, plus le flou sera prononcé. La valeur par défaut du paramètre est 0. Selon la spécification, le paramètre est une valeur de type {{cssxref("&lt;length&gt;")}} mais la fonction n'accepte pas de valeurs exprimées en pourcentages.</p>

<pre class="brush: css">filter: blur(5px)
</pre>

<pre class="brush: html hidden">  &lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form.jpg" id="img1" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form.jpg" id="img2" src="/files/3710/Test_Form_2.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg id="img3" viewbox="0 0 233 176"&gt;
  &lt;filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%" &gt;
    &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5" /&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3710/Test_Form_2.jpeg" filter="url(#svgBlur)" x="5%" y="5%" width="212px" height="161px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_s.jpg" id="img4" src="/files/3711/Test_Form_2_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande", "Lucida Sans Unicode", "DejaVu Sans", Lucida, Arial, Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -webkit-filter:blur(5px);
  -ms-filter:blur(5px);
  filter:blur(5px); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 0 1.286em;
  height: 100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<pre class="brush: svg">&lt;svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%"&gt;
    &lt;feGaussianBlur in="SourceGraphic" stdDeviation="5"/&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('blur','100%','236px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/blur()", "blur()")}} pour plus d'informations.</p>
</div>

<h3 id="brightness"><code>brightness()</code></h3>

<p>La fonction permet de modifier la luminosité d'une image grâce à un facteur linéaire. Un argument égal <code>0%</code> créera une image totalement noire et une valeur de <code>100%</code> conservera l'image d'entrée telle quelle. Il est possible d'utiliser des valeurs supérieures à <code>100%</code> afin d'obtenir des images saturées en luminosité. La valeur par défaut pour l'argument est <code>1</code>.</p>

<pre class="brush: css">filter: brightness(0.5)</pre>

<pre class="brush: svg">&lt;svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg"&gt;
 &lt;filter id="brightness"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncR type="linear" slope="[amount]"/&gt;
        &lt;feFuncG type="linear" slope="[amount]"/&gt;
        &lt;feFuncB type="linear" slope="[amount]"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form.jpg" id="img1" src="/files/3708/Test_Form.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form.jpg" id="img2" src="/files/3708/Test_Form.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 286 217"&gt;
 &lt;filter id="brightness"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncR type="linear" slope="2"/&gt;
        &lt;feFuncG type="linear" slope="2"/&gt;
        &lt;feFuncB type="linear" slope="2"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3708/Test_Form.jpg" filter="url(#brightness)" width="286px" height="217px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_s.jpg" id="img4" src="/files/3709/Test_Form_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:brightness(2);
  -webkit-filter:brightness(2);
  -o-filter:brightness(2);
  -ms-filter:brightness(2);
  filter:brightness(2); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  height:100%;
  width: 85%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('brightness','100%','231px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/brightness()", "brightness()")}} pour plus d'informations.</p>
</div>

<h3 id="contrast"><code>contrast()</code></h3>

<p>Cette fonction permet d'ajuster le contraste de l'image d'entrée. Une valeur de <code>0%</code> créera une image entièrement grise. Une valeur de <code>100%</code> conservera l'image d'entrée telle quelle. Il est possible d'utiliser des valeurs supérieures à 100% pour augmenter le contraste. La valeur par défaut de l'argument est <code>1</code>.</p>

<pre class="brush: css">filter: contrast(200%)
</pre>

<pre class="brush: svg">&lt;svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="contrast"&gt;
    &lt;feComponentTransfer&gt;
      &lt;feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
      &lt;feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
      &lt;feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_3.jpeg" id="img1" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_3.jpg" id="img2" src="/files/3712/Test_Form_3.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 240 151"&gt;
 &lt;filter id="contrast"&gt;
    &lt;feComponentTransfer&gt;
      &lt;feFuncR type="linear" slope="2" intercept="-0.5"/&gt;
      &lt;feFuncG type="linear" slope="2" intercept="-0.5"/&gt;
      &lt;feFuncB type="linear" slope="2" intercept="-0.5"/&gt;
    &lt;/feComponentTransfer&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3712/Test_Form_3.jpeg" filter="url(#contrast)" width="240px" height="151px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_s.jpg" id="img4" src="/files/3713/Test_Form_3_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:contrast(200%);
  -webkit-filter:contrast(200%);
  -o-filter:contrast(200%);
  -ms-filter:contrast(200%);
  filter:contrast(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('contrast','100%','203px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/contrast()", "contrast()")}} pour plus d'informations.</p>
</div>

<h3 id="drop-shadow"><code>drop-shadow()</code></h3>

<p>Cette fonction permet d'appliquer une ombre portée à l'image d'entrée. Une ombre portée est une version décalée, dans une couleur donnée, du canal alpha de l'image qui est affiché sous celle-ci. La fonction peut accepter une valeur de type {{cssxref("&lt;shadow&gt;")}} (définie dans la spécification CSS3 sur les arrière-plans), une exception : le mot-clé <code>inset</code> n'est pas autorisée. Cette fonction est semblable à la propriété {{cssxref("box-shadow")}} plus répandue ; seule différence : les navigateurs utilisent parfois l'accélération matérielle pour les filtres ce qui peut permettre d'obtenir de meilleurs performances. Les paramètres de l'argument <code>&lt;shadow&gt;</code> sont les suivants :</p>

<dl>
 <dt><code>&lt;offset-x&gt;</code> <code>&lt;offset-y&gt;</code> <small>(nécessaire)</small></dt>
 <dd>Deux valeurs {{cssxref("&lt;length&gt;")}} qui indiquent le décalage de l'ombre portée. <code>&lt;offset-x&gt;</code> définit la distance horizontale : des valeurs négatives décaleront l'ombre à gauche de l'élément. <code>&lt;offset-y&gt;</code> définit la distance verticale : des valeurs négatives décaleront l'ombre au-dessus de l'élément. Se référer à la page {{cssxref("&lt;length&gt;")}} pour les différentes unités utilisables.<br>
 Si les deux valeurs sont nulles, l'ombre sera exactement placée sous l'élément (et pourra servir à générer un effet de flou si <code>&lt;blur-radius&gt;</code> et/ou <code>&lt;spread-radius&gt;</code> sont utilisés).</dd>
 <dt><code>&lt;blur-radius&gt;</code> <small>(optionnel)</small></dt>
 <dd>Une troisième valeur de type {{cssxref("&lt;length&gt;")}}. Plus la valeur sera grande, plus le flou sera important (l'ombre sera plus grande et moins prononcée). Les valeurs négatives ne sont pas autorisée. La valeur par défaut est <code>0</code>, le bord de l'ombre sera droit.</dd>
 <dt><code>&lt;spread-radius&gt;</code> <small>(optionnel)</small></dt>
 <dd>Un quatrième valeur de type {{cssxref("&lt;length&gt;")}}. Des valeurs positives agrandiront l'ombre et les valeurs négatives réduiront l'ombre. La valeur par défaut est <code>0</code> (l'ombre aura la même taille que l'élément). Note: Webkit, and maybe other browsers, do not support this 4th length; it will not render if added.</dd>
 <dt><code>&lt;color&gt;</code> <small>(optionnel)</small></dt>
 <dd>Voir {{cssxref("&lt;color&gt;")}} pour les mots-clés et notations possibles. Si ce paramètre n'est pas défini, la couleur choisie dépendra du navigateur. Pour Gecko (Firefox), Presto (Opera) et Trident (Internet Explorer), la valeur de la propriété {{cssxref("color")}} est utilisée. Pour WebKit, si la couleur est absente, l'ombre sera transparente (donc inutile).</dd>
</dl>

<pre class="brush: css">filter: drop-shadow(16px 16px 10px black)</pre>

<pre class="brush: svg">&lt;svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg"&gt;
 &lt;filter id="drop-shadow"&gt;
    &lt;feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/&gt;
    &lt;feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/&gt;
    &lt;feFlood flood-color="[color]"/&gt;
    &lt;feComposite in2="offsetblur" operator="in"/&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode/&gt;
      &lt;feMergeNode in="SourceGraphic"/&gt;
    &lt;/feMerge&gt;
  &lt;/filter&gt;
&lt;/svg&gt;</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4.jpeg" id="img1" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4.jpg" id="img2" src="/files/3714/Test_Form_4.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 239 187"&gt;
 &lt;filter id="drop-shadow"&gt;
    &lt;feGaussianBlur in="SourceAlpha" stdDeviation="5"/&gt;
    &lt;feOffset dx="16" dy="16"/&gt;
    &lt;feMerge&gt;
      &lt;feMergeNode/&gt;
      &lt;feMergeNode in="SourceGraphic"/&gt;
    &lt;/feMerge&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3714/Test_Form_4.jpeg" filter="url(#drop-shadow)" width="213px" height="161px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4_s.jpg" id="img4" src="/files/3715/Test_Form_4_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4 distorded border - Original image" id="img11" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4 distorded border - Live example" id="img12" src="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;
        &lt;div class="svg-container"&gt;
          &lt;svg xmlns="http://www.w3.org/2000/svg" id="img13" viewbox="0 0 239 187"&gt;
            &lt;filter id="drop-shadow2"&gt;
              &lt;feGaussianBlur in="SourceAlpha" stdDeviation="4"/&gt;
              &lt;feOffset dx="8" dy="10"/&gt;
              &lt;feMerge&gt;
                &lt;feMergeNode/&gt;
                &lt;feMergeNode in="SourceGraphic"/&gt;
              &lt;/feMerge&gt;
            &lt;/filter&gt;
            &lt;image xlink:href="/files/8467/Test_Form_4_irregular-shape_opacity-gradient.png" filter="url(#drop-shadow2)" width="213px" height="161px" /&gt;
          &lt;/svg&gt;
        &lt;div&gt;
      &lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_4 distorded border drop shadow - Static example" id="img14" src="/files/8469/Test_Form_4_irregular-shape_opacity-gradient_drop-shadow.png" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(16px 16px 10px black);
  -webkit-filter: drop-shadow(16px 16px 10px black);
  -o-filter: drop-shadow(16px 16px 10px black);
  -ms-filter: drop-shadow(16px 16px 10px black);
  filter: drop-shadow(16px 16px 10px black);
}
#img12 {
  width:100%;
  height:auto;
  -moz-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -webkit-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -o-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  -ms-filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
  filter: drop-shadow(8px 9px 5px rgba(0,0,0,.8));
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
#irregular-shape {
  width: 64%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3, #img13 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('drop-shadow','100%','300px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}} pour plus d'informations.</p>
</div>

<h3 id="grayscale"><code>grayscale()</code></h3>

<p>L'image d'entrée est convertie en niveau de gris. La valeur de l'argument définit la force de cette conversion. En utilisant une valeur de <code>100%</code> sera complètement en niveaux de gris. <code>0%</code> conservera l'image telle quelle. La valeur par défaut du paramètre est <code>0</code>.</p>

<pre class="brush: css">filter: grayscale(100%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5.jpeg" id="img1" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5.jpg" id="img2" src="/files/3716/Test_Form_5.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 184"&gt;
 &lt;filter id="grayscale"&gt;
    &lt;feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3716/Test_Form_5.jpeg" filter="url(#grayscale)" width="276px" height="184px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_5_s.jpg" id="img4" src="/files/3717/Test_Form_5_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:grayscale(100%);
  -webkit-filter:grayscale(100%);
  -o-filter:grayscale(100%);
  -ms-filter:grayscale(100%);
  filter:grayscale(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('grayscale','100%','209px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/grayscale()", "grayscale()")}} pour plus d'informations.</p>
</div>

<h3 id="hue-rotate"><code>hue-rotate()</code></h3>

<p>Cette fonction applique une rotation de teinte à l'image d'entrée. La valeur de l'angle passé en argument définit le nombre de degrés parcouru sur le cercle des couleurs. Une valeur de <code>0deg</code> conservera l'image telle quelle. La valeur par défaut du paramètre est <code>0deg</code>. Il n'y a pas de valeur maximale pour l'argument, si une valeur supérieure à <code>360deg</code> est utilisée, ce sera la mesure de l'angle correspondante qui sera utilisée.</p>

<pre class="brush: css">filter: hue-rotate(90deg)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6.jpeg" id="img1" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6.jpg" id="img2" src="/files/3718/Test_Form_6.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 266 190"&gt;
 &lt;filter id="hue-rotate"&gt;
    &lt;feColorMatrix type="hueRotate"
               values="90"/&gt;
  &lt;/filter&gt;
  &lt;image xlink:href="/files/3718/Test_Form_6.jpeg" filter="url(#hue-rotate)" width="266px" height="190px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_6_s.jpg" id="img4" src="/files/3719/Test_Form_6_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
  -o-filter:hue-rotate(90deg);
  -ms-filter:hue-rotate(90deg);
  filter:hue-rotate(90deg); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>
</div>

<pre class="brush: html">&lt;svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;filter id="svgHueRotate" &gt;
    &lt;feColorMatrix type="hueRotate" values="[angle]" /&gt;
  &lt;filter /&gt;
&lt;/svg&gt;</pre>

<p>{{EmbedLiveSample('hue-rotate','100%','221px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}} pour plus d'informations.</p>
</div>

<h3 id="invert"><code>invert()</code></h3>

<p>Cette fonction permet d'inverser les couleurs de l'image d'entrée. La valeur de l'argument définit la force de cette inversion. Une valeur de <code>100%</code> inversera complètement les couleurs (tel un négatif) et une valeur <code>0%</code> conservera l'image d'entrée telle quelle. La valeur par défaut de l'argument est <code>0</code>.</p>

<pre class="brush: css">filter: invert(100%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7.jpeg" id="img1" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7.jpg" id="img2" src="/files/3720/Test_Form_7.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 183 276"&gt;
 &lt;filter id="invert"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncR type="table" tableValues="1 0"/&gt;
        &lt;feFuncG type="table" tableValues="1 0"/&gt;
        &lt;feFuncB type="table" tableValues="1 0"/&gt;
    &lt;/feComponentTransfer&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3720/Test_Form_7.jpeg" filter="url(#invert)" width="183px" height="276px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_7_s.jpg" id="img4" src="/files/3721/Test_Form_7_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: invert(100%);
  -webkit-filter: invert(100%);
  -o-filter: invert(100%);
  -ms-filter: invert(100%);
  filter: invert(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('invert','100%','407px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/invert()", "invert()")}} pour plus d'informations.</p>
</div>

<h3 id="opacity"><code>opacity()</code></h3>

<p>Cette fonction permet de régler l'opacité de l'image d'entrée. La valeur de l'argument indique la force de l'opacité. Ainsi, une valeur de <code>0%</code> rendra l'image complètement transparente et une valeur de <code>100%</code> conservera l'image telle quelle. Les valeurs intermédiaires appliqueront des effets proportionnels. La valeur par défaut de l'argument est <code>1</code>. Cette fonction est proche de la propriété {{cssxref("opacity")}}, toutefois, avec les filtres, certains navigateurs utilisent l'accélération matérielle, ce qui permet d'obtenir de meilleures performances.</p>

<pre class="brush: css">filter: opacity(50%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14.jpeg" id="img1" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14.jpg" id="img2" src="/files/3725/Test_Form_14.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 276 183"&gt;
 &lt;filter id="opacity"&gt;
    &lt;feComponentTransfer&gt;
        &lt;feFuncA type="table" tableValues="0 0.5"&gt;
    &lt;/feComponentTransfer&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3725/Test_Form_14.jpeg" filter="url(#opacity)" width="276px" height="183px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_14_s.jpg" id="img4" src="/files/3726/Test_Form_14_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: opacity(50%);
  -webkit-filter: opacity(50%);
  -o-filter: opacity(50%);
  -ms-filter: opacity(50%);
  filter: opacity(50%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('opacity','100%','210px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/opacity()", "opacity()")}} pour plus d'informations.</p>
</div>

<h3 id="saturate"><code>saturate()</code></h3>

<p>L'image d'entrée est saturée. La valeur de l'argument indique la force de la saturation. Une valeur de <code>0%</code> fera que l'image sera totalement désaturée et une valeur de <code>100%</code> conservera l'image d'entrée telle quelle. Les valeurs intermédiaires auront un effet linéaire. Il est possible d'utiliser des valeurs supérieures à <code>100%</code> pour obtenir un effet de sursaturation. La valeur par défaut de l'argument est <code>1</code>.</p>

<pre class="brush: css">filter: saturate(200%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9.jpeg" id="img1" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9.jpg" id="img2" src="/files/3722/Test_Form_9.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 201 239"&gt;
 &lt;filter id="saturate"&gt;
    &lt;feColorMatrix type="saturate"
               values="2"/&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3722/Test_Form_9.jpeg" filter="url(#saturate)" width="201px" height="239px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_9_s.jpg" id="img4" src="/files/3724/Test_Form_9_s.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: saturate(200%);
  -webkit-filter: saturate(200%);
  -o-filter: saturate(200%);
  -ms-filter: saturate(200%);
  filter: saturate(200%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('saturate','100%','332px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/saturate()", "saturate()")}} pour plus d'informations.</p>
</div>

<h3 id="sepia"><code>sepia()</code></h3>

<p>L'image d'entrée est convertie en sépia. La valeur de l'argument définit la proportion de la conversion. Ainsi, si on utilise un argument égal à 100%, le résultat sera entièrement sépia et si on utilise une valeur de <code>0%</code>, l'image d'entrée sera inchangée. Les valeurs comprises entre <code>0%</code> et <code>100%</code> appliquent l'effet de façon linéaire. La valeur par défaut de l'argument est <code>0</code>.</p>

<pre class="brush: css">filter: sepia(100%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;SVG Equivalent&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12.jpeg" id="img1" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12.jpg" id="img2" src="/files/3727/Test_Form_12.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;div class="svg-container"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" id="img3" viewbox="0 0 259 194"&gt;
 &lt;filter id="sepia"&gt;
    &lt;feColorMatrix type="matrix"
               values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0"/&gt;
 &lt;/filter&gt;
 &lt;image xlink:href="/files/3727/Test_Form_12.jpeg" filter="url(#sepia)" width="259px" height="194px" /&gt;
&lt;/svg&gt;&lt;div&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_12_s.jpg" id="img4" src="/files/3728/Test_Form_12_s.jpg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: sepia(100%);
  -webkit-filter: sepia(100%);
  -o-filter: sepia(100%);
  -ms-filter: sepia(100%);
  filter: sepia(100%); }
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('sepia','100%','229px','')}}</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("filter-function/sepia()", "sepia()")}} pour plus d'informations.</p>
</div>

<h2 id="Enchaîner_les_fonctions">Enchaîner les fonctions</h2>

<p>On peut appliquer autant de fonction que nécessaire pour manipuler le rendu obtenu. Dans l'exemple suivant, on augmente le contraste et la luminosité de l'image :</p>

<pre class="brush: css">filter: contrast(175%) brightness(103%)</pre>

<pre class="brush: html hidden">&lt;table class="standard-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Original image&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Live example&lt;/th&gt;
      &lt;th style="text-align: left;" scope="col"&gt;Static example&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8.jpeg" id="img1" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8.jpg" id="img2" src="/files/3729/Test_Form_8.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
      &lt;td&gt;&lt;img alt="Test_Form_8_s.jpg" id="img4" src="/files/3730/Test_Form_8_s.jpeg" style="width: 100%;" /&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<pre class="brush: css hidden">html {
  height:100%;
}
body {
  font: 14px/1.286 "Lucida Grande","Lucida Sans Unicode","DejaVu Sans",Lucida,Arial,Helvetica,sans-serif;
  color: rgb(51, 51, 51);
  height:100%;
  overflow:hidden;
}
#img2 {
  width:100%;
  height:auto;
  -moz-filter: contrast(175%) brightness(103%);
  -webkit-filter: contrast(175%) brightness(103%);
  -o-filter: contrast(175%) brightness(103%);
  -ms-filter: contrast(175%) brightness(103%);
  filter: contrast(175%) brightness(103%);
}
table.standard-table {
  border: 1px solid rgb(187, 187, 187);
  border-collapse: collapse;
  border-spacing: 0px;
  margin: 0px 0px 1.286em;
  width: 85%;
  height: 100%;
}
table.standard-table th {
  border: 1px solid rgb(187, 187, 187);
  padding: 0px 5px;
  background: none repeat scroll 0% 0% rgb(238, 238, 238);
  text-align: left;
  font-weight: bold;
}
table.standard-table td {
  padding: 5px;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  vertical-align: top;
  width:25%;
  height:auto;
}
#img3 {
  height:100%;
}
</pre>

<p>{{EmbedLiveSample('Enchaîner_les_fonctions','100%','209px','')}}</p>

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
   <td>{{SpecName('Filters 1.0', '#FilterProperty', 'filter')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.filter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Applying_SVG_effects_to_HTML_content">Appliquer des effets SVG sur du contenu HTML</a></li>
 <li>La propriété {{cssxref("mask")}}</li>
 <li><a href="/fr/docs/Web/SVG">SVG</a></li>
 <li><a href="https://www.html5rocks.com/en/tutorials/filters/understanding-css/">Un article de HTML5 Rocks : <em>Understanding CSS filters </em>(en anglais)</a></li>
 <li><a href="https://cssgenerator.org/filter-css-generator.html">Générateur de filtres CSS</a></li>
</ul>
