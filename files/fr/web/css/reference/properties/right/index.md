---
title: right
slug: Web/CSS/Reference/Properties/right
original_slug: Web/CSS/right
---

{{CSSRef}}

La propriété **`right`** définit, en partie, la position des éléments positionnés. La propriété `right` n'a aucun effet sur les éléments non-positionnés.

{{InteractiveExample("CSS Demo: right")}}

```css interactive-example-choice
right: 0;
```

```css interactive-example-choice
right: 4em;
```

```css interactive-example-choice
right: 10%;
```

```css interactive-example-choice
right: 20px;
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

L'effet de la propriété `right` dépend de la façon dont l'élément est positionné (c'est-à-dire de la valeur de la propriété {{cssxref("position")}}) :

- Quand `position` vaut `absolute` ou `fixed`, `right` indique la distance entre le bord droit de l'élément et le bord droit du bloc englobant.
- Quand `position` vaut `relative`, `right` indique la distance de laquelle le bord droit de l'élément est décalé vers la gauche par rapport à sa position normale.
- Quand `position` vaut `sticky`, `right` se comporte comme `relative` lorsque l'élément est à l'intérieur de la zone d'affichage (_viewport_) et comme `fixed` lorsque l'élément est en dehors de la zone d'affichage.
- Quand `position` vaut `static`, `right` n'a aucun effet.

Lorsque les propriétés `right` et {{cssxref("left")}} sont définies toutes les deux et que l'élément ne peut pas s'étendre afin de satisfaire ces deux contraintes, la position de l'élément est _sur-définie._ Dans ce cas, la valeur de {{cssxref("left")}} est prioritaire lorsque le contenant est disposé en lecture de gauche à droite (la valeur calculée de `right` sera `-left`), et la valeur de `right` est prioritaire lorsque le contenant est disposé en lecture de droite à gauche (la valeur calculée de {{cssxref("left")}} sera `-right`).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
right: 3px;
right: 2.4em;

/* Valeurs de pourcentage */
/* Type <percentage>      */
right: 10%;

/* Valeur avec un mot-clé */
right: auto;

/* Valeurs globales */
right: inherit;
right: initial;
right: unset;
```

### Valeurs

- `<length>`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui peut être négative, positive ou nulle et représente :
    - pour les éléments à positionnement absolu : la distance jusqu'au bord droit du bloc englobant.
    - pour les éléments à positionnement relatif : le décalage à droite que l'élément subit par rapport à sa position dans le flux normal s'il n'était pas positionné.

- `<percentage>`
  - : Une valeur de type {{cssxref("&lt;percentage&gt;")}} représentant le pourcentage de la largeur du bloc englobant.
- `auto`
  - : Un mot-clé qui représente :
    - pour les éléments à positionnement absolu : la position de l'élément fondé sur la propriété {{cssxref("left")}} et considère `width: auto` comme une largeur fondée sur le contenu ; ou, si `left` vaut aussi `auto`, l'élément serait positionné horizontalement comme s'il avait été un élément statique.
    - pour les éléments à positionnement relatif : le décalage à droite de l'élément par rapport à sa position originale fondé sur la propriété {{cssxref("left")}} ou, si `left` vaut également `auto`, aucun décalage.

- `inherit`
  - : Un mot-clé indiquant que la valeur est identique à la valeur calculée de l'élément parent (qui peut ne pas être sont bloc contenant). Cette valeur calculée est manipulée comme si elle était de type {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} ou comme si elle était le mot-clé `auto`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#exemple_3 {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#exemple_4 {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

### HTML

```html
<div id="exemple_3">Exemple 3</div>
<div id="exemple_4">Exemple 4</div>
```

### Résultat

{{EmbedLiveSample('Exemples', 500, 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("position")}},
- {{cssxref("left")}},
- {{cssxref("top")}},
- {{cssxref("bottom")}}
