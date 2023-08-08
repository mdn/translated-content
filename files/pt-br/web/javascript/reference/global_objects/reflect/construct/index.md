---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---

{{JSRef}}

The static **`Reflect.construct()`** method acts like the [`new` operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/new), but as a function. It is equivalent to calling `new target(...args)`. It gives also the added option to specify a different prototype.

{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}

## Sintaxe

```
Reflect.construct(target, argumentsList[, newTarget])
```

### Parametros

- `target`
  - : A função alvo à ser chamada.
- `argumentsList`
  - : Um objeto tipo array que especifica com quais argumentos `target` deveria ser chamada.
- `newTarget` {{optional_inline}}
  - : O construtor de quem o protótipo deveria ser usado. Veja também o [`new.target`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new.target) operador. Se `newTarget` não estiver presente, será `target`.

### Return value

A new instance of `target` (or `newTarget`, if present), initialized by `target` as a constructor with the given arguments.

### Exceptions

A {{jsxref("TypeError")}}, if `target` or `newTarget` are not constructors.

## Description

`Reflect.construct` allows you to invoke a constructor with a variable number of arguments (which would also be possible by using the [spread operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) combined with the [new operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)).

```js
var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` vs `Object.create()`

Prior to the introduction of `Reflect`, objects could be constructed using an arbitrary combination of constructor and prototype by using `Object.create()`.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

// Calling this:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

However, while the end result is the same, there is one important difference in the process. When using `Object.create()` and `Function.prototype.apply()`, the `new.target` operator will point to `undefined` within the function used as the constructor, since the `new` keyword is not being used to create the object.

When invoking `Reflect.construct()`, on the other hand, the `new.target` operator will point to the `newTarget` parameter if supplied, or `target` if not.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## Examples

### Using `Reflect.construct()`

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## Specifications

| Specification                                                          | Status               | Comment             |
| ---------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-reflect.construct', 'Reflect.construct')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-reflect.construct', 'Reflect.construct')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Reflect.construct")}}

## See also

- {{jsxref("Reflect")}}
- [`new`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new.target)
