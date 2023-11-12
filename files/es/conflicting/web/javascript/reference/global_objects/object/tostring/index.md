---
title: Object.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Object/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
---

{{JSRef}} {{non-standard_header}}

El método **`toSource()`** regresa una cadena representando el código fuente del objeto.

## Syntax

```js
Object.toSource();
obj.toSource();
```

### Return value

Una cadena representando el código fuente del objeto.

## Description

EL método `toSource()` regresa los siguientes valores:

- Para el objeto incorporado {{jsxref("Object")}}, `toSource()` regresa la siguiente cadena indicando que el código fuente no está disponible:

  ```js
  function Object() {
      [native code]
  }
  ```

- Para instancias de {{jsxref("Object")}}, `toSource()` regresa una cadena representando el código fuente.

Puedes llamar el método `toSource()` durante el depurado para examinar el contenido de un objeto.

### `Sobreescribir el método toSource()`

Es seguro para los objetos sobreescribir el método **toSource()**. Por ejemplo:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---> nueva Person("Joe")
```

### Métodos de `toSource()` incorporados

Cada tipo fundamental de JavaScript tiene su propio método `toSource()`. Éstos objetos son:

- {{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Array")}} object.
- {{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Boolean")}} object.
- {{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Date")}} object.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Function")}} object.
- {{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Number")}} object.
- {{jsxref("RegExp.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("RegExp")}} object.
- {{jsxref("SIMD.toSource()", "SIMD.%type%.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("SIMD")}} objects.
- {{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("String")}} object.
- {{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Symbol")}} object.
- `Math.toSource()` — Regrsa la cadena "Math".

### Limitaciones en objetos cíclicos

EN el caso de los objetos que contienen referencia a ellos mismos, por ejemplo, una lista enlazada cíclicamente o un árbol que puede ser atravesado en ambas formas, `toSource()` no recreará la referencia a sí mismo, a partir de Firefox 24. Por ejemplo:

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Ciclico: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // regresa "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Ciclico: ' + (obj1.b.a == obj1));
```

Si una estructura cíclica es usada y se necesita el método `toSource()`, el objeto debe proveer la sobreescritura de `toSource()`, ya sea usando una referencia a un constructor o proveyendo una función anónima.

## Ejemplos

### Usando `toSource()`

El código siguiente define el objeto tipo `Dog` y crea a `theDog`, un objeto tipo `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
```

Llamando al método `toSource()` de `theDog` muestra el código JavaScript que define al objeto:

```js
theDog.toSource();
// returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})
```

## Ver también

- {{jsxref("Object.prototype.toString()")}}
