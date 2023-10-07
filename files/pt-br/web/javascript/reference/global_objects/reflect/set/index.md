---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
---

{{JSRef}}

O método estático **`Reflect.set()`** define uma propriedade em um objeto.

## Sintaxe

```
Reflect.set(alvo, propriedade, valor[, receptor])
```

### Parâmetros

- `alvo`
  - : O objeto alvo onde a propriedade será definida.
- `propriedade`
  - : O nome da propriedade a ser definida.
- valor
  - : o valor a ser definido para a propriedade.
- receptor
  - : O valor do `this` fornecido para a chamada do alvo se um setter é encontrado.

### Retorno

Um {{jsxref("Boolean")}} indicando se a definicão da propriedade ocorreu com sucesso ou não.

### Exceções

Um {{jsxref("TypeError")}}, se o `alvo` não for um {{jsxref("Object")}}.

## Descrição

O método `Reflect.set` permite que você defina uma propriedade em um objeto. Ele define a propriedade e is like the [property accessor](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors) syntax as a function.

## Exemplos

### Usando `Reflect.set()`

```js
// Object
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// É possível truncar o array
Reflect.set(arr, "length", 1); // true
arr; // ["duck"];

// Com apenas um argumento, propertKey e valor são undefined
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## Especificações

| Specification                                              | Status               | Comment            |
| ---------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-reflect.set', 'Reflect.set')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-reflect.set', 'Reflect.set')}} | {{Spec2('ESDraft')}} |                    |

## Compatilibidade com navegadores

{{Compat("javascript.builtins.Reflect.set")}}

## Veja também

- {{jsxref("Reflect")}}
- [Property accessors](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
