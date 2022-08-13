---
title: Web Storage API
slug: Web/API/Web_Storage_API
translation_of: Web/API/Web_Storage_API
---
{{DefaultAPISidebar("Web Storage API")}}

Die **Web Storage API** bietet Mechanismen, durch welche Browser in einer weitaus intuitiveren Form Schlüssel-Werte-Paare abspeichern können, als dies bei Cookies der Fall ist.

## Web Storage Konzepte und Verwendung

Die zwei Mechanismen innerhalb des Web Storage sind wie folgt:

- `sessionStorage` stellt für jeden vorhandenen Ausgangspunkt für die Dauer des Seitenbesuchs einen separaten Speicherbereich bereit (solange der Browser geöffnet bleibt inklusive Seitenaktualisierung und -Wiederherstellung).
- `localStorage` hat die gleiche Funktion, bleibt jedoch trotz Schließens und Neustart des Browsers persistent.

Diese Mechanismen stehen durch die Eigenschaften {{domxref("Window.sessionStorage")}} und {{domxref("Window.localStorage")}} zur Verfügung (um dies näher zu beschreiben: Zur Unterstützung der Browser implementiert das `Window` Objekt die Objekte `WindowLocalStorage` und `WindowSessionStorage`, welche von `localStorage` und `sessionStorage` bereitgestellt werden) — durch deren Aufruf wird eine Instanz des {{domxref("Storage")}} Objekts erstellt, durch welches Daten gespeichert, abgerufen und gelöscht werden können. Ein anderes Speicherelement wird für das `sessionStorage` und `localStorage` jedes Ausgangspunktes verwendet — beide arbeiten getrennt und werden auch getrennt gesteuert.

> **Hinweis:** Ab Firefox 45 aufwärts wird die Datenspeicherung pro Ausgangspunkt auf 10MB begrenzt, um Speicherprobleme durch übermäßige Verwendung des Web storage zu vermeiden.

> **Hinweis:** Zugang zum Web Storage von IFrames Ditter wird verweigert, wenn der Anwender [Cookies Dritter deaktiviert](https://support.mozilla.org/de/kb/disable-third-party-cookies) hat (Firefox implementiert dieses Verhalten ab der [version 43](/de/docs/Mozilla/Firefox/Releases/43) aufwärts.)

> **Hinweis:** Web Storage ist nicht dasselbe wie [mozStorage](/de/docs/Storage "Storage") (Mozillas XPCOM Schnittstelle zu SQLite) oder die [Session store API](/de/docs/Session_store_API "Session_store_API") (ein [XPCOM](/de/docs/XPCOM "XPCOM") Speicherprogramm, welches von Erweiterungen verwendet wird).

## Web Storage Schnittstellen

- {{domxref("Storage")}}
  - : Erlaubt das Speichern, Abrufen und Löschen von Daten einer spezifischen Domain und des Speichertyps (session oder local).
- {{domxref("Window")}}
  - : Die Web Storage API erweitert das {{domxref("Window")}} Objekt mit zwei neuen Attributen — {{domxref("Window.sessionStorage")}} und {{domxref("Window.localStorage")}} — welche den Zugang zu den jeweiligen session- und local-Objekten der aktuellen Domain sowie eine {{domxref("Window.onstorage")}} Ereignissteuerung (event handler), welche aktiviert wird, wenn ein Speicherbereich geändert wird (z.B. bei der Speicherung eines neuen Datensatzes).
- {{domxref("StorageEvent")}}
  - : Das `storage`-Ereignis wird über das `Window`-Objekt eines (html-) Dokuments aktiviert, wenn sich ein Speicherbereich ändert.

## Beispiele

Um einige der typischen Anwendungsfälle von Web Storage darzulegen, wurde ein einfaches Beispiel erstellt, fantasievoll als [Web Storage Demo](https://github.com/mdn/web-storage-demo) benannt. Die Startseite bietet die Möglichkeit, Farbe, Schriftart und ein dekoratives Bild zu verändern. Wenn verschiedene Optionen ausgewählt werden, wird die Seite umgehend aktualisiert. Zudem werden die ausgewählten Optionen im `localStorage` gespeichert, sodass diese beim Verlassen und erneutem Aufruf der Seite bestehen bleiben.

Zudem besteht eine [Ereignis-Ausgabeseite](https://mdn.github.io/dom-examples/web-storage/event.html) — wenn diese Seite in einem weiteren Tab geladen wird, hiernach Änderungen auf der Startseite vorgenommen werden, sind die aktualisierten Speicherinformationen zu sehen, welche durch die Aktivierung des Ereignisses {{event("StorageEvent")}} zustandekommen.

## Spezifikationen

| Spezifikation                        | Status                           | Kommentar |
| ------------------------------------ | -------------------------------- | --------- |
| {{SpecName('Web Storage')}} | {{Spec2('Web Storage')}} |           |

## Browser-Kompatibilität

{{Compat}}

Alle Browser haben variiernde Kapazitäten sowohl für das localStorage und auch das sessionStorage. Hier ist ein [detailierter Ablauf aller Speicherkapazitäten verschiedener Browser](http://dev-test.nemikor.com/web-storage/support-test/) zu finden.

> **Hinweis:** Seit iOS 5.1, speichert Safari Mobile localStorage-Daten in den cache-Ordner, welcher gelegentlichen Speicherbereinigungen durch das OS ausgesetzt ist, welche typischerweise bei knappem Speicher auftreten.

## Privates Surfen / Inkognito-Modus

Die meisten modernen Browser unterstützen die als "Inkognito", "Privates Surfen" o.ä. bezeichnete Datenschutz-Option, welche keine Daten wie Verlauf und Cookies speichert. Aus ersichtlichen Gründen ist dies grundsätzlich inkompatibel mit Web Storage. Nichtsdestotrotz experimentieren Browseranbieter mit verschiedenen Szenarien, um mit dieser Inkompatibilität umzugehen.

Für die meisten Browser hat man sich für eine Strategie entschieden, wobei Speicher-APIs vorhanden und scheinbar voll funktionsfähig sind, mit dem einen großen Unterschied, dass alle gespeicherten Daten gelöscht werden, nachdem der Browser geschlossen wird. Für diese Browser bestehen desweiteren unterschiedliche Interpretationen dazu, was mit den vorhandenen abgespeicherten Daten (aus einer regulären Sitzung) geschehen soll. Sollten sie zum Abruf zur Verfügung stehen, um im Inkognito-Modus gelesen werden zu können? Dann gibt es einige Browser, insbesondere Safari, welche sich dazu entschieden haben, den Speicher zur Verfügung zu stellen, dieser jedoch leer ist und ihm ein Speicheranteil von 0 Byte zugeordnet ist. Dadurch machen sie es praktisch unmöglich, Daten auf den Speicher zu schreiben.

Entwicklern sollten diese unterschiedlichen Implementierungen bewusst sein und sie sollten dies bei der Entwicklung von Webseiten, welche von den Web Storage APIs abhängen, in Betracht ziehen. Für weitere Informationen werfe man einen Blick auf [diesen WHATWG Blogpost](https://blog.whatwg.org/tag/localstorage) , das sich insbesondere mit diesem Thema befasst.

## Siehe auch

[Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
[HTML5 Storage API By Venkatraman](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b)
