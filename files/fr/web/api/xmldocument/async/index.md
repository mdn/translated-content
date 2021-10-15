---
title: Document.async
slug: Web/API/XMLDocument/async
tags:
  - API
  - Asynchrone
  - DOM
  - Document
  - Propriété
  - XML
translation_of: Web/API/XMLDocument/async
---
{{APIRef("DOM")}}{{Deprecated_header}} {{Non-standard_header}}

`document.async` peut être défini pour indiquer si un appel {{domxref("document.load")}} doit être une requête asynchrone ou synchrone. `true` (_vrai_) est la valeur par défaut, indiquant que les documents doivent être chargés de façon asynchrone.

(Il a été possible de charger des documents de manière synchrone depuis 1.4 alpha.)

## Exemple

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Donne le contenu querydata.xml sous forme "string" (chaîne de caractère)
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## Spécification

- [DOM Level 3 Load & Save module](http://www.w3.org/TR/DOM-Level-3-LS/load-save.html#LS-DocumentLS)

## Voir aussi

- [XML in Mozilla](/fr/docs/XML_dans_Mozilla)
- {{domxref("document.load")}}
