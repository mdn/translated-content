---
title: Propriété CSS `perspective-origin`
short-title: perspective-origin
slug: Web/CSS/Reference/Properties/perspective-origin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`perspective-origin`** détermine la position depuis laquelle le spectateur regarde le document. Elle est utilisée comme _point de fuite_ par la propriété {{CSSxRef("perspective")}}.

{{InteractiveExample("Démonstrations CSS&nbsp;: perspective-origin")}}

```css interactive-example-choice
perspective-origin: center;
```

```css interactive-example-choice
perspective-origin: top;
```

```css interactive-example-choice
perspective-origin: bottom right;
```

```css interactive-example-choice
perspective-origin: -170%;
```

```css interactive-example-choice
perspective-origin: 500% 200%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  perspective: 250px;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Les propriétés **`perspective-origin`** et {{CSSxRef('perspective')}} sont à rattacher à l'élément parent de l'élément qu'on veut placer dans un espace 3D. En revanche, la fonction {{CSSxRef("transform-function/perspective", "perspective()")}} s'applique à même l'élément qu'on veut placer en 3D.

## Syntaxe

```css
/* Syntaxe avec une valeur */
perspective-origin: x-position;

/* Syntaxe avec deux valeurs */
perspective-origin: x-position y-position;

/* Lorsque x-position et y-position sont des mots-clés */
/* on peut aussi avoir la forme suivante valide        */
perspective-origin: y-position x-position;

/* Valeurs globales */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: revert;
perspective-origin: revert-layer;
perspective-origin: unset;
```

### Valeurs

- `x-position`
  - : Indique la position de l'abscisse du _point de fuite_. Elle peut avoir l'une des valeurs suivantes&nbsp;:
    - {{CSSxRef("&lt;length-percentage&gt;")}} indiquant la position comme une valeur de longueur absolue ou relative à la largeur de l'élément. La valeur peut être négative.
    - `left`, un mot-clé étant un raccourci pour la valeur de longueur `0`.
    - `center`, un mot-clé étant un raccourci pour la valeur de pourcentage `50%`.
    - `right`, un mot-clé étant un raccourci pour la valeur de pourcentage `100%`.

- `y-position`
  - : Indique la position de l'ordonnée du _point de fuite_. Elle peut avoir l'une des valeurs suivantes&nbsp;:
    - {{CSSxRef("&lt;length-percentage&gt;")}} indiquant la position comme une valeur de longueur absolue ou relative à la hauteur de l'élément. La valeur peut être négative.
    - `top`, un mot-clé étant un raccourci pour la valeur de longueur `0`.
    - `center`, un mot-clé étant un raccourci pour la valeur de pourcentage `50%`.
    - `bottom`, un mot-clé étant un raccourci pour la valeur de pourcentage `100%`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer l'origine de la perspective

Un exemple montrant comment changer `perspective-origin` est donné dans [Utiliser les transformations CSS > Changer l'origine de la perspective](/fr/docs/Web/CSS/Guides/Transforms/Using#modifier_lorigine_de_la_perspective).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- La propriété {{CSSxRef('transform-style')}}
- Le type de donnée {{CSSxRef('&lt;transform-function&gt;')}}
- La propriété {{CSSxRef('perspective')}}
- [La fonction de transformation `perspective()`](/fr/docs/Web/CSS/Reference/Values/transform-function/perspective)
