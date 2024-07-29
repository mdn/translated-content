---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{JSRef}}

O método **`delete()`** remove o elemento especificado de um objeto `Set`.

## Sintaxe

```
mySet.delete(value);
```

### Parâmetros

- value
  - : Requerido. O valor do elemento a ser removido do objeto Set.

### Return value

Retorna `true` se um elemento contido no objeto Set foi removido com sucesso; caso contrário `false`.

## Exemples

### Uso do método `delete`

```js
var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // Retorna false. Nenhum elemento "bar" foi encontrado para deletar.
mySet.delete("foo"); // Retorna true. remoção bem sucedida.

mySet.has("foo"); // Retorna false. O elemento "foo" não está mais presente.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
