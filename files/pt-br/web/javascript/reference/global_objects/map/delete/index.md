---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

O método **`delete()`** remove o elemento específico do objeto `Map` através de sua chave.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

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
