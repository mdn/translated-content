---
title: Propriété CSS `overscroll-behavior-y`
short-title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

La propriété [CSS](/fr/docs/Web/CSS) **`overscroll-behavior-y`** définit le comportement du navigateur lorsqu'il atteint la limite verticale d'une zone de défilement.

Voir {{CSSxRef("overscroll-behavior")}} pour plus de détails.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overscroll-behavior-y: auto; /* Par défaut */
overscroll-behavior-y: chain;
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Valeurs globales */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
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

### Prévenir le défilement d'un élément sous-jacent

Dans notre [exemple `overscroll-behavior` <sup>(angl.)</sup>](https://mdn.github.io/css-examples/overscroll-behavior/) (voir également [le code source <sup>(angl.)</sup>](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)), nous présentons une liste de faux contacts sur toute la page, et une boîte de dialogue contenant une fenêtre de chat.

![Une fenêtre de chat contextuelle intitulée « Active chat », montrant une conversation entre Chris et Bob. Derrière la fenêtre de chat se trouve une liste de contacts intitulée « overscroll-behavior demo ».](example.png)

Les deux zones peuvent défiler&nbsp;: normalement, si vous faites défiler la fenêtre de chat jusqu'à atteindre une limite de défilement, la fenêtre de contacts sous-jacente commence également à défiler, ce qui n'est pas souhaitable. Cela peut être évité en utilisant `overscroll-behavior-y` (`overscroll-behavior` fonctionne également) sur la fenêtre de chat, comme ceci&nbsp;:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Nous voulons également nous débarrasser des effets de dépassement de défilement standard lorsque les contacts sont défilés jusqu'en haut ou en bas (par exemple, Chrome sur Android actualise la page lorsque vous faites défiler au-delà de la limite supérieure). Cela peut être évité en définissant `overscroll-behavior-y: none` sur l'élément {{HTMLElement("html")}}&nbsp;:

```css
html {
  margin: 0;
  overscroll-behavior-y: none;
}
```

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
