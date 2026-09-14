---
title: "ErrorEvent : propriété filename"
short-title: filename
slug: Web/API/ErrorEvent/filename
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`filename`** de l'interface {{DOMxRef("ErrorEvent")}} retourne une chaîne de caractères contenant le nom du fichier de script dans lequel l'erreur est survenue.

## Valeur

Une chaîne de caractères.

## Exemples

```js
window.addEventListener("error", (ev) => {
  console.log(`L'erreur se produit dans le fichier : ${ev.filename}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
