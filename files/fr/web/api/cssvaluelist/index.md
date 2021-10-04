---
title: CSSValueList
slug: Web/API/CSSValueList
tags:
  - API
  - CSSValueList
  - DOM
  - Interface
  - Reference
translation_of: Web/API/CSSValueList
---
{{APIRef("DOM")}}

L'interface **`CSSValueList`** dérive de l'interface {{domxref("CSSValue")}} et fournit l'abstraction d'une collection ordonnée de valeurs CSS.

Certaines propriétés autorisent une liste vide dans leur syntaxe. Dans ce cas, ces propriétés prennent l'identifiant `none`. Ainsi, une liste vide signifie que la propriété a une valeur `none` (_aucune valeur_).

Les éléments dans `CSSValueList` sont accessibles par un index integral commençant à 0.

{{InheritanceDiagram}}

## Propriétés

_Hérite des propriétés de son parent {{domxref("CSSValue")}}_.

- {{domxref("CSSValueList.length")}} {{readonlyInline}}
  - : Un `unsigned long` représentant le nombre de `CSSValues` (_valeurs CSS_) dans la liste.

## Méthodes

- {{domxref("CSSValueList.item()")}}
  - : Cette méthode est utilisée pour  récupérer une {{domxref("CSSValue")}} _(valeur CSS_) par index ordinal. L'ordre dans cette collection représente l'ordre des valeurs dans la propriété de style CSS. Si index est supérieur ou égal au nombre de valeurs de la liste, elle renvoie `null`.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM2 Style', 'css.html#CSS-CSSValuesList', 'CSSValuesList')}} | {{Spec2('DOM2 Style')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.CSSValueList")}}

## Voir aussi

- {{domxref("CSSPrimitiveValue")}}
- {{domxref("CSSValue")}}
