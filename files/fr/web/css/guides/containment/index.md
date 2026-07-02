---
title: Compartimentation CSS
short-title: Compartimentation
slug: Web/CSS/Guides/Containment
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Le module de **compartimentation CSS** (ou <i lang="en">containment</i> en anglais) définit la compartimentation et les requêtes de conteneur.

La compartimentation permet d'isoler des sous-arbres de la page du reste du DOM. Le navigateur peut alors améliorer les performances en optimisant le rendu de ces parties indépendantes.

Les requêtes de conteneur sont similaires aux [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries) basées sur les dimensions, sauf que les requêtes sont basées sur les dimensions d'un élément conteneur spécifique défini comme un [contexte de compartimentation](/fr/docs/Web/CSS/Guides/Containment/Container_queries#nommer_les_contextes_de_compartimentation), plutôt que sur les dimensions de la fenêtre d'affichage. Les requêtes de conteneur permettent d'interroger la taille, les propriétés, les valeurs de propriétés d'un conteneur, ou même simplement son nom de conteneur ({{CSSxRef("container-name")}}) attribué pour appliquer conditionnellement des styles CSS. Lors de l'application de ces styles conditionnels, vous pouvez utiliser des unités de longueur de requête de conteneur, qui définissent des longueurs relatives aux dimensions du conteneur de requête. Des propriétés supplémentaires sont définies pour permettre d'établir un élément spécifique comme conteneur de requête et de lui donner un nom spécifique.

## Référence

### Propriétés

- {{CSSxRef("contain")}}
- {{CSSxRef("content-visibility")}}

### Évènements

- {{DOMxRef("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### Interfaces

- {{DOMxRef("ContentVisibilityAutoStateChangeEvent")}}
  - La propriété {{DOMxRef("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}}
- {{DOMxRef("CSSContainerRule")}}
  - {{DOMxRef("CSSContainerRule.containerName")}}
  - {{DOMxRef("CSSContainerRule.containerQuery")}}

## Guides

- [Requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
  - : Guide sur l'utilisation des requêtes de conteneur avec `@container`, y compris le nommage des contextes de compartimentation.

- [Utiliser la compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment/Using)
  - : Décrit les objectifs de base de la compartimentation CSS et comment tirer parti de `contain` et `content-visibility` pour une meilleure expérience utilisateur·ice.

- [Utiliser les requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
  - : Guide sur l'écriture de requêtes de taille et de style de conteneur avec `@container`, y compris les requêtes de style pour les propriétés personnalisées, la syntaxe et les noms des requêtes, et l'imbrication des requêtes de conteneur.

## Concepts associés

- [Mise en page et bloc contenant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)

- Le module [des règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
  - La règle {{CSSxRef("@container")}}
  - La propriété {{CSSxRef("container")}}
  - La propriété {{CSSxRef("container-name")}}
  - La propriété {{CSSxRef("container-type")}}

- Le module [des requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
  - La règle {{CSSxRef("@media")}}
  - [Les opérateurs logiques CSS](/fr/docs/Web/CSS/Reference/At-rules/@media#opérateurs_logiques) (`not`, `or` et `and`)

- Le module [des transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
  - La règle {{CSSxRef("@starting-style")}}
  - La propriété {{CSSxRef("transition-behavior")}}

- Le module [de la taille des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
  - La propriété {{CSSxRef("aspect-ratio")}}
  - La propriété {{CSSxRef("contain-intrinsic-size")}}
  - La propriété {{CSSxRef("contain-intrinsic-inline-size")}}
  - La propriété {{CSSxRef("contain-intrinsic-block-size")}}
  - La propriété {{CSSxRef("contain-intrinsic-width")}}
  - La propriété {{CSSxRef("contain-intrinsic-height")}}

- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
  - Le guide [Utiliser les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)

- Le module [de l'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
  - Le guide [Règles d'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting/At-rules)

## Spécifications

{{Specifications}}

## Voir aussi

- [Utiliser les requêtes de fonctionnalités](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [Utiliser les requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- La règle {{CSSxRef("@supports")}}
