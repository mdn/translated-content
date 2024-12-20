---
title: FormData.has()
slug: Web/API/FormData/has
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

O método **`has()`** da interface {{domxref("FormData")}} retorna um booleano declarando se o objeto `FormData` contém uma certa chave.

> [!NOTE]
> This method is available in [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```js
formData.has(name);
```

### Parâmetros

- `name`
  - : Uma {{domxref("USVString")}} que representa o nome da chave que você que testar.

### Retorna

Um {{domxref("Boolean")}}.

## Exemplo

A linha a seguir cria um objeto `FormData` vazio:

```js
var formData = new FormData();
```

O trecho a seguir mostra os resultados de testar a existência de `username` no objeto `FormData`, antes e depois de acrescentar um valor de `username` no objeto usando {{domxref("FormData.append")}}:

```js
formData.has("username"); // Retorna false
formData.append("username", "Chris");
formData.has("username"); // Retorna true
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
