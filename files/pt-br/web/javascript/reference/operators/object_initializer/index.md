---
title: Inicializador de Objeto
slug: Web/JavaScript/Reference/Operators/Object_initializer
---

{{JsSidebar("Operadores")}}

Objetos podem ser inicializados utilizando [`new Object()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object), `Object.create()`, ou a notação _literal_. Um inicializador de objetos é uma lista de zero ou mais pares de _propriedade: valor_, separados por vírgula e fechado por um par de chaves (`{}`).

## Sintaxe

```js
var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo",
  b = 42,
  c = {};
var o = { a: a, b: b, c: c };

var o = {
  propriedade: function ([parâmetros]) {},
  get propriedade() {},
  set propriedade(valor) {},
};
```

### Novas notações em ECMAScript 2015

Por favor, verifique o suporte das anotações na tabela de compatibilidade. Em ambientes que não dão suporte às anotações, ocorrerá erros de sintaxe.

```js
// // Abreviação em nomes de propriedades (ES2015)
var a = "foo",
  b = 42,
  c = {};
var o = { a, b, c };

// // Abreviação em nomes de métodos (ES2015)
var o = {
  property([parameters]) {},
  get property() {},
  set property(value) {},
};

// Nomes de propriedades computados (ES2015)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

## Descrição

Um inicializador de objetos é uma expressão que descreve a inicialização de um {{jsxref("Object")}}. Objects consiste de _propriedades_, as quais descrevem um objeto. Os valores das propriedades de um objeto podem ser tipos de dados {{Glossary("primitivos")}} ou outros objetos .

### Criando objetos

Um objeto vazio, sem propriedades, pode ser criado como:

```js
var object = {};
```

Contudo, a vantagem em utilizar a notação _literal_ ou o _inicializador_ é a possibilidade de rapidamente criar objetos com propriedades dentro de chaves (`{}`). Você simplesmente cria uma lista de pares _chave: valor_, separados por vírgula. O código abaixo cria um objeto com três propriedades, sendo as chaves "foo", "age" e "baz", com seus respectivos valores, tipo string de valor "bar", tipo number de valor 42 e, por último, um outro objeto com seus respectivos pares de _chave: valor_.

```js
var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Acessando propriedades

Uma vez que você criou um objeto, é interessante que possa ler ou alterá-lo. As propriedades de um objeto podem ser acessadas utilizando a notação de ponto ou colchetes. Veja [assessores de propriedade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors) para mais informações.

```js
object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
```

### Definições de propriedade

Nós temos aprendido como descrever propriedades utilizando a sintaxe _inicializador_. No entanto, às vezes, há variáveis que queremos inserir em nosso objeto. Então teremos um código parecido como abaixo:

```js
var a = "foo",
  b = 42,
  c = {};

var o = {
  a: a,
  b: b,
  c: c,
};
```

Com ECMAScript 2015, há uma notação mais curta que possibilita atingir o mesmo resultado:

```js
var a = "foo",
  b = 42,
  c = {};

// Abreviação em nomes de propriedades (ES2015)
var o = { a, b, c };

// Em outras palavras,
console.log(o.a === { a }.a); // true
```

#### Duplicação em nomes de propriedades

Quando se está utilizando o mesmo nome para suas propriedades, a última sobrescreverá as anteriores.

```js
var a = { x: 1, x: 2 };
console.log(a); // { x: 2}
```

Em códigos ECMAScript 5 no modo estrito, duplicação em nomes de propriedades serão consideradas {{jsxref("SyntaxError")}}. Porém, com a introdução de "nomes de propriedades computadas", tornou-se possível a duplicação das propriedades em tempo de execução. Assim, ECMAScript 2015 removeu a restrição.

```js
function haveES2015DuplicatePropertySemantics() {
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}
```

### Definição de métodos

Uma propriedade de um objeto pode se referir à [function](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function), ou aos métodos [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) ou [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set).

```js
var o = {
  propriedade: function ([parâmetros]) {},
  get propriedade() {},
  set propriedade(valor) {},
};
```

No ECMAScript 2015, uma notação abreviada está disponível, dispensando o uso da palavra reservada "function".

```js
// Abreviações em nomes de métodos (ES2015)
var o = {
  propriedade([parâmetros]) {},
  get propriedade() {},
  set propriedade(valor) {},
  *gerador() {},
};
```

Com ECMAScript 2015, há uma forma concisa em criar propriedades cujo valor é uma função gerador.

```js
var o = {
  * gerador() {
    ...........
  }
};
```

Mas em ECMAScript 5, você escreveria (lembrar que em ES5 não há geradores):

```js
var o = {
  generator: function *() {
    ...........
  }
};
```

Para mais informações e exemplos, veja [definições de método](/pt-BR/docs/Web/JavaScript/Reference/Functions/Definicoes_metodos).

### Nomes de propriedades computados

Começando com ECMAScript 2015, a sintaxe _inicializador_ de objeto também suporta "nomes de propriedades computados". Isso permite que você possa inserir uma expressão dentro de colchetes `[]`, que será computada como o nome de uma propriedade. Isto é semelhante à notação de chaves utilizado em [acessor de propriedade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors), utilizado para ler a alterar as propriedades existentes em um objeto. Segue um exemplo utilizando a mesma sintaxe em objetos literais:

```js
// Nomes de propriedades computados (ES2015)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = "size";
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};

console.log(config); // { size: 12, mobileSize: 4 }
```

### Mutação Prototype

Uma definição de propriedade na forma de `__proto__: valor` or `"__proto__": valor` não cria uma propriedade com o nome `__proto__`. Inclusive, se o valor fornecido for um objeto ou [`null`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null), muda o `[[Prototype]]` do objeto criado para o valor informado. (Se o valor fornecido não é um objeto ou null, o valor não será alterado.)

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { __proto__: protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

Apenas uma única mudança em prototype é permitida em um objeto: múltiplas mudanças gera erro de sintaxe.

Definições de propriedade que não utilizam da notação de ":", não são consideradas mudanças de prototype: são definições de propriedades que se comportam de forma semelhante às definições utilizando qualquer outro nome.

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = {
  __proto__() {
    return "hello";
  },
};
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## Notação de objeto literal vs JSON

A notação de objeto literal não é a mesma de **J**ava**S**cript **O**bject **N**otation ([JSON](/pt-BR/docs/JSON)). Mesmo que possuam semelhanças, há as seguintes diferenças:

- JSON permite definições de propriedades utilizando apenas aspas duplas, como `"propriedade": valor`. E a definição não pode ser abreviada.
- Os valores JSON podem ser apenas strings, numbers, arrays, `true`, `false`, `null`, ou outro objeto JSON.
- Uma função como valor (veja "Métodos" acima) não pode ser atribuido em JSON.
- Objetos como {{jsxref("Date")}} serão do tipo string após {{jsxref("JSON.parse()")}}.
- {{jsxref("JSON.parse()")}} rejeitará "nomes de propriedades computados" e um erro será lançado.

## Especificações

| Specification                                                            | Status               | Comment                                                                                                                                  |
| ------------------------------------------------------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                      | {{Spec2('ES1')}}     | Definição inicial.                                                                                                                       |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}               | {{Spec2('ES5.1')}}   | [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) e [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set) adicionados. |
| {{SpecName('ES6', '#sec-object-initializer', 'Object Initializer')}}     | {{Spec2('ES6')}}     | Abreviações de nomes em propriedades/métodos e nomes de propriedados computados foram adicionados.                                       |
| {{SpecName('ESDraft', '#sec-object-initializer', 'Object Initializer')}} | {{Spec2('ESDraft')}} |                                                                                                                                          |

## Compatibilidade com navegadores

{{Compat("javascript.operators.object_initializer")}}

## Veja também

- [Assesores de propriedade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/pt-BR/docs/Web/JavaScript/Reference/Functions/set)
- [Definições de métodos](/pt-BR/docs/Web/JavaScript/Reference/Functions/Definicoes_metodos)
- [Lexical grammar](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)
