---
title: animationstart
slug: Web/API/Element/animationstart_event
translation_of: Web/API/HTMLElement/animationstart_event
original_slug: Web/API/HTMLElement/animationstart_event
---
L'évènement **`animationstart`** est déclenché quand une animation CSS a commencé. Si `animation-delay` est défini alors le déclenchement se fera une fois le délai expiré. Un délai négatif causera un déclenchement de l'évènement avec un `elapsedTime` équivalent à la valeur absolue du délai.

## Informations générales

- Spécification
  - : [CSS Animations](http://www.w3.org/TR/css3-animations/#animation-events)
- Interface
  - : AnimationEvent
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : Document, Element
- Action par défaut
  - : Aucune

## Propriétés

| Propriété                                | Type                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}        | {{domxref("EventTarget")}} | La cible de l'événement (la plus haute cible dans l'arbre du DOM).                                                                                                                                                                                                                                                                             |
| `type` {{ReadOnlyInline}}          | {{domxref("DOMString")}}     | Le type de l'événement.                                                                                                                                                                                                                                                                                                                        |
| `bubbles` {{ReadOnlyInline}}       | `boolean`                            | Est-ce que l'événement se propage?                                                                                                                                                                                                                                                                                                             |
| `cancelable` {{ReadOnlyInline}}    | `boolean`                            | Est-il possible d'annuler l'événement?                                                                                                                                                                                                                                                                                                         |
| `animationName` {{ReadOnlyInline}} | {{domxref("DOMString")}}     | Le nom de la propriété CSS associéee à la transition.                                                                                                                                                                                                                                                                                          |
| `elapsedTime` {{ReadOnlyInline}}   | Float                                | Le temps durant lequel l'animation a durée, en secondes, quand l'événement est déclenché, excepté le temps lorsque l'animation était en pause. Pour un événement **animationstart**, _elapsedTime_ vaut zéro à moins que _animation-delay_ ne soit négatif, et dans ce cas, l'événement sera déclenché avec un _elapsedTime_ de (-1 \* delay). |

## Evénements liés

- {{Event("animationstart")}}
- {{Event("animationend")}}
- {{Event("animationiteration")}}

## Voir aussi

- [Utilisation des animations CSS](/fr/docs/CSS/Using_CSS_animations)
