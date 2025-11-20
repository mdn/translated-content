---
title: <gradient>
slug: Web/CSS/Reference/Values/gradient
original_slug: Web/CSS/gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<gradient>`** permet de représenter une {{CSSxRef("&lt;image&gt;")}} contenant un dégradé entre deux ou plusieurs couleurs. Un dégradé CSS n'est pas une couleur CSS (type {{CSSxRef("&lt;color&gt;")}}) mais une image [sans dimension intrinsèque](/fr/docs/Web/CSS/Reference/Values/image) (elle n'a aucune taille naturelle ou ratio), sa taille réelle sera celle de l'élément auquel elle est appliquée.

{{InteractiveExample("Démonstration CSS&nbsp;: &lt;gradient&gt;")}}

```css interactive-example-choice
background: linear-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: radial-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: conic-gradient(#f69d3c, #3f87a6);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

Un dégradé CSS est [sans dimension intrinsèque](/fr/docs/Web/CSS/Reference/Values/image#description)&nbsp;: il n'a ni taille naturelle ni préférée, ni ratio préféré. Sa taille réelle correspond à celle de l'élément auquel il s'applique.

## Syntaxe

Le type de donnée `<gradient>` se définit à l'aide de l'une des fonctions suivantes.

### Dégradé linéaire

Les dégradés linéaires font évoluer les couleurs le long d'une ligne imaginaire. Ils sont générés avec la fonction {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}.

### Dégradé radial

Les dégradés radiaux font évoluer les couleurs à partir d'un point central (origine). Ils sont générés avec la fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}.

### Dégradé conique

Les dégradés coniques font évoluer les couleurs autour d'un cercle. Ils sont générés avec la fonction {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}.

### Dégradé répétitif

Les dégradés répétitifs dupliquent un dégradé autant que nécessaire pour remplir la zone. Ils sont générés avec les fonctions {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} et {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

## Interpolation

Comme pour toute interpolation de couleurs, les dégradés sont calculés dans l'espace colorimétrique alpha-prémultiplié. Cela évite l'apparition de teintes grises inattendues lorsque la couleur et l'opacité varient. (Attention&nbsp;: les anciens navigateurs peuvent ne pas utiliser ce comportement avec le [mot-clé transparent](/fr/docs/Web/CSS/Reference/Values/named-color#transparent).)

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple de dégradé linéaire

Un dégradé linéaire.

```html hidden
<div class="linear-gradient">Dégradé linéaire</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('Exemple de dégradé linéaire', 240, 120)}}

### Exemple de dégradé radial

Un dégradé radial.

```html hidden
<div class="radial-gradient">Dégradé radial</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, dodgerblue);
}
```

{{EmbedLiveSample('Exemple de dégradé radial', 240, 120)}}

### Exemple de dégradé conique

Un exemple de dégradé conique.

```html hidden
<div class="conic-gradient">Dégradé conique</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(pink, coral, lime);
}
```

{{EmbedLiveSample('Exemple de dégradé conique', 240, 240)}}

### Exemples de dégradés répétitifs

Exemples de dégradés linéaire, radial et conique répétitifs.

```html hidden
<div class="linear-repeat"></div>
<span>Dégradé linéaire répétitif</span>
<hr />
<div class="radial-repeat"></div>
<span>Dégradé radial répétitif</span>
<hr />
<div class="conic-repeat"></div>
<span>Dégradé conique répétitif</span>
```

```css hidden
div {
  display: inline-block;
  width: 240px;
  height: 80px;
}

span {
  font-weight: bold;
  vertical-align: top;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    pink,
    pink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    lime,
    lime 15px,
    white 15px,
    white 30px
  );
}

.conic-repeat {
  background: repeating-conic-gradient(lime, pink 30deg);
}
```

{{EmbedLiveSample('Exemples de dégradés répétitifs', 240, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Fonctions de dégradé&nbsp;: {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [Les types de donnée en CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- [Les unités et valeurs en CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Introduction à CSS&nbsp;: les unités et les valeurs](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
