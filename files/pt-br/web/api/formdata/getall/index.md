---
title: FormData.getAll()
slug: Web/API/FormData/getAll
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

O metodo **`getAll()`** do {{domxref("FormData")}} retorna todos os valores associados com a chave dentro `de um objeto FormData`.

> [!NOTE]
> Este metodo esta disponivel no [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.getAll(name);
```

### Parametros

- `nome`
  - : O {{domxref("USVString")}} representa o nome da chave que você quer pegar.

### Retorno

Um array de {{domxref("FormDataEntryValue")}}s.

## Exemplo

A seguinte linha cria um objeto `FormData` vazio:

```js
var formData = new FormData();
```

Se nós adicionarmos dois valores para `username` {{domxref("FormData.append")}}:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

A seguinte função `getAll()` retornara um array com os valores dentro de `username`:

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Using FormData objects](/pt-BR/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
