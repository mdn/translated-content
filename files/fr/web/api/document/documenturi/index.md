---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}

La propriété **`documentURI`** de l'interface {{domxref("Document")}} renvoie l'emplacement du document sous forme "string" (_chaîne de caractères_).

Initialement, la spécification DOM3 définissait cet attribut en lecture/écriture. Dans la norme actuelle DOM, il est en lecture seule.

## Syntaxe

```js
var string = document.documentURI;
```

## Notes

Les documents HTML ont une propriété {{domxref("document.URL")}} qui renvoie la même valeur. Contrairement à l'`URL`, `documentURI` est disponible pour tous les types de documents.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
