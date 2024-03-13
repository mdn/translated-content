---
title: Animation
slug: Web/API/Animation
---

{{ APIRef("Web Animations API") }}{{SeeCompatTable}}

L'interface **`Animation`** de [l'API Web Animations](/fr/docs/Web/API/Web_Animations_API) correspond à un lecteur d'animations et offre les commandes nécessaires au contrôle et à la chronologie d'un noeud ou d'une source d'animation.

## Constructeur

- {{domxref("Animation.Animation()", "Animation()")}}
  - : Crée une nouvelle instance de l'objet `Animation`.

## Propriétés

- {{domxref("Animation.currentTime")}}
  - : La valeur actuelle de temps de l'animation en millisecondes, que l'animation soit en pause ou en cours. Si l'animation ne possède pas de {{domxref("AnimationTimeline", "timeline")}}, est inactive ou n'a toujours pas été lancée, la valeur est `null`.

<!---->

- {{domxref("Animation.effect")}}
  - : Récupère et défini le {{domxref("KeyframeEffect")}} associé à cette animation.
- {{domxref("Animation.finished")}} {{readOnlyInline}}
  - : Retourne la `Promise` terminée en cours pour cette animation.

<!---->

- {{domxref("Animation.id")}}
  - : Récupère et défini le `String` utilisé pour identifier l'animation.
- {{domxref("Animation.playState")}} {{readOnlyInline}}
  - : Retourne une valeur énumérée qui décit l'état de lecture de l'animation.

<!---->

- {{domxref("Animation.playbackRate")}}
  - : Retourne et défini la fréquence de lecture de l'animation.

<!---->

- {{domxref("Animation.ready")}} {{readOnlyInline}}
  - : Retourne la `Promise` prête en cours pour l'animation.

<!---->

- {{domxref("Animation.startTime")}}
  - : Retourne et défini le moment prévu auquel la lecture de l'animation devrait commencer.

<!---->

- {{domxref("Animation.timeline")}}
  - : Retourne et défini la {{domxref("AnimationTimeline", "timeline")}} associée à cette animation.

### Gestionnaire d'événements

- {{domxref("Animation.oncancel")}}
  - : Retourne et définit le gestionnaire d'évènement pour l'évènement `cancel` (annuler).
- {{domxref("Animation.onfinish")}}
  - : Retourne et définit le gestionnaire d'évènement pour l'évènement `finish` (terminer).

## Méthodes

- {{domxref("Animation.cancel()")}}
  - : Supprime toutes les {{domxref("KeyframeEffect", "keyframeEffects")}} dues à cette animation et interomp la lecture.

<!---->

- {{domxref("Animation.finish()")}}
  - : Cherche la fin de l'animation, en fonction que l'animation soit en lecture normale ou inversée.

<!---->

- {{domxref("Animation.pause()")}}
  - : Suspend la lecture de l'animation.

<!---->

- {{domxref("Animation.play()")}}
  - : Démarre ou reprend la lecture de l'animation, ou redémarre l'animation au début si celle-ci est déjà terminée.

<!---->

- {{domxref("Animation.reverse()")}}
  - : Inverse la direction de lecture, en s'arrêtant au début de l'animation. Si l'animation est terminée ou annulée, elle sera jouée de la fin vers le début.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
