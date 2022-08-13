---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
tags:
  - API
  - Property
  - Storage
translation_of: Web/API/Window/sessionStorage
---
{{APIRef()}}

Die `sessionStorage`-Eigenschaft erlaubt den Zugriff auf ein nur während der aktuellen Sitzung verfügbares [`Storage`](/de/docs/Web/API/Storage "Die Beschreibung hierüber wurde bisher noch nicht geschrieben; bitte erwäge, mitzuwirken!")-Objekt. `sessionStorage` ist mit einer Ausnahme identisch zu {{domxref("Window.localStorage")}}: In `localStorage` gespeicherte Daten besitzen kein Verfallsdatum, während sie im `sessionStorage` mit Ablauf der Sitzung gelöscht werden. Eine Sitzung endet erst mit dem Schließen des Browsers, sie übersteht das Neuladen und Wiederherstellen einer Webseite. **Das Öffnen einer Webseite in einem neuen Tab oder Browserfenster erzeugt jedoch eine neue Sitzung;** ein Unterschied zur Funktionsweise von Session-Cookies**.**

`localStorage` und `sessionStorage` sind nicht nur von der Domain, sondern auch vom Protokoll abhängig, über das die Seite aufgerufen wurde. In http\://example.com/ gespeicherte Daten stehen daher unter https\://example.com _nicht_ zur Verfügung.

## Syntax

```js
// Daten im sessionStorage speichern
sessionStorage.setItem('key', 'value');

// Gespeicherte Daten aus dem sessionStorage abfragen
var data = sessionStorage.getItem('key');

// Gespeicherte Daten aus dem sessionStorage entfernen
sessionStorage.removeItem('key');

// Alle gespeicherten Daten aus dem sessionStorage entfernen
sessionStorage.clear();
```

### Wert

Ein {{domxref("Storage")}}-Objekt.

## Beispiel

Im folgenden Beispiel wird auf das `sessionStorage`-Objekt der aktuellen Domain zugegriffen und mit {{domxref("Storage.setItem()")}} Daten hinzugefügt:

```js
sessionStorage.setItem('myCat', 'Tom');
```

Das folgende Beispiel speichert automatisch den Inhalt eines Textfeldes. Bei einem versehentlichen Neuladen der Seite wird der Inhalt wiederhergestellt, sodass keine Eingaben verloren gehen.

```js
// Das Textfeld holen, das überwacht werden soll
var field = document.getElementById("field");

// Prüfen, ob ein gespeicherter Wert vorliegt
// (das ist nur dann der Fall, wenn die Seite versehentlich aktualisiert wurde)
if (sessionStorage.getItem("autosave")) {
  // Den Inhalt des Testfeldes aus dem sessionStorage wiederherstellen
  field.value = sessionStorage.getItem("autosave");
}

// Änderungen des Inhalts des Textfeldes überwachen
field.addEventListener("change", function() {
  // Speichern des Inhalts des Textfeldes im sessionStorage
  sessionStorage.setItem("autosave", field.value);
});
```

> **Hinweis:** Ein vollständiges Beispiel kann unter [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) nachgelesen werden.

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Bemerkung |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('Web Storage', '#the-sessionstorage-attribute', 'sessionStorage')}} | {{Spec2('Web Storage')}} |           |

## Browserkompatibilität

{{Compat("api.Window.sessionStorage")}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
