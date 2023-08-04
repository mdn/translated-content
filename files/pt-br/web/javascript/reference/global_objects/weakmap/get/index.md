---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
---

{{JSRef}}

O método **`get()`** retorna um elemento especificado de um objeto `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

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

| Specification                                                                  | Status               | Comment             |
| ------------------------------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.WeakMap.get")}}

## Ver também

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
