---
title: HTTP Header
slug: Web/HTTP/Headers
translation_of: Web/HTTP/Headers
---
{{HTTPSidebar}}

HTTP Header (Kopfzeilen) erlauben es dem Client und Server zusätzliche Informationen an eine Anfrage oder eine Antwort zu übergeben. Ein HTTP Header besteht aus seinem Namen (Groß-/Kleinschreibung unwichtig), gefolgt von einem Doppelpunkt '`:`' und dem Wert (ohne Zeilenumbrüche). Führender Leerraum vor dem Wert wird ignoriert.

Benutzerdefinierte, proprietäre Header können mit einem 'X-' Präfix hinzugefügt werden, diese Konvention wurde jedoch im Juni 2012 missbilligt, da es Unannehmlichkeiten verursachte, als nicht standardisierte Felder in {{rfc(6648)}} standardisiert wurden; andere sind im [IANA Register](https://www.iana.org/assignments/message-headers/perm-headers.html) aufgeführt, dessen ursprünglicher Inhalt in {{rfc(4229)}} definiert wurde. Die IANA pflegt auch ein [Register mit Vorschlägen für neue HTTP Header](https://www.iana.org/assignments/message-headers/prov-headers.html).

Header können gemäß ihres Kontexts gruppiert werden:

- {{Glossary("General header")}}: Header die sowohl für Anfragen als auch für Antworten zutreffen, jedoch keinen Bezug zu den Daten haben, die eventuell im Body übertragen werden.
- {{Glossary("Request header")}}: Header die weitere Informationen über die angeforderte Ressource oder den Client selbst enthalten.
- {{Glossary("Response header")}}: Header mit weiteren Informationen zur Antwort, wie etwa ihres Orts oder den Server selbst (Name und Version etc.)
- {{Glossary("Entity header")}}: Header die weitere Informationen über den Body der Entität enthalten, wie etwa der Inhaltslänge oder ihren MIME-Type.

Header können auch danach gruppiert werden, wie Proxys sie verarbeiten:

- End-to-end Header
  - : Diese Header müssen an den endgültigen Empfänger der Nachricht übermittelt werden, d. h. den Server für eine Anfrage oder den Client für eine Antwort. Zwischen-Proxys müssen unmodifizierte End-to-end-Header erneut übertragen und zwischenspeichern.
- Hop-by-hop Header
  - : Diese Header sind nur für eine einzelne Verbindung auf Transportebene von Bedeutung und dürfen nicht von Proxys erneut übertragen oder zwischengespeichert werden. Solche Header sind: {{httpheader("Connection")}}, {{httpheader("Keep-Alive")}}, {{httpheader("ProxyAuthenticate")}}, {{httpheader("Proxy-Authorization")}}, {{httpheader("TE")}}, {{httpheader("Trailer")}}, {{httpheader("Transfer-Encoding")}} und {{httpheader("Upgrade")}}. Beachten Sie, dass nur Hop-by-hop Header mit dem allgemeinen Header {{httpheader("Connection")}} festgelegt werden können.

In der folgenden Liste werden die HTTP Header nach ihrer Verwendungskategorie zusammengefasst. Eine alphabetische Liste finden Sie in der Navigation auf der linken Seite.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um Zugriff auf eine Ressource zu erhalten.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen zum Authentifizieren eines Benutzer-Agenten an einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um Zugriff auf eine Ressource hinter einem Proxyserver zu erhalten.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen zum Authentifizieren eines Benutzer-Agenten an einem Proxyserver.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die sich das Objekt in einem Proxy-Cache befunden hat.
- {{HTTPHeader("Cache-Control")}}
  - : Gibt Anweisungen für Cache-Mechanismen in Anfragen und Antworten an.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Storage, Cache), die der anfragenden Website zugeordnet sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum und die Uhrzeit, nach der die Antwort als veraltet gilt.
- {{HTTPHeader("Pragma")}}
  - : Implementierungsspezifischer Header, der entlang der Anfrage-Antwort-Kette verschiedene Auswirkungen haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0 Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}}
  - : Ein allgemeines Warnfeld, das Informationen zu möglichen Problemen enthält.

## Client Hints

HTTP Client Hints befinden sich noch in der Entwicklung. Dokumentation hierzu befindet sich auf der [Webseite der HTTP Working Group](https://httpwg.org/http-extensions/client-hints.html).

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : Server können Unterstützung für Clienthinweise unter Verwendung des Headerfelds Accept-CH oder eines entsprechenden HTML {{htmlelement("meta")}} Element mit dem Attribut http-equiv attribute ([\[HTML5\]](https://httpwg.org/http-extensions/client-hints.html#HTML5)) ankündigen.
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}}
  - : Server können den Client auffordern, sich an die vom Client für einen bestimmten Zeitraum unterstützten Client Hints zu erinnern, um die Zustellung von Client hints für nachfolgende Anfragen an den Ursprung des Servers zu ermöglichen ([\[RFC6454\]](https://httpwg.org/http-extensions/client-hints.html#RFC6454)).
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anforderung in frühen Daten übermittelt wurde.
- {{HTTPHeader("Content-DPR")}} {{experimental_inline}}
  - : Das `Content-DPR` Antwort Header-Feld ist eine Zahl, die das Verhältnis zwischen physischen Pixeln und CSS Pixeln des ausgewählten Bilds als Antwort angibt.
- {{HTTPHeader("DPR")}} {{experimental_inline}}
  - : Das `DPR` Anfrage-Header-Feld ist eine Zahl, die das aktuelle Geräte-Pixelverhältnis (Device Pixel Ratio (DPR)) des Clients angibt. Hierbei handelt es sich um das Verhältnis der physischen Pixel zu CSS Pixeln (Abschnitt 5.2 von [\[CSSVAL\]](https://httpwg.org/http-extensions/client-hints.html#CSSVAL)) des Layout Viewport (Abschnitt 9.1.1 von [\[CSS2\]](https://httpwg.org/http-extensions/client-hints.html#CSS2)) auf dem Gerät.
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Das [`SaveData`](https://wicg.github.io/netinfo/#dom-networkinformation-savedata) \[[CLIENT-HINTS](https://wicg.github.io/netinfo/#bib-client-hints)] Anfrage-Header-Feld besteht aus einem oder mehreren Token, die die Präferenz des Benutzer-Agenten für eine reduzierte Datennutzung angeben.
- {{HTTPHeader("Viewport-Width")}} {{experimental_inline}}
  - : Das `Viewport-Width` Anfrage-Header-Feld ist eine Zahl, die die Breite des Layout Viewport in CSS Pixeln angibt. Der gegebene CSS Pixel Wert ist eine Zahl, die auf die kleinste folgende Ganzzahl (d. h. den Höchstwert) gerundet wird.Wenn `Viewport-Width` mehr als einmal in einer Nachricht vorkommt, dann überschreibt der letzte Wert alle vorherigen.
- {{HTTPHeader("Width")}} {{experimental_inline}}
  - : Das `Width` Anfrage-Header-Feld ist eine Zahl, die die gewünschte Ressourcenbreite in physischen Pixeln angibt (d. h. eigentliche Größe eines Bildes). Der gegebene physikalische Pixel Wert ist eine Zahl, die auf die kleinste folgende Ganzzahl (d. h. den Höchstwert) gerundet ist.Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anforderung nicht bekannt ist oder die Ressource keine Anzeigebreite aufweist, kann das Header-Feld `Width` weggelassen werden. Wenn `Width` mehr als einmal in einer Nachricht vorkommt, dann überschreibt der letzte Wert alle vorherigen.

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : Server können Support für Client Hints bekanntgeben, indem das Accept-CH Header-Feld oder das entsprechende HTML {{htmlelement("meta")}} Element mit http-equiv Attribut benutzt wird ([\[HTML5\]](https://httpwg.org/http-extensions/client-hints.html#HTML5)).

- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}}
  - : Servers can ask the client to remember the set of Client Hints that the server supports for a specified period of time, to enable delivery of Client Hints on subsequent requests to the server’s origin ([\[RFC6454\]](https://httpwg.org/http-extensions/client-hints.html#RFC6454)).
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Indicates that the request has been conveyed in early data.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Ein Validator mit dem letzten Änderungsdatum der Ressource, mit welchem mehrere Versionen derselben Ressource miteinander verglichen werden. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anforderungen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, verwenden diesen Wert, um das Verhalten der Anforderung zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein Validator für eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anforderungen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert um das Verhalten der Anfrage zu verändern.
- {{HTTPHeader("If-Match")}}
  - : Knüpft die Anfrage an eine Bedingung und wendet die Methode nur dann an, wenn die gespeicherte Ressource einem der gegebenen ETags entspricht.
- {{HTTPHeader("If-None-Match")}}
  - : Knüpft die Anfrage an eine Bedingung und wendet die Methode nur dann an, wenn die gespeicherte Ressource keinem der gegebenen ETags entspricht. Dies kann dazu benutzt werden, um Caches zu aktualisieren (für sichere Anfragen) oder um zu verhindern, eine neue Ressource hochzuladen, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Knüpft die Anfrage an eine Bedingung und erwartet, dass die Entität nur dann übertragen wird, wenn sie nach einem gegebenem Datum modifiziert wurde. Dies kann dazu benutzt werden, nur dann Daten zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Knüpft die Anfrage an eine Bedingung und erwartet, dass die Entität nur dann übertragen wird, wenn sie nach einem gegebenem Datum nicht modifiziert wurde. Dies kann dazu benutzt werden, um die Stimmigkeit eines neuen Fragments eines bestimmten Bereichs mit vorherigen zu gewährleisten oder ein optimistisches Parallelitätskontrollsystem beim Modifizieren existierender Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Legt fest, wie zukünftige Anfrage Header abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung geöffnet bleiben soll, nachdem die aktuelle Transaktion beendet ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine dauerhafte Verbindung geöffnet bleiben soll.

## [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)

- {{HTTPHeader("Accept")}}
  - : Setzt den Server darüber in Kenntnis, welche Art Daten zurückgesendet werden können (als MIME-Type).
- {{HTTPHeader("Accept-Charset")}}
  - : Setzt den Server darüber in Kenntnis, welchen Zeichensatz der Client versteht.
- {{HTTPHeader("Accept-Encoding")}}
  - : Setzt den Server über den Kodierungs-Algorithmus in Kenntnis, üblicherweise ein Kompressionsalgorithmus, der bei Rücksendung einer Ressource benutzt werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Setzt den Server über die Sprache in Kenntnis, in welcher er zurücksenden soll. Dies ist ein Hinweis und nicht zwangsweise unter vollständiger Kontrolle des Benutzers: der Server sollte stets darauf achten eine explizite Benutzerauswahl nicht zu überschreiben (etwa die ausgewählte Sprache einer Dropdown-Liste).

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt an, welchen Anforderungen der Server erfüllen muss, um die Anfrage ordnungsgemäß bearbeiten zu können.
- {{HTTPHeader("Max-Forwards")}}
  - : Eine Ganzzahl, welche die maximal erlaubte Anzahl an Weiterleitungen festlegt. Bei jeder Weiterleitung durch ein Gateway oder einen Proxy wird der Wert um 1 reduziert. Erreicht er 0 bevor die Anfrage ihr Ziel erreicht wird diese verworfen.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem Header {{HTTPHeader("Set-Cookie")}} gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agenten.
- {{HTTPHeader("Cookie2")}} {{obsolete_inline}}
  - : Enthielt ein HTTP-Cookie, welches zuvor vom Server mit dem Header {{HTTPHeader("Set-Cookie2")}} gesendet wurde, gilt durch die Spezifikation jedoch mittlerweile als veraltet. Benutzen Sie stattdessen {{HTTPHeader("Cookie")}}.
- {{HTTPHeader("Set-Cookie2")}} {{obsolete_inline}}
  - : Sendete Cookies vom Server an den Benutzer-Agenten, gilt durch die Spezifikation jedoch mittlerweile als veraltet. Benutzen Sie stattdessen {{HTTPHeader("Set-Cookie")}}.

## Cross-origin Resource Sharing (CORS)

_Erfahren Sie [hier](/de/docs/Web/HTTP/CORS) mehr zu Cross-origin Resource Sharing (CORS)._

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage verfügbar gemacht werden kann, wenn das Kennzeichen für Anmeldedaten wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Vor-Anfrage verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methode(n) an, die beim Zugriff auf die Ressource als Antwort auf eine Vor-Anfrage zulässig sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort verfügbar gemacht werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Vor-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Vor-Anfrage ausgegeben wird, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anforderung verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Vor-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anforderung verwendet wird.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
  - : Der Header [Cross-Origin-Resource-Policy](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header) verhindert, dass andere Domänen die Ressourcen laden.

- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt die Ursprünge an, die Werte von Attributen anzeigen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Resource_Timing_API) abgerufen werden, die andernfalls aufgrund von Ursprungsbeschränkungen als Null gemeldet werden.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine domänenübergreifende Richtliniendatei (XML) zulässig ist. In der Datei kann eine Richtlinie definiert werden, mit der Web-Clients wie Adobe Flash Player oder Adobe Acrobat (z. B. PDF) die Erlaubnis erteilt werden darf, Daten zwischen Domänen zu verarbeiten.

## Do Not Track

- {{HTTPHeader("DNT")}}
  - : Wird verwendet, um die Tracking-Einstellung des Benutzers auszudrücken.
- {{HTTPHeader("Tk")}}
  - : Gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt (Standardverhalten, wenn der Header nicht vorhanden ist) oder als Download behandelt werden und der Browser einen "Speichern unter" Dialog anzeigen soll.

## Informationen zum Nachrichtenrumpf (Body)

- {{HTTPHeader("Content-Length")}}
  - : Gibt die Größe des Body der Entität in Oktetten (Anzahl an 8-Bit Bytes) an, die an den Empfänger gesendet werden.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Inhaltstyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Gibt den Kompressionsalgortihmus an.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die Sprache(n), die für das Publikum bestimmt ist/sind, damit der Benutzer nach seiner bevorzugten Sprache unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen Client zugewandten Seite von Proxyservern, die geändert oder verloren geht, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Gibt die ursprünglichen IP-Adressen eines Clients an, der über einen HTTP-Proxy oder einen Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Gibt den ursprünglichen Host an, den ein Client angefragt hat, um eine Verbindung zu Ihrem Proxy oder Load Balancer herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Gibt das Protokoll (HTTP oder HTTPS) an, mit dem ein Client eine Verbindung zu Ihrem Proxy oder Load Balancer herstellt.
- {{HTTPHeader("Via")}}
  - : Wird durch sowohl durch Vorwärts- als auch Rückwärtsproxys hinzugefügt und kann in den Anfrage Headern als auch den Antwort Headern erscheinen und gibt die Proxys an, über die die Nachricht versendet wurde.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.

## Anfragenkontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen Benutzer, der den anfordernden Benutzer-Agenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers (für virtuelles Hosting) und (optional) die TCP-Portnummer an, auf welcher der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link auf die aktuell angeforderte Seite folgt.
- {{HTTPHeader("Referrer-Policy")}}
  - : Gibt an, welche Referrer-Informationen im Header {{HTTPHeader("Referer")}} mit den gesendeten Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält einen charakteristischen String, mit der die Netzwerkprotokollpartner den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Benutzer-Agenten bestimmen können. Siehe auch die [Benutzer-Agenten-String Referenz von Firefox](/de/docs/Web/HTTP/Headers/User-Agent/Firefox).

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die von einer Ressource unterstützten HTTP-Anfragemethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen zu der Software, die der Ursprungsserver zur Bearbeitung der Anfrage verwendet.

## Bereichsanfragen

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erzeugt eine bedingte Bereichanfrage, die nur erfüllt wird, wenn das gegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Kann verwendet werden, um das Herunterladen von zwei Bereichen von einer inkompatiblen Version der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, welchem Bereich des Body der gesendete Inhalt angehört.

## Sicherheit

- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Steuert Ressourcen, die der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Webentwickler können mit Richtlinien experimentieren, indem sie ihre Auswirkungen überwachen, jedoch nicht durchsetzen. Berichte über Verstöße bestehen aus {{Glossary("JSON")}}-Dokumenten, die über eine HTTP `POST` Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}}
  - : Erlaubt es Websites, sich für die Berichterstellung und/oder Durchsetzung der Zertifikattransparenzanforderungen zu entscheiden. Dadurch wird verhindert, dass falsch ausgestellte Zertifikate für eine Seite unbemerkt bleiben. Wenn eine Seite den Expect-CT-Header aktiviert, fordert sie den Browser auf zu überprüfen, ob alle Zertifikate für diese Seite in öffentlichen CT-Protokollen angezeigt werden.
- {{HTTPHeader("Feature-Policy")}}
  - : Stellt einen Mechanismus bereit, um die Verwendung von Browserfunktionen in seinem eigenen Frame und in eingebetteten iFrames zuzulassen und zu verbieten.

- {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}})
  - : Ordnet einen bestimmten kryptografischen öffentlichen Schlüssel einem bestimmten Webserver zu, um das Risiko von {{Glossary("MITM", "Man-in-the-Middle")}}-Angriffen mit gefälschten Zertifikaten zu verringern.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : Sendet Berichte an die im Header angegebene URI zur Protokollierung, während Clients weiterhin eine Verbindung zum Server herstellen können, selbst wenn gegen das Pinning verstoßen wurde.

- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS statt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, dass der Client eine verschlüsselte und authentifizierte Antwort bevorzugt und dass die Anweisung {{CSP("upgrade-insecure-request")}} erfolgreich verarbeitet werden kann.

- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das Erraten des MIME-Types durch den Browser und zwingt ihn den MIME-Type im Header {{HTTPHeader("Content-Type")}} zu benutzen.

- {{HTTPHeader("X-Download-Options")}}
  - : Gibt an, dass der Browser (Internet Explorer) nicht die Option zum "Öffnen" einer aus einer Anwendung heruntergeladenen Datei anzeigen sollte, um Phishing-Angriffe zu verhindern, da die Datei sonst im Kontext der Anwendung ausgeführt werden kann.

- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob es einem Browser erlaubt wird eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} Element darzustellen.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann durch Hosting-Umgebungen oder andere Frameworks festgelegt werden und enthält Informationen zu diesen, ohne der Anwendung oder ihren Besuchern einen Nutzen zu bieten. Heben Sie diesen Header auf, um zu verhindern mögliche Schwachstellen preiszugeben.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert Seiten-übergreifende Skript-Filterung.

## Vom Server gesendete Ereignisse

- {{HTTPHeader("Last-Event-ID")}}
  - : ...
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, mit dem Entwickler eine Netzwerkfehler-Berichterstattungs-Richtlinie deklarieren können.
- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Report-To")}}
  - : Kann verwendet werden, um einen Server-Endpunkt anzugeben, an den der Browser Warnmeldungen und Fehlerberichte senden soll.

## Übertragungskodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die zum sicheren Übertragen der Entität an den Benutzer verwendet wird.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der Benutzer-Agent akzeptiert.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, am Ende einer Nachricht in mehreren Teilen zusätzliche Felder einzufügen.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## Sonstiges

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : Ein Client kann die gewünschte Push-Richtlinie für eine Anfrage ausdrücken, indem er ein Header-Feld [`Accept-Push-Policy`](https://tools.ietf.org/html/draft-ruellan-http-accept-push-policy-00#section-3.1) mitsendet.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das Header-Feld [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) senden, um anzugeben dass er beabsichtigt von verfügbaren Signaturen gebrauch zu machen und anzuzeigen, welche Art von Signaturen er unterstützt.
- {{HTTPHeader("Alt-Svc")}}
  - : Kann verwendet werden, um alternative Wege aufzulisten, um diesen Dienst zu erreichen.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu dem die Nachricht erstellt wurde.
- {{HTTPHeader("Large-Allocation")}}
  - : Setzt den Browser darüber in Kenntnis, dass die zu ladende Seite eine große Zuordnung durchführen möchte.
- {{HTTPHeader("Link")}}
  - : Das [`Link`](https://tools.ietf.org/html/rfc5988#section-5) Entitäten-Header-Feld bietet eine Möglichkeit, eine oder mehrere Links in HTTP-Headern zu serialisieren. Es entspricht semantisch dem HTML Element {{HTMLElement("link")}}.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : Eine [`Push-Policy`](https://tools.ietf.org/html/draft-ruellan-http-accept-push-policy-00#section-3.2) definiert das Serververhalten bezüglich Push bei der Verarbeitung einer Anfrage.

- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten soll, bevor eine Folgeanfrage gesendet wird.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) Header-Feld enthält eine Liste von Signaturen für einen Austausch, von welchem jeder Informationen darüber enthält, wie die Autorität dieser Signatur ermittelt und aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur aufgenommen werden sollen.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("SourceMap")}}
  - : Knüpft generierten Code an eine [Source Map](/de/docs/Tools/Debugger/How_to/Use_a_source_map).
- {{HTTPHeader("Upgrade")}}
  - : Das relevante RFC-Dokument für das [`Upgrade` Header-Feld ist RFC 7230, Abschnitt 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). Der Standard legt Regeln für das Upgrade oder das Wechseln zu einem anderen Protokoll auf der aktuellen Client-, Server- und Transportprotokollverbindung fest. Mit diesem Header-Standard kann ein Client beispielsweise von HTTP 1.1 zu HTTP 2.0 wechseln, vorausgesetzt der Server beschließt, das `Upgrade` Header-Feld zu bestätigen und zu implementieren. Keine der Parteien muss die Bedingungen akzeptieren, die im `Upgrade` Header-Feld angegeben sind. Es kann in Client- und Server-Headern verwendet werden. Wenn das `Upgrade` Header-Feld angegeben ist, MUSS der Absender auch das `Connection` Header-Feld mit der angegebenen `Upgrade` Option senden. Einzelheiten zum `Connection` Header-Feld finden Sie in [Abschnitt 6.1](https://tools.ietf.org/html/rfc7230#section-6.1) des zuvor genannten RFC.
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : Steuert das DNS-Prefetching, eine Funktion, mit der Browser proaktiv eine Namensauflösung sowohl für Links durchführen, denen der Benutzer folgen könnte, als auch URLs für Elemente, auf die im Dokument verwiesen wird, einschließlich Bilder, CSS, JavaScript, usw.
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indiziert werden soll. Die Kopfzeile entspricht effektiv `<meta name="robots" content="...">`.
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : Wird von Internet Explorer verwendet, um zu signalisieren, welcher Dokumentmodus verwendet werden soll.

## Mitwirken

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Contribute/Howto/Document_an_HTTP_header) oder die vorhandenen verbessern.

## Siehe auch

- {{interwiki("wikipedia", "Liste der HTTP-Headerfelder")}} auf Wikipedia
- [IANA Register](https://www.iana.org/assignments/message-headers/perm-headers.html) (Englisch)
- [HTTP Arbeitsgruppe](https://httpwg.org/specs/) (Englisch)
