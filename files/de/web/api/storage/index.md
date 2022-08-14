---
title: Storage
slug: Web/API/Storage
translation_of: Web/API/Storage
---
{{APIRef("Web Storage API")}}

Die `Storage`-Schnittstelle der Web-Storage-API ermöglicht den Zugriff auf einfache Schlüssel-Wert-Datenbanken des Browsers, in denen Daten mit einer Domain verknüpft gespeichert werden können.

In {{domxref("Window.sessionStorage")}} gespeicherte Daten verfallen mit Ablauf der Sitzung (in der Regel dem Schließen des Browsers), {{domxref("Window.localStorage")}} speichert die Daten hingegen grundsätzlich zeitlich unbegrenzt.

## Eigenschaften

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : Anzahl der in diesem `Storage`-Objekt gespeicherten Datensätze.

## Methoden

- {{domxref("Storage.key()")}}
  - : Gibt unter Angabe einer Zahl n den Schlüssel des n-ten Datensatzes zurück.

- {{domxref("Storage.getItem()")}}
  - : Gibt den zum Schlüssel gehörigen Wert zurück.
- {{domxref("Storage.setItem()")}}
  - : Speichert den gegebenen Wert im Storage-Objekt unter dem gegebenen Schlüssel. Ist unter diesem Schlüssel bereits ein Datensatz vorhanden, wird sein Wert mit dem gegebenen überschrieben.
- {{domxref("Storage.removeItem()")}}
  - : Löscht den Datensatz des gegebenen Schlüssels.
- {{domxref("Storage.clear()")}}
  - : Löscht sämtliche Datensätze des Storage-Objekts.

## Beispiele

In diesem Beispiel wird auf das `Storage`-Objekt `localStorage` zugegriffen.

Zuerst wird mit `!localStorage.getItem('bgcolor')`geprüft, ob das Objekt keinen Datensatz namens `bgcolor` enthält. Ist der Datensatz `bgcolor` nicht vorhanden, wird `populateStorage()` aufgerufen, um Werte aus der Seite auszulesen und mittels {{domxref("Storage.setItem()")}} im `Storage`-Objekt zu speichern.
Anschließend folgt der Aufruf der Funktion `setStyles()`, die alle Daten mittels {{domxref("Storage.getItem()")}} ausliest und die Darstellung der Seite entsprechend ändert.

```js
if(!localStorage.getItem('bgcolor')) {
  populateStorage();
}
setStyles();

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **Note:** **Anmerkung**: Dieses Beispiel kann unter [Web Storage Demo](https://github.com/mdn/web-storage-demo) ausprobiert werden.

## Spezifikationen

| Spezifikation                                                                        | Status                           | Kommentar |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('Web Storage', '#the-storage-interface', 'Storage')}} | {{Spec2('Web Storage')}} |           |

## Browserkompatibilität

{{Compat}}

\[1] Seit iOS 5.1 speichert Safari Mobile in `localStorage` abgelegte Daten im Cache-Verzeichnis. Dieses wird in unregelmäßigen Abständen vom Betriebssystem teilweise geleert, spätestens jedoch, sobald nur noch wenig Speicherplatz zur Verfügung steht.
Desweiteren verhindert der private Modus von Safari Mobile jegliche Nutzung von `localStorage`.

Die Speicherkapazität von `localStorage` und [`sessionStorage`](/de/docs/Web/API/SessionStorage "Die Beschreibung hierüber wurde bisher noch nicht geschrieben; bitte erwäge, mitzuwirken!"). unterscheidet sich von Browser zu Browser (siehe diese [detailierte Aufstellung der Speicherkapazitäten für verschiedene Browser](http://dev-test.nemikor.com/web-storage/support-test/)).

## Siehe auch

[Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
