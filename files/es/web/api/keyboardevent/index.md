---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
---

{{APIRef("DOM Events")}}

Los objetos **`KeyboardEvent`** describen una interacción del usuario con el teclado. Cada evento describe una tecla; el tipo de evento(`keydown`, `keypress`, o `keyup`) identifica el tipo de acción realizada.

> **Nota:** El `KeyboardEvent` solo indica qué está pasando en una tecla. Cuando necesite manejar la entrada de texto, use el evento [`input`](/es/docs/DOM/DOM_event_reference/input) de HTML5 en su lugar. Por ejemplo, si el usuario introduce texto desde un sistema de tipo manuscrito como una tableta, los eventos para teclas no podrán ser lanzados.

## Constructor

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Crea un objeto `KeyboardEvent`.

## Métodos

_Esta interfaz también hereda métodos de sus padres, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Devuelve un {{jsxref("Boolean")}} indicando si una tecla modificadora, como <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, <kbd>Meta</kbd>, fue pulsada cuando el evento fue creado.

- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : Inicializa un objeto `KeyboardEvent`. Este método solo ha sido implementado por Gecko (otros usados {{domxref("KeyboardEvent.initKeyboardEvent()")}}) y nunca más será usado. El modo estándar moderno es usar el constructor {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : Inicializa un objeto `KeyboardEvent`. Este método nunca fue implementado por Gecko (quien usa {{domxref("KeyboardEvent.initKeyEvent()")}}) y no debe ser utilizado más. El modo estándar moderno es usar el constructor {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Propiedades

_Esta interfaz también hereda propiedades de sus padres {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : Devuelve un {{jsxref("Boolean")}} que será `true` si la tecla <kbd>Alt</kbd> (<kbd>Option</kbd> or <kbd>⌥</kbd> on OS X) fue activada cuando el evento fue generado.

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline()}}{{Deprecated_inline}}{{Readonlyinline}}

  - : Devuelve un {{domxref("DOMString")}} representando el valor del carácter de la tecla. Si la tecla corresponde con un carácter imprimible, este valor es una cadena Unicode no vacía que contiene este carácter. Si la tecla no tiene una representación imprimible, esta es una cadena vacía.

    > **Nota:** Si la tecla es usada como una macro que inserta múltiples caracteres, If the key is used as a macro that inserts multiple characters, el valor de este atributo es la cadena completa, no solo el primer carácter.

    > **Advertencia:** Esta propiedad ha sido eliminada de los eventos del DOM de nivel 3. Esta es únicamente soportada en IE.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Returns an `unsigned long` representing the Unicode reference number of the key; this attribute is used only by the `keypress` event. For keys whose `char` attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.

    > **Advertencia:** This attribute is deprecated; you should use `key` instead, if available.

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : Returns a {{domxref("DOMString")}} with the code value of the key represented by the event.
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Ctrl</kbd> key was active when the key event was generated.

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Returns a {{domxref("DOMString")}} representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline()}}{{Readonlyinline}}

  - : Returns an `unsigned long` representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

    > **Advertencia:** This attribute is deprecated; you should use `key` instead, if available.

- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Returns a {{domxref("DOMString")}} representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > **Nota:** This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Returns an `unsigned long` representing the location of the key on the keyboard or other input device.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Meta</kbd> (or <kbd>Command</kbd> on OS X) key was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.

- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns an `unsigned long` representing a system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > **Advertencia:** This attribute is deprecated; you should use `key` instead, if available.

## Notes

There are `keydown`, `keypress`, and `keyup` events. For most keys, Gecko dispatches a sequence of key events like this:

1. When the key is first depressed, the `keydown` event is sent.
2. If the key is not a modifier key, the `keypress` event is sent.
3. When the user releases the key, the `keyup` event is sent.

### Special cases

Certain keys toggle the state of an LED indicator, such as Caps Lock, Num Lock, and Scroll Lock. On Windows and Linux, these keys dispatch only the `keydown` and `keyup` events. Note that on Linux, Firefox 12 and earlier also dispatched the `keypress` event for these keys.

On Mac, however, Caps Lock dispatches only the `keydown` event due to a platform event model limitation. Num Lock had been supported on old MacBook (2007 model and older) but Mac hasn't supported Num Lock feature even on external keyboards in these days. On the old MacBook which has Num Lock key, Num Lock doesn't cause any key events. And Gecko supports Scroll Lock key if an external keyboard which has F14 is connected. However, it generates `keypress` event. This inconsistent behavior is a bug; see {{bug(602812)}}.

### Auto-repeat handling

When a key is pressed and held down, it begins to auto-repeat. This results in a sequence of events similar to the following being dispatched:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<repeating until the user releases the key>>
6. `keyup`

This is what the DOM Level 3 specification says should happen. There are some caveats, however, as described below.

#### Auto-repeat on some GTK environments such as Ubuntu 9.4

In some GTK-based environments, auto-repeat dispatches a native key-up event automatically during auto-repeat, and there's no way for Gecko to know the difference between a repeated series of keypresses and an auto-repeat. On those platforms, then, an auto-repeat key will generate the following sequence of events:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<repeating until the user releases the key>>
8. `keyup`

In these environments, unfortunately, there's no way for web content to tell the difference between auto-repeating keys and keys that are just being pressed repeatedly.

#### Auto-repeat handling prior to Gecko 4.0

Before Gecko 4.0, keyboard handling was less consistent across platforms.

- Windows
  - : Auto-repeat behavior is the same as in Gecko 4.0 and later.
- Mac
  - : After the initial keydown event, only keypress events are sent until the keyup event occurs; the inter-spaced keydown events are not sent.
- Linux
  - : The event behavior depends on the specific platform. It will either behave like Windows or Mac depending on what the native event model does.

## Example

```js
<!DOCTYPE html>
<html>
<head>
<script>
var metaChar = false;
var exampleKey = 16;

function keyEvent(event) {
  var key = event.keyCode || event.which;
  var keychar = String.fromCharCode(key);
  if (key == exampleKey) {
    metaChar = true;
  }
  if (key != exampleKey) {
    if (metaChar) {
      alert("Combination of metaKey + " + keychar);
      metaChar = false;
    } else {
      alert("Key pressed " + key);
    }
  }
}

function metaKeyUp (event) {
  var key = event.keyCode || event.which;

  if (key == exampleKey) {
    metaChar = false;
  }
}
</script>
</head>

<body onkeydown="keyEvent(event)" onkeyup="metaKeyUp(event)">
</body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
