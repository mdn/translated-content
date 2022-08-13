---
title: KeyboardEvent.keyCode
slug: Web/API/KeyboardEvent/keyCode
translation_of: Web/API/KeyboardEvent/keyCode
---
{{APIRef("DOM Events")}}{{deprecated_header()}}

Die schreibgeschütze Eigenschaft **`KeyboardEvent.keyCode` **stellt den den unveränderten, System- und Implementationsabhängigen numerischen Bezeichner der gedrückten Taste dar. Normalerweise ist das der zugehörige ASCII {{RFC(20)}}) oder Windows 1252 Code der Taste. Bei einer unerkannten Taste ist das der Wert `0`.

Der Wert des `keypress` Ereignis unterscheided sich von Browser zu Browser. IE und Google Chrome setzen den {{domxref("KeyboardEvent.charCode")}} Wert. Gecko setzt `0` wenn die gedrückte Taste ein druckbares Zeichen darstellt, andernfalls ist es der selbe Wert wie beim `keydown` und `keyup` Ereignis.

Von der Verwendung dieser Eigenschaft sollte nach Möglichkeit abgesehen werden, da siebereits seit einiger Zeit veraltet ist. Statdessen sollte {domxref("KeyboardEvent.code")}} verwendet werden, so es implementiert ist. Leider gibt es noch immer einige Browser ohne Unterstützung dafür. Google und Safari implementieren {{domxref("KeyboardEvent.keyIdentifier")}}, der bisher in der Entwurfs-Spezifikation enthalten ist, nicht jedoch in der finalen Version.

> **Note:** Entwickler sollten von der Verwendung von `keyCode` Eigenschaft für druckbare Zeichen bei `keydown` und `keyup` Ereignissen absehen. Wie zuvor beschrieben , ist die `keyCode` Eigenschaft für druckbare Zeichen nicht zu gebrauchen, vor allem wenn <kbd>Shift</kbd> oder <kbd>Alt</kbd> dabei gedrückt sind. Bei der Implementation von Kürzeln, ist das {{event("keypress")}} Ereignis meist eher angebracht (zumindest bei der Verwendung der Gecko Engine). Näheres siehe [Gecko Keypress Event](/de/docs/Gecko_Keypress_Event "en-US/docs/Gecko_Keypress_Event") .

## Beispiel

```js
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }

  var handled = false;
  if (event.key !== undefined) {
    // Handle the event with KeyboardEvent.key and set handled true.
  } else if (event.keyIdentifier !== undefined) {
    // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
  } else if (event.keyCode !== undefined) {
    // Handle the event with KeyboardEvent.keyCode and set handled true.
  }

  if (handled) {
    // Suppress "double action" if event handled
    event.preventDefault();
  }
}, true);
```

## Specifications

| Specification                                                                                                | Status                           | Comment                                          |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------ |
| {{SpecName('DOM3 Events','#widl-KeyboardEvent-keyCode','KeyboardEvent.keyCode')}} | {{Spec2('DOM3 Events')}} | Initiale Definition; als veraltet gekennzeichnet |

## Browser Kompatibilität

{{Compat("api.KeyboardEvent.keyCode")}}

## Werte von keyCode

### druckbare Tasten in der Standard-Position

The value of key events which are caused by pressing or releasing printable keys in standard position is not compatible between browsers.

IE just exposes the native virtual keycode value as `KeyboardEvent.keyCode`.

Google Chrome, Chromium and Safari must decide the value from the input character. If the inputting character can be inputted with the US keyboard layout, they use the `keyCode` value on the US keyboard layout.

Starting in Firefox 15 {{geckoRelease("15.0")}}, Gecko gets `keyCode` values from ASCII characters inputtable by the key — even with shift modifiers or an ASCII capable keyboard layout. See the following rules for details:

1. If the system is Windows and the native keycode of the pressed key indicates that the key is a-z or 0-9, use a keycode for it.
2. If the system is Mac and the native keycode of the pressed key indicates that the key is 0-9, use a keycode for it.
3. If the pressed key inputs an ASCII alphabetic or numeric character with no modifier key, use a keycode for it.
4. If the pressed key inputs an ASCII alphabetic or numeric character with a Shift key modifier, use a keycode for it.
5. If the pressed key inputs a different ASCII character with no modifier key, use a keycode for it.
6. If the pressed key inputs a different ASCII character with a Shift key modifier, use a keycode for it.
7. Otherwise, i.e., pressed key inputs a unicode character:

    1. If the keyboard layout is ASCII-capable (i.e., can input ASCII alphabets), use 0 or compute with [the following additional rules](#keyCode_of_punctuation_keys_on_some_keyboard_layout).
    2. Otherwise, i.e., the keyboard layout isn't ASCII capable, use the ASCII capable keyboard layout installed on the environment with the highest priority:

        1. If the pressed key on the alternative keyboard layout inputs an ASCII alphabetic or numeric character, use a keycode for it.
        2. Otherwise, use 0 or compute with [the following additional rules](#keyCode_of_punctuation_keys_on_some_keyboard_layout).

Starting in Firefox 60 {{geckoRelease("60.0")}}, Gecko sets `keyCode` values of punctuation keys as far as possible (when points 7.1 or 7.2 in the above list are reached) with the following rules:

> **Warning:** The purpose of these new additional rules is for making users whose keyboard layouts map unicode characters to punctuation keys in a US keyboard layout can use web applications which support Firefox only with ASCII-capable keyboard layouts or just with a US keyboard layout. Otherwise, the newly mapped `keyCode` values may be conflict with other keys. For example, if the active keyboard layout is Russian, the `keyCode` value of **both** the `"Period"` key and `"Slash"` key are `190` (`KeyEvent.DOM_VK_PERIOD`). If you need to distinguish those keys but you don't want to support all keyboard layouts in the world by yourself, you should probably use {{domxref("KeyboardEvent.code")}}.

1. If running macOS or Linux:

    1. If the active keyboard layout is not ASCII-capable and an alternative ASCII-capable keyboard layout is available.

        1. If the alternative ASCII-capable keyboard layout produces an ASCII character via just the unmodified key, use a `keyCode` for the character.
        2. If the alternative ASCII-capable keyboard layout produces an ASCII character with a Shift key modifier, use a `keyCode` for the shifted character.
        3. Otherwise, use a `keyCode` for an ASCII character produced by the key when the US keyboard layout is active.

    2. Otherwise, use a `keyCode` for an ASCII character produced by the key when the US keyboard layout is active.

2. If running on Windows:

    1. Use a `keyCode` value for an ASCII character produced by a key which is mapped to the same virtual keycode of Windows when the US keyboard layout is active.

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by printable keys in
    standard position
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Digit1"</code></th>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit2"</code></th>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit3"</code></th>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit4"</code></th>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit5"</code></th>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit6"</code></th>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit7"</code></th>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit8"</code></th>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit9"</code></th>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit0"</code></th>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyA"</code></th>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyB"</code></th>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyC"</code></th>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyD"</code></th>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyE"</code></th>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyF"</code></th>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyG"</code></th>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyH"</code></th>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyI"</code></th>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyJ"</code></th>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyK"</code></th>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyL"</code></th>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyM"</code></th>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyN"</code></th>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyO"</code></th>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyP"</code></th>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyQ"</code></th>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyR"</code></th>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyS"</code></th>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyT"</code></th>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyU"</code></th>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyV"</code></th>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyW"</code></th>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyX"</code></th>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyY"</code></th>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyZ"</code></th>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by printable keys in
    standard position (punctuations in US layout):
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Comma"</code></th>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Comma"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code></th>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code></th>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *2</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *3</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *2</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187) </code>*1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code> *1
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code></th>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code> with Shift</th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xDE (222)</code> *1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0x38 (56)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xDE (222)</code> *1
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code></th>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xC0(192)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xC0(192)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> *1</td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x32 (50)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219) *1</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xC0 (192)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code></th>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code></th>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xF4 (244)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code></th>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code></th>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> *1</td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="1"><code>0xBD (189)</code></td>
      <td rowspan="1"><code>0xBD (189) *1</code></td>
      <td rowspan="1"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173) *1</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code> *1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code>
      </td>
      <td><code>0xBD (189)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187) *1</code>
      </td>
      <td><code>0xBD (189)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code></th>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDE (222)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDE (222)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187) *1</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x36 (54)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="1"><code>0xBB (187)</code></td>
      <td rowspan="1"><code>0xBB (187) *1</code></td>
      <td rowspan="1"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192)</code>
      </td>
      <td><code>0xBB (187)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td><code>0xBB (187)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code></th>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE2 (226)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE2 (226)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code><br />
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 </code>(229) *5
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xA7 (167)</code></td>
      <td colspan="1" rowspan="2"><code>0xA7 (167)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code></th>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td><code>0x00 (0)</code></td>
      <td><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="1"><code>0x00 (0)</code></td>
      <td rowspan="1"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 </code>(229) *5
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC </code>(220)
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC </code>(220)</td>
      <td colspan="1" rowspan="2"><code>0xDC </code>(220)</td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code> with <kbd>Shift</kbd></th>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBD (189)</code>
      </td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
    </tr>
  </tbody>
</table>

\*1 The value is input from JIS keyboard. When you use ANSI keyboard, the keyCode value and inputted character are what you select from the US keyboard layout.

\*2 The key is a dead key. The value of `keyup` event is `0xBA (186)`.

\*3 The key is a dead key. The value of `keyup` event is `0x10 (16)`.

\*4 No key events are fired.

\*5 The key isn't available with Greek keyboard layout (does not input any character). The value of `keyup` event is `0x00 (0)`.

### Non-printable keys (function keys)

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by modifier keys:
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"AltLeft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"AltRight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"AltRight"</code> when it's <code>"AltGraph"</code> key
      </th>
      <td>*1</td>
      <td>*1</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE1 (225)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td>*1</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE1 (225)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *3</td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlLeft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlRight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSLeft"</code></th>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE0 (224)</code>
      </td>
      <td><code>0x5B (91)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSRight"</code></th>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5C (92)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5D (93)</code>
      </td>
      <td><code>0x5C (92)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5D (93)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5B (91)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE0 (224)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5B (91)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftLeft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftRight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
  </tbody>
</table>

\*1 On Windows, `"AltGraph"` key causes `"ControlLeft"` key event and `"AltRight"` key event.

\*2 When Japanese keyboard layout is active, `"CapsLock"` key without <kbd>Shift</kbd> causes `0xF0 (240)`. The key works as `"Alphanumeric"` key whose label is "英数".

\*3 When Japanese keyboard layout is active, `"CapsLock"` key without <kbd>Shift</kbd> causes `0x00 (0)`. The key works as `"Alphanumeric"` key whose label is `"英数"`.

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by non-printable keys:
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"ContextMenu"</code></th>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5D (93)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Enter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Delete"</code></th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"End"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Help"</code></th>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2F (47)</code> *3
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x06 (6)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Insert"</code></th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageDown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageUp"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowDown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowLeft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowRight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowUp"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Escape"</code></th>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PrintScreen"</code></th>
      <td><code>0x2C (44)</code> *4</td>
      <td><code>0x2C (44)</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7C (124)</code>*5
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2A (42)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7C (124)</code>*5
      </td>
      <td><code>0x2C (44)</code> *4</td>
      <td><code>0x2C (44)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2A (42)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7D (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7D (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Pause"</code></th>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code> *6</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7E (126)</code>*5
      </td>
      <td><code>0x13 (19)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7E (126)</code>*5
      </td>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tr>
  </tbody>
</table>

\*1 keypress event is fired whose `keyCode` and `charCode` are `0x10 (16)` but text isn't inputted into editor.

\*2 On Mac, `"Help"` key is mapped to `"Insert"` key of PC keyboard. These `keyCode` values are the same as the `"Insert"` key's `keyCode` value.

\*3 Tested on Fedora 20.

\*4 Only `keyup` event is fired.

\*5 PC's `"PrintScreen"`, `"ScrollLock"` and `"Pause"` are mapped to Mac's `"F13"`, `"F14"` and `"F15"`. Chrome and Safari map same `keyCode` values with Mac's keys.

\*6 `"Pause"` key with <kbd>Control</kbd> causes `0x03 (3)`.

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by function keys:
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"F1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F11"</code></th>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F12"</code></th>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F13"</code></th>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code> *1</td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2C (44)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F14"</code></th>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code> *1</td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x91 (145)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F15"</code></th>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code> *1</td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x13 (19)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F16"</code></th>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code> *1</td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> *1</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> *1</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229)</code> *5
      </td>
      <td><code>0x83 (131)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x84 (132)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x85 (133)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x86 (134)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x87 (135)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
  </tbody>
</table>

\*1 Tested on Fedora 20.

\*2 PC's `"PrintScreen"`, `"ScrollLock"` and `"Pause"` are mapped to `Mac's "F13"`, `"F14"` and `"F15"`. Firefox maps same `keyCode` values with PC's keys.

\*3 Tested on Fedora 20. The keys don't cause `GDK_Fxx` keysyms. If the keys cause proper keysyms, these values must be same as IE.

\*4 Tested on Fedora 20. The keys don't cause DOM key events on Chromium.

\*5 `keyUp` event's keyCode value is `0x83 (131)`.

\*6 Tested on Fedora 20. The keys don't cause DOM key events on Firefox.

\*7 Only `keydown` event is fired.

\*8 No DOM key events are fired on Firefox.

### Numpad keys

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by keys in numpad in
    NumLock state
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadAdd"</code></th>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadComma"</code> inputting <code>","</code></th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBC (188)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">
        <code>Always inputs </code>"."
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBC (188)</code>
      </td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">
        <code>Always inputs </code>"."
      </td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadComma"</code> inputting <code>"."</code> or empty string
      </th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBE (190)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6E (110)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBE (190)</code>
      </td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6E (110)</code>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>"."</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>","</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDivide"</code></th>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEnter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEqual"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td><code>0x0C (12)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x3D (61)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x3D (61)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadMultiply"</code></th>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadSubtract"</code></th>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
    </tr>
  </tbody>
</table>

\*1 `"NumLock"` key works as `"Clear"` key on Mac.

<table class="standard-table">
  <caption>
    keyCode values of each browser's keydown event caused by keys in numpad
    without NumLock state
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="1" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="1" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Numpad0"</code> (<code>"Insert"</code>)</th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code> (<code>"End"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code> (<code>"ArrowDown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code> (<code>"PageDown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code> (<code>"ArrowLeft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code> (<code>"ArrowRight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code> (<code>"Home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code> (<code>"ArrowUp"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code> (<code>"PageUp"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDecimal"</code> (<code>"Delete"</code>)</th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
  </tbody>
</table>

\* Recent Mac doesn't have `"NumLock"` key and state. Therefore, unlocked state isn't available.

## Constants for keyCode value

Gecko defines a lot of `keyCode` values in `KeyboardEvent` for making the mapping table explicitly. These values are useful for add-on developers of Firefox, but not so useful in public web pages.

| Constant                     | Value      | Description                                                                                                                                                                 |
| ---------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DOM_VK_CANCEL`              | 0x03 (3)   | Cancel key.                                                                                                                                                                 |
| `DOM_VK_HELP`                | 0x06 (6)   | Help key.                                                                                                                                                                   |
| `DOM_VK_BACK_SPACE`          | 0x08 (8)   | Backspace key.                                                                                                                                                              |
| `DOM_VK_TAB`                 | 0x09 (9)   | Tab key.                                                                                                                                                                    |
| `DOM_VK_CLEAR`               | 0x0C (12)  | "5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.                                                                        |
| `DOM_VK_RETURN`              | 0x0D (13)  | Return/enter key on the main keyboard.                                                                                                                                      |
| `DOM_VK_ENTER`               | 0x0E (14)  | Reserved, but not used. ```{{obsolete_inline(30)}} `(Dropped, see {{bug(969247)}}.)                                                                           |
| `DOM_VK_SHIFT`               | 0x10 (16)  | Shift key.                                                                                                                                                                  |
| `DOM_VK_CONTROL`             | 0x11 (17)  | Control key.                                                                                                                                                                |
| `DOM_VK_ALT`                 | 0x12 (18)  | Alt (Option on Mac) key.                                                                                                                                                    |
| `DOM_VK_PAUSE`               | 0x13 (19)  | Pause key.                                                                                                                                                                  |
| `DOM_VK_CAPS_LOCK`           | 0x14 (20)  | Caps lock.                                                                                                                                                                  |
| `DOM_VK_KANA`                | 0x15 (21)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_HANGUL`              | 0x15 (21)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_EISU`                | 0x 16 (22) | "英数" key on Japanese Mac keyboard. {{gecko_minversion_inline("15.0")}}                                                                                       |
| `DOM_VK_JUNJA`               | 0x17 (23)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_FINAL`               | 0x18 (24)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_HANJA`               | 0x19 (25)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_KANJI`               | 0x19 (25)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_ESCAPE`              | 0x1B (27)  | Escape key.                                                                                                                                                                 |
| `DOM_VK_CONVERT`             | 0x1C (28)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_NONCONVERT`          | 0x1D (29)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_ACCEPT`              | 0x1E (30)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_MODECHANGE`          | 0x1F (31)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_SPACE`               | 0x20 (32)  | Space bar.                                                                                                                                                                  |
| `DOM_VK_PAGE_UP`             | 0x21 (33)  | Page Up key.                                                                                                                                                                |
| `DOM_VK_PAGE_DOWN`           | 0x22 (34)  | Page Down key.                                                                                                                                                              |
| `DOM_VK_END`                 | 0x23 (35)  | End key.                                                                                                                                                                    |
| `DOM_VK_HOME`                | 0x24 (36)  | Home key.                                                                                                                                                                   |
| `DOM_VK_LEFT`                | 0x25 (37)  | Left arrow.                                                                                                                                                                 |
| `DOM_VK_UP`                  | 0x26 (38)  | Up arrow.                                                                                                                                                                   |
| `DOM_VK_RIGHT`               | 0x27 (39)  | Right arrow.                                                                                                                                                                |
| `DOM_VK_DOWN`                | 0x28 (40)  | Down arrow.                                                                                                                                                                 |
| `DOM_VK_SELECT`              | 0x29 (41)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_PRINT`               | 0x2A (42)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_EXECUTE`             | 0x2B (43)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_PRINTSCREEN`         | 0x2C (44)  | Print Screen key.                                                                                                                                                           |
| `DOM_VK_INSERT`              | 0x2D (45)  | Ins(ert) key.                                                                                                                                                               |
| `DOM_VK_DELETE`              | 0x2E (46)  | Del(ete) key.                                                                                                                                                               |
| `DOM_VK_0`                   | 0x30 (48)  | "0" key in standard key location.                                                                                                                                           |
| `DOM_VK_1`                   | 0x31 (49)  | "1" key in standard key location.                                                                                                                                           |
| `DOM_VK_2`                   | 0x32 (50)  | "2" key in standard key location.                                                                                                                                           |
| `DOM_VK_3`                   | 0x33 (51)  | "3" key in standard key location.                                                                                                                                           |
| `DOM_VK_4`                   | 0x34 (52)  | "4" key in standard key location.                                                                                                                                           |
| `DOM_VK_5`                   | 0x35 (53)  | "5" key in standard key location.                                                                                                                                           |
| `DOM_VK_6`                   | 0x36 (54)  | "6" key in standard key location.                                                                                                                                           |
| `DOM_VK_7`                   | 0x37 (55)  | "7" key in standard key location.                                                                                                                                           |
| `DOM_VK_8`                   | 0x38 (56)  | "8" key in standard key location.                                                                                                                                           |
| `DOM_VK_9`                   | 0x39 (57)  | "9" key in standard key location.                                                                                                                                           |
| `DOM_VK_COLON`               | 0x3A (58)  | Colon (":") key. {{gecko_minversion_inline("15.0")}}                                                                                                           |
| `DOM_VK_SEMICOLON`           | 0x3B (59)  | Semicolon (";") key.                                                                                                                                                        |
| `DOM_VK_LESS_THAN`           | 0x3C (60)  | Less-than ("<") key. {{gecko_minversion_inline("15.0")}}                                                                                                       |
| `DOM_VK_EQUALS`              | 0x3D (61)  | Equals ("=") key.                                                                                                                                                           |
| `DOM_VK_GREATER_THAN`        | 0x3E (62)  | Greater-than (">") key. {{gecko_minversion_inline("15.0")}}                                                                                                    |
| `DOM_VK_QUESTION_MARK`       | 0x3F (63)  | Question mark ("?") key. {{gecko_minversion_inline("15.0")}}                                                                                                   |
| `DOM_VK_AT`                  | 0x40 (64)  | Atmark ("@") key. {{gecko_minversion_inline("15.0")}}                                                                                                          |
| `DOM_VK_A`                   | 0x41 (65)  | "A" key.                                                                                                                                                                    |
| `DOM_VK_B`                   | 0x42 (66)  | "B" key.                                                                                                                                                                    |
| `DOM_VK_C`                   | 0x43 (67)  | "C" key.                                                                                                                                                                    |
| `DOM_VK_D`                   | 0x44 (68)  | "D" key.                                                                                                                                                                    |
| `DOM_VK_E`                   | 0x45 (69)  | "E" key.                                                                                                                                                                    |
| `DOM_VK_F`                   | 0x46 (70)  | "F" key.                                                                                                                                                                    |
| `DOM_VK_G`                   | 0x47 (71)  | "G" key.                                                                                                                                                                    |
| `DOM_VK_H`                   | 0x48 (72)  | "H" key.                                                                                                                                                                    |
| `DOM_VK_I`                   | 0x49 (73)  | "I" key.                                                                                                                                                                    |
| `DOM_VK_J`                   | 0x4A (74)  | "J" key.                                                                                                                                                                    |
| `DOM_VK_K`                   | 0x4B (75)  | "K" key.                                                                                                                                                                    |
| `DOM_VK_L`                   | 0x4C (76)  | "L" key.                                                                                                                                                                    |
| `DOM_VK_M`                   | 0x4D (77)  | "M" key.                                                                                                                                                                    |
| `DOM_VK_N`                   | 0x4E (78)  | "N" key.                                                                                                                                                                    |
| `DOM_VK_O`                   | 0x4F (79)  | "O" key.                                                                                                                                                                    |
| `DOM_VK_P`                   | 0x50 (80)  | "P" key.                                                                                                                                                                    |
| `DOM_VK_Q`                   | 0x51 (81)  | "Q" key.                                                                                                                                                                    |
| `DOM_VK_R`                   | 0x52 (82)  | "R" key.                                                                                                                                                                    |
| `DOM_VK_S`                   | 0x53 (83)  | "S" key.                                                                                                                                                                    |
| `DOM_VK_T`                   | 0x54 (84)  | "T" key.                                                                                                                                                                    |
| `DOM_VK_U`                   | 0x55 (85)  | "U" key.                                                                                                                                                                    |
| `DOM_VK_V`                   | 0x56 (86)  | "V" key.                                                                                                                                                                    |
| `DOM_VK_W`                   | 0x57 (87)  | "W" key.                                                                                                                                                                    |
| `DOM_VK_X`                   | 0x58 (88)  | "X" key.                                                                                                                                                                    |
| `DOM_VK_Y`                   | 0x59 (89)  | "Y" key.                                                                                                                                                                    |
| `DOM_VK_Z`                   | 0x5A (90)  | "Z" key.                                                                                                                                                                    |
| `DOM_VK_WIN`                 | 0x5B (91)  | Windows logo key on Windows. Or Super or Hyper key on Linux. {{gecko_minversion_inline("15.0")}}                                                               |
| `DOM_VK_CONTEXT_MENU`        | 0x5D (93)  | Opening context menu key.                                                                                                                                                   |
| `DOM_VK_SLEEP`               | 0x5F (95)  | Linux support for this keycode was added in Gecko 4.0.                                                                                                                      |
| `DOM_VK_NUMPAD0`             | 0x60 (96)  | "0" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD1`             | 0x61 (97)  | "1" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD2`             | 0x62 (98)  | "2" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD3`             | 0x63 (99)  | "3" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD4`             | 0x64 (100) | "4" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD5`             | 0x65 (101) | "5" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD6`             | 0x66 (102) | "6" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD7`             | 0x67 (103) | "7" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD8`             | 0x68 (104) | "8" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_NUMPAD9`             | 0x69 (105) | "9" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_MULTIPLY`            | 0x6A (106) | "\*" on the numeric keypad.                                                                                                                                                 |
| `DOM_VK_ADD`                 | 0x6B (107) | "+" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_SEPARATOR`           | 0x6C (108) |                                                                                                                                                                             |
| `DOM_VK_SUBTRACT`            | 0x6D (109) | "-" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_DECIMAL`             | 0x6E (110) | Decimal point on the numeric keypad.                                                                                                                                        |
| `DOM_VK_DIVIDE`              | 0x6F (111) | "/" on the numeric keypad.                                                                                                                                                  |
| `DOM_VK_F1`                  | 0x70 (112) | F1 key.                                                                                                                                                                     |
| `DOM_VK_F2`                  | 0x71 (113) | F2 key.                                                                                                                                                                     |
| `DOM_VK_F3`                  | 0x72 (114) | F3 key.                                                                                                                                                                     |
| `DOM_VK_F4`                  | 0x73 (115) | F4 key.                                                                                                                                                                     |
| `DOM_VK_F5`                  | 0x74 (116) | F5 key.                                                                                                                                                                     |
| `DOM_VK_F6`                  | 0x75 (117) | F6 key.                                                                                                                                                                     |
| `DOM_VK_F7`                  | 0x76 (118) | F7 key.                                                                                                                                                                     |
| `DOM_VK_F8`                  | 0x77 (119) | F8 key.                                                                                                                                                                     |
| `DOM_VK_F9`                  | 0x78 (120) | F9 key.                                                                                                                                                                     |
| `DOM_VK_F10`                 | 0x79 (121) | F10 key.                                                                                                                                                                    |
| `DOM_VK_F11`                 | 0x7A (122) | F11 key.                                                                                                                                                                    |
| `DOM_VK_F12`                 | 0x7B (123) | F12 key.                                                                                                                                                                    |
| `DOM_VK_F13`                 | 0x7C (124) | F13 key.                                                                                                                                                                    |
| `DOM_VK_F14`                 | 0x7D (125) | F14 key.                                                                                                                                                                    |
| `DOM_VK_F15`                 | 0x7E (126) | F15 key.                                                                                                                                                                    |
| `DOM_VK_F16`                 | 0x7F (127) | F16 key.                                                                                                                                                                    |
| `DOM_VK_F17`                 | 0x80 (128) | F17 key.                                                                                                                                                                    |
| `DOM_VK_F18`                 | 0x81 (129) | F18 key.                                                                                                                                                                    |
| `DOM_VK_F19`                 | 0x82 (130) | F19 key.                                                                                                                                                                    |
| `DOM_VK_F20`                 | 0x83 (131) | F20 key.                                                                                                                                                                    |
| `DOM_VK_F21`                 | 0x84 (132) | F21 key.                                                                                                                                                                    |
| `DOM_VK_F22`                 | 0x85 (133) | F22 key.                                                                                                                                                                    |
| `DOM_VK_F23`                 | 0x86 (134) | F23 key.                                                                                                                                                                    |
| `DOM_VK_F24`                 | 0x87 (135) | F24 key.                                                                                                                                                                    |
| `DOM_VK_NUM_LOCK`            | 0x90 (144) | Num Lock key.                                                                                                                                                               |
| `DOM_VK_SCROLL_LOCK`         | 0x91 (145) | Scroll Lock key.                                                                                                                                                            |
| `DOM_VK_WIN_OEM_FJ_JISHO`    | 0x92 (146) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Dictionary" key on Fujitsu OASYS. {{gecko_minversion_inline("21.0")}}      |
| `DOM_VK_WIN_OEM_FJ_MASSHOU`  | 0x93 (147) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Unregister word" key on Fujitsu OASYS. {{gecko_minversion_inline("21.0")}} |
| `DOM_VK_WIN_OEM_FJ_TOUROKU`  | 0x94 (148) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Register word" key on Fujitsu OASYS. {{gecko_minversion_inline("21.0")}}   |
| `DOM_VK_WIN_OEM_FJ_LOYA`     | 0x95 (149) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Left OYAYUBI" key on Fujitsu OASYS. {{gecko_minversion_inline("21.0")}}    |
| `DOM_VK_WIN_OEM_FJ_ROYA`     | 0x96 (150) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Right OYAYUBI" key on Fujitsu OASYS. {{gecko_minversion_inline("21.0")}}   |
| `DOM_VK_CIRCUMFLEX`          | 0xA0 (160) | Circumflex ("^") key. {{gecko_minversion_inline("15.0")}}                                                                                                      |
| `DOM_VK_EXCLAMATION`         | 0xA1 (161) | Exclamation ("!") key. {{gecko_minversion_inline("15.0")}}                                                                                                     |
| `DOM_VK_DOUBLE_QUOTE`        | 0xA3 (162) | Double quote (""") key. {{gecko_minversion_inline("15.0")}}                                                                                                    |
| `DOM_VK_HASH`                | 0xA3 (163) | Hash ("#") key. {{gecko_minversion_inline("15.0")}}                                                                                                            |
| `DOM_VK_DOLLAR`              | 0xA4 (164) | Dollar sign ("$") key. {{gecko_minversion_inline("15.0")}}                                                                                                     |
| `DOM_VK_PERCENT`             | 0xA5 (165) | Percent ("%") key. {{gecko_minversion_inline("15.0")}}                                                                                                         |
| `DOM_VK_AMPERSAND`           | 0xA6 (166) | Ampersand ("&") key. {{gecko_minversion_inline("15.0")}}                                                                                                       |
| `DOM_VK_UNDERSCORE`          | 0xA7 (167) | Underscore ("\_") key. {{gecko_minversion_inline("15.0")}}                                                                                                     |
| `DOM_VK_OPEN_PAREN`          | 0xA8 (168) | Open parenthesis ("(") key. {{gecko_minversion_inline("15.0")}}                                                                                                |
| `DOM_VK_CLOSE_PAREN`         | 0xA9 (169) | Close parenthesis (")") key. {{gecko_minversion_inline("15.0")}}                                                                                               |
| `DOM_VK_ASTERISK`            | 0xAA (170) | Asterisk ("\*") key. {{gecko_minversion_inline("15.0")}}                                                                                                       |
| `DOM_VK_PLUS`                | 0xAB (171) | Plus ("+") key. {{gecko_minversion_inline("15.0")}}                                                                                                            |
| `DOM_VK_PIPE`                | 0xAC (172) | Pipe ("\|") key. {{gecko_minversion_inline("15.0")}}                                                                                                           |
| `DOM_VK_HYPHEN_MINUS`        | 0xAD (173) | Hyphen-US/docs/Minus ("-") key. {{gecko_minversion_inline("15.0")}}                                                                                            |
| `DOM_VK_OPEN_CURLY_BRACKET`  | 0xAE (174) | Open curly bracket ("{") key. {{gecko_minversion_inline("15.0")}}                                                                                              |
| `DOM_VK_CLOSE_CURLY_BRACKET` | 0xAF (175) | Close curly bracket ("}") key. {{gecko_minversion_inline("15.0")}}                                                                                             |
| `DOM_VK_TILDE`               | 0xB0 (176) | Tilde ("~") key. {{gecko_minversion_inline("15.0")}}                                                                                                           |
| `DOM_VK_VOLUME_MUTE`         | 0xB5 (181) | Audio mute key. {{gecko_minversion_inline("21.0")}}                                                                                                            |
| `DOM_VK_VOLUME_DOWN`         | 0xB6 (182) | Audio volume down key {{gecko_minversion_inline("21.0")}}                                                                                                      |
| `DOM_VK_VOLUME_UP`           | 0xB7 (183) | Audio volume up key {{gecko_minversion_inline("21.0")}}                                                                                                        |
| `DOM_VK_COMMA`               | 0xBC (188) | Comma (",") key.                                                                                                                                                            |
| `DOM_VK_PERIOD`              | 0xBE (190) | Period (".") key.                                                                                                                                                           |
| `DOM_VK_SLASH`               | 0xBF (191) | Slash ("/") key.                                                                                                                                                            |
| `DOM_VK_BACK_QUOTE`          | 0xC0 (192) | Back tick ("`") key.                                                                                                                                                        |
| `DOM_VK_OPEN_BRACKET`        | 0xDB (219) | Open square bracket ("[") key.                                                                                                                                              |
| `DOM_VK_BACK_SLASH`          | 0xDC (220) | Back slash ("\\") key.                                                                                                                                                      |
| `DOM_VK_CLOSE_BRACKET`       | 0xDD (221) | Close square bracket ("]") key.                                                                                                                                             |
| `DOM_VK_QUOTE`               | 0xDE (222) | Quote (''') key.                                                                                                                                                            |
| `DOM_VK_META`                | 0xE0 (224) | Meta key on Linux, Command key on Mac.                                                                                                                                      |
| `DOM_VK_ALTGR`               | 0xE1 (225) | AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux. {{gecko_minversion_inline("15.0")}}                                                               |
| `DOM_VK_WIN_ICO_HELP`        | 0xE3 (227) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.{{gecko_minversion_inline("21.0")}}             |
| `DOM_VK_WIN_ICO_00`          | 0xE4 (228) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.{{gecko_minversion_inline("21.0")}}             |
| `DOM_VK_WIN_ICO_CLEAR`       | 0xE6 (230) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.{{gecko_minversion_inline("21.0")}}             |
| `DOM_VK_WIN_OEM_RESET`       | 0xE9 (233) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_JUMP`        | 0xEA (234) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_PA1`         | 0xEB (235) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_PA2`         | 0xEC (236) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_PA3`         | 0xED (237) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_WSCTRL`      | 0xEE (238) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_CUSEL`       | 0xEF (239) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_ATTN`        | 0xF0 (240) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_FINISH`      | 0xF1 (241) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_COPY`        | 0xF2 (242) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_AUTO`        | 0xF3 (243) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_ENLW`        | 0xF4 (244) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_WIN_OEM_BACKTAB`     | 0xF5 (245) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.{{gecko_minversion_inline("21.0")}}                 |
| `DOM_VK_ATTN`                | 0xF6 (246) | Attn (Attention) key of IBM midrange computers, e.g., AS/400. {{gecko_minversion_inline("21.0")}}                                                              |
| `DOM_VK_CRSEL`               | 0xF7 (247) | CrSel (Cursor Selection) key of IBM 3270 keyboard layout. {{gecko_minversion_inline("21.0")}}                                                                  |
| `DOM_VK_EXSEL`               | 0xF8 (248) | ExSel (Extend Selection) key of IBM 3270 keyboard layout. {{gecko_minversion_inline("21.0")}}                                                                  |
| `DOM_VK_EREOF`               | 0xF9 (249) | Erase EOF key of IBM 3270 keyboard layout. {{gecko_minversion_inline("21.0")}}                                                                                 |
| `DOM_VK_PLAY`                | 0xFA (250) | Play key of IBM 3270 keyboard layout. {{gecko_minversion_inline("21.0")}}                                                                                      |
| `DOM_VK_ZOOM`                | 0xFB (251) | Zoom key. {{gecko_minversion_inline("21.0")}}                                                                                                                  |
| `DOM_VK_PA1`                 | 0xFD (253) | PA1 key of IBM 3270 keyboard layout. {{gecko_minversion_inline("21.0")}}                                                                                       |
| `DOM_VK_WIN_OEM_CLEAR`       | 0xFE (254) | Clear key, but we're not sure the meaning difference from `DOM_VK_CLEAR`. {{gecko_minversion_inline("21.0")}}                                                  |

### OEM specific keys on Windows

On Windows, some values of virtual keycode are defined (reserved) for OEM specific key. They are available for special keys on non-standard keyboard. In other words, some values are used for different meaning by two or more vendors (or hardware).

Starting Gecko 21 (and older than 15), OEM specific key values are available on the keyCode attribute only on Windows. So they are not useful for usual web applications. They are useful only for intranet applications or in similar situations.

See "[Manufacturer-specific Virtual-Key Codes (Windows CE 5.0)](http://msdn.microsoft.com/en-us/library/aa452679.aspx)" in MSDN for the detail.
