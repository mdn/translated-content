---
title: Window.close()
slug: Web/API/Window/close
tags:
  - API
  - DOM
  - Gecko
  - Method
  - Reference
  - Window
translation_of: Web/API/Window/close
---
{{APIRef}}

Die **`Window.close()`** Methode schließt das aktuelle Fenster oder das Fenster von dem sie aufgerufen wurde.

Diese Methode kann nur von Fenstern aufgerufen werden, die ein Skript mit der {{domxref("Window.open()")}} Methode verwenden. Wenn das Fenster nicht durch ein Skript geöffnet wurde, erscheint ein so oder ähnlich lautender Fehler in der Konsole `Skripte können keine Fenster schließen, die nicht von ihnen geöffnet wurden.`

Zu beachten ist auch, dass `close()` keinen Effekt auf {{domxref("Window")}} Objekte hat, die per [`HTMLIFrame​Element​.content​Window`](/en-US/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

## Syntax

    window.close();

## Beispiele

### Schließt ein Fenster, geöffnet durch `window.open()`

Dieses Beispiel zeigt eine Funktion die ein Fenster öffnet eine zweite Funktion die es schließt. Das demonstriert wie `Window.close()` verwendet wird um ein Fenster zu schließen, das per {{domxref("window.open()")}} geöffnet wurde.

```js
//Global var to store a reference to the opened window
var openedWindow;

function openWindow() {
  openedWindow = window.open('moreinfo.htm');
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

### Das aktuelle Fenster schließen

Wenn Sie in der Vergangenheit die `close()` Methode des window Objekts direkt aufgerufen haben, anstatt `close()` für eine `window` Instanz aufzurufen, hat der Browser das vorderste Fenster geschlossen, unabhängig davon, ob Ihr Skript dieses Fenster erstellt hat oder nicht. Dies ist nicht länger der Fall; Aus Sicherheitsgründen dürfen Skripte keine Fenster mehr schließen, die sie nicht geöffnet haben. (Firefox 46.0.1: Skripte können keine Fenster schließen, die sie nicht geöffnet hatten)

```js
function closeCurrentWindow() {
  window.close();
}
```

## Spezifikation

| Spezifikation                                                                                            | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', '#dom-window-close', 'window.close()')}}                 | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', "browsers.html#dom-window-close", "Window.close()")}} | {{Spec2('HTML5 W3C')}}     |           |

## Browserkompatibilität

{{Compat("api.Window.close")}}
