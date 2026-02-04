---
title: flood-color
slug: Web/CSS/Reference/Properties/flood-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`flood-color`** définit la couleur de la sous-région primitive du filtre en cours dans les éléments SVG {{SVGElement("feFlood")}} et {{SVGElement("feDropShadow")}} à l'intérieur d'un {{SVGElement("filter")}}. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("flood-color")}} de l'élément.

> [!NOTE]
> La propriété `flood-color` ne s'applique qu'aux éléments SVG {{SVGElement("feFlood")}} et {{SVGElement("feDropShadow")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de type <color> */
flood-color: red;
flood-color: hsl(120deg 75% 25% / 60%);
flood-color: currentColor;

/* Valeurs globales */
flood-color: inherit;
flood-color: initial;
flood-color: revert;
flood-color: revert-layer;
flood-color: unset;
```

### Valeurs

- {{CSSxRef("color_value", "&lt;color>")}}
  - : La couleur du remplissage. Cela peut être n'importe quelle valeur CSS {{CSSxRef("color_value", "&lt;color>")}} valide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la couleur du remplissage d'un filtre

Cet exemple montre le cas d'utilisation basique de `flood-color`, et comment la propriété CSS `flood-color` prend le dessus sur l'attribut `flood-color`.

#### HTML

Nous avons un SVG avec deux éléments {{SVGElement("filter")}}, chacun contenant un enfant {{SVGElement("feFlood")}}. Chaque élément `<feFlood>` inclut l'attribut SVG `flood-color` qui définit la couleur du remplissage à `seagreen`. Nous avons inclus deux éléments {{SVGElement("rect")}} avec un attribut de filtre&nbsp;; c'est là que les filtres seront affichés.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Nous définissons la taille et la position de notre `<rect>` à l'aide des propriétés CSS {{CSSxRef("height")}}, {{CSSxRef("width")}}, {{CSSxRef("x")}} et {{CSSxRef("y")}}&nbsp;:

```css
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

Nous appliquons ensuite différentes valeurs de couleur de remplissage aux éléments `<feFlood>` en utilisant la propriété CSS `flood-color`. Nous utilisons une couleur nommée et une couleur hexadécimale à trois chiffres, mais il est possible d'utiliser n'importe quelle syntaxe de couleur CSS valide&nbsp;:

```css
#flood1 feFlood {
  flood-color: rebeccapurple;
}
#flood2 feFlood {
  flood-color: #ff3366;
}
```

#### Résultat

{{EmbedLiveSample("Définir la couleur du remplissage d'un filtre", 300, 220)}}

Les attributs définissaient les carrés en vert marin, mais ces valeurs ont été remplacées par les valeurs CSS `flood-color`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flood-opacity")}}
- La propriété {{CSSxRef("color")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("lighting-color")}}
- La propriété {{CSSxRef("stop-color")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("box-shadow")}}
- La propriété {{CSSxRef("text-shadow")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color>")}}
- Le type de donnée {{CSSxRef("&lt;filter-function&gt;")}}
- L'attribut SVG {{SVGAttr("flood-color")}}
