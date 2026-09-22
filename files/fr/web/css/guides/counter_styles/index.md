---
title: Styles de compteur CSS
short-title: Styles de compteur
slug: Web/CSS/Guides/Counter_styles
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module de **styles de compteur CSS** permet de définir vos propres styles de compteur pour gérer l'apparence des [marqueurs](/fr/docs/Web/CSS/Reference/Selectors/::marker) dans les listes et les compteurs dans le [contenu généré](/fr/docs/Web/CSS/Guides/Generated_content). Il permet également d'étendre les styles de liste natifs du navigateur avec vos propres personnalisations.

Bien que nous considérions les compteurs comme des nombres, ce sont en réalité des chaînes de caractères avec des composants pouvant être incrémentés. Le module de styles de compteur définit la règle `@counter-style` avec dix descripteurs, permettant aux développeur·euse·s de définir précisément comment les compteurs sont convertis en chaînes de caractères. Ce module permet de définir quels caractères utiliser pour les puces de compteur, le préfixe à mettre avant le compteur et le suffixe qui vient après, ainsi que la manière de gérer les valeurs négatives. Les descripteurs peuvent également définir une plage pour limiter les valeurs qu'un style de compteur peut gérer, tout en fournissant des styles de secours lorsque la valeur du compteur dépasse la plage définie ou ne peut pas être rendue autrement. Le module permet également de définir comment le compteur est lu à haute voix par les synthétiseurs vocaux.

## Référence

### Propriétés

Aucune propriété n'est définie dans ce module

### Fonctions

- {{CSSxRef("symbols()")}}

### Types de données

- [`<counter-style-name>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
- [`<symbol>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values)
- [`<symbols-type>`](/fr/docs/Web/CSS/Reference/Values/symbols#syntax)

### Règles @ et descripteurs

- {{CSSxRef("@counter-style")}}
  - {{CSSxRef("@counter-style/system","system")}}
  - {{CSSxRef("@counter-style/symbols", "symbols")}}
  - {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}
  - {{CSSxRef("@counter-style/negative", "negative")}}
  - {{CSSxRef("@counter-style/prefix", "prefix")}}
  - {{CSSxRef("@counter-style/suffix", "suffix")}}
  - {{CSSxRef("@counter-style/range", "range")}}
  - {{CSSxRef("@counter-style/pad", "pad")}}
  - {{CSSxRef("@counter-style/speak-as", "speak-as")}}
  - {{CSSxRef("@counter-style/fallback", "fallback")}}

### Interfaces

- L'interface {{DOMxRef("CSSCounterStyleRule")}}

## Guides

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : Décrit comment utiliser les compteurs pour numéroter n'importe quel élément HTML ou effectuer un comptage complexe.

## Concepts associés

Module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)&nbsp;:

- La propriété {{CSSxRef("counter-increment")}}
- La propriété {{CSSxRef("counter-reset")}}
- La propriété {{CSSxRef("counter-set")}}
- La propriété {{CSSxRef("list-style-type")}}
- La propriété raccourcie {{CSSxRef("list-style")}}
- La fonction {{CSSxRef("counter()")}}
- La fonction {{CSSxRef("counters()")}}

Module de [pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)&nbsp;:

- Le pseudo-élément {{CSSxRef("::after")}}
- Le pseudo-élément {{CSSxRef("::before")}}
- Le pseudo-élément {{CSSxRef("::marker")}}

Module de [contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)&nbsp;:

- La propriété {{CSSxRef("content")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module de [pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- Le module de [contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)
- [Styles de compteurs prêts à l'emploi <sup>(angl.)</sup>](https://w3c.github.io/predefined-counter-styles/#builtins) sur W3C (2023)
