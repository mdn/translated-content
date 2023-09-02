---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}A **declaração class** cria uma nova classe com dado **nome** usando a herança do protótipo base.

Você também pode definir uma classe usando {{jsxref("Operators/class", "class expression", "", 1)}}.

## Sintaxe

```js
class name [extends] {
  // class body
}
```

## Descrição

Assim como as expressões de classe, o corpo de uma declaração de classe é executado em [strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

Declarações de classe não são {{Glossary("Hoisting", "hoisted")}} (ao contrário de [function declarations](/pt-BR/docs/Web/JavaScript/Reference/Statements/function)).

## Exemplos

### Declaração simples de classe

No exemplo a seguir, primeiro definimos uma classe chamada _Polygon_, então extendemos essa classe para criar uma classe chamada _Square_. Note que _super()_, usada no construtor, só pode ser usada em construtores e deve ser chamada antes da chave _this_ ser usada.

```js
class Poligono {
  constructor(altura, largura) {
    this.nome = "Polígono";
    this.altura = altura;
    this.largura = largura;
  }
}

class Quadrado extends Poligono {
  constructor(altura) {
    super(altura, altura);
    this.nome = "Quadrado";
  }
}
```

## Especificações

| Especificação                                                      | Status           | Comentário         |
| ------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES6')}} | definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.statements.class")}}

## Veja também

- [`function` declaration](/pt-BR/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/pt-BR/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
