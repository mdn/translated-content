---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}

La propriété en lecture seule isTrusted, de l'interface {{domxref("Event")}}, est un booléen qui vaut true lorsque l'événement est généré par une action de l'utilisateur, et false, quand l'événement est créé ou modifié par un script ou envoyé par dispatchEvent.

## Syntaxe

```js
var bool = event.isTrusted;
```

## Exemple

```js
if (e.isTrusted) {
  /* The event is trusted. */
} else {
  /* The event is not trusted. */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
