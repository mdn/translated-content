---
title: animationend
slug: Web/API/Element/animationend_event
---

{{APIRef}}

L'événement `animationend est déclenché quand une animation CSS est terminée.`

## Informations générales

- Spécification
  - : [CSS Animations](https://www.w3.org/TR/css3-animations/#animation-events)
- Interface
  - : AnimationEvent
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : Document, Element, Window
- Action par défaut
  - : Aucune

## Propriétés

| Propriété                          | Type                       | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{ReadOnlyInline}}        | {{domxref("EventTarget")}} | La cible de l'événement (la plus haute cible dans l'arbre du DOM).                                                                                                                                                                                                                                                                             |
| `type` {{ReadOnlyInline}}          | {{jsxref("String")}}       | Le type de l'événement.                                                                                                                                                                                                                                                                                                                        |
| `bubbles` {{ReadOnlyInline}}       | `boolean`                  | Est-ce que l'événement se propage?                                                                                                                                                                                                                                                                                                             |
| `cancelable` {{ReadOnlyInline}}    | `boolean`                  | Est-il possible d'annuler l'événement?                                                                                                                                                                                                                                                                                                         |
| `animationName` {{ReadOnlyInline}} | {{jsxref("String")}}       | Le nom de la propriété CSS associéee à la transition.                                                                                                                                                                                                                                                                                          |
| `elapsedTime` {{ReadOnlyInline}}   | Float                      | Le temps durant lequel l'animation a durée, en secondes, quand l'événement est déclenché, excepté le temps lorsque l'animation était en pause. Pour un événement **animationstart**, _elapsedTime_ vaut zéro à moins que _animation-delay_ ne soit négatif, et dans ce cas, l'événement sera déclenché avec un _elapsedTime_ de (-1 \* delay). |

## Evénements liés

- [`animationstart`](/fr/docs/Web/API/Element/animationstart_event)
- [`animationend`](/fr/docs/Web/API/Element/animationend_event)
- [`animationiteration`](/fr/docs/Web/API/Element/animationiteration_event)

## Voir aussi

- [Utilisation des animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
