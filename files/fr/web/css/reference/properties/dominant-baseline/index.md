---
title: dominant-baseline
slug: Web/CSS/Reference/Properties/dominant-baseline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`dominant-baseline`** définit la [ligne de base](/fr/docs/Glossary/Baseline/Typography) précise utilisée pour aligner le texte et le contenu de niveau en ligne de la boîte. Elle indique également la ligne de base d'alignement par défaut de toutes les boîtes participant à l'alignement sur la ligne de base dans le contexte d'alignement de la boîte. Si elle est présente, elle remplace l'attribut {{SVGAttr("dominant-baseline")}} de la forme.

Les lignes de base sont sélectionnées à partir de la table des lignes de base de la police. S'il n'y a pas de table de lignes de base dans la police nominale, ou si la table ne contient pas d'entrée pour la ligne de base souhaitée, le navigateur peut utiliser des heuristiques pour déterminer la position de la ligne de base désirée.

La propriété `dominant-baseline` sert à déterminer ou à redéfinir une _table des lignes de base mise à l'échelle_. Une table des lignes de base mise à l'échelle est une valeur composée de trois éléments&nbsp;:

1. un identifiant de ligne de base pour la valeur dominante,
2. une table des lignes de base,
3. une taille de police pour la table des lignes de base.

Certaines valeurs de `dominant-baseline` redéfinissent les trois éléments. D'autres ne font que rétablir la taille de police de la table des lignes de base. Lorsque la valeur initiale, `auto`, produirait un résultat non souhaité, cette propriété permet de définir explicitement la table des lignes de base mise à l'échelle désirée.

> [!NOTE]
> La propriété `dominant-baseline` n'a d'effet que sur les éléments SVG {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}}.

## Syntaxe

```css
/* Valeur initiale */
dominant-baseline: auto;

/* Valeurs avec un mot-clé */
dominant-baseline: alphabetic;
dominant-baseline: central;
dominant-baseline: hanging;
dominant-baseline: ideographic;
dominant-baseline: mathematical;
dominant-baseline: middle;
dominant-baseline: text-bottom;
dominant-baseline: text-top;

/* Valeurs globales */
dominant-baseline: inherit;
dominant-baseline: initial;
dominant-baseline: revert;
dominant-baseline: revert-layer;
dominant-baseline: unset;
```

### Valeurs

- `auto`
  - : Si cette propriété est appliquée à un élément SVG {{SVGElement("text")}}, la valeur calculée dépend de la valeur de l'attribut SVG {{SVGAttr("writing-mode")}}.

    Si le mode d'écriture ({{SVGAttr("writing-mode")}}) est horizontal, la valeur du composant `dominant-baseline` est `alphabetic`. Sinon, si {{SVGAttr("writing-mode")}} est vertical, la valeur du composant `dominant-baseline` est `central`.

    Si cette propriété est appliquée à un élément SVG {{SVGElement("tspan")}} ou {{SVGElement("textPath")}}, les composants dominant-baseline et `baseline-table` restent identiques à ceux de l'élément parent de contenu textuel.

    Si la valeur calculée de {{SVGAttr("baseline-shift")}} déplace effectivement la ligne de base, le composant `baseline-table` font-size est défini sur la valeur de l'attribut SVG {{SVGAttr("font-size")}} de l'élément sur lequel l'attribut `dominant-baseline` apparaît, sinon la taille de police de la table des lignes de base reste identique à celle de l'élément.

    S'il n'y a pas d'élément parent de contenu textuel, la valeur de la table des lignes de base mise à l'échelle est construite comme pour les éléments SVG {{SVGElement("text")}}.

- `alphabetic`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `alphabetic`, la table des lignes de base dérivée est construite en utilisant la table `alphabetic` de la police, et la taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `central`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `central`. La table des lignes de base dérivée est construite à partir des lignes de base définies dans la table de la police. Cette table de la police est choisie selon l'ordre de priorité suivant des noms de tables&nbsp;: `ideographic`, `alphabetic`, `hanging`, `mathematical`. La taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `hanging`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `hanging`, la table des lignes de base dérivée est construite en utilisant la table `hanging` de la police, et la taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `ideographic`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `ideographic`, la table des lignes de base dérivée est construite en utilisant la table `ideographic` de la police, et la taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `mathematical`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `mathematical`, la table des lignes de base dérivée est construite en utilisant la table `mathematical` de la police, et la taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `middle`
  - : L'identifiant de ligne de base pour la valeur dominante est défini sur `middle`. La table des lignes de base dérivée est construite à partir des lignes de base définies dans une table de la police. Cette table de la police est choisie selon l'ordre de priorité suivant des noms de tables&nbsp;: `ideographic`, `alphabetic`, `hanging`, `mathematical`. La taille de police de la table des lignes de base est modifiée selon la valeur de l'attribut SVG {{SVGAttr('font-size')}} de l'élément ou la propriété CSS {{CSSxRef('font-size')}}, si elle est définie.
- `text-bottom`
  - : Le bord _sous la ligne_ est utilisé comme ligne de base, ce qui correspond généralement au bord inférieur de la boîte d'em de la police.
- `text-top`
  - : Le bord _au-dessus de la ligne_ est utilisé comme ligne de base, ce qui correspond généralement au bord supérieur de la boîte d'em de la police.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```html
<svg viewBox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">alphabetic</text>
  <text x="50" y="60">central</text>
  <text x="50" y="100">hanging</text>
  <text x="50" y="140">ideographic</text>
  <text x="250" y="20">mathematical</text>
  <text x="250" y="60">middle</text>
  <text x="250" y="100">text-bottom</text>
  <text x="250" y="140">text-top</text>
  <path
    d="M   0,20 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0"
    stroke="grey" />
  <text x="0" y="20" fill="red">auto</text>
  <text x="0" y="60" fill="red">auto</text>
  <text x="0" y="100" fill="red">auto</text>
  <text x="0" y="140" fill="red">auto</text>
</svg>
```

```css
text {
  font-size: 20px;
}
text:nth-of-type(1) {
  dominant-baseline: alphabetic;
}
text:nth-of-type(2) {
  dominant-baseline: central;
}
text:nth-of-type(3) {
  dominant-baseline: hanging;
}
text:nth-of-type(4) {
  dominant-baseline: ideographic;
}
text:nth-of-type(5) {
  dominant-baseline: mathematical;
}
text:nth-of-type(6) {
  dominant-baseline: middle;
}
text:nth-of-type(7) {
  dominant-baseline: text-bottom;
}
text:nth-of-type(8) {
  dominant-baseline: text-top;
}
```

{{EmbedLiveSample("Exemples", 750, 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('alignment-baseline')}}
- La propriété {{CSSxRef('text-anchor')}}
- La propriété {{CSSxRef('vertical-align')}}
- L'attribut SVG {{SVGAttr('dominant-baseline')}}
