---
title: Event.explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: 95b52aa7aeabbd2670f762da4fb7c0b0133f4d9f
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La propriété en lecture seule **`explicitOriginalTarget`**, rattachée à l'interface [`Event`](/fr/docs/Web/API/Event), renvoie la cible originale, non-anonyme, de l'évènement.

Si l'évènement a été reciblé pour une autre raison que le franchissement de limites anonyme, cette propriété sera définie avec la cible avant le reciblage.

Par exemple, les évènements de souris sont reciblés sur les nœuds parent lorsqu'ils se produisent sur des nœuds texte (voir [le bug 185889](https://bugzilla.mozilla.org/show_bug.cgi?id=185889)), et, dans ce cas, [`currentTarget`](/fr/docs/Web/API/Event/currentTarget) affichera le parent tandis que cette propriété affichera le nœud texte.

Cette propriété diffère également de [`originalTarget`](/fr/docs/Web/API/Event/originalTarget), car elle ne contiendra jamais de contenu anonyme.

## Valeur

Renvoie l'objet [`EventTarget`](/fr/docs/Web/API/EventTarget) ou `null` s'il n'y en a pas.

## Spécifications

Il s'agit d'une propriété spécifique à Mozilla qui ne fait partie d'aucune spécification actuelle et qui n'est pas en voie de standardisation.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Comparaison des cibles d'évènements](/fr/docs/Web/API/Event/Comparison_of_Event_Targets)
