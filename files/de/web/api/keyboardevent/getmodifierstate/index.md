---
title: KeyboardEvent.getModifierState()
slug: Web/API/KeyboardEvent/getModifierState
translation_of: Web/API/KeyboardEvent/getModifierState
---
{{APIRef("DOM Events")}}

Die Methode **`KeyboardEvent.getModifierState()`** gibt den aktuellen Zustand des angegebenen Modifikators zurück: `true`, wenn der Modifikator aktiv ist (d.h. die Modifikationstasten gedrückt oder gesperrt ist), ansonsten `false`.

## Syntax

    var active = event.getModifierState(keyArg);

### Rückgabe

Einen {{jsxref("Boolean")}}

### Parameter

- _`keyArg`_
  - : Ein Modifikatorschlüsselwert. Der Wert muss einer der {{domxref("KeyboardEvent.key")}} Werte sein, die Modifikatorschlüssel darstellen, oder die Zeichenkette "Accel" {{deprecated_inline}}. Dabei wird zwischen Groß- und Kleinschreibung unterschieden.

## Modifikationstasten im Internet Explorer

IE9 verwendet `"Scroll"` für `"ScrollLock"` und `"Win"` für `"OS"`.

## Modifikationstasten in Gecko

<table style="width: 100%">
  <caption>
    Wann gibt getModifierState() bei Gecko true zurück?
  </caption>
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (GTK)</th>
      <th scope="col">Mac</th>
      <th scope="col">Android 2.3</th>
      <th scope="col">Android 3.0 und später</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Alt"</code></th>
      <td>
        Entweder die <kbd>Alt</kbd> oder <kbd>AltGr</kbd> -Taste gedrückt wird
      </td>
      <td><kbd>Alt</kbd> -Taste gedrückt wird</td>
      <td><kbd>⌥ Option</kbd> -Taste gedrückt wird</td>
      <td colspan="2" rowspan="1">
        <kbd>Alt</kbd> oder <kbd>option</kbd> -Taste gedrückt wird
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"AltGraph"</code></th>
      <td>
        <p>
          Sowohl die <kbd>Alt</kbd> als auch die <kbd>Strg</kbd> werden
          gedrückt, oder die <kbd>AltGr</kbd> Taste wird gedrückt
        </p>
      </td>
      <td>
        <kbd>Level 3 Shift</kbd> Taste (or <kbd>Level 5 Shift</kbd> Taste
        {{gecko_minversion_inline("20.0")}}) wird gedrückt
      </td>
      <td><kbd>⌥ Option</kbd> Taste wird gedrückt</td>
      <td
        colspan="2"
        rowspan="1"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td colspan="3" style="text-align: center">
        Während die LED für <kbd>⇪ Caps Lock</kbd> leuchtet
      </td>
      <td style="text-align: center; background-color: rgb(204, 204, 204)">
        <em>Nicht unterstützt</em>
      </td>
      <td>
        Solange <kbd>⇪ Caps Lock</kbd> gesperrt ist
        {{gecko_minversion_inline("29.0")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Control"</code></th>
      <td>
        Entweder die <kbd>Strg</kbd> oder <kbd>AltGr</kbd> -Taste wird gedrückt
      </td>
      <td><kbd>Strg</kbd> Taste wird gedrückt</td>
      <td><kbd>control</kbd> Taste wird gedrückt</td>
      <td><kbd>menu</kbd> Taste wird gedrückt.</td>
      <td>
        <kbd>Strg</kbd>, <kbd>control</kbd> oder <kbd>menu</kbd> Taste wird
        gedrückt.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Fn"</code></th>
      <td
        colspan="4"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
      <td>
        Die <kbd>Function</kbd> wird gedrückt, aber wir sind nicht sicher,
        welche Taste den Modifikatorstatus aktiv setzt. Die <kbd>Fn</kbd>-Taste
        auf der Mac-Tastatur bewirkt dies nicht.<br />{{gecko_minversion_inline("29.0")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"FnLock"</code></th>
      <td
        colspan="5"
        rowspan="1"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Hyper"</code></th>
      <td
        colspan="5"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Meta"</code></th>
      <td style="background-color: rgb(204, 204, 204); text-align: center">
        <em>Nicht unterstützt</em>
      </td>
      <td style="text-align: center">
        <kbd>Meta</kbd> Taste wird gedrückt
        {{gecko_minversion_inline("17.0")}}
      </td>
      <td><kbd>⌘ Command</kbd> Taste wird gedrückt</td>
      <td style="text-align: center; background-color: rgb(204, 204, 204)">
        <em>Nicht unterstützt</em>
      </td>
      <td>
        <kbd>⊞ Windows Logo</kbd> or <kbd>command</kbd> Taste gedrückt wird
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td colspan="2" style="text-align: center">
        Während die LED für <kbd>Num Lock</kbd> leuchtet
      </td>
      <td>Eine Taste auf dem Nummerblock gedrückt wird</td>
      <td style="text-align: center; background-color: rgb(204, 204, 204)">
        <em>Nicht unterstützt</em>
      </td>
      <td>
        Solange <kbd>NumLock</kbd> gesperrt ist
        {{gecko_minversion_inline("29.0")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"OS"</code></th>
      <td><kbd>⊞ Windows Logo</kbd> Taste wird gedrückt</td>
      <td>
        <kbd>Super</kbd> or <kbd>Hyper</kbd> Taste wird gedrückt (normalerweise
        auf der <kbd>⊞ Windows Logo</kbd> Taste zugeordnet)
      </td>
      <td
        colspan="3"
        rowspan="1"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td>Während die LED für <kbd>ScrollLock</kbd> leuchtet</td>
      <td>
        Während die LED für <kbd>ScrollLock</kbd> leuchtet, aber normalerweise
        wird dies von der Plattform nicht unterstützt
      </td>
      <td
        colspan="2"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
      <td>
        Solange <kbd>ScrollLock</kbd> gesperrt
        {{gecko_minversion_inline("29.0")}}
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Shift"</code></th>
      <td colspan="5" rowspan="1" style="text-align: center">
        <kbd>⇧ Shift</kbd> Taste wird gedrückt
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Super"</code></th>
      <td
        colspan="5"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Symbol"</code></th>
      <td
        colspan="5"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"SymbolLock"</code></th>
      <td
        colspan="5"
        style="background-color: rgb(204, 204, 204); text-align: center"
      >
        <em>Nicht unterstützt</em>
      </td>
    </tr>
  </tbody>
</table>

- Auf den anderen Plattformen werden

  <kbd>Alt</kbd>

  ,

  <kbd>Control</kbd>

  und

  <kbd>Shift</kbd>

  unterstützt werden.

- Alle Modifikatoren (außer "FnLock", "Hyper", "Super" und "Symbol", die nach der Implementierung von Gecko definiert werden) stehen immer für nicht vertrauenswürdige Ereignisse auf Gecko zur Verfügung. Das hängt nicht von der Plattform ab.

## `"Accel"` virtueller Modifikator

> **Hinweis:** Der virtuelle Modifikator `"Accel"` ist in den aktuellen Entwürfen der DOM3 Events-Spezifikation praktisch **veraltet**.

`getModifierState()` also accepts a deprecated virtual modifier named `"Accel"`. `event.getModifierState("Accel")` returns `true` when at least one of {{domxref("KeyboardEvent.ctrlKey")}} or {{domxref("KeyboardEvent.metaKey")}} is `true`.

In old implementations and outdated specifications, it returned `true` when a modifier which is the typical modifier key for the shortcut key is pressed. For example, on Windows, pressing <kbd>Ctrl</kbd> key may make it return `true`. However, on Mac, pressing <kbd>⌘ Command</kbd> key may make it return `true`. Note that which modifier key makes it return true depends on platforms, browsers, and user settings. For example, Firefox users can customize this with a pref, `"ui.key.accelKey"`.

## Beispiel

```js
// Ignorieren, wenn folgender Modifikator aktiv ist.
if (event.getModifierState("Fn") ||
    event.getModifierState("Hyper") ||
    event.getModifierState("OS") ||
    event.getModifierState("Super") ||
    event.getModifierState("Win") /* hack for IE */) {
  return;
}

// auch ignorieren, wenn zwei oder mehr Modifikatoren außer Shift aktiv sind.
if (event.getModifierState("Control") +
    event.getModifierState("Alt") +
    event.getModifierState("Meta") > 1) {
  return;
}

// Tastaturkürzel mit Standardmodifikator
if (event.getModifierState("Accel")) {
  switch (event.key.toLowerCase()) {
    case "c":
      if (event.getModifierState("Shift")) {
        // Handle Accel + Shift + C
        event.preventDefault(); // consume the key event
      }
      break;
    case "k":
      if (!event.getModifierState("Shift")) {
        // Handle Accel + K
        event.preventDefault(); // consume the key event
      }
      break;
  }
  return;
}

// Mach etwas anderes für die Pfeiltasten, wenn ScrollLock gesperrt ist.
if ((event.getModifierState("ScrollLock") ||
       event.getModifierState("Scroll") /* hack for IE */) &&
    !event.getModifierState("Control") &&
    !event.getModifierState("Alt") &&
    !event.getModifierState("Meta")) {
  switch (event.key) {
    case "ArrowDown":
    case "Down": // Hack für IE und älteren Gecko
      event.preventDefault(); // Schlüsselereignis verwenden
      break;
    case "ArrowLeft":
    case "Left": // Hack für IE und älteren Gecko
      // Mach etwas anderes für die Pfeiltasten, wenn ScrollLock gesperrt ist.
      event.preventDefault(); // Schlüsselereignis verwenden
      break;
    case "ArrowRight":
    case "Right": // Hack für IE und älteren Gecko
      // Mach etwas anderes für die Pfeiltasten, wenn ScrollLock gesperrt ist.
      event.preventDefault(); // Schlüsselereignis verwenden
      break;
    case "ArrowUp":
    case "Up": // Hack für IE und älteren Gecko
      // Mach etwas anderes für die Pfeiltasten, wenn ScrollLock gesperrt ist.
      event.preventDefault(); // Schlüsselereignis verwenden
      break;
  }
}
```

> **Note:** Obwohl dieses Beispiel `.getModifierState()` mit `"Alt"`, `"Control"`, `"Meta"` und `"Shift"` verwendet, ist es vielleicht besser, `altKey`, `ctrlKey`, `metaKey` und `shiftKey` zu verwenden, da sie kürzer und vielleicht schneller sind.

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM3 Events', '#widl-KeyboardEvent-getModifierState', 'getModifierState()')}} | {{Spec2('DOM3 Events')}} | Initiale Definition ([Modifier Keys spec](https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3Events-key.html#keys-modifier)) |

## Browser-Kompatibilität

{{Compat("api.KeyboardEvent.getModifierState")}}

## Siehe auch

- Das {{domxref("KeyboardEvent")}}, zu dem die Methode gehört.
- {{domxref("MouseEvent.getModifierState")}}
