---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
---

O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

## Sintaxe

```
constructor([argumentos]) { ... }
```

## Descrição

Apenas um método especial com o nome _constructor_ pode existir em uma classe. O erro {{jsxref("SyntaxError")}} será mostrado se a classe contiver mais de um método _constructor._

Um construtor pode usar a palavra reservada _super_ para se referir ao construtor da classe pai (**superior**).

Um construtor padrão será usado se você não especificá-lo*.*

## Exemplos

### Usando o método _constructor_

O trecho de código foi fornecido por [exemplo de classes](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Quadrado extends Poligono {
  constructor(comprimento) {
    // super chama o construtor da classe pai que vai atribuir comprimento para
    // os atributos comprimento e altura herdados pela nossa classe filha Quadrado
    super(comprimento, comprimento);
    // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
    // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
    this.nome = "Quadrado";
  }

  // os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.

  get area() {
    return this.altura * this.comprimento;
  }

  set area(valor) {
    this.area = valor;
  }
}
```

### Construtores padrão (_constructors_)

Um construtor padrão será usado pela classe caso nenhum seja especificado. Para as classes de base o construtor padrão é:

```js
constructor() {} //construtor criado por padrão
```

Para as classes filhas o construtor padrão é:

```js
constructor(...args) {
  super(...args);
}
```

## Especificações

| Especificação                                                                            | Status               | Comentário        |
| ---------------------------------------------------------------------------------------- | -------------------- | ----------------- |
| {{SpecName('ES6', '#sec-static-semantics-constructormethod', 'Constructor Method')}}     | {{Spec2('ES6')}}     | Definição inicial |
| {{SpecName('ESDraft', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [super()](/pt-BR/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expressão](/pt-BR/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaração](/pt-BR/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
