---
title: Propriété CSS `overscroll-behavior-x`
short-title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-x`** définit le comportement du navigateur lorsqu'il atteint la limite horizontale d'une zone de défilement.

Voir {{CSSxRef("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-x: auto; /* Par défaut */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Valeurs globales */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `auto`
  - : Le dépassement de la zone de défilement se déroule normalement.
- `contain`
  - : Le comportement de dépassement de la zone de défilement par défaut (par exemple, les effets de «&nbsp;rebond&nbsp;») est observé à l'intérieur de l'élément où cette valeur est définie. Cependant, aucune {{Glossary("Scroll_chaining", "chaîne de défilement")}} ne se produit sur les zones de défilement voisines&nbsp;; les éléments sous-jacents ne défilent pas. La valeur `contain` désactive la navigation native du navigateur, y compris le geste de rafraîchissement vertical par glissement et la navigation horizontale par balayage.
- `none`
  - : Aucune chaîne de défilement ne se produit vers les zones de défilement voisines et le comportement de dépassement de la zone de défilement par défaut est empêché.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empêcher un élément sous-jacent de défiler horizontalement

Dans notre [exemple `overscroll-behavior-x` <sup>(angl.)</sup>](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (voir également [le code source <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)), nous avons deux boîtes de niveau bloc, l'une à l'intérieur de l'autre. La boîte externe a une grande largeur ({{CSSxRef("width")}}) définie dessus afin que la page puisse défiler horizontalement. La boîte interne a une petite largeur (et {{CSSxRef("height")}}) définie dessus afin qu'elle s'adapte confortablement à l'intérieur de la fenêtre d'affichage, mais son contenu a une grande largeur afin qu'il puisse également défiler horizontalement.

Par défaut, lorsque la boîte interne est défilée et qu'une limite de défilement est atteinte, toute la page commence à défiler, ce qui n'est probablement pas ce que nous voulons. Pour éviter cela, vous pouvez définir `overscroll-behavior-x: contain` sur la boîte interne&nbsp;:

```css
main > div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("overscroll-behavior")}}
- La propriété {{CSSxRef("overscroll-behavior-y")}}
- La propriété {{CSSxRef("overscroll-behavior-inline")}}
- La propriété {{CSSxRef("overscroll-behavior-block")}}
- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
