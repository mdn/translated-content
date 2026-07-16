---
title: InterestEvent
slug: Web/API/InterestEvent
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Popover API")}}{{SeeCompatTable}}{{Non-standard_Header}}

L'interface **`InterestEvent`** représente un événement qui se déclenche lorsque l'intérêt est montré ou perdu sur un [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) (<i lang="en">interest invoker</i>).

Il s'agit de l'objet événement pour les événements {{DOMxRef("HTMLElement.interest_event", "interest")}} et {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}}, qui sont déclenchés sur l'élément cible lorsque l'intérêt est montré ou perdu, respectivement.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("InterestEvent.InterestEvent", "InterestEvent()")}} {{Experimental_Inline}}
  - : Crée un objet `InterestEvent`.

## Propriétés d'instance

_Cette interface hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("InterestEvent.source")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Une instance d'objet {{DOMxRef("Element")}} représentant l'élément invocateur d'intérêt sur lequel l'intérêt a été montré ou perdu, déclenchant l'événement.

## Exemples

Voir le guide [Utilisation des invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) et la page de référence de l'événement {{DOMxRef("HTMLElement.interest_event", "interest")}} pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utilisation des invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
