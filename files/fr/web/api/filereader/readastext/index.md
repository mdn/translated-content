---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

La méthode `readAsText` est utilisée pour lire le contenu du {{domxref("Blob")}} ou {{domxref("File")}} spécifié en paramètre. Lorsque la lecture est terminée, l'état {{domxref("FileReader.readyState","readyState")}} passe à `DONE`, l'événement [`loadend`](/fr/docs/Web/API/FileReader/loadend_event) est lancé, et l'attribut {{domxref("FileReader.result","result")}} contient le contenu du fichier sous forme de chaîne de caractères.

## Syntaxe

```js
instanceOfFileReader.readAsText(blob[, encoding]);
```

### Parameters

- `blob`
  - : Le {{domxref("Blob")}} ou {{domxref("File")}} qui doit être lu.
- encoding {{optional_inline}}
  - : Une chaîne de caractères spécifiant l'encodage utilisé dans les données de retour. Par défaut, UTF-8 est utilisé lorsque le paramètre n'est pas spécifié.

## Exemples

```js
var selectedFile = document.getElementById("input").files[0];
var content = document.getElementById("content");
var reader = new FileReader();
reader.onload = function (event) {
  content.innerHTML = reader.result;
};
reader.readAsText(selectedFile);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("FileReader")}}
