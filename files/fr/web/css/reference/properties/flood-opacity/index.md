---
title: flood-opacity
slug: Web/CSS/Reference/Properties/flood-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`flood-opacity`** définit l'opacité de la sous-région primitive du filtre en cours dans les éléments SVG {{SVGElement("feFlood")}} et {{SVGElement("feDropShadow")}} à l'intérieur d'un {{SVGElement("filter")}}. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("flood-opacity")}} de l'élément.

La valeur de la propriété agit sur le canal alpha de la {{CSSxRef("flood-color")}}&nbsp;; elle peut augmenter la transparence d'une `flood-color` mais ne peut pas rendre la couleur définie par la propriété `flood-color` plus opaque.

> [!NOTE]
> La propriété `flood-opacity` ne s'applique qu'aux éléments SVG {{SVGElement("feFlood")}} et {{SVGElement("feDropShadow")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs numériques et pourcentages */
flood-opacity: 0.2;
flood-opacity: 20%;

/* Valeurs globales */
flood-opacity: inherit;
flood-opacity: initial;
flood-opacity: revert;
flood-opacity: revert-layer;
flood-opacity: unset;
```

### Valeurs

La valeur `<opacity-value>` est un {{CSSxRef("number")}} ou un {{CSSxRef("percentage")}} indiquant l'opacité de l'élément SVG `<flood>`.

- {{CSSxRef("number")}}
  - : Une valeur numérique comprise entre `0` et `1`, inclus.

- {{CSSxRef("percentage")}}
  - : Une valeur en pourcentage comprise entre `0%` et `100%`, inclus.

Avec `0` ou `0%`, le remplissage est totalement transparent. Avec `1` ou `100%`, l'élément a l'opacité totale de la valeur `flood-color`, qui peut être partiellement opaque ou non.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'opacité du remplissage d'un filtre

Cet exemple montre le cas d'utilisation basique de `flood-opacity`, et comment la propriété CSS `flood-opacity` prend le dessus sur l'attribut `flood-opacity`.

#### HTML

Nous avons un SVG avec plusieurs éléments {{SVGElement("filter")}}, chacun contenant un enfant {{SVGElement("feFlood")}}. Les `<feFlood>` définissent les filtres comme `seagreen`, le premier étant déclaré par son attribut `flood-opacity` comme totalement opaque et le second comme totalement transparent. Nous avons inclus deux éléments {{SVGElement("rect")}}, chacun avec un attribut de filtre.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" flood-opacity="1" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" flood-opacity="0" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Nous définissons la {{CSSxRef("height")}}, la {{CSSxRef("width")}}, la {{CSSxRef("x")}} et la {{CSSxRef("y")}}, la position de nos rectangles avec le CSS, et nous incluons un dégradé linéaire répété comme {{CSSxRef("background-image")}} sur le SVG afin que l'opacité de la couleur de remplissage soit plus visible&nbsp;:

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #cccccc 0px 10px
  );
}
rect {
  width: 100px;
  height: 100px;
  x: 10px;
  y: 10px;
}
#r2 {
  x: 150px;
}
```

Nous appliquons ensuite différentes valeurs d'opacité de remplissage aux éléments `<feFlood>` en utilisant la propriété CSS `flood-opacity`&nbsp;:

```css
#flood1 feFlood {
  flood-opacity: 0.5;
}
#flood2 feFlood {
  flood-opacity: 90%;
}
```

#### Résultat

{{EmbedLiveSample("Définir l'opacité du remplissage d'un filtre", 300, 220)}}

Les attributs définissaient le premier carré comme totalement opaque et le second comme totalement transparent, mais ces valeurs ont été remplacées par les valeurs CSS `flood-opacity`. Les filtres vert marin sont respectivement opaques à 50% et 90%.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flood-color")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stop-opacity")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("box-shadow")}}
- La propriété {{CSSxRef("text-shadow")}}
- Le type de donnée {{CSSxRef("&lt;filter-function&gt;")}}, incluant la fonction {{CSSxRef("filter-function/opacity", "opacity()")}}
- L'attribut SVG {{SVGAttr("flood-opacity")}}
