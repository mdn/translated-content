---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 
---

{{JSRef}}

El objeto **`Map`** retiene tuplas de llave-valor y mantiene el orden de inserción de las llaves.
Cualquier valor (ambos objetos y {{Glossary("Primitive", "valores primitivos")}}) puede ser usado como llave o valor.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Descripción

Los objetos `Map` son colecciones de tuplas de llave-valor. Una llave en `Map` **puede aparecer solo una vez**; es única en la colección de `Map`. Un objeto `Map` es iterado por sus tuplas de llave-valor —un bucle {{jsxref("Statements/for...of", "for...of")}} regresa un arreglo de `[llave, valor]` por cada iteración. La iteración sucede en _orden de inserción_, la cual corresponde al orden en el que cada par llave-valor fue incertada inicialmente en el map por el método [`set()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) (eso es, si no había una llave con el mismo valor en el map, cuando `set()` fué llamado).

La especificación requiere que los maps sean implementados "que, en promedio, proporcione tiempos de acceso que sean sublineales al numero de elementos en la colección". Por lo tanto, podría ser representado internamente como una tabla hash (con una busqueda O(1)), un  árbol de búsqueda (con una busqueda de O(log(N))). 

### Igualdad de llaves

La igualdad de valores se basa en el algoritmo [SameValueZero](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality). (It used to use [SameValue](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is), which treated `0` and `-0` as different. Check [browser compatibility](#browser_compatibility).) Lo que significa que {{jsxref("NaN")}} es conciderado lo mismo que `NaN` (a pesar de que `NaN !== NaN`) y todos los otros valores son conciderados iguales, de acuerdo a la semantica del operador `===`.

### Objects vs. Maps

{{jsxref("Object")}} es similar a `Map`—ambos te permiten asignar llaves a valores, recuperar esos valores, borrar llaves, y detectar si hay algo guardado en una llave. Por esta razón (y porque no había alternativas incorporadas), historicamente `Object` se ha usado como `Map`.

Sin embargo, hay diferencias importantes que hacen que se prefiera a `Map` en algunos casos:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Accidentes con llaves</th>
      <td>
        Un objeto <code>Map</code> no tiene llaves por defecto. Sólo contiene lo que explicitamente se pone en el.
      </td>
      <td>
        <p>
          Un objeto <code>Object</code> tiene un prototipo, así que tiene llaves por defecto que podrían coincidir con tus propias llaves si no tienes cuidado.
        </p>
        <div class="notecard note">
          <p>
            <strong>Nota:</strong> Esto se puede evitar usando {{jsxref("Object.create", "Object.create(null)")}},
            pero raramente se hace.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Seguridad</th>
      <td>
        Un objeto <code>Map</code> es seguro de usar con llaves y valores proporcionados por el usuario.
      </td>
      <td>
        <p>
          Asignar tuplas de llave-valor proporcionadas por el usuario en un <code>Object</code> puede
          perimitr a un atacante sobreescribir el prototipo del objeto, lo que puede llevar a 
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            ataques de inyección de objetos
          </a>. Al igual que el problema con la colisión de llaves, esto se puede mitigar usando un objeto con protoripo-<code>null</code> 
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tipos de llaves</th>
      <td>
        Las llaves de un objeto <code>Map</code> pueden ser cualquier valor (incluyendo funciones,
        objetos, o cualquier primitivo).
      </td>
      <td>
        Las llaves de un objeto <code>Object</code> deben ser {{jsxref("String")}} o un {{jsxref("Symbol")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Orden de las llaves</th>
      <td>
        <p>
          Las llaves en un objeto <code>Map</code> son ordenadas de forma simple y directa: El objeto <code>Map</code> itera las entradas, llaves y valores en el orden en que fueron insertadas.
        </p>
      </td>
      <td>
        <p>
          A pesar de que ahora las llaves de un objeto comun <code>Object</code> estan ordenadas, esto no siempre fue el caso, y el orden es complejo. Como resultado es mejor no confiar en el orden de las propiedades.
        </p>
        <p>
          El orden en ECMAScript 2015 fue definido inicialmente para las propiedades propias del objeto; ECMAScript 2020 define un orden tambien para propiedades heredadas. Pero notece que ningun mecanismo unico itera <strong>todas</strong>  las propiedades de un objeto; de los varios mecanismos, cada uno inluye un subconjunto diferente de propiedades; ({{jsxref("Statements/for...in", "for-in")}}
          incluye solo propiedades que la llave es una cadena de texto enumerable;
          {{jsxref("Object.keys")}} incluye solo propiedades propias, enumerables,
          y las llaves son cadenas de texto;
          {{jsxref("Object.getOwnPropertyNames")}} incluye propias,
          llaves de cadena de texto incluso si no son enumerables;
          {{jsxref("Object.getOwnPropertySymbols")}} hace lo mismo solo para propiedades que su llave es un <code>Symbol</code> etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Tamano</p></th>
      <td>
        El numero de elementos en un <code>Map</code> se obtiene facilmente de su propiedad
        {{jsxref("Map.prototype.size", "size")}}.
      </td>
      <td>
        Determinar el numero de elementos en un <code>Objeto</code> es mas indirecto y menos eficiente. Una forma comun de hacerlo es atraves de la propiedad {{jsxref("Array/length", "length")}} del arreglo que regresa la funcion {{jsxref("Object.keys()")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteracion</th>
      <td>
        Un <code>Map</code> es un
        <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterable</a
        >, asi que puede ser iterado directamente.
      </td>
      <td>
        <p>
          <code>Object</code> no implementa un <a
            href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >protocolo de iteracion</a
          >, por eso los objetos no son directamente iterables usando la sentencia de JavaScript
          <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >.
        </p>
        <div class="notecard note">
          <p><strong>Nota:</strong></p>
          <ul>
            <li>
              Un objeto puede implementar un protocolo de iteracion, o puedes obtener un iterable para un objeto usando <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > o <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              La sentencia
              <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              > te permite que iteres sobre las propiedades
              <em>enumerables</em> de un objeto.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Desempeno</th>
      <td>
        <p>
          Se desempena mejor en escenario que involucran adiciones y eliminacions frecuentes de tuplas llave-valor.
        </p>
      </td>
      <td>
        <p>
          No esta optimizado para addiciones y eliminaciones frequentes de tuplas llave-valor.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serializacion y analisis de cadenas de texto</th>
      <td>
        <p>No tiene soporte nativo para serializacion o analisis de cadenas de texto.</p>
        <p>
          (Pero puedes construir tu propio soporte para serializacion y analisis de cadenas de texto para
          <code>Map</code> utilizando {{jsxref("JSON.stringify()")}}
          con su argumento <em>replacer</em>, y utilizando
          {{jsxref("JSON.parse()")}} con su argumento
          <em>reviver</em>. Mirese la pregunta de Stack Overflow
          <a href="https://stackoverflow.com/q/29085197/"
            >How do you JSON.stringify an ES6 Map?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Tiene soporte nativo para serializacion de {{jsxref("Object")}} a
          JSON, usando {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Tiene soporte nativo para analisis de cadenas de JSON a {{jsxref("Object")}},
          usando {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Asignando propiedades de objeto

Asignar propiedades de objeto funciona tambien para objetos _Map_, y puede crear confusion.

Por lo tanto, esto parece funcionar de alguna manera:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```
Pero esta manera de asignar una propiedad, no interactua con la estructura de datos del objeto _Map_. Utiliza la caracteristica de el objeto genericol. El valor de 'bla' no es guardado en el _Map_ para consultas. Otras operaciones sobre los datos fallan:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```
El uso correcto para guardar datos en el objeto _Map_ es atraves de el metodo `set(key, value)`.

```js example-good
const contacts = new Map();
contacts.set("Jessie", { telefono: "213-555-1234", direccion: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { telefono: "617-555-4321", direccion: "321 S 2nd St" });
contacts.get("Jessie"); // {telefono: "213-555-1234", direccion: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

### APIs del navegador similares a Map

**Objetod del Navegador similares a `Map`** (o "objetos que parecen _map_") son [Web API](/en-US/docs/Web/API) interfaces que se comportan en muchos aspectos como un objeto `Map`.

Al igual que el objeto `Map`, las entradas pueden iterarse en el mismo orden en que fueron agregadas al objeto.
Los objetos smimilares a `Map` y los objetos `Map` tambien tienen propiedades y metodos que comparten el mismo nombre y comportamiento. Sin embargo contrario a los objetos `Map` estos solo permiten tipos especificos predefinidos para las llaves y valores de cada entrada.

Los tipos permitidos se encuentran en la especificacion de la definicion IDL (Interfaz de Descripcion del Lenguage). Por ejemplo, {{domxref("RTCStatsReport")}} es un objeto similar a `Map` que debe usar cadenar de caracteres para sus llaves, y objetos para sus valores. Esto esta definido en la especificacion IDL a continuacion:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Loso objetos similares a `Map` son o de solo-lectura o lectura-escritura (vease la palabra clave `readonly` en el IDL de arriba).

- Los obejtos similares a `Map` de solo-lectura tienen la propiedad [`size`](#map.prototype.size), y los metodos: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values), and [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Los objetos similares a `Map` de lectura-escritura tienen metodos adicionales: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete), and [`set()`](#map.prototype.set).

Los metodos y propiedades tienen el mismo comportamiento que las entidades equivalentes en el objeto `Map`, excepto por la restriccion en los tipos de llaves y valores.

Los siguientes son ejemplos de objetos de navegador similares a `Map`:

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}


## Constructor

- {{jsxref("Map/Map", "Map()")}}
  - : Crea un nuevo objeto `Map`.

## Propiedades estaticas

- [`Map[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : La funcion constructor que es usada para crear objetos derivados.

## Metodos estaticos

- {{jsxref("Map.groupBy()")}}
  - : Agrupa los elementos de un iterable usando los valores que regresa la funcion provista. El objeto `Map` que regresa, usa los valores unicos de la funcion de prueba como llaves, los cuales puedes ser usados para obtener el arreglo de elementos de cada grupo.

## Propiedades de instancia

Estas propiedades estan definidas en `Map.prototype` y las comparten todas las instancias de `Map`.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : La funcion constructor que creo el objeto de instancia. Para las instancias de `Map` el valor inicial es el constructor {{jsxref("Map/Map", "Map")}}.
- {{jsxref("Map.prototype.size")}}
  - : Regresa el numero de tuplas llave/valor en el objeto `Map`.
- `Map.prototype[Symbol.toStringTag]`
  - : El valor inicial de la propiedad [`[Symbol.toStringTag]`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena de caracteres `"Map"`. Esta propiedad es usada en {{jsxref("Object.prototype.toString()")}}.

## Metodos de instancia

- {{jsxref("Map.prototype.clear()")}}
  - : Removes all key-value pairs from the `Map` object.
- {{jsxref("Map.prototype.delete()")}}
  - : Returns `true` if an element in the `Map` object existed and has been
    removed, or `false` if the element does not exist. `map.has(key)`
    will return `false` afterwards.
- {{jsxref("Map.prototype.entries()")}}
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.forEach()")}}
  - : Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order. If a `thisArg` parameter is provided to `forEach`, it will be used as the `this` value for each callback.
- {{jsxref("Map.prototype.get()")}}
  - : Returns the value associated to the passed key, or `undefined` if there is none.
- {{jsxref("Map.prototype.has()")}}
  - : Returns a boolean indicating whether a value has been associated with the passed key in the `Map` object or not.
- {{jsxref("Map.prototype.keys()")}}
  - : Returns a new Iterator object that contains the keys for each element in the `Map` object in insertion order.
- {{jsxref("Map.prototype.set()")}}
  - : Sets the value for the passed key in the `Map` object. Returns the `Map` object.
- {{jsxref("Map.prototype.values()")}}
  - : Returns a new Iterator object that contains the values for each element in the `Map` object in insertion order.
- [`Map.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Returns a new Iterator object that contains a two-member array of `[key, value]` for each element in the `Map` object in insertion order.

## Ejemplos

### Usando el objeto Map

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}
```

### Usando NaN como llave de Map

{{jsxref("NaN")}} can also be used as a key. Even though every `NaN` is
not equal to itself (`NaN !== NaN` is true), the following example works because
`NaN`s are indistinguishable from each other:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Iterando Map con for...of

Maps can be iterated using a `for...of` loop:

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

### Iterando Map con forEach()

Maps can be iterated using the
{{jsxref("Map/forEach", "forEach()")}} method:

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### Relacon con objetos Array

```js
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Clonando y uniendo Maps

Just like `Array`s, `Map`s can be cloned:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> [!NOTA]
> Tenga en cuanta que _los datos en si_ no se clonan.

Maps can be merged, maintaining key uniqueness:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Maps can be merged with Arrays, too:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vease tambien

- [Polyfill for `Map` in `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
