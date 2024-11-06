---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
---

{{JSRef}}

O método **`set()`** adiciona ou atualiza um elemento com a chave especificada e um valor do objeto `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## Sintaxe

```js
set(key, value);
```

### Parâmetros

- `key`
  - : A chave do elemento que será adicionado ao objeto `Map`.
- `value`
  - : O valor do elemento que será adicionado ao objeto `Map`.

### Valor retornado

O objeto `Map`.

## Exemplos

### Usando o set()

```js
let myMap = new Map();

// Adiciona um elemento ao map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Atualiza um elemento no map
myMap.set("bar", "baz");
```

### Usando o `set` de forma encadeada

Já que o método `set()` retorna o mesmo objeto `Map`, você pode encadear a chamada do método como abaixo:

```js
// Adiciona novos elementos ao map de forma encadeada.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
