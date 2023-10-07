---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
---

{{jsSidebar("Operators")}}O operador **`instanceof`** testa se um objeto tem, em seu prototype, a função construtora.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Sintaxe

```
objeto instanceof construtor
```

### Parâmetros

- `objeto`
  - : O objeto a ser testado
- `construtor`
  - : Função construtora a ser verificada

## Descrição

O operador instanceof testa a presença da função construtora no prototype do objeto.

```js
// definindo construtores
function C() {}
function D() {}

var o = new C();

// true, porque: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, porque D.prototype não está no prototype desse objeto
o instanceof D;

o instanceof Object; // true, porque:
C.prototype instanceof Object; // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, porque C.prototype não está mais no prototype desse objeto
o instanceof C;

D.prototype = new C(); // use inheritance
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
```

Note que o resultado do instanceof pode alterar quando a gente altera o prototype da função construtora. No entanto, a gente não pode alterar (por padrão) o prototype do objeto. Só é possível fazer essa alteração usando a pseudopropriedade \_\_proto\_\_.

### `instanceof` and multiple context (e.g. frames or windows)

Different scope have different execution environments. This means that they have different built-ins (different global object, different constructors, etc.). This may result in unexpected results. For instance, `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== window.frames[0].Array` and arrays inherit from the former. This may not make sense at first but when you start dealing with multiple frames or windows in your script and pass objects from one context to another via functions, this will be a valid and strong issue. For instance, you can securely check if a given object is in fact an Array using `Array.isArray(myObj)`

> **Nota:** **Note for Mozilla developers:**
> In code using XPCOM `instanceof` has special effect: `obj instanceof xpcomInterface` (e.g. `Components.interfaces.nsIFile`) calls `obj.QueryInterface(xpcomInterface)` and returns `true` if QueryInterface succeeded. A side effect of such call is that you can use _`xpcomInterface`_'s properties on `obj` after a successful `instanceof` test. Unlike standard JavaScript globals, the test `obj instanceof xpcomInterface`works as expected even if `obj` is from a different scope.

## Examples

### Demonstrating that `String` and `Date` are of type `Object` and exceptional cases

The following code uses `instanceof` to demonstrate that `String` and `Date` objects are also of type `Object` (they are derived from `Object`).

However, objects created with the object literal notation are an exception here: Although the prototype is undefined, `instanceof Object` returns `true`.

```js
var simpleStr = "This is a simple string";
var myString = new String();
var newStr = new String("String created with constructor");
var myDate = new Date();
var myObj = {};

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString instanceof String; // returns true
newStr instanceof String; // returns true
myString instanceof Object; // returns true

myObj instanceof Object; // returns true, despite an undefined prototype
({}) instanceof Object; // returns true, same case as above

myString instanceof Date; // returns false

myDate instanceof Date; // returns true
myDate instanceof Object; // returns true
myDate instanceof String; // returns false
```

### Demonstrating that `mycar` is of type `Car` and type `Object`

The following code creates an object type `Car` and an instance of that object type, `mycar`. The `instanceof` operator demonstrates that the `mycar` object is of type `Car` and of type `Object`.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car; // retorna true
var b = mycar instanceof Object; // retorna true
```

## Especificações

| Especificação                                                            | Status             | Comentário                                        |
| ------------------------------------------------------------------------ | ------------------ | ------------------------------------------------- |
| ECMAScript 1st Edition.                                                  | Standard           | Definição inicial. Implementada no JavaScript 1.4 |
| {{SpecName('ES5.1', '#sec-11.8.6', 'The instanceof operator')}}          | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.operators.instanceof")}}

## Veja também

- [`typeof`](/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
