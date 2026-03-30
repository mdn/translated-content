---
title: Cascade et héritage CSS
short-title: Cascade et héritage
slug: Web/CSS/Guides/Cascade
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Le module **de cascade et d'héritage CSS** définit les règles d'attribution des valeurs aux propriétés par le biais de la cascade et de l'héritage. Ce module définit les règles pour trouver la valeur définie pour toutes les propriétés sur tous les éléments.

L'un des principes fondamentaux de conception de CSS est la cascade des règles. Elle permet à plusieurs feuilles de style d'influencer la présentation d'un document. Les déclarations de propriétés et de valeurs CSS définissent comment un document est rendu. Plusieurs déclarations peuvent définir des valeurs différentes pour la même combinaison d'élément et de propriété, mais une seule valeur peut être appliquée à une propriété CSS. Le module de cascade CSS définit comment ces conflits sont résolus.

L'inverse se produit également. Parfois, il n'y a pas de déclarations définissant la valeur d'une propriété. Le module de cascade CSS définit comment ces valeurs manquantes doivent être définies via l'héritage ou à partir de la valeur initiale de la propriété.

> [!NOTE]
> Les règles pour trouver les valeurs spécifiées dans le contexte de la page et ses boîtes de marge sont décrites dans le [module de page CSS](/fr/docs/Web/CSS/Guides/Paged_media).

## Référence

### Propriétés

- {{CSSxRef("all")}}

### Règles @ et descripteurs

- {{CSSxRef("@import")}}
- {{CSSxRef("@layer")}}

### Mots-clés

- {{CSSxRef("initial")}}
- {{CSSxRef("inherit")}}
- {{CSSxRef("revert")}}
- {{CSSxRef("revert-layer")}}
- {{CSSxRef("unset")}}
- Le drapeau {{CSSxRef("important", "!important")}}

### Interfaces

- {{DOMxRef("CSSLayerBlockRule")}}
- {{DOMxRef("CSSGroupingRule")}}
- {{DOMxRef("CSSLayerStatementRule")}}
- {{DOMxRef("CSSRule")}}

### Termes du glossaire et définitions

- [Valeur réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Disposition anonyme](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#le_bloc_de_règle_layer_pour_les_disposition_nommées_et_anonymes)
- [Origine de l'auteur·ice](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lauteur_ou_lautrice)
- [Cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
- [Valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
- [Couche nommée](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#le_bloc_de_règle_layer_pour_les_couches_nommées)
- [Valeur résolue](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue)
- [Propriétés abrégées](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Valeur définie](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie)
- {{Glossary("style origin", "Origine du style")}}
- [Valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)
- [Origine de l'utilisateur·ice](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lutilisatrice_ou_lutilisateur)
- [Origine de l'agent utilisateur](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lagent_utilisateur)

## Guides

- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
  - : Guide sur l'algorithme de la cascade qui définit comment les agents utilisateurs combinent les valeurs des propriétés provenant de différentes sources.

- [Héritage CSS](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : Un guide sur l'héritage en CSS.

- [Apprendre&nbsp;: Gestion des conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Les concepts les plus fondamentaux du CSS — la cascade, la spécificité et l'héritage — qui contrôlent la manière dont le CSS est appliqué au HTML et comment les conflits sont résolus.

- [Apprendre&nbsp;: Couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Introduction aux [couches de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer), une fonctionnalité plus avancée qui s'appuie sur les concepts fondamentaux de la [cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction) et de la [spécificité CSS](/fr/docs/Web/CSS/Guides/Cascade/Specificity).

## Concepts connexes

- [Styles attachés aux éléments](/fr/docs/Web/HTML/Reference/Global_attributes/style)
- [Styles en ligne et la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#styles_en_incise_inline_styles)
- [Règles conditionnelles pour @imports](/fr/docs/Web/CSS/Reference/At-rules/@import#importer_des_règles_css_conditionnées_par_des_requêtes_média)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Spécifications

{{Specifications}}

## Voir aussi

- [Le module des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Le module des pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- [Le module des médias paginés CSS](/fr/docs/Web/CSS/Guides/Paged_media)
- [Le module des règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
- [Le module de l'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
- [Propriétés abrégées](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
