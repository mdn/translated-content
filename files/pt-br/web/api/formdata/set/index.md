---
title: FormData.set()
slug: Web/API/FormData/set
---

{{APIRef("XMLHttpRequest")}}

O método **`set()`** da interface {{domxref("FormData")}} adiciona o novo valor para um chave existente em um objeto `FormData`, ou adicionar a combinação chave/valor caso ela não exista.

A diferença entre `set()` e {{domxref("FormData.append")}} é que, se a chave especificada já existir, `set()` irá sobrescrever todos os valores existentes pelo novo valor, enquanto o {{domxref("FormData.append")}} apenas acrescenta o novo valor ao conjunto de valores existentes.

> **Nota:** Esse método está disponível em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

Existem duas versões desse método: uma com dois e outra com três parâmetros:

```js
formData.set(name, value);
formData.set(name, value, filename);
```

#### Parâmetros

- `name`
  - : O nome do campo cujo dado está em `value`.
- `value`
  - : O valor do campo. Na versão de dois parâmetros, esse é um {{domxref("USVString")}}, e caso não seja, ele é convertido para uma string. Na versão de três parâmetros ele pode ser um {domxref("Blob")}}, {{domxref("File")}}, ou um {{domxref("USVString")}}. Se nenhum desses valores forem especificados, o valor será convertido para string.
- `filename` {{optional_inline}}
  - : O nome do arquivo a ser enviado (um {{domxref("USVString")}}), quando um {{domxref("Blob")}} ou um {{domxref("File")}} é passdo como o segundo parâmetro. O nome de arquivo padrão para objetos do tipo {{domxref("Blob")}} é "blob".

> **Nota:** Se você especificar um {{domxref("Blob")}} como o dado a ser acrescentado ao objeto `FormData`, o nome do arquivo que será enviado para o servidor, enviado no atributo "Content-Disposition" no cabeçalho varia de navegador para navegador.

## Exemplo

A linha a seguir cria um objeto `FormData` vazio:

```js
var formData = new FormData(); // Currently empty
```

Você pode adicionar os pares chave/valor usando (domxref("FormData.set")}}:

```js
formData.set("username", "Chris");
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{domxref("XMLHTTPRequest")}}
- [Usando XMLHttpRequest](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Usando objetos FormData](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
