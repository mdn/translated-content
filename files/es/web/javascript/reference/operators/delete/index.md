---
title: Operador delete
slug: Web/JavaScript/Reference/Operators/delete
---

{{jsSidebar("Operators")}}

El **operador `delete`** de JavaScript remueve una propiedad de un objeto; si no se
mantienen más referencias a la misma propiedad, eventualmente se libera automáticamente.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Sintaxis

```js
delete expresion;
```

Donde `expresion` debe evaluarse como una referencia a la [propiedad](/es/docs/Glossary/property/JavaScript), por ejemplo:

```js
delete object.property;
delete object["property"];
```

### Parámetros

- `object`
  - : El nombre de un objeto, o una expresión que evalúa a un objeto.
- `property`
  - : La propiedad a eliminar.

### Valor de retorno

`true` para todos los casos excepto cuando es una propiedad {{jsxref("Object.hasOwnProperty", "propia")}} {{jsxref("Errors/Cant_delete", "no configurable")}}, en cuyo caso, se retorna `false` en modo no estricto.

### Excepciones

Arroja un {{jsxref("TypeError")}} en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode) si la propiedad es una propiedad directa no configurable.

## Descripción

Al contrario de lo que se podría pensar (tal vez debido a otros lenguajes de programación como
[delete in C++](https://docs.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), el operador `delete` no tiene **nada** que ver con liberar memoria.
La gestión de memoria se hace de manera indirecta eliminando referencias. Véase la página [gestión de memoria](/es/docs/Web/JavaScript/Memory_Management) para más detalles.

El operador **`delete`** remueve una propiedad dada de un objeto.
En caso de que la eliminación sea exitosa, retornará `true`, en otro caso
se retornará `false`.

Sin embargo, es importante considerar los siguientes escenarios:

- Si la propiedad que está intentando eliminar no existe, `delete`
  no tendrá ningún efecto y retornará `true`.
- Si una propiedad con el mismo nombre existe en la cadena de prototipos del objeto,
  entonces, luego de la eliminación, el objeto usará la propiedad de la cadena de prototipos
  (en otras palabras, `delete` sólo tiene efecto en los propiedades propias).
- Cualquier propiedad declarada con {{jsxref("Statements/var","var")}} no puede ser eliminada
  desde el ámbito global o desde el ámbito de una función.

  - Del mismo modo, `delete` no puede eliminar ninguna función en el ámbito global (ya sea parte de una definición de una función o una expresión de función).
  - Funciones que son partes de un objeto (y no sean del ámbito global) sí pueden ser eliminadas con `delete`.

- Las propiedades declaradas con {{jsxref("Statements/let","let")}} o
  {{jsxref("Statements/const","const")}} no pueden ser eliminadas dentro del
  ámbito en el cual fueron definidas.
- Las propiedades no configurables no pueden ser removidas. Esto incluye las
  propiedades de objetos incorporados a JavaScript como {{jsxref("Math")}},
  {{jsxref("Array")}}, {{jsxref("Object")}} y propiedades que son creadas como
  no configurables con métodos como {{jsxref("Object.defineProperty()")}}.

El siguiente bloque de código muestra un ejemplo simple:

```js
var Employee = {
  age: 28,
  name: "abc",
  designation: "desarrollador",
};

console.log(delete Employee.name); // retorna true
console.log(delete Employee.age); // retorna true

// Cuando se trata de eliminar una propiedad
// que no existe, retorna true
console.log(delete Employee.salary); // retorna true
```

### Propiedades no configurables

Cuando una propiedad es marcada como no configurable, `delete` no tendrá
ningún efecto, y retornará `false`. En modo estricto esta situación
arrojará un `TypeError`.

```js
var Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // retorna false
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}}, y
{{jsxref("Statements/const","const")}} crean propiedades no configurables
que no pueden ser eliminadas con el operador `delete`:

```js
var nameOther = "XYZ";

// Podemos acceder a esta propiedad global usando:
Object.getOwnPropertyDescriptor(window, "nameOther");

// salida: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Debido a que "nameOther" es añadido usando la palabra
// reservada var, es marcada como "no configurable"

delete nameOther; // retorna false
```

En modo estricto, esto hubiese arrojado una excepción.

### Modo estricto vs. no estricto

En modo estricto, si `delete` es usado en referencia directa a una variable,
un argumento de función o un nombre de función, arrojará un
{{jsxref("SyntaxError")}}. Por lo tanto, para evitar errores de sintaxis
en modo estricto, debe usar el operador `delete` en la forma de
`delete object.property` o `delete object['property']`.

```js
Object.defineProperty(globalThis, "variable1", {
  value: 10,
  configurable: true,
});
Object.defineProperty(globalThis, "variable2", {
  value: 10,
  configurable: false,
});

// SyntaxError en modo estricto.
console.log(delete variable1); // true

// SyntaxError en modo estricto.
console.log(delete variable2); // false
```

```js
function func(param) {
  // SyntaxError en modo estricto.
  console.log(delete param); // false
}

// SyntaxError en modo estricto.
console.log(delete func); // false
```

### Notas entre navegadores

Según la especificación moderna de ECMAScript, el orden de recorrido de las
propiedades de un objeto está bien definido y es estable a través de las
implementaciones. No obstante, en el caso de Internet Explorer, cuando uno
usa `delete` en una propiedad, resulta en un comportamiento confuso,
impidiendo que otros navegadores utilicen objetos simples como
literales de objeto como si fuesen arreglos asociativos ordenados.
En Internet Explorer, mientras que la propiedad _value_ es de hecho establecida
como `undefined`, si uno luego añade una propiedad con el mismo nombre, la
propiedad será iterada en su posición _anterior_ y no al final de la secuencia como
uno esperaría luego de haber eliminado la propiedad y agregarla nuevamente.

Si usted desea usar un arreglo asociativo ordenado con soporte para
implementaciones antiguas, use un objeto {{jsxref("Map")}} si está disponible
(a través de un [_polyfill_](/es/docs/Glossary/Polyfill), por ejemplo), o simule esta estructura con dos
arreglos separados (uno para las claves y otro para los valores), o construya
un arreglo de objetos con una única propiedad, etc.

## Ejemplos

```js
// Crea la propiedad adminName en el ámbito global.
adminName = "xyz";

// Crea la propiedad empCount en el ábmti global.
// Como se usa var, es marcada como no configurable.
// Lo mismo es cierto para let y const.
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// adminName es una propiedad del ámbito global.
// Puede ser eliminada debido a que es declarada sin usar var,
// y por lo tanto es configurable.
delete adminName; // retorna true

// Por el contrario, empCount no es configurable
// debido a que fue usado var al declararla.
delete empCount; // retorna false

// delete puede ser usado para eliminar propiedades de objetos.
delete EmployeeDetails.name; // retona true

// Incluso cuando la propiedad no existe, delete retorna "true".
delete EmployeeDetails.salary; // retorna true

// delete no afecta propiedades estáticas propias del lenguaje.
delete Math.PI; // retorna false

// EmployeeDetails es una propiedad del ámbito global.
// Debido a que fue definida sin "var", se marca como configurable.
delete EmployeeDetails; // retorna true

function f() {
  var z = 44;

  // delete no afecta nombres de variables locales
  delete z; // retorna false
}
```

### `delete` y la cadena de prototipos

En el siguiente ejemplo, se elimina una propiedad directa de un objeto mientras
que una propiedad con el mismo nombre está disponible en la cadena de
prototipos:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// foo.bar está asociado con la
// propiedad directa.
console.log(foo.bar); // 10

// Eliminar la propiedad directa
// del objeto foo.
delete foo.bar; // retorna true

// foo.bar aún está disponible en
// la cadena de prototipos.
console.log(foo.bar); // 42

// Eliminar la propiedad en el prototipo.
delete Foo.prototype.bar; // retorna true

// La propiedad "bar" ya no puede ser heredada
// de foo ya que ha sido eliminada.

console.log(foo.bar); // undefined
```

### Eliminando elementos de arreglos

Cuando se elimina un elemento de un arreglo, la propiedad `length` no se ve
afectada. Se mantiene incluso si se elimina el último elemento del arreglo.

Cuando el operador `delete` elimina un elemento de un array, ese elemento
no se encuentra más en el mismo. En el siguiente ejemplo, `trees[3]` es
eliminado con el uso de `delete`.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // esto no se ejecuta
}
```

Si desea que un elemento de un arreglo exista pero que no tenga un valor
definido, use el valor `undefined` en lugar del operador `delete`. En el
siguiente ejmeplo, `trees[3]` recibe el valor `undefined`, pero el elemento
del arreglo aún existe:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // esto sí se ejecuta
}
```

Si en lugar de eso, usted desea eliminar un elemento de un arreglo cambiando
los contenidos del mismo, use el método
{{jsxref("Array.splice()", "splice()")}}. En el siguiente ejemplo,
se elimina completamente `trees[3]` del arreglo usando
{{jsxref("Array.splice()", "splice()")}}:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Análisis en profundidad del operador delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
