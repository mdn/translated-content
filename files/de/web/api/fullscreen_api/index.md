---
title: Vollbild API
slug: Web/API/Fullscreen_API
tags:
  - API
  - DOM
  - JS
  - Tutorial
  - Vollbild API
translation_of: Web/API/Fullscreen_API
original_slug: Web/API/Vollbild_API
---
{{DefaultAPISidebar("Fullscreen API")}}

Die **`Vollbild-API`** bietet einen einfachen Weg, um Webinhalte auf dem gesamten Bildschirm des Nutzers anzuzeigen. Der Browser kann einfach angewiesen werden, Elemente und, falls vorhanden, deren Kinder den gesamten Bildschirm einnehmen zu lassen, wodurch jegliche andere Inhalte vorübergehend ausgeblendet werden.

> **Note:** Momentan benutzen nicht alle Browser die Version der API ohne Präfixe. Siehe [Vendor Präfixe](#Prefixing) für Unterschiede zwischen Präfixen und Namen.Für eine universelle Lösung des Problems siehe [Fscreen](https://github.com/rafrex/fscreen).

## Aktivieren des Vollbildmodus

Wenn sie ein Element gefunden haben, welches Sie im Vollbildmodus anzeigen möchten (etwa ein {{ HTMLElement("video") }}), wir der Vollbildmodus einfach durch den Aufruf der {{ domxref("Element.requestFullscreen()") }}-Methode gestartet.

Nehmen wir dieses {{ HTMLElement("video") }}-Element als Beispiel:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Wir können dieses Video mit folgendem Skript in den Vollbildmodus versetzen:

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

### Anzeige-Schwierigkeiten

An dieser Stelle lohnt es sich, einen wichtigen Unterschied zwischen Gecko und WebKit aufzuzeigen: Gecko fügt automatisch CSS-Regeln zum betroffenen Element hinzu, damit es den ganzen Bildschirm einnimmt: "`width: 100%; height: 100%`". WebKit tut dies allerdings nicht; stattdessen wird das Vollbild-Element in der selben Größe zentriert vor einem schwarzen Hintergrund dargestellt. Um das gleich Vollbild-Verhalten in WebKit zu erhalten, müssen Sie selbst eine "`width: 100%; height: 100%;`"-CSS-Regel zum entsprechenden Element hinzufügen:

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

Andererseits, wenn Sie stattdessen versuchen, das WebKit-Verhalten auf Gecko zu erreichen, müssen sie das Element, das präsentiert werden soll, in einem anderen Element platzieren, welches sie stattdessen in den Vollbild-Modus versetzen. Dann können sie CSS-Regeln verwenden, um das innere Element so zu layouten, wie Sie wünschen.

### Benachrichtigung

Wenn der Vollbild-Modus erfolgreich gestartet wird, erhält das `document`, welches das entsprechende Element enthält ein {{ event("fullscreenchange") }}-Event. Wenn der Vollbild-Modus wieder verlassen wird, erhält das `document` wiederum ein {{ event("fullscreenchange") }}-Event. Beachten Sie jedoch, dass das {{ event("fullscreenchange") }}-Event selbst keine Informationen darüber bereitstellt, ob das `document` in oder aus den Vollbild-Modus wechselt. Stattdessen muss überprüft werden, ob das Attribut {{ domxref("document.fullscreenElement", "fullscreenElement") }}, des `document` nicht `null` ist. In diesem Fall befindet sich der Browser im Vollbild-Modus.

### Wenn die Vollbild-Anfrage scheitert

Es ist nicht garantiert, dass der Wechsel in den Vollbild-Modus möglich ist. {{ HTMLElement("iframe") }}-Elements etwa haben das {{ HTMLAttrXRef("allowfullscreen", "iframe") }}-Attribut, um ihrem Inhalt zu erlauben, in den Vollbild-Modus zu wechseln. Zusätzlich gibt es bestimmte Arten von Inhalten, wie etwa windowed plug-ins, welche nicht im Vollbild-Modus angezeigt werden können. Wenn versucht wird, ein Element, welches nicht im Vollbild-Modus dargestellt werden kann (oder ein Eltern- bzw. Kind-Knoten eines solchen Elements), wird dies nicht funktionieren. Stattdessen wird das Element, welches den Vollbild-Modus angefragt hat, ein `mozfullscreenerror`-Event erhalten. Wenn eine Vollbild-Anfrage scheitert, wird Firefox eine Fehlermeldung auf der Web-Konsole ausgeben, welche erklärt, warum die Anfrage fehlgeschlagen ist. In Chrome und neueren Versionen von Opera werden allerdings keine solchen Warnungen produziert.

> **Hinweis:** Vollbild-Anfragen müssen aus einem Event-Handler heraus gestellt werden oder die Anfrage wird abgelehnt.

## Verlassen des Vollbildmodus

Der Nutzer hat immer die Möglichkeit, selbst den Vollbildmodus zu verlassen; siehe [Things your users want to know](#things_your_users_want_to_know). Der Vollbildmodus kann aber auch programmatisch mithilfe der {{domxref("Document.exitFullscreen()")}}-Methode beendet werden.

## Weitere Informationen

Das {{ domxref("document") }} hält weitere Informationen bereit, welche bei der Entwicklung von Vollbild-Web-Apps hilfreich sein können:

- {{ domxref("document.fullscreenElement", "fullscreenElement") }}
  - : Das `fullscreenElement`-Attribut gibt das {{ domxref("element") }} an, welches aktuell im Vollbild-Modus angezeigt wird. Wenn dies nicht `null` ist, befindet sich das `document` im Vollbildmodus. Sonst, wenn dieses Attribut `null` ist, befindet sich das Dokument nicht im Vollbildmodus.
- {{ domxref("document.fullscreenEnabled", "fullscreenEnabled") }}
  - : Das `fullscreenEnabled`-Attribut gibt an, ob das `document` aktuell in einem Zustand ist, in welchem der Vollbild-Modus erlaubt ist.

## Was die Nutzer wissen wollen

Sie sollten die Nutzer wissen lassen, dass sie den Vollbildmodus jederzeit mit <kbd>ESC</kbd> (oder <kbd>F11</kbd>) verlassen können.

Zusätzlich beendet das Navigieren zu einer anderen Seite oder das Wechseln von Tabs oder Programmen (etwa mit <kbd>Alt</kbd>+<kbd>Tab</kbd>) auch den Vollbildmodus.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite dargestellt. Durch drücken von <kbd>Return</kbd> oder <kbd>Enter</kbd> kann der Nutzer den Vollbildmodus des Videos umschalten.

[Live-Beispiel ansehen](/samples/domref/fullscreen.html)

### Watching for the <kbd>Enter</kbd> key

When the page is loaded, this code is run to set up an event listener to watch for the <kbd>Enter</kbd> key.

```js
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
```

### Toggling fullscreen mode

This code is called when the user hits the <kbd>Enter</kbd> key, as seen above.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

This starts by looking at the value of the `fullscreenElement` attribute on the {{ domxref("document") }} (checking it prefixed with both `moz`,`ms`, or `webkit`). If it's `null`, the document is currently in windowed mode, so we need to switch to fullscreen mode. Switching to fullscreen mode is done by calling {{ domxref("element.requestFullscreen()") }}.

If fullscreen mode is already active (`fullscreenElement` is non-`null`), we call {{ domxref("document.exitFullscreen()") }}.

## Vendor Präfixe

For the moment not all browsers are implementing the unprefixed version of the API (for vendor agnostic access to the Fullscreen API you can use [Fscreen](https://github.com/rafrex/fscreen)). Here is the table summarizing the prefixes and name differences between them:

| Standard                                                 | Blink (Chrome & Opera)      | Gecko (Firefox)          | Internet Explorer 11    | Edge                        | Safari (WebKit)             |
| -------------------------------------------------------- | --------------------------- | ------------------------ | ----------------------- | --------------------------- | --------------------------- |
| {{domxref("Document.fullscreen")}}             | `webkitIsFullScreen`        | `mozFullScreen`          | _-_                     | `webkitIsFullScreen`        | `webkitIsFullScreen`        |
| {{domxref("Document.fullscreenEnabled")}} | `webkitFullscreenEnabled`   | `mozFullScreenEnabled`   | `msFullscreenEnabled`   | `webkitFullscreenEnabled`   | `webkitFullscreenEnabled`   |
| {{domxref("Document.fullscreenElement")}} | `webkitFullscreenElement`   | `mozFullScreenElement`   | `msFullscreenElement`   | `webkitFullscreenElement`   | `webkitFullscreenElement`   |
| {{domxref("Document.onfullscreenchange")}} | `onwebkitfullscreenchange`  | `onmozfullscreenchange`  | `MSFullscreenChange`    | `onwebkitfullscreenchange`  | `onwebkitfullscreenchange`  |
| {{domxref("Document.onfullscreenerror")}} | `onwebkitfullscreenerror`   | `onmozfullscreenerror`   | `MSFullscreenError`     | `onwebkitfullscreenerror`   | `onwebkitfullscreenerror`   |
| {{domxref("Document.exitFullscreen()")}}     | `webkitExitFullscreen()`    | `mozCancelFullScreen()`  | `msExitFullscreen()`    | `webkitExitFullscreen()`    | `webkitExitFullscreen()`    |
| {{domxref("Element.requestFullscreen()")}} | `webkitRequestFullscreen()` | `mozRequestFullScreen()` | `msRequestFullscreen()` | `webkitRequestFullscreen()` | `webkitRequestFullscreen()` |

## Spezifikationen

| Specification                        | Status                           | Comment          |
| ------------------------------------ | -------------------------------- | ---------------- |
| {{SpecName("Fullscreen")}} | {{Spec2("Fullscreen")}} | Initial version. |

## Browser Kompatibilität

All browsers implement this APIs. Nevertheless some implement it with prefixed names with slightly different spelling; e.g., instead of `requestFullscreen()`, there is `MozRequestFullScreen()`.

{{Compat}}

## Siehe auch

- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}, {{cssxref("::backdrop")}}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
