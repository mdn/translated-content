---
title: Cadenas binarias
slug: Web/API/btoa
---

{{jsxref("String", "Cadenas JavaScript")}} son cadenas codificadas en UTF-16. Esto significa que cada unidad de código requiere dos bytes de memoria y puede representar `65535` puntos de código diferentes. Un subconjunto de estas cadenas está representado por cadenas UTF-16 que contienen solo caracteres ASCII (es decir, caracteres cuyo punto de código no excede `127`). Por ejemplo, la cadena `"¡Hola mundo!"` pertenece al subconjunto ASCII, mientras que la cadena `"ÀÈÌÒÙ"` no. Una **cadena binaria** es un concepto similar al subconjunto ASCII, pero en lugar de limitar el rango a `127`, permite hasta `255` puntos de código. Sin embargo, su propósito no es representar caracteres, sino datos binarios. El tamaño de los datos así representados es el doble de lo que sería en formato binario normal, sin embargo, esto no será visible para el usuario final, ya que la longitud de las cadenas de JavaScript se calcula usando dos bytes como unidad.

Las cadenas binarias no forman parte del diseño del lenguaje JavaScript. Sin embargo, al menos una función nativa requiere cadenas binarias como entrada, {{domxref("WindowBase64.btoa", "btoa()")}}: invocarla en una cadena que contiene puntos de código mayores de `255` causará un error `Caracter fuera de rango`.

La razón que llevó al uso de unidades de código UTF-16 como marcadores de posición para los números `uint8` es que a medida que las aplicaciones web se vuelven cada vez más poderosas (agregando funciones como manipulación de audio y video, acceso a datos sin procesar usando WebSockets, y así sucesivamente) ha quedado claro que hay ocasiones en las que sería útil que el código JavaScript pudiera manipular rápida y fácilmente datos binarios sin procesar.

En el pasado, esto se tenía que simular tratando los datos sin procesar como [string](/es/docs/JavaScript/Reference/Global_Objects/String) y utilizar el método [`charCodeAt()`](/es/docs/JavaScript/Reference/Global_Objects/String/charCodeAt) para leer los bytes del búfer de datos (es decir, usando cadenas binarias). Sin embargo, esto es lento y propenso a errores, debido a la necesidad de múltiples conversiones (especialmente si los datos binarios en realidad no son datos en formato de bytes, sino, por ejemplo, enteros de 32 bits o flotantes).

Los [arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Typed_arrays) proporcionan un mecanismo para acceder a datos binarios sin procesar mucho más eficientemente. La API de [`StringView`](/es/docs/Web/JavaScript/Typed_arrays/StringView) cuyo constructor no es nativo está un nivel por encima de los arreglos tipados y proporciona una interfaz para cadenas similar a la de [C](<http://en.wikipedia.org/wiki/C_(lenguaje_de_programación)>).

## Ve también

- [Arreglos tipados](/es/docs/Web/JavaScript/Typed_arrays)
- [`DOMString`](/es/docs/Web/API/DOMString)
- [String](/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`StringView`](/es/docs/Web/JavaScript/Typed_arrays/StringView)
