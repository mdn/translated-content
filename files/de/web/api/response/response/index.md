---
title: Response()
slug: Web/API/Response/Response
translation_of: Web/API/Response/Response
---
{{APIRef("Fetch")}}

Der **`Response()`** Konstruktor erstellt ein neues {{domxref("Response")}} Objekt.

## Syntax

    var myResponse = new Response(body, init);

### Parameter

- `body` {{optional_inline}}
  - : Ein Objekt, welches den Body für eine Antwort definiert. Das kann entweder `null` oder eins der folgenden sein:\* {{domxref("Blob")}}
    - {{domxref("BufferSource")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("USVString")}}
- `init` {{optional_inline}}
  - : Ein Objekt mit Optionen, welches benutzerdefinierte Einstellungen enthält, die auf die Antwort angewendet werden sollen. Mögliche Optionen sind:\* `status`: Der Statuscode der Antwort, z. B. `200`.
    - `statusText`: Die Statusnachricht die dem Statuscode zugeordnet ist, z. B. `OK`.
    - `headers`: Etwaige Header die Sie Ihrer Antwort hinzufügen wollen, die einem {{domxref("Headers")}} Objekt or einem Objekt-Literal von {{domxref("ByteString")}} Schlüsselwertpaaren enthalten sind (siehe [HTTP Header](/de/docs/Web/HTTP/Headers) für Referenzen).

## Beispiel

In unserem [Beispiel für eine Fetch Antwort](https://github.com/mdn/fetch-examples/tree/master/fetch-request) ([live ausführen](http://mdn.github.io/fetch-examples/fetch-request/)) erstellen wir ein neues `Response` Objekt mit dem Konstruktor, dem wir einen neuen {{domxref("Blob")}} als Body und ein `init` Objekt übergeben, welches einen benutzerdefinierten `status` und `statusText` enthält:

```js
var myBlob = new Blob();
var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
var myResponse = new Response(myBlob,init);
```

## Spezifikationen

| Specification                                                        | Status                   | Comment             |
| -------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('Fetch','#dom-response','Response()')}} | {{Spec2('Fetch')}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Response.Response")}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/de/docs/Web/HTTP)
