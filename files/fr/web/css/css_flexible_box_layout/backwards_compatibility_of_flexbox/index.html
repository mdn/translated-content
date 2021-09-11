---
title: Mises en page avancées avec les boîtes flexibles
slug: Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox
tags:
  - CSS
  - Reference
  - flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Mixins
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Mixins
---
<div>{{CSSRef}}</div>

<p>Voici un ensemble de <em>mixins</em> pour vous permettre de bidouiller avec les boîtes flexibles grâce au support natif des navigateurs actuels.</p>

<p>Dans ces <em>mixins</em>, on utilisera :</p>

<ul>
 <li>Des <em>fallbacks</em> avec l'ancienne syntaxe 'box' (Firefox et les anciens WebKit) et les syntaxes préfixées (IE10, les navigateurs WebKit sans ajout de <code>flex</code>)</li>
 <li>La syntaxe finale standard (Firefox, Safari, Chrome, IE11, Opera)</li>
</ul>

<p>Ces <em>mixins</em> ont été inspirés par : <a href="https://dev.opera.com/articles/advanced-cross-browser-flexbox/">https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/</a></p>

<p>Et les articles suivants ont été d'une aide précieuse :</p>

<ul>
 <li><a href="https://w3.org/tr/css3-flexbox/">https://w3.org/tr/css3-flexbox/</a></li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ie/hh772069(v=vs.85).aspx">https://msdn.microsoft.com/en-us/library/ie/hh772069(v=vs.85).aspx</a></li>
 <li><a href="https://css-tricks.com/using-flexbox/">https://css-tricks.com/using-flexbox/</a></li>
 <li><a href="https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/">https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/</a></li>
 <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Un guide complet sur Flexbox | CSS-Tricks</a></li>
 <li><a href="https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/">Un guide visuel pour les flexbox CSS3 : Flexbox Playground</a></li>
</ul>

<div class="note">
<p><strong>Note :</strong> Actuellement, les mixins ne sont pas pris en charge nativement par les navigateurs. Il faut utiliser un pré-processeur CSS afin de tirer parti des techniques suivantes. Cependant, les pré-processeurs ne font que générer du code CSS valide et on pourra donc appliquer les techniques précédentes en utilisant du « pur » CSS si on le souhaite.</p>
</div>

<h3 id="Les_conteneurs_flexibles">Les conteneurs flexibles</h3>

<p>En utilisant la valeur <code>flex</code> pour la propriété {{cssxref("display")}}, on génère une boîte pour un conteneur flexible de bloc. La valeur <code>inline-flex</code> permet quant à elle de générer un conteneur flexible en ligne (<em>inline</em>).</p>

<ul>
 <li>Valeurs : <code>flex</code> | <code>inline-flex</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-containers">Spécifications</a></li>
</ul>

<pre class="brush: css">@mixin flexbox {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

// Exemple d'utilisation
%flexbox { @include flexbox; }</pre>

<pre class="brush: css">@mixin inline-flex {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

%inline-flex { @include inline-flex; }</pre>

<h3 id="Direction_des_boîtes_flexibles">Direction des boîtes flexibles</h3>

<p>La propriété {{cssxref("flex-direction")}} indique la façon dont les objets flexibles sont organisés dans le conteneur flexible en définissant la direction principale du conteneur. Autrement dit, elle détermine la direction selon laquelle les éléments flexibles sont disposés.</p>

<ul>
 <li>Valeurs possibles : <code>row</code> (la valeur par défaut)| <code>row-reverse</code> | <code>column</code> | <code>column-reverse</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-direction-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-direction($value: row) {
  @if $value == row-reverse {
    -webkit-box-direction: reverse;
    -webkit-box-orient: horizontal;
    -moz-box-direction: reverse;
    -moz-box-orient: horizontal;
  } @else if $value == column {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-box-direction: normal;
    -moz-box-orient: vertical;
  } @else if $value == column-reverse {
    -webkit-box-direction: reverse;
    -webkit-box-orient: vertical;
    -moz-box-direction: reverse;
    -moz-box-orient: vertical;
  } @else {
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -moz-box-direction: normal;
    -moz-box-orient: horizontal;
  }
  -webkit-flex-direction: $value;
  -ms-flex-direction: $value;
  flex-direction: $value;
}

// Version plus courte :
@mixin flex-dir($args...) { @include flex-direction($args...); }</pre>

<h3 id="flex-wrap"><code>flex-wrap</code></h3>

<p>La propriété {{cssxref("flex-wrap")}} permet de contrôler si le conteneur flexible s'étend sur une ou sur un plusieurs lignes ainsi que la direction de l'axe secondaire (qui définit la direction dans laquelle les lignes sont « empilées »).</p>

<ul>
 <li>Valeurs possibles : <code>nowrap</code> (la valeur par défaut)| <code>wrap</code> | <code>wrap-reverse</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-wrap-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-wrap($value: nowrap) {
  // No Webkit/FF Box fallback.
  -webkit-flex-wrap: $value;
  @if $value == nowrap {
    -ms-flex-wrap: none;
  } @else {
    -ms-flex-wrap: $value;
  }
  flex-wrap: $value;
}</pre>

<h3 id="flex-flow"><code>flex-flow</code></h3>

<p>La propriété {{cssxref("flex-flow")}} est <a href="/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies">une propriété raccourcie</a> pour définir <code>flex-direction</code> et <code>flex-wrap</code> qui permettent respectivement de définir l'axe principal et l'axe secondaire.</p>

<ul>
 <li>Valeur par défaut : <code>row</code> (la valeur par défaut)| <code>nowrap</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-flow-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-flow($values: (row nowrap)) {
  // No Webkit/FF Box fallback.
  -webkit-flex-flow: $values;
  -ms-flex-flow: $values;
  flex-flow: $values;
}</pre>

<h3 id="order"><code>order</code></h3>

<p>La propriété {{cssxref("order")}}  contrôle l'ordre dans lequel les éléments apparaissent dans le conteneur flexible en les affectant à des groupes ordinaux.</p>

<ul>
 <li>Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (0 est la valeur par défaut)</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#order-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin order($int: 0) {
  -webkit-box-ordinal-group: $int + 1;
  -moz-box-ordinal-group: $int + 1;
  -webkit-order: $int;
  -ms-flex-order: $int;
  order: $int;
}</pre>

<h3 id="flex-grow"><code>flex-grow</code></h3>

<p>La propriété {{cssxref("flex-grow")}} définit le facteur d'expansion flexible. Les nombres négatifs ne sont pas autorisés.</p>

<ul>
 <li>Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (1 est la valeur par défaut)</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-grow-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-grow($int: 1) {
  -webkit-box-flex: $int;
  -moz-box-flex: $int;
  -webkit-flex-grow: $int;
  -ms-flex: $int;
  flex-grow: $int;
}</pre>

<h3 id="flex-shrink"><code>flex-shrink</code></h3>

<p>La propriété {{cssxref("flex-shrink")}} permet de définir le facteur de réduction des éléments flexibles. Les nombres négatifs ne sont pas autorisés.</p>

<ul>
 <li>Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (1 est la valeur par défaut)</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-shrink-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-shrink($int: 0) {
  -webkit-flex-shrink: $int;
  -moz-flex-shrink: $int;
  -ms-flex: $int;
  flex-shrink: $int;
}</pre>

<h3 id="flex-basis"><code>flex-basis</code></h3>

<p>La propriété {{cssxref("flex-basis")}} permet de définir la longueur de base à partir de laquelle s'étendre ou se réduire. Les longueurs négatives ne sont pas autorisées.</p>

<ul>
 <li>Valeurs : voir la page {{cssxref("flex-basis")}}, la valeur par défaut est <code>auto</code>.</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-basis-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex-basis($value: auto) {
  -webkit-flex-basis: $value;
  flex-basis: $value;
}</pre>

<h3 id="flex"><code>flex</code></h3>

<p>La <a href="/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies">propriété raccourcie</a> {{cssxref("flex")}} permet de définir les composants d'une longueur flexible : le facteur d'expansion (<code>flex-grow</code>), le facteur de réduction (<code>flex-shrink</code>) et la longueur de base (<code>flex-basis</code>). Lorsqu'un élément est un élément flexible, c'est <code>flex</code> qui sera utilisée (plutôt que <code>width</code> ou <code>height</code>) afin de déterminer la taille de l'élément. Si l'élément n'est pas un objet flexible, <code>flex</code> n'aura aucun effet.</p>

<ul>
 <li>Valeur : voir la page {{cssxref("flex")}} pour les valeurs possibles et la valeur par défaut</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#flex-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin flex($fg: 1, $fs: 0, $fb: auto) {

  // Définir une variable pour l'utiliser
  // avec les propriétés box-flex
  $fg-boxflex: $fg;

  // Box-Flex ne prend qu'une valeur, on prend donc
  // la première valeur de la liste et on la renvoie.
  @if type-of($fg) == 'list' {
    $fg-boxflex: nth($fg, 1);
  }

  -webkit-box: $fg-boxflex;
  -moz-box: $fg-boxflex;
  -webkit-flex: $fg $fs $fb;
  -ms-flex: $fg $fs $fb;
  flex: $fg $fs $fb;
}</pre>

<h3 id="justify-content"><code>justify-content</code></h3>

<p>La propriété {{cssxref("justify-content")}} permet d'aligner les éléments flexibles le long de l'axe principal pour la ligne en cours dans le conteneur flexible. Cet alignement s'effectue après que les longueurs flexibles et les marges automatiques aient été résolues. Généralement, cela permet de distribuer l'espace restant entre les éléments d'une ligne qui ne sont pas flexibles ou qui ont atteint leur taille maximale. Cela contrôle également le comportement des éléments lorsqu'ils dépassent de la ligne.</p>

<div class="note">
<p><strong>Note :</strong> Les valeurs de la forme <code>space-*</code> ne sont pas prises en charge avec les anciennes syntaxes.</p>
</div>

<ul>
 <li>Valeurs : <code>flex-start</code> (la valeur par défaut)| <code>flex-end</code> | <code>center</code> | <code>space-between</code> | <code>space-around</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#justify-content-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin justify-content($value: flex-start) {
  @if $value == flex-start {
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
  } @else if $value == flex-end {
    -webkit-box-pack: end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
  } @else if $value == space-between {
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
  } @else if $value == space-around {
    -ms-flex-pack: distribute;
  } @else {
    -webkit-box-pack: $value;
    -moz-box-pack: $value;
    -ms-flex-pack: $value;
  }
  -webkit-justify-content: $value;
  justify-content: $value;
}
  // Version plus courte :
  @mixin flex-just($args...) { @include justify-content($args...); }</pre>

<h3 id="align-items"><code>align-items</code></h3>

<p>Les objets flexibles peuvent être alignés le long de l'axe secondaire (comme pour <code>justify-content</code> mais dans l'axe perpendiculaire). {{cssxref("align-items")}} définit l'alignement par défaut de tous les objets du conteneur flexible. <code>align-self</code> permet aux objets flexibles de surcharger cette valeur (pour les objets anonymes, <code>align-self</code> correspondra toujours à <code>align-items</code>).</p>

<ul>
 <li>Valeurs : <code>flex-start</code> | <code>flex-end</code> | <code>center</code> | <code>baseline</code> | <code>stretch</code> (la valeur par défaut)</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#align-items-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin align-items($value: stretch) {
  @if $value == flex-start {
    -webkit-box-align: start;
    -moz-box-align: start;
    -ms-flex-align: start;
  } @else if $value == flex-end {
    -webkit-box-align: end;
    -moz-box-align: end;
    -ms-flex-align: end;
  } @else {
    -webkit-box-align: $value;
    -moz-box-align: $value;
    -ms-flex-align: $value;
  }
  -webkit-align-items: $value;
  align-items: $value;
}</pre>

<h3 id="align-self"><code>align-self</code></h3>

<ul>
 <li>Valeurs : <code>auto</code> (la valeur par défaut)| <code>flex-start</code> | <code>flex-end</code> | <code>center</code> | <code>baseline</code> | <code>stretch</code></li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#align-items-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin align-self($value: auto) {
  // No Webkit Box Fallback.
  -webkit-align-self: $value;
  @if $value == flex-start {
    -ms-flex-item-align: start;
  } @else if $value == flex-end {
    -ms-flex-item-align: end;
  } @else {
    -ms-flex-item-align: $value;
  }
  align-self: $value;
}</pre>

<h3 id="align-content"><code>align-content</code></h3>

<p>La propriété {{cssxref("align-content")}} permet d'aligner les lignes créées dans le conteneur flexible lorsqu'il reste de l'espace le long de l'axe secondaire. Cette propriété n'a aucun effet lorsqu'il n'y a qu'une seule ligne.</p>

<ul>
 <li>Valeurs : <code>flex-start</code> | <code>flex-end</code> | <code>center</code> | <code>space-between</code> | <code>space-around</code> | <code>stretch</code> (la valeur par défaut)</li>
 <li><a href="https://drafts.csswg.org/css-flexbox/#align-content-property">Spécification</a></li>
</ul>

<pre class="brush: css">@mixin align-content($value: stretch) {
  // No Webkit Box Fallback.
  -webkit-align-content: $value;
  @if $value == flex-start {
    -ms-flex-line-pack: start;
  } @else if $value == flex-end {
    -ms-flex-line-pack: end;
  } @else {
    -ms-flex-line-pack: $value;
  }
  align-content: $value;
}</pre>