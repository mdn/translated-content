---
title: Fonctions et mixins personnalisées CSS
short-title: Fonctions et mixins personnalisées
slug: Web/CSS/Guides/Custom_functions_and_mixins
l10n:
  sourceCommit: 569b07ef525429e0929c70e7dd067cbc0ce707bd
---

Le module des **fonctions et mixins personnalisés CSS** permet aux développeur·euse·s de créer des blocs réutilisables de code CSS pouvant accepter des arguments, contenir une logique complexe (définie à l'aide de fonctionnalités telles que les fonctions CSS {{CSSxRef("if()")}} et les règles {{CSSxRef("@media")}}) et de retourner des valeurs basées sur cette logique.

Les fonction CSS personnalisées sont définies dans la règle {{CSSxRef("@function")}} et appelées en utilisant la syntaxe {{CSSxRef("&lt;dashed-function&gt;")}}, qui ressemble beaucoup à la syntaxe des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) sauf qu'elle inclut des parenthèses à la fin contenant des arguments (par exemple, `--my-function(30px, 3)`). Les fonctions CSS personnalisées peuvent être appelées dans n'importe quelle valeur de propriété et retournent une valeur basée sur les arguments passés à la fonction et la logique à l'intérieur.

Les mixins CSS sont définis dans les règles `@mixin` et appliqués en utilisant les règles `@apply` imbriquées à l'intérieur des ensembles de règles. Les mixins CSS définissent un ensemble de propriétés qui peuvent être réutilisées dans plusieurs ensembles de règles et personnalisées avec des arguments et une logique.

Les fonctions et mixins personnalisés en CSS peuvent se voir attribuer des types de données optionnels pour leurs arguments et leurs valeurs de retour, afin de restreindre les valeurs qui leur sont passées et celles qu'ils retournent.

> [!NOTE]
> Actuellement, seules les fonctions personnalisées en CSS sont prises en charge par les navigateurs. Les mixins CSS ne sont actuellement pris en charge par aucun navigateur.

## Référence

### Règles @ et descripteurs

- {{CSSxRef("@function")}}
  - {{CSSxRef("@function#result", "result")}}

Le module des fonctions et mixins personnalisés en CSS introduit également les règles `@mixin`, `@apply`, `@contents` et `@env`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Types de données et valeurs

- {{CSSxRef("dashed-function")}}

### Fonctions

- {{CSSxRef("type")}}

### Interfaces

- {{DOMxRef("CSSFunctionRule")}}
- {{DOMxRef("CSSFunctionDeclarations")}}
- {{DOMxRef("CSSFunctionDescriptors")}}

## Guides

- [Utiliser les fonctions CSS personnalisées](/fr/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
  - : Ce guide vous apprend à utiliser les fonctions CSS personnalisées et présente quelques cas d'utilisation typiques.

## Concepts associés

[Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)

- {{CSSxRef("abs()")}}
- {{CSSxRef("acos()")}}
- {{CSSxRef("asin()")}}
- {{CSSxRef("atan()")}}
- {{CSSxRef("atan2()")}}
- {{CSSxRef("calc()")}}
- {{CSSxRef("clamp()")}}
- {{CSSxRef("cos()")}}
- {{CSSxRef("exp()")}}
- {{CSSxRef("log()")}}
- {{CSSxRef("max()")}}
- {{CSSxRef("min()")}}
- {{CSSxRef("mod()")}}
- {{CSSxRef("pow()")}}
- {{CSSxRef("rem()")}}
- {{CSSxRef("round()")}}
- {{CSSxRef("sign()")}}
- {{CSSxRef("sin()")}}
- {{CSSxRef("sqrt()")}}
- {{CSSxRef("tan()")}}

## Spécifications

{{Specifications}}

## Voir aussi

- La fonction {{CSSxRef("if()")}}
- La règle {{CSSxRef("@media")}}
