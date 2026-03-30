---
title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-y`** définit le comportement du navigateur lorsqu'il atteint la limite verticale d'une zone de défilement.

Voir {{CSSxRef("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-y: auto; /* Par défaut */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Valeurs globales */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

La propriété `overscroll-behavior-x` est définie avec un des mots-clés définis ci-après.

### Valeurs

- `auto`
  - : Le dépassement de la zone de défilement se déroule normalement.
- `contain`
  - : Le comportement de dépassement de la zone de défilement par défaut (par exemple, les effets de «&nbsp;rebond&nbsp;») est observé à l'intérieur de l'élément où cette valeur est définie. Cependant, aucune {{Glossary("Scroll_chaining", "chaîne de défilement")}} ne se produit sur les zones de défilement voisines&nbsp;; les éléments sous-jacents ne défileront pas. La valeur `contain` désactive la navigation native du navigateur, y compris le geste de rafraîchissement vertical par glissement et la navigation horizontale par balayage.
- `none`
  - : Aucune chaîne de défilement ne se produit vers les zones de défilement voisines et le comportement de dépassement de la zone de défilement par défaut est empêché.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empêcher un élément sous-jacent de défiler verticalement

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Voir {{CSSxRef("overscroll-behavior")}} pour un exemple complet et plus de détails.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("overscroll-behavior")}}
- La propriété {{CSSxRef("overscroll-behavior-x")}}
- La propriété {{CSSxRef("overscroll-behavior-inline")}}
- La propriété {{CSSxRef("overscroll-behavior-block")}}
- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
