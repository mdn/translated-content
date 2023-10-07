---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef}}

O método **`Object.freeze()`** congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

## Sintaxe

```
Object.freeze(obj)
```

### Parâmetros

- `obj`
  - : O objeto a ser congelado.

### Valor de retorno

O objeto congelado.

## Descrição

Nada pode ser adicionado ou removido do conjunto de propriedades de um objeto congelado. Qualquer tentativa de fazê-lo irá falhar, ou silenciosamente ou através de um {{jsxref("TypeError")}} exception (mais frequentemente, mas não exclusivamente, quando em {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Valores não podem ser alterados para propriedades de dados. As propriedades do Accessor (getters e setters) funcionam da mesma forma (e ainda dão a ilusão de que você está alterando o valor). Observe que valores que são objetos ainda podem ser modificados, a menos que eles também sejam congelados.

## Exemplos

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Novas propriedades podem ser adicionadas, propriedades existentes podem ser alteradas ou removidas
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Tanto o objeto que está sendo passado, bem como o objeto retornado será congelado.
// É desnecessário salvar o objeto retornado para congelar o objeto original.
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// De agora em diante qualquer alteração irá falhar
obj.foo = "quux"; // silenciosamente não faz nada.
obj.quaxxor = "the friendly duck"; // silenciosamente não adiciona a propriedade

// ...e em modo strict tais tentativas irão lançar TypeErrors
function fail() {
  "use strict";
  obj.foo = "sparky"; // throws um TypeError
  delete obj.quaxxor; // throws um TypeError
  obj.sparky = "arf"; // throws um TypeError
}

fail();

// As tentativas de alteração através de Object.defineProperty também irão lançar
Object.defineProperty(obj, "ohai", { value: 17 }); // throws um TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // throws um TypeError
```

O exemplo a seguir mostra que valores do tipo objeto, em um objeto congelado, podem ser alterados (freeze é raso).

```js
obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'

// Para fazer um obj completamente imutável, congele cada objeto em obj.
// Para fazer isso, nós usamos essa função.
function deepFreeze(obj) {
  // Recuperar os nomes de propriedade definidos em obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Congelar as propriedades antes de congelar-se
  propNames.forEach(function (name) {
    var prop = obj[name];

    // Congele prop se for um objeto
    if (typeof prop == "object" && prop !== null) deepFreeze(prop);
  });

  // Congele-se (não faz nada se já estiver congelado)
  return Object.freeze(obj);
}

obj2 = {
  internal: {},
};

deepFreeze(obj2);
obj2.internal.a = "anotherValue";
obj2.internal.a; // undefined
```

## Notas

Em ES5, se um argumento para este método não for um objeto (um primitivo), então isso irá causar um {{jsxref("TypeError")}}. Em ES6, um argumento não-objeto vai ser tratado como se fosse um objeto comum congelado e simplesmente retornado.

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 code

> Object.freeze(1)
1                             // ES6 code
```

## Especificações

| Especificações                                                 | Status               | Comentários                                          |
| -------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.9', 'Object.freeze')}}        | {{Spec2('ES5.1')}}   | Definição inicial. Implementado em JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.freeze', 'Object.freeze')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.freeze', 'Object.freeze')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.freeze")}}

## Ver também

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
