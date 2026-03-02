---
title: "ErrorEvent : propriété colno"
short-title: colno
slug: Web/API/ErrorEvent/colno
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

La propriété en lecture seule **`colno`** de l'interface {{DOMxRef("ErrorEvent")}} retourne un entier contenant le numéro de colonne du fichier de script dans lequel l'erreur est survenue.

## Valeur

Un entier.

## Exemples

```js
window.addEventListener("error", (ev) => {
  console.log(`L'erreur se produit à la colonne : ${ev.colno}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
