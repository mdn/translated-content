---
title: Arreglos tipados de JavaScript
slug: Web/JavaScript/Guide/Typed_arrays
---

{{JsSidebar("Advanced")}}

**Los arreglos tipados en JavaScript** son objetos similares a arreglos que proporcionan un mecanismo para leer y escribir datos binarios sin procesar en búferes de memoria. Como ya sabrás, los objetos {{jsxref("Array", "Arreglo")}} crecen y se encogen dinámicamente y pueden tener cualquier valor de JavaScript. Los motores de JavaScript realizan optimizaciones para que estos arreglos sean rápidos.

Sin embargo, a medida que las aplicaciones web se vuelven cada vez más poderosas, agregando características como manipulación de audio y video, acceso a datos sin procesar usando `WebSockets`, etc., ha quedado claro que hay momentos en los que sería útil que el código JavaScript pudiera manipular rápida y fácilmente datos binarios sin procesar. Aquí es donde entran en juego los arreglos tipados. Cada entrada en un arreglo tipado de JavaScript es un valor binario sin procesar en uno de los formatos admitidos, desde números enteros de 8 bits hasta números de punto flotante de 64 bits.

Sin embargo, los arreglos tipados _no_ se deben confundir con los arreglos normales, ya que llamar a {{JSxRef("Array.isArray()")}} en un arreglo tipado devuelve `false`. Además, no todos los métodos disponibles para arreglos normales son compatibles con arreglos tipados (por ejemplo, `push` y `pop`).

## Búferes y vistas: arquitectura de los arreglos tipados

Para lograr la máxima flexibilidad y eficiencia, los arreglos de JavaScript dividen la implementación en _búferes_ y _vistas_. Un búfer (implementado por el objeto {{jsxref("ArrayBuffer")}} es un objeto que representa una porción de datos; no tiene ningún formato del que hablar y no ofrece ningún mecanismo para acceder a su contenido. Para acceder a la memoria contenida en un búfer, necesitas usar una vista. Una vista proporciona un contexto — es decir, un tipo de dato, un desplazamiento inicial y el número de elementos — que convierte los datos en un arreglo tipado.

![Arreglos tipados en ArrayBuffer](typed_arrays.png)

### `ArrayBuffer`

{{jsxref("ArrayBuffer")}} es un tipo de dato que se utiliza para representar un búfer de datos binarios genérico de longitud fija. No puedes manipular directamente el contenido de un `ArrayBuffer`; en su lugar, crea una vista de arreglo tipado o un {{JSxRef("DataView")}} que representa el búfer en un formato específico, y lo usa para leer y escribir el contenido del búfer.

### Vistas de arreglos tipados

Las vistas de arreglos tipados tienen nombres autodescriptivos y proporcionan vistas para todos los tipos numéricos habituales tal como `Int8`, `Uint32`, `Float64` y así sucesivamente. Hay una vista de arreglo tipado especial, la `Uint8ClampedArray`. Esta fija los valores entre 0 y 255. {{JSxRef("../Data_structures", "Tipos de datos JavaScript")}}

| Tipo                            | Intervalo de valores          | Tamaño en bytes | Descripción                                                                               | Tipo de IDL web           | Tipo C equivalente               |
| ------------------------------- | ----------------------------- | --------------- | ----------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| {{JSxRef("Int8Array")}}         | `-128` a `127`                | 1               | Dos enteros complementarios de 8 bits con signo                                           | `byte`                    | `int8_t`                         |
| {{JSxRef("Uint8Array")}}        | `0` a `255`                   | 1               | Entero de 8-bit sin signo                                                                 | `octet`                   | `uint8_t`                        |
| {{JSxRef("Uint8ClampedArray")}} | `0` a `255`                   | 1               | Entero de 8 bits sin signo (sujeto)                                                       | `octet`                   | `uint8_t`                        |
| {{JSxRef("Int16Array")}}        | `-32768` a `32767`            | 2               | Dos enteros complementarios de 16 bits con signo                                          | `short`                   | `int16_t`                        |
| {{JSxRef("Uint16Array")}}       | `0` a `65535`                 | 2               | Entero de 16 bits sin signo                                                               | `Short sin signo`         | `uint16_t`                       |
| {{JSxRef("Int32Array")}}        | `-2147483648` a `2147483647`  | 4               | dos enteros complementarios de 32 bits con signo                                          | `long`                    | `int32_t`                        |
| {{JSxRef("Uint32Array")}}       | `0` a `4294967295`            | 4               | Enteros de 32 bits sin signo                                                              | `long sin signo`          | `uint32_t`                       |
| {{JSxRef("Float32Array")}}      | `1.2`×`10-38` a `3.4`×`1038`  | 4               | Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., `1.1234567`)   | `float sin restricciones` | `float`                          |
| {{JSxRef("Float64Array")}}      | `1.2`×`10-38` a `3.4`×`10308` | 8               | Número de coma flotante IEEE de 64 bits (16 dígitos significativos, p. ej., `1.123...15`) | `doble sin restricciones` | `double`                         |
| {{JSxRef("BigInt64Array")}}     | `-263` a `263-1`              | 8               | Dos enteros complementarios de 64 bits con signo                                          | `bigint`                  | `int64_t (long long con signo)`  |
| {{JSxRef("BigUint64Array")}}    | `0` a `264-1`                 | 8               | Entero de 64 bits sin signo                                                               | `bigint`                  | `uint64_t (long long sin signo)` |

### `DataView`

{{jsxref("DataView")}} es una interfaz de bajo nivel que proporciona una API captadora (`getter`)/(`setter`) establecedora para leer y escribir datos arbitrarios en el búfer. Esto es útil cuando se trata de diferentes tipos de datos, por ejemplo. Las vistas de arreglos tipados están en el orden de bytes nativo (consulta {{Glossary("Endianness")}} de tu plataforma. Con un `DataView` puedes controlar el orden de bytes. Es `big-endian` de manera predeterminada y se puede establecer en `little-endian` en los métodos captadores/establecedores.

## APIs web que utilizan arreglos tipados

Estos son algunos ejemplos de APIs que utilizan arreglos tipados; hay otras, y todo el tiempo surgen más.

- [`FileReader.prototype.readAsArrayBuffer()`](/es/docs/Web/API/FileReader)
  - : El método `FileReader.prototype.readAsArrayBuffer()` comienza a leer el contenido del [Blob](/es/docs/Web/API/Blob) o [File](/es/docs/Web/API/File).
- [`XMLHttpRequest.prototype.send()`](</es/docs/Web/API/XMLHttpRequest#send()>)
  - : El método `send()` de instancias de `XMLHttpRequest` ahora admiten arreglos tipados y objetos {{JSxRef("ArrayBuffer")}} como argumento.
- [`ImageData.data`](/es/docs/Web/API/ImageData)
  - : Es un {{JSxRef("Uint8ClampedArray")}} que representa un arreglo unidimensional que contiene los datos en el orden RGBA, con valores enteros entre `0` y `255` inclusive.

## Ejemplos

### Usar vistas con búferes

En primer lugar, necesitaremos crear un búfer, aquí con una longitud fija de 16 bytes:

```js
let buffer = new ArrayBuffer(16);
```

En este punto, tenemos una porción de memoria cuyos bytes están todos preiniciados a 0. Sin embargo, no hay mucho que podamos hacer con él. Podemos confirmar que de hecho tiene 16 bytes de longitud, y eso es todo:

```js
if (buffer.byteLength === 16) {
  console.log("Sí, son 16 bytes");
} else {
  console.log("¡Oh no, es del tamaño incorrecto!");
}
```

Antes de que podamos trabajar realmente con este búfer, necesitamos crear una vista. Creemos una vista que trate los datos en el búfer como un arreglo de enteros de 32 bits con signo:

```js
let int32View = new Int32Array(buffer);
```

Ahora podemos acceder a los campos del arreglo como un arreglo normal:

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Esto completa las 4 entradas en el arreglo (4 entradas de 4 bytes cada una suman 16 bytes en total) con los valores `0`, `2`, `4` y `6`.

### Múltiples vistas sobre los mismos datos

Las cosas comienzan a ponerse realmente interesantes cuando consideras que puedes crear múltiples vistas sobre los mismos datos. Por ejemplo, dado el código anterior, podemos continuar así:

```js
let int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log("Entrada " + i + ": " + int16View[i]);
}
```

Aquí creamos una vista entera de 16 bits que comparte el mismo búfer que la vista existente de 32 bits y sacamos todos los valores en el búfer como enteros de 16 bits. Ahora obtenemos la salida `0`, `0`, `2`, `0`, `4`, `0`, `6`, `0`.

Sin embargo, puedes dar un paso más. Considera esto:

```js
int16View[0] = 32;
console.log("La entrada 0 en el arreglo de 32 bits ahora es " + int32View[0]);
```

La salida de esto es `"La entrada 0 en el arreglo de 32 bits ahora es 32"`.

En otras palabras, los dos arreglos se ven simplemente en el mismo búfer de datos, tratándolo como formatos diferentes. Lo puedes hacer con cualquier {{JSxRef("Global_Objects/TypedArray", "tipo de vista", "#TypedArray_objects")}}.

### Trabajar con complejas estructuras de datos

Al combinar un solo búfer con múltiples vistas de diferentes tipos, comenzando con diferentes desplazamientos en el búfer, puedes interactuar con objetos de datos que contienen múltiples tipos de datos. Esto te permite, por ejemplo, interactuar con complejas estructuras de datos [WebGL](/es/docs/Web/API/WebGL_API), archivos de datos o estructuras C que necesitas utilizar mientras usas [js-ctypes](/es/docs/Web/JavaScript/Typed_arrays).

Considera esta estructura C:

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

Puedes acceder a un búfer que contiene datos en un formato como este:

```js
let buffer = new ArrayBuffer(24);

// ... lee los datos en el búfer ...

let idView = new Uint32Array(buffer, 0, 1);
let usernameView = new Uint8Array(buffer, 4, 16);
let amountDueView = new Float32Array(buffer, 20, 1);
```

Luego puedes acceder, por ejemplo, al monto adeudado con `amountDueView[0]`.

> **Nota:** La [Data_structure_alignment](https://es.wikipedia.org/wiki/Data_structure_alignment) en una estructura C depende de la plataforma. Toma precauciones y consideraciones para estas diferencias de relleno.

### Conversión a arreglos normales

Después de procesar un arreglo con tipo, a veces es útil volver a convertirla en un arreglo normal para beneficiarse del prototipo {{jsxref("Array")}}. Esto se puede hacer usando {{JSxRef("Array.from()")}}, o usando el siguiente código donde `Array.from()` no es compatible.

```js
let typedArray = new Uint8Array([1, 2, 3, 4]),
  normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## Ve también

- [Conseguir ArrayBuffers o arreglos tipados a partir de cadenas codificadas en Base64](/es/docs/Glossary/Base64#appendix.3a_decode_a_base64_string_to_uint8array_or_arraybuffer)
- [StringView: una representación en C de cadenas basadas en arreglos tipados](/es/docs/Code_snippets/StringView)
- [Rápida manipulación de píxeles en canvas con arreglos tipados](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Arreglos tipados: Datos binarios en el navegador](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- {{Glossary("Endianness")}}
