---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 8e832fce3360267f296722dfd6dd87d1c547b1bf
---

**Base64** es un conjunto de esquemas de [codificación de binario a texto](https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_binario_a_texto) similares entre sí que representan datos binarios en formato de cadena {{glossary("ASCII")}} transformándolos en una representación de base 64. El término _Base64_ proviene de una [codificación de transferencia de contenido MIME](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding) específica.

Los esquemas de codificación Base64 se usan con frecuencia para codificar datos binarios que se van a almacenar o transferir a través de medios que solo pueden tratar texto ASCII (o algún superconjunto de ASCII que, aun así, no admite datos binarios arbitrarios). Esto garantiza que los datos permanezcan intactos y sin modificaciones durante el transporte. Entre las aplicaciones más comunes de Base64 están:

- Correo electrónico mediante [MIME](https://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions)
- Almacenamiento de datos complejos en [XML](/es/docs/Web/XML)
- Codificación de datos binarios para poder incluirlos en una [URL `data:`](/es/docs/Web/URI/Reference/Schemes/data)

## Caracteres de Base64

Cuando el término "Base64" se usa por sí solo para referirse a un {{glossary("algorithm", "algoritmo")}} concreto, generalmente hace referencia a la versión de Base64 descrita en el {{rfc("4648", "", 4)}}, que utiliza el siguiente alfabeto para representar los dígitos radix-64, junto con `=` como carácter de relleno:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## Base64 apto para URL y nombres de archivo

Una variante habitual de esta definición permite únicamente caracteres aptos para nombres de archivo y para valores de {{glossary("URL")}}.
Esta versión, definida en {{rfc("4648", "", 5)}}, omite el relleno y sustituye `+` y `/` por `-` y `_`.

No necesitas esta codificación si no vas a incluir los datos en un segmento de ruta o en un parámetro de consulta; por ejemplo, las [URL de datos](/es/docs/Web/URI/Reference/Schemes/data) no tienen ninguno de los dos y pueden usar la codificación Base64 estándar.

## Aumento del tamaño tras la codificación

Cada dígito Base64 representa 6 bits de datos (64 = 2<sup>6</sup>). Por tanto, tres bytes de 8 bits de la cadena o el archivo binario de entrada (3×8 bits = 24 bits) se pueden representar con cuatro dígitos Base64 de 6 bits (4×6 = 24 bits).

Esto significa que la versión en Base64 de una cadena o un archivo suele ocupar aproximadamente un tercio más que el original (el aumento exacto de tamaño depende de varios factores, como la longitud absoluta de la cadena, su longitud módulo 3 y si se usan caracteres de relleno).

## Último fragmento

La cadena base64 se puede dividir en fragmentos de 4 caracteres, aunque el último fragmento puede tener menos de 4 caracteres. Es posible rellenar el último fragmento con caracteres `=` para que tenga exactamente 4 caracteres de longitud. Sin contar los caracteres de relleno, el último fragmento puede ser uno de los siguientes:

- 2 caracteres: codifican 12 bits que representan 1 byte (8 bits) de datos
- 3 caracteres: codifican 18 bits que representan 2 bytes (16 bits) de datos
- 4 caracteres: codifican 24 bits que representan 3 bytes (24 bits) de datos

En los dos primeros casos, los caracteres pueden tener 4 o 2 bits finales adicionales que no representan ningún dato. En esa situación, según [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5), los codificadores deben poner esos bits a cero y los decodificadores pueden optar por lanzar un error si dichos bits no son cero. Por ejemplo, si los datos codificados son un único byte `0b01010101`, hacen falta dos caracteres: `0b010101` (`V`) y `0b010000` (`Q`), donde el segundo tiene 4 bits finales establecidos en cero. Decodificar `VR==` (donde el segundo carácter representa `0b010001`) produce, técnicamente, el mismo byte `0b01010101`, pero el decodificador puede lanzar un error porque los bits finales no son cero.

## Compatibilidad con JavaScript

La clase {{jsxref("Uint8Array")}} proporciona los métodos {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} y {{jsxref("Uint8Array.prototype.setFromBase64()")}} para convertir desde y hacia cadenas base64.

Los navegadores también ofrecen de forma nativa dos funciones de JavaScript para decodificar y codificar cadenas Base64:

- {{domxref("Window.btoa()")}} (también {{domxref("WorkerGlobalScope.btoa()", "disponible en workers", "", "nocode")}}): crea una cadena ASCII codificada en Base64 a partir de una cadena de datos binarios ("btoa" se debe leer como "binary to ASCII").
- {{domxref("Window.atob()")}} (también {{domxref("WorkerGlobalScope.atob()", "disponible en workers", "", "nocode")}}): decodifica una cadena codificada en Base64 ("atob" se debe leer como "ASCII to binary").

> [!NOTE]
> Base64 es una codificación binaria, no de texto, pero `btoa` y `atob` se añadieron a la plataforma web antes de que esta admitiera tipos de datos binarios. Por eso, ambas funciones usan cadenas para representar datos binarios, de modo que el {{glossary("code point", "punto de código")}} de cada carácter representa el valor de cada byte. Esto ha dado lugar a la idea errónea, muy extendida, de que `btoa` puede utilizarse para codificar cualquier dato de texto; por ejemplo, para crear una URL `data:` en Base64 de un documento de texto o HTML.
>
> Sin embargo, la correspondencia entre byte y punto de código solo se cumple de forma fiable para los puntos de código hasta `0x7f`. Además, los puntos de código superiores a `0xff` hacen que `btoa` lance un error, porque superan el valor máximo de 1 byte. La sección "[Cadenas Unicode](/es/docs/Web/API/Window/btoa#unicode_strings)" de {{domxref("Window.btoa()")}} explica cómo sortear esta limitación al codificar texto Unicode arbitrario.

## Véase también

- API de JavaScript:
  - {{domxref("Window.atob()")}} (también {{domxref("WorkerGlobalScope.atob()", "disponible en workers", "", "nocode")}})
  - {{domxref("Window.btoa()")}} (también {{domxref("WorkerGlobalScope.btoa()", "disponible en workers", "", "nocode")}})
  - {{jsxref("Uint8Array")}}
- [Datos URIs](/es/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://es.wikipedia.org/wiki/Base64) en Wikipedia
- Algoritmo Base64 descrito en [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
