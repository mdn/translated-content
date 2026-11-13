---
title: "ErrorEvent : propriété lineno"
short-title: lineno
slug: Web/API/ErrorEvent/lineno
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`lineno`** de l'interface {{DOMxRef("ErrorEvent")}} retourne un entier contenant le numéro de ligne du fichier de script dans lequel l'erreur est survenue.

## Valeur

Un entier.

## Exemples

```js
window.addEventListener("error", (ev) => {
  console.log(`L'erreur se produit à la ligne : ${ev.lineno}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
