---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

{{JSRef}}

O método **`Object.seal()`** sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).

## Sintaxe

```
Object.seal(obj)
```

### Parâmetros

- `obj`
  - : O Objeto que deve ser selado.

### Valor de retorno

O Objeto sendo selado.

## Descrição

Por padrão, objetos são {{jsxref("Object.isExtensible()", "extensible", "", 1)}} (novas propriedades podem ser adicionadas à eles). Selar um objeto evita que novas propriedades sejam adicionadas e marca todas as propriedades existentes como não configuráveis. Isto tem o efeito de tornar as propriedades no objeto fixas e imutáveis. Tornando todas as propriedades não configuráveis também evita que as mesmas sejam convertidas de propriedades de dados para propriedades de acesso e vice-versa, mas não evita que os valores das propriedades de dados sejam alterados. A tentativa de deletar ou adicionar propriedades à um objeto selado, ou converter uma propriedade de dado para uma propriedade de acesso ou vice-versa, irá falhar, seja silenciosamente como jogando o erro {{jsxref("TypeError")}} (mais comumente, mas não exclusivamente, quando em modo rigoroso {{jsxref("Strict_mode", "strict mode", "", 1)}} de código).

A cadeia de prototipação permanece intocada. Entretanto, a propriedade [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} é selada também.

Retorna a referência ao Objeto passado.

## Exemplos

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Novas propriedades podem ser adicionadas, propriedades existentes podem ser alteradas ou removidas.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Alterar o valor das propriedades em um objeto selado ainda funciona.
obj.foo = "quux";

// Mas você não pode converter propriedades de dados em propriedades de acesso, e vice-versa.
Object.defineProperty(obj, "foo", {
  get: function () {
    return "g";
  },
}); // throws a TypeError

// Agora quaisquer mudanças, que não sejam aos valores da das propriedades, irão falhar.
obj.quaxxor = "the friendly duck"; // silently doesn't add the property
delete obj.foo; // silently doesn't delete the property

// e em modo rigoroso (strict mode) tais tentativas irão jogar erros do tipo TypeErrors.
function fail() {
  "use strict";
  delete obj.foo; // throws a TypeError
  obj.sparky = "arf"; // throws a TypeError
}
fail();

// Tentativas através do Object.defineProperty também irão falhar.
Object.defineProperty(obj, "ohai", { value: 17 }); // lança um erro do tipo TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // altera o valor da propriedade existente
```

## Notas

No ES5, se o argumento passado à este método não é um objeto (primitivo) , irá causar um erro {{jsxref("TypeError")}}. No ES6, qualquer argumento que não seja um objeto será tratado como se fosse um objeto ordinário selado e simplesmente irá retorná-lo

```js
Object.seal(1);
// TypeError: 1 não é um Objeto (código ES5)

Object.seal(1);
// 1                             (código ES6)
```

## Especificações

| Especificação                                              | Status               | Comentário                                           |
| ---------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.8', 'Object.seal')}}      | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no Javascript 1.8.5. |
| {{SpecName('ES6', '#sec-object.seal', 'Object.seal')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.seal', 'Object.seal')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.seal")}}

## Veja também

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
