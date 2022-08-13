---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
---
{{APIRef("XMLHttpRequest")}}

`XMLHttpRequest` ist ein [JavaScript](/JavaScript "JavaScript") Objekt, das von Microsoft entwickelt und von Mozilla, Apple, und Google übernommen wurde. Es wird derzeit [im W3C standardisiert](http://www.w3.org/TR/XMLHttpRequest/). Es bietet einen einfachen Weg, Daten von einem URL zu erhalten. Trotz seines Namens kann man mit `XMLHttpRequest` jede Art von Daten laden, nicht nur XML, und es unterstützt auch andere Protokolle als [HTTP](/de/docs/HTTP "HTTP") (inklusive `file` und `ftp`).

Eine Instanz von `XMLHttpRequest` erzeugt man ganz einfach so:

    var myRequest = new XMLHttpRequest();

Für Näheres zur Verwendung von `XMLHttpRequest`, siehe [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest").

## Übersicht: Methoden

| `XMLHttpRequest(JSObject objParameters);`                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `void abort();`                                                                                                                                             |
| `DOMString getAllResponseHeaders();`                                                                                                                        |
| `DOMString? getResponseHeader(DOMString header);`                                                                                                           |
| `void open(DOMString method, DOMString url, optional boolean async, optional DOMString? user, optional DOMString? password);`                               |
| `void overrideMimeType(DOMString mime);`                                                                                                                    |
| `void send();` `void send(ArrayBuffer data);` `void send(Blob data);` `void send(Document data);` `void send(DOMString? data);` `void send(FormData data);` |
| `void setRequestHeader(DOMString header, DOMString value);`                                                                                                 |
| Nicht-Standard Methoden                                                                                                                                     |
| `[noscript] void init(in nsIPrincipal principal, in nsIScriptContext scriptContext, in nsPIDOMWindow ownerWindow);`                                         |
| `[noscript] void openRequest(in AUTF8String method, in AUTF8String url, in boolean async, in AString user, in AString password);`                           |
| `void sendAsBinary(in DOMString body);`                                                                                                                     |

## Eigenschaften

<table class="standard-table">
  <tbody>
    <tr>
      <th>Attribut</th>
      <th>Typ</th>
      <th>Beschreibung</th>
    </tr>
    <tr id="onreadystatechange">
      <td>
        <p><code>onreadystatechange</code></p>
      </td>
      <td><code>Function?</code></td>
      <td>
        <p>
          Ein JavaScript function Objekt, das bei jedem Wechsel des
          <code>readyState</code> Attributs aufgerufen wird. Das Callback wird
          aus dem Thread der Benutzerschnittstelle aufgerufen.
        </p>
        <div class="warning">
          <strong>Warnung:</strong> Dies <em>sollte</em> nicht mit synchronen
          Anfragen und <em>darf</em> nicht aus nativem Code heraus verwendet
          werden.
        </div>
      </td>
    </tr>
    <tr id="readyState">
      <td><code>readyState</code></td>
      <td><code>unsigned short</code></td>
      <td>
        <p>Der Status der Anfrage:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <td class="header">Wert</td>
              <td class="header">Status</td>
              <td class="header">Beschreibung</td>
            </tr>
            <tr>
              <td><code>0</code></td>
              <td><code>UNSENT</code></td>
              <td><code>open()</code>wurde noch nicht aufgerufen.</td>
            </tr>
            <tr>
              <td><code>1</code></td>
              <td><code>OPENED</code></td>
              <td><code>send()</code>wurde noch nicht aufgerufen.</td>
            </tr>
            <tr>
              <td><code>2</code></td>
              <td><code>HEADERS_RECEIVED</code></td>
              <td>
                <code>send()</code> wurde aufgerufen, und Headers sowie Status
                sind verfügbar.
              </td>
            </tr>
            <tr>
              <td><code>3</code></td>
              <td><code>LOADING</code></td>
              <td>
                Download ist im Gange; <code>responseText</code> enthält bereits
                unvollständige Daten.
              </td>
            </tr>
            <tr>
              <td><code>4</code></td>
              <td><code>DONE</code></td>
              <td>Der Vorgang ist abgeschlossen.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr id="response">
      <td><code>response</code></td>
      <td>variiert</td>
      <td>
        <p>
          Der Entitätskörper der Antwort (response entity body) gemäss
          <code><a href="#responseType">responseType</a></code
          >, als ein
          <a
            href="/en-US/docs/JavaScript_typed_arrays/ArrayBuffer"
            title="JavaScript typed arrays/ArrayBuffer"
            ><code>ArrayBuffer</code></a
          >,
          <a href="/en-US/docs/DOM/Blob" title="DOM/Blob"><code>Blob</code></a
          >, {{domxref("Document")}}, JavaScript Objekt (für "json"),
          oder string. Dies ist <code>null</code> falls die Anfrage nicht
          abgeschlossen ist oder erfolglos war.
        </p>
      </td>
    </tr>
    <tr id="responseText">
      <td><code>responseText</code> {{ReadOnlyInline}}</td>
      <td><code>DOMString</code></td>
      <td>
        Die Antwort auf die Anfrage als Text, oder <code>null</code> falls die
        Anfrage nicht abgeschlossen ist oder erfolglos war.
      </td>
    </tr>
    <tr id="responseType">
      <td><code>responseType</code></td>
      <td><code>XMLHttpRequestResponseType</code></td>
      <td>
        <p>Kann gesetzt werden, um den Datentyp der Antwort zu ändern.</p>
        <table class="standard-table" style="width: auto">
          <tbody>
            <tr>
              <td class="header">Wert</td>
              <td class="header">
                Datentyp der <code>response</code> Eigenschaft
              </td>
            </tr>
            <tr>
              <td><code>""</code> (leerer String)</td>
              <td>String (Das ist der Default)</td>
            </tr>
            <tr>
              <td><code>"arraybuffer"</code></td>
              <td>
                <a
                  href="/en-US/docs/JavaScript_typed_arrays/ArrayBuffer"
                  title="JavaScript typed arrays/ArrayBuffer"
                  ><code>ArrayBuffer</code></a
                >
              </td>
            </tr>
            <tr>
              <td><code>"blob"</code></td>
              <td>{{domxref("Blob")}}</td>
            </tr>
            <tr>
              <td><code>"document"</code></td>
              <td>{{domxref("Document")}}</td>
            </tr>
            <tr>
              <td><code>"json"</code></td>
              <td>
                JavaScript Objekt, geparsed aus einem JSON String, der vom
                Server zurückgegeben wird.
              </td>
            </tr>
            <tr>
              <td><code>"text"</code></td>
              <td>String</td>
            </tr>
            <tr>
              <td><code>"moz-blob"</code></td>
              <td>
                Wird von Firefox verwendet, um den Bezug partieller
                {{domxref("Blob")}} Daten von <code>progress</code> Events
                zu erlauben. Dadurch kann ein <code>progress</code> Event
                Handler bereits mit der Verarbeitung von Daten beginnen, während
                ihr Empfang noch läuft.
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-text"</code></td>
              <td>
                <p>
                  Ähnlich wie <code>"text"</code>, aber streamt die Daten. Das
                  bedeutet, dass der Wert in <code>response</code> nur während
                  des <code>"progress"</code> Event verfügbar ist und jeweils
                  nur die Daten enthält, die seit dem letzten
                  <code>"progress"</code> Event eingetroffen sind.
                </p>
                <p>
                  Wenn auf <code>response</code> während eines
                  <code>"progress"</code> Events zugegriffen wird, enthält es
                  einen String mit den Daten. Andernfalls gibt es
                  <code>null</code> zurück.
                </p>
                <p>Dieser Modus funktioniert derzeit nur in Firefox.</p>
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-arraybuffer"</code></td>
              <td>
                <p>
                  Ähnlich wie <code>"arraybuffer"</code>, aber streamt die
                  Daten. Das bedeutet, dass der Wert in
                  <code>response</code> nur während des
                  <code>"progress"</code> Event verfügbar ist und jeweils nur
                  die Daten enthält, die seit dem letzten
                  <code>"progress"</code> Event eingetroffen sind.
                </p>
                <p>
                  Wenn auf <code>response</code> während eines
                  <code>"progress"</code> Events zugegriffen wird, enthält es
                  einen <code>ArrayBuffer</code> mit den Daten. Andernfalls gibt
                  es <code>null</code> zurück.
                </p>
                <p>Dieser Modus funktioniert derzeit nur in Firefox.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="note">
          <strong>Anmerkung:</strong> Ab Gecko 11.0 sowie WebKit build 528 kann
          man in diesen Browsern das <code>responseType</code> Attribut nicht
          mehr für synchrone Anfragen benutzen. Der Versuch löst einen
          <code>NS_ERROR_DOM_INVALID_ACCESS_ERR</code> Fehler aus. Diese
          Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
        </div>
      </td>
    </tr>
    <tr id="responseXML">
      <td><code>responseXML</code> {{ReadOnlyInline}}</td>
      <td><code>Document?</code></td>
      <td>
        <p>
          Die Antwort auf die Anfrage als DOM
          <code
            ><a href="/en-US/docs/DOM/document" title="DOM/Document"
              >Document</a
            ></code
          >
          Objekt, oder <code>null</code> falls die Anfrage erfolglos war, noch
          nicht gesendet wurde, oder nicht als XML oder HTML geparst werden
          kann. Die Antwort wird geparst, als wäre sie ein
          <code>text/xml</code> Stream. Wenn der <code>responseType</code> auf
          <code>"document"</code> gesetzt wurde und die Anfrage asynchron
          gemacht wurde, wird die Antwort geparst, als wäre sie ein
          <code>text/html</code> Stream.
        </p>
        <div class="note">
          <strong>Anmerkung:</strong> Falls der Server nicht den
          <code>text/xml</code> Inhaltstyp-Header auf die Antwort anwendet, kann
          man<code> overrideMimeType()</code> verwenden, um
          <code>XMLHttpRequest</code> zu zwingen, sie dennoch als XML zu parsen.
        </div>
      </td>
    </tr>
    <tr id="status">
      <td><code>status</code> {{ReadOnlyInline}}</td>
      <td><code>unsigned short</code></td>
      <td>
        Der Status der Antwort auf die Anfrage. Das ist der HTTP Ergebnis-Code
        (<code>status</code> ist z.B. 200 für eine erfolgreiche Anfrage).
      </td>
    </tr>
    <tr id="statusText">
      <td><code>statusText</code> {{ReadOnlyInline}}</td>
      <td><code>DOMString</code></td>
      <td>
        Der Antwort-String, der vom HTTP Server zurückgesendet wurde. Im
        Gegensatz zu <code>status</code> beinhaltet dies den ganzen Text der
        Antwortnachricht (z.B. "<code>200 OK</code>").
      </td>
    </tr>
    <tr id="timeout">
      <td><code>timeout</code></td>
      <td><code>unsigned long</code></td>
      <td>
        <p>
          Die Anzahl Millisekunden, die eine Anfrage dauern darf, bevor sie
          automatisch abgebrochen wird. Ein Wert von 0 (das ist die
          Voreinstellung) bedeutet, dass es kein timeout gibt.
        </p>
        <div class="note">
          <strong>Anmerkung:</strong> Für synchrone Anfragen mit einem
          besitzenden Fenster darf man kein timeout verwenden.
        </div>
      </td>
    </tr>
    <tr id="upload">
      <td><code>upload</code></td>
      <td><code>XMLHttpRequestUpload</code></td>
      <td>
        Das Hochladen kann mitverfolgt werden, indem man einen Event Listener zu
        <code>upload</code> hinzufügt.
      </td>
    </tr>
    <tr id="withCredentials">
      <td><code>withCredentials</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Zeigt an, ob Site-übergreifende <code>Access-Control</code> Anfragen
          mit Credentials wie Cookies oder Autorisierungs-Headers durchgeführt
          werden sollen oder nicht. Die Voreinstellung ist <code>false</code>.
        </p>
        <div class="note">
          <strong>Anmerkung:</strong> Anfragen an die ursprüngliche Site sind
          davon niemals betroffen.
        </div>
        <div class="note">
          <strong>Anmerkung:</strong> Ab Gecko 11.0 kann man das
          <code>withCredentials</code> Attribut nicht mehr für synchrone
          Anfragen verwenden. Der Versuch löst einen
          <code>NS_ERROR_DOM_INVALID_ACCESS_ERR</code> Fehler aus.
        </div>
      </td>
    </tr>
  </tbody>
</table>

### Nicht-Standard Eigenschaften

<table class="standard-table">
  <tbody>
    <tr>
      <th>Attribut</th>
      <th>Typ</th>
      <th>Description</th>
    </tr>
    <tr id="channel">
      <td><code>channel</code> {{ReadOnlyInline}}</td>
      <td><code>nsIChannel</code></td>
      <td>
        Der Kanal, der vom Objekt zur Durchführung der Anfrage verwendet wurde.
        Das ist <code>null</code> falls der Kanal noch nicht erzeugt worden ist.
        Im Falle von mehrteiligen Anfragen ist das der anfängliche Kanal, nicht
        derjenige der anderen Teile der mehrteiligen Anfrage.<br /><strong
          >Zugriff nur mit erhöhten Rechten.</strong
        >
      </td>
    </tr>
    <tr id="mozAnon">
      <td><code>mozAnon</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Falls <code>true</code> wird die Anfrage ohne Cookie und
          Authentisierungs-Headers gesendet.
        </p>
      </td>
    </tr>
    <tr id="mozSystem">
      <td><code>mozSystem</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Falls <code>true</code> wird die Regel, die nur Anfragen zum gleichen
          Ursprung erlaubt, für diese Anfrage nicht durchgesetzt.
        </p>
      </td>
    </tr>
    <tr id="mozBackgroundRequest">
      <td><code>mozBackgroundRequest</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Zeigt an, ob das Objekt eine Service-Anfrage im Hintergrund darstellt.
          Falls <code>true</code> wird keine Lastgruppe mit der Anfrage
          verknüpft, und die Anzeige von Sicherheits-Dialogen wird verhindert.
          <strong>Zugriff nur mit erhöhten Rechten.</strong>
        </p>
        <p>
          In Fällen, wo normalerweise ein Sicherheits-Dialog angezeigt würde
          (wie Autorisierungs- oder Zertifikatsfehler-Benachrichtigungen),
          schlägt die Anfrage stattdessen einfach fehl.
        </p>
        <div class="note">
          <strong>Anmerkung: </strong>Diese Eigenschaft muss vor dem Aufrufen
          von <code>open()</code> gesetzt werden..
        </div>
      </td>
    </tr>
    <tr id="mozResponseArrayBuffer">
      <td>
        <code>mozResponseArrayBuffer</code> {{obsolete_inline("6")}}
        {{ReadOnlyInline}}
      </td>
      <td>
        <a
          href="/en-US/docs/JavaScript_typed_arrays/ArrayBuffer"
          title="JavaScript typed arrays/ArrayBuffer"
          ><code>ArrayBuffer</code></a
        >
      </td>
      <td>
        Die Antwort auf die Anfrage, als typisiertes JavaScript Array. Dies ist
        <code>NULL</code> falls die Anfrage erfolglos war oder noch nicht
        gesendet wurde.
      </td>
    </tr>
    <tr id="multipart">
      <td><code>multipart</code> {{obsolete_inline("22")}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          <strong
            >Dieses nur in Gecko verfügbare Feature wurde in Firefox/Gecko 22
            entfernt.</strong
          >
          Bitte verwende stattdessen
          <a href="/en-US/docs/Server-sent_events" title="Server-sent_events"
            >Server-Sent Events</a
          >,
          <a href="/en-US/docs/WebSockets" title="WebSockets">Web Sockets</a>
          oder <code>responseText</code> aus <code>progress </code>Events.
        </p>
        <p>
          Zeigt an, ob als Antwort ein Stream von möglicherweise mehreren XML
          Dokumenten erwartet wird. Wird dies auf <code>true</code> gesetzt,
          muss der Inhaltstyp des ersten Teils der Antwort
          <code>multipart/x-mixed-replace</code> sein, sonst tritt ein Fehler
          auf. Alle Anfragen müssen asynchron sein.
        </p>
        <p>
          Dies ermöglicht die Unterstützung von Server Push; für jedes XML
          Dokument, das in die Antwort auf diese Anfrage geschrieben wird, wird
          ein neues XML DOM Dokument erzeugt, und zwischen den Dokumenten wird
          der <code>onload</code> Handler aufgerufen.
        </p>
        <div class="note">
          <strong>Anmerkung:</strong> Wenn dies gesetzt ist, werden
          <code>onload</code> und andere Event Handler nicht zurückgesetzt,
          nachdem das erste XML Dokument geladen ist, und der
          <code>onload</code> Handler wird nach Erhalt jedes Teils der Antwort
          aufgerufen.
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

### XMLHttpRequest()

Der Konstruktor initiiert ein `XMLHttpRequest` Objekt. Er muss vor allen anderen Methoden aufgerufen werden.

Gecko/Firefox 16 fügt einen nicht-standard Parameter zum Konstruktor hinzu, der den anonymen Modus einschalten kann (siehe [Bug 692677](https://bugzilla.mozilla.org/show_bug.cgi?id=692677 "692677 – Relax same-origin XHR restrictions for privileged applications")). Das `mozAnon` flag auf `true` zu setzen, hat einen ähnlichen Effekt wie der [`AnonXMLHttpRequest()`](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest "see AnonXMLHttpRequest in the XMLHttpRequest specification") Konstruktor, der in der XMLHttpRequest Spezifikation beschrieben ist, aber noch in keinem Browser implementiert wurde (Stand September 2012).

    XMLHttpRequest (
      JSObject objParameters
    );

##### Parameter (nicht-standard)

- `objParameters`
  - : Es gibt zwei Flags, die gesetzt werden können:_ `mozAnon`
    _ : Boolean: Wenn dieses Flag auf `true` gesetzt ist, wird der Browser weder den Ursprung der Anfrage noch [Anmeldedaten](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials "Defintion of “User credentials” in the XMLHttpRequest specification.") übermitteln, wenn er Daten anfordert. Das heisst vor allem auch, dass keine Cookies gesendet werden, sofern sie nicht ausdrücklich mit setRequestHeader hinzugefügt wurden.
    - `mozSystem`
      - : Boolean: Dieses Flag auf `true` zu setzen, ermöglicht das Herstellen von Cross-Site Verbindungen, ohne dass der Server dem mittels CORS zustimmen muss. _Erfodert das Setzen von `mozAnon: true`. D.h. das kann nicht mit dem Senden von Cookies oder anderen Anmeldeinformationen kombiniert werden. Dies [funktioniert nur in privilegierten (reviewed) Apps](https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68 "Bug 692677 comment 68"); es klappt nicht auf beliebigen Webseiten, die in Firefox geladen werden._

## Methoden

### abort()

Bricht die Anfrage ab, falls sie bereits gesendet wurde.

### getAllResponseHeaders()

    DOMString getAllResponseHeaders();

Liefert alle Antwort-Header als String, oder `null` falls keine Antwort empfangen wurde.

**Anmerkung:** Für mehrteilige Anfragen gibt dies die Header des _aktuellen_ Teils der Anfrage zurück, nicht die des ursprünglichen Kanals.

### getResponseHeader()

    DOMString? getResponseHeader(DOMString header);

Liefert den String mit dem Text des angegebenen Headers, oder `null` falls die Antwort noch nicht empfangen wurde oder der Header in der Antwort nicht existiert.

### open()

Initialisiert eine Anfrage. Diese Methode ist nur zur Verwendung in JavaScript Code; um eine Anfrage aus nativem Code zu initialisieren, ist stattdessen` `[`openRequest()`](</de/docs/nsIXMLHttpRequest#openRequest()> "XMLHttpRequest#openRequest()") zu benutzen.

> **Note:** **Anmerkung:** Der Aufruf dieser Methode für eine bereits aktive Anfrage (eine, für die `open()`oder `openRequest() `schon ausgeführt wurde) ist gleichwertig mit dem Aufruf von `abort()`.

    void open(
       DOMString method,
       DOMString url,
       optional boolean async,
       optional DOMString user,
       optional DOMString password
    );

###### Parameter

- `method`
  - : Die zu benutzende HTTP Methode, wie "GET", "POST", "PUT", "DELETE", etc. Wird für nicht-HTTP(S) URLs ignoriert.
- `url`
  - : Der URL, an den die Anfrage geschickt werden soll.
- `async`
  - : Ein optionaler boole'scher Parameter mit Defaultwert `true`, der angibt, ob die Operation asynchron ausgeführt werden soll. Wenn dieser Wert `false` ist, kehrt die `send()`Methode nicht zurück, bis die Antwort vollständig empfangen worden ist. Ist er `true`, kehrt sie sofort zurück, und die Benachrichtigung über die vollendete Transaktion erfolgt mittels Events. Dies _muss_ `true` sein falls das `multipart` Attribut `true` ist, sonst wird ein Fehler ausgelöst.
- `user`
  - : Der optionale Benutzername zum Zweck der Authentisierung; ohne Angabe ist dies ein leerer String.
- `password`
  - : Das optionale Passwort zum Zweck der Authentisierung; ohne Angabe ist dies ein leerer String.

### overrideMimeType()

Übergeht den vom Server zurückgegebenen MIME Typ. Dies kann beispielsweise benutzt werden, um zu erzwingen, dass ein Stream als text/xml behandelt und geparst wird, selbst wenn ihn der Server nicht als das meldet. Diese Methode muss vor `send()` aufgerufen werden.

    void overrideMimeType(DOMString mimetype);

### send()

Sendet die Anfrage. Falls die Anfage asynchron ist (was der Default ist), kehrt diese Methode zurück, sobald die Anfrage gesendet ist. Ist die Anfrage synchron, kehrt diese Methode nicht zurück, bis die Antwort angekommen (oder ein Timeout aufgetreten) ist.

> **Note:** **Anmerkung:** Jegliche zu setzende Event Handler / Listener müssen vor dem Aufruf von `send()` gesetzt werden.

    void send();
    void send(ArrayBuffer data);
    void send(Blob data);
    void send(Document data);
    void send(DOMString? data);
    void send(FormData data);

###### Anmerkungen

Falls _data_ ein `Document` ist, so wird dieses vor dem Senden serialisiert. Beim Senden eines `Document` senden Firefox Versionen vor Version 3 die Anfrage immer encodiert als UTF-8; [Firefox 3](/de/docs/Firefox_3 "Firefox_3") sendet das `Document` richtigerweise mit dem angegebenen `body.xmlEncoding`, oder UTF-8 falls keines angegeben wurde.

Falls es ein `nsIInputStream` ist, muss er kompatibel sein mit der `setUploadStream()`Methode des `nsIUploadChannel`. In diesem Fall wird die Länge des Inhalts in einem Content-Length Header zur Anfrage hinzugefügt, dessen Wert mit der `available()`Methode des `nsIInputStream` ermittelt wird. Jegliche Header, die am Anfang des Streams enthalten sind, werden als Teil des Nachrichtenkörpers behandelt. Der MIME Typ des Streams sollte vor dem Aufruf von `send()` angegeben werden, indem der Content-Type Header mit der [`setRequestHeader()`](</de/docs/nsIXMLHttpRequest#setRequestHeader()> "XMLHttpRequest#setRequestHeader()") Methode gesetzt wird.

Der beste Weg, um binäre Inhalte zu senden (wie beim Hochladen einer Datei), ist die Verwendung von [ArrayBuffern](/de/docs/JavaScript/Typed_arrays/ArrayBuffer "JavaScript/Typed_arrays/ArrayBuffer") oder [Blobs](/de/docs/DOM/Blob "DOM/Blob") in Verbindung mit der `send()` Methode. Wenn jedoch [stringifizierbare](/de/docs/JavaScript/Reference/Global_Objects/JSON/stringify "JavaScript/Reference/Global_Objects/JSON/stringify") Rohdaten gesendet werden sollen, ist die [`sendAsBinary()`](<#sendAsBinary()> "DOM/XMLHttpRequest#sendAsBinary()") Methode zu verwenden.

### setRequestHeader()

Setzt den Wert eines HTTP Anfrage-Headers. Aufrufe von `setRequestHeader()` müssen nach [`open()`](#open), aber vor `send()` erfolgen.

    void setRequestHeader(
       DOMString header,
       DOMString value
    );

###### Parameter

- `header`
  - : Der Name des zu setzenden Headers.
- `value`
  - : Der Wert des zu setzenden Headers.

### Nicht-Standard Methoden

#### init()

Initialisiert das Objekt für die Verwendung aus C++ Code.

> **Warning:** **Warnung:** Diese Methode darf _nicht_ aus JavaScript heraus aufgerufen werden.

    [noscript] void init(
       in nsIPrincipal principal,
       in nsIScriptContext scriptContext,
       in nsPIDOMWindow ownerWindow
    );

##### Parameter

- `principal`
  - : Das Prinzipal, das für die Anfrage benutzt werden soll; darf nicht `null` sein.
- `scriptContext`
  - : Der Skript-Kontext, der für die Anfrage benutzt werden soll; darf nicht `null` sein.
- `ownerWindow`
  - : Das Fenster, das zu der Anfrage gehört; darf `null` sein.

#### openRequest()

Initialisiert eine Anfrage. Diese Methode ist zur Verwendung in nativem Code; um eine Anfrage in JavaScript Code zu initialisieren, ist stattdessen [`open()`](</de/docs/nsIXMLHttpRequest#open()> "XMLHttpRequest#open()") zu verwenden. Siehe Dokumentation für `open()`.

### sendAsBinary()

Eine Variante der `send()` Methode, die binäre Daten schickt.

    void sendAsBinary(
       in DOMString body
    );

Diese Methode, zusammen mit der [`readAsBinaryString`](</de/docs/DOM/FileReader#readAsBinaryString()> "DOM/FileReader#readAsBinaryString()") Methode der [`FileReader`](/de/docs/DOM/FileReader "DOM/FileReader") API, ermöglichen [das Lesen und den **Upload** jeglicher Dateitypen](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files "DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files") und das [Stringifizieren](/de/docs/JavaScript/Reference/Global_Objects/JSON/stringify "JavaScript/Reference/Global_Objects/JSON/stringify") der Rohdaten.

##### Parameter

- `body`
  - : Der Körper der Anfrage als DOMstring. Diese Daten werden durch Beschneiden (Entfernen des höherwertigen Bytes jedes Zeichens) in Einzel-Byte-Zeichen umgewandelt.

##### `sendAsBinary()` polyfill

Da `sendAsBinary()` ein experimentelles Feature ist, kommt hier **ein Polyfill** für Browser, die `sendAsBinary()` _nicht_ unterstützen, dafür aber [typisierte Arrays](/de/docs/JavaScript/Typed_arrays "JavaScript/Typed_arrays").

```js
/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary()
|*|
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* sende als ArrayBufferView...: */
    this.send(ui8Data);
    /* ...oder als ArrayBuffer (altmodisch)...: this.send(ui8Data.buffer); */
  };
}
```

> **Note:** **Anmerkung:** Dieses Polyfill kann mit zwei Datentypen als Argument für `send()` gebaut werden: einem [`ArrayBuffer`](/de/docs/JavaScript/Typed_arrays/ArrayBuffer "JavaScript/Typed_arrays/ArrayBuffer") (`ui8Data.buffer` – kommentierter Code) oder einer [`ArrayBufferView`](/de/docs/JavaScript/Typed_arrays/ArrayBufferView "JavaScript/Typed_arrays/ArrayBufferView") (`ui8Data`, das ist ein [typisiertes Array von 8-bit Ganzzahlen ohne Vorzeichen](/de/docs/JavaScript/Typed_arrays/Uint8Array "JavaScript/Typed_arrays/Uint8Array") – unkommentierter Code). Wenn man jedoch in Google Chrome versucht, einen `ArrayBuffer` zu senden, erscheint die folgende Warnmeldung: `ArrayBuffer is deprecated in XMLHttpRequest.send(). Use ArrayBufferView instead.`

## Anmerkungen

- Standardmässig begrenzt Firefox 3 die Anzahl gleichzeitiger `XMLHttpRequest` Verbindungen pro Server auf 6 (frühere Versionen begrenzen dies auf 2 pro Server). Manche interaktiven Websites können eine `XMLHttpRequest` Verbindung offen halten, so dass das Öffnen mehrerer Sitzungen auf solchen Sites dazu führen kann, dass der Browser auf eine Art und Weise hängen bleibt, dass das Fenster nicht mehr neu gezeichnet wird und Steuerelemente nicht mehr reagieren. Dieser Wert lässt sich ändern durch Editieren der Voreinstellung `network.http.max-persistent-connections-per-server` in [`about:config`](/about:config "Linkification: about:config").
- Ab Gecko 7 werden Header, die durch [setRequestHeader](#setrequestheader) gesetzt wurden, mit der Anfrage mitgeschickt, wenn einer Umleitung gefolgt wird. Zuvor wurden diese Header nicht gesendet.
- `XMLHttpRequest` ist in Gecko implementiert mittels der `nsIXMLHttpRequest`, `nsIXMLHttpRequestEventTarget`, und `nsIJSXMLHttpRequest` Schnittstellen.

#### Events

`onreadystatechange` als eine Eigenschaft der `XMLHttpRequest` Instanz wird von allen Browsern unterstützt.

Seither wurden einige zusätzliche Event Handler in verschiedenen Browsern implementiert (`onload`, `onerror`, `onprogress`, etc.). Diese werden in Firefox unterstützt. Für Genaueres, siehe `nsIXMLHttpRequestEventTarget` und [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "XMLHttpRequest/Using_XMLHttpRequest").

Neuere Browser, inklusive Firefox, unterstützen das 'Horchen' nach `XMLHttpRequest `Ereignissen mittels der Standard [`addEventListener`](/en-US/docs/DOM/element.addEventListener "element.addEventListener") APIs zusätzlich zum Setzen von `on*` Eigenschaften auf eine Handler Funktion.

## Browser Kompatibilität

{{Compat}}

### Gecko Anmerkungen

Gecko 11.0 {{geckoRelease("11.0")}} entfernte die Unterstützung für die Verwendung der `responseType` und `withCredentials` Attribute bei der Durchführung synchroner Anfragen. Der Versuch löst einen `NS_ERROR_DOM_INVALID_ACCESS_ERR` Fehler aus. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.

Gecko 12.0 {{geckoRelease("12.0")}} und spätere unterstützen die Verwendung von `XMLHttpRequest` zum Lesen von [`data:` URLs](/de/docs/data_URIs "data_URIs").

## Siehe auch

- MDN Artikel über XMLHttpRequest:

  - [AJAX - Getting Started](/de/docs/AJAX/Getting_Started "AJAX/Getting_Started")
  - [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
  - [HTML in XMLHttpRequest](/de/docs/HTML_in_XMLHttpRequest "HTML_in_XMLHttpRequest")
  - [`FormData`](/de/docs/DOM/XMLHttpRequest/FormData "XMLHttpRequest/FormData")

- XMLHttpRequest Referencen von W3C und Browserherstellern:

  - [W3C: XMLHttpRequest](http://www.w3.org/TR/XMLHttpRequest1/) (base features)
  - [W3C: XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) (latest editor's draft with extensions to the base functionality, formerly XMLHttpRequest Level 2)
  - [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
  - [Apple developers' reference](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)

- ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
- [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
- [HTML5 Rocks - New Tricks in XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/)
