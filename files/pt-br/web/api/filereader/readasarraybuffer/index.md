---
title: FileReader.readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
tags:
  - API
  - DOM
  - File API
  - FileReader
  - Files
  - Method
  - Reference
  - readAsArrayBuffer
translation_of: Web/API/FileReader/readAsArrayBuffer
---
{{APIRef("File API")}}

O método **`readAsArrayBuffer()`** do objeto {{domxref("FileReader")}} é utilizado para ler o conteúdo de um {{domxref("Blob")}} ou {{domxref("File")}} específico. Quando a operação de leitura é finalizada, o {{domxref("FileReader.readyState","readyState")}} torna-se `DONE` (finalizado), e o evento {{event("loadend")}} é acionado. Então, o atributo {{domxref("FileReader.result","result")}} retorna um {{domxref("ArrayBuffer")}} representando os dados do arquivo.

## Sintaxe

```
instanceOfFileReader.readAsArrayBuffer(blob);
```

### Parâmetros

- `blob`
  - : O {{domxref("Blob")}} ou {{domxref("File")}} que será lido.

## Especificações

| Especificação                                                                                            | Status                       | Comentário        |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------- |
| {{SpecName("File API", "#readAsArrayBuffer", "FileReader.readAsArrayBuffer")}} | {{Spec2("File API")}} | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("api.FileReader.readAsArrayBuffer")}}

## Veja também

- {{domxref("FileReader")}}
