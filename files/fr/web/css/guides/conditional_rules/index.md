---
title: Règles conditionnelles CSS
short-title: Règles conditionnelles
slug: Web/CSS/Guides/Conditional_rules
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Les **règles conditionnelles CSS** définissent les requêtes média et de support CSS, vous permettant de définir des styles qui ne sont appliqués que si des conditions spécifiques sont remplies. Les règles conditionnelles définies dans ce module sont basées sur les capacités de l'appareil, de l'agent utilisateur et de la fenêtre d'affichage. Avec les règles conditionnelles, vous pouvez cibler les styles CSS en fonction des valeurs de requête ou des fonctionnalités du navigateur et de l'appareil, indépendamment du document rendu.

Les premières règles conditionnelles CSS étaient les [types de média](/fr/docs/Web/CSS/Reference/At-rules/@media#types_de_média) définissant le support de destination prévu pour les styles liés, par exemple `screen` ou `print`. Ceux-ci étaient définis comme valeur des attributs `media` des éléments HTML {{HTMLElement("link")}} et {{HTMLElement("style")}} ou comme une liste de types de média séparés par des virgules dans une instruction ou une règle {{CSSxRef("@import")}}. La capacité d'appliquer conditionnellement des règles CSS a été considérablement étendue depuis les implémentations CSS 2.1 et HTML 4.01 qui limitaient les requêtes conditionnelles à quelques types de média.

Les règles conditionnelles CSS incluent désormais les requêtes de fonctionnalités&nbsp;; la règle `@supports` permet de cibler les styles CSS en fonction des capacités CSS de l'agent utilisateur. D'autres conditions incluent les sélecteurs, les formats de police et les technologies de police pris en charge.

Le module des règles conditionnelles CSS étend également `@media` pour permettre l'imbrication des règles @, le module connexe [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries) supprimant les types de média inutilisés et ajoutant de nombreuses fonctionnalités et conditions de média pouvant être ciblées.

Le [module des requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries) définit des règles conditionnelles similaires, mais basées sur le parent d'un élément plutôt que sur la fenêtre d'affichage.

Il est prévu d'étendre davantage les requêtes possibles en ajoutant la règle conditionnelle généralisée `@when` et la règle conditionnelle en chaîne `@else`. Ces deux règles @ ne sont pas encore prises en charge.

## Référence

### Propriétés

- {{CSSxRef("container")}}
- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}

### Règles @ et descripteurs

- {{CSSxRef("@container")}}
  - [`aspect-ratio`](/fr/docs/Web/CSS/Reference/At-rules/@container#aspect-ratio)
  - [`block-size`](/fr/docs/Web/CSS/Reference/At-rules/@container#block-size)
  - [`fallback`](/fr/docs/Web/CSS/Reference/At-rules/@container#fallback)
  - [`height`](/fr/docs/Web/CSS/Reference/At-rules/@container#height)
  - [`inline-size`](/fr/docs/Web/CSS/Reference/At-rules/@container#inline-size)
  - [`orientation`](/fr/docs/Web/CSS/Reference/At-rules/@container#orientation)
  - [`scrollable`](/fr/docs/Web/CSS/Reference/At-rules/@container#scrollable)
  - [`snapped`](/fr/docs/Web/CSS/Reference/At-rules/@container#snapped)
  - [`stuck`](/fr/docs/Web/CSS/Reference/At-rules/@container#stuck)
  - [`width`](/fr/docs/Web/CSS/Reference/At-rules/@container#width)
- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}

Le module des règles conditionnelles CSS introduit également les règles `@else` et `@when`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Fonctions

- [`anchored()`](/fr/docs/Web/CSS/Reference/At-rules/@container#descripteurs_dancrage_du_conteneur)
- [`style()`](/fr/docs/Web/CSS/Reference/At-rules/@container#requêtes_de_style_de_conteneur)
- [`font-tech()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`font-format()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-format)
- [`scroll-state()`](/fr/docs/Web/CSS/Reference/At-rules/@container#descripteurs_détat_de_défilement_du_conteneur)
- [`selector()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#syntaxe_fonctionnelle)
- [`supports()`](/fr/docs/Web/CSS/Reference/At-rules/@import#supports-condition)

Le module des règles conditionnelles CSS introduit également une fonction CSS `media()`. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

### Types de données

- [`<container-name>`](/fr/docs/Web/CSS/Reference/At-rules/@container#container-name)
- [`<style-feature>`](/fr/docs/Web/CSS/Reference/At-rules/@container#requêtes_de_style_de_conteneur)
- [Unités de `<length>` relatives au conteneur](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_au_conteneur)
- [`<media-query>`](/fr/docs/Web/CSS/Guides/Media_queries/Using#syntaxe)
- [`<supports-condition>`](/fr/docs/Web/CSS/Reference/At-rules/@import#importer_des_règles_css_conditionnées_par_la_prise_en_charge_de_fonctionnalités)
- `<supports-feature>` (voir [`supports()`](/fr/docs/Web/CSS/Reference/At-rules/@import#supports-condition))

### Interfaces

- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSMediaRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- La méthode {{DOMxRef("CSS.supports_static", "supports()")}}

### Termes et définitions du glossaire

- {{Glossary("media/CSS", "Média")}}
- Requête de support (Voir [requête de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries))

## Guides

- [Utiliser les requêtes de fonctionnalités CSS](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
  - : Appliquer sélectivement des règles CSS après avoir vérifié la prise en charge par le navigateur des propriétés et valeurs définies par les requêtes de fonctionnalités.

- [Utiliser les requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries/Using)
  - : Introduit les requêtes média, leur syntaxe, et les opérateurs et fonctionnalités média utilisés pour construire des expressions de requêtes média.

- [Prise en charge des navigateurs plus anciens&nbsp;: requêtes de fonctionnalités](/fr/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#requêtes_de_fonctionnalités)
  - : Comment utiliser les requêtes de fonctionnalités pour cibler le CSS en fonction du niveau de prise en charge des fonctionnalités web par le navigateur.

- [Détection des fonctionnalités du navigateur&nbsp;: CSS `@supports`](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Un aperçu de la détection des fonctionnalités en JavaScript et CSS, y compris CSS `@supports`.

- [Utiliser les requêtes de défilement de conteneur](/fr/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
  - : Utiliser les requêtes de défilement de conteneur, avec un exemple de chaque type.

## Concepts associés

- Le module [de cascade et d'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
  - La règle {{CSSxRef("@import")}}

- Le module [des requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
  - [`<media-feature>`](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média)
  - [`<media-type>`](/fr/docs/Web/CSS/Reference/At-rules/@media#types_de_média)
  - [`<media-condition>`](/fr/docs/Web/CSS/Reference/At-rules/@media#opérateurs_logiques)
  - [`<media-query-list>`](/fr/docs/Web/SVG/Reference/Attribute/media)
  - [Opérateurs logiques CSS](/fr/docs/Web/CSS/Reference/At-rules/@media#opérateurs_logiques) (`not`, `or` et `and`)

- Le module [de vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
  - L'API {{DOMxRef("CSS")}}
  - L'API {{DOMxRef("CSSGroupingRule")}}
  - L'API {{DOMxRef("MediaQueryList")}}
  - L'API {{DOMxRef("CSSRule")}}
  - L'interface {{DOMxRef("MediaList")}}
    - La propriété {{DOMxRef("MediaList.mediaText")}}

- Le module [de syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)
  - La déclaration {{CSSxRef("@charset")}}
  - Le terme [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
  - Le terme [`invalid`](/fr/docs/Web/CSS/Guides/Syntax/Error_handling)
  - Le terme {{Glossary("parse", "Analyse")}}
  - Le terme [règle de style](/fr/docs/Web/API/CSSStyleRule)

- Le module [des espaces de noms CSS](/fr/docs/Web/CSS/Guides/Namespaces)
  - La règle {{CSSxRef("@namespace")}}

- Le module [de positionnement des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
  - [Utilisation des requêtes de conteneur ancrées](/fr/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- Le module [des requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- Le module [de la cascade et de l'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
