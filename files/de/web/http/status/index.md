---
title: HTTP response status codes
slug: Web/HTTP/Status
tags:
  - HTTP
  - NeedsTranslation
  - Status codes
  - TopicStub
translation_of: Web/HTTP/Status
---
{{HTTPSidebar}}

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Die Antworten sind in fünf Klassen eingeteilt:

1. Informative Antworten (100-199)
2. Erfolgreiche Antworten (200-299)
3. Umleitungen (300-399)
4. Client-Fehler (400-499)
5. Server-Fehler (500-599)

Die folgenden Statuscodes sind in [Abschnitt 10 von RFC 2616](https://tools.ietf.org/html/rfc2616#section-10) definiert. Eine aktualisierte Spezifikation finden Sie in [RFC 7231](https://tools.ietf.org/html/rfc7231#section-6.5.1).

## Informative Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort zeigt an, dass bisher alles in Ordnung ist und dass der Client mit der Anfrage fortfahren oder sie ignorieren sollte, wenn sie bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocol")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}} Request-Header vom Client gesendet und zeigt an, dass auch der Server das Protokoll wechselt. Er wurde eingeführt, um die Migration zu einer inkompatiblen Protokollversion zu ermöglichen, und wird nicht häufig verwendet.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : Dieser Code zeigt an, dass der Server die Anfrage erhalten hat und bearbeitet, aber noch keine Antwort verfügbar ist.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist in erster Linie für die Verwendung mit dem {{HTTPHeader("Link")}} Header vorgesehen, damit der Benutzeragent mit dem [Vorladen](/de/docs/Web/HTML/Preloading_content) von Ressourcen beginnen kann, während der Server eine Antwort vorbereitet.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage ist erfolgreich. Die Bedeutung eines Erfolgs hängt von der HTTP-Methode ab​​​​:\* `GET`: Die Ressource wurde geholt und wird im Nachrichtentext übertragen.
    - `HEAD`: Die Entity-Header befinden sich im Nachrichtenkörper.
    - `POST`: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Hauptteil der Nachricht übertragen.
    - `TRACE`: Der Hauptteil der Nachricht enthält die vom Server empfangene Anforderungsnachricht.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich, und als Ergebnis wurde eine neue Ressource geschaffen. Dies ist normalerweise die Antwort, die nach einer PUT-Anforderung gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage ist eingegangen, aber noch nicht bearbeitet worden. Sie ist unverbindlich, was bedeutet, dass es in HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Bearbeitung der Anfrage anzeigt. Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet, oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass der zurückgesendete Metainformationssatz nicht exakt dem Satz entspricht, der auf dem ursprünglichen Server verfügbar war, sondern von einer lokalen Kopie oder einer Kopie eines Drittanbieters gesammelt wurde. Abgesehen von dieser Bedingung sollten 200 OK-Antworten anstelle dieser Antwort bevorzugt werden.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt, den man für diese Anfrage senden kann, aber die Kopfzeilen können nützlich sein. Der Benutzer-Agent kann seine zwischengespeicherten Header für diese Ressource mit den neuen Header aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Dieser Antwortcode wird nach dem Ausführen der Anforderung gesendet, um dem Benutzeragenten mitzuteilen, der diese Anforderung gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird aufgrund des vom Client gesendeten Range-Headers verwendet, um den Download in mehrere Streams zu trennen.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>` Antwortelements verwendet, um die wiederholte Aufzählung der internen Mitglieder mehrerer Bindungen zu derselben Sammlung zu vermeiden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : Der Server hat eine `GET`-Anforderung für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer auf die aktuelle Instanz angewandter Instanzmanipulationen.

## Umleitungen

- {{HTTPStatus(300, "300 Multiple Choice")}}
  - : Die Anfrage hat mehr als eine mögliche Antwort. Der Benutzer-Agent oder Benutzer sollte eine davon auswählen. Es gibt keine standardisierte Möglichkeit, eine der Antworten auszuwählen.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Dieser Antwortcode bedeutet, dass der URI der angeforderten Ressource geändert wurde. Wahrscheinlich wird in der Antwort eine neue URI angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass der URI der angeforderten Ressource _vorübergehend_ geändert wurde. Möglicherweise werden in der Zukunft neue Änderungen an der URI vorgenommen. Daher sollte derselbe URI vom Kunden in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server sandte diese Antwort an den Client, um die angeforderte Ressource mit einer GET-Anforderung an eine andere URI zu leiten.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Cache-Zwecke verwendet. Es teilt dem Client mit, dass die Antwort nicht geändert wurde. Der Client kann also weiterhin dieselbe zwischengespeicherte Version der Antwort verwenden.
- {{HTTPStatus(305, "305 Use Proxy")}}
  - : Das bedeutet, dass ein Proxy auf die angeforderte Antwort zugreifen muss. Dieser Response-Code wird aus Sicherheitsgründen weitgehend nicht unterstützt.
- {{HTTPStatus(306, "306 unused")}} {{deprecated_inline}}
  - : Dieser Antwortcode wird nicht mehr verwendet, er ist derzeit nur reserviert. Er wurde in einer früheren Version der HTTP 1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server schickte diese Antwort an den Client, um die angeforderte Ressource an eine andere URI mit derselben Methode zu senden, die die vorherige Anforderung verwendete. Dies hat die gleiche Semantik wie der `302 Found` HTTP Response Code, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anforderung ein `POST` verwendet wurde, muss in der zweiten Anforderung ein `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass sich die Ressource nun _dauerhaft_ an einem anderen, vom `Location:` angegebenen URI befindet: HTTP-Antwort-Header angegeben wird. Dies hat die gleiche Semantik wie der `301 Moved Permanently` HTTP Response Code, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anfrage ein `POST` verwendet wurde, muss in der zweiten Anfrage ein `POST` verwendet werden.

## Antworten auf Client-Fehler

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Diese Antwort bedeutet, dass der Server die Anfrage aufgrund einer ungültigen Syntax nicht verstehen konnte.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Eine Authentifizierung ist erforderlich, um die angeforderte Antwort zu erhalten. Dies ist ähnlich wie bei 403, aber in diesem Fall ist eine Authentifizierung möglich.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Dieser Antwortcode ist für die zukünftige Verwendung reserviert. Ursprüngliches Ziel bei der Erstellung dieses Codes war es, ihn für digitale Zahlungssysteme zu verwenden, doch wird er derzeit nicht verwendet.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt, daher verweigert der Server eine ordnungsgemäße Antwort.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Server kann angeforderte Ressource nicht finden. Dieser Antwort-Code ist wahrscheinlich der bekannteste aufgrund seiner Häufigkeit, mit der er im Web auftritt.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die Anfragemethode ist dem Server bekannt, wurde jedoch deaktiviert und kann nicht verwendet werden. Die beiden obligatorischen Methoden, `GET` und `HEAD`, dürfen niemals deaktiviert werden und sollten diesen Fehlercode nicht zurückgeben.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung der [servergesteuerten Inhaltsaushandlung](/de/docs/HTTP/Content_negotiation#Server-driven_negotiation) nach den vom Benutzer-Agenten vorgegebenen Kriterien keinen Inhalt findet.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie 401, aber die Authentifizierung muss von einem Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern auf einer inaktiven Verbindung gesendet, auch ohne vorherige Anfrage durch den Client. Das bedeutet, dass der Server diese unbenutzte Verbindung abschalten möchte. Diese Antwort wird viel häufiger verwendet, da einige Browser, wie Chrome oder IE9, [HTTP-Vorverbindungsmechanismen](http://www.belshe.com/2011/02/10/the-era-of-browser-preconnect/) verwenden, um das Surfen zu beschleunigen (siehe {{bug(634278)}}, der die zukünftige Implementierung eines solchen Mechanismus in Firefox verfolgt). Beachten Sie auch, dass einige Server lediglich die Verbindung unterbrechen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort würde gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt gerät.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort würde gesendet, wenn der angeforderte Inhalt vom Server gelöscht wurde.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server lehnte die Anforderung ab, weil das Header-Feld `Content-Length` nicht definiert ist und der Server sie benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Der Client hat in seinen Headern Vorbedingungen angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : Anforderungsentität ist größer als die vom Server definierten Grenzen; der Server könnte die Verbindung schließen oder ein `Retry-After` Header-Feld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Der vom Client angeforderte URI ist länger, als der Server zu interpretieren bereit ist.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Requested Range Not Satisfiable")}}
  - : Der durch das Header-Feld `Range` in der Anforderung angegebene Bereich kann nicht erfüllt werden; es ist möglich, dass der Bereich außerhalb der Größe der Daten des Ziel-URIs liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwort-Code bedeutet, dass die im Header-Feld `Expect` request angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage war an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu produzieren. Diese kann von einem Server gesendet werden, der nicht so konfiguriert ist, dass er Antworten für die Kombination aus Schema und Autorität erzeugt, die im Anforderungs-URI enthalten sind.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server weigert sich, die Anforderung mit dem aktuellen Protokoll auszuführen, ist aber möglicherweise bereit, dies zu tun, nachdem der Client auf ein anderes Protokoll aktualisiert wurde. Der Server MUSS ein Upgrade-Header-Feld in einer 426-Antwort senden, um das/die erforderliche(n) Protokoll(e) anzugeben ([Abschnitt 6.7 von \[RFC7230\]](https://tools.ietf.org/html/rfc7230#section-6.7)).
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage bedingt ist. Damit soll "das Problem der 'verlorenen Aktualisierung' verhindert werden, bei dem ein Client den Zustand einer Ressource GETs, modifiziert sie und PUTs zurück an den Server sendet, wenn inzwischen eine dritte Partei den Zustand auf dem Server modifiziert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat in einer bestimmten Zeitspanne zu viele Anfragen gesendet ("rate limiting").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Header-Felder zu groß sind. Die Anfrage KANN nach Reduzierung der Größe der Anfrage-Header-Felder erneut eingereicht werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzer fordert eine illegale Ressource an, z.B. eine Webseite, die von einer Regierung zensiert wurde.

## Antworten auf Server-Fehler

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, mit der er nicht umzugehen weiß.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die vom Server unterstützt werden müssen (und die daher diesen Code nicht zurückgeben dürfen), sind `GET` und `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerreaktion bedeutet, dass der Server, während er als Gateway arbeitete, um eine Antwort zu erhalten, die zur Bearbeitung der Anfrage erforderlich ist, eine ungültige Antwort erhielt.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten. Häufige Ursachen sind ein Server, der wegen Wartungsarbeiten ausfällt oder überlastet ist. Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt. Diese Antworten sollten für vorübergehende Bedingungen und `Retry-After:` verwendet werden: HTTP-Header sollte, wenn möglich, die geschätzte Zeit vor der Wiederherstellung des Dienstes enthalten. Der Webmaster muss sich auch um die Caching-bezogenen Header kümmern, die zusammen mit dieser Antwort gesendet werden, da diese Antworten auf temporäre Bedingungen normalerweise nicht im Cache gespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und nicht rechtzeitig eine Antwort erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server weist einen internen Konfigurationsfehler auf: Die gewählte Ressourcenvariante ist so konfiguriert, dass sie selbst transparente Inhaltsverhandlungen führt und daher kein geeigneter Endpunkt im Vermittlungsprozess ist.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV")}})
  - : Die Methode konnte auf der Ressource nicht ausgeführt werden, weil der Server nicht in der Lage ist, die Darstellung zu speichern, die zum erfolgreichen Abschluss der Anfrage erforderlich ist.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : Der Server hat bei der Verarbeitung der Anfrage eine Endlosschleife festgestellt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Damit der Server den Antrag erfüllen kann, sind weitere Erweiterungen des Antrags erforderlich.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Der Statuscode 511 zeigt an, dass sich der Client authentifizieren muss, um Zugang zum Netzwerk zu erhalten.
