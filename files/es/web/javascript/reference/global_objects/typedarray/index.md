---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

Un objeto **_TypedArray_** describe una vista similar a un arreglo de un [búfer de datos binarios subyacente](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). No existe una propiedad global denominada `TypedArray`, ni existe un constructor `TypedArray` directamente visible. En cambio, hay una serie de diferentes propiedades globales, cuyos valores son constructores de arreglos tipados para tipos de elementos específicos, que se enumeran a continuación. En las siguientes páginas, encontrarás propiedades y métodos comunes que se pueden utilizar con cualquier arreglo tipado que contenga elementos de cualquier tipo.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Descripción

ECMAScript 2015 define un constructor `TypedArray` que sirve como `[[Prototype]]` de todos los constructores `TypedArray`. Este constructor no está expuesto directamente: no existe una propiedad global `%TypedArray%` o `TypedArray`. Solo es accesible directamente a través de `Object.getPrototypeOf(Int8Array)` y similares. Todos los constructores de `TypedArray` heredan propiedades comunes de la función constructora `%TypedArray%`. Además, todos los prototipos de arreglos con tipo (`TypedArray.prototype`) tienen `%TypedArray%.prototype` como su `[[Prototype]]`.

El constructor `%TypedArray%` por sí solo no es particularmente útil. Llamarlo o usarlo en una expresión `new` arrojará un {{jsxref("TypeError")}}, excepto cuando se usa durante la creación de objetos en motores JS que admiten subclases. Actualmente no existen tales motores, por lo que `%TypedArray%` solo es útil para rellenar funciones o propiedades en todos los constructores `TypedArray`.

Al crear una instancia de `TypedArray` (p. ej., `Int8Array`), se crea un arreglo de búfer internamente en la memoria o, si se proporciona un objeto `ArrayBuffer` como argumento del constructor, entonces se usa en su lugar. La dirección del búfer se guarda como una propiedad interna de la instancia y todos los métodos de `%TypedArray%.prototype`, es decir, establecer el valor y obtener valor, etc.., operan en esa dirección del arreglo de búfer.

### Objetos TypedArray

| Tipo                            | Intervalo de valores             | Tamaño en bytes | Descripción                                                                               | Tipo de IDL web           | Tipo C equivalente               |
| ------------------------------- | -------------------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` a `127`                   | 1               | Dos enteros complementarios de 8 bits con signo                                           | `byte`                    | `int8_t`                         |
| {{jsxref("Uint8Array")}}        | `0` a `255`                      | 1               | Entero de 8-bit sin signo                                                                 | `octet`                   | `uint8_t`                        |
| {{jsxref("Uint8ClampedArray")}} | `0` a `255`                      | 1               | Entero de 8 bits sin signo (sujeto)                                                       | `octet`                   | `uint8_t`                        |
| {{jsxref("Int16Array")}}        | `-32768` a `32767`               | 2               | Dos enteros complementarios de 16 bits con signo                                          | `short`                   | `int16_t`                        |
| {{jsxref("Uint16Array")}}       | `0` a `65535`                    | 2               | Entero de 16 bits sin signo                                                               | `Short sin signo`         | `uint16_t`                       |
| {{jsxref("Int32Array")}}        | `-2147483648` a `2147483647`     | 4               | dos enteros complementarios de 32 bits con signo                                          | `long`                    | `int32_t`                        |
| {{jsxref("Uint32Array")}}       | `0` a `4294967295`               | 4               | Enteros de 32 bits sin signo                                                              | `long sin signo`          | `uint32_t`                       |
| {{jsxref("Float32Array")}}      | `1.2`×`10^-38` a `3.4`×`10^38`   | 4               | Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., `1.1234567`)   | `float sin restricciones` | `float`                          |
| {{jsxref("Float64Array")}}      | `5.0`×`10^-324` a `1.8`×`10^308` | 8               | Número de coma flotante IEEE de 64 bits (16 dígitos significativos, p. Ej., `1.123...15`) | `doble sin restricciones` | `double`                         |
| {{jsxref("BigInt64Array")}}     | `-2^63` a `2^63-1`               | 8               | Dos enteros complementarios de 64 bits con signo                                          | `bigint`                  | `int64_t (long long con signo)`  |
| {{jsxref("BigUint64Array")}}    | `0` a `2^64-1`                   | 8               | Entero de 64 bits sin signo                                                               | `bigint`                  | `uint64_t (long long sin signo)` |

## Constructor

No se puede crear una instancia de este objeto directamente. En su lugar, crea una instancia de un arreglo de un tipo particular, tal como {{jsxref("Int8Array")}} o {{jsxref("BigInt64Array")}}. Todos estos objetos tienen una sintaxis común para sus constructores:

```
new TypedArray();
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);
```

Donde _TypedArray_ es un constructor para uno de los tipos concretos.

### Parámetros

- `length`
  - : Cuando se llama con un argumento `length`, se crea un búfer de arreglo interno en la memoria, de tamaño `length` _multiplicado por `BYTES_PER_ELEMENT`_ bytes, que contienen ceros.
- `typedArray`
  - : Cuando se llama con un argumento `typedArray`, que puede ser un objeto de cualquiera de los tipos de arreglo con tipo (como `Int32Array`), el `typedArray` se copia en un nuevo arreglo tipado. Cada valor en `typedArray` se convierte al tipo correspondiente del constructor antes de ser copiado en el nuevo arreglo. La longitud del nuevo arreglo tipado será la misma que la longitud del argumento `typedArray`.
- `object`
  - : Cuando se llama con un argumento `object`, se crea un nuevo arreglo tipado como si fuera el método `TypedArray.from()`.
- `buffer`, `byteOffset`, `length`
  - : Cuando se llama con un `buffer` y, opcionalmente, un `byteOffset` y un `length`, se crea una nueva vista del arreglo tipado que visualiza el {{jsxref("ArrayBuffer")}} especificado. Los parámetros `byteOffset` y `length` especifican el rango de memoria que será expuesto por la vista del arreglo tipado. Si se omiten ambos, se visualiza todo el `buffer`; si solo se omite `length`, se visualiza el resto de `buffer`.

## Propiedades estáticas

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Devuelve un valor numérico del tamaño del elemento para los diferentes objetos `TypedArray`.
- {{jsxref("TypedArray.name")}}
  - : Devuelve el valor de cadena del nombre del constructor (por ejemplo, `"Int8Array"`).
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : La función constructora utilizada para crear objetos derivados.
- {{jsxref("TypedArray.prototype")}}
  - : Prototipo para objetos `TypedArray`.

## Métodos estáticos

- {{jsxref("TypedArray.from()")}}
  - : Crea un nuevo `TypedArray` a partir de un objeto iterable o similar a un arreglo. Consulta también {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Crea un nuevo `TypedArray` con un número variable de argumentos. Consulta también {{jsxref("Array.of()")}}.

## Propiedades de la instancia

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Devuelve el {{jsxref("ArrayBuffer")}} al que hace referencia el arreglo tipado. Corregido en el momento de la construcción y, por lo tanto, de **solo lectura**.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Devuelve la longitud (en bytes) del arreglo tipado. Corregido en el momento de la construcción y, por lo tanto, de **solo lectura.**
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Devuelve el desplazamiento (en bytes) del arreglo tipado desde el inicio de su {{jsxref("ArrayBuffer")}}. Corregido en el momento de la construcción y, por lo tanto, de **solo lectura.**
- {{jsxref("TypedArray.prototype.length")}}
  - : Devuelve el número de elementos contenidos en el arreglo tipado. Corregido en el momento de la construcción y, por lo tanto, de **solo lectura.**

## Métodos de instancia

- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Copia una secuencia de elementos de arreglo dentro del arreglo. Consulta también {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los pares clave/valor para cada índice del arreglo. Consulta también {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Comprueba si todos los elementos del arreglo pasan la prueba proporcionada por una función. Consulta también {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Rellena todos los elementos de un arreglo desde un índice inicial hasta un índice final con un valor estático. Consulta también {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Crea un nuevo arreglo con todos los elementos de este arreglo para la cual la función de filtrado proporcionada devuelve `true`. Consulta también {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Devuelve el valor encontrado en el arreglo, si un elemento del arreglo satisface la función de prueba proporcionada, o `undefined` si no se encuentra. Consulta también {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Devuelve el índice encontrado en el arreglo, si un elemento del arreglo satisface la función de prueba proporcionada o `-1` si no se encuentra. Consulta también {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Llama a una función para cada elemento del arreglo. Consulta también {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Determina si un arreglo tipado incluye un determinado elemento, devolviendo `true` o `false` según corresponda. Consulta también {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Devuelve el primer (mínimo) índice de un elemento dentro del arreglo igual al valor especificado, o `-1` si no se encuentra ninguno. Consulta también {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Une todos los elementos de un arreglo en una cadena. Consulta también {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Devuelve un nuevo `Array Iterator` que contiene las claves para cada índice del arreglo. Consulta también {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Devuelve el último (mayor) índice de un elemento dentro del arreglo igual al valor especificado, o `-1` si no se encuentra ninguno. Consulta también {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Crea un nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento de este arreglo. Consulta también {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Aplica una función contra un acumulador y cada valor del arreglo (de izquierda a derecha) para reducirlo a un solo valor. Consulta también {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Aplica una función contra un acumulador y cada valor del arreglo (de derecha a izquierda) para reducirlo a un solo valor. Consulta también {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Invierte el orden de los elementos de un arreglo: el primero se convierte en el último y el último en el primero. Consulta también {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Almacena múltiples valores en el arreglo tipado, leyendo valores de entrada de un arreglo especificado.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extrae una sección de un arreglo y devuelve un nuevo arreglo. Consulta también {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Devuelve `true` si al menos un elemento de este arreglo satisface la función de prueba proporcionada. Consulta también {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Ordena los elementos de un arreglo en su lugar y devuelve el arreglo. Consulta también {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Devuelve un nuevo `TypedArray` del índice del elemento inicial y final dado.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los valores de cada índice del arreglo. Consulta también {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Devuelve una cadena localizada que representa el arreglo y sus elementos. Consulta también {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Devuelve una cadena que representa el arreglo y sus elementos. Consulta también {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los valores de cada índice del arreglo.

## Ejemplos

### Se requiere `new`

A partir de ECMAScript 2015, los constructores `TypedArray` se deben construir con el operador {{jsxref("Operators/new", "new")}}. Llamar a un constructor `TypedArray` como una función sin `new` arrojará un {{jsxref("TypeError")}}.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: llamar a un constructor Int8Array incorporado
// sin new está prohibido
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

### Acceso a la propiedad

Puedes hacer referencia a elementos en el arreglo utilizando la sintaxis de índice de arreglo estándar (es decir, utilizando la notación entre corchetes). Sin embargo, obtener o establecer propiedades indexadas en arreglos tipados no buscará esta propiedad en la cadena de prototipos, incluso cuando los índices estén fuera de límites. Las propiedades indexadas consultarán el {{jsxref("ArrayBuffer")}} y nunca mirarán las propiedades del objeto. Aún puedes usar propiedades con nombre, al igual que con todos los objetos.

```js
// Configuración y obtención usando la sintaxis de arreglo estándar
var int16 = new Int16Array(2);
int16[0] = 42;
[parcial]console.log(0);

// No se consultan las propiedades indexadas en los prototipos (Fx 25)
Int8Array.prototype[20] = 'foo';
(new Int8Array(32))[20]; // 0
// incluso cuando está fuera del límite
Int8Array.prototype[20] = 'foo';
(new Int8Array(8))[20]; // undefined
// o con enteros negativos
Int8Array.prototype[-1] = 'foo';
(new Int8Array(8))[-1]; // undefined

// Sin embargo, se permiten propiedades con nombre (Fx 30)
Int8Array.prototype.foo = 'bar';
(new Int8Array(32)).foo; // "bar"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Arreglos tipados JavaScript](/es/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [TextDecoder](/es/docs/Web/API/TextDecoder) — Ayuda que decodifica cadenas a partir de datos numéricos
