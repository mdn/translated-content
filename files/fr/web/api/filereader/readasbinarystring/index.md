---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
translation_of: Web/API/FileReader/readAsBinaryString
---
{{APIRef("File API")}}

La méthode `readAsArrayBuffer()` de l'interface {{domxref("FileReader")}} permet de lire un {{domxref("Blob")}} ou un {{domxref("File")}} (_fichier_). Quand l'opération est finie, l'attribut {{domxref("FileReader.readyState","readyState")}} prend la valeur `"DONE"` (_terminé_), et l'événement {{event("loadend")}} est levé.

L'attribut {{domxref("FileReader.result","result")}} contient alors les données binaires brutes lues.

Notez que cette méthode fût enlevée de l'API, mais réintroduite pour des raison de compatibilité ascendante.

L'utilisation de {{domxref("FileReader.readAsArrayBuffer()")}} est recomandée.

## Syntaxe

    instanceOfFileReader.readAsBinaryString(blob);

### Paramètres

- `blob`
  - : Le {{domxref("Blob")}} or {{domxref("File")}} devant être lu.

## Exemple

```js
var canvas = document.createElement('canvas');
var height = 200;
var width  = 200;

canvas.width  = width;
canvas.height = height;

var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#090';
ctx.beginPath();
ctx.arc(width/2, height/2, width/2 - width/10, 0, Math.PI*2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onload = function () {
    console.log(reader.result);
  }

  reader.readAsBinaryString(blob);
});
```

## Spécifications

| Specification                                                                            | Status                       | Comment |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{SpecName('File API','#readAsBinaryString','readAsBinaryString')}} | {{Spec2('File API')}} |         |

## Compatibilité des navigateurs

{{Compat("api.FileReader.readAsBinaryString")}}

## See also

- {{domxref("FileReader")}}
