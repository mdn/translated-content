---
title: WindowClient.navigate()
slug: Web/API/WindowClient/navigate
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La méthode **`navigate()`** de l'interface {{domxref("WindowClient")}} charge une URL spécifiée dans une page de client contrôlée, puis retourne une {{jsxref("Promise")}} qui devra être analysée par {{domxref("WindowClient")}} (le demandeur).

## Syntaxe

```js
WindowClient.navigate(url).then(function (WindowClient) {
  // do something with your WindowClient after navigation
});
```

### Paramètres

- `url`
  - : L'emplacement pour naviguer vers (url est une string) .

### Retour

Une {{jsxref("Promise")}} qui sera analysée par le demandeur {{domxref("WindowClient")}} (fonctionnement asynchrone : je te promet de faire, mais je suis pas sûr, à toi de vérifier) .

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
