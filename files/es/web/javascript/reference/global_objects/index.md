---
title: Objetos globales
slug: Web/JavaScript/Reference/Global_Objects
---

{{jsSidebar("Objects")}}

Este capítulo documenta todo acerca de estándares de Javascript, los objetos integrados en JavaScript, así como los métodos y propiedades de cada uno.

El término "objetos globales" (u objetos incorporados estándar) aquí no debe confundirse con el **objeto global**. Aquí, los objetos globales se refieren a **objetos en el ámbito global**. Se puede acceder al **objeto global** en sí usando el operador {{jsxref("Operadores/this", "this")}} en el ámbito global (pero solo si no se usa el modo estricto ECMAScript 5, en ese caso devuelve {{jsxref("undefined")}}). De hecho, el alcance global consiste en las propiedades del objeto global, incluidas las propiedades heredadas, si las hay.

Otros objetos en el alcance global son [creados por el script de usuario](/es/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects) o son proporcionados por la aplicación host. Los objetos host disponibles en los contextos del navegador están documentados en la [referencia de la API](/es/docs/Web/API/Reference). Para obtener más información acerca de la distinción entre el [DOM](/es/docs/DOM/DOM_Reference) y el núcleo de [JavaScript](/es/docs/Web/JavaScript), vea [Introducción a las tecnologías JavaScript](/es/docs/Web/JavaScript/JavaScript_technologies_overview).

## Objetos estándar por categoría

### Propiedades de valor

Estas propiedades globales devuelven un valor simple; ellos no tienen propiedades o métodos.

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- {{jsxref("null")}} literal
- {{JSxRef("globalThis")}}

### Propiedades de funciones

Estas funciones globales -funciones llamadas globalmente en lugar de un objeto- devuelven directamente sus resultados a la persona que llama.

- {{jsxref("Objetos_globales/eval", "eval()")}}
- {{jsxref("Objetos_globales/uneval", "uneval()")}} {{non-standard_inline}}
- {{jsxref("Objetos_globales/isFinite", "isFinite()")}}
- {{jsxref("Objetos_globales/isNaN", "isNaN()")}}
- {{jsxref("Objetos_globales/parseFloat", "parseFloat()")}}
- {{jsxref("Objetos_globales/parseInt", "parseInt()")}}
- {{jsxref("Objetos_globales/decodeURI", "decodeURI()")}}
- {{jsxref("Objetos_globales/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Objetos_globales/encodeURI", "encodeURI()")}}
- {{jsxref("Objetos_globales/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Objetos_globales/escape", "escape()")}} {{deprecated_inline}}
- {{jsxref("Objetos_globales/unescape", "unescape()")}} {{deprecated_inline}}

### Objetos fundamentales

Estos son los objetos fundamentales y básicos sobre los que se basan todos los demás objetos. Esto incluye objetos que representan objetos generales, funciones y errores.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### Números y fechas

Estos son los objetos base que representan números, fechas y cálculos matemáticos.

- {{jsxref("Number")}}
- {{JSxRef("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Procesamiento de texto

Estos objetos representan cadenas y soporte para manipularlos.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Colecciones indexadas

Estos objetos representan colecciones de datos que están ordenadas por un valor de índice. Esto incluye matrices (tipadas) y construcciones tipo array.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}

### Colecciones con clave

Estos objetos representan colecciones que usan claves; estos contienen elementos que son iterables en el orden de inserción.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Colecciones de vectores

Los tipos de datos vectoriales {{Glossary("SIMD")}} son objetos donde los datos se organizan en carriles.

- {{jsxref("SIMD")}} {{experimental_inline}}
- {{jsxref("Float32x4", "SIMD.Float32x4")}} {{experimental_inline}}
- {{jsxref("Float64x2", "SIMD.Float64x2")}} {{experimental_inline}}
- {{jsxref("Int8x16", "SIMD.Int8x16")}} {{experimental_inline}}
- {{jsxref("Int16x8", "SIMD.Int16x8")}} {{experimental_inline}}
- {{jsxref("Int32x4", "SIMD.Int32x4")}} {{experimental_inline}}
- {{jsxref("Uint8x16", "SIMD.Uint8x16")}} {{experimental_inline}}
- {{jsxref("Uint16x8", "SIMD.Uint16x8")}} {{experimental_inline}}
- {{jsxref("Uint32x4", "SIMD.Uint32x4")}} {{experimental_inline}}
- {{jsxref("Bool8x16", "SIMD.Bool8x16")}} {{experimental_inline}}
- {{jsxref("Bool16x8", "SIMD.Bool16x8")}} {{experimental_inline}}
- {{jsxref("Bool32x4", "SIMD.Bool32x4")}} {{experimental_inline}}
- {{jsxref("Bool64x2", "SIMD.Bool64x2")}} {{experimental_inline}}

### Datos estructurados

Estos objetos representan e interactúan con los búferes de datos estructurados y los datos codificados utilizando la notación de objetos JavaScript (JSON del inglés **J**ava**S**cript **O**bject **N**otation).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}
- {{jsxref("Atomics")}} {{experimental_inline}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### Objetos de abstracción de control

- {{jsxref("Promise")}}
- {{jsxref("Generator")}}
- {{jsxref("GeneratorFunction")}}
- {{experimental_inline}} {{jsxref("AsyncFunction")}}

### Reflexión

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internacionalización

Adiciones al núcleo de ECMAScript para funcionalidades sensibles al lenguaje.

- {{jsxref("Intl")}}
- {{jsxref("Objetos_globales/Collator", "Intl.Collator")}}
- {{jsxref("Objetos_globales/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Objetos_globales/NumberFormat", "Intl.NumberFormat")}}

### WebAssembly

- {{jsxref("WebAssembly")}}
- {{jsxref("WebAssembly.Module")}}
- {{jsxref("WebAssembly.Instance")}}
- {{jsxref("WebAssembly.Memory")}}
- {{jsxref("WebAssembly.Table")}}
- {{jsxref("WebAssembly.CompileError")}}
- {{jsxref("WebAssembly.LinkError")}}
- {{jsxref("WebAssembly.RuntimeError")}}

### Otro

- {{JSxRef("Functions/arguments", "arguments")}}
