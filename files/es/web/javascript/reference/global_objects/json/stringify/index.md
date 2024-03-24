---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef}}

El método **`JSON.stringify()`** convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## Sintaxis

```
JSON.stringify(value[, replacer[, space]])
```

### Parámetros

- `value`
  - : El valor que será convertido a una cadena JSON.
- `replacer`{{Optional_Inline}}
  - : Una función que altera el comportamiento del proceso de conversión a cadena de texto, o un array de objetos {{JSxRef("String")}} o {{JSxRef("Number")}} que representan una lista de elementos válidos que se incluyen en la cadena JSON. Si este valor es {{JSxRef("null")}} o no se define, todas las propiedades del objeto son incluidas en la cadena de texto JSON resultante.
- `space`{{Optional_Inline}}
  - : Un objeto de tipo {{JSxRef("String")}} o {{JSxRef("Number")}} que se utiliza para insertar un espacio en blanco dentro de la cadena de salida JSON para mejorar su legibilidad.Si es de tipo `Number`, indica el número de espacios a usar como espacios en blanco; este número está limitado se limita a 10 (si es mayor, el valor es sólo `10`). Los valores inferiores a 1 indican que no se deben utilizar espacios.Si es de tipo `String`, la cadena de texto (o sus 10 primeros caracteres, si es mayor) se utiliza como espacios en blanco. Si este parámetro no se define o es {{JSxRef("null")}}, no se utilizará ningún espacio en blanco.

### Valor devuelto

Una cadena de texto JSON que representa el valor dado.

### Excepciones

Lanza una excepción {{JSxRef("TypeError")}} ("cyclic object value") cuando encuentra una referencia circular.

## Descripción

`JSON.stringify` convierte un valor a notación JSON representándolo:

- Si el valor tiene un método [toJSON()](</es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify#toJSON()_behavior>), es responsable de definir qué será serializado.
- Los objetos {{JSxRef("Boolean")}}, {{JSxRef("Number")}}, and {{JSxRef("String")}} se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
- Si durante la conversión se encuentra un {{JSxRef("undefined")}}, una {{JSxRef("Function")}}, o un {{JSxRef("Symbol")}} se omite (cuando se encuentra en un objeto) o se censura a {{JSxRef("null")}} (cuando se encuentra en un array). `JSON.stringify()` puede devolver `undefined` cuando se pasan valores "puros" como `JSON.stringify(function(){}`) o `JSON.stringify(undefined)`.
- Todas las propiedades que utilicen {{JSxRef("Symbol")}} en los nombres de la clave se ignoran por completo, incluso si utilizan una función `replacer`.
- Las instancias de {{JSxRef("Date")}} implementan la función `toJSON()` devolviendo una cadena de texto (igual que `date.toISOString()`). Por lo que son tratadas como strings.
- Los números {{JSxRef("Infinity")}} y {{JSxRef("NaN")}}, así como el valor {{JSxRef("null")}}, se consideran `null`.
- El resto de instancias de {{JSxRef("Object")}} (incluyendo {{JSxRef("Map")}}, {{JSxRef("Set")}}, {{JSxRef("WeakMap")}}, y {{JSxRef("WeakSet")}}) sólo tendrán serializadas sus propiedades enumerables.

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// Elementos de array identificados por string no son enumerables y no tienen sentido en JSON
let a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Estructuras de datos standard
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Símbolos:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Propiedades no enumerables:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'
```

### El parámetro `replacer`

El parámetro `replacer` (de reemplazo) puede ser tanto una función como o un array.

**Como una función** toma dos parámetros: el _valor_ y la _clave_ que van a ser procesados. El objeto al cual pertenece la clave representa el parametro this del reemplazo.

Inicialmente es llamado con una clave vacía y representa el objeto que se va a procesar, y solo después es llamado por cada propiedad en el objeto o array que se va a procesar.

Devuelve el valor que se va a agregar a la cadena JSON, de la siguiente manera:

- Si se devuelve un número, la cadena correspondiente es usada como el valor de la propiedad cuando se agrega a la cadena JSON.
- Si se devuelve una cadena, esta es usuada cono el valor de la propiedad cuando se agrega a la cadena JSON.
- Si se devuelve un Boolean, true o false son usados como el valor de la propiedad cuando se agrega a la cadena JSON.
- Si se devuelve algún otro objeto, este es recursivamente procesado en una cadena JSON llamando a la función de reemplazo para cada propiedad, amenos que el objeto sea una función, en tal caso nada se agrega a la cadena JSON.
- Si se devuelve undefined, la propiedad no se incluye en la salida de la cadena JSON.

> **Nota:** No se puede usar la función de reemplazo para borrar los valores de un array. Si se devuelve undefined o una función, entonces se usara null en su lugar.

#### Ejemplo con una función

```js
function replacer(key, value) {
  // Filtrando propiedades
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
var jsonString = JSON.stringify(foo, replacer);
// '{"week":45, "month":7}'
```

El resultado en una cadena JSON sería: `{"week":45,"month":7}`.

Ejemplo con un array

Si el reemplazo es un array, los valores indican los nombres de las propiedades del objeto que se va a incluir en la cadena JSON resultado.

```js
JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', sólo mantiene las propiedades de "week" y de "month"
```

### Argumento `space`

Este argumento puede ser empleado para controlar el espaciado en la cadena final. Si es un número, los niveles sucesivos del proceso serán identados cada uno por tantos espacios como se indique (hasta 10). Si es una cadena, serán identados con dicha cadena (o los primeros diez caracteres de la misma).

```js
JSON.stringify({ a: 2 }, null, " ");
// regresa la cadena de texto:
// '{
//  "a": 2
// }'
```

Usar el carácter tabulador simula la apariencia de impresión:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, "\t");
// devuelve el string:
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }'
```

### Comportamiento toJSON()

Si un objeto que sera estringificado tiene una propiedad llamada toJSON donde su valor es una función, entonces el método toJSON modifica el comportamiento de la estringificación JSON: en lugar del objeto que esta siendo serializado, el valor retornado por el método toJSON será serializado cuando el mismo sea llamado. Por ejemplo:

```js
var obj = {
  foo: "foo",
  toJSON: function () {
    return "bar";
  },
};
var json = JSON.stringify({ x: obj }); // '{"x":"bar"}'.
```

### Ejemplo de como usar `JSON.stringify()` con `localStorage`

En dado caso en el cual se requiera que un objeto creado por el usuario y al cual se le permita ser restaurado incluso cuando el navegador ha sido cerrado, el siguiente ejemplo es un modelo de la aplicabilidad del metodo JSON. stringify().

> **Advertencia:** Las funciones no son un tipo de dato valido por lo cual estas no funcionaran. Algunos objetos como tipo DATE, se convertiran a cadenas de texto despues de ejecutar JSON.parse().

```js
// Creando un ejemplo de JSON
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Convirte el JSON string con JSON.stringify()
// entonces guarda con localStorage con el nombre de la sesión
localStorage.setItem("session", JSON.stringify(session));

// Ejemplo de como transformar el String generado usando
// JSON.stringify() y guardándolo en localStorage como objeto JSON otra vez
var restoredSession = JSON.parse(localStorage.getItem("session"));

// Ahora la variable restoredSession contiene el objeto que fue guardado
// en localStorage
console.log(restoredSession);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{JSxRef("JSON.parse()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – Introduces two functions: `JSON.decycle` and `JSON.retrocycle`. These allow encoding and decoding of cyclical structures and DAGs into an extended and retrocompatible JSON format.
