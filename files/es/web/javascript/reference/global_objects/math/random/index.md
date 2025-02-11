---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef}}

La función **`Math.random()`** devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados.
La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario.

{{InteractiveExample("JavaScript Demo: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```

> **Nota:** `Math.random()` no proporciona números aleatorios criptográficamente seguros, por lo que no debe ser usado para cualquier cosa relacionada con seguridad.
> En su lugar, puede hacer uso de la API web _Crypto_. Concretamente, puede utilizar el método {{domxref("Crypto.getRandomValues", "window.crypto.getRandomValues()")}}.

## Sintaxis

```js
Math.random();
```

### Valor de retorno

Un número de coma flotante pseudo-aleatorio entre los números 0 (incluido) y 1 (excluido).

## Ejemplos

Tenga en cuenta que los números de coma flotante en JavaScript cumplen con la norma IEEE 754. Debido a esto, dichos números tienen un comportamiento de redondeo al evento más cercano. Es por eso que en las funciones descritas en los siguientes ejemplos (excluyendo a la propia `Math.random()` ) los rangos declarados no son exactos. Si se eligen límites extremadamente grandes (2^53 o superiores), es posible, en casos extremadamente raros, calcular el "habitualmente excluido" límite superior.

### Obtener un número aleatorio entre 0 (incluido) y 1 (excluido)

```js
function getRandom() {
  return Math.random();
}
```

### Obtener un número aleatorio entre dos valores determinados

Este ejemplo devuelve un número aleatorio situado entre dos valores específicos. El valor devuelto será mayor o igual que `min` y menor que `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Obtener un número entero entre dos valores determinados

Este ejemplo devuelve un número aleatorio situado entre los valores especificados. El valor devuelto no será más bajo que `min` (o el siguiente entero más alto, en caso de que _min_ no sea un número entero), y será menor (pero no igual) que `max` .

```js
// Notesé que también en este caso `min` será incluido y `max` excluido
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
```

> [!NOTE]
> Puede ser tentador utilizar `Math.round()` para conseguir lo mismo, pero al hacerlo, los números aleatorios devueltos no seguirán una distribución uniforme. Esto podría no ser aceptable para sus necesidades.

### Obtener un número entero aleatorio entre dos valores (incluyendo ambos)

La función `getRandomInt()` descrita anteriormente incluye el valor mínimo, pero excluye al máximo. ¿Y si necesitamos que el resultado incluya tanto al mínimo como al máximo? La siguiente función `getRandomIntInclusive()` lo consigue.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Crypto.getRandomValues", "window.crypto.getRandomValues()")}}
