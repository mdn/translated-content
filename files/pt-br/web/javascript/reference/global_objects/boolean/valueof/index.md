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

| Especificação                                                                      | Condição           | Comentário                                         |
| ---------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.6.4.3', 'Boolean.prototype.valueOf')}}                | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-boolean.prototype.valueof', 'Boolean.prototype.valueOf')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Boolean.valueOf")}}

## Veja também

- {{jsxref("Object.prototype.valueOf()")}}
