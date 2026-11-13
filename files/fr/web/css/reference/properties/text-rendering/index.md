---
title: Propriété CSS `text-rendering`
short-title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-rendering`** donne de l'information au moteur de rendu sur ce qu'il doit optimiser lors de l'affichage du texte.

Le navigateur fait des compromis entre la vitesse, la lisibilité et la précision géométrique.

> [!NOTE]
> La propriété `text-rendering` est une propriété SVG qui n'est définie dans aucun standard CSS. Toutefois, les navigateurs utilisant Gecko et WebKit permettent d'appliquer cette propriété à du contenu HTML ou XML sur Windows, Mac OS X et Linux.

Un effet très visible est `text-rendering : optimizeLegibility;`, qui active les ligatures (ff, fi, fl etc.) dans les textes en dessous de 20px pour certains polices (par exemple, _Calibri, Candara, Constantia_ et _Corbel_ de Microsoft, ou la famille _DejaVu_).

## Syntaxe

```css
/* Avec un mot-clé */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* Valeurs globales */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### Valeurs

- `auto`
  - : Le navigateur fait un choix éclairé sur la manière d'optimiser la vitesse, lisibilité et la précision géométrique lors de l'affichage du texte. Pour en savoir plus sur la manière dont est supportée cette valeur, reportez-vous au tableau de compatibilité.

- `optimizeSpeed`
  - : Le navigateur privilégie la vitesse de rendu par rapport à la lisibilité et la précision géométrique lors de l'affichage du texte. Cela désactive les ligatures et le crénage.

- `optimizeLegibility`
  - : Le navigateur privilégie la lisibilité par rapport à la vitesse de rendu ou la précision géométrique. Ceci active le crénage et les ligatures.

- `geometricPrecision`
  - : Le navigateur privilégie la précision géométrique par rapport à la vitesse de rendu et la lisibilité. Certains aspects d'une police — comme le crénage — ne se mettent pas à l'échelle de manière linéaire, donc `geometricPrecision` peut rendre agréables à l'œil les textes utilisant ces polices.

    Avec SVG, lorsque le texte est agrandi ou réduit, le navigateur calcule la taille finale du texte (qui est la taille de police définie et le facteur appliqué) et demande une police de cette taille calculée au système de police de la plateforme. Mais si vous demandez une police de taille 9 avec un facteur de 140 %, la taille résultante de 12,6 n'existe pas dans la système de polices, donc le navigateur arrondi la taille de police à 12 dans ce cas. Ce qui aboutit à une mise à l'échelle en escalier du texte.

    Mais la propriété `geometricPrecision` — lorsqu'elle est complètement supportée par le moteur de rendu — permet de mettre à l'échelle le texte de manière continue. Pour les facteurs de mise à l'échelle élevés, il est possible d'obtenir un rendu de texte moins-que-joli, mais de la taille que vous attendez — et pas arrondi à la taille supportée par Windows ou Linux la plus proche.

    La valeur `geometricPrecision` n'optimise ni la lisibilité ni les performances. Elle est généralement utile dans le contexte SVG, où vous souhaitez que votre graphique soit mis à l'échelle fidèlement sans déformer les dimensions du texte.

    > [!NOTE]
    > WebKit applique précisément la valeur définie, mais Gecko traite la valeur de la même manière que `optimizeLegibility`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Application automatique de `optimizeLegibility`

Cet exemple illustre comment `optimizeLegibility` est automatiquement utilisé par les navigateurs lorsque `font-size` est inférieure à `20px`.

#### HTML

```html
<p class="small">LYoWAT - ff fi fl ffl</p>
<p class="big">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
.small {
  font:
    19.9px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
.big {
  font:
    20px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
```

#### Résultat

{{EmbedLiveSample("Application automatique de `optimizeLegibility`")}}

### `optimizeSpeed` et `optimizeLegibility`

Cet exemple illustre la différence d'apparence entre `optimizeSpeed` et `optimizeLegibility` (cette différence peut varier d'un navigateur à l'autre).

#### HTML

```html
<p class="speed">LYoWAT - ff fi fl ffl</p>
<p class="legibility">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
p {
  font:
    1.5em "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}

.speed {
  text-rendering: optimizeSpeed;
}
.legibility {
  text-rendering: optimizeLegibility;
}
```

#### Résultat

{{EmbedLiveSample("`optimizeSpeed` et `optimizeLegibility`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Dessiner du texte dans un `<canvas>`](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- Le module [de décoration de texte CSS](/fr/docs/Web/CSS/Guides/Text_decoration)
- Propriétés CSS associées&nbsp;:
  - {{CSSxRef("text-decoration")}} (et ses propriétés abrégées, telles que {{CSSxRef("text-decoration-line")}}, {{CSSxRef("text-decoration-style")}}, et {{CSSxRef("text-decoration-thickness")}})
  - {{CSSxRef("text-emphasis")}} (et ses propriétés abrégées, y compris {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-emphasis-position")}}, et {{CSSxRef("text-emphasis-style")}})
  - {{CSSxRef("text-shadow")}}
  - {{CSSxRef("text-transform")}}
- L'attribut [SVG](/fr/docs/Web/SVG) {{SVGAttr("text-rendering")}}
- [SVG et CSS](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
