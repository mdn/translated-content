---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
---

{{JSRef}}

O método estátitico **`Atomics.add()`** adiciona um dado valor em uma determinada posição no array e retorna o valor antigo daquela posição. Esta operação atômica garante que nenhuma outra escrita ocorra até que o valor modificado seja escrito de volta.

## Sintaxe

```
Atomics.add(typedArray, index, value)
```

### Parâmetros

- `typedArray`
  - : Um array tipado de inteiros compartilhado. Pode ser {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, ou {{jsxref("Uint32Array")}}.
- `index`
  - : A posição no `typedArray` onde o `value` será adicionado.
- `value`
  - : Número que será adicionado.

### Valor de retorno

O valor antigo na determinada posição (`typedArray[index]`).

### Exceções

- Lança uma exceção {{jsxref("TypeError")}}, se o `typedArray` não for um dos tipos de inteiro permitidos.
- Lança uma exceção {{jsxref("TypeError")}}, se o `typedArray` não for tipo array tipado compartilhado.
- Lança uma exceção {{jsxref("RangeError")}}, se o `index` estiver fora dos limites no `typedArray`.

## Exemplos

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // retorna 0, o valor antigo
Atomics.load(ta, 0); // 12
```

## Especificações

| Especificação                                              | Status               | Comentário                   |
| ---------------------------------------------------------- | -------------------- | ---------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.add', 'Atomics.add')}} | {{Spec2('ESDraft')}} | Definição inicial no ES2017. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Atomics.add")}}

## Veja também

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
