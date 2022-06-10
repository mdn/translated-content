---
title: operador delete
slug: Web/JavaScript/Reference/Operators/delete
translation_of: Web/JavaScript/Reference/Operators/delete
---
{{jsSidebar("Operators")}}

El **operador `delete`** de JavaScript remueve una propiedad de un objeto; si no se
mantienen más referencias a la misma propiedad, eventualmente se libera automáticamente.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Syntax

```js
delete expresion
```

Donde la `expresion` debe ser una referencia a la [propiedad](/es/docs/Glossary/property/JavaScript), p. ej.:

```js
delete objeto.propiedad
delete objeto['propiedad']
```

### Parámetros

- `objeto`
  - : El nombre de un objeto, o una expresión que evalúa a un objeto.
- `propiedad`
  - : La propiedad a eliminar.

### Valor de retorno

`true` para todos los casos excepto cuando la propiedad es una propiedad {{jsxref("Object.hasOwnProperty", "own")}} {{jsxref("Errors/Cant_delete", "non-configurable")}}, en cuyo caso, se retorna `false` en modo no estricto.

## Descripción

Al contrario de lo que se podría pensar (tal vez debido a otros lenguajes de programación como 
[delete in C++](https://docs.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), el operador `delete` no tiene **nada** que ver con liberar memoria.
La gestión de memoria se hace de manera indirecta eliminando referencias. Véase la página [gestión de memoria](/es/docs/Web/JavaScript/Memory_Management) para más detalles.

El operador **`delete`** remueve una propiedad dada de un objeto.
En caso de que la supresión sea exitosa, retornará `true`, en otro caso
se retornará `false`.

Sin embargo, es importante considerar los siguientes escenarios:

- Si la propiedad que está intentando eliminar no existe, `delete`
  no tendrá ningún efecto y retornará `true`.

- If the property which you are trying to delete does not exist, `delete`
  will not have any effect and will return `true`.
- If a property with the same name exists on the object's prototype chain, then,
  after deletion, the object will use the property from the prototype chain (in
  other words, `delete` only has an effect on own properties).
- Any property declared with {{jsxref("Statements/var","var")}} cannot be deleted
  from the global scope or from a function's scope.

  - As such, `delete` cannot delete any functions in the global
    scope (whether this is part from a function definition or a function
    expression).
  - Functions which are part of an object (apart from the global scope) can be
    deleted with `delete`.

- Any property declared with {{jsxref("Statements/let","let")}} or
  {{jsxref("Statements/const","const")}} cannot be deleted from the scope within
  which they were defined.
- Non-configurable properties cannot be removed. This includes properties of
  built-in objects like {{jsxref("Math")}}, {{jsxref("Array")}},
  {{jsxref("Object")}} and properties that are created as non-configurable with
  methods like {{jsxref("Object.defineProperty()")}}.

The following snippet gives a simple example:

```js
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does
// not exist, true is returned
console.log(delete Employee.salary); // returns true
```

<h2 id="Description" name="Description">Descripción</h2>

<p>Al contrario de lo que se podría pensar, el operador <code>delete</code> no tiene nada que ver con liberar memoria (sólo lo hace de manera indirecta eliminando referencias. Más detalles en la página de<a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Gestion_de_Memoria"> gestión de memoria</a>).</p>

<p>Si la operación <code>delete</code> funciona correctamente, eliminará la propiedad del objeto por completo. Sin embargo, si existe otra propiedad con el mismo nombre en la cadena del <code>prototype </code>del objeto, éste heredará la propiedad del <code>prototype</code>.</p>

<p><code>delete</code> sólo es efectivo en propiedades de objetos. No tiene ningún efecto en variables o en nombres de funciones.<br>
 Aunque a veces son mal identificados como variables globales, las asignaciones que no especifican al objeto (ejemplo: x = 5), son en realidad propiedades que se asignan al objeto global.</p>

<p><code>delete</code> no puede eliminar ciertas propiedades de los objetos predefinidos (como Object, Array, Math etc). Estos están descritos en ECMAScript 5 y más tarde como no configurables.</p>

<h3 id="Temporal_dead_zone">Temporal dead zone</h3>

<p>The "<a href="/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let">temporal dead zone"</a> (TDZ), specified in ECMAScript 6 for <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code> and <a href="/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a> declarations, also applies to the <code>delete</code> operator. Thus, code like the following will throw a {{jsxref("ReferenceError")}}.</p>

<pre class="brush: js">function foo() {
  delete x;
  let x;
}

function bar() {
  delete y;
  const y;
}</pre>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">x = 42;         // crea la propiedad x en el objeto global
var y = 43;     // crea la propiedad y en el objeto global, y la marca como no configurable
myobj = {
  h: 4,
  k: 5
};

// x es una propiedad del objeto global y puede ser eliminada
delete x;       // retorna true

// y no es configurable, por lo tanto no puede ser eliminada
delete y;       // retorna false

// delete no afecta a ciertas propiedades predefinidas
delete Math.PI; // retorna false

// las propiedades definidas por el usuario pueden eliminarse
delete myobj.h; // retorna true

// myobj es una propiedad del objeto global, no una variable,
// por lo tanto puede eliminarse
delete myobj;   // retorna true

function f() {
  var z = 44;

  // delete no afecta a nombres de variables locales
  delete z;     // retorna false
}
</pre>

<p>Si el objeto hereda una propiedad de un prototype, y no tiene la propiedad en sí, la propiedad no puede ser eliminada por referencia al objeto. Aun así, puedes eliminarla directamente en el prototype.</p>

<p>If the object inherits a property from a prototype, and doesn't have the property itself, the property can't be deleted by referencing the object. You can, however, delete it directly on the prototype.</p>

<pre class="brush: js">function Foo(){}
Foo.prototype.bar = 42;
var foo = new Foo();

// retorna true, pero sin ningún efecto,
// ya que bar es una propiedad heredada
delete foo.bar;

// logs 42, propiedad aún heredada
console.log(foo.bar);

// elimina la propiedad en el prototype
delete Foo.prototype.bar;

// logs "undefined", propiedad no heredada
console.log(foo.bar);           </pre>

<h3 id="Deleting_array_elements" name="Deleting_array_elements">Eliminando elementos de un array</h3>

<p>Cuando eliminas un elemento de un array, la longitud del array no se ve afectada. Esta se mantiene incluso si eliminas el último elemento del array.</p>

<p>Cuando el operador <code>delete</code> elimina un elemento de un array, este elemento ya no está en el array. En el siguiente ejemplo, <code>trees[3]</code> es eliminado mediante <code>delete</code>.</p>

<pre class="brush: js">var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
    // esto no se ejecuta
}</pre>

<p>Si quieres que exista un elemento de un array pero que tengo un valor no definido, utiliza el valor <code>undefined</code> en vez del operador <code>delete</code>. En el siguiente ejemplo, <code>trees[3]</code> es asignado con el valor <code>undefined</code>, pero el elemento del array aún existe:</p>

<pre class="brush: js">var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
if (3 in trees) {
    // esto se ejecuta
}</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>ECMAScript 1st Edition.</td>
   <td>Standard</td>
   <td>Definición inicial. Implementado en JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.4.1', 'The delete Operator')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-delete-operator', 'The delete Operator')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegador">Compatibilidad de navegador</h2>

{{Compat("javascript.operators.delete")}}

<h2 id="See_also" name="See_also">Ver también</h2>

<ul>
 <li><a href="http://perfectionkills.com/understanding-delete/">Análisis en profundidad sobre delete</a></li>
</ul>
