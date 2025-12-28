---
title: "ErrorEvent : propriété error"
short-title: error
slug: Web/API/ErrorEvent/error
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`error`** de l'interface {{DOMxRef("ErrorEvent")}} retourne une valeur JavaScript, telle qu'une erreur ({{JSxRef("Error")}}) ou une erreur DOM ({{DOMxRef("DOMException")}}), représentant l'erreur associée à cet évènement.

## Valeur

N'importe quelle valeur JavaScript valide.

## Exemples

```js
window.addEventListener("error", (ev) => {
  console.log(`Instance d'erreur : ${ev.error}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
