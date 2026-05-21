---
title: Propriété CSS `stop-color`
short-title: stop-color
slug: Web/CSS/Reference/Properties/stop-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`stop-color`** définit la couleur à utiliser pour un élément SVG {{SVGElement("stop")}} dans un dégradé. Si elle est présente, elle remplace l'attribut {{SVGAttr("stop-color")}} de l'élément.

> [!NOTE]
> La propriété `stop-color` ne s'applique qu'aux éléments {{SVGElement('stop')}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de type <color> */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentColor;

/* Valeurs globales */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### Valeurs

- {{CSSxRef("color_value", "&lt;color>")}}
  - : La couleur du remplissage. Cela peut être n'importe quelle valeur CSS {{CSSxRef("color_value", "&lt;color>")}} valide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`stop-color = <color>`)}}

## Exemples

### Définir les arrêts de couleur des dégradés SVG

Cet exemple montre l'utilisation de base de `stop-color` et comment la propriété CSS `stop-color` prend le pas sur l'attribut `stop-color`.

#### HTML

Nous avons un SVG avec trois {{SVGElement("rect")}} carrés et trois {{SVGElement("linearGradient")}} éléments. Chaque dégradé a quatre {{SVGElement("stop")}} éléments créant des dégradés allant du noir au blanc puis du blanc au gris&nbsp;; la seule différence entre eux est la valeur de l'`id`.

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

Nous incluons un contour ({{CSSxRef("stroke")}}) et une largeur de contour ({{CSSxRef("stroke-width")}}) pour délimiter le rectangle. Nous définissons les couleurs des premiers et derniers arrêts de chaque dégradé, en remplaçant leurs valeurs d'attribut `stop-color`, en utilisant la propriété `stop-color`. Différentes syntaxes CSS {{CSSxRef("color_value", "&lt;color>")}} sont présentées.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333333;
  stroke-width: 1px;
}

#myGradient1 {
  stop:first-of-type {
    stop-color: #66ccff;
  }
  stop:last-of-type {
    stop-color: #f4aab9;
  }
}
#myGradient2 {
  stop:first-of-type {
    stop-color: yellow;
  }
  stop:last-of-type {
    stop-color: purple;
  }
}
#myGradient3 {
  stop:first-of-type {
    stop-color: hsl(0deg 90% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 60% 50%);
  }
}
```

#### Résultats

{{EmbedLiveSample("Définir les arrêts de couleur des dégradés SVG", 300, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("stop-color")}}
- Les propriétés de présentation&nbsp;: `stop-color`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill-opacity")}}, {{CSSxRef("fill-rule")}}, {{CSSxRef("fill")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-opacity")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color>")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
