---
title: Propriété CSS `stop-opacity`
short-title: stop-opacity
slug: Web/CSS/Reference/Properties/stop-opacity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`stop-opacity`** définit l'opacité d'un arrêt de couleur dans un élément SVG {{SVGElement("stop")}} au sein d'un dégradé SVG. Si elle est présente, elle remplace l'attribut {{SVGAttr("stop-opacity")}} de l'élément.

La valeur de la propriété impacte le canal alpha de {{CSSxRef("stop-color")}}&nbsp;; elle peut augmenter la transparence de la couleur d'un `<stop>`, mais ne peut pas rendre la couleur définie par la propriété `stop-color` plus opaque.

> [!NOTE]
> La propriété `stop-opacity` ne s'applique qu'aux éléments SVG {{SVGElement('stop')}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs numériques et pourcentages */
stop-opacity: 0.2;
stop-opacity: 20%;

/* Valeurs globales */
stop-opacity: inherit;
stop-opacity: initial;
stop-opacity: revert;
stop-opacity: revert-layer;
stop-opacity: unset;
```

### Valeurs

La valeur `<opacity-value>` est un nombre ({{CSSxRef("&lt;number&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiquant l'opacité de l'élément `<stop>` du dégradé SVG.

- {{CSSxRef("number")}}
  - : Une valeur numérique comprise entre `0` et `1`, inclusivement.

- {{CSSxRef("percentage")}}
  - : Une valeur en pourcentage comprise entre `0%` et `100%`, inclusivement.

Avec `0` ou `0%`, l'arrêt est entièrement transparent. Avec `1` ou `100%`, l'élément a l'opacité complète de la valeur `stop-color`, qui peut être partiellement opaque ou non.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## Exemples

## Définir l'opacité d'un arrêt de couleur dans un dégradé SVG

Cet exemple montre l'utilisation de base de `stop-opacity` et comment la propriété CSS `stop-opacity` prend le pas sur l'attribut `stop-opacity`.

#### HTML

Nous avons un SVG avec quelques {{SVGElement("polygon")}} étoiles et trois {{SVGElement("linearGradient")}} éléments : chacun a trois {{SVGElement("stop")}} éléments définissant trois arrêts de couleur qui créent un dégradé allant du bleu au blanc puis au rose&nbsp;; la seule différence entre eux est la valeur de leur `id`.

```html
<svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
  </defs>
  <polygon points="40,10 10,100 80,40 0,40 70,100" />
  <polygon points="125,10 95,100 165,40 85,40 155,100" />
  <polygon points="210,10 180,100 250,40 170,40 240,100" />
</svg>
```

#### CSS

Nous incluons un contour ({{CSSxRef("stroke")}}) et une largeur de contour ({{CSSxRef("stroke-width")}}) pour rendre la ligne du chemin du polygone visible.

Chaque `polygon` a un arrière-plan en dégradé défini à l'aide de la propriété {{CSSxRef("fill")}}&nbsp;; l'identifiant (`id`) du dégradé est le paramètre de `url()`. Nous définissons `magenta` comme couleur de secours.

Nous définissons l'opacité des arrêts de chaque dégradé à l'aide de la propriété `stop-opacity`.

Le SVG a un arrière-plan rayé pour rendre les paramètres de transparence plus apparents.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
  background: repeating-linear-gradient(
    to top left,
    white 0 9px,
    black 9px 10px
  );
}
```

```css
polygon {
  stroke: #333333;
  stroke-width: 1px;
}
polygon:nth-of-type(1) {
  fill: url("#myGradient1") magenta;
}
polygon:nth-of-type(2) {
  fill: url("#myGradient2") magenta;
}
polygon:nth-of-type(3) {
  fill: url("#myGradient3") magenta;
}

#myGradient1 stop {
  stop-opacity: 1;
}
#myGradient2 stop {
  stop-opacity: 0.8;
}
#myGradient3 stop {
  stop-opacity: 25%;
}
```

#### Résultats

{{EmbedLiveSample("Définir l'opacité d'un arrêt de couleur dans un dégradé SVG", 300, 200)}}

La première étoile est entièrement opaque. Le remplissage de la deuxième étoile est opaque à 80 % car les arrêts de couleur sont légèrement translucides&nbsp;; la valeur `stop-opacity: 0.8;` a remplacé la valeur de l'attribut d'élément `stop-opacity="1"`. Le remplissage de la dernière étoile est à peine visible avec des arrêts de couleur opaques à 25%. Notez que le contour est le même gris foncé opaque dans tous les cas.

> [!NOTE]
> Parce que nous avons utilisé la même valeur de `stop-opacity` pour tous les éléments `<stop>` voisins dans le dégradé linéaire, nous aurions pu utiliser un seul `<linearGradient>` avec des arrêts entièrement opaques, et définir une valeur pour la propriété {{CSSxRef("fill-opacity")}} de chaque `<polygon>` à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- L'attribut SVG {{SVGAttr("stop-opacity")}}
- Les propriétés de présentation&nbsp;: `stop-opacity`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill-opacity")}}, {{CSSxRef("fill-rule")}}, {{CSSxRef("fill")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-color")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color>")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
