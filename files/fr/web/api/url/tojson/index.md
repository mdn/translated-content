---
title: URL.toJSON()
slug: Web/API/URL/toJSON
---

{{APIRef("URL API")}}

La méthode **`toJSON()`** de l'interface {{domxref("URL")}} retourne un {{domxref("USVString")}} contenant une version sérialisé de l'URL, même si dans la pratique, il semble avoir le même effet que {{domxref("URL.toString()")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
json = url.toJSON();
```

### Paramètres

Aucun.

### Valeur retournée

A {{domxref("USVString")}}.

## Exemples

```js
const url = new URL(
  "https://developer.mozilla.org/fr/docs/Web/API/URL/toString",
);
url.toJSON();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
