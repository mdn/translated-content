---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 082221e2a29b7bea7a3029cd71442c8f294a8422
---

{{APIRef("History API")}}

**`PopStateEvent`** est une interface pour l'évènement {{DOMxRef("Window/popstate_event", "popstate")}}.

Un évènement `popstate` est envoyé à la fenêtre chaque fois que l'entrée d'historique active change entre deux entrées d'historique pour le même document. Si l'entrée d'historique activée a été créée par un appel à `history.pushState()` ou a été affectée par un appel à `history.replaceState()`, la propriété `state` de l'évènement `popstate` contient une copie de l'objet d'état de l'entrée d'historique.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("PopStateEvent.PopStateEvent", "PopStateEvent()")}}
  - : Crée un nouvel objet `PopStateEvent`.

## Propriétés d'instance

_Cette interface hérite également des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : Retourne une copie des informations qui ont été fournies à `pushState()` ou `replaceState()`.
- {{DOMxRef("PopStateEvent.hasUAVisualTransition", "hasUAVisualTransition")}} {{ReadOnlyInline}}
  - : Retourne `true` si l'agent utilisateur a effectué une transition visuelle pour cette navigation avant de déclencher cet évènement, sinon `false`.

## Méthodes d'instance

_Cette interface n'a pas de méthodes propres, mais hérite des méthodes de son parent, {{DOMxRef("Event")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
- L'évènement {{DOMxRef("Window/hashchange_event", "hashchange")}}
