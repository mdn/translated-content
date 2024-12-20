---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

O método **`FormData.entries()`** retorna um {{jsxref("Iteration_protocols",'iterator')}} permitindo percorrer todos os valores de chave/valor contidos nesse objeto. A chave de cada par é um objeto {{domxref("USVString")}}; o valor é {{domxref("USVString")}}, ou um {{domxref("Blob")}}.

> [!NOTE]
> This method is available in [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```
formData.entries();
```

### Valor retornado

Retorna um {{jsxref("Iteration_protocols","iterator")}}.

## Exemplo

```js
// Criação de um objeto teste de FormData
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Exibição dos valores chave/valor
for (var pair of formData.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

O resultado é:

```
key1, value1
key2, value2
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
