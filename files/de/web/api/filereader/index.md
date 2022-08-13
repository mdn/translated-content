---
title: FileReader
slug: Web/API/FileReader
translation_of: Web/API/FileReader
---
{{APIRef("File API")}}

Mit dem FileReader-Objekt können Webapplikationen den Inhalt von auf dem Computer des Benutzers gespeicherten Dateien (oder Rohdaten-Buffer) asynchron lesen. Mit {{domxref("File")}} oder {{domxref("Blob")}}-Objekten wird die zu lesende Datei oder die zu lesenden Daten spezifiziert.

File Objekte können über ein {{domxref("FileList")}} Objekt erhalten werden, welches als Ergebnis einer Dateiauswahl durch einen Benutzer über das {{HTMLElement("input")}} Element zurückgegeben wird. Weitere mögliche Quellen sind drag and drop Ereignisse über ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt oder über die `mozGetAsFile()` API des {{domxref("HTMLCanvasElement")}}.

## Konstruktor

    FileReader FileReader();

Im Kapitel [Zugriff auf Dateien von Webapplikationen](/de/docs/Zugriff_auf_Dateien_von_Webapplikationen) finden sich weitere Details und Beispiele.

## Eigenschaften

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : Ein {{domxref("DOMError")}}, der den Fehler angibt, welcher beim Lesen der Datei entstanden ist.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}
  - : Eine Zahl, welche den Status des `FileReader` angibt. Möglich ist eine der [Status-Konstanten](#status-konstanten).
- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist. Das Format der Daten hängt davon ab, welche der Methoden zum Starten des Lesevorgangs benutzt wurde.

### Event-Handler

- {{domxref("FileReader.onabort")}}
  - : Ein Handler für das {{event("abort")}}-Event. Dieser Event wird gefeuert, wenn der Lesevorgang abgebrochen wird.
- {{domxref("FileReader.onerror")}}
  - : Ein Handler für das {{event("error")}}-Event. Dieser Event wird gefeuert, wenn beim Lesevorgang ein Fehler ensteht.
- {{domxref("FileReader.onload")}}
  - : Ein Handler für das {{event("load")}}-Event. Dieser Event wird gefeuert, wenn der Lesevorgang erfolgreich beendet wird.
- {{domxref("FileReader.onloadstart")}}
  - : Ein Handler für das {{event("loadstart")}}-Event. Dieser Event wird gefeuert, wenn der Lesevorgang gestartet wird.
- {{domxref("FileReader.onloadend")}}
  - : Ein Handler für das {{event("loadend")}}-Event. Dieser Event wird gefeuert, wenn der Lesevorgang beendet wird (entweder erfolgreich oder fehlerhaft).
- {{domxref("FileReader.onprogress")}}
  - : Ein Handler für das {{event("progress")}}-Event. Dieser Event wird gefeuert, während ein {{domxref("Blob")}}-Inhalt gelesen wird.

> **Hinweis:** Da`FileReader` von {{domxref("EventTarget")}} erbt, kann auf alle diese Events auch mit der {{domxref("EventTarget.addEventListener()","addEventListener")}} Methode gehört werden.

### Status-Konstanten

- `EMPTY` : `0` : Noch keine Daten geladen.
- `LOADING` : `1` : Daten werden geladen.
- `DONE` : `2` : Der Lesevorgang ist abgeschlossen.

## Methoden

- {{domxref("FileReader.abort()")}}
  - : Bricht den Lesevorgang ab. Nach dem Return wird der `readyState` zu `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}} {{gecko_minversion_inline("7.0")}}
  - : Startet den Lesevorgang und liest den spezifierten {{domxref("Blob")}} und, wenn der Lesevorgang abgeschlossen ist, enthält `result` ein {{domxref("ArrayBuffer")}} mit den Daten.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Startet den Lesevorgang und liest den spezifierten {{domxref("Blob")}} und, wenn der Lesevorgang abgeschlossen ist, enthält `result` die rohen Binär-Daten als String.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Startet den Lesevorgang und liest den spezifierten {{domxref("Blob")}} und, wenn der Lesevorgang abgeschlossen ist, enthält `result` die Daten als Data-URL.
- {{domxref("FileReader.readAsText()")}}
  - : Startet den Lesevorgang und liest den spezifierten {{domxref("Blob")}} und , wenn der Lesevorgang abgeschlossen ist, enthält `result` die Daten als Text-String.

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar          |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName("File API", "#FileReader-interface", "FileReader")}} | {{Spec2("File API")}} | Initial definition |

## Browser-Kompatiblität

{{Compat}}

\[1] Vor Gecko 2.0 beta 7 (Firefox 4.0 beta 7), waren alle {{domxref("Blob")}} parameters stattdessen {{domxref("File")}} Parameter; Das wurde aktualisiert um die Spezifikation zu erfüllen. Vor Gecko 13.0 {{geckoRelease("13.0")}} gab die `FileReader.error` Eigenschaft ein {{domxref("FileError")}} Objekt zurück. Dieses Interface wurde wurde entfernt und `FileReader.error` gibt nun einen {{domxref("DOMError")}} Objekt zurück, wie in dem aktuellen FileAPI Entwurf vorgesehen.

\[2] IE9 hat ein [File API Lab](http://html5labs.interoperabilitybridges.com/prototypes/fileapi/fileapi/info).

\[3] Opera hat [partiellen Support](http://www.opera.com/docs/specs/presto28/file/) in 11.1.

## Siehe auch

- [Zugriff auf Dateien von Webapplikationen](/de/docs/Zugriff_auf_Dateien_von_Webapplikationen)
- {{domxref("File")}}
- {{domxref("Blob")}}
- [nsIDOMFileReader](/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMFileReader) - Für addons/privileged scope
