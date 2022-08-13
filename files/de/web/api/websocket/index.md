---
title: WebSocket
slug: Web/API/WebSocket
tags:
  - API
  - WebSocket
  - WebSockets
translation_of: Web/API/WebSocket
---
{{APIRef("Web Sockets API")}}{{ SeeCompatTable() }}

Das `WebSocket`-Objekt bietet die API für das Erstellen und Verwalten einer [WebSocket](/en/WebSockets "en/WebSockets")-Verbindung zu einem Server, ebenso dient es auch dem Senden und dem Empfangen von Daten auf der Verbindung.

Der WebSocket-Konstruktor akzeptiert einen benötigten und einen optionalen Parameter:

    WebSocket WebSocket(
      in DOMString url,
      in optional DOMString protocols
    );

    WebSocket WebSocket(
      in DOMString url,
      in optional DOMString[] protocols
    );

- `url`
  - : Die URL mit der sich das WebSocket verbinden soll; dies sollte die URL sein, auf welcher der WebSocket Server antworten wird.
- `protocols` {{ optional_inline() }}
  - : Entweder ein einzelnes Protokol als String oder ein Array aus Protokol-Strings. Diese Strings werden genutzt um Sub-Protokolle zu indizieren, sodass ein einzelner Server mehrere WebSocket Sub-Protokolle implementieren kann (Beispielsweiße kann ein Server abhängig vom `protocol` verschiedene Interaktionen mit dem Client handeln). Falls du kein Protokoll angibst, wird ein leerer String verwendet.

Der Konstruktur kann folgende Exceptions werfen:

- `SECURITY_ERR`
  - : Der Port auf dem man die Verbindung aufbauen will, ist blockiert worden.

<!---->

## Methoden Übersicht

| `void close(in optional unsigned long code, in optional DOMString reason);` |
| --------------------------------------------------------------------------- |
| `void send(in DOMString data);`                                             |

## Attribute

| Attribut         | Typ                                                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binaryType`     | {{ DOMXref("DOMString") }}                       | Ein String indiziert den Typ der Binärdaten, die von der Verbindung übertragen werden. Dies sollte entweder "blob" sein, falls DOM-Objekte {{ domxref("Blob") }} genutzt werden oder "arraybuffer" falls [`ArrayBuffer`](https://developer.mozilla.org/en/JavaScript_typed_arrays/ArrayBuffer "en/JavaScript typed arrays/ArrayBuffer")-Objekte genutzt werden. |
| `bufferedAmount` | [`unsigned long`](/en/unsigned_long "en/unsigned long")    | Die Anzahl der Bytes der Daten, welche bereits durch Aufrufe von [send](#send) gebuffert wurden, allerdings noch nicht über das Netzwerk versand wurden. Dieses Feld setzt sich nicht auf Null zurück, wenn die Verbindung beendet wurde; falls du weiterhin [send](#send) aufrufst, wird dieses Feld weiterhin ansteigen. **Read only.**                              |
| `extensions`     | {{ DOMXref("DOMString") }}                       | Die Erweiterungen, die von dem Server gewählt wurden. Aktuell ist dies nur ein leerer String oder eine Liste von Erweiterungen, die von der Verbindung verhandelt wurden.                                                                                                                                                                                              |
| `onclose`        | {{ domxref("EventListener") }}                   | Ein Event-Listener welcher aufgerufen wird, wenn der `readyState` der WebSocket-Verbindung auf `CLOSED` wechselt. Den Listener erreicht ein [`CloseEvent`](https://developer.mozilla.org/en/WebSockets/WebSockets_reference/CloseEvent "en/WebSockets/WebSockets reference/CloseEvent") welches "close" heißt.                                                         |
| `onerror`        | {{ domxref("EventListener") }}                   | Ein Event-Listener welcher bei Fehlern aufgerufen wird. Dies ist ein einfaches Event welches "error" genannt wird.                                                                                                                                                                                                                                                     |
| `onmessage`      | {{ domxref("EventListener") }}                   | Ein Event-Listener welcher aufgerufen wird, wenn eine Nachricht vom Server empfangen wird. Den Listener erreicht ein [`MessageEvent`](https://developer.mozilla.org/en/WebSockets/WebSockets_reference/MessageEvent "en/WebSockets/WebSockets reference/MessageEvent") welches "message" heißt.                                                                        |
| `onopen`         | {{ domxref("EventListener") }}                   | Ein Event-Listener welcher aufgerufen wird, wenn der `readyState` der WebSocket-Verbindung auf `OPEN` wechselt; dies indiziert, dass die Verbindung bereit ist, dass man Daten versenden und empfangen kann. Dieses Event ist eine einfaches Event, es heißt "open".                                                                                                   |
| `protocol`       | {{ DOMXref("DOMString") }}                       | Ein String welcher dne Namen des Sub-Protokolls nennt, welches vom Server ausgewählt wurde; dieses Protokoll wird eines sein, welches in den Strings des `protocols`-Parameter beim Erstellen des WebSocket-Objekt angegeben wurde.                                                                                                                                    |
| `readyState`     | [`unsigned short`](/en/unsigned_short "en/unsigned short") | Der aktuelle Status der Verbindung; dies ist einer der [Ready state Konstanten](#ready_state_konstanten). **Read only.**                                                                                                                                                                                                                                               |
| `url`            | {{ DOMXref("DOMString") }}                       | Die URL welche beim Konstruktor angegeben wurde. Dies ist immer die absolute URL. **Read only.**                                                                                                                                                                                                                                                                       |

## Konstanten

### Ready state Konstanten

Diese Konstanten werden vom `readyState` Attribut genutzt, um den Status der WebSocket-Verbindung zu beschreiben.

| Konstante    | Inhalt | Beschreibung                                                         |
| ------------ | ------ | -------------------------------------------------------------------- |
| `CONNECTING` | `0`    | Die Verbindung ist noch nicht hergestellt.                           |
| `OPEN`       | `1`    | Die Verbindung ist hergestellt und bereit darüber zu kommunizieren.  |
| `CLOSING`    | `2`    | Die Verbindung ist im Prozess des Schließens.                        |
| `CLOSED`     | `3`    | Die Verbindung ist geschlossen oder konnte nicht hergestellt werden. |

## Methoden

### close()

Schließt die WebSocket-Verbindung oder den Verbindungsversuch, falls dieser gerade existiert. Falls die Verbindung bereits `CLOSED` ist, macht diese Methode überhaupt nichts.

    void close(
      in optional unsigned short code,
      in optional DOMString reason
    );

###### Parameter

- `code` {{ optional_inline() }}
  - : Eine Nummer welche den Status-Code setzt, warum die Verbindung geschlossen wird. Falls dieser Parameter nicht gesetzt wird, wird er auf 1005 (welcher bei einer normalen Verbindung "Keinen Status erhalten" bedeutet) gesetzt.
- `reason` {{ optional_inline() }}
  - : Ein vom Menschen lesbarer String, welcher erklärt, warum die Verbindung geschlossen wurde. Dieser Text darf nicht länger als 123 Bytes UTF-8-Text sein. Dabei heißt dies nicht unbedingt, dass es auch 123 Zeichen sind.

###### Exceptions thrown

- `INVALID_ACCESS_ERR`
  - : Ein ungültiger `code` wurde gesetzt.
- `SYNTAX_ERR`
  - : Der `reason`-String ist zu lang oder enthält ungültige Zeichen.

###### Notizen

In Gecko vor Version Gecko 8.0 unterstützte diese Methode überhaupt keine Parameter. {{ geckoRelease("8.0") }}.

### send()

Überträgt Daten zu dem Server über die WebSocket-Verbindung.

    void send(
      in DOMString data
    );

    void send(
      in ArrayBuffer data
    );

    void send(
      in Blob data
    );

###### Parameter

- `data`
  - : Ein String der zum Server geschickt wird.

###### Exceptions thrown

- `INVALID_STATE_ERR`
  - : Die Verbindung hat aktuell nicht den Status `OPEN`.
- `SYNTAX_ERR`
  - : `data` enthält ungültige Zeichen.

###### Erläuterung

> **Note:** **Notiz:** Geckos Implementierung von der `send()` Methode unterscheidet sich ein wenig von der Spezifikation in {{Gecko("6.0")}}; Gecko gibt einen `boolean` zurück, welcher darüber auskunft gibt, ob die Verbindung immer noch hergestellt ist oder nicht (und, durch Erweiterung, dass die Daten erfolgreich gesammelt oder übertragen wurden); dies wurde in {{Gecko("8.0")}} korrigiert.In {{Gecko("11.0")}} ist die Unterstützung für [`ArrayBuffer`](/en/JavaScript_typed_arrays/ArrayBuffer "en/JavaScript typed arrays/ArrayBuffer") implementiert aber nicht die für {{ domxref("Blob") }} Datentypen.

## Weiterführendes

- [Writing WebSocket client applications](/en/WebSockets/Writing_WebSocket_client_applications "en/WebSockets/Writing WebSocket client applications")
- [HTML5: WebSockets](http://dev.w3.org/html5/websockets/)

## Browser Kompatibilität

{{Compat}}

### Gecko Notizen

In Gecko 6.0 ist der Konstruktur mit einem Prefix ausgestattet; du must `MozWebSocket()` benutzen:

    var mySocket = new MozWebSocket("http://www.example.com/socketserver");

Das `extensions`-Attribut wurde bis Gecko 8.0 nicht unterstützt.

> **Note:** **Notiz:** Vor {{Gecko("11.0")}} ausgehende Nachrichten welche mit der [send](#send) Methode versendet wurden, waren auf 16 MB begrenzt. Jetzt können sie bis zu 2 GB wachsen.

{{ languages ( {"zh-tw": "zh_tw/WebSockets/WebSockets_reference/WebSocket"} ) }}
