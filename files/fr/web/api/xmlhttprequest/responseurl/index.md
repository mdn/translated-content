---
title: "XMLHttpRequest : propriété responseURL"
short-title: responseURL
slug: Web/API/XMLHttpRequest/responseURL
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`responseURL`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne l'URL sérialisée de la réponse ou une chaîne de caractères vide si l'URL est `null`. Si l'URL est retournée, tout fragment d'URL présent dans l'URL est supprimé. La valeur de `responseURL` est l'URL finale obtenue après d'éventuelles redirections.

## Exemples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/test", true);
xhr.onload = () => {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
