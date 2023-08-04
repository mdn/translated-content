---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

A palavra-chave **super** é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.

## Síntaxe

```
// chama o objeto (ou construtor) pai
super(...[arguments]);
// chama um método da classe/objeto pai
super.metodo([arguments]);
```

## Descrição

Quando usada no construtor de uma classe, a palavra-chave `super` deve ser usada apenas uma vez, e precisa ser usada antes que a palavra-chave `this` possa ser usada. Essa palavra-chave também pode ser usada para chamar uma função ou objeto pai.

## Exemplo

### Usando `super` em classes

Esse trecho de código foi obtido através de [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([demonstração](https://googlechrome.github.io/samples/classes-es6/index.html)). Aqui `super()` é chamado para evitar duplicar a parte do construtor que é comum entre `Polygon` e `Square`.

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // ReferenceError, precisa chamar o super primeiro!

    // Aqui, ele chama a classe construtora pai com o tamanho
    // provido pelo Polygon -> width e height
    super(length, length);

    // Nota: Em classes derivadas, super() deve ser chamado antes de
    // usar this. Deixar isso de fora vai causar um ReferenceError.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Super chamando métodos estáticos

Você também pode chamar o super em métodos [estáticos](/pt-BR/docs/Web/JavaScript/Reference/Classes/static).

```js
class Human {
  constructor() {}
  static ping() {
    return "ping";
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + " pong";
  }
}
Computer.pingpong(); // 'ping pong'
```

### Ao deletar propriedades do super, será emitido um erro

Você não pode utilizar o [delete operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete) e `super.prop` ou `super[expr]` para deletar uma propriedade da classe pai. Isto emitirá um {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### `Super.prop` não pode sobrescrever propriedades não editáveis

`super`não pode sobrescrever o valor de uma propriedade quando esta houver sido definida como não editável ('writable: false') com, e.g., {{jsxref("Object.defineProperty")}}.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1
```

### Usando `super.prop` em objetos literais

`super` também pode ser usado na inicialização da notação literal de objetos. No exemplo abaixo, cada objeto define um método. No segundo objeto, `super` chama o método do primeiro objeto. Isso funciona graças ao {{jsxref("Object.setPrototypeOf()")}}, com o qual é possível configurar o prototype do `obj2` para o `obj1`, tornando o `super` capaz de encontrar o `method1()` por meio do `obj2`.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  },
};

var obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // retorna "method 1"
```

## Especificações

| Specification                                          | Status               | Comment            |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-super-keyword', 'super')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-super-keyword', 'super')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.super")}}

## Notas Gecko específicas

- `super()` ainda não funciona como esperado para prototypes nativos.

## Veja mais

- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
