---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

> **Aviso:** **Cuidado:** Alterando o `[[Prototype]]` de um objeto é, pela natureza que as engines do Javascript modernos otimizam os acessos à propriedades, uma operação muito lenta, em **_TODOS_ **os mecanismos browsers e JavaScript. Os efeitos no desempenho de alteração na herança são sutis e distantes, e não se limitam simplesmente ao tempo gasto em na declaração `obj.__proto__ = ...`, mas podem se estender para **_qualquer_** código que tenha acesso a **_qualquer_** objeto cujo `[[Prototype]]` foi alterado. Se você se preocupa com desempenho, evite configurar o `[[Prototype]]` de um objeto. Ao invés disso, crie um novo objeto com o `[[Prototype]]` desejado usando {{jsxref("Object.create()")}}.

> **Aviso:** **Cuidado:** Enquanto `Object.prototype.__proto__` é suportado hoje em dia em quase todos os navegadores, a existência e o comportamento exato foram padronizados na especificação ECMAScript 2015 como um recurso legado para assegurar compatibilidade com os navegadores. Para melhor suporte, recomenda-se que apenas {{jsxref("Object.getPrototypeOf()")}} seja usado em vez disso.

{{JSRef}}

A propriedade `__proto__` de {{jsxref("Object.prototype")}} é uma propriedade de acesso (uma função getter e uma setter) que expõe o interno `[[Prototype]]` (ou um objeto ou {{jsxref("Global_Objects/null", "null")}}) de um objeto o qual é acessado.

O uso de `__proto__` é controverso, e foi desencorajado. Nunca foi incluído originalmente na especificação do idioma EcmaScript, mas os navegadores modernos decidiram implementá-lo de qualquer maneira. Somente recentemente, a propriedade `__proto__` foi padronizada na especificação de linguagem ECMAScript 2015 para navegadores para garantir compatibilidade, e então ser suportada no futuro. É obsoleta a favor de {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} e {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}} (embora ainda, definir `[[Prototype]]` é uma operação lenta que deve ser evitada se o desempenho for uma preocupação).

A propriedade `__proto__` também pode ser usada em uma definição literal de objeto para definir o objeto `[[Prototype]]` na criação, como uma alternativa para {{jsxref("Object.create()")}}. Veja: [object initializer / literal syntax](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Sintaxe

```js
var shape = {};
var circle = new Circle();

// Define o objeto prototype.
// OBSOLETO. Isto é somente exemplo. NÃO FAÇA ISSO em código real.
shape.__proto__ = circle;

// Retorna o objeto prototype
console.log(shape.__proto__ === circle); // true
```

```js
var shape = function () {};
var p = {
  a: function () {
    console.log("aaa");
  },
};
shape.prototype.__proto__ = p;

var circle = new shape();

circle.a(); //aaa

console.log(shape.prototype === circle.__proto__); //true

//ou

var shape = function () {};
var p = {
  a: function () {
    console.log("a");
  },
};

var circle = new shape();
circle.__proto__ = p;

circle.a(); //  a

console.log(shape.prototype === circle.__proto__); //false

//ou

function test() {}
test.prototype.myname = function () {
  console.log("myname");
};
var a = new test();

console.log(a.__proto__ === test.prototype); //true

a.myname(); //myname

//ou

var fn = function () {};
fn.prototype.myname = function () {
  console.log("myname");
};

var obj = {
  __proto__: fn.prototype,
};

obj.myname(); //myname
```

Nota: são dois underscores(underlines), seguidos de cinco caracteres "proto", seguidos por mais dois underscores(underlines).

## Descrição

A função getter de `__proto__` expõe o valor interno de `[[Prototype]]` de um objeto. Para objetos criado usando um objeto literal, este valor é {{jsxref("Object.prototype")}}. Para os objetos criados usando literais de matrizes, esse valor é {{jsxref("Array.prototype")}}. Para funções, esse valor é {{jsxref("Function.prototype")}}. Para objeto criados usando `new fun`, onde `fun` é uma função construtora built-in fornecida pelo JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, e assim por diante — incluindo novos construtores adicionados como evolução do JavaScript), este valor é sempre `fun.prototype`. Para objetos criados usando `new fun`, onde `fun` é uma função definida em um script, esse valor é o valor de `fun.prototype`. (Ou seja, se o construtor não retornou um outro objeto explicitamente, ou o `fun.prototype` foi reatribuído desde que a instância foi criada).

O setter `__proto__` permite ao `[[Prototype]]` de um objeto sejá mutável. O objeto deve ser extensível de acordo com {{jsxref("Object.isExtensible()")}}: se não for, um erro {{jsxref("Global_Objects/TypeError", "TypeError")}} é emitido. O valor fornecido deve ser um objeto ou {{jsxref("Global_Objects/null", "null")}}. Fornecer qualquer outro valor não fará nada.

Para entender como os prototypes são usados para herança, veja o artigo:[Inheritance and the prototype chain](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

A propriedade `__proto__` é simplesmente uma propriedade acessora {{jsxref("Object.prototype")}} consistindo de uma função getter e setter. Um acesso de propriedade para `__proto__` que eventualmente consulte {{jsxref("Object.prototype")}} irá encontrar esta propriedade, mas um acesso que não consulta {{jsxref("Object.prototype")}} não a encontrará. Se alguma outra propriedade `__proto__` for encontrada antes de consultar {{jsxref("Object.prototype")}}, essa propriedade irá ocultar a que encontrou {{jsxref("Object.prototype")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.proto")}}

## Notas de compatibilidade

Enquanto a especificação ECMAScript 2015 dita que o suporte para `__proto__` é requerido _somente_ para navegadores (apesar de ser normativo), outros ambientes podem suportar também para uso legado.

## Veja também

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
