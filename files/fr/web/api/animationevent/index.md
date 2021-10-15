---
title: AnimationEvent
slug: Web/API/AnimationEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Web Animations
translation_of: Web/API/AnimationEvent
---
{{SeeCompatTable}}{{APIRef("Web Animations API")}}

L'interface **`AnimationEvent`** représentent les évènements apportant des informations sur les [animations CSS](/fr/docs/CSS/Animations_CSS).

{{InheritanceDiagram}}

## Constructeur

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Créer un évènement AnimationEvent avec les paramètres spécifiés.

## Propriétés

_Hérite également des propriétés de son parent {{domxref("Event")}}._

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : Est une {{domxref("DOMString")}} contenant la valeur de la propriété CSS {{cssxref("animation-name")}} associée à la transition.
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : Est un nombre à virgule flottante, donnant le temps pendant lequel l'animation s'est déroulée, en secondes, quand l'évènement est déclenché, en excluant tous les temps de pause de l'animation. Pour un évènement `animationstart`, `elapsedTime` est à 0.0 sauf si {{cssxref("animation-delay")}} a une valeur négative. Dans ce cas, l'évènement sera déclenché avec `elapsedTime` contenant (-1 \* la valeur de `animation-delay`).
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : est une {{domxref("DOMString")}}, démarrant avec '::', contenant le nom du pseudo-élément où l'animation se déroule. Si l'animation ne se déroule pas sur un pseudo-élément, mais sur un élément, la chaîne de caractères sera vide.

## Méthodes

_Hérite également des propriétés de son parent {{domxref("Event")}}._

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Initialise un AnimationEvent créé avec la méthode obsolète {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}}.

## Spécifications

| Spécification                                                                                                | Statut                                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-interface', 'AnimationEvent') }} | {{ Spec2('CSS3 Animations') }} | Première définition. |

## Compatibilité des navigateurs

{{Compat("api.AnimationEvent")}}

## Voir également

- [Utiliser les animations CSS](/fr/docs/CSS/Animations_CSS)
- {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
