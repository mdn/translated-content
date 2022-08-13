---
title: ReadableStream
slug: Web/API/ReadableStream
tags:
  - API
  - Fetch
  - Interface
  - Reference
  - Streams
translation_of: Web/API/ReadableStream
---
{{APIRef("Streams")}}{{SeeCompatTable}}

Das `ReadableStream` Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen lesbaren Datenstrom von Bytes.

## Konstruktor

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}
  - : Erstellt eine Instanz des `ReadableStream` Interfaces.

## Eigenschaften

- {{domxref("ReadableStream.locked")}} {{readonlyInline}}
  - : Gibt zurück, ob der Stream bereits für einen Reader gesperrt ist.

## Methoden

- {{domxref("ReadableStream.cancel()")}}
  - : Bricht den Stream ab und signalisiert dadurch, dass der Konsument sein Interesse am Stream verloren hat. Das angegebene `reason` Argument wird an die darunterliegende Quelle weitergegeben, welche dieses benutzen kann.
- {{domxref("ReadableStream.getReader()")}}
  - : Erstellt einen Reader, dessen Typ durch die `mode` Option angegeben wird, und sperrt den Stream für den neuen Reader. Während der Stream gesperrt ist kann kein anderer Reader angelegt werden bis dieser freigegeben wurde.
- {{domxref("ReadableStream.getIterator()")}}
  - : Erstellt einen asyncronen ReadableStream-Iterator und sperrt den Stream für ihn, sodass der Iterator der einzige Leser ist. Während der Stream gesperrt ist kann kein anderer Reader angelegt werden bis dieser freigegeben wurde.
- {{domxref("ReadableStream.pipeThrough()")}}
  - : Bietet die Möglichkeit den Stream mit transformierenden Streams zu verketten.
- {{domxref("ReadableStream.pipeTo()")}}
  - : Pipet den aktuellen `ReadableStream` zu einem gegebenen {{domxref("WritableStream")}} und gibt ein {{domxref("Promise")}} zurück welches erfüllt ist, wenn der Piping-Prozess erfolgreich beendet wurde oder verwirft es, wenn irgendein anderer Fehler auftritt.
- {{domxref("ReadableStream.tee()")}}
  - : Verzweigt den `ReadableStream` in zwei neue Stream-Instanzen, auf denen parallel gelesen werden kann.
- {{domxref("ReadableStream[@@asyncIterator]()")}}
  - : Alias der `getIterator`-Methode.

## Benutzung

Im folgenden Beispiel wird eine {{domxref("Response")}} erzeugt, die HTML-Fragmente einer anderen Ressource fetched und an den Browser streamt.

Dadurch wird die Benutzung von {{domxref("ReadableStream")}} in Kombination mit {{domxref("Uint8Array")}} gezeigt.

```js
fetch("https://www.example.org/").then((response) => {
  const reader = response.body.getReader();
  const stream = new ReadableStream({
    start(controller) {
      // Die folgende Funktion behandelt jeden Daten-Chunk
      function push() {
        // "done" ist ein Boolean und "value" ein "Uint8Array"
        return reader.read().then(({ done, value }) => {
          // Gibt es weitere Daten zu laden?
          if (done) {
            // Teile dem Browser mit, dass wir fertig mit dem Senden von Daten sind
            controller.close();
            return;
          }

          // Bekomme die Daten und sende diese an den Browser durch den Controller weiter
          controller.enqueue(value);
        }).then(push);
      };

      push();
    }
  });

  return new Response(stream, { headers: { "Content-Type": "text/html" } });
});
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar          |
| -------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('Streams','#rs-class','ReadableStream')}} | {{Spec2('Streams')}} | Initial definition |

## Browserkompatibilität

{{Compat("api.ReadableStream")}}
