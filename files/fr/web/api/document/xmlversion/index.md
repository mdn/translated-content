---
title: "Document : propriété xmlVersion"
short-title: xmlVersion
slug: Web/API/Document/xmlVersion
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`xmlVersion`** de l'interface {{DOMxRef("Document")}} retourne le numéro de version comme spécifié dans la déclaration XML (par exemple, `<?xml version="1.0"?>`) ou «&nbsp;1.0&nbsp;» si la déclaration est absente.

Cet attribut n'a jamais été réellement utile, parce qu'il a toujours retourné 1.0, et a été supprimé dans la spécification DOM Niveau 4. En conséquence, Firefox 10 ne l'implémente plus. Son utilisation principale dans le passé consistait à détecter si le document était rendu en XML plutôt qu'en HTML. Pour ce faire, vous pouvez créer un élément avec son nom en minuscule, puis vérifier s'il est converti en majuscules (auquel cas le document est en mode HTML non XML)&nbsp;:

```js
if (document.createElement("toto").tagName == "TOTO") {
  /* le document n'est pas XML */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
