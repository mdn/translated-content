---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

O método **`get()`** retorna um elemento especificado de um objeto `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.get(object1));
// Expected output: 42

console.log(weakmap1.get(object2));
// Expected output: undefined
```

## Sintaxe

```
wm.get(chave);
```

### Parâmetros

- chave
  - : Obrigatório. A chave do elemento a ser retornado pelo objeto `WeakMap`.

### Valor de retorno

O elemento associado à chave especificada no objeto `WeakMap`. Se a chave não for encontrada, retorna-se {{jsxref("undefined")}}.

## Exemplos

### Utilizando o método `get`

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Retorna "foo".
wm.get("baz"); // Retorna undefined.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
