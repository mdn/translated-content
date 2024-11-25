---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}O objeto **WeakSet** pertmite que você armazene objetos mantidos "fracamente" na coleção.

## Syntaxe

```
 new WeakSet([iterable]);
```

### Parâmetros

- iterable
  - : Se um[objeto interagível](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) é passado, todos os seus elementos serão adicionados ao novo `WeakSet`.

## Descrição

Objetos `WeakSet` são coleções de objetos. Um objeto no `WeakSet` pode ocorrer uma vez; é único na coleção do `WeakSet`.

As principais diferenças para o objeto {{jsxref("Set")}} são:

- Em contraste ao `Sets`, `WeakSets` são **coleções apenas de objetos** e não de valores arbitrários de qualquer tipo.
- O `WeakSet` é _fraco_. Referências aos objetos nas coleções são mantidas "fracamente". Se não há outra referência para um objeto mantido na `WeakSet`, eles pode ser coletados pelo gerenciamento de memória (_garbage collection_).

## Propriedades

- `WeakSet.length`
  - : O valor da propriedade de comprimento é 0.
- {{jsxref("WeakSet.prototype")}}
  - : Representa o protóripo para o construtos `Set`. Permite a adição de propriedades para todos os objetos do `WeakSet`.

## `Instâncias WeakSet`

Todas as instâncias do `WeakSet` herdam do {{jsxref("WeakSet.prototype")}}.

### Propriedades

<!-- TODO: page macro not supported: page('en-US/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Properties') -->

### Métodos

<!-- TODO: page macro not supported: page('en-US/Web/JavaScript/Reference/Global_Objects/WeakSet/prototype','Methods') -->

## Exemplos

### Usando o objeto do `WeakSet`

```js
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false, foo não foi adicionado ao set

ws.delete(window); // remove window do set
ws.has(window); // false, window foi removido
```

## Especificações

{{Specifications}}

## Compatilidade de Browser

{{Compat}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
