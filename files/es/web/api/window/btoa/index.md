---
title: "Window: método btoa()"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

El método **`btoa()`** de la interfaz {{domxref("Window")}} crea una cadena {{Glossary("ASCII")}} codificada en {{glossary("Base64")}} a partir de una _cadena binaria_ (es decir, una cadena en la que cada carácter se trata como un byte de datos binarios).

Puedes usar este método para codificar datos que, de otro modo, podrían causar problemas de comunicación, transmitirlos y, después, usar el método {{domxref("Window.atob()")}} para volver a decodificarlos. Por ejemplo, puedes codificar caracteres de control, como los valores ASCII del 0 al 31.

Asimismo, si tus datos están en un objeto `Uint8Array`, considera usar el método {{jsxref("Uint8Array.prototype.toBase64()")}} para evitar crear una cadena con bytes sin procesar.

## Sintaxis

```js-nolint
btoa(stringToEncode)
```

### Parámetros

- `stringToEncode`
  - : La _cadena binaria_ que se va a codificar. En JavaScript, las cadenas se codifican como {{glossary("UTF-16")}}, por lo que cada carácter debe tener un punto de código menor que 256, que representa un byte de datos.

### Valor de retorno

Una cadena ASCII que contiene la representación en Base64 de `stringToEncode`.

### Excepciones

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : La cadena contenía un carácter que no cabía en un solo byte. Consulta "Cadenas Unicode" más abajo para ver más detalle.

## Ejemplos

```js
const encodedData = window.btoa("Hello, world"); // codifica una cadena
const decodedData = window.atob(encodedData); // decodifica la cadena
```

### Cadenas Unicode

Base64, por diseño, espera datos binarios como entrada. En cuanto a las cadenas de JavaScript, esto significa cadenas en las que el punto de código de cada carácter ocupa un solo byte. Así, si pasas a `btoa()` una cadena con caracteres que ocupan más de un byte, obtendrás un error, porque no se considera que sean datos binarios:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: ocupa < 1 byte

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: ocupa > 1 byte

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // error
```

Dado que `btoa` interpreta los puntos de código de su cadena de entrada como valores de byte, llamar a `btoa` con una cadena provocará una excepción "Character Out Of Range" si el punto de código de algún carácter supera `0xff`. Para los casos de uso en los que necesites codificar texto Unicode arbitrario, primero debes convertir la cadena a los bytes que la componen en {{glossary("UTF-8")}} y, después, codificar esos bytes.

La solución más sencilla es usar `TextEncoder` y `TextDecoder` para convertir la cadena entre UTF-8 y representaciones de un solo byte:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// Uso
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### Conversión de datos binarios arbitrarios

Las funciones `bytesToBase64` y `base64ToBytes` de la sección anterior se pueden usar directamente para convertir entre cadenas Base64 y [`Uint8Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

Para obtener un mejor rendimiento, la plataforma web permite hacer de forma nativa la conversión asíncrona entre URL de datos en base64 mediante las API [`FileReader`](/es/docs/Web/API/FileReader) y [`fetch`](/es/docs/Web/API/Fetch_API):

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Uso
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

> [!NOTE]
> En los entornos compatibles, considera también los métodos nativos {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} y {{jsxref("Uint8Array.prototype.setFromBase64()")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Un polyfill de `btoa`](https://core-js.io/docs/features/web-standards/atob-btoa) está disponible en [`core-js`](https://core-js.io/)
- [URL `data`](/es/docs/Web/URI/Reference/Schemes/data)
- {{domxref("WorkerGlobalScope.btoa()")}}: el mismo método, pero en ámbitos de worker.
- {{domxref("Window.atob()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- {{Glossary("Base64")}}
