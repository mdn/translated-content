---
title: "NavigationActivation : propriété entry"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`entry`** de l'interface {{DOMxRef("NavigationActivation")}} contient un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'entrée d'historique pour le document entrant («&nbsp;to&nbsp;») dans la navigation. Cela équivaut à la propriété {{DOMxRef("Navigation.currentEntry")}} au moment où le document entrant a été activé.

Il existe certains cas dans lesquels les objets {{DOMxRef("NavigationHistoryEntry")}} `from` ou `entry` ne sont pas des cibles viables pour la méthode `traverseTo()`, car ils peuvent ne pas être conservés dans l'historique. Par exemple, le document peut être activé en utilisant `location.replace()` ou son entrée initiale peut être remplacée par `history.replaceState()`. Cependant, les propriétés `url` et les méthodes `getState()` de ces entrées restent accessibles.

## Valeur

Un objet {{DOMxRef("NavigationHistoryEntry")}}.

## Exemples

Voir la page principale {{DOMxRef("NavigationActivation")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Navigation](/fr/docs/Web/API/Navigation_API)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
