---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}}

A propriedade `new.target` permite que você detecte quando uma função ou construtor foi chamado utilizando o operador new. Em construtores e funções instaciadas com o operador [new](/pt-BR/docs/Web/JavaScript/Reference/Operators/new) , `new.target` retorna a referência ao construtor ou função. Em chamadas normais de funções , `new.target` é {{jsxref("undefined")}}.

## Sintaxe

```
new.target
```

## Descrição

A sintaxe `new.target` consiste na palavra- chave `"new`", o ponto, e o nome da propriedade `"target"`. Normalmente "`new."` serve como um contexto para a propriedade de acesso, mas aqui `"new."` não é exatamente um objeto. Em chamadas de construtores, entretanto, `new.target` se refere ao construtor invocado pelo `new` e então "`new.`" se torna um contexto virtual.

`new.target` é uma propriedade meta que é disponibilizada para todas as funções. Em funções do tipo flecha `=>`, `new.target` se refere ao `new.target` em torno da função.

## Exemplos

### new\.target em chamadas de Função

Em chamadas normais de função (diferente de chamadas a funções do tipo construtor), `new.target` é {{jsxref("undefined")}}. Isso permite que você detecte se a função foi chamada como um novo construtor.

```js
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instanciado com new");
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instanciado com new"
```

### new\.target em Construtores

Em classes construtoras, `new.target` se refere ao construtor que foi diretamente invocado pelo `new`. Isto também é o caso se o construtor é uma classe pai e foi delegado pelo construtor de um filho.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // logs "A"
var b = new B(); // logs "B"

class C {
  constructor() {
    console.log(new.target);
  }
}
class D extends C {
  constructor() {
    super();
  }
}

var c = new C(); // logs class C{constructor(){console.log(new.target);}}
var d = new D(); // logs class D extends C{constructor(){super();}}
```

A partir do exemplo acima das classes C e D, mostra que new\.target aponta para a definição da classe na qual foi inicializada. Exemplo, quando D foi inicializado utilizando new, a definição da classe D foi impressa e similiarmente ao caso de C, a classe C foi impressa.

## Especificações

| Specification                                                                          | Status               | Comment            |
| -------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-built-in-function-objects', 'Built-in Function Objects')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-built-in-function-objects', 'Built-in Function Objects')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.operators.new_target")}}

## Veja também

- [funções](/pt-BR/docs/Web/JavaScript/Reference/Functions)
- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [`new`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
