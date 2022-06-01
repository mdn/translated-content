---
title: FocusEvent
slug: Web/API/FocusEvent
tags:
  - API
  - DOM
  - Evènement
  - Focus
  - Interface
translation_of: Web/API/FocusEvent
---
{{APIRef("DOM Events")}}{{SeeCompatTable}}

L'interface **`FocusEvent`** représente les événements liés au focus tels que {{event("focus")}}, {{event("blur")}}, {{event("focusin")}} ou {{event("focusout")}}.

## Constructeur

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : crée un événement **FocusEvent** avec les paramètres donnés**.**

## Propriétés

_Hértite des propriétés de son parent domxref("UIEvent")}} et indirectement de {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}} {{readonlyInline}}
  - : est un {{domxref("EventTarget")}} représentant une cible secondaire pour cet événement. Car dans certain cas (comme quand vous tabulez dans ou hors de la page), cette propriété peut être définie comme étant nulle pour des raisons de sécurité.

## Méthodes

*Aucune méthode spécifique&nbsp;; hérite des propriétés de son parent [`UIEvent`](/fr/docs/Web/API/UIEvent) et indirectement de [`Event`](/fr/docs/Web/API/Event).*

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM3 Events', '#interface-FocusEvent', 'FocusEvent')}} | {{Spec2('DOM3 Events')}} | Première définition. |

## Compatibilité des navigateurs

{{Compat("api.FocusEvent")}}

## Voir aussi

- L'interface de base {{domxref("Event")}}
