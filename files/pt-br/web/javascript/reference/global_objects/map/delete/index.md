---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

O método **`delete()`** remove o elemento específico do objeto `Map` através de sua chave.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## Sintaxe

```js
delete key;
```

### Parâmetros

- `key`
  - : A chave do elemento que será removido do objeto `Map`.

### Valor retornado

`true` se o elemento do `Map` existia e foi removido, ou
`false` se o elemento não existe.

## Exemplos

### Usando o delete()

```js
var myMap = new Map();
myMap.set("bar", "foo");

myMap.delete("bar"); // Retorna true. Removido com sucesso.
myMap.has("bar"); // Retorna false. O elemento "bar" não está mais presente
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
