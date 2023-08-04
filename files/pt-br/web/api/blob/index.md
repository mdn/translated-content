---
title: Blob
slug: Web/API/Blob
---

{{ APIRef("File API") }}

## Sumário

Um objeto `Blob` representa um objeto do tipo arquivo, com dados brutos imutáveis. Blobs representam dados que não estão necessariamente em um formato JavaScript nativo. A interface {{ domxref("File") }} é baseada no `Blob`, herdando funcionalidade blob e expandindo-o para suportar arquivos no sistema do usuário.

Para construir um `Blob` a partir de outro objeto ou dado não-blob , utilize o construtor {{domxref("Blob.Blob","Blob()")}}. Para criar um blob que contém um subconjunto de dados de outro blob, use o método {{domxref("Blob.slice()", "slice()")}}. Para obter um objeto Blob de um arquivo no sistema de arquivos do usuário, veja a documentação {{domxref("File")}}.

As APIs que aceitam objetos `Blob` também são listados na documentação {{domxref("File")}}.

> **Nota:** O método `slice()` usava inicialmente `length` como segundo argumento para indicar o numero de bytes a copiar no novo `Blob`. Se você especificou valores de maneira que `start + length` excederam o tamanho do `Blob` de origem, o `Blob` retornado contém dados a partir do início do índice até o final do `Blob` de origem.

> **Nota:** Esteja ciente que o método `slice()` possui prefixos de fornecedores em alguns navegadores e versões: `blob.mozSlice()` para Firefox 12 e anteriores, e `blob.webkitSlice()` para Safari. Uma versão antiga do método `slice()`, sem prefixos de fornecedor, tem semântica diferente, e portanto é obsoleta. O suporta para `blob.mozSlice()` foi descontinuado a partir do Firefox 30.

## Construtor

- {{domxref("Blob.Blob", "Blob(blobParts[, opções])")}}
  - : Retorna um novo `Blob` object cujo conteúdo consiste na concatenação do array de valores passados por parâmentro.

## Propriedades

- {{domxref("Blob.size")}} {{readonlyinline}}
  - : Tamanho em bytes dos dados contidos no objeto `Blob`.
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : Uma string que indica o MIME type dos dados no `Blob`. Se o tipo é desconhecido, então retorna uma string vazia.

## Métodos

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Retorna um novo `Blob` object contendo dados em no intervalo de bytes especificado do `Blob` de origem.

## Exemplos

### Exemplos de uso do construtor Blob

O código a seguir:

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // o blob
```

equivale a:

```js
var oBuilder = new BlobBuilder();
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
oBuilder.append(aFileParts[0]);
var oMyBlob = oBuilder.getBlob("text/xml"); // o blob
```

> **Aviso:** O {{ domxref("BlobBuilder") }} oferece outra maneira para criar Blobs, mas é depreciado e não deveria mais ser usado.

### Exemplo para criar uma URL para uma array tipada usando blob

O código a seguir:

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], { type: "application/octet-binary" }); // passe um MIME-type útil aqui
var url = URL.createObjectURL(blob);
// url será algo do tipo: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// agora você pode usar a URL em qualquer contexto em que URLs regulares podem ser usadas, por exemplo: img.src, etc.
```

### Exemplo de Extração de Dados de Um Blob

O único jeito de ler o conteúdo de um Blob é usando {{domxref("FileReader")}}. O código a seguir lê o conteudo de um Blob como um Array.

```js
var reader = new FileReader();
reader.addEventListener("loadend", function () {
  // reader.result contém o conteúdo do blob como uma array tipada
});
reader.readAsArrayBuffer(blob);
```

Ao usar outros métodos de {{domxref("FileReader")}}, é possível ler o conteúdo de um Blob como uma string ou como uma data URL.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{ domxref("BlobBuilder") }}
- {{ domxref("File") }}
