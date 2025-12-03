---
title: "@import"
slug: Web/CSS/Reference/At-rules/@import
original_slug: Web/CSS/@import
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@import`** est utilisée pour importer des règles de style depuis d'autres feuilles de style valides.
Une règle `@import` _doit_ être définie en haut de la feuille de style, avant toute autre règle @ (sauf [@charset](/fr/docs/Web/CSS/Reference/At-rules/@charset) et [@layer](/fr/docs/Web/CSS/Reference/At-rules/@layer)) et toute déclaration de style, sinon elle sera ignorée.

## Syntaxe

```css
@import url;
@import url layer;
@import url layer(layer-name);
@import url layer(layer-name) supports(supports-condition);
@import url layer(layer-name) supports(supports-condition) list-of-media-queries;
@import url layer(layer-name) list-of-media-queries;
@import url supports(supports-condition);
@import url supports(supports-condition) list-of-media-queries;
@import url list-of-media-queries;
```

où&nbsp;:

- _url_
  - : Est une chaîne de caractères ({{CSSxRef("string")}}) ou une valeur de type {{cssxref("url_value", "&lt;url&gt;")}} représentant l'emplacement de la ressource à importer. L'URL peut être absolue ou relative.
- _list-of-media-queries_
  - : Est une liste de [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) séparées par des virgules, qui spécifient les conditions dépendantes du média pour appliquer les règles CSS définies dans l'URL liée. Si le navigateur ne prend en charge aucune de ces requêtes, il ne charge pas la ressource liée.
- _layer-name_
  - : Est le nom d'une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) dans laquelle le contenu de la ressource liée est importé. Voir [`layer()`](/fr/docs/Web/CSS/Reference/At-rules/@import/layer_function) pour plus d'informations.
- _supports-condition_
  - : Indique la ou les fonctionnalités que le navigateur doit prendre en charge pour que la feuille de style soit importée.
    Si le navigateur ne respecte pas les conditions spécifiées dans _supports-condition_, il peut ne pas récupérer la feuille de style liée, et même si elle est téléchargée par un autre moyen, elle ne sera pas chargée.
    La syntaxe de `supports()` est presque identique à celle décrite dans {{CSSxRef("@supports")}}, qui peut servir de référence plus complète.

Utilisez `@import` avec le mot-clé `layer` ou la fonction `layer()` pour importer des feuilles de style externes (issues de frameworks, de styles de widgets, de bibliothèques, etc.) dans des couches.

## Description

Les règles importées doivent apparaître avant tous les autres types de règles, sauf les règles {{CSSxRef("@charset")}} et les instructions de création de couche [`@layer`](/fr/docs/Web/CSS/Reference/At-rules/@layer).

```css example-bad
* {
  margin: 0;
  padding: 0;
}
/* autres styles */
@import "my-imported-styles.css";
```

Comme la règle at-rule `@import` est déclarée après les styles, elle est invalide et donc ignorée.

```css example-good
@import "my-imported-styles.css";
* {
  margin: 0;
  padding: 0;
}
/* autres styles */
```

La règle `@import` n'est pas une [instruction imbriquée](/fr/docs/Web/CSS/Guides/Syntax/Introduction#nested_statements). Elle ne peut donc pas être utilisée à l'intérieur de [groupes conditionnels des règles @](/fr/docs/Web/CSS/Guides/Conditional_rules#règles-@).

Pour que les {{glossary("user agent", "agents utilisateur")}} puissent éviter de récupérer des ressources pour des types de média non pris en charge, les auteur·ice·s peuvent spécifier des conditions d'importation dépendantes du média. Ces importations conditionnelles spécifient des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) séparées par des virgules après l'URL. En l'absence de requête média, l'importation n'est pas conditionnée au média utilisé. Spécifier `all` pour la `list-of-media-queries` a le même effet.

De même, les agents utilisateur peuvent utiliser la fonction `supports()` dans une règle at-rule `@import` pour ne récupérer les ressources que si un ensemble de fonctionnalités particulier est (ou n'est pas) pris en charge.

Cela permet aux auteur·ice·s de profiter des fonctionnalités CSS récemment introduites, tout en assurant une rétrocompatibilité pour les anciennes versions de navigateurs.
Notez que les conditions de la fonction `supports()` d'une règle at-rule `@import` peuvent être obtenues en JavaScript via {{domxref("CSSImportRule.supportsText")}}.

La règle `@import` peut aussi être utilisée pour créer une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) en important des règles depuis une ressource liée. Les règles peuvent aussi être importées dans une couche de cascade existante. Le mot-clé `layer` ou la fonction `layer()` sont utilisés avec `@import` à cet effet. Les déclarations des règles de style des feuilles importées interagissent avec la cascade comme si elles étaient écrites littéralement dans la feuille de style au point d'importation.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Importer des règles CSS

```css
@import "custom.css";
@import url("chrome://communicator/skin/");
```

Les deux exemples ci-dessus montrent comment spécifier l'_url_ comme `<string>` et comme fonction `url()`.

### Importer des règles CSS conditionnées par des requêtes média

```css
@import "fine-print.css" print;
@import "bluish.css" print, screen;
@import "common.css" screen;
@import "landscape.css" screen and (orientation: landscape);
```

Les règles `@import` dans les exemples ci-dessus montrent des conditions dépendantes du média qui doivent être vraies avant que les règles CSS liées ne soient appliquées. Par exemple, la dernière règle `@import` chargera la feuille de style `landscape.css` uniquement sur un appareil écran en orientation paysage.

### Importer des règles CSS conditionnées par la prise en charge de fonctionnalités

```css
@import "grid.css" supports(display: grid) screen and (width <= 400px);
@import "flex.css" supports((not (display: grid)) and (display: flex)) screen
  and (width <= 400px);
```

Les règles `@import` ci-dessus illustrent comment importer une mise en page utilisant une grille si `display: grid` est pris en charge, et sinon importer du CSS utilisant `display: flex`.
Bien que vous ne puissiez avoir qu'une seule instruction `supports()`, vous pouvez combiner autant de vérifications de fonctionnalités que nécessaire avec `not`, `and` et `or`. Cependant, il faut utiliser des parenthèses pour définir la priorité lorsque vous les mélangez, par exemple `supports((..) or (..) and not (..))` est invalide, mais `supports((..) or ((..) and (not (..))))` est valide.
Notez que si vous n'avez qu'une seule déclaration, il n'est pas nécessaire de l'entourer de parenthèses supplémentaires&nbsp;: cela est montré dans le premier exemple ci-dessus.

Les exemples ci-dessus montrent des conditions de prise en charge utilisant la syntaxe de déclaration de base.
Vous pouvez aussi spécifier des fonctions CSS dans `supports()`, et cela sera évalué à `true` si elles sont prises en charge et peuvent être évaluées par l'agent utilisateur.
Par exemple, le code ci-dessous montre une règle `@import` conditionnée à la fois par le [combinateur d'enfant](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator) (`selector()`) et la fonction `font-tech()`&nbsp;:

```css
@import "whatever.css"
  supports((selector(h2 > p)) and (font-tech(color-COLRv1)));
```

### Importer des règles CSS dans une couche de cascade

```css
@import "theme.css" layer(utilities);
```

Dans l'exemple ci-dessus, une couche de cascade nommée `utilities` est créée et inclura les règles de la feuille de style importée `theme`.

```css
@import "headings.css" layer(default);
@import "links.css" layer(default);

@layer default {
  audio[controls] {
    display: block;
  }
}
```

Dans l'exemple ci-dessus, les règles des feuilles de style `headings.css` et `links.css` sont mises en cascade dans la même couche que la règle `audio[controls]`.

```css
@import "theme.css" layer();
@import "style.css" layer;
```

Ceci est un exemple de création de deux couches de cascade sans nom distinctes et d'importation des règles liées dans chacune séparément. Une couche de cascade déclarée sans nom est une couche de cascade sans nom. Les couches de cascade sans nom sont finalisées lors de leur création&nbsp;: elles ne permettent pas de réorganiser ou d'ajouter des styles et ne peuvent pas être référencées de l'extérieur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("@media")}}
- {{CSSxRef("@supports")}}
- Le module [cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)
- [Fonctions des règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
