---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

O método **`propertyIsEnumerable()`** retorna um booleano indicando quando a propriedade especificada é enumerável e é a propriedade do próprio objeto

{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html", "taller")}}

## Sintaxe

```
obj.propertyIsEnumerable(prop)
```

### Parâmetros

- `prop`
  - : O nome da propriedade para teste

### Valor de Retorno

O {{jsxref("Boolean")}} indicando se a propriedade especificada é enumeravel e é a propriedade do objeto

## Descrição

Every object has a `propertyIsEnumerable` method. This method can determine whether the specified property in an object can be enumerated by a {{jsxref("Statements/for...in", "for...in")}} loop, with the exception of properties inherited through the prototype chain. If the object does not have the specified property, this method returns `false`.

## Exemplos

### O uso basico de `propertyIsEnumerable`

O exemplos a seguir mostram o uso de `propertyIsEnumerable` em um objeto e um array:

```js
var o = {};
var a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // returns true
a.propertyIsEnumerable(0); // returns true
```

### Objetos User-defined vs. built-in

Os exemplos a seguir demostram a enumerabilidade da propriedade user-defined vs. built-in :

```js
var a = ["is enumerable"];

a.propertyIsEnumerable(0); // returns true
a.propertyIsEnumerable("length"); // returns false

Math.propertyIsEnumerable("random"); // returns false
this.propertyIsEnumerable("Math"); // returns false
```

### Propriedade Direct vs. inherited

```js
var a = [];
a.propertyIsEnumerable("constructor"); // returns false

function firstConstructor() {
  this.property = "is not enumerable";
}

firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
  this.method = function () {
    return "is enumerable";
  };
}

secondConstructor.prototype = new firstConstructor();
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = "is enumerable";

o.propertyIsEnumerable("arbitraryProperty"); // returns true
o.propertyIsEnumerable("method"); // returns true
o.propertyIsEnumerable("property"); // returns false

o.property = "is enumerable";

o.propertyIsEnumerable("property"); // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iteratable with for-in)
o.propertyIsEnumerable("prototype"); // returns false (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // returns false
o.propertyIsEnumerable("firstMethod"); // returns false
```

## Especificações

| Specification                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-object.prototype.propertyisenumerable', 'Object.prototype.propertyIsEnumerable')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.propertyIsEnumerable")}}

## Veja também

- [Enumerability and ownership of properties](/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
