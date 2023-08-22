---
title: URLSearchParams.values()
slug: Web/API/URLSearchParams/values
---

{{APIRef("URL API")}}

O m*étodo* **`URLSearchParams.values()`**retorna um {{jsxref("Iteration_protocols",'iterator')}} que permite passar por todos os valores do objeto. Os valores são objetos {{domxref("USVString")}}.

> **Nota:** Esse método está disponível no [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```
searchParams.values();
```

### Valor de retorno

Retorna um {{jsxref("Iteration_protocols","iterator")}}.

## Exemplo

```js
// Cria um objeto URLSearchParams
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Mostra os pares de chave/valor
for (var value of searchParams.values()) {
  console.log(value);
}
```

O resultado é:

```
value1
value2
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Outras interfaces relacionadas à URL: {{domxref("URL")}}, {{domxref("URLUtils")}}.
