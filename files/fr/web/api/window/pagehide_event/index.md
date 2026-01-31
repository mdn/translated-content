---
title: pagehide
slug: Web/API/Window/pagehide_event
---

{{APIRef("HTML DOM")}}

L'évènement `pagehide` est émis lorsqu'une entrée dans un historique de session est sur le point d'être quittée.

## Informations générales

- Spécification
  - : [HTML5](https://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-pagehide)
- Interface
  - : [PageTransitionEvent](/fr/docs/Web/API/PageTransitionEvent)
- Bouillonne
  - : Non
- Annulable
  - : Non
- Cible
  - : Document (dispatché sur Window)
- Action par défaut
  - : Aucune

## Propriétés

| Propriété                       | Type                       | Description                                               |
| ------------------------------- | -------------------------- | --------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | La cible de l'évènement (la plus haute dans l'arbre DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Le type d'évènement.                                      |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Si l'évènement bouillonne en temps normal ou non.         |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Si l'évènement est annulable ou non.                      |
| `persisted` {{readonlyInline}}  | {{jsxref("boolean")}}      | Si l'entrée est chargée depuis le cache ou non.           |

## Évènements liés

- [`pageshow`](/fr/docs/Web/API/Window/pageshow_event)
- [Utilisation du cache de Firefox 1.5 — L'évènement pagehide](/fr/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching#lévènement_pagehide)
