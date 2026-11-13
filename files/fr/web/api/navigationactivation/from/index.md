---
title: "NavigationActivation : propriété from"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`from`** de l'interface {{DOMxRef("NavigationActivation")}} contient un objet {{DOMxRef("NavigationHistoryEntry")}} représentant l'entrée d'historique pour le document sortant («&nbsp;from&nbsp;») dans la navigation.

## Valeur

Un objet {{DOMxRef("NavigationHistoryEntry")}}, ou `null` si le document sortant est&nbsp;:

- Pas de même origine que le document entrant.
- Le document initial `about:blank`.

## Exemples

Voir la page principale {{DOMxRef("NavigationActivation")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Navigation](/fr/docs/Web/API/Navigation_API)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
