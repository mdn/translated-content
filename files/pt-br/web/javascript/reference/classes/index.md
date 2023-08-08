---
title: Classes
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Classes")}}

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes **não** introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

## Definindo classes

As Classes são, de fato, "funções especiais", e, assim como você pode definir ["function expressions"](/pt-BR/docs/Web/JavaScript/Reference/Operators/function) e ["function declarations"](/pt-BR/docs/Web/JavaScript/Reference/Statements/function), a sintaxe de uma classe possui dois componentes: ["class expressions](/pt-BR/docs/Web/JavaScript/Reference/Operators/class)" e ["class declarations"](/pt-BR/docs/Web/JavaScript/Reference/Statements/class).

### Declarando classes

Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave `class` seguida pelo nome da classe (aqui "Retangulo").

```js
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
```

#### Uso antes da declaração (Hoisting - Tradução Literal: Lançamento)

Uma diferença importante entre **declarações de funções** das **declarações de classes**, é que declararações de funções são {{Glossary("Hoisting", "hoisted")}} e declarações de classes não são. Primeiramente deve declarar sua classe para só então acessá-la, pois do contrário o código a seguir irá lançar uma exceção: {{jsxref("ReferenceError")}}:

```js example-bad
const p = new Retangulo(); // Erro de referência (ReferenceError)

class Retangulo {}
```

### Expressões de Classes

Uma **Expressão de Classe** (class expression) é outra forma para definir classes. Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para uma expressão de classe é local ao corpo da classe.

```js
// sem nome
let Retangulo = class {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
};

// nomeada
let Retangulo = class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
};
```

**Nota:** As **expressões de classe** também sofrem com o mesmo problema de {{Glossary("Hoisting", "hoisted")}} mencionados em **declarações** de classe.

## Corpo de uma classe e definições de métodos

O corpo de uma classe é a parte que está entre chaves `{}`. É aí onde você define os membros da classe, como os métodos, ou os construtores.

### Modo Estrito (strict mode)

Os corpos das Declarações de Classes e das Expressões de Classes são executados em [modo estrito](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

### Construtor

O método [`constructor`](/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor) é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe. Um erro de sintaxe {{jsxref("SyntaxError")}} será lançado se a classe possui mais do que uma ocorrência do método `constructor`.

Um construtor pode usar a palavra-chave `super` para chamar o construtor de uma classe pai.

### Métodos Protótipos

Veja também [definições de métodos (method definitions)](/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  //Getter
  get area() {
    return this.calculaArea();
  }

  calculaArea() {
    return this.altura * this.largura;
  }
}

const quadrado = new Retangulo(10, 10);

console.log(quadrado.area);
```

### Métodos estáticos

A palavra-chave [`static`](/pt-BR/docs/Web/JavaScript/Reference/Classes/static) define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.

```js
class Ponto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

p1.distancia; //undefined
p2.distancia; //undefined

console.log(Ponto.distancia(p1, p2));
```

### Empacotando com protótipos e métodos estáticos

Quando um método estático ou protótipo é chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, undefined ou null), então o valor "this" será **`undefined`** dentro da função chamada. Autoboxing não vai acontecer. O comportamento será o mesmo se escrevemos o código no modo não-estrito.

```js
class Animal {
  falar() {
    return this;
  }
  static comer() {
    return this;
  }
}

let obj = new Animal();
obj.falar(); // Animal {}
let falar = obj.falar;
falar(); // undefined

Animal.comer(); // class Animal
let comer = Animal.comer;
comer(); // undefined
```

Se escrevemos o código acima usando classes baseadas em função tradicional, então o autoboxing acontecerá com base no valor de "this" para o qual a função foi chamada.

```js
function Animal() {}

Animal.prototype.falar = function () {
  return this;
};

Animal.comer = function () {
  return this;
};

let obj = new Animal();
let falar = obj.falar;
falar(); // objeto global

let comer = Animal.comer;
comer(); // objeto global
```

### Propriedades de instância

Propriedades de instâncias devem ser definidas dentro dos métodos da classe:

```
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
```

Propriedades de dados estáticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declaração do corpo da classe.

```
Retangulo.larguraEstatico = 20;
Retangulo.prototype.larguraPrototipagem = 25;
```

## Sub classes com o `extends`

A palavra-chave [`extends`](/pt-BR/docs/Web/JavaScript/Reference/Classes/extends) é usada em uma _declaração de classe_, ou em uma _expressão de classe_ para criar uma classe como filha de uma outra classe.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + " emite um barulho.");
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + " latidos.");
  }
}

let cachorro = new Cachorro("Mat");
cachorro.falar();
```

Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".

Também é possivel ampliar (extends) "classes" baseadas em funções tradicionais.

```js
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.falar = function () {
  console.log(this.nome + " faça barulho.");
};

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + " lati.");
  }
}

let cachorro = new Cachorro("Mitzie");
cachorro.falar(); // Mitzie lati.
```

Note que classes não extendem objetos normais (não construíveis). Se você quer herdar de um objeto, é necessário utilizar {{jsxref("Object.setPrototypeOf()")}}:

```js
let Animal = {
  falar() {
    console.log(this.nome + " faça barulho.");
  },
};

class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }
}

Object.setPrototypeOf(Cachorro.prototype, Animal);

let cachorro = new Cachorro("Mitzie");
cachorro.falar(); //Mitzie faça barulho.
```

## Species

Você pode querer retornar um objeto {{jsxref("Array")}} na sua classe `MinhaArray` derivada de array. O padrão Species permite a sobrescrita do construtor padrão.

Por exemplo, quando utilizando um método como {{jsxref("Array.map", "map()")}} que retorna o construtor padrão, você pode querer que esse método retorne um objeto `Array` ao invés do objeto `MinhaArray`. O {{jsxref("Symbol.species")}} te permite fazer isso:

```js
class MinhaArray extends Array {
  // Sobrescreve species para o construtor da classe pai Array
  static get [Symbol.species]() {
    return Array;
  }
}

let a = new MinhaArray(1, 2, 3);
let mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Chamada da classe pai com `super`

A palavra-chave (keyword) `super` é utilizada para chamar funções que pertencem ao pai do objeto.

```js
class Gato {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + " faça barulho.");
  }
}

class Leao extends Gato {
  falar() {
    super.falar();
    console.log(this.nome + " roars.");
  }
}

let leao = new Leao("Fuzzy");
leao.falar();

// Fuzzy faça barulho.
// Fuzzy roars.
```

## Mix-ins

Subclasses abstratas ou _mix-ins_ são templates para classes. Uma classe do ECMAScript pode apenas ter uma classe pai, assim sendo, não é possível a classe ter herança múltipla.

Para se ter um comportamento similar ao de herança múltipla no ECMAScript usa-se mix-ins, uma forma de implementar mix-ins é usar um template de subclasse que é uma função que instancia uma classe base e retorna uma subclasse extendida desta classe base:

```js
class Humano {
  constructor(nome) {
    this.nome = nome;
  }
  andar() {
    return this.nome + " andou um passo";
  }
}

const HumanoFalante = (Base) =>
  class extends Base {
    falar() {
      return this.nome + " diz: olá mundo!";
    }
  };

const HumanoFalanteMixado = (Base) => class extends Base {};

const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));

const humano = new HumanoFinal("Bill Gates");

console.log(humano.andar());
console.log(humano.falar());
```

## Especificações

| Especificação                                                      | Status           | Comentário         |
| ------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.classes")}}

## Rodando com Scratchpad

Uma classe não pode ser redefinida. Se você estiver rodando código com Scratchpad (Menu do Firefox Ferramentas > Web Developer > Scratchpad) e você acionar 'Run' a uma definição de uma classe com o mesmo nome duas vezes, você verá um confuso SyntaxError: redeclaration of let \<class-name> (Erro de Sintaxe: redeclaração de let \<nome-da-classe>).

Para reacionar (re-run) uma definição, use o menu do Scratchpad em Execute > Reload and Run (Executar > Atualizar e Rodar).
Por favor, vote no bug [#1428672](https://bugzilla.mozilla.org/show_bug.cgi?id=1428672).

## Veja também

- [Funções](/pt-BR/docs/Web/JavaScript/Reference/Functions)
- [Declaração de `classes` (class declaration](/pt-BR/docs/Web/JavaScript/Reference/Statements/class))
- [Expressão de `classes` (class expression](/pt-BR/docs/Web/JavaScript/Reference/Operators/class))
- {{jsxref("Operators/super", "super")}}
- [Blog post: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
