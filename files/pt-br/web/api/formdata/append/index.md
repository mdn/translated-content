---
title: FormData.append()
slug: Web/API/FormData/append
---

{{APIRef("XMLHttpRequest")}}

O método **`append()`** da Interface {{domxref("FormData")}} adiciona um novo valor dentro de uma chave existente dentro do objeto `FormData` ou adiciona a chave caso ainda não exista.

A diferença entre {{domxref("FormData.set")}} e `append()` é que se uma chave específica já exista, {{domxref("FormData.set")}} irá substituir o valor existente com um novo valor, já o `append()` irá adicionar um novo valor no fim do conjunto de valores.

> **Nota:** Este metodo esta desponivel no [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

Existe duas versoes deste metodo: um de dois e um outro de tres:

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### Parametros

- `name`
  - : O nome do campo cujos dados estão contidas em value.
- `value`
  - : O valor deste campo . Nas duas versões este é a {{domxref("USVString")}}, ou caso não seja , este é convertido em string. Na versão de tres parametros este pode ser {{domxref("Blob")}}, {{domxref("File")}}, ou {{domxref("USVString")}}, de novo, caso nenhum deses forem especificados este valor é convertido em uma string.
- `filename` {{optional_inline}}
  - : O filename reporta para o servidor (a {{domxref("USVString")}}), quando a {{domxref("Blob")}} ou {{domxref("File")}} é passado como o segundo parametro. O default filename para {{domxref("Blob")}} o objecto é "blob".

> **Nota:** Se espisificares {{domxref("Blob")}} como a data append para o objecto `FormData` , o filename a ser reportado para o servidor no "Content-Disposition" header usado para mudar de browser em browser.

### Retorna

Void.

## Exemplo

As seguintes linhas criam um Objecto `FormData` vazio:

```js
var formData = new FormData(); // Corrente vazio
```

Podes adicionar chaves/valores pares para usar (domxref("FormData.append")}}:

```js
formData.append("username", "Chris");
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Tambem

- {{domxref("XMLHTTPRequest")}}
- [Usando XMLHttpRequest](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [UsandoFormData objects](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
