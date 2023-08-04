---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
---

{{JSRef}}

O método **`delete()`** remover o elemento especificado ou setado a partir de um objeto instanciado do `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## Sintaxe

```
wm.delete(key);
```

### Parâmetros

- chave(key)
  - : Requerido. A chave(`key`) do elemento a ser removido do objeto instanciado do `WeakMap`.

### Valores retornados

`true` se o emento do objeto do `WeakMap` tenha sido removido com sucesso. `false` se a chave(`key`) não for encontrada no `WeakMap` ou se a chave(`key`) não for um objeto.

## Exemplos

### Usando o método `delete`

```js
var wm = new WeakMap();
wm.set(window, "foo");

console.log(wm.delete(window)); // Retorna true. Removido com sucesso.

wm.has(window); // Retorna false. O objeto window não é mais pertecente ao WeakMap.
```

## Especificações

| Especificação                                                                        | Status               | Comentário        |
| ------------------------------------------------------------------------------------ | -------------------- | ----------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}}  | {{Spec2('ES2015')}}  | Definição inicial |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.WeakMap.delete")}}

## Ver também

- {{jsxref("WeakMap")}}
