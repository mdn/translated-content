---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

A palavra chave **`extends`** é usada em uma [class declarations](/pt-BR/docs/Web/JavaScript/Reference/Statements/class) ou [class expressions](/pt-BR/docs/Web/JavaScript/Reference/Operators/class) para criar uma classe filha de outra classe.

## Sintaxe

```
class ChildClass extends ParentClass { ... }
```

## Descrição

A palavra chave extends pode ser usada para tanto classes filhas quanto objetos filhos pré-construidos.

O `.prototype` da extensão deve ser um {{jsxref("Object")}} ou {{jsxref("null")}}.

## Exemplos

### Usando `extends`

O primeiro exemplo cria uma classe chamada `Square` a partir de uma classe chamada `Polygon`. Este exemplo foi extraido deste [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Nota: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
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

### Usando `extends` com objetos pré-construidos

Este exemplo extende o objeto pré-construido {{jsxref("Date")}}. Este exemplo foi extraido deste [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(source)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### Estendendo `null`

Estender de {{jsxref("null")}} funciona como em uma classe normal, exceto que o objeto prototype não herda de {{jsxref("Object.prototype")}}.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null
```

## Especificações

| Especificação                                            | Status           | Comentário         |
| -------------------------------------------------------- | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-class-definitions', 'extends')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.classes.extends")}}

## Ver também

- [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [super](/pt-BR/docs/Web/JavaScript/Reference/Operators/super)
