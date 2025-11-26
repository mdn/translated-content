---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

El objeto **`Map`** retiene tuplas de llave-valor y mantiene el orden de inserción de las llaves.
Cualquier valor (ambos objetos y {{Glossary("Primitive", "valores primitivos")}}) puede ser usado como llave o valor.

{{InteractiveExample("JavaScript Demo: Map", "taller")}}

```js interactive-example
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2
```

## Descripción

Los objetos `Map` son colecciones de tuplas tipo llave-valor. Una llave en `Map` **puede aparecer solo una vez**; es única en la colección de `Map`. Un objeto `Map` es iterado por sus tuplas llave-valor —un bucle {{jsxref("Statements/for...of", "for...of")}} regresa un arreglo de `[llave, valor]` por cada iteración. La iteración sucede en _orden de inserción_, la cual corresponde al orden en el que cada tupla llave-valor fue incertada inicialmente en el _map_ por el método [`set()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/set) (eso es, si no había una llave con el mismo valor en el map, cuando `set()` fué llamado).

La especificación requiere que los _maps_ sean implementados "que, en promedio, proporcione tiempos de acceso que sean sublineales al numero de elementos en la colección". Por lo tanto, podría ser representado internamente como una tabla hash (con una busqueda O(1)), un árbol de búsqueda (con una busqueda de O(log(N))), o cualquier otra estructura de datos, mientras la complejidad sea mejor que O(N).

### Igualdad de llaves

La igualdad de valores se basa en el algoritmo [Igualdad SameValueZero](/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#igualdad_same-value-zero). (Se solía usar [igualdad SameValue](/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#igualdad_same-value), el cual trataba `0` y `-0` como diferentes. Revise [compatibilidad con navegadores](#compatibilidad_con_navegadores).) Lo que significa que {{jsxref("NaN")}} es conciderado lo mismo que `NaN` (a pesar de que `NaN !== NaN`) y todos los otros valores son conciderados iguales, de acuerdo a la semantica del operador `===`.

### Objects vs. Maps

{{jsxref("Object")}} es similar a `Map`—ambos te permiten asignar llaves a valores, recuperar esos valores, borrar llaves, y detectar si hay algo guardado en una llave. Por esta razón (y porque no había alternativas incorporadas), históricamente `Object` se ha usado como `Map`.

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
      <th scope="row">Llaves accidentales</th>
      <td>
        Un objeto <code>Map</code> no tiene llaves por defecto. Sólo contiene lo que explicitamente se pone en él.
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
          permitir a un atacante sobreescribir el prototipo del objeto, lo que puede llevar a
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            ataques de inyección de objetos
          </a>. Al igual que el problema con la colisión de llaves, esto se puede mitigar usando un objeto con prototipo-<code>null</code>
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
          A pesar de que ahora las llaves de un objeto común <code>Object</code> están ordenadas, esto no siempre fué el caso, y el orden es complejo. Como resultado es mejor no confiar en el orden de las propiedades.
        </p>
        <p>
          El orden en ECMAScript 2015 fué definido inicialmente para las propiedades propias del objeto; ECMAScript 2020 define un orden también para propiedades heredadas. Pero nótese que ningún mecanismo único itera <strong>todas</strong>  las propiedades de un objeto; de los varios mecanismos, cada uno inluye un subconjunto diferente de propiedades; ({{jsxref("Statements/for...in", "for-in")}}
          incluye sólo propiedades donde la llave es una cadena de texto enumerable;
          {{jsxref("Object.keys")}} incluye sólo propiedades propias, enumerables,
          y las llaves son cadenas de texto;
          {{jsxref("Object.getOwnPropertyNames")}} incluye propias,
          llaves de cadena de texto incluso si no son enumerables;
          {{jsxref("Object.getOwnPropertySymbols")}} hace lo mismo sólo para propiedades que su llave es un <code>Symbol</code> etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tamaño</th>
      <td>
        El número de elementos en un <code>Map</code> se obtiene fácilmente de su propiedad
        {{jsxref("Map.prototype.size", "size")}}.
      </td>
      <td>
        Determinar el número de elementos en un <code>Objeto</code> es mas indirecto y menos eficiente. Una forma común de hacerlo es através de la propiedad {{jsxref("Array/length", "length")}} del arreglo que regresa la función {{jsxref("Object.keys()")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteración</th>
      <td>
        Un <code>Map</code> es un
        <a href="/es/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterable</a
        >, así que puede ser iterado directamente.
      </td>
      <td>
        <p>
          <code>Object</code> no implementa un <a
            href="/es/docs/Web/JavaScript/Reference/Iteration_protocols#el_protocolo_iterable"
            >protocolo de iteración</a
          >, por eso los objetos no son directamente iterables usando la sentencia de JavaScript
          <a href="/es/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          > (por defecto).
        </p>
        <div class="notecard note">
          <p><strong>Nota:</strong></p>
          <ul>
            <li>
              Un objeto puede implementar un protocolo de iteración, o puedes obtener un iterable para un objeto usando <a
                href="/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > o <a
                href="/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >.
            </li>
            <li>
              La sentencia
              <a href="/es/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              > te permite que iteres sobre las propiedades
              <em>enumerables</em> de un objeto.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Desempeño</th>
      <td>
        <p>
          Se desempeña mejor en escenarios que involucran adiciones y eliminaciones frecuentes de tuplas llave-valor.
        </p>
      </td>
      <td>
        <p>
          No está optimizado para adiciones y eliminaciones frequentes de tuplas llave-valor.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialización y análisis de cadenas de texto</th>
      <td>
        <p>No tiene soporte nativo para serialización o análisis de cadenas de texto.</p>
        <p>
          (Pero puedes construir tu propio soporte para serialización y análisis de cadenas de texto para
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
          Tiene soporte nativo para serialización de {{jsxref("Object")}} a
          JSON, usando {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Tiene soporte nativo para análisis de cadenas de JSON a {{jsxref("Object")}},
          usando {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Asignando propiedades de objeto

Asignar propiedades de objeto funciona también para objetos _Map_, y puede crear confusión.

Por lo tanto, de alguna manera esto parece funcionar:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Pero esta manera de asignar una propiedad, no interactua con la estructura de datos del objeto _Map_. Utiliza la característica de el objeto genérico. El valor 'bla' no es guardado en el _Map_ para consultas. Otras operaciones que fallan:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

El uso correcto para guardar datos en el objeto _Map_ es através de el método `set(key, value)`.

```js example-good
const contacts = new Map();
contacts.set("Jessie", {
  telefono: "213-555-1234",
  direccion: "123 N 1st Ave",
});
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { telefono: "617-555-4321", direccion: "321 S 2nd St" });
contacts.get("Jessie"); // {teléfono: "213-555-1234", dirección: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

### APIs del navegador similares a Map

**Objetos del Navegador similares a `Map`** (o "objetos que parecen _map_") son interfaces de la [API Web](/es/docs/Web/API) que se comportan en muchos aspectos como un objeto `Map`.

Al igual que el objeto `Map`, las entradas pueden iterarse en el mismo orden en que fueron agregadas al objeto.
Los objetos similares a `Map` y los objetos `Map` también tienen propiedades y métodos que comparten el mismo nombre y comportamiento. Sin embargo, contrario a los objetos `Map` estos sólo permiten tipos específicos predefinidos para las llaves y valores de cada entrada.

Los tipos permitidos se encuentran en la especificación de la definición IDL (Interfaz de Descripcion del Lenguage). Por ejemplo, {{domxref("RTCStatsReport")}} es un objeto similar a `Map` que debe usar cadenas de caracteres para sus llaves, y objetos para sus valores. Esto está definido en la especificación IDL a continuación:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Los objetos similares a `Map` son o de solo-lectura o lectura-escritura (véase la palabra clave `readonly` en el IDL de arriba).

- Los obejtos similares a `Map` de solo-lectura tienen la propiedad [`size`](#map.prototype.size), y los métodos: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values), y [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Los objetos similares a `Map` de lectura-escritura tienen métodos adicionales: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete), y [`set()`](#map.prototype.set).

Los métodos y propiedades tienen el mismo comportamiento que las entidades equivalentes en el objeto `Map`, excepto por la restricción en los tipos de llaves y valores.

Los siguientes, son ejemplos de objetos de navegador similares a `Map`:

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}

## Constructor

- {{jsxref("Map/Map", "Map()")}}
  - : Crea un nuevo objeto `Map`.

## Propiedades estáticas

- [`Map[Symbol.species]`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : La función constructor que es usada para crear objetos derivados.

## Metodos estáticos

- {{jsxref("Map.groupBy()")}}
  - : Agrupa los elementos de un iterable usando los valores que regresa la función provista. El objeto `Map` que regresa, usa como llaves los valores únicos de la función de prueba, los cuales pueden ser usados para obtener el arreglo de elementos de cada grupo.

## Propiedades de instancia

Estas propiedades están definidas en `Map.prototype` y las comparten todas las instancias de `Map`.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : La funcion constructor que creó el objeto de instancia. Para las instancias de `Map` el valor inicial es el constructor {{jsxref("Map/Map", "Map")}}.
- {{jsxref("Map.prototype.size")}}
  - : Regresa el número de tuplas llave/valor en el objeto `Map`.
- `Map.prototype[Symbol.toStringTag]`
  - : El valor inicial de la propiedad [`[Symbol.toStringTag]`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena de caracteres `"Map"`. Esta propiedad es usada en {{jsxref("Object.prototype.toString()")}}.

## Métodos de instancia

- {{jsxref("Map.prototype.clear()")}}
  - : Remueve todas las tuplas llave-valor del objeto `Map`.
- {{jsxref("Map.prototype.delete()")}}
  - : Regresa `true` si un elemento en el objeto `Map` existía y ha sido removido, or `false` si el elemento no existe.`map.has(key)` regresará `false` después de esto.
- {{jsxref("Map.prototype.entries()")}}
  - : Regresa un nuevo objeto Iterador que contiene un arreglo con dos miembros `[llave, valor]` por cada elemento en el objeto `Map` en orden de inserción.
- {{jsxref("Map.prototype.forEach()")}}
  - : Llama una función `callbackFn` una vez por cada tupla llave-valor presente en el objeto `Map`, en orden de inserción. Si un parametro `thisArg` es proporcionado a `forEach`, será utilizado como el valor `this` para cada llamada a la funcion callback.
- {{jsxref("Map.prototype.get()")}}
  - : Regresa el valor asociado a la llave que se pasa como argumento, o `undefined` si no hay ninguno.
- {{jsxref("Map.prototype.has()")}}
  - : Regresa un booleano indicando si, en el objeto `Map` un valor ha sido asociado a la llave pasada como argumento.
- {{jsxref("Map.prototype.keys()")}}
  - : Regresa un nuevo objeto Iterador que contiene las llaves para cada elemento en el objeto `Map`, en orden de inserción.
- {{jsxref("Map.prototype.set()")}}
  - : Asigna el valor en el objeto `Map` para la llave pasada como argumento. Regresa el objeto `Map`.
- {{jsxref("Map.prototype.values()")}}
  - : Regresa un nuevo objeto Iterador que contiene los valores para cada elemento en un objeto `Map`, en orden de inserción.
- [`Map.prototype[Symbol.iterator]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Regresa un nuevo objeto Iterador que contiene un arreglo con dos miembros `[llave, valor]` por cada elemento en el objeto `Map`, en orden de inserción.

## Ejemplos

### Usando el objeto Map

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// asignando valores
myMap.set(keyString, "valor asociado con la llave 'a string'");
myMap.set(keyObj, "valor asociado con la llave keyObj");
myMap.set(keyFunc, "valor asociado con la llave keyFunc");

console.log(myMap.size); // 3

// obteniendo los valores
console.log(myMap.get(keyString)); // "valor asociado con la llave 'a string'"
console.log(myMap.get(keyObj)); // "valor asociado con la llave keyObj"
console.log(myMap.get(keyFunc)); // "valor asociado con la llave keyFunc"

console.log(myMap.get("a string")); // "valor asociado con la llave 'a string'", porque keyString === 'a string'
console.log(myMap.get({})); // undefined, porque keyObj !== {}
console.log(myMap.get(function () {})); // undefined, porque keyFunc !== function () {}
```

### Usando NaN como llave de Map

{{jsxref("NaN")}} puede también usarse como una llave. A pesar que cada `NaN` no es igual a si mismo (`NaN !== NaN` es verdadero), el siguiente ejemplo funciona porque los `NaN` son indistinguibles entre sí:

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

Los Maps pueden iterarse usando un bucle `for...of`:

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

Los Maps pueden iterarse usando el método {{jsxref("Map/forEach", "forEach()")}}:

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### Relación con objetos Array

```js
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Usa el constructor ordinario Map para transformar un Array 2D llave-valor a un map
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Usa Array.from() para transformar un map a un Array 2D llave-valor
console.log(Array.from(myMap)); // Mostrará exactamente el mismo Array como kvArray

// Una forma concisa de hacer lo mismo, usando la sintaxis spread
console.log([...myMap]);

// O usa los iteradores keys() o values(), y conviertelos a un arreglo
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Clonando y uniendo Maps

Así como los `Array`, los `Map` pueden clonarse:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (útil para comparaciones superficiales)
```

> [!NOTE]
> Tenga en cuenta que _los datos en si_ no se clonan.

Los objetos _Map_ pueden unirse, manteniendo la unicidad de las llaves:

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

// Al unir ambos maps. La ultima llave repetida gana.
// la sintaxis Spread convierte un Map a un Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Los Maps también pueden unirse a Arrays:

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

## Véase también

- [Polyfill para `Map` en `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
