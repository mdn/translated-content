---
title: Event.cancelable
slug: Web/API/Event/cancelable
---

{{ ApiRef("DOM") }}

La propriété _`cancelable`_ (_annulable_) de "Event" Indique si l'événement peut être annulé et donc empêché, comme si l'événement ne s'était jamais produit. Si l'événement n'est pas annulable, alors sa propriété `cancelable` est à `false` (_faux_) et l'écouteur d'événement ne peut pas l'arrêter.

L'appel de {{domxref("event.preventDefault", "preventDefault()")}} sur un évènement qui ne peut être annulé produit une erreur, aussi les écouteurs d'évènement qui gèrent de nombreux types d'évènements peuvent être vérifiés avec `cancelable` avant d'appeler leurs méthodes `preventDefault()`.

La plupart des événements natifs du navigateur qui peuvent être annulés sont ceux qui résultent de l'interaction de l'utilisateur avec la page. L'annulation des événements [click](/fr/docs/Web/Events/click), [scroll](/fr/docs/Web/Events/scroll) ou [beforeunload](/fr/docs/Web/Events/beforeunload) empêcherait l'utilisateur de cliquer sur un élément, de faire défiler la page ou de la quitter, respectivement.

## Syntaxe

```js
bool = event.cancelable;
```

- Le résultat est un `booléen` qui est `true` (_vrai_) si l'événement peut être annulé.

## Exemple

Par exemple, les vendeurs de navigateurs proposent que l'évènement [`wheel`](/fr/docs/Web/API/Document/wheel_event) puisse être annulable seulement [la première fois que l'écouteur est appelé (ressource en anglais)](https://github.com/WICG/interventions/issues/33)&nbsp;; les évènements `wheel` suivants ne peuvent être annulés.

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // L'événement peut être annulé, alors nous le faisons.
    event.preventDefault();
  } else {
    // L'évènement ne peut pas être annulé, il n'est donc pas sûr
    // d'appeler preventDefault() sur lui.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventCancelableEvents);
```

## Notes

Si l'événement peut être annulé, ou non, est déterminé au moment de l'initialisation de celui-ci.

Pour annuler un événement, utiliser la méthode {{domxref("event.preventDefault", "preventDefault()")}} sur celui-ci. Cela permet d'empêcher l'action par défaut associée à l'événement de s'exécuter.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
