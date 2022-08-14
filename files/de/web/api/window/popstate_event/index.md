---
title: WindowEventHandlers.onpopstate
slug: Web/API/Window/popstate_event
translation_of: Web/API/WindowEventHandlers/onpopstate
original_slug: Web/API/WindowEventHandlers/onpopstate
---
{{APIRef}} {{gecko_minversion_header("2")}}

## Zusammenfassung

Hier geht es um die Ereignisbehandlungsroutine, üblicherweise _event handler_ genannt, für das `popstate` Ereignis (_event_) des `window` Objekts.

Ein `popstate` Ereignis wird an `window` übermittelt, wann immer der aktive `history` Eintrag zwischen zwei Einträgen für dasselbe Dokument wechselt. Falls der zu aktivierende history Eintrag erzeugt wurde durch den Aufruf von `history.pushState()` oder beeinflusst wurde durch Aufruf von `history.replaceState(), `dann enthält die `state` Eigenschaft des `popstate` Ereignisses eine Kopie des `state` Objekts des `history` Eintrags.``

Es gilt zu beachten, dass der bloße Aufruf von `history.pushState()` oder `history.replaceState()` kein `popstate` Ereignis auslöst. Das `popstate` Ereignis wird allein durch Anklicken des Zurück-Buttons (oder den Aufruf von `history.back()` per Javascript) ausgelöst. Auch wird das Ereignis nur ausgelöst, wenn sich der Anwender zwischen zwei `history `Einträgen für dasselbe Dokument bewegt.

Browser behandeln den `popstate` Zustand nach initialem Laden einer Seite (`onload`) auf verschiedene Weise. Chrome (vor Version 34) und Safari senden immer ein `popstate` Ereignis, Firefox hingegen nicht.

## Syntax

    window.onpopstate = funcRef;

- _funcRef_ ist eine _event_ _handler_ Funktion, bzw. Ereignisbehandlungsroutine.

## Das popstate Ereignis

Zum Beispiel würde eine Seite mit der URL `http://example.com/example.html` beim Durchlaufen dieses Codes die folgenden Meldungen in der Konsole ausgeben:

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null
history.go(2);  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}
```

Obwohl mit dem ursprünglichen `history` Eintrag (für die URL `http://example.com/example.html`) kein `state` Objekt verknüpft ist, wird dennoch ein `popstate` Ereignis ausgelöst, sobald dieser Eintrag durch den zweiten Aufruf von `history.back()` aktiv wird.

## Spezifikation

- [HTML5 popstate event](http://www.whatwg.org/specs/web-apps/current-work/#handler-window-onpopstate)

## Weiterführende Informationen

- {{domxref("window.history")}}
- [Manipulating the browser history](/de/docs/Web/Guide/DOM/Manipulating_the_browser_history)
- [Ajax navigation example](/de/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
