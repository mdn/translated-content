---
title: keydown
slug: Web/API/Element/keydown_event
original_slug: Web/API/Document/keydown_event
---

{{ APIRef }}

El evento `keydown` se produce cuando se presiona una tecla.

A diferencia del evento [`keypress`](/es/docs/Web/Events/keypress), el evento `keydown` es producido por todas las teclas, independientemente de si estas son caracteres o no.

## Información general

- Especificación
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-keydown)
- Interfaz
  - : [KeyboardEvent](/es/docs/DOM/KeyboardEvent)
- Burbuja
  - : Si
- Cancelable
  - : Si
- Objetivo
  - : Document, Element
- Acción
  - : Varía: evento `keypress`; lanza el sistema de composición de texto; eventos `blur` y `focus`; `DOMActivate` evento; otro evento

## Propiedades

- `target` - EventTarget {{readonlyInline}}
  - : The event target (the topmost target in the DOM tree).
- `type` - DOMString {{readonlyInline}}
  - : The type of event.
- `bubbles` - Boolean {{readonlyInline}}
  - : Whether the event normally bubbles or not
- `cancelable` - Boolean {{readonlyInline}}
  - : Whether the event is cancellable or not?
- `view` - WindowProxy {{readonlyInline}}
  - : In browsers, [`document.defaultView`](/es/docs/Web/API/Document/defaultView) returns the window object associated with a document, or null if none is available. (`window` of the document)
- `detail` - `long` (`float`) {{readonlyInline}}
  - : 0.
- `target` - EventTarget (DOM element) {{readonlyInline}}
  - : Focused element processing the key event, root element if no suitable input element focused.
- `char` - DOMString (string) {{readonlyInline}}
  - : The character value of the key. If the key corresponds to a printable character, this value is a non-empty Unicode string containing that character. If the key doesn't have a printable representation, this is an empty string. See [key names and char values](/es/docs/Web/API/KeyboardEvent#Key_names_and_Char_values) for the detail.

    > **Nota:** If the key is used as a macro that inserts   multiple characters, this attribute's value is the entire string, not   just the first character.
- `key` - DOMString (string) {{readonlyInline}}
  - : The key value of the key represented by the event. If the value has a printed representation, this attribute's value is the same as the `char` attribute. Otherwise, it's one of the key value strings specified in [Key values](#key_values). If the key can't be identified, this is the string "Unidentified". See [key names and char values](/es/docs/Web/API/KeyboardEvent#Key_names_and_Char_values) for the detail. Read Only.
- `charCode` - Unsigned long (int) {{readonlyInline}}
  - : The Unicode reference number of the key; this attribute is used only by the [`keypress`](/es/docs/Mozilla_event_reference/keypress) event. For keys whose `char` attribute contains multiple characters, this is the Unicode value of the first character in that attribute.

    > **Advertencia:** This attribute is deprecated; you should use   `char` instead, if available.
- `keyCode` - Unsigned long (int) {{readonlyInline}}
  - : A system and implementation dependent numerical code identifying the unmodified value of the pressed key. This is usually the decimal ASCII ({{ RFC(20) }}) or Windows 1252 code corresponding to the key; see [Virtual key codes](#virtual_key_codes) for a list of common values. If the key can't be identified, this value is 0.

    > **Advertencia:** This attribute is deprecated; you should use   `key` instead, if available.
- `which` - Unsigned long (int) {{readonlyInline}}
  - : A system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > **Advertencia:** This attribute is deprecated; you should use   `key` instead, if available.
- `location` - long (float) {{readonlyInline}}
  - : The location of the device.
- `repeat` - boolean {{readonlyInline}}
  - : `true` if a key has been depressed long enough to trigger key repetition, otherwise `false`.
- `locale` - string {{readonlyInline}}
  - : The language code for the key event, if available; otherwise, the empty string.
- `ctrlKey` - boolean {{readonlyInline}}
  - : `true` if the control key was down when the event was fired. `false` otherwise.
- `shiftKey` - boolean {{readonlyInline}}
  - : `true` if the shift key was down when the event was fired. `false` otherwise.
- `altKey` - boolean {{readonlyInline}}
  - : `true` if the alt key was down when the event was fired. `false` otherwise.
- `metaKey` - boolean {{readonlyInline}}
  - : `true` if the meta key was down when the event was fired. `false` otherwise.

## `preventDefault()` del evento `keydown`

Empezando desde Gecko 25, una llamada a `preventDefault()` del evento `keydown` impide la emisión del consiguiente evento `keypress`. Este es un comportamiento válido para la especificación D3E y otros navegadores importantes que se comportan de esta misma forma. Por otro lado, Gecko 24 y anteriores emiten el evento `keypress` aunque se haya llamado a `preventDefault()` del evento `keydown` predecesor. Aunque el atributo `defaultPrevented` del evento `keypress` sea `true` en este caso.

## Eventos relacionados

- [`keydown`](/es/docs/Web/Reference/Events/keydown)
- [`keyup`](/es/docs/Web/Reference/Events/keyup)
- [`keypress`](/es/docs/Web/Reference/Events/keypress)
- [`input`](/es/docs/Web/Reference/Events/input)

## Ejemplo

```html
<!DOCTYPE html>
<html>
<head>
<script>

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

</script>
</head>
<body>
</body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
