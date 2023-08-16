---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

A palavra chave **static** define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

## Sintaxe

```
static nomeDoMetodo() { ... }
```

## Descrição

Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. Métodos estáticos são comumente utilizados como funções utilitárias.

## Chamada de métodos estáticos

### De outro método estático

Para chamar um método estático dentro de outro método estático da mesma classe, podemos utilizar a palavra reservada `this`.

```js
class ChamadaDoMetodoEstatico {
  static metodoEstatico() {
    return "O método estático foi chamado";
  }
  static outroMetodoEstatico() {
    return this.metodoEstatico() + " de outro método estático";
  }
}
ChamadaDoMetodoEstatico.metodoEstatico();
// 'O método estático foi chamado'

ChamadaDoMetodoEstatico.outroMetodoEstatico();
// 'O método estático foi chamado de outro método estático'
```

### De outro construtor e outros métodos

Métodos estáticos não são diretamente acessíveis utilizando-se `this` a partir de métodos não estáticos. É necessário chamá-los usando o nome da classe:

```js
nomeDaClasse.nomeDoMetodoEstatico();
```

ou chamando o método como uma propriedade do construtor:

```js
this.constructor.nomeDoMetodoEstatico().
```

```js
class ChamadaDoMetodoEstatico {
  constructor() {
    console.log(ChamadaDoMetodoEstatico.MetodoEstatico());
    // 'O método estático foi chamado.'

    console.log(this.constructor.MetodoEstatico());
    // 'O método estático foi chamado.'
  }

  static MetodoEstatico() {
    return "O método estático foi chamado.";
  }
}
```

## Exemplos

O exemplo a seguir demonstra várias coisas. Ele mostra como um método estático é implementado em uma classe e como uma classe com um membro estático pode virar uma subclasse. Por fim, ele mostra como um método estático pode e não pode ser chamado.

```js
class Tripple {
  static tripple(n) {
    n = n | 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));
console.log(BiggerTripple.tripple(3));
var tp = new Tripple();
console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
```

## Especificações

| Especificação                                                         | Status              | Comentário         |
| --------------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.classes.static")}}

## Veja também

- [`class` expression](/pt-BR/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/pt-BR/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
