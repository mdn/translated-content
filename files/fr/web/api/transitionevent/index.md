---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: 6533fac06952aa33bad09c76dbbbf8531f81032d
---

{{APIRef("CSSOM")}}

L'interface **`TransitionEvent`** représente les évènements qui fournissent des informations relatives aux [transitions](/fr/docs/Web/CSS/CSS_transitions/Using_CSS_transitions).

{{InheritanceDiagram}}

## Constructeur

- [`TransitionEvent()`](/fr/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Crée un évènement `TransitionEvent` avec les paramètres fournis.

## Propriétés des instances

_Cette interface hérite également des propriétés de son parent [`Event`](/fr/docs/Web/API/Event)._

- [`TransitionEvent.propertyName`](/fr/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Une chaîne de caractères qui contient le nom de la propriété CSS associée à la transition.
- [`TransitionEvent.elapsedTime`](/fr/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Un nombre flottant (`float`) indiquant la durée (exprimée en secondes) depuis laquelle la transition est lancée, lorsque cet évènement a été déclenché. Cette valeur n'est pas impactée par la propriété [`transition-delay`](/fr/docs/Web/CSS/transition-delay).
- [`TransitionEvent.pseudoElement`](/fr/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Une chaîne de caractères, commençant par `::`, qui contient le nom du [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) sur lequel s'exécute l'animation. Si la transition ne porte pas sur un pseudo-élément, mais sur un élément, cette propriété vaudra la chaîne vide (`''`).

## Évènements de type `TransitionEvent`

- [`transitioncancel`](/fr/docs/Web/API/HTMLElement/transitioncancel_event)
  - : Un [évènement](/fr/docs/Web/API/Event) déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_transitions) a été annulée.
- [`transitionend`](/fr/docs/Web/API/HTMLElement/transitionend_event)
  - : Un [évènement](/fr/docs/Web/API/Event) déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_transitions) a terminé.
- [`transitionrun`](/fr/docs/Web/API/HTMLElement/transitionrun_event)
  - : Un [évènement](/fr/docs/Web/API/Event) déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_transitions) est créée (c'est-à-dire ajoutée à l'ensemble des transitions lancées), sans qu'elle soit nécessairement démarrée.
- [`transitionstart`](/fr/docs/Web/API/HTMLElement/transitionstart_event)
  - : Un [évènement](/fr/docs/Web/API/Event) déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_transitions) a démarré.

## Méthodes des instances

_Cette interface hérite également des méthodes de son parent [`Event`](/fr/docs/Web/API/Event)._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transitions CSS](/fr/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- Les propriétés CSS relatives aux transitions&nbsp;:
  - [`transition`](/fr/docs/Web/CSS/transition)
  - [`transition-delay`](/fr/docs/Web/CSS/transition-delay)
  - [`transition-duration`](/fr/docs/Web/CSS/transition-duration)
  - [`transition-property`](/fr/docs/Web/CSS/transition-property)
  - [`transition-timing-function`](/fr/docs/Web/CSS/transition-timing-function)
