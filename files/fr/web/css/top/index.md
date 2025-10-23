---
title: top
slug: Web/CSS/top
---

{{CSSRef}}

La propriété **`top`** définit une partie de la position des éléments positionnés, elle n'a aucun effet pour les éléments non-positionnés.

{{InteractiveExample("CSS Demo: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

L'effet de la propriété `top` dépend de la façon dont l'élément est positionné (autrement dit, il dépend de la valeur de la propriété {{cssxref("position")}}) :

- Pour les éléments qui sont positionnés de manière absolue ({{cssxref("position")}}`: absolute` ou {{cssxref("position")}}`: fixed`), cette propriété définit la distance entre le bord haut de la marge (_margin_) de l'élément et le bord haut du bloc englobant (il faut que le bloc englobant ait `position: relative`).
- Lorsque `position` vaut `relative`, cela définit la grandeur du déplacement avec laquelle l'élément est placé en dessous de sa position normale.
- Lorsque `position` vaut `sticky`, la propriété `top` se comporte comme avec `relative` lorsque l'élément se situe à l'intérieur de la zone d'affichage (_viewport_) et elle se comporte comme `fixed` lorsque l'élément est à l'extérieur de la zone d'affichage.
- Lorsque `position` vaut `static`, la propriété `top` n'a aucun effet.

Lorsque `top` et {{cssxref("bottom")}} sont utilisés tous les deux, tant que {{cssxref("height")}} n'est pas définie ou ne vaut pas `auto` ou `100%`, les distances introduites par `top` et {{cssxref("bottom")}} seront respectées. Sinon, si {{cssxref("height")}} est contrainte d'une certaine façon, la propriété `top` prendra le pas sur {{cssxref("bottom")}} qui sera ignorée.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length> */
top: 3px;
top: 2.4em;

/* Valeur en pourcentages */
/* Relative à la hauteur du bloc englobant */
/* Type <percentages> */
top: 10%;

/* Avec un mot-clé */
top: auto;

/* Valeur globale */
top: inherit;
top: initial;
top: unset;
```

### Valeurs

- `<length>`
  - : Une valeur négative, nulle ou positive du type {{cssxref("&lt;length&gt;")}} qui représente :
    - La distance depuis le bord haut du bloc englobant pour les _éléments positionnés de façon absolue_
    - Le décalage avec lequel l'élément est déplacé vers le bas (relativement à sa position normale) pour _les éléments positionnés de façon relative_.

- `<percentage>`
  - : Une valeur du type {{cssxref("&lt;percentage&gt;")}} qui est relative à la hauteur du bloc englobant.
- `auto`
  - : Un mot-clé qui représente :
    - Pour les éléments positionnés de façon absolue, la position de l'élément en fonction de la propriété {{cssxref("bottom")}} et qui traite `height: auto` comme une hauteur basée sur le contenu. Si `bottom` vaut également `auto`, l'élément est positionné verticalement comme s'il avait été un élément statique.
    - Pour les éléments positionnés de façon relative, le décalage de l'élément par rapport à sa position originale, basée sur la propriété {{cssxref("bottom")}}. Si `bottom` vaut également `auto`, aucun décalage n'est appliqué.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionnement relatif

#### HTML

```html
<div>
  <p>Lorem ipsum et tralala normal</p>
  <p class="relatif">Lorem ipsum et tralala relatif</p>
  <p>Lorem ipsum et tralala normal</p>
</div>
```

#### CSS

```css
div {
  border: 2px black dashed;
}

p.relatif {
  position: relative;
  top: 5em;
  border: 2px black solid;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement_relatif","100%","200")}}

### Positionnement absolu

#### HTML

```html
<div>
  <p>Lorem ipsum et tralala normal</p>
  <p class="absolu">Lorem ipsum et tralala absolu</p>
  <p>Lorem ipsum et tralala normal</p>
</div>
```

#### CSS

```css
div {
  border: 2px black dashed;
}

p.absolu {
  position: absolute;
  top: 5em;
  border: 2px black solid;
}
```

#### Résultat

{{EmbedLiveSample("Positionnement_absolu","100%","100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("position")}}
- {{cssxref("bottom")}}
- {{cssxref("height")}}
- {{cssxref("left")}}
- {{cssxref("right")}}
- [Les bases de CSS : la disposition et le positionnement](/fr/docs/Learn_web_development/Core/CSS_layout/Introduction#le_positionnement)
