---
title: Window.history
slug: Web/API/Window/history
tags:
  - API
  - HTML DOM
  - History API
  - Window
translation_of: Web/API/Window/history
---
{{ APIRef }}

Die nur lesend zugreifbare Eigenschaft `Window.history` gibt eine Referenz auf das {{domxref("History")}} Objekt zurück, welches eine Schnittstelle zur Manipulation der Browser Sitzungs-Historie bereitstellt (Seiten, die im aktuellen Tab oder dem aktuellen Frame besucht wurden).

Unter [Manipulating the browser history](/en/DOM/Manipulating_the_browser_history "en/DOM/Manipulating the browser history") finden sie weitere Details und Beispiele. Der Artikel geht besonders auf die Sicherheits-Features der Methoden `pushState()` und `replaceState()` ein, die Sie vor Benutzung der Funktionen kennen sollten.

## Syntax

    var historyObj = window.history;

## Beispiel

```js
history.back();     // entspricht dem Klicken des "Zurück"-Kopfes
history.go(-1);     // entspricht history.back();
```

## Anmerkungen

Für Seiten auf der obersten Ebene kann in der Sitzungs-Historie eine Liste von Seiten über das `History` Objekt angesehen werden, zugreifbar über die Drop-Downs im Browser neben den Vor- und Zurück-Schaltflächen.

Aus Sicherheitsgründen erlaubt das `History` Objekt keinen Zugriff für nicht-privilegierten Code auf die URLs anderer Seiten in der Sitzungs-Historie, erlaubt aber die Navigation durch die Historie.

Die Sitzungs-Historie kann nicht gelöscht oder das Vor-und Zurück-Navigieren verhindert werden. Die nächstbeste Lösung ist die [`location.replace()`](/en/DOM/window.location#replace "en/DOM/window.location#replace") Methode, die den aktuellen Eintrag in der Sitzungs-Historie durch die übergebene URL ersetzt.

## Spezifikationen

| Specification                                                                                                            | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'browsers.html#the-history-interface', 'The History interface')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'browsers.html#the-history-interface', 'The History interface')}} | {{Spec2('HTML5 W3C')}}     |         |
