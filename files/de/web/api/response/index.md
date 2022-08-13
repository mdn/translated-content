---
title: Response
slug: Web/API/Response
translation_of: Web/API/Response
---
{{APIRef("Fetch API")}}

Die **`Response`** Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Antwort auf eine Anfrage dar.

Sie können ein neues `Response`-Objekt mithilfe des Konstruktors {{domxref("Response.Response()")}} erstellen. Es ist jedoch wahrscheinlicher, dass Sie ein Response-Objekt als Rückgabewert einer API Operation erhalten, z. B. durch einen Service Worker {{domxref("Fetchevent.respondWith")}} oder ein simples {{domxref("GlobalFetch.fetch()")}}.

## Konstruktor

- {{domxref("Response.Response","Response()")}}
  - : Erstell ein neues `Response` Objekt.

## Eigenschaften

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : Enthält das {{domxref("Headers")}} Objekt der Antwort.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : Enthält einen boolschen Wert, ob die anfrage Erfolgreich war (Status im Bereich von 200-299) oder nicht.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Antwort das Ergebnis einer Weiterleitung ist, d. h. die URL-Liste enthält mehrere Einträge.
- {{domxref("Response.status")}} {{readonlyinline}}
  - : Enthält den Status-Code der Antwort (z. B. `200` bei Erfolg).
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : Enthält die Statusmeldung, die dem Statuscode entspricht (z. B. `OK` für `200`).
- {{domxref("Response.type")}} {{readonlyinline}}
  - : Enthält den Typ der Antwort (z. B. `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : Enthält die URL der Antwort.
- {{domxref("Response.useFinalURL")}}
  - : Enthält einen booleschen Wert, der angibt, ob dies die endgültige URL der Antwort ist.

`Response` implementiert {{domxref("Body")}}, daher stehen darüber hinaus auch folgende Eigenschaften zur Verfügung:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : Ein einfacher Getter, der verwendet wird, um einen {{domxref("ReadableStream")}} des Body-Inhalts verfügbar zu machen.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Speichert einen {{domxref("Boolean")}}, der angibt, ob der Body bereits in einer Antwort verwendet wurde.

## Methoden

- {{domxref("Response.clone()")}}
  - : Klont `Response` Objekt.
- {{domxref("Response.error()")}}
  - : Gibt ein neues `Response` Objekt zurück, das einem Netzwerkfehler zugeordnet ist.
- {{domxref("Response.redirect()")}}
  - : Erstellt eine neue Antwort mit einer anderen URL.

`Response` implementiert {{domxref("Body")}}, daher stehen darüber hinaus auch folgende Methoden zur Verfügung:

- {{domxref("Body.arrayBuffer()")}}
  - : Nimmt einen {{domxref("Response")}} Stream und liest ihn bis zum Ende. Gibt ein Promise zurück, welches in einen {{domxref("ArrayBuffer")}} aufgelöst wird.
- {{domxref("Body.blob()")}}
  - : Nimmt einen {{domxref("Response")}} Stream und liest ihn bis zum Ende. Gibt ein Promise zurück, welches in einen {{domxref("Blob")}} aufgelöst wird.
- {{domxref("Body.formData()")}}
  - : Nimmt einen {{domxref("Response")}} Stream und liest ihn bis zum Ende. Gibt ein Promise zurück, welches in einen {{domxref("FormData")}} Objekt aufgelöst wird.
- {{domxref("Body.json()")}}
  - : Nimmt einen {{domxref("Response")}} Stream und liest ihn bis zum Ende. Gibt ein Promise zurück, welches den Inhalt des Body als {{jsxref("JSON")}} einliest.
- {{domxref("Body.text()")}}
  - : Nimmt einen {{domxref("Response")}} Stream und liest ihn bis zum Ende. Gibt ein Promise zurück, welches in einen {{domxref("USVString")}} (Text) aufgelöst wird.

## Beispiele

In unserem [grundlegenden Beispiel zu Fetch](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([Beispiel live ausführen](https://mdn.github.io/fetch-examples/basic-fetch/)) verwenden wir einen einfachen Aufruf von `fetch()`, um ein Bild abzurufen und es in einem {{htmlelement("img")}} Tag anzuzeigen. Der Aufruf von `fetch()` gibt ein Promise zurück, das zu einem Response Objekt aufgelöst wird, welches mit der Anforderung der Ressource verknüpft ist. Da wir ein Bild anfordern, werden Sie feststellen, dass wir {{domxref("Body.blob")}} ausführen müssen ({{domxref("Response")}} implementiert `Body`), um der Antwort den richtigen MIME-Type zuzuordnen.

```js
const image = document.querySelector('.my-image');
fetch('flowers.jpg').then(function(response) {
  return response.blob();
}).then(function(blob) {
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
});
```

Sie können auch den {{domxref("Response.Response()")}} Konstruktor verwenden, um Ihr eigenes benutzerdefiniertes `Response` Objekt zu erstellen:

```js
const response = new Response();
```

## Spezifikationen

| Specification                                                        | Status                   | Comment            |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#response-class','Response')}} | {{Spec2('Fetch')}} | Initial definition |

## Browserkompatibilität

{{Compat("api.Response")}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/de/docs/Web/HTTP)
