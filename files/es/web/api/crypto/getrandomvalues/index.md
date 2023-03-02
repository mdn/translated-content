---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
original_slug: Web/API/RandomSource/Obtenervaloresaleatorios
---

{{APIRef("Web Crypto API")}}

El método **`Crypto.getRandomValues()`** permite obtener valores aleatorios criptográficamente fuertes. El array que se pasa como parámetro se rellena con números aleatorios (entiéndase aleatorios en el sentido criptográfico).

Con el fin de garantizar un rendimiento razonable, las distintas implementaciones no utilizan un generador de numeros aleatorios puro, sino que utilizan un generador numérico pseudo-aleatorio, sembrado con un valor con suficiente entropía. Los generadores numéricos pseudo-aleatorios utilizados difieren entre {{Glossary("user agent", "user agents")}}, pero son adecuados para usos criptográficos. Se require también que las distintas implementaciones usen una semilla con suficiente entropía, como una fuente de entropía a nivel de sistema.

## Sintaxis

```
cryptoObj.getRandomValues(typedArray);
```

### Parámetros

- _typedArray_
  - : Es un entero {{jsxref("TypedArray")}}, que puede ser un {{jsxref("Int8Array")}}, un {{jsxref("Uint8Array")}}, un {{jsxref("Int16Array")}}, un {{jsxref("Uint16Array")}}, un {{jsxref("Int32Array")}}, o un {{jsxref("Uint32Array")}}. Todos los elementos dentro del array seran sobreescritos con números aleatorios.

### Excepciones

- Una [QuotaExceededError](/es/docs/Web/API/DOMException#quotaexceedederror) {{domxref("DOMException")}} es lanzada si la longitud solicitada es mayor a 65536 bytes.

## Ejemplo

```js
/* Asumiendo que window.crypto.getRandomValues está disponible */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Tus numeros de la suerte:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ domxref("Window.crypto") }} para obtener un objeto tipo {{domxref("Crypto")}}.
- {{jsxref("Math.random")}}, una fuente no criptográfica de números aleatorios.
