---
title: Blob.slice()
slug: Web/API/Blob/slice
---

{{APIRef("File API")}}

O método **`Blob.slice()`** é usado para criar um novo {{domxref("Blob")}} object contendo os dados no intervalo especificado de bytes da fonte {{domxref("Blob")}}.

> **Nota:** Nota: Esteja ciente de que o método `slice ()` tem prefixos de fornecedores em alguns navegadores e versões: `blob.mozSlice ()` para Firefox 12 e anteriores e `blob.webkitSlice ()` no Safari. Uma versão antiga do método `slice ()`, sem prefixos de fornecedor, tinha uma semântica diferente e é obsoleta

## Sintaxe

```
let blob = instanceOfBlob.slice([start [, end [, contentType]]]);
```

### Parâmetros

- `start` {{optional_inline}}
  - : An index into the {{domxref("Blob")}} indicating the first byte to include in the new {{domxref("Blob")}}. If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the {{domxref("Blob")}}. The default value is 0. If you specify a value for `start` that is larger than the size of the source {{domxref("Blob")}}, the returned {{domxref("Blob")}} has size 0 and contains no data.
- `end` {{optional_inline}}
  - : An index into the {{domxref("Blob")}} indicating the first byte that will \*not\* be included in the new {{domxref("Blob")}} (i.e. the byte exactly at this index is not included). If you specify a negative value, it's treated as an offset from the end of the string toward the beginning. For example, -10 would be the 10th from last byte in the {{domxref("Blob")}}. The default value is `size`.
- `contentType` {{optional_inline}}
  - : The content type to assign to the new {{domxref("Blob")}}; this will be the value of its `type` property. The default value is an empty string.

### Return value

A new {{domxref("Blob")}} object containing the specified data from the source {{domxref("Blob")}}.

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{domxref("Blob")}}
- {{domxref("BlobBuilder")}}
