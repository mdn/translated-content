---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 54ae754f4d18601ee91f741c7b774d2238e2656e
---

{{JSRef}}

**`Symbol`** es un objeto incorporado cuyo constructor devuelve un `symbol` [primitivo](/es/docs/Glossary/Primitive) — también llamado **Symbol value** o simplemente **Symbol** — que está garantizado que sea único. Los Symbols se utilizan a menudo para añadir claves de propiedades únicas a un objeto que no sean iguales a las claves que cualquier otro código pueda añadir al objeto, y que están ocultas de cualquier mecanismo que otro código utilice normalmente para acceder al objeto. Esto permite una forma de {{Glossary("encapsulation")}} débil, o una forma débil de [ocultación de información](https://en.wikipedia.org/wiki/Information_hiding).

Se garantiza que cada llamada a `Symbol()` devuelve un único Symbol. Cada llamada a `Symbol.for("key")` devolverá siempre el mismo Symbol para un valor dado de `"key"`. Cuando se llama a `Symbol.for("key")`, si se puede encontrar un símbolo con la clave dada en el registro global de símbolos, se devuelve ese Symbol. En caso contrario, se crea un nuevo Symbol, se añade al registro global de Symbols con la clave dada y se devuelve.

## Descripción

Para crear un nuevo Símbolo primitivo, se escribe `Symbol()` con una cadena opcional como descripción:

```js
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
```

El código anterior crea tres nuevos símbolos. Tenga en cuenta que `Symbol("foo")` no coacciona la cadena `"foo"` en un Symbol. Crea un nuevo Symbol cada vez:

```js
Symbol("foo") === Symbol("foo"); // false
```

La siguiente sintaxis con el operador {{jsxref("Operators/new", "new")}} lanzará un {{jsxref("TypeError")}}:

```js
let sym = new Symbol(); // TypeError
```

Esto evita que los autores creen un objeto envolvente explícito `Symbol` en lugar de un nuevo valor Symbol y podría ser sorprendente ya que la creación de objetos envolventes explícitos alrededor de tipos de datos primitivos es generalmente posible (por ejemplo, `new Boolean`, `new String` y `new Number`).

Si realmente quieres crear un objeto envolvente `Symbol`, puedes utilizar la función `Object()`:

```js
let sym = Symbol("foo");
typeof sym; // "symbol"
let symObj = Object(sym);
typeof symObj; // "object"
```

### Symbols compartidos en el registro global de Symbols

La sintaxis anterior utilizando la función `Symbol()` no creará un Symbol global que esté disponible en toda su base de código. Para crear Symbols disponibles en todos los archivos e incluso en todos los ámbitos (cada uno de los cuales tiene su propio ámbito global), utilice los métodos {{jsxref("Symbol.for()")}} y {{jsxref("Symbol.keyFor()")}} para establecer y recuperar Symbols del registro global de Symbols.

### Encontrar las propiedades de los Symbols en los objetos

El método {{jsxref("Object.getOwnPropertySymbols()")}} devuelve una matriz de Symbols y permite encontrar las propiedades de los Symbols en un objeto determinado. Tenga en cuenta que cada objeto se inicializa sin propiedades Symbol propias, por lo que este array estará vacío a menos que haya establecido propiedades Symbol en el objeto.

## Constructor

- [`Symbol()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)
  - : Crea un nuevo objeto `Symbol`. Está incompleto como constructor porque no soporta la sintaxis "`new Symbol()`".

## Propiedades estáticas

- {{jsxref("Symbol.asyncIterator")}}
  - : Un método que devuelve el AsyncIterator por defecto para un objeto. Utilizado por [`for await...of`](/es/docs/Web/JavaScript/Reference/Statements/for-await...of).
- {{jsxref("Symbol.hasInstance")}}
  - : Un método que determina si un objeto constructor reconoce un objeto como su instancia. Utilizado por {{jsxref("Operators/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Un valor booleano que indica si un objeto debe ser convertido a sus elementos de matriz. Utilizado por {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.iterator")}}
  - : Un método que devuelve el iterador por defecto de un objeto. Utilizado por [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of).
- {{jsxref("Symbol.match")}}
  - : Un método que coincide con una cadena, también se utiliza para determinar si un objeto puede ser utilizado como una expresión regular. Utilizado por {{jsxref("String.prototype.match()")}}.
- {{jsxref("Symbol.matchAll")}}
  - : Un método que devuelve un iterador, que devuelve las coincidencias de la expresión regular con una cadena. Utilizado por {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : Un método que reemplaza las subcadenas coincidentes de una cadena. Utilizado por {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : Un método que devuelve el índice dentro de una cadena que coincide con la expresión regular. Utilizado por {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.split")}}
  - : Un método que divide una cadena en los índices que coinciden con una expresión regular. Utilizado por {{jsxref("String.prototype.split()")}}.
- {{jsxref("Symbol.species")}}
  - : Una función constructora que se utiliza para crear objetos derivados.
- {{jsxref("Symbol.toPrimitive")}}
  - : Un método que convierte un objeto en un valor primitivo.
- {{jsxref("Symbol.toStringTag")}}
  - : Valor de cadena utilizado para la descripción por defecto de un objeto. Utilizado por {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : Un valor de objeto cuyos nombres de propiedades propias y heredadas se excluyen de los enlaces de entorno [`with`](/es/docs/Web/JavaScript/Reference/Statements/with) del objeto asociado.

## Métodos estáticos

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : Busca los Symbols existentes con la `key` dada y los devuelve si los encuentra. En caso contrario, se crea un nuevo Symbol en el registro global de Symbols con la "key".
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : Recupera una clave de Symbol compartida del registro global de Symbols para el Symbol dado.

## Propiedades de instancias

- {{jsxref("Symbol.prototype.description")}}
  - : Una cadena de sólo lectura que contiene la descripción del Symbol.

## Métodos de instancia

- {{jsxref("Symbol.prototype.toString()")}}
  - : Devuelve una cadena que contiene la descripción del Symbol. Anula el método {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Devuelve el Symbol. Anula el método {{jsxref("Object.prototype.valueOf()")}}.
- {{jsxref("Symbol.prototype.@@toPrimitive()", "Symbol.prototype[@@toPrimitive]")}}
  - : Devuelve el Symbol.

## Ejemplos

### Uso del operador typeof con Symbols

El operador {{jsxref("Operators/typeof", "typeof")}} puede ayudarle a identificar los Symbols.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Conversiones de tipos de Symbols

Algunas cosas a tener en cuenta cuando se trabaja con la conversión de tipo de Symbols.

- Al intentar convertir un Symbol en un número, se producirá un {{jsxref("TypeError")}}.
  (e.g. `+sym` or `sym | 0`).
- Cuando se utiliza la igualdad suelta, `Object(sym) == sym` devuelve `true`.
- `Symbol("foo") + "bar"` lanza un {{jsxref("TypeError")}} (no se puede convertir Symbol en cadena). Esto impide crear silenciosamente un nuevo nombre de propiedad de cadena a partir de un Symbol, por ejemplo.
- La conversión ["más segura" `String(sym)`](/es/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funciona como una llamada a {{jsxref("Symbol.prototype.toString()")}} con Symbols, pero ten en cuenta que `new String(sym)` será lanzado.

### Iteración de Symbols y for...in

Los Symbols no son enumerables en las iteraciones [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in). Además, {{jsxref("Object.getOwnPropertyNames()")}} no devolverá las propiedades del objeto Symbol, sin embargo, puede utilizar {{jsxref("Object.getOwnPropertySymbols()")}} para obtenerlas.

```js
let obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (let i in obj) {
  console.log(i); // imprime en registro "c" y "d"
}
```

### Symbols y JSON.stringify()

Las propiedades con clave de Symbol serán completamente ignoradas cuando se utilice `JSON.stringify()`:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Para más detalles, consulte {{jsxref("JSON.stringify()")}}.

### Objetos envolventes de Symbols como claves de propiedades

Cuando se utiliza un objeto envolvente de un Symbol como clave de propiedad, este objeto será coaccionado a su Symbol envolvente:

```js
let sym = Symbol("foo");
let obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // sigue siendo 1
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Tipos y estructuras de datos](/es/docs/Web/JavaScript/Data_structures)
- ["ES6 en profundidad: Symbols" en hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
