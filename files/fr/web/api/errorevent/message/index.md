---
title: "ErrorEvent : propriété message"
short-title: message
slug: Web/API/ErrorEvent/message
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`message`** de l'interface {{DOMxRef("ErrorEvent")}} retourne une chaîne de caractères contenant un message d'erreur lisible décrivant le problème.

## Valeur

Une chaîne de caractères.

## Exemples

```js
window.addEventListener("error", (ev) => {
  console.log(`Message d'erreur : ${ev.message}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
