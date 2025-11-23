---
title: <calc-sum>
slug: Web/CSS/Reference/Values/calc-sum
original_slug: Web/CSS/calc-sum
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<calc-sum>`** représente une expression qui effectue un calcul dans n'importe quelle [fonction mathématique CSS](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_mathématiques). L'expression réalise une opération arithmétique d'addition ou de soustraction entre deux valeurs.

## Syntaxe

Le type `<calc-sum>` définit deux valeurs numériques et l'un des [opérateurs arithmétiques](/fr/docs/Learn_web_development/Core/Scripting/Math#opérateurs_arithmétiques) suivants entre elles.

- `+`
  - : Additionne deux nombres.

- `-`
  - : Soustrait le nombre de droite à celui de gauche.

### Syntaxe formelle

{{CSSSyntax}}

## Description

Les opérandes de l'expression peuvent être n'importe quelle valeur de la syntaxe {{CSSxRef("&lt;length&gt;")}}. Vous pouvez utiliser {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;integer&gt;")}}.

Les deux opérandes doivent être du même type. Pour les longueurs, vous ne pouvez pas utiliser `0` pour dire `0px` (ou une autre unité de longueur). Il faut ajouter une unité explicite&nbsp;: `margin-top: calc(0px + 20px);` est valide, alors que `margin-top: calc(0 + 20px);` est invalide. Les types de valeurs en pourcentage sont résolus selon le contexte. Par exemple, `margin-top: calc(50% + 20px);` est valide car `margin-top` résout les pourcentages en longueurs.

L'inclusion de [variables CSS](/fr/docs/Web/CSS/Guides/Cascading_variables) dans les expressions `calc-sum` est également autorisée. Le code suivant `calc(10px + var(--variable))` est une expression valide.

Les opérateurs `+` et `-` **doivent obligatoirement être entourés d'{{Glossary("whitespace", "espaces")}}**. Par exemple, `calc(50% -8px)` sera interprété comme «&nbsp;un pourcentage suivi d'une longueur négative&nbsp;» — ce qui est une expression invalide — tandis que `calc(50% - 8px)` correspond à «&nbsp;un pourcentage suivi d'un opérateur de soustraction et d'une longueur&nbsp;». De même, `calc(8px + -50%)` est interprété comme «&nbsp;une longueur suivie d'un opérateur d'addition et d'un pourcentage négatif&nbsp;».

## Spécifications

{{Specifications}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;calc-product&gt;")}}
- Le type de donnée {{CSSxRef("&lt;calc-value&gt;")}}
- Le type de donnée {{CSSxRef("&lt;calc-keyword&gt;")}}
