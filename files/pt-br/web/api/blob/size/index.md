---
title: Blob.size
slug: Web/API/Blob/size
translation_of: Web/API/Blob/size
---
{{APIRef("File API")}}

A propriedade **`Blob.size`** retorna o tamanho em bytes de {{domxref("Blob")}} ou um {{domxref("File")}}.

## Syntaxe

```
var sizeInBytes = blob.size
```

### Valor

Um número.

## Exempl0

```js
// fileInput é um HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files é um objeto FileList (similiar ao NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  console.log(files[i].name + " has a size of " + files[i].size + " Bytes");
}
```

## Especificações

| Especificação                                                | Status                       | Comentário         |
| ------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName('File API', '#dfn-size', 'size')}} | {{Spec2('File API')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("api.Blob.size")}}

## Veja também

- {{domxref("Blob")}}
