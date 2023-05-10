---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
---

{{APIRef("DOM Events")}}

`Objetos do tipo KeyboardEvent` descrevem a interação do usuário com o teclado. Cada evento descreve uma tecla; o tipo de evento (`keydown`, `keypress`, ou `keyup`) identifica qual tipo de ação foi executada.

> **Nota:** O `KeyboardEvent` indica o que está havendo com a tecla. Quando você precisar lidar com entrada de texto, use o evento `input` do HTML5. Por exemplo, se o usuário envia texto por meio de um sistema manuscrito como um tablet PC, eventos das teclas podem não ser disparados.

## Construtor

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Cria um objeto do tipo `KeyboardEvent`.

## Métodos

_Essa interface também herda métodos dos seus pais, {{domxref("UIEvent")}} e {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Retorna um {{jsxref("Boolean")}} indicando se uma tecla, como

    <kbd>Alt</kbd>

    ,

    <kbd>Shift</kbd>

    ,

    <kbd>Ctrl</kbd>

    , ou

    <kbd>Meta</kbd>

    , foi pressionada quando o evento foi criado.

- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : Inicializa um objeto do tipo `KeyboardEvent` . isso foi apenas implementado por Gecko (outros usaram {{domxref("KeyboardEvent.initKeyboardEvent()")}}) e não deve mais ser usado. A forma moderna padrão é usar o construtor {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : Inicializa um objeto do tipo `KeyboardEvent` . Isso nunca foi implementado por Gecko (que usou {{domxref("KeyboardEvent.initKeyEvent()")}}) e não deve mais ser usado. A forma moderna padrão é usar o construtor {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Propriedades

_Essa interface também herda métodos dos seus pais, {{domxref("UIEvent")}} e {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : Retorna um {{jsxref("Boolean")}} que é `true` se a tecla

    <kbd>Alt</kbd>

    (

    <kbd>Option</kbd>

    ou

    <kbd>⌥</kbd>

    no OS X) estava ativa quando o evento foi acionado.

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : Retorna um {{domxref("DOMString")}} representando o valor da tecla em caractere. Se a tecla corresponde a um caractere exibível, esse valor é uma string Unicode não-vazia contendo aquele caractere. Se a tecla não possui uma representação exibível, ela é uma string vazia.

    > **Nota:** Se a tecla é usada como um macro que insere caracteres múltiplos, o valor desse atributo é a string inteira, não apenas o primeiro caractere.

    > **Aviso:** Isso foi removido dos Eventos DOM de nível 3. Isso é apenas suportado no IE.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing the Unicode reference number of the key; this attribute is used only by the `keypress` event. For keys whose `char` attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.

    > **Aviso:** Este atributo esta depreciado; você deve usar `key` no lugar, se disponivel.

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : Returns a {{domxref("DOMString")}} with the code value of the key represented by the event.
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the

    <kbd>Ctrl</kbd>

    key was active when the key event was generated.

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Returns a {{domxref("DOMString")}} representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

    > **Aviso:** Este atributo esta depreciado; você deve usar `key` no lugar, se disponivel.

- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Returns a {{domxref("DOMString")}} representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > **Nota:** This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Number")}} representing the location of the key on the keyboard or other input device.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the

    <kbd>Meta</kbd>

    (or

    <kbd>Command</kbd>

    on OS X) key was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the

    <kbd>Shift</kbd>

    key was active when the key event was generated.

- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > **Aviso:** Este atributo esta depreciado; você deve usar `key` no lugar, se disponivel.

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
3. <\<repeating until the user releases the key>>
4. `keyup`

This is what the DOM Level 3 specification says should happen. There are some caveats, however, as described below.

#### Auto-repeat on some GTK environments such as Ubuntu 9.4

In some GTK-based environments, auto-repeat dispatches a native key-up event automatically during auto-repeat, and there's no way for Gecko to know the difference between a repeated series of keypresses and an auto-repeat. On those platforms, then, an auto-repeat key will generate the following sequence of events:

1. `keydown`
2. `keypress`
3. <\<repeating until the user releases the key>>
4. `keyup`

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

## Specifications

| Specification                                                                                    | Status                           | Comment             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM3 Events', '#interface-KeyboardEvent', 'KeyboardEvent')}} | {{Spec2('DOM3 Events')}} | Initial definition. |

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser compatibility

{{Compat("api.KeyboardEvent")}}
