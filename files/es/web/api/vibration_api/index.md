---
title: Vibración API
slug: Web/API/Vibration_API
---

La mayoría de los dispositivos modernos pueden vibrar a través del hardware, esto permite que a través del código de software se pueda emitir estas vibraciones. La **Vibration API** ofrece a las aplicaciones web la capacidad de acceder a este hardware en caso este lo soporte, caso contrario el dispositivo no hace nada.

## Describiendo vibraciones

Vibración se puede describir como un patrón de prender y apagar pulsos, los cuales pueden variar en longitud. El patrón puede consistir de un sólo número que indica cuantos milisegundos vibrará, o un arreglo de enteros describiendo un patrón de vibraciones y pausas. La vibración es controlada por un solo método:

{{domxref("window.navigator.vibrate()")}}.

### Vibración simple

Puedes iniciar una sola vibración del hardware pasando como argumento un sólo número, o un arreglo de un sólo número:

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

Ambos ejemplos hacen vibrar el dispositivo por 200 ms.

### Patrones de vibración

Un arreglo de valores describen que las vibraciones serán por períodos alternados, es decir, el dispositivo vibrará luego no lo hará, así según la secuencia definida. Cada valor en el arreglo es convertido a entero para luego ser interpretado alternadamente como el tiempo que el dispositivo debe vibrar y el tiempo que no debe vibrar. Ejemplo:

```js
window.navigator.vibrate([200, 100, 200]);
```

Según este ejemplo el dispositivo vibrará por 200ms, luego se detiene por 100ms y luego vibra 200ms.

Puedes especificar cuantas vibraciones/pausas desees, y el arreglo puede tener un tamaño par o impar. No importa que agregues una pausa como el último valor del arreglo, ya que el celular dejará de vibrar de todas formas al final de cada vibración.

### Cancelar vibraciones existentes

Llamar {{domxref("window.navigator.vibrate()")}} con un valor de `0`, arreglo vació, o arreglo que contenga 0's detendrá cualquier vibración en curso.

### Vibraciones continuas

Algunas básicas acciones son `setInterval` y `clearInterval` que nos permitirán crear vibraciones persistentes:

```js
var intervaloDeVibrado;

// Iniciar la vibración
function iniciarVibrado(duracion) {
  navigator.vibrate(duracion);
}

// Detiene la vibración
function detenerVibrado() {
  // Limpiar el intervalo y detener las vibraciones existentes
  if (intervaloDeVibrado) clearInterval(intervaloDeVibrado);
  navigator.vibrate(0);
}

// Iniciar las vibraciones con una determinado tiempo e intervalo
// Asumir que el valor recibido es un entero
function iniciarVibradoPersistente(duracion, intervalo) {
  intervaloDeVibrado = setInterval(function () {
    iniciarVibrado(duracion);
  }, intervalo);
}
```

Claro que el código de arriba no toma en cuenta el método de utilizar un arreglo de vibración, utilizar un arreglo para vibración persistente necesitaría recalcular la suma de los elementos del arregloo y crear un intervalo basado en esos números (agregando adicionalmente las pausas)

### ¿Por qué utilizar Vibration API?

Esta API es claramente accesible a través de dispositivos móbiles. Vibration API puede servir para alertas en las aplicaciones web del celular, y sería es asombrosa cuando se utiliza en juegos o en aplicaciones pesadas. Imagínate mirando un video en tu celular y durante la escena de explosión,tu teléfono vibra un poco. O la sensación que tendría tu usuario al sentir el estallido de una bomba en el juego Bomberman.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- {{domxref("window.navigator.vibrate()")}}
- [Vibration API - David Walsh](http://davidwalsh.name/vibration-api)
