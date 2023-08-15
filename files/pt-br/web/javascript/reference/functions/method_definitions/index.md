---
title: Definições de Método
slug: Web/JavaScript/Reference/Functions/Method_definitions
---

{{JsSidebar("Functions")}}

No ECMAScript 2015 foi introduzida uma sintaxe reduzida para definição de métodos em inicializadores de objetos. É uma abreviação para uma função atribuída ao nome do método.

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## Sintaxe

```
var obj = {
  propriedade( parametros… ) {},
  *generator( parametros… ) {},
// também com chaves computadas:
  [propriedade]( parameters… ) {},
  *[generator]( parametros… ) {},
// compare ES5 sintaxe para getter/setter:
  get propriedade() {},
  set propriedade(valor) {}
};
```

## Descrição

A sintaxe reduzida é similar à da [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) e [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set) introduzida no ECMAScript 5.

Dado o seguinte código:

```js
var obj = {
  foo: function () {},
  bar: function () {},
};
```

Agora você pode reduzi-lo para isto:

```js
var obj = {
  foo() {},
  bar() {},
};
```

### Generator methods

Os [generator methods](/pt-BR/docs/Web/JavaScript/Reference/Statements/function*) também podem ser definidos utilizando a sintaxe reduzida.

- Observe que o asterisco (\*) na sintaxe reduzida deve estar antes do nome da propriedade generator. Assim, `* g(){}` funcionará, porém `g *(){}` não.
- Se o método não for generator, sua definição não pode conter a palavra-chave `yield`. Dessa forma, [generator functions legadas](/pt-BR/docs/Web/JavaScript/Reference/Statements/Generator_function_legada) também não funcionarão, lançando um {{jsxref("SyntaxError")}}. Sempre utilize `yield` em conjunto com o asterisco (\*)

```js
// Utilizando a propriedade com nome (pre-ES6)
var obj2 = {
  g: function* () {
    var indice = 0;
    while (true) yield indice++;
  },
};

// O mesmo objeto utilizando a sintaxe reduzida
var obj2 = {
  *g() {
    var indice = 0;
    while (true) yield indice++;
  },
};

var coisa = obj2.g();
console.log(coisa.next().value); // 0
console.log(coisa.next().value); // 1
```

### Métodos assíncronos

{{jsxref("Statements/funcoes_assincronas", "Funções assíncronas", "", 1)}} também podem ser definidas usando a sintaxe reduzida.

```js
// Utilizando a propriedade com nome (pre-ES6)
var obj3 = {
  f: async function () {
    await alguma_promise;
  },
};

// O mesmo objeto com a sintaxe reduzida
var obj3 = {
  async f() {
    await alguma_promise;
  },
};
```

### Generator methods assíncronos

Os [generator methods](/pt-BR/docs/Web/JavaScript/Reference/Statements/function*) também podem ser {{jsxref("Statements/funcoes_assincronas", "assíncronos", "", 1)}}

```js
var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// O mesmo objeto com a sintaxe reduzida
var obj4 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

### Métodos reduzidos não são construíveis

Métodos assim definidos não são construtores e lançarão um {{jsxref("TypeError")}} se você tentar instanciá-los.

```js
var obj = {
  metodo() {},
};
new obj.metodo(); // TypeError: obj.method is not a constructor

var obj = {
  *g() {},
};
new obj.g(); // TypeError: obj.g is not a constructor (modificado no ES2016)
```

## Exemplos

### Caso de teste simples

```js
var obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Nome de propriedades computados

A sintaxe reduzida também suporta nome de propriedades computados.

```js
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## Especificações

| Especificações                                                           | Estado               | Comentário          |
| ------------------------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.functions.method_definitions")}}

## Veja também

- [`get`](/pt-BR/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/pt-BR/docs/Web/JavaScript/Reference/Functions/set)
- [Gramática léxica](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)
