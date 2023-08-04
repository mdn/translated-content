---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
---

{{APIRef}}

Un [`EventHandler`](/fr/docs/Web/API/EventHandler) qui réagit aux changements de `readyState`. Le callback est appelé dans le contexte du thread de rendu. La propriété **`XMLHttpRequest.onreadystatechange`** contient le gestionnaire d'évènement appelé lorsque l'évènement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) est déclenché, soit chaque fois que la propriété {{domxref("XMLHttpRequest.readyState", "readyState")}} de {{domxref("XMLHttpRequest")}} est modifiée.

> **Attention :** Ne doit pas être utilisé avec des requêtes synchrone ni avec du code natif.

## Syntaxe

```js
XMLHttpRequest.onreadystatechange = callback;
```

### Valeurs

- `callback` est la fonction exécutée lorsque `readyState` change.

## Exemple

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
