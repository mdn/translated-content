---
title: performance.toJSON()
slug: Web/API/Performance/toJSON
---

{{APIRef("High Resolution Timing")}}

La méthode **`toJSON()`** de l'interface {{domxref("Performance")}} est un sérialiseur standard : elle renvoie une représentation JSON des propriétés de l'objet performance.

{{AvailableInWorkers}}

## Syntaxe

```js
myPerf = performance.toJSON();
```

### Arguments

Aucun

### Valeur de retour

- `myPerf`
  - : Un objet JSON qui est la sérialisation de l'objet {{domxref("Performance")}}.

## Exemple

```js
var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
