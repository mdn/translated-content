---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

A propriedade somente-leitura **`name`** de um objeto {{jsxref("Function")}} indica o nome da função como especificado quando esta foi criada, ou `"anonymous"` para funções criadas anonimamente.

{{EmbedInteractiveExample("pages/js/function-name.html")}}{{js_property_attributes(0,0,1)}}

> **Nota:** Note que em implementações não-standard anteriores à ES2015 o atributo `configurable` tinha também o valor `false`.

## Exemplos

### Nome de declaração da função

A propriedade `name` retorna o nome de uma declaração de função.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Nome do construtor da função

Funções criadas com a sintaxe `new Function(...)` ou somente `Function(...)` criam objetos {{jsxref("Function")}} com o nome "anonymous".

```
(new Function).name; // "anonymous"
```

### Nomes de função inferidos

Variáveis e métodos podem inferir o nome de uma função anônima a partir de sua posição sintática (novo na ECMAScript 2015).

```js
var f = function () {};
var object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

Você pode definir uma função com um nome numa {{jsxref("Operators/Function", "expressão de função", "", 1)}}:

```js
var object = {
  someMethod: function object_someMethod() {},
};
console.log(object.someMethod.name); // grava o log "object_someMethod"

try {
  object_someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: object_someMethod is not defined
```

Você não pode mudar o nome de uma função, pois a propriedade é somente-leitura:

```js
var object = {
  // anonymous
  someMethod: function () {},
};

object.someMethod.name = "otherMethod";
console.log(object.someMethod.name); // someMethod
```

Para mudá-lo, você poderia no entanto usar {{jsxref("Object.defineProperty()")}}.

### Nomes curtos de métodos

```js
var o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Nomes de funções vinculadas

{{jsxref("Function.bind()")}} produz uma função cujo nome é "bound " seguido do nome da função.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Nomes de função para _getters_ e _setters_

Ao usar propriedades acessórias [`get`](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) e [`set`](/pt-BR/docs/Web/JavaScript/Reference/Functions/set), "get" ou "set" aparecerão no nome da função.

```js
var o = {
  get foo() {},
  set foo(x) {},
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Nomes de funções em classes

Você pode usar `obj.constructor.name` para checar a "classe" de um objeto (porém leia com atenção os avisos abaixo):

```js
function Foo() {} // Sintaxe ES2015: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // grava o log "Foo"
```

> **Aviso:** O interpretador vai definir a propriedade interna `Function.name` somente se uma função não tiver uma propriedade já com o nome _name_ (veja a seção [9.2.11 da ECMAScript2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)). Porém, a ES2015 especifica que a palavra-chave _static_ de maneira que métodos estáticos serão definidos como OwnProperty da função construtora de classe (ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)).

Portanto não podemos obter o nome de virtualmente qualquer classe com um método estático `name()`:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Com um método `static name()`, `Foo.name` não guarda mais o nome verdadeiro da classe mas uma referência ao objeto de função `name()`. A definição de classe acima, escrita em sintaxe ES2015, se comportará de maneira similar ao seguinte trecho de código em sintaxe ES5 no Chrome ou no Firefox:

```js
function Foo() {}
Object.defineProperty(Foo, "name", { writable: true });
Foo.name = function () {};
```

Tentar obter a classe de `fooInstance` via `fooInstance.constructor.name` não nos dará de maneira alguma o nome da classe, mas sim uma referência ao método estático da classe. Exemplo:

```js
var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // grava o name() da função no log
```

Você pode ver também, a partir do exemplo de sintaxe ES5, que, no Chrome ou no Firefox, a nossa definição estática de `Foo.name` se torna _writable_. A predefinição interna na ausência de uma definição estática customizada é somente-leitura:

```js
Foo.name = "Hello";
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.
```

Portanto, você não pode assumir que a propriedade interna `Function.name` sempre guardará um nome de classe..

### Símbolos como nome de função

Se um {{jsxref("Symbol")}} é usado como nome de função e o símbolo tem uma descrição, o nome do método será a descrição entre colchetes.

```
var sym1 = Symbol("foo");
var sym2 = Symbol();
var o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## Compressores e minificadores JavaScript

> **Aviso:** Tenha cuidado ao usar `Function.name` e transformações de código-fonte, como aquelas executadas por compressores (minificadores) ou obfuscadores de JavaScript. Estas ferramentas são comumente usadas como parte de processos de _build_ de JavaScript para reduzir os tamanhos de programas antes da implementação em produção. Tais transformações frequentemente mudam nomes de função durante o _build_.

Código fonte do tipo:

```js
function Foo() {}
var foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

pode ser comprimido e se tornar:

```js
function a() {}
var b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

Na versão descomprimida, o programa cai no bloco-verdade e grava o log _'foo' is an instance of 'Foo'_. Todavia, na versão comprimida ele se comporta diferentemente, e cai no bloco `else`. Se você depende de `Function.name`, como no exemplo acima, tenha certeza que seu processo de _build_ não mude nomes de função, ou então não assuma que uma função terá um nome determinado.

## Especificações

| Specification                                                   | Status               | Comment            |
| --------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-name', 'name')}}                     | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-function-instances-name', 'name')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.name")}}
