---
title: this
slug: Web/JavaScript/Reference/Operators/this
---

{{jsSidebar("Operators")}}

A palavra-chave **`this`** comporta-se um pouco diferente em Javascript se comparado com outras linguagens. Também possui algumas diferenças entre o [modo estrito](/pt-BR/docs/Web/JavaScript/Referencia/Funciones/Modo_estricto) e o modo não estrito.

Em muitos casos, o valor `this` é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada. ES5 introduziu o método [`bind`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) para estabelecer o valor `this` da função, independentemente de como ela seja chamada, e ECMAScript 2015 introduziu o [arrow functions](/pt-BR/docs/Functions/Arrow_functions), cujo `this` é lexicalmente delimitado (o valor `this` é estabelecido segundo o escopo de execução no qual está inserido).

## Sintaxe

```
this
```

## Contexto global

No contexto de execução global (fora de qualquer função), `this` refere-se ao objeto global, seja em modo estrito ou não.

```js
console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

## Contexto de função

Dentro de uma função, o valor de `this` depende de como a função é chamada.

### Chamada simples

Como o código a seguir não está no modo estrito, o valor de `this` não é definido pela chamada. Por padrão, `this` será o objeto global que no navegador é o `window`.

```js
function f1() {
  return this;
}

// No navegador
f1() === window; // true
```

Em modo estrito, o valor de `this` permanece seja qual for o definido ao entrar no contexto de execução, assim, no caso a seguir, `this` por padrão será indefinido (`undefined`):

```js
function f2() {
  "use strict"; // assume modo estrito
  return this;
}

f2() === undefined; // true
```

Portanto, em modo estrito, se `this` não for definido durante o contexto da execução, ele permanecerá indefinido (`undefined`).

> **Nota:** No segundo exemplo, `this` deveria ser [`undefined`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined), porque `f2` foi chamada diretamente e não como um método ou popriedade de um objeto (ou seja, `window.f2()`). Esta característica não foi implementada em alguns navegadores quando começaram a dar suporte ao [strict mode](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) (modo estrito). Como resultado, eles incorretamente retornavam o objeto `window`.

### Funções Arrow (seta)

Nas [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (funções seta), o `this` é definido lexicalmente, isto é, seu valor é definido pelo contexto de execução onde está inserido. Em um código global, this assume o objeto global:

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
```

Não importa como `foo` é chamado, o `this` continuará como o objeto global. Isto continua verdadeiro mesmo se chamá-lo como método de um determinado objeto (o que normalmente definiria seu this ao objeto), com `call` ou `apply` ou `bind` é usado:

```js
// Chama como um método de um objeto
var obj = { foo: foo };
console.log(obj.foo() === globalObject); // true

// Tentativa de definir this usando call
console.log(foo.call(obj) === globalObject); // true

// Tentantiva de definir this usando bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

Não importa como for, o this do foo mantém o valor que recebeu quando foi criado (no exemplo acima, o objeto global). O mesmo se aplica para funções arrow criadas dentro de outras funções: seus this são definidos em seus respectivos contextos de execução.

```js
// Cria obj com um método bar que retorna uma função que
// retorna seu this. A função retornada é criada como
// uma função arrow, para que seu this esteja permanentemente
// ligado ao this da função que a envolve. O valor de bar pode ser // definido na chamada, que por sua vez define o valor da função
// retornada.
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// Chama bar como método de obj, configurando seu this como obj
// Assina à variável fn uma referência para a função retornada
var fn = obj.bar();

// Chamar fn, sem definir this, por padrão, referenciaria
// ao objeto global ou undefined em modo estrito (strict mode)
console.log(fn() === obj); // true
```

No exemplo acima, a função (chamemos função anônima A) atribuída a obj.bar retorna outra função (chamemos função anônima B) que é criada como uma função arrow (seta). Como resultado, o this da função B é permanentemente definido como o this de obj.bar (função A) quando chamado. Quando a função retornada (função B) é chamada, seu this sempre será aquele que foi definido inicialmente. No exemplo de código acima, o this da função B é definido com o this da função A, que é obj, por isso permanece definido para obj, mesmo quando chamado de uma maneira que normalmente definiria seu this como undefined ou como objeto global (ou qualquer outro método, como naquele exemplo anterior de contexto de execução global).

### Como método de um objeto

Quando uma função é chamada como um método de um objeto, seu this toma o valor do objeto pertencente ao método chamado.

No exemplo a seguir, quando `o.f()` é invocado, o this dentro da função é vinculado ao objeto o.

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // logs 37
```

Observe que esse comportamento não é afetado mesmo pela forma como (ou onde) a função foi definida. No exemplo anterior, nós definimos a função in-line (em linha) como o membro f durante a definição de o. No entanto, poderíamos ter apenas facilmente definido a função primeiro e depois anexado a o.f. Fazendo isso resulta no mesmo comportamento:

```js
var o = { prop: 37 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // registra 37
```

Isto demonstra que é importante apenas que a função foi chamada a partir do membro f de o.

Da mesma forma, a vinculação de this só é afetada pela referência do membro mais imediato. No exemplo a seguir, quando invocamos a função, podemos chamá-la como um método g do objeto o.b. Desta vez, durante a execução, o this dentro da função irá se referir a o.b. O fato do objeto ser um membro de o não tem qualquer consequência; a referência mais imediata é tudo que importa.

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // registra 42
```

#### `this` na cadeia de protótipos (prototype chain) do objeto

A mesma noção vale para métodos definidos em algum lugar da cadeia de protótipos do objeto. Se o método está na cadeia de protótipo de um objeto, this refere-se ao objeto que é proprietário do método chamado, como se o método estivesse no objeto.

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

Neste exemplo, o objeto atribuído à variável p não tem sua própria propriedade f, ele o herda de seu protótipo. Mas não importa que a procura por f finalmente encontre um membro com esse nome em o; a procura começou como uma referência para a p.f, portanto o this dentro da função recebe o valor do objeto referido como p. Isto é, já que f é chamado como um método de p, seu this refere-se a p. Este é um recurso interessante de herança prototípica do JavaScript.

#### `this` com seletores (getter) ou modificadores (setter)

Mais uma vez, a mesma noção se aplica quando uma função é chamada a partir de um getter ou setter. A função usada como getter ou setter tem seu this ligado ao objeto do qual a propriedade está sendo modificada ou selecionada.

```js
function modulus() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  },
};

Object.defineProperty(o, "modulus", {
  get: modulus,
  enumerable: true,
  configurable: true,
});

console.log(o.phase, o.modulus); // logs -0.78 1.4142
```

### Como um construtor (constructor)

Quando a função é usada com um construtor (com a palavra chave [`new`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)), seu this é vinculado ao novo objeto sendo contruído.

Nota: enquanto o padrão para um construtor é retornar o objeto referenciado por this, ele pode retornar, ao invés, algum outro objeto (se o valor de retorno não é um objeto, então o objeto this é retornado).

```js
/*
 * Contrutores funcionam da seguinte forma:
 *
 * function MyConstructor(){
 *   // O código do corpo da função vai aqui.
 *   // Criam-se propriedades sobre |this| como
 *   // desejado, assinando-os. Ex.,
 *   this.fum = "nom";
 *   // etc...
 *
 *   // Se a função tem uma instrução que
 *   // retorna um objeto, esse objeto será o
 *   // resultado da expressão |new|. Caso contrário,
 *   // o resultado da expressão é o objeto
 *   // atualmente vinculado a |this|
 *   // (i.e., o caso mais comumente visto).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // registra 38
```

No último exemplo (C2), porque um objeto foi retornado durante a construção, o novo objeto que this foi vinculado simplesmente é descartado. (Isso essencialmente faz da expressão "this.a = 37;" código morto. Não é exatamente morto, pois ele é executado, mas ele pode ser eliminado sem efeitos colaterais.)

### `call` e `apply`

Quando uma função usa a palavra-chave this em seu corpo, o seu valor pode ser vinculado a um determinado objeto na chamada utilizando os métodos [`call`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [`apply`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) que todas as funções herdam de Function.prototype.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// O primeiro parâmetro é o objeto a usar como
// 'this'; subsequentes parâmetros são passados como
// argumentos na função chamada
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// O primeiro parâmetro é o objeto a usar como
// 'this', o segundo é um arranjo (array) cujos
// membros são usados como argumentos na função chamada
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

Observe que, com call e apply, se o valor passado como this não for um objeto, será feita uma tentativa de convertê-lo em um objeto usando a operação interna ToObject. Portanto, se o valor passado é um primitivo como 7 ou 'foo', ele será convertido para um objeto usando o construtor relacionado, de modo que o número primitivo 7 é convertido em um objeto, como realizado por new Number(7), e a cadeia de caracteres 'foo' em um objeto, como realizado por new String(' foo '), por exemplo.

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
```

### O método `bind`

ECMAScript 5 introduziu [`Function.prototype.bind`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). Chamando f.bind(algumObjeto) cria-se uma nova função com o mesmo corpo e escopo que f, mas onde o this ocorrer na função original, na nova função ele será permanentemente ligado ao primeiro argumento de bind, independentemente de como a função esteja sendo usada.

```js
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind só funciona uma vez!
console.log.(h()); // azerty

var o = {a:37, f:f, g:g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### Como um manipulador de eventos DOM

Quando uma função é usada como um manipulador de eventos, seu this está definido para o elemento do evento a partir do qual foi disparado (alguns navegadores não seguem essa convenção para os listeners adicionados dinamicamente com métodos que não sejam addEventListener).

```js
// Quando chamado como listener, transforma o elemento blue
// relacionado
function bluify(e) {
  // sempre true
  console.log(this === e.currentTarget);
  // true quando currentTarget e target são o mesmo objeto
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// Obtém uma lista de todo elemento no documento
var elements = document.getElementsByTagName("*");

// Adiciona bluify com um click listener (escutador de click)
// para que quando o elemento seja clicado se torne azul
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### Em um manipulador de evento in-line (em linha)

Quando o código é chamado de um manipulador de evento in-line, seu this está definido para o elemento DOM em que o listener é colocado:

```js
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

O alerta acima mostra button. Note, porém, que apenas o código exterior tem um this definido desta maneira:

```js
<button onclick="alert((function(){return this}()));">Show inner this</button>
```

Neste caso, o this da função interior não está definido, portanto ele retorna o objeto global/objeto window (ou seja, o objeto padrão no modo não-estrito onde this não está definido pela chamada).

## Especificações

| Especificação                                                    | Estado               | Comentário                                         |
| ---------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-this-keyword', 'The this keyword')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-this-keyword', 'The this keyword')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-11.1.1', 'The this keyword')}}         | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-11.1.1', 'The this keyword')}}           | {{Spec2('ES3')}}     |                                                    |
| {{SpecName('ES1', '#sec-11.1.1', 'The this keyword')}}           | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.this")}}

## Veja também

- [Strict mode](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- [All this](http://bjorn.tipling.com/all-this), um artigo sobre this em diferentes contextos
