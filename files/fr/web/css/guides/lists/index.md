---
title: Listes et compteurs CSS
short-title: Listes et compteurs
slug: Web/CSS/Guides/Lists
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module **des listes et compteurs CSS** permet de mettre en forme et de positionner les puces des éléments de liste et de manipuler leurs valeurs à l'aide d'une combinaison de chaînes de caractères, de compteurs et d'autres fonctionnalités.

Un marqueur d'élément de liste, qu'il s'agisse d'un symbole de puce ou d'un compteur ordinal, est sa caractéristique définissante. Les éléments de liste ne se limitent pas aux éléments HTML {{HTMLElement("li")}} imbriqués dans les éléments HTML {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}. Au contraire, les éléments de liste sont tous les éléments pour lesquels `display: list-item` est défini.

Ce module définit les fonctionnalités CSS permettant de définir et de réinitialiser les compteurs d'une liste, de définir quels [styles de compteur](/fr/docs/Web/CSS/Guides/Counter_styles) ou symboles utiliser comme marqueurs, et de positionner ces marqueurs. Il offre également aux développeur·euse·s la possibilité de créer des marqueurs personnalisés.

## Référence

### Propriétés

- {{CSSxRef("counter-increment")}}
- {{CSSxRef("counter-reset")}}
- {{CSSxRef("counter-set")}}
- {{CSSxRef("list-style-image")}}
- {{CSSxRef("list-style-type")}}
- {{CSSxRef("list-style-position")}}
- {{CSSxRef("list-style")}} (raccourcie)

Il existe également une propriété `marker-side`, qui n'est pas encore entièrement définie ou implémentée.

### Pseudo-éléments

- {{CSSxRef("::marker")}}

### Fonctions

- {{CSSxRef("counter")}}
- {{CSSxRef("counters")}}

### Types de donnée

- [`<counter>`](/fr/docs/Web/CSS/Reference/Properties/content#counter)
- [`<counter-name>`](/fr/docs/Web/CSS/Reference/Values/counter#counter-name)
- [`<counter-style>`](/fr/docs/Web/CSS/Reference/Values/counter#counter-style)

## Guides

- [Styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
  - La règle {{CSSxRef("@counter-style")}}
  - Le type de donnée [`<counter-style-name>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - Le type de donnée [`<symbol>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#valeurs)
  - La fonction {{CSSxRef("symbols()")}}

<!-- -->

- L'élément {{HTMLElement("ol")}} et ses attributs `start`, `reversed` et `type`
- L'élément {{HTMLElement("ul")}} et son attribut `type`
- L'élément {{HTMLElement("li")}} et ses attributs `type` et `value`

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [des pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- Le module [du contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)
