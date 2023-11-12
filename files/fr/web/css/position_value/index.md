---
title: <position>
slug: Web/CSS/position_value
---

{{CSSRef}}

Le type de donnée [CSS](/fr/docs/Web/CSS) **`<position>`** (ou **`<bg-position>`**) définit une paire de coordonnées dans l'espace (bidimensionnel) afin de définir la position relative d'une boîte. Ce type de donnée est notamment utilisé avec les propriétés [`background-position`](/fr/docs/Web/CSS/background-position) et [`offset-anchor`](/fr/docs/Web/CSS/offset-anchor).

> **Note :** La position finale obtenue, décrite par la valeur `<position>`, n'est pas nécessairement située à l'intérieur de la boîte de l'élément.

## Syntaxe

![](position_type.png)

On peut définir une position grâce à deux mots-clés avec chacun un décalage par rapport au côté correspondant à ce mot-clé.

Un mot-clé représente un côté de la boîte ou la ligne du centre située entre les deux bords. Ce mot-clé sera `left`, `right`, `top`, `bottom` ou `center` (ce dernier représente le milieu entre les côtés droit et gauche ou le milieu entre les côtés haut et bas selon le contexte).

Le décalage peut être une valeur relative, exprimée en pourcentages (valeur de type [`<percentage>`](/fr/docs/Web/CSS/percentage)) ou une valeur de longueur ([`<length>`](/fr/docs/Web/CSS/length)). Les valeurs positives décalent vers la droite ou vers le bas. Les valeurs négatives décalent dans l'autre sens (vers la gauche ou vers le haut).

Si un seul décalage est indiqué, ce sera le décalage horizontal. Lorsqu'un seul décalage ou mot-clé est utilisé, la valeur par défaut pour l'autre axe est `center`.

## Valeurs

```css
/* Syntaxe avec une valeur */
mot-clé                  /* Le côté depuis lequel décaler, on centrera sur l'autre axe*/
<length> ou <percentage> /* La position sur l'axe */

/* Syntaxe avec deux valeurs */
mot-clé mot-clé          /* Un mot-clé pour chaque direction, l'ordre n'est pas important */
mot-clé valeur           /* La valeur indique le décalage par rapport au côté indiqué par le mot-clé */
valeur mot-clé           /* Une valeur pour le décalage horizontal et un mot-clé pour le décalage vertical */
valeur valeur            /* Une valeur pour chaque composante du décalage */

/* Syntaxe avec quatre valeurs */
mot-clé valeur mot-clé valeur /* Chaque valeur indique le décalage par rapport au mot-clé qui le précède */
```

### Syntaxe formelle

```css
[
 [ left | center | right ] || [ top | center | bottom ]
|
 [ left | center | right | <length> | <percentage> ]
 [ top | center | bottom | <length> | <percentage> ]?
|
 [ [ left | right ] [ <length> | <percentage> ] ] &&
 [ [ top | bottom ] [ <length> | <percentage> ] ]
]
```

> **Note :** La propriété [`background-position`](/fr/docs/Web/CSS/background-position) accepte également une syntaxe avec trois valeurs. Celle-ci n'est pas autorisée pour les autres propriétés qui utilisent une valeur `<position>`.

## Interpolation

Les valeurs des coordonnées en abscisses et en ordonnées sont interpolées indépendamment. La vitesse de l'interpolation est définie par une unique fonction de temporisation ([`easing-function`](/fr/docs/Web/CSS/easing-function)), le point se déplacera donc sur une ligne.

## Exemples

### Positions valides

```css example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### Positions invalides

```css example-bad
left right
bottom top
10px 15px 20px 15px
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Valeurs et unités en CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)
- [Tutoriel — Introduction aux valeurs et unités CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
- [`background-position`](/fr/docs/Web/CSS/background-position)
- [`radial-gradient()`](</fr/docs/Web/CSS/gradient/radial-gradient()>)
- [`conic-gradient()`](</fr/docs/Web/CSS/gradient/conic-gradient()>)
