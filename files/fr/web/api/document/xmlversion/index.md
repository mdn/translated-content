---
title: Document.xmlVersion
slug: Web/API/Document/xmlVersion
---

{{APIRef("DOM")}}{{deprecated_header}}

Renvoie le numéro de version comme spécifié dans la déclaration XML (par exemple, `<?xml version="1.0"?>`) ou "1.0" si la déclaration est absente.

Cet attribut n'a jamais été réellement utile, parce qu'il a toujours renvoyé 1.0, et a été supprimé dans la spécification DOM Niveau 4. En conséquence, Firefox 10 ne l'implémente plus. Son utilisation principale dans le passé consistait à détecter si le document était rendu en XML plutôt qu'en HTML. Pour ce faire, vous pouvez créer un élément avec son nom en minuscule, puis vérifier s'il est converti en majuscules (auquel cas le document est en mode HTML non XML) :

```js
if (document.createElement("foo").tagName == "FOO") {
  /* le document n'est pas XML */
}
```

## Spécifications

{{Specifications}}
