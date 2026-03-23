---
title: paint-order
slug: Web/CSS/Reference/Properties/paint-order
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

La propriété [CSS](/fr/docs/Web/CSS) **`paint-order`** permet de contrôler l'ordre dans lequel le remplissage, le contour (et les marqueurs de peinture) du contenu textuel et des formes sont dessinés.

## Syntaxe

```css
/* Normal */
paint-order: normal;

/* Valeurs uniques */
paint-order: stroke; /* dessiner le contour en premier, puis le remplissage et les marqueurs */
paint-order: markers; /* dessiner les marqueurs en premier, puis le remplissage et le contour */

/* Plusieurs valeurs */
paint-order: stroke fill; /* dessiner le contour en premier, puis le remplissage, puis les marqueurs */
paint-order: markers stroke fill; /* dessiner les marqueurs, puis le contour, puis le remplissage */

/* Valeurs globales */
paint-order: inherit;
paint-order: initial;
paint-order: revert;
paint-order: revert-layer;
paint-order: unset;
```

Si aucune valeur n'est définie, l'ordre de peinture par défaut est `fill`, `stroke`, `markers`.

Lorsque une seule valeur est définie, celle-ci est peinte en premier, suivie des deux autres dans leur ordre par défaut relatif. Lorsque deux valeurs sont définies, elles sont peintes dans l'ordre spécifié, suivies de la valeur non définie.

> [!NOTE]
> Pour cette propriété, les marqueurs sont uniquement utilisés dans le cas de formes SVG qui utilisent les propriétés `marker-*` (par exemple, {{SVGAttr("marker-start")}}) ou l'élément SVG {{SVGElement("marker")}}. Les marqueurs ne sont pas appliqués sur le texte HTML, dans ce cas, seul l'ordre entre `stroke` et `fill` importe.

### Valeurs

- `normal`
  - : Peint les différents éléments dans l'ordre de peinture normal.
- `stroke`,
  `fill`,
  `markers`
  - : Définit certaines ou toutes ces valeurs dans l'ordre dans lequel vous souhaitez qu'elles soient peintes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Inverser l'ordre de peinture du contour et du remplissage

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">Contour devant</text>
  <text x="10" y="150" class="stroke-behind">Contour derrière</text>
</svg>
```

#### CSS

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

#### Résultat

{{EmbedLiveSample("Inverser l'ordre de peinture du contour et du remplissage", "100%", 165)}}

### Inverser l'ordre de peinture du contour et du remplissage en utilisant du HTML

Pour contrôler l'ordre de remplissage et de contour en HTML, vous pouvez utiliser les propriétés CSS {{CSSxRef("-webkit-text-stroke-color")}} et {{CSSxRef("-webkit-text-stroke-width")}}.

#### HTML

```html
<div>Contour devant</div>
<div class="stroke-behind">Contour derrière</div>
```

#### CSS

```css
div {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-text-stroke-color: red;
  -webkit-text-stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### Résultat

{{EmbedLiveSample("Inverser l'ordre de peinture du contour et du remplissage en utilisant du HTML", "100%", 165)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSS Tricks&nbsp;: paint-order <sup>(angl.)</sup>](https://css-tricks.com/almanac/properties/p/paint-order/)
