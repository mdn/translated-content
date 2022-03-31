---
title: right
slug: Web/CSS/right
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/right
---
{{CSSRef}}

La propriété **`right`** définit, en partie, la position des éléments positionnés. La propriété `right` n'a aucun effet sur les éléments non-positionnés.

{{EmbedInteractiveExample("pages/css/right.html")}}

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

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#exemple_3 {
  width: 100px;
  height: 100px;
  background-color: #FFC7E4;
  position: relative;
  top: 20px;
  left: 20px;
}

#exemple_4 {
  width: 100px;
  height: 100px;
  background-color: #FFD7C2;
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

| Spécification                                                                    | État                                     | Commentaire                                                           |
| -------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'right')}} | {{Spec2('CSS3 Transitions')}} | Définit `right` comme pouvant être animée.                            |
| {{SpecName('CSS3 Positioning', '#propdef-right', 'right')}} | {{Spec2('CSS3 Positioning')}} | Description du comportement pour le comportement adhérent (_sticky_). |
| {{SpecName('CSS2.1', 'visuren.html#propdef-right', 'right')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                                                  |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.right")}}

## Voir aussi

- {{cssxref("position")}},
- {{cssxref("left")}},
- {{cssxref("top")}},
- {{cssxref("bottom")}}
