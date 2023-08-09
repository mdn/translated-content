---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

O método **`add()`** acrescenta um novo elemento com o valor especificado no final de um objeto `Set`.

## Sintaxe

```
mySet.add(value);
```

### Parâmetros

- value
  - : Requerido. O valor de um elemento a ser adicionado ao objeto Set.

### Valor de retorno

O objeto `Set`.

## Exemplos

### Usando o método `add`

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // pode ser encadeado

console.log(mySet);
// Set [1, 5, "some text"]
```

## Especificações

| Especificações                                                         | Status               | Comentário         |
| ---------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-set.prototype.add', 'Set.prototype.add')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-set.prototype.add', 'Set.prototype.add')}} | {{Spec2('ESDraft')}} |                    |

## Compatilidade de Navegadores (Browser)

{{Compat("javascript.builtins.Set.add")}}

## Notas específicas para Firefox

- Antes do Firefox 33, `Set.prototype.add retornava` `undefined` e não era possível encadear chamadas. Isto foi resolvido ([Erro do Firefox 1031632](https://bugzil.la/1031632)). O comportamento pode ser encontrado no Chrome/v8 ([issue](https://code.google.com/p/v8/issues/detail?id=3410)).

## Veja também

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
