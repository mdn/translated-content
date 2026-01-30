---
title: background-position-y
slug: Web/CSS/Reference/Properties/background-position-y
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-position-y`** définit la position verticale initiale de chaque image d'arrière-plan. La position est relative à la couche de position définie par {{CSSxRef("background-origin")}}.

La valeur de cette propriété est remplacée par toute déclaration des propriétés raccourcies {{CSSxRef("background")}} ou {{CSSxRef("background-position")}} appliquées à l'élément après elle.

{{InteractiveExample("Démonstration CSS&nbsp;: background-position-y")}}

```css interactive-example-choice
background-position-y: top;
```

```css interactive-example-choice
background-position-y: center;
```

```css interactive-example-choice
background-position-y: 25%;
```

```css interactive-example-choice
background-position-y: 2rem;
```

```css interactive-example-choice
background-position-y: bottom 32px;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* Valeur en pourcentage <percentage> */
background-position-y: 25%;

/* Valeurs de longueur <length> */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Valeurs de décalage relatif */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Valeurs multiples */
background-position-y: 0px, center;

/* Valeurs globales */
background-position-y: inherit;
background-position-y: initial;
background-position-y: revert;
background-position-y: revert-layer;
background-position-y: unset;
```

### Valeurs

- `top`
  - : Le bord haut de l'image d'arrière-plan est aligné avec le bord haut de la zone dédiée à l'arrière-plan.
- `center`
  - : L'image d'arrière-plan est centrée verticalement par rapport à la zone dédiée à l'arrière-plan.
- `bottom`
  - : Le bas de l'image d'arrière-plan est aligné avec le bas de la zone dédiée à l'arrière-plan.
- {{CSSxRef("&lt;length&gt;")}}
  - : Le décalage du bord horizontal de l'image d'arrière-plan par rapport au bord horizontal supérieur correspondant de la couche de position d'arrière-plan. (Certains navigateurs permettent d'utiliser le bord inférieur pour le décalage.)
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Le décalage de la position verticale de l'image d'arrière-plan par rapport au conteneur. Une valeur de 0% signifie que le bord supérieur de l'image d'arrière-plan est aligné avec le bord supérieur du conteneur, et une valeur de 100% signifie que le bord _inférieur_ de l'image d'arrière-plan est aligné avec le bord _inférieur_ du conteneur. Ainsi, une valeur de 50% centre l'image d'arrière-plan verticalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

L'exemple suivant montre une implémentation d'image d'arrière-plan, avec la position horizontale de l'arrière-plan et la position verticale de l'arrière-plan utilisées pour définir séparément la position horizontale et la position verticale de l'image.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: skyblue;
  background-image: url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple", "100%", 300)}}

### Valeurs relatives aux côtés

L'exemple suivant montre la prise en charge de la syntaxe de décalage relatif aux côtés, qui permet de décaler l'arrière-plan à partir de n'importe quel bord.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: seagreen;
  background-image: url("https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png");
  background-repeat: no-repeat;
  background-position-x: right 20px;
  background-position-y: bottom 10px;
}
```

#### Résultat

{{EmbedLiveSample("Valeurs relatives aux côtés", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-position")}}
- La propriété {{CSSxRef("background-position-x")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
