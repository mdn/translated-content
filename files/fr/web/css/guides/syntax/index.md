---
title: Syntaxe CSS
slug: Web/CSS/Guides/Syntax
original_slug: Web/CSS/CSS_syntax
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le module **Syntaxe CSS** décrit, en termes généraux, la structure et la syntaxe des feuilles de style en cascade, ou CSS. Il définit CSS comme le langage de description du rendu de documents structurés (tels que HTML et XML), sur le web et ailleurs.

Ce module ne définit aucune propriété, [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types), [fonctions](/fr/docs/Web/CSS/Reference/Values/Functions) ou [règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules). Au contraire, il précise comment toutes ces fonctionnalités doivent être définies et comment les agents utilisateurs doivent analyser le CSS.

## Règles @

- Aucune

> [!NOTE]
> Le module précise que {{cssxref("@charset")}} n'est pas une véritable règle @, mais plutôt une règle héritée non reconnue qui doit être omise lors de la vérification grammaticale d'une feuille de style. La seule utilisation valide de `@charset` se trouve au tout début d'une feuille de style, où elle est interprétée comme une séquence d'octets spéciale supprimée avant le traitement du contenu.

## Référence

### Concepts clés

- {{cssxref("CSS_syntax/At-rule", "Règles @")}}
- [Échappement de caractères](/fr/docs/Web/CSS/Reference/Values/custom-ident#escaping_characters)
- [Commentaires CSS](/fr/docs/Web/CSS/Guides/Syntax/Comments)
- [Déclaration CSS](/fr/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [Bloc de déclaration CSS](/fr/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [Fonction CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
- [Gestion d'erreur](/fr/docs/Web/CSS/CSS_syntax/Error_handling)
- [Règle de style](/fr/docs/Web/API/CSSStyleRule)

### Termes du glossaire

- {{glossary("CSS_Descriptor", "Descripteur CSS")}}
- {{glossary("parse", "Analyse")}}
- {{glossary("stylesheet", "Feuille de style")}}
- {{glossary("whitespace", "Espace blanc")}}

## Guides

- [Introduction à la syntaxe CSS&nbsp;: déclarations, ensembles de règles et instructions](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
  - : Présente la syntaxe générale de CSS et explique comment les déclarations, blocs de déclaration, ensembles de règles et instructions forment les règles de style.

- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : Explique la grammaire formelle pour définir les valeurs valides des propriétés et fonctions CSS, ainsi que les contraintes sémantiques. Un guide pour comprendre les types de valeurs composants CSS, les combinateurs et les multiplicateurs.

- [Gestion des erreurs CSS](/fr/docs/Web/CSS/CSS_syntax/Error_handling)
  - : Vue d'ensemble de la façon dont les navigateurs gèrent le CSS invalide.

- [Premiers pas avec CSS&nbsp;: la syntaxe CSS](/fr/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)
  - : Guide d'introduction à CSS, incluant une présentation de la syntaxe CSS.

## Concepts associés

Le module des [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)&nbsp;:

- [Spécificité CSS](/fr/docs/Web/CSS/Guides/Cascade/Specificity)

Le module de [cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)&nbsp;:

- La règle {{cssxref("@import")}}
- L'indicateur {{cssxref("important")}}
- [Valeurs initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#la_valeur_initial)
- [Valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculées)
- [Valeurs utilisées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisées)
- [Valeurs réelles](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelles)
- [Héritage CSS](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- {{Glossary("Property/CSS", "propriété CSS")}}

Le module des [propriétés personnalisées CSS pour les variables en cascade](/fr/docs/Web/CSS/Guides/Cascading_variables)&nbsp;:

- [Propriété personnalisée (`--*`)](/fr/docs/Web/CSS/Reference/Properties/--*)
- Fonction {{cssxref("var")}}

Le module des [règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)&nbsp;:

- La règle {{cssxref("@media")}}
- La règle {{cssxref("@supports")}}

L'API [CSS Object Model (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)&nbsp;:

- La propriété {{domxref("CSSValue.cssText", "cssText")}}
- La méthode {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}}
- La méthode {{domxref("CSSStyleSheet.replace()", "replace(text)")}}

La spécification [WHATWG](/fr/docs/Glossary/WHATWG)&nbsp;:

- L'élément HTML {{HTMLElement("style")}}
- L'élément HTML {{HTMLElement("link")}}
- L'attribut HTML [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class)
- L'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel#stylesheet)

## Spécifications

{{Specifications}}

## Voir aussi

- Les [fonctions des règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
- Le module de [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- Le module de [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
