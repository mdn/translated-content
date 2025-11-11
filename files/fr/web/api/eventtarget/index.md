---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

`EventTarget` est une interface DOM implémentée par des objets qui peuvent recevoir des événements et peuvent avoir des écouteurs pour eux.

{{domxref ("Element")}}, {{domxref ("Document")}} et {{domxref ("Window")}} sont les cibles d'événements les plus fréquentes, mais d'autres objets peuvent également être des cibles d'événements. Par exemple {{domxref ("XMLHttpRequest")}}, {{domxref ("AudioNode")}}, {{domxref ("AudioContext")}} et autres.

De nombreuses cibles d'événements (y compris des éléments, des documents et des fenêtres) supporte également la définition de [gestionnaires d'événements](/fr/docs/Web/Events/Event_handlers) via les propriétés et attributs `onevent`.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("EventTarget.EventTarget()", "EventTarget()")}}
  - : Crée une nouvelle instance d'objet `EventTarget`.

## Méthodes

- {{domxref("EventTarget.addEventListener()")}}
  - : Enregistre un gestionnaire d'événements d'un type d'événement spécifique sur `EventTarget`.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Supprime un écouteur d'événement de `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Envoie un événement à cet `EventTarget`.

## Spécifications

{{Specifications}}

## Compatiblité des navigateurs

{{Compat}}

## Voir aussi

- [Référence d'événement](/fr/docs/Web/API/Document_Object_Model/Events) - les événements disponibles sur la plateforme.
- [Guide du développeur d'événements](/fr/docs/Web/API/Document_Object_Model/Events)
- {{domxref("Event")}} interface
