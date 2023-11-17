---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

O método **`valueOf()`** retorna o valor primitivo de um objeto {{jsxref("Boolean")}}.

## Sintaxe

```
bool.valueOf()
```

### Parâmetros

Nenhum.

## Descrição

O método `valueOf` do {{jsxref("Boolean")}} retorna o valor primitivo de um objeto {{jsxref("Boolean")}} ou um literal {{jsxref("Boolean")}} como tipo de dado Boolean.

Esse método é geralmente chamado internamente pelo JavaScript e não explicitamente no código.

## Exemplos

### Usando `valueOf`

```js
x = new Boolean();
myVar = x.valueOf(); // atribui o valor false à variável myVar
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.valueOf()")}}
