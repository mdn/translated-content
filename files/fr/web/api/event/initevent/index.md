---
title: event.initEvent
slug: Web/API/Event/initEvent
---

{{ApiRef("DOM")}}{{deprecated_header}}

La méthode **`Event.initEvent()`** est utilisée pour initialiser la valeur d'un objet {{domxref("event")}} créé à l'aide de {{domxref("Document.createEvent()")}}.

Les évènements initialisés par ce moyen ont été créés par la méthode {{domxref("Document.createEvent()")}}. Celle-ci doit être appelée à définir l'évènement avant qu'il ne soit distribué, en utilisant {{domxref("EventTarget.dispatchEvent()")}}. Une fois l'évènement transmis, la méthode ne fait plus rien.

> **Note :** Ne pas utiliser cette méthode qui est dépréciée.
>
> À la place, utilisez un constructeur d'évènements spécifique comme {{domxref("Event.Event", "Event()")}} . La page [Création et déclenchement d'évènements](/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events) vous donne plus d'informations sur la manière de les utiliser.

## Syntaxe

```js
event.initEvent(type, bubbles, cancelable);
```

- `type`
  - : est une {{domxref("DOMString")}} qui définit le type d'évènement.
- `bubbles`
  - : est un {{jsxref("Boolean")}} indiquant si l'évènement doit se propager vers le haut dans la chaîne des évènements ou non. Une fois déterminé, la propriété en lecture seule {{domxref("Event.bubbles")}} donnera sa valeur.
- `cancelable`
  - : Une valeur booléenne définissant si l'évènement peut être annulé. Une fois déterminé, la propriété en lecture seule {{ domxref("Event.cancelable") }} donnera sa valeur.

## Exemple

```js
// Crée un évènement.
var event = document.createEvent("Event");

// Crée un évènement click qui doit se propager vers le haut
// et ne peut être annulé
event.initEvent("click", true, false);

// Écoute les évènements.
elem.addEventListener(
  "click",
  function (e) {
    // e.target matches elem
  },
  false,
);

elem.dispatchEvent(event);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le constructeur à utiliser à la place de cette méthode dépréciée : {{domxref("Event.Event","Event()")}}. Des constructeurs plus spécifiques peuvent aussi être utilisés.
