---
title: FormData.delete()
slug: Web/API/FormData/delete
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

O metodo **`delete()`** da interface {{domxref("FormData")}} deleta uma chave/valor pares do Objecto `FormData` .

> [!NOTE]
> Este metodo esta Disponivel em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```js
formData.delete(name);
```

### Parametros

- `name`
  - : O name da chave que desejas apagar.

### Retorna

Void.

## Exemplo

Esta linha cria um objecto `FormData` vazio e subistitui com a chave/valor pares de form:

```js
var formData = new FormData(myForm);
```

Podes deletar chave/valor pares usando `delete()`:

```js
formData.delete("username");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Tambem

- {{domxref("XMLHTTPRequest")}}
- [Usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Usando Objecto FormData](/pt-BR/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
