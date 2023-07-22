---
title: GamepadButton
slug: Web/API/GamepadButton
---

{{APIRef("Gamepad API")}}

La interfaz **`GamepadButton`** define un botón individual de un gamepad u otro control, dando acceso al estado actual de diferentes tipos de botones disponibles en el dispositivo de control.

Un objeto `GamepadButton` se devuelve al solicitar cualquier valor del array devuelto por la propiedad `buttons` de la interfaz {{domxref("Gamepad")}}.

> **Nota:** Este es el caso en Firefox Gecko 28 en adelante; Chrome y versiones anteriores de Firefox continúan devolviendo un array de valores dobles cuando se accede a esta propiedad.

## Propiedades

- {{domxref("GamepadButton.value")}} {{readonlyInline}}
  - : Un valor doble usado para representar el estado actual de botones análogos, así como los gatillos de muchos gamepads modernos. Los valores se normalizan al rango 0.0 —1.0, donde 0.0 representa un botón que no está presionado, y 1.0 representa un botón que está completamente presionado.
- {{domxref("GamepadButton.pressed")}} {{readonlyInline}}
  - : Un valor {{domxref("Boolean")}} que indica el estado el botón, ya sea que actualmente se encuentre presionado (`true`) o sin presionar (`false`).

## Ejemplo

El siguiente código se toma de mi demostración del botón del API de Gamepad (puedes [ver el demo en vivo](http://chrisdavidmills.github.io/gamepad-buttons/), y [encontrar el código fuente](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) en Github.) Nota que el código — en Chrome {{domxref("Navigator.getGamepads")}} necesita un prefijo `webkit` y los valores del botón serán guardados como un array de valores dobles, mientras qe en Firefox {{domxref("Navigator.getGamepads")}} no se necesita un prefijo, y los valores de los botones se guardan como un array de objetos {{domxref("GamepadButton")}}; estas son las propiedades {{domxref("GamepadButton.value")}} o {{domxref("GamepadButton.pressed")}} a las que necesitamos acceder, dependiendo de qué tipo de botones haya. En este simple ejemplo yo solo he permitido estos.

```js
function gameLoop() {
  if (navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] == 1) {
      b--;
    } else if (gp.buttons[1] == 1) {
      a++;
    } else if (gp.buttons[2] == 1) {
      b++;
    } else if (gp.buttons[3] == 1) {
      a--;
    }
  } else {
    var gp = navigator.getGamepads()[0];

    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
      b--;
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
      a++;
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
      b++;
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
      a--;
    }
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  var start = rAF(gameLoop);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Recomendado

[Usando la API de Gamepad](/es/docs/Web/Guide/API/Gamepad)
