---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

O método **`has()`** retorna um booleano indicando se um elemento com a chave especificada existe no objeto `WeakMap` ou não.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## Sintaxe

```
wm.has(chave);
```

### Parameters

- chave
  - : Obrigatório. A chave do elemento cuja presença deve ser verificada no objeto `WeakMap`.

### Valor de retorno

- Boolean
  - : Retorna `true` se um elemento com a chave especificada existir no objeto `WeakMap`. Caso contrário, retorna `false`.

## Exemplos

### Utilizando o método `has`

```js
var wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // retorna true
wm.has("baz"); // retorna false
```

## Especificações

| Specification                                                                  | Status               | Comment             |
| ------------------------------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.WeakMap.has")}}

## Ver também

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
