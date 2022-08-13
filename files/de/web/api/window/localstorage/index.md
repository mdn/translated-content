---
title: Window.localStorage
slug: Web/API/Window/localStorage
tags:
  - API
  - Storage
  - Web Storage
  - Web Storage API
  - Window
  - localStorage
translation_of: Web/API/Window/localStorage
---
{{APIRef()}}

Die `localStorage`-Eigenschaft erlaubt den Zugriff auf ein lokales {{domxref("Storage")}}-Objekt. `localStorage` ist mit einer Ausnahme identisch zu [`sessionStorage`](/en-US/docs/Web/API/Window.sessionStorage): Im Unterschied zu letzterem besitzen in `localStorage` gespeicherte Daten kein Verfallsdatum, während sie im `sessionStorage` mit Ablauf der `session`, in der Regel beim Schließen des Browsers, gelöscht werden.

`localStorage` und `sessionStorage` sind nicht nur von der Domain, sondern auch vom Protokoll abhängig, über das die Seite aufgerufen wurde. In http\://example.com/ gespeicherte Daten stehen daher unter https\://example.com _nicht_ zur Verfügung.

## Syntax

```js
myStorage = localStorage;
```

### Wert

Ein {{domxref("Storage")}}-Objekt.

## Beispiel

Der folgende Ausschnitt greift auf das lokale {{domxref("Storage")}}-Objekt der aktuellen Domain zu und fügt ihm mit {{domxref("Storage.setItem()")}} einen Eintrag hinzu.

```js
localStorage.setItem('myCat', 'Tom');
```

Die Syntax für das Auslesen eines Eintrages aus dem localStore lautet:

```js
var cat = localStorage.getItem('myCat');
```

Die Syntax um einen Eintrag zu entfernen lautet:

```js
localStorage.removeItem('myCat');
```

Die Syntax um alle Einträge zu löschen lautet:

```js
localStorage.clear();
```

> **Hinweis:** Ausführliche Beispiele sind im Artikel [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) nachzulesen.

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('Web Storage', '#dom-localstorage', 'localStorage')}} | {{Spec2('Web Storage')}} |           |

## Browserkompatibilität

{{Compat("api.Window.localStorage")}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("LocalStorage")}}
- {{domxref("SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
