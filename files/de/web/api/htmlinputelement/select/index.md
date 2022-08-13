---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - Auswählen
  - HTML
  - JavaScript
  - Méthode
translation_of: Web/API/HTMLInputElement/select
---
{{ APIRef("HTML DOM") }}

Die **`HTMLInputElement.select()`** Methode selektiert den gesamten Text innerhalb eines {{HTMLElement("textarea")}} oder innerhalb eines {{HTMLElement("input")}} Elements welches ein Textfeld enthält.

## Syntax

    element.select();

## Beispiel

Klick in diesem Beispiel auf den Button um den gesamten Text innerhalb des `<input>` Elements zu selektieren.

### HTML

```html
<input type="text" id="text-box" size="20" value="Hallo Welt!">
<button onclick="selectText()">Text auswählen</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}
```

### Ergebnis

{{EmbedLiveSample("Beispiel")}}

## Anmerkungen

Die Methode `element.select()` fokussiert den Input nicht zwingend, weshalb es oft zusammen mit {{domxref("HTMLElement.focus()")}} verwendet wird.

In Browsern in denen es nicht unterstützt wird ist es möglich es mit [HTMLInputElement.setSelectionRange()](/de/docs/Web/API/HTMLInputElement/setSelectionRange) (mit den Parametern _0_ und der _Länge des Werts des Inputs_) zu ersetzen.

```html
<input onClick="this.select();" value="Beispieltext" />
<!-- gleichbedeutend mit -->
<input onClick="this.setSelectionRange(0, this.value.length);" value="Beispieltext" />
```

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'forms.html#dom-textarea/input-select', 'select')}} | {{Spec2('HTML WHATWG')}} |           |

## Browser Kompatibilität

{{Compat("api.HTMLInputElement.select")}}

## Siehe auch

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
