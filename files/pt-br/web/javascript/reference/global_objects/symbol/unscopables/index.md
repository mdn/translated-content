---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---

{{JSRef}}

O símbolo **`Symbol.unscopables`** é usado para específicar um valor objeto cujo os nomes de propriedade próprio e herdados são excluídos das associações do ambiente [`with`](/pt-BR/docs/Web/JavaScript/Reference/Statements/with) o objeto associado.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Descrição

O `@@unscopables` símbolo (`Symbol.unscopables`) pode ser definido em qualquer objeto para impedir que os nomes da propriedade sejam expostos como variavéis lexicais [`with`](/pt-BR/docs/Web/JavaScript/Reference/Statements/with) ligações de ambiente. Note que se usar o [Strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode), `with` as declarações não estão disponíveis e provavelmente não haverá necessidade desse símbolo.

Configurando a propriedade para `true` em um objeto `unscopables` tornará ele não _unscopable_ e portanto não irá apareer nas variavéis de escopo lexicais. Configurando uma propriedade para `false` o tornará `scopable` e portanto irá aparecer no escopo de variavéis lexicais.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Escopo com declarações

O seguinte código funciona normalmente no ES5 e anteriores. Entretanto, no ECMAScript 2015 e superiores, o método {{jsxref("Array.prototype.keys()")}} foi introduzido. Isso significa que dentro do ambiente `with` "chaves" seria agora o método e não as variavéis. Isso qunado os símbolos `unscopable`s foram introduzidos. Uma confiração built-in `unscopables` é implementada como {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} para prevenir que alguns métodos de Array tenham escopo definido na desclaração `with`.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

### Objetos não escopáveis

Você também pode configurar `unscopables` para seu próprio objeot.

```js
var obj = {
  foo: 1,
  bar: 2,
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true,
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## Especificações

| Especificação                                                            |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-symbol.unscopables', 'Symbol.unscopables')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.unscopables")}}

## Veja também

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- [`with`](/pt-BR/docs/Web/JavaScript/Reference/Statements/with) statement (not available in [Strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode))
