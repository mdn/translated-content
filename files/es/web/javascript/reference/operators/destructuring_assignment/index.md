---
title: La desestructuración
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
---

{{jsSidebar("Operators", "Operadores")}}

La sintaxis de **desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## Descripción

Las expresiones de objetos y arreglos literales proporcionan una manera fácil de crear paquetes de datos _ad hoc_.

```js
const x = [1, 2, 3, 4, 5];
```

La desestructuración utiliza una sintaxis similar, pero en el lado izquierdo de la asignación para definir qué valores desempacar de la variable origen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Esta capacidad es similar a las características presentes en lenguajes como Perl y Python.

## Ejemplos

### Desestructuración de arreglos

#### Asignación básica de variables

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Asignación separada de la declaración

A una variable se le puede asignar su valor mediante una desestructuración separada de la declaración de la variable.

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

#### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del arreglo sea `undefined`.

```js
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

#### Intercambio de variables

Los valores de dos variables se pueden intercambiar en una expresión de desestructuración.

Sin desestructurar la asignación, intercambiar dos valores requiere una variable temporal (o, en algunos lenguajes de bajo nivel, el algoritmo del [truco XOR-swap](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

#### Analizar un arreglo devuelto por una función

Siempre ha sido posible devolver un arreglo desde una función. La desestructuración puede hacer que trabajar con un valor de retorno de arreglo sea más conciso.

En este ejemplo, `f()` devuelve los valores `[1, 2]` como su salida, que se puede procesar en una sola línea con desestructuración.

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignorar algunos valores devueltos

Puedes ignorar los valores de retorno que no te interesan:

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

También puedes ignorar todos los valores devueltos:

```js
[, ,] = f();
```

#### Asignar el resto de un arreglo a una variable

Al desestructurar un arreglo, puedes desempacar y asignar la parte restante a una variable usando el patrón `rest` o:

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Ten en cuenta que se lanzará un {{jsxref("SyntaxError")}} si se usa una coma final en el lado derecho con un elemento `rest` o:

```js example-bad
const [a, ...b] = [1, 2, 3];

// SyntaxError: el elemento rest no puede tener una coma al final
// Siempre considera usar el operador rest como último elemento
```

#### Desempacar valores coincidentes con una expresión regular

Cuando el método de expresión regular {{jsxref("Global_Objects/RegExp/exec", "exec()", "", 1)}} encuentra una coincidencia, devuelve un arreglo que contiene primero toda la parte coincidente de la cadena y luego las partes de la cadena que coinciden con cada grupo entre paréntesis en la expresión regular. La desestructuración te permite desempacar fácilmente las partes de este arreglo, ignorando la coincidencia completa si no es necesaria.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/es/Web/JavaScript",
      "https", "developer.mozilla.org", "es/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));
// "https"
```

### Desestructuración de objetos

#### Asignación básica

```js
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
```

#### Asignación sin declaración

A una variable se le puede asignar su valor con desestructuración separada de su declaración.

```js
let a, b;

({ a, b } = { a: 1, b: 2 });
```

> **Nota:** Los paréntesis `(...)` alrededor de la declaración de asignación son obligatorios cuando se usa la desestructuración de un objeto literal sin una declaración.
>
> `{a, b} = {a: 1, b: 2}` no es una sintaxis independiente válida, debido a que `{a, b}` en el lado izquierdo se considera un bloque y no un objeto literal.
>
> Sin embargo, `({a, b} = {a: 1, b: 2})` es válido, al igual que `const {a, b} = {a: 1, b: 2}`
>
> tu expresión `( ... )` debe estar precedida por un punto y coma o se puede usar para ejecutar una función en la línea anterior.

#### Asignar a nuevos nombres de variable

Una propiedad se puede desempacar de un objeto y asignar a una variable con un nombre diferente al de la propiedad del objeto.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Aquí, por ejemplo, `const {p: foo} = o` toma del objeto `o` la propiedad llamada `p` y la asigna a una variable local llamada `foo`.

#### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del objeto sea `undefined`.

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

#### Asignar nombres a nuevas variables y proporcionar valores predeterminados

Una propiedad puede ser ambas

- Desempacada de un objeto y asignada a una variable con un nombre diferente.
- Se le asigna un valor predeterminado en caso de que el valor desempacado sea `undefined`.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Desempacar campos de objetos pasados como parámetro de función

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} es ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe es John"
```

Esto desempaca el `id`, `displayName` y `firstName` del objeto `user` y los imprime.

#### Establecer el valor predeterminado de un parámetro de función

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // haz un dibujo de gráfico
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

> **Nota:** En la firma de la función para **`drawChart`** anterior, el lado izquierdo desestructurado se asigna a un objeto literal vacío en el lado derecho: `{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}`. También podrías haber escrito la función sin la asignación del lado derecho. Sin embargo, si omites la asignación del lado derecho, la función buscará al menos un argumento para ser proporcionado cuando se invoca, mientras que en su forma actual, simplemente puedes llamar a **`drawChart()`** sin proporcionar ningún parámetro. El diseño actual es útil si deseas poder llamar a la función sin proporcionar ningún parámetro, el otro puede ser útil cuando deseas asegurarte de que se pase un objeto a la función.

#### Desestructuración de arreglos y objetos anidados

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2020-08-29T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/es/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // renombrar
  translations: [
    {
      title: localeTitle, // renombrar
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### Iteración "`for...of`" y desestructuración

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log("Nombre: " + n + ", Padre: " + f);
}

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"
```

#### Nombres de propiedades de objetos calculados y desestructuración

Los nombres de propiedad calculados, como en un {{jsxref("Operators/Object_initializer", "Objeto literal", "#Computed_property_names", 1)}}, se pueden usar con la desestructuración.

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### `Rest` en la desestructuración de objetos

La propuesta [Propiedades `rest`/propagación para ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (etapa 4) agrega la sintaxis {{jsxref("Functions/rest_parameters", "rest", "", 1)}} para desestructurar. Las propiedades de `rest` recopilan las claves de propiedades enumerables restantes que aún no han sido seleccionadas por el patrón de desestructuración.

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

#### Identificador de JavaScript no válido como nombre de propiedad

La desestructuración se puede utilizar con nombres de propiedad que no son {{Glossary("Identifier", "identificadores")}} válidos en JavaScript proporcionando un identificador alternativo que sea válido.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

#### Desestructuración combinada de arreglos y objetos

La desestructuración de arreglos y objetos se puede combinar. Supongamos que deseas manipular el tercer elemento del siguiente arreglo `props`, y luego deseas la propiedad `name` en el objeto, puedes hacer lo siguiente:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Se busca la cadena de prototipos al desestructurar el objeto

Al deconstruir un objeto, si no se accede a una propiedad en sí misma, continuará buscando a lo largo de la cadena de prototipos.

```js
let obj = { self: "123" };
obj.__proto__.prot = "456";
const { self, prot } = obj;
// self "123"
// prot "456" (Acceso a la cadena de prototipos)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Operators/Assignment_Operators", "Operadores de asignación", "", 1)}}
- ["ES6 en profundidad: Desestructuración" en hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
