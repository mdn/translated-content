---
title: translate3d()
slug: Web/CSS/Reference/Values/transform-function/translate3d
original_slug: Web/CSS/transform-function/translate3d
---

{{CSSRef}}

La fonction CSS **`translate3d()`** permet de déplacer un élément dans l'espace tridimensionnel. Cette transformation est définie à l'aide d'un vecteur dont les coordonnées définissent l'amplitude du déplacement pour chaque direction.

{{InteractiveExample("CSS Demo: translate3d()")}}

```css interactive-example-choice
transform: translate3d(0);
```

```css interactive-example-choice
transform: translate3d(42px, -62px, -135px);
```

```css interactive-example-choice
transform: translate3d(-2.7rem, 0, 1rem);
```

```css interactive-example-choice
transform: translate3d(5ch, 0.4in, 5em);
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
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
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
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function).

## Syntaxe

```css
translate3d(tx, ty, tz)
```

### Valeurs

- `tx`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length) ou [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage) qui représente l'abscisse du vecteur de translation (équivalente au déplacement horizontal).
- `ty`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length) ou [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage) qui représente l'ordonnée du vecteur de translation (équivalente au déplacement vertical).
- `tz`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/Reference/Values/length) qui représente la composante en profondeur du vecteur de translation (équivalente au déplacement en profondeur). La valeur ne peut pas être de type [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage), si c'est le cas, la règle décrivant la transformation sera considérée comme invalide.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        <p>
          Cette transformation s'applique en trois dimensions et ne peut donc
          être représentée sur le plan.
        </p>
      </td>
      <td>
        Une translation n'est pas une transformation linéaire de ℝ<sup>3</sup>
        et ne peut donc pas être représentée par une matrice dans le système
        cartésien.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Définir une translation sur un seul axe

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0px, 0px);
  /* Équivalent à perspective(500px) translateX(10px)*/
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_un_seul_axe","100%","250")}}

### Définir une translation sur les axes X et Z

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_les_axes_X_et_Z","100%","250")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/Reference/Properties/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/Reference/Values/transform-function)
