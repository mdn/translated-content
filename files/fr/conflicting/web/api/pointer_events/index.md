---
title: Gérer à la fois événement tactile et événement de la souris
slug: conflicting/Web/API/Pointer_events
translation_of: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
original_slug: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
---
{{DefaultAPISidebar("Touch Events")}}

Les interfaces {{domxref("Touch_events","touch")}} permettent aux applications de créer de meilleures expériences utilisateurs sur les appareils tactiles. Pourtant, la grande majorité du contenu web actuel est développé pour fonctionner uniquement avec la souris. En conséquence, même si un navigateur supporte le tactile, le navigateur continue à *émuler* les événements de la souris, donc le contenu qui se veut fonctionner uniquement à la souris fonctionnera toujours *tel quel* sans modification directe.

Idéalement, une application tactile n'a pas besoin de supporter explicitement la souris. Mais puisque le navigateur doit émuler les événements de la souris, il peut être nécessaire de gérer certains problèmes d'interaction. Ci-dessous, vous trouverez des détails concernant l'interaction et ses répercussions pour les développeurs d'application.

## Déclenchement de l'événement

La norme des événements tactiles définit quelques exigences envers les navigateurs concernant l'interaction tactile et souris (voir la section [_Interaction with Mouse Events and click_](https://w3c.github.io/touch-events/#mouse-events) pour plus de détails), noter que *le navigateur peut déclencher à la fois des événements tactiles et des événements de la souris en réponse à une seule et même entrée de l'utilisateur.* Cette section décrit les exigences pouvant affecter une application.

Si le navigateur déclenche à la fois des événements tactiles et souris en réponse à une seule entrée d'un utilisateur, le navigateur *doit* déclencher un événement {{event("touchstart")}} avant tout événement de la souris. En conséquence, si une application ne veut pas que des événements de la souris soient déclenchés sur un élément {{domxref("Touch.target","target")}} spécifiquement tactile, le gestionnaire de l'événement tactile de l'élément devrait appeler {{domxref("Event.preventDefault()","preventDefault()")}} ainsi aucun événement additionnel de la souris sera envoyé.

Voici un extrait de code du gestionnaire de l'événement {{event("touchmove")}} qui appelle `preventDefault()`.

```js
// touchmove handler
function process_touchmove(ev) {
  // Call preventDefault() to prevent any further handling
  ev.preventDefault();
}
```

## Ordre des événements

Même si l'ordre spécifique des événements tactiles et souris est défini par l'implémentation, la norme indique que l'ordre suivant est _représentatif:_ pour une entrée :

- `touchstart`
- Zero ou plus d'événements `touchmove`, suivant le mouvement de(s) doigt(s)
- `touchend`
- `mousemove`
- `mousedown`
- `mouseup`
- `click`

Si l'événement {{event("touchstart")}}, {{event("touchmove")}} ou {{event("touchend")}} est annulé pendant une interaction, aucun événement de la souris ou du click sera déclenché, et la séquence des événements qui en résulte serait seulement :

- `touchstart`
- Zero ou plus d'événements `touchmove`, suivant le mouvement de(s) doigt(s)
- `touchend`

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail list](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC channel](irc://irc.w3.org:6667/)

## Related topics and resources

- [Touch Events Overview](/Web/API/Touch_events)
- [Using Touch Events](/Web/API/Touch_events/Using_Touch_Events)
- [Touch and Mouse (Together Again for the First Time)](http://www.html5rocks.com/en/mobile/touchandmouse/)
