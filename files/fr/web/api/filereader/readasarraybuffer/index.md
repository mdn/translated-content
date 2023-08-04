---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
---

{{APIRef("File API")}}

La méthode **`readAsArrayBuffer()`** de l'interface {{domxref("FileReader")}} permet de lire un {{domxref("Blob")}} ou un {{domxref("File")}} (_fichier_). Quand l'opération est finie, l'attribut {{domxref("FileReader.readyState","readyState")}} prend la valeur `"DONE"` (_terminé_) à savoir `2`, et l'événement [`loadend`](/fr/docs/Web/API/FileReader/loadend_event) est levé. L'attribut {{domxref("FileReader.result","résultat")}} contient alors les données lues sous la forme d'un objet {{domxref("ArrayBuffer")}}.

> **Note :** La méthode {{domxref("Blob.arrayBuffer()")}} est une nouvelle API basée sur les promesses permettant de lire un fichier.

## Syntaxe

```js
instanceOfFileReader.readAsArrayBuffer(blob);
```

### Paramètres

- `blob`
  - : Le {{domxref("Blob")}} ou le {{domxref("File")}} (_fichier_) devant être lu.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("FileReader")}}
