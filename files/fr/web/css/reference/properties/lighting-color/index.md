---
title: lighting-color
slug: Web/CSS/Reference/Properties/lighting-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`lighting-color`** définit la couleur de la source lumineuse pour les primitives de filtre d'éclairage SVG {{SVGElement("feDiffuseLighting")}} et {{SVGElement("feSpecularLighting")}} à l'intérieur d'un filtre ({{SVGElement("filter")}}) SVG. Si elle est présente, elle remplace l'attribut {{SVGAttr("lighting-color")}} de l'élément.

> [!NOTE]
> La propriété `lighting-color` ne s'applique qu'aux éléments {{SVGElement("feDiffuseLighting")}} et {{SVGElement("feSpecularLighting")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de type <color> */
lighting-color: red;
lighting-color: hsl(120deg 75% 25% / 60%);
lighting-color: currentColor;

/* Valeurs globales */
lighting-color: inherit;
lighting-color: initial;
lighting-color: revert;
lighting-color: revert-layer;
lighting-color: unset;
```

### Valeurs

- {{CSSxRef("color_value", "&lt;color&gt;")}}
  - : La couleur de l'éclairage. Cela peut être n'importe quelle valeur CSS {{CSSxRef("color_value", "&lt;color&gt;")}} valide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la couleur de l'éclairage du filtre

Cet exemple montre le cas d'utilisation de base de `lighting-color`, et comment la propriété CSS `lighting-color` prend le dessus sur l'attribut `lighting-color`.

#### HTML

Nous avons un SVG avec deux éléments {{SVGElement("filter")}}, l'un avec un enfant `<feDiffuseLighting>` et l'autre avec un enfant `<feSpecularLighting>`. Chacun inclut l'attribut SVG `lighting-color` définissant la couleur de l'éclairage à `red`. Ces deux enfants possèdent un {{SVGElement("fePointLight")}}, l'enfant requis qui définit la source lumineuse. Nous avons inclus deux éléments {{SVGElement("rect")}} avec un attribut de filtre&nbsp;; c'est là que les filtres seront affichés.

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feDiffuseLighting lighting-color="red">
      <fePointLight x="75" y="30" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="flood2">
    <feSpecularLighting specularExponent="5" lighting-color="red">
      <fePointLight x="225" y="75" z="5" />
    </feSpecularLighting>
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

Nous définissons la taille et la position de notre `<rect>` à l'aide des propriétés CSS {{CSSxRef("height")}}, {{CSSxRef("width")}}, {{CSSxRef("x")}} et {{CSSxRef("y")}}. Nous ajoutons également une image d'arrière-plan au SVG pour rendre toute transparence alpha de couleur plus visible&nbsp;:

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

Nous appliquons ensuite différentes valeurs de couleur d'éclairage aux éléments enfants du filtre à l'aide de la propriété CSS `lighting-color`. Nous utilisons une couleur nommée et une couleur hexadécimale à 3 chiffres, mais nous pouvons utiliser n'importe quelle syntaxe de couleur CSS valide&nbsp;:

```css
feDiffuseLighting {
  lighting-color: blue;
}

feSpecularLighting {
  lighting-color: #ff0099;
}
```

#### Résultats

{{EmbedLiveSample("Définir la couleur de l'éclairage du filtre", 300, 220)}}

Les attributs ont défini la couleur des deux filtres lumineux comme `red`, mais ces valeurs ont été remplacées par les valeurs CSS `lighting-color`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("color")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("flood-color")}}
- La propriété {{CSSxRef("stop-color")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("flood-opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;filter-function&gt;")}}
- L'attribut SVG {{SVGAttr("lighting-color")}}
