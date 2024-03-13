---
title: "Element: evento keyup"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

El evento **`keyup`** se activa cuando se suelta una tecla.

Los eventos [`keydown`](/es/docs/Web/API/Element/keydown_event) y `keyup` brindan un código que indica qué tecla se presiona, mientras que `keypress` indica qué carácter se ingresó. Por ejemplo, una "a" minúscula será reportada como 65 por `keydown` y `keyup`, pero como 97 por `keypress`. Todos los eventos notifican una "A" mayúscula como 65.

Los eventos de teclado solo son generados por `<input>`, `<textarea>`, `<summary>` y cualquier cosa con el atributo `contentEditable` o `tabindex`.

Desde Firefox 65, los eventos `keyup` y [`keydown`](/es/docs/Web/API/Element/keydown_event) ahora se activan durante la composición del IME, para mejorar la compatibilidad entre navegadores para los usuarios de CJKT ([error 354358, en Firefox](https://bugzil.la/354358). Para ignorar todos los eventos `keyup` que forman parte de la composición, haga algo como esto (229 es un valor especial establecido para un `keyCode` relacionado con un evento que ha sido procesado por un editor de método de entrada ([IME](https://www.w3.org/TR/ime-api/#IME))):

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // hacer algo
});
```

## Sintaxis

Utilice el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("keyup", (event) => {});

onkeyup = (event) => {};
```

## Tipo de evento

{{domxref("KeyboardEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("KeyboardEvent")}}

## Propiedades del evento

_Esta interfaz también hereda propiedades de sus padres, {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Devuelve un valor booleano que es `true` si la tecla <kbd>Alt</kbd> (<kbd>Option</kbd> o <kbd>⌥</kbd> en macOS) estaba activa cuando se generó el evento.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Devuelve una cadena con el valor del código de la clave física representada por el evento.

    > **Advertencia:** Esto ignora el diseño del teclado del usuario, de modo que si el usuario presiona la tecla en la posición "Y" en un diseño de teclado QWERTY (cerca del medio de la fila sobre la fila de inicio), esto siempre devolverá "KeyY", incluso si el el usuario tiene un teclado QWERTZ (lo que significaría que el usuario espera una "Z" y todas las demás propiedades indicarían una "Z") o un diseño de teclado Dvorak (donde el usuario esperaría una "F"). Si desea mostrar las pulsaciones de teclas correctas al usuario, puede usar {{domxref("Keyboard.getLayoutMap()")}}.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Devuelve un valor booleano que es `true` si la tecla <kbd>Ctrl</kbd> estaba activa cuando se generó el evento.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Devuelve un valor booleano que es `true` si el evento se activa después de `compositionstart` y antes de `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que representa el valor clave de la tecla representada por el evento.
- {{domxref("KeyboardEvent.locale")}} {{ReadOnlyInline}}

  - : Devuelve una cadena que representa una cadena de configuración regional que indica la configuración regional para la que está configurado el teclado. Esta puede ser la cadena vacía si el navegador o el dispositivo no conocen la configuración regional del teclado.

    > **Nota:** Esto no describe la configuración regional de los datos que se ingresan. Un usuario puede estar usando un diseño de teclado mientras escribe texto en un idioma diferente.

- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Devuelve un número que representa la ubicación de la tecla en el teclado u otro dispositivo de entrada. Una lista de las constantes que identifican las ubicaciones se muestra en [Ubicaciones del teclado](/es/docs/Web/API/KeyboardEvent#keyboard_locations).
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Devuelve un valor booleano que es `true` si la tecla <kbd>Meta</kbd> (en teclados Mac, la tecla <kbd>⌘ Command</kbd>; en teclados Windows, la tecla Windows (<kbd>⊞</kbd>)) estaba activo cuando se generó el evento.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Devuelve un valor booleano que es `true` si la tecla se mantiene presionada de manera que se repite automáticamente.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Devuelve un valor booleano que es `true` si la tecla <kbd>Shift</kbd> estaba activa cuando se generó el evento.

## Ejemplos

### Ejemplo de keyup con addEventListener

Este ejemplo registra el valor {{domxref("KeyboardEvent.code")}} cada vez que suelta una tecla dentro del elemento {{HtmlElement("input")}}.

```html
<input
  placeholder="Haga clic aquí, luego presione y suelte una tecla."
  size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("Ejemplo_de_keyup_con_addEventListener")}}

### Equivalente onkeyup

```js
input.onkeyup = logKey;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`input`](/es/docs/Web/API/HTMLElement/input_event)
- [`keydown`](/es/docs/Web/API/Element/keydown_event)
- [`keypress`](/es/docs/Web/API/Element/keypress_event)
