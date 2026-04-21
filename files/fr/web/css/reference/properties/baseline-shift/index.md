---
title: Propriété CSS `baseline-shift`
short-title: baseline-shift
slug: Web/CSS/Reference/Properties/baseline-shift
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`baseline-shift`** repositionne la ligne de base dominante d'un élément de texte par rapport à la ligne de base dominante de son élément parent de contenu textuel. L'élément déplacé peut être un indice ou un exposant. Si la propriété est présente, la valeur remplace l'attribut {{SVGAttr("baseline-shift")}} de l'élément.

> [!NOTE]
> La propriété `baseline-shift` ne s'applique qu'aux éléments SVG {{SVGElement("textPath")}} et {{SVGElement("tspan")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de type <length-percentage> */
baseline-shift: -0.5px;
baseline-shift: 4%;

/* Valeurs avec un mot-clé */
baseline-shift: sub;
baseline-shift: super;

/* Valeurs globales */
baseline-shift: inherit;
baseline-shift: initial;
baseline-shift: revert;
baseline-shift: revert-layer;
baseline-shift: unset;
```

### Valeurs

- `sub`
  - : La ligne de base dominante est déplacée à la position par défaut pour les indices.
- `super`
  - : La ligne de base dominante est déplacée à la position par défaut pour les exposants.
- `<length-percentage>`
  - : Rehausse (si positif) ou abaisse (si négatif) la ligne de base dominante de l'élément de contenu textuel de la longueur ou du pourcentage spécifié, le pourcentage étant relatif à la ligne de base dominante de la propriété {{CSSxRef("line-height")}} de l'élément parent de contenu textuel.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser des valeurs avec mot-clé

Cet exemple démontre l'utilisation de base des valeurs de mot-clé `sub` et `super` de la propriété `baseline-shift`, ainsi que la manière dont la propriété CSS `baseline-shift` prend le pas sur l'attribut SVG `baseline-shift`.

#### HTML

Nous définissons un SVG avec deux éléments SVG {{SVGElement("text")}}, chacun contenant un élément {{SVGElement("tspan")}} avec l'attribut SVG {{SVGAttr("baseline-shift")}} défini dessus.

```html hidden
<p>SVG d'origine</p>
```

```html
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    un tuyau en exposant !
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    un tuyau en indice !
  </text>
</svg>
```

```html hidden
<p><code>baseline-shift: sub;</code></p>
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    un tuyau en exposant !
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    un tuyau en indice !
  </text>
</svg>
<p><code>baseline-shift: super;</code></p>
<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    un tuyau en exposant !
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    un tuyau en indice !
  </text>
</svg>
```

Le SVG est répété trois fois&nbsp;; nous n'avons montré qu'une seule copie pour des raisons de concision.

#### CSS

Nous rendons le texte de toutes les trois images SVG grand et cursif, en ajoutant un peu de couleur pour différencier le contenu des éléments `<tspan>`.

Nous définissons la valeur de la propriété `baseline-shift` sur `sub` pour l'élément `<tspan>` du deuxième SVG et sur `super` pour l'élément `<tspan>` du troisième SVG. Le premier SVG n'a pas de CSS supplémentaire appliqué.

```css
text {
  font-family: cursive;
  font-size: 2rem;
}
[baseline-shift="sub"] {
  fill: deeppink;
}
[baseline-shift="super"] {
  fill: rebeccapurple;
}

svg:nth-of-type(2) tspan {
  baseline-shift: sub;
}
svg:nth-of-type(3) tspan {
  baseline-shift: super;
}
```

```css hidden
svg {
  border: 1px solid;
  width: 15em;
  margin-bottom: 10px;
}
@supports not (baseline-shift: sub) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété `baseline-shift`.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em;
  }
}
```

#### Résultats

{{EmbedLiveSample("Utiliser des valeurs avec mot-clé", 300, 370)}}

Les valeurs de l'attribut SVG `baseline-shift` sont utilisées dans le premier SVG. Dans les deuxième et troisième SVG, les valeurs CSS de `baseline-shift` remplacent les valeurs de l'attribut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("baseline-shift")}}
- Propriétés de présentation&nbsp;: `baseline-shift`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill-opacity")}}, {{CSSxRef("fill-rule")}}, {{CSSxRef("fill")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-color")}}, {{CSSxRef("stop-opacity")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
