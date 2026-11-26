---
title: Propriété CSS `overscroll-behavior-x`
short-title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-x`** définit le comportement du navigateur lorsqu'il atteint la limite horizontale d'une zone de défilement.

Voir {{CSSxRef("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-x: auto; /* Par défaut */
overscroll-behavior-x: chain;
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
  - : Permet le comportement par défaut à une limite de défilement. Le défilement peut continuer dans un autre conteneur de défilement.
- `chain`
  - : Permet au défilement de continuer en dehors du conteneur de défilement, mais empêche les effets de «&nbsp;rebondissement&nbsp;» de dépassement de défilement.
- `contain`
  - : Empêche le défilement de continuer en dehors du conteneur de défilement. Les effets de «&nbsp;rebondissement&nbsp;» peuvent toujours se produire.
- `none`
  - : Empêche le défilement de continuer en dehors du conteneur de défilement et empêche également les effets de «&nbsp;rebondissement&nbsp;» de dépassement de défilement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empêcher un élément sous-jacent de défiler horizontalement

Dans notre [exemple `overscroll-behavior-x` <sup>(angl.)</sup>](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (voir également [le code source <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)), nous avons deux boîtes de niveau bloc, l'une à l'intérieur de l'autre. La boîte externe a une grande largeur ({{CSSxRef("width")}}) définie dessus afin que la page puisse défiler horizontalement. La boîte interne a une petite largeur (et {{CSSxRef("height")}}) définie dessus afin qu'elle s'adapte confortablement à l'intérieur de la zone d'affichage, mais son contenu a une grande largeur afin qu'il puisse également défiler horizontalement.

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
