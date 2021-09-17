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
{{CSSRef}}

Voici un ensemble de _mixins_ pour vous permettre de bidouiller avec les boîtes flexibles grâce au support natif des navigateurs actuels.

Dans ces _mixins_, on utilisera :

- Des _fallbacks_ avec l'ancienne syntaxe 'box' (Firefox et les anciens WebKit) et les syntaxes préfixées (IE10, les navigateurs WebKit sans ajout de `flex`)
- La syntaxe finale standard (Firefox, Safari, Chrome, IE11, Opera)

Ces _mixins_ ont été inspirés par : [https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/](https://dev.opera.com/articles/advanced-cross-browser-flexbox/)

Et les articles suivants ont été d'une aide précieuse :

- <https://w3.org/tr/css3-flexbox/>
- <https://msdn.microsoft.com/en-us/library/ie/hh772069(v=vs.85).aspx>
- <https://css-tricks.com/using-flexbox/>
- <https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/>
- [Un guide complet sur Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Un guide visuel pour les flexbox CSS3 : Flexbox Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/)

> **Note :** Actuellement, les mixins ne sont pas pris en charge nativement par les navigateurs. Il faut utiliser un pré-processeur CSS afin de tirer parti des techniques suivantes. Cependant, les pré-processeurs ne font que générer du code CSS valide et on pourra donc appliquer les techniques précédentes en utilisant du « pur » CSS si on le souhaite.

### Les conteneurs flexibles

En utilisant la valeur `flex` pour la propriété {{cssxref("display")}}, on génère une boîte pour un conteneur flexible de bloc. La valeur `inline-flex` permet quant à elle de générer un conteneur flexible en ligne (_inline_).

- Valeurs : `flex` | `inline-flex`
- [Spécifications](https://drafts.csswg.org/css-flexbox/#flex-containers)

```css
@mixin flexbox {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

// Exemple d'utilisation
%flexbox { @include flexbox; }
```

```css
@mixin inline-flex {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

%inline-flex { @include inline-flex; }
```

### Direction des boîtes flexibles

La propriété {{cssxref("flex-direction")}} indique la façon dont les objets flexibles sont organisés dans le conteneur flexible en définissant la direction principale du conteneur. Autrement dit, elle détermine la direction selon laquelle les éléments flexibles sont disposés.

- Valeurs possibles : `row` (la valeur par défaut)| `row-reverse` | `column` | `column-reverse`
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-direction-property)

```css
@mixin flex-direction($value: row) {
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
@mixin flex-dir($args...) { @include flex-direction($args...); }
```

### `flex-wrap`

La propriété {{cssxref("flex-wrap")}} permet de contrôler si le conteneur flexible s'étend sur une ou sur un plusieurs lignes ainsi que la direction de l'axe secondaire (qui définit la direction dans laquelle les lignes sont « empilées »).

- Valeurs possibles : `nowrap` (la valeur par défaut)| `wrap` | `wrap-reverse`
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-wrap-property)

```css
@mixin flex-wrap($value: nowrap) {
  // No Webkit/FF Box fallback.
  -webkit-flex-wrap: $value;
  @if $value == nowrap {
    -ms-flex-wrap: none;
  } @else {
    -ms-flex-wrap: $value;
  }
  flex-wrap: $value;
}
```

### `flex-flow`

La propriété {{cssxref("flex-flow")}} est [une propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) pour définir `flex-direction` et `flex-wrap` qui permettent respectivement de définir l'axe principal et l'axe secondaire.

- Valeur par défaut : `row` (la valeur par défaut)| `nowrap`
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-flow-property)

```css
@mixin flex-flow($values: (row nowrap)) {
  // No Webkit/FF Box fallback.
  -webkit-flex-flow: $values;
  -ms-flex-flow: $values;
  flex-flow: $values;
}
```

### `order`

La propriété {{cssxref("order")}}  contrôle l'ordre dans lequel les éléments apparaissent dans le conteneur flexible en les affectant à des groupes ordinaux.

- Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (0 est la valeur par défaut)
- [Spécification](https://drafts.csswg.org/css-flexbox/#order-property)

```css
@mixin order($int: 0) {
  -webkit-box-ordinal-group: $int + 1;
  -moz-box-ordinal-group: $int + 1;
  -webkit-order: $int;
  -ms-flex-order: $int;
  order: $int;
}
```

### `flex-grow`

La propriété {{cssxref("flex-grow")}} définit le facteur d'expansion flexible. Les nombres négatifs ne sont pas autorisés.

- Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (1 est la valeur par défaut)
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-grow-property)

```css
@mixin flex-grow($int: 1) {
  -webkit-box-flex: $int;
  -moz-box-flex: $int;
  -webkit-flex-grow: $int;
  -ms-flex: $int;
  flex-grow: $int;
}
```

### `flex-shrink`

La propriété {{cssxref("flex-shrink")}} permet de définir le facteur de réduction des éléments flexibles. Les nombres négatifs ne sont pas autorisés.

- Valeur : un entier ({{cssxref("&lt;integer&gt;")}} (1 est la valeur par défaut)
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-shrink-property)

```css
@mixin flex-shrink($int: 0) {
  -webkit-flex-shrink: $int;
  -moz-flex-shrink: $int;
  -ms-flex: $int;
  flex-shrink: $int;
}
```

### `flex-basis`

La propriété {{cssxref("flex-basis")}} permet de définir la longueur de base à partir de laquelle s'étendre ou se réduire. Les longueurs négatives ne sont pas autorisées.

- Valeurs : voir la page {{cssxref("flex-basis")}}, la valeur par défaut est `auto`.
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-basis-property)

```css
@mixin flex-basis($value: auto) {
  -webkit-flex-basis: $value;
  flex-basis: $value;
}
```

### `flex`

La [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) {{cssxref("flex")}} permet de définir les composants d'une longueur flexible : le facteur d'expansion (`flex-grow`), le facteur de réduction (`flex-shrink`) et la longueur de base (`flex-basis`). Lorsqu'un élément est un élément flexible, c'est `flex` qui sera utilisée (plutôt que `width` ou `height`) afin de déterminer la taille de l'élément. Si l'élément n'est pas un objet flexible, `flex` n'aura aucun effet.

- Valeur : voir la page {{cssxref("flex")}} pour les valeurs possibles et la valeur par défaut
- [Spécification](https://drafts.csswg.org/css-flexbox/#flex-property)

```css
@mixin flex($fg: 1, $fs: 0, $fb: auto) {

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
}
```

### `justify-content`

La propriété {{cssxref("justify-content")}} permet d'aligner les éléments flexibles le long de l'axe principal pour la ligne en cours dans le conteneur flexible. Cet alignement s'effectue après que les longueurs flexibles et les marges automatiques aient été résolues. Généralement, cela permet de distribuer l'espace restant entre les éléments d'une ligne qui ne sont pas flexibles ou qui ont atteint leur taille maximale. Cela contrôle également le comportement des éléments lorsqu'ils dépassent de la ligne.

> **Note :** Les valeurs de la forme `space-*` ne sont pas prises en charge avec les anciennes syntaxes.

- Valeurs : `flex-start` (la valeur par défaut)| `flex-end` | `center` | `space-between` | `space-around`
- [Spécification](https://drafts.csswg.org/css-flexbox/#justify-content-property)

```css
@mixin justify-content($value: flex-start) {
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
  @mixin flex-just($args...) { @include justify-content($args...); }
```

### `align-items`

Les objets flexibles peuvent être alignés le long de l'axe secondaire (comme pour `justify-content` mais dans l'axe perpendiculaire). {{cssxref("align-items")}} définit l'alignement par défaut de tous les objets du conteneur flexible. `align-self` permet aux objets flexibles de surcharger cette valeur (pour les objets anonymes, `align-self` correspondra toujours à `align-items`).

- Valeurs : `flex-start` | `flex-end` | `center` | `baseline` | `stretch` (la valeur par défaut)
- [Spécification](https://drafts.csswg.org/css-flexbox/#align-items-property)

```css
@mixin align-items($value: stretch) {
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
}
```

### `align-self`

- Valeurs : `auto` (la valeur par défaut)| `flex-start` | `flex-end` | `center` | `baseline` | `stretch`
- [Spécification](https://drafts.csswg.org/css-flexbox/#align-items-property)

```css
@mixin align-self($value: auto) {
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
}
```

### `align-content`

La propriété {{cssxref("align-content")}} permet d'aligner les lignes créées dans le conteneur flexible lorsqu'il reste de l'espace le long de l'axe secondaire. Cette propriété n'a aucun effet lorsqu'il n'y a qu'une seule ligne.

- Valeurs : `flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `stretch` (la valeur par défaut)
- [Spécification](https://drafts.csswg.org/css-flexbox/#align-content-property)

```css
@mixin align-content($value: stretch) {
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
}
```
