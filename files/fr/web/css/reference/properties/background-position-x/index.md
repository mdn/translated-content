---
title: background-position-x
slug: Web/CSS/Reference/Properties/background-position-x
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-position-x`** définit la position horizontale initiale de chaque image d'arrière-plan. La position est relative à la couche de position définie par {{CSSxRef("background-origin")}}.

La valeur de cette propriété est remplacée par toute déclaration des propriétés raccourcies {{CSSxRef("background")}} ou {{CSSxRef("background-position")}} appliquées à l'élément après elle.

{{InteractiveExample("Démonstration CSS&nbsp;: background-position-x")}}

```css interactive-example-choice
background-position-x: left;
```

```css interactive-example-choice
background-position-x: center;
```

```css interactive-example-choice
background-position-x: 25%;
```

```css interactive-example-choice
background-position-x: 2rem;
```

```css interactive-example-choice
background-position-x: right 32px;
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
background-position-x: left;
background-position-x: right;
background-position-x: center;

/* Valeur en pourcentage <percentage> */
background-position-x: 25%;

/* Valeurs de longueur <length> */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Valeurs de décalage relatif */
background-position-x: right 3px;
background-position-x: left 25%;

/* Valeurs multiples */
background-position-x: 0px, center;

/* Valeurs globales */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: revert-layer;
background-position-x: unset;
```

La propriété `background-position-x` se définit avec une ou plusieurs valeurs, séparées par des virgules.

### Valeurs

- `left`
  - : Le bord gauche de l'image d'arrière-plan est aligné avec le bord gauche de la zone dédiée à l'arrière-plan.
- `center`
  - : L'image d'arrière-plan est centrée horizontalement par rapport à la zone dédiée à l'arrière-plan.
- `right`
  - : Le côté droit de l'image d'arrière-plan est aligné avec le côté droit de la zone dédiée à l'arrière-plan.
- {{CSSxRef("&lt;length&gt;")}}
  - : Le décalage du bord vertical gauche de l'image d'arrière-plan par rapport au bord vertical gauche de la couche de position d'arrière-plan. (Certains navigateurs permettent d'utiliser le bord droit pour le décalage.)
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Le décalage de la position horizontale de l'image d'arrière-plan par rapport au conteneur. Une valeur de 0% signifie que le bord gauche de l'image d'arrière-plan est aligné avec le bord gauche du conteneur, et une valeur de 100% signifie que le bord _droit_ de l'image d'arrière-plan est aligné avec le bord _droit_ du conteneur. Ainsi, une valeur de 50% centre l'image d'arrière-plan horizontalement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

L'exemple suivant montre une implémentation d'image d'arrière-plan, avec la position horizontale et la position verticale de l'arrière-plan utilisées pour définir séparément la position horizontale et la position verticale de l'image.

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
- La propriété {{CSSxRef("background-position-y")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
