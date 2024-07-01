---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
---

{{jsSidebar("Errors")}}

A exceção do Javascript "property is non-configurable and can't be deleted" ocorre
quando é feita a tentativa de deletar uma propriedade, mas a propriedade [não é configurável](/pt-BR/docs/Web/JavaScript/Data_structures#properties).

## Mensagem

```js
TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #<Object> (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}} apenas no modo strict.

## O que deu errado?

Foi feita a tentativa de deletar uma propriedade, mas esta propriedade [não é configurável](/pt-BR/docs/Web/JavaScript/Data_structures#properties). O
atributo `configurable` controla se a propriedade pode ser deletada do
objeto e se seus atributos (Exceto `writable`) podem ser alterados.

Este erro acontece apenas no modo [strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode). No
modo de código não estrito, a operação retorna `false`.

## Exemplos

### Tentando excluir uma propriedade não configurável

Propriedades não configuráveis não são comuns, mas podem ser criadas usando
{{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError

("use strict");
var obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

Também existem algumas propriedades não configuráveis embutidas no Javascript. Talvez você tenha
tentado deletar uma constante matemática.

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## Veja também

- [Operador delete](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
