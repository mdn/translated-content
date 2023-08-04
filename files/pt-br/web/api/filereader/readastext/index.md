---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

O método readAsText é usado para ler conteúdos de um {{domxref("Blob")}} ou {{domxref("File")}} especificados. Quando a operação de leitura é concluida, o {{domxref("FileReader.readyState","readyState")}} é alterado para DONE, o {{event("loadend")}} é disparado, e o atributo {{domxref("FileReader.result","result")}} passa a conter o conteúdo do arquivo como um texto em formato string.

## Sintaxe

```
instanceOfFileReader.readAsText(blob[, encoding]);
```

### Parâmetros

- `blob`
  - : O {{domxref("Blob")}} ou {{domxref("File")}} a ser lido.
- encoding {{optional_inline}}
  - : Uma string especificando a codificação a ser usada para o dado retornado. Por padrão, UTF-8 é assumido se o parâmetro não for especificado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("FileReader")}}
