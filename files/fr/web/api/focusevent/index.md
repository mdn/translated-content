---
title: FocusEvent
slug: Web/API/FocusEvent
---

{{APIRef("DOM Events")}}{{SeeCompatTable}}

L'interface **`FocusEvent`** représente les événements liés au focus tels que [`focus`](/fr/docs/Web/API/Element/focus_event), [`blur`](/fr/docs/Web/API/Element/blur_event), [`focusin`](/fr/docs/Web/API/Element/focusin_event) ou [`focusout`](/fr/docs/Web/API/Element/focusout_event).

## Constructeur

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : crée un événement **FocusEvent** avec les paramètres donnés**.**

## Propriétés

_Hértite des propriétés de son parent domxref("UIEvent")}} et indirectement de {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}} {{readonlyInline}}
  - : est un {{domxref("EventTarget")}} représentant une cible secondaire pour cet événement. Car dans certain cas (comme quand vous tabulez dans ou hors de la page), cette propriété peut être définie comme étant nulle pour des raisons de sécurité.

## Méthodes

_Aucune méthode spécifique&nbsp;; hérite des propriétés de son parent [`UIEvent`](/fr/docs/Web/API/UIEvent) et indirectement de [`Event`](/fr/docs/Web/API/Event)._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface de base {{domxref("Event")}}
