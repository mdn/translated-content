---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

{{JSRef}}

O método estático **`Reflect.apply()`** chama uma função alvo com os argumentos especificados.

## Sintaxe

```
Reflect.apply(target, thisArgument, argumentsList)
```

### Parâmetros

- target
  - : Função que será chamada.
- thisArgument
  - : O valor de "`this"` que será usado pela function do target.
- argumentsList
  - : Um objeto do tipo array que especifica os argumentos com que o _`target`_ deve ser chamado.

### Valor de retorno

O resultado da função alvo chamada com o **`this`** e argumentos especificados.

### Exceções

Um {{jsxref("TypeError")}}, se a função especificada no _target_ não for invocável.

## Descrição

No ES5, tipicamente é usado o método {{jsxref("Function.prototype.apply()")}} para chamar uma função com o valor de `this e argumentos` fornecidos como um array (ou um [array-like object](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Com o `Reflect.apply` isso se torna menos verboso e mais fácil de entender.

## Exemplos

### Usando `Reflect.apply()`

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

## Especificações

| Especificação                                                  | Status               | Comentário         |
| -------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-reflect.apply', 'Reflect.apply')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-reflect.apply', 'Reflect.apply')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Reflect.apply")}}

## Veja também

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
