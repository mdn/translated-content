---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando o objeto especificado.

## Sintaxe

```
str.toString()
```

## Descrição

O objeto {{jsxref("String")}} substitui o método `toString()` do objeto {{jsxref("Object")}}. Ele não herda {{jsxref("Object.prototype.toString()")}}. Para objetos {{jsxref("String")}}, o método `toString()` retorna uma representação de string do objeto e é o mesmo que o método {{jsxref("String.prototype.valueOf()")}}.

## Exemplos

### Usando `toString()`

O exemplo a seguir exibe o valor string de um objeto {{jsxref("String")}}:

```js
var x = new String("Hello world");

console.log(x.toString()); // retorna 'Hello world'
```

## Especificações

| Especificação                                                                          | Estado               | Comentário                                         |
| -------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                    | {{Spec2('ES3')}}     | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.2', 'String.prototype.toString')}}                    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.tostring', 'String.prototype.toString')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.tostring', 'String.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.toString")}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
