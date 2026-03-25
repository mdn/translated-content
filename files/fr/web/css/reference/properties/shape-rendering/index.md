---
title: shape-rendering
slug: Web/CSS/Reference/Properties/shape-rendering
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`shape-rendering`** fournit des indications au moteur de rendu sur les compromis à effectuer lors du rendu de formes telles que des chemins, des cercles ou des rectangles.
Elle n'a d'effet que sur les éléments SVG {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} et {{SVGElement("rect")}}. Si elle est déclarée explicitement, la valeur de la propriété CSS remplace toute valeur de l'attribut {{SVGAttr("shape-rendering")}} de l'élément.

## Syntaxe

```css
shape-rendering: auto;
shape-rendering: crispEdges;
shape-rendering: geometricPrecision;
shape-rendering: optimizeSpeed;

/* Valeurs globales */
shape-rendering: inherit;
shape-rendering: initial;
shape-rendering: revert;
shape-rendering: revert-layer;
shape-rendering: unset;
```

### Valeurs

Les valeurs de type {{CSSxRef("&lt;length&gt;")}} et {{CSSxRef("&lt;percentage&gt;")}} désignent le centre horizontal du cercle ou de l'ellipse.

- `auto`
  - : Cette valeur indique aux agents utilisateurs de faire des compromis afin d'équilibrer la vitesse, la netteté des bords et la précision géométrique, en accordant plus d'importance à la précision géométrique qu'à la vitesse et à la netteté des bords.
- `crispEdges`
  - : Cette valeur indique aux agents utilisateurs de privilégier le contraste des bords par rapport à la précision géométrique ou à la vitesse de rendu. Le rendu final est susceptible de ne pas utiliser des techniques telles que l'anticrénelage. Elle peut également ajuster les positions et les largeurs des lignes afin d'aligner les bords avec les pixels de l'appareil.
- `geometricPrecision`
  - : Cette valeur indique aux agents utilisateurs de privilégier la précision géométrique par rapport à la vitesse ou à la netteté des bords. Le rendu final peut impliquer des techniques telles que l'anticrénelage.
- `optimizeSpeed`
  - : Cette valeur indique aux agents utilisateurs de privilégier la vitesse de rendu par rapport à la précision géométrique ou à la netteté des bords. Le rendu final est susceptible de ne pas utiliser des techniques telles que l'anticrénelage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Pour montrer les différents rendus, nous créons un ensemble de quatre ellipses de taille et de forme égales.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
  <ellipse cx="50" cy="60" rx="40" ry="60" />
  <ellipse cx="150" cy="60" rx="40" ry="60" />
  <ellipse cx="250" cy="60" rx="40" ry="60" />
  <ellipse cx="350" cy="60" rx="40" ry="60" />
</svg>
```

Nous appliquons ensuite les quatre valeurs de `shape-rendering`, une par ellipse.

```css
ellipse:nth-of-type(1) {
  shape-rendering: crispEdges;
}
ellipse:nth-of-type(2) {
  shape-rendering: geometricPrecision;
}
ellipse:nth-of-type(3) {
  shape-rendering: optimizeSpeed;
}
ellipse:nth-of-type(4) {
  shape-rendering: auto;
}
```

Le SVG résultant est montré ici. Les première et troisième ellipses (en comptant de gauche à droite) sont plus susceptibles de présenter des bords irréguliers, tandis que la deuxième devrait avoir une apparence plus lisse. L'apparence de la quatrième et dernière ellipse sera dictée par les compromis spécifiques effectués par l'agent utilisateur que vous utilisez pour visualiser l'exemple.

{{EmbedLiveSample("Exemples", 400, 240)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("shape-rendering")}}
