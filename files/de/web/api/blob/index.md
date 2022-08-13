---
title: Blob
slug: Web/API/Blob
tags:
  - API
  - Files
  - Reference
  - TopicStub
  - checkTranslation
translation_of: Web/API/Blob
---
{{ APIRef("File API") }}

## Übersicht

Ein `Blob` ist eine dateiähnliche Menge unveränderlicher Roh-Daten, die nicht notwendigerweise native JavaScript-Daten enthalten. Das {{ domxref("File") }}-Interface basiert auf `Blob` und erweitert dessen Funktionen und die Unterstützung von Dateien auf dem System des Nutzers.

Eine einfache Methode, um einen Blob zu erstellen, ist der Aufruf des {{domxref("Blob.Blob", "Blob()")}}-Konstruktors. Anders ist es auch mit Hilfe eines Aufrufs von `slice()` möglich, einen Ausschnitt aus einem anderen Blob zu erhalten.

Die APIs, welche Blob-Objekte akzeptieren, werden ebenfalls in der {{domxref("File")}}-Dokumentation genannt.

> **Note:** Note: The `slice()` method had initially taken `length` as the second argument to indicate the number of bytes to copy into the new `Blob`. If you specified values such that `start + length`exceeded the size of the source `Blob`, the returned `Blob` contained data from the start index to the end of the source `Blob`.

> **Note:** Zu beachten: Der `slice()-`Methode kann in manchen Browsern (und Versionen) ein Vendor-Präfix vorangestellt sein. Firefox 12 und früher: `blob.mozSlice()`. Safari: `blob.webkitSlice()`. Eine alte Version von `slice()` ohne Vendor-Präfix ist überholt. Die Unterstützung von `blob.mozSlice()` wurde mit Firefox 30 eingestellt.

## Konstruktor

- {{domxref("Blob.Blob", "Blob()")}}
  - : Gibt einen neuen `Blob` zurück, dessen Inhalt das als Parameter übergebene Array in zusammengesetzter Form ist.

## Eigenschaften

- {{domxref("Blob.isClosed")}} {{readonlyinline}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die {{domxref("Blob.close()")}}-Methode zu diesem `Blob` bereits aufgerufen wurde. Geschlossene Blobs können nicht mehr ausgelesen werden.
- {{domxref("Blob.size")}} {{readonlyinline}}
  - : Gibt die Größe des `Blob`-Inhalts in Bytes zurück.
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : Ein `String,` der den MIME-Typ enthält. Ist der Typ unbekannt, ist der Rückgabe-String leer.

## Methoden

- {{domxref("Blob.close()")}} {{experimental_inline}}
  - : Schließt das `Blob`-Objekt und gibt gegebenenfalls reservierte Ressourcen frei.
- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Gibt ein neues `Blob-Objekt` zurück, das die spezifierte Menge an Daten enthält.

## Beispiele:

### Beispielanwendung des Blob-Konstruktors

Der {{domxref("Blob.Blob", "Blob() constructor")}} ermöglicht es, `Blobs` aus Objekten zu erzeugen. Beispielsweise kann man einen `Blob` von einem String-Objekt erzeugen:

    var debug = {hello: "world"};
    var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

> **Warning:** {{ domxref("BlobBuilder") }} bietet noch eine weitere Möglichkeit Blobs zu erstellen, welche mittlerweile allerdings veraltet ist und nicht mehr genutzt werden sollte.```js
> var builder = new BlobBuilder();
> var fileParts = ['<a id="a"><b id="b">hey!</b></a>'];
> builder.append(fileParts[0]);
> var myBlob = builder.getBlob('text/xml');
>
> ```
>
> ```

### Erstellen einer URL für ein "typed array" durch einen Blob

Beispiel-Code:

```js
var typedArray = EinTypedArrayErstellen();
var blob = new Blob([typedArray], {type: 'application/octet-binary'}); // ein gültiger MIME-Typ
var url = URL.createObjectURL(blob);
// Die URL wird etwa so sein: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// Nun kann die URL überall genutzt werden, wo URLs verwendung finden, z.B. in Bildquellen (image.src)
```

### Daten aus einem Blob lesen

Um Daten aus einem Blob zu lesen, muss ein {{domxref("FileReader")}} genutzt werden. Der folgende Code liest den Inhalt eines Blobs als ein typisiertes Array aus.

```js
var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result beinhaltet den Inhalt des Blobs
});
reader.readAsArrayBuffer(blob);
```

Über eine andere Methode von {{domxref("FileReader")}} ist es möglich, den Inhalt eines Blobs als String oder Data-URL zu lesen.

## Spezifikationen

| Spezifikation                                        | Status                       | Hinweis                 |
| ---------------------------------------------------- | ---------------------------- | ----------------------- |
| {{SpecName('File API','#blob','Blob')}} | {{Spec2('File API')}} | Grundlegende Definition |

## Browser-Kompatibilität

{{CompatibilityTable}}

| Feature                 | Chrome                                         | Firefox (Gecko)                              | Internet Explorer        | Opera                    | Safari (WebKit)                              |
| ----------------------- | ---------------------------------------------- | -------------------------------------------- | ------------------------ | ------------------------ | -------------------------------------------- |
| Basic support           | 5[1]                                           | 4[2]                                         | 10                       | 11.10[1]                 | 5.1[1]                                       |
| `slice()`               | 10 {{property_prefix("webkit")}} 21 | 5 {{property_prefix("moz")}}[3] 13 | 10                       | 12                       | 5.1 {{property_prefix("webkit")}} |
| `Blob()`constructor     | 20                                             | {{CompatGeckoDesktop("13.0")}}     | 10                       | 12.10                    | 6                                            |
| `close()`and `isClosed` | {{CompatUnknown}}                       | {{CompatNo}}[4]                          | {{CompatUnknown}} | {{CompatUnknown}} | {{CompatUnknown}}                     |

| Feature                 | Android                  | Firefox Mobile (Gecko)                   | IE Phone                 | Opera Mobile             | Safari Mobile            |
| ----------------------- | ------------------------ | ---------------------------------------- | ------------------------ | ------------------------ | ------------------------ |
| Basic support           | {{CompatUnknown}} | {{CompatGeckoMobile("13.0")}} | {{CompatUnknown}} | {{CompatUnknown}} | {{CompatUnknown}} |
| `slice()`               | {{CompatUnknown}} | {{CompatUnknown}}                 | {{CompatUnknown}} | {{CompatUnknown}} | {{CompatUnknown}} |
| `Blob()`constructor     | {{CompatUnknown}} | {{CompatUnknown}}                 | {{CompatUnknown}} | {{CompatUnknown}} | {{CompatUnknown}} |
| `close()`and `isClosed` | {{CompatUnknown}} | {{CompatNo}}[4]                      | {{CompatUnknown}} | {{CompatUnknown}} | {{CompatUnknown}} |

### Anmerkung zur slice()-Implementierung

\[1] Eine Version von `slice()`, die als zweites Argument die gewünschte Größe enthält, war in [WebKit](http://trac.webkit.org/changeset/55670) und [Opera 11.10](http://www.opera.com/docs/specs/presto28/file/#blob) implementiert. Da sich jedoch diese Syntax von {{jsxref("Array/slice", "Array.slice()")}} und {{jsxref("String/slice", "String.slice()")}} unterschied, wurde die Unterstützung in WebKit fallen gelassen zu Gunsten der neuen Syntax von `Blob.webkitSlice().`

\[2] Eine Variante von `slice()`, die als zweites Argument die gewünschte Größe enthält, war in [Firefox 4](https://hg.mozilla.org/mozilla-central/rev/1b3947ed93c6) verfügbar. Da sich jedoch diese Syntax von {{jsxref("Array/slice", "Array.slice()")}} und {{jsxref("String/slice", "String.slice()")}} unterschied, wurde diese Unterstützung in Gecko fallen gelassen zu Gunsten der neuen Syntax von `mozSlice()`.

\[3] Vor Gecko 12.0 {{ geckoRelease("12.0") }} trat ein Fehler im Verhalten von slice() auf; die erste und letzte Position außerhalb des Bereichs von 64-Bit-Werten wurden fehlerhaft verarbeitet, was nun für vorzeichenlose 64-Bit-Werte behoben wurde.

\[4] Siehe {{bug("1048325")}}

### Anmerkungen zu Gecko

Vor Gecko 12.0 {{ geckoRelease("12.0") }} gab es einen Bug, der das Verhalten von [slice](#slice) beinflusste. Bei Start- und Endpositionen außerhalb von vorzeichenbehafteten 64-Bit-Werten funktionierte die Methode nicht. Dieser Bug wurde mittlerweile behoben und vorzeichenlose 64-Bit-Werte sind nun möglich.

## Chrome Code - Scope

Um Blobs im Chrome Code, JSM und Bootstrap Scope zu verwenden, müssen sie folgendermaßen importiert werden:

```js
Cu.importGlobalProperties(['Blob']);
```

`Blobs` sind auch in Worker-Scopes verfügbar.

## Siehe auch

- {{ domxref("BlobBuilder") }}
- {{ domxref("File") }}
- {{ domxref("URL.createObjectURL") }}
- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)
