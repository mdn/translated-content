---
title: paint-order
slug: Web/CSS/paint-order
---

{{CSSRef}}{{seecompattable}}

La propriété **`paint-order`** permet de contrôler l'ordre dans lequel le remplissage, les marqueurs de peinture et le contour du texte et des formes sont dessinés.

## Syntaxe

```css
/* Normal */
paint-order: normal;

/* Valeur unique */
/* le contour est dessiné en premier, puis */
/* le remplissage puis les marqueurs */
paint-order: stroke;
/* les marqueurs sont dessinés en premier, */
/* suivis du remplissage et du contour */
paint-order: markers;

/* Plusieurs valeurs */
/* Le contour est dessiné en premier puis */
/* le remplissage puis les marqueurs */
paint-order: stroke fill;
/* Les marqueurs sont dessinés en premiers */
/* puis le contour, puis le remplissage */
paint-order: markers stroke fill;
```

La valeur par défaut, utilisée si aucune valeur n'est fournie, sera `fill`, `stroke`, `markers`.

Lorsqu'une seule valeur est indiquée, c'est celle-ci qui est appliquée par défaut suivi des deux autres selon l'ordre par défaut. Lorsque deux valeurs sont indiquées, elles sont appliquées dans cet ordre puis suivi de la troisième.

> **Note :** Pour cette propriété, les marqueurs sont uniquement utilisés dans le cas de formes SVG qui utilisent les propriétés `marker-*` (e.g. [`marker-start`](/fr/docs/Web/SVG/Attribute/marker-start)) ou l'élément [`<marker>`](/fr/docs/Web/SVG/Element/marker). Les marqueurs ne sont pas appliqués sur le texte HTML, dans ce cas, seul l'ordre entre `stroke` et `fill` importe.

### Valeurs

- `normal`
  - : Les différents niveaux sont appliqués dans l'ordre normal.
- `stroke`

  `fill`

  `markers`

  - : Indiquent les valeurs dans l'ordre dans lequel on veut qu'elles soient peintes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">stroke in front</text>
  <text x="10" y="150" class="stroke-behind">stroke behind</text>
</svg>
```

### CSS

```css
text {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  stroke: red;
  stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 165)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
