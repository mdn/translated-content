---
title: Erste Schritte
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
  - API
  - JavaScript
  - XMLHttRequest
translation_of: Web/Guide/AJAX/Getting_Started
original_slug: Web/Guide/AJAX/Erste_Schritte
---
{{DefaultAPISidebar("XMLHttpRequest")}}

Dieser Artikel führt Sie durch die AJAX-Grundlagen und gibt einige einfache praktische Beispiele für den Einstieg.

## Was ist AJAX?

AJAX steht für **A**synchronous **J**avaScript **A**nd **X**ML. Kurz gesagt ist es die Verwendung des XMLHttpRequest-Objekts zur Kommunikation mit Servern. Es kann Informationen in verschiedenen Formaten senden und empfangen, darunter JSON, XML, HTML und Textdateien. Das ansprechendste Merkmal von AJAX ist seine "asynchrone" Natur, d.h. es kann mit dem Server kommunizieren, Daten austauschen und die Seite aktualisieren, ohne die Seite aktualisieren zu müssen.

Die zwei Hauptmerkmale von AJAX ermöglichen Folgendes::

- Anfragen an den Server stellen, ohne die Seite neu zu laden
- Daten vom Server empfangen und mit ihnen arbeiten

## Schritt 1 – Wie man eine HTTP-Anfrage stellt

Um mit JavaScript eine HTTP-Anfrage an den Server zu stellen, wird eine Instanz eines Objekts mit der notwendigen Funktionalität benötigt. An dieser Stelle kommt XMLHttpRequest ins Spiel. Sein Vorgänger entstand im Internet Explorer als ein ActiveX-Objekt namens XMLHTTP. Dann folgten Mozilla, Safari und andere Browser, die ein XMLHttpRequest-Objekt implementierten, das die Methoden und Eigenschaften des ursprünglichen ActiveX-Objekts von Microsoft unterstützte. In der Zwischenzeit implementierte Microsoft auch XMLHttpRequest.

```js
// Old compatibility code, no longer needed.
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **Hinweis:** Zur Veranschaulichung ist die obige Abbildung eine etwas vereinfachte Version des Codes, der für die Erstellung einer XMLHttp-Instanz zu verwenden ist. Ein realistischeres Beispiel finden Sie in Schritt 3 dieses Artikels.

Nachdem die Anfrage abgesandt wurde, kommt eine Antwort zurück. Jetzt muss dem XMLHttp-Anfrageobjekt mitteilt werden, welche JavaScript-Funktion die Antwort behandeln wird, indem die `onreadystatechange` -Eigenschaft des Objekts gesetzt und nach der Funktion benannt wird, die aufgerufen werden soll, wenn sich der Status der Anfrage ändert, etwa so:

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

Beachten Sie, dass hinter dem Funktionsnamen keine Klammern oder Parameter stehen, da Sie der Funktion eine Referenz zuweisen, anstatt sie tatsächlich aufzurufen. Anstatt einen Funktionsnamen anzugeben, können Sie alternativ auch die JavaScript-Technik verwenden, Funktionen on the fly zu definieren (so genannte "anonyme Funktionen"), um die Aktionen zu definieren, die die Antwort verarbeiten, wie z.B:

```js
httpRequest.onreadystatechange = function(){
    // Process the server response here.
};
```

Nachdem Sie erklärt haben, was passiert, wenn Sie die Antwort erhalten, müssen Sie als Nächstes die Anfrage tatsächlich stellen, indem Sie die open()- und send()-Methoden des HTTP-Anfrageobjekts aufrufen, und zwar wie folgt::

```js
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();
```

- Der erste Parameter des Aufrufs von open() ist die HTTP-Anforderungsmethode - GET, POST, HEAD oder eine andere von Ihrem Server unterstützte Methode. Behalten Sie die Methode in Großbuchstaben gemäß dem HTTP-Standard bei, da sonst einige Browser (wie Firefox) die Anfrage möglicherweise nicht verarbeiten. Weitere Informationen zu den möglichen HTTP-Anforderungsmethoden finden Sie in den [W3C specs](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).
- Der zweite Parameter ist die URL, an die Sie die Anfrage senden. Als Sicherheitsfunktion können Sie standardmäßig keine URLs auf 3rd-Party-Domains aufrufen. Stellen Sie sicher, dass Sie den genauen Domainnamen auf allen Ihren Seiten verwenden, sonst erhalten Sie beim Aufruf von `open()` einen "permission denied"-Fehler. Ein häufiger Fallstrick ist der Zugriff auf Ihre Website über `domain.tld`, aber der Versuch, Seiten mit www\.domain.tld aufzurufen. Wenn Sie wirklich eine Anfrage an eine andere Domain senden müssen, siehe [HTTP access control (CORS)](/de/docs/Web/HTTP/CORS).
- Der optionale dritte Parameter legt fest, ob die Anforderung asynchron ist. Wenn dies der `true` ist (Standardeinstellung), wird die JavaScript-Ausführung fortgesetzt, und der Benutzer kann mit der Seite interagieren, solange die Serverantwort noch nicht eingetroffen ist. Dies ist das erste A in AJAX.

Der Parameter der send()-Methode kann jede Form von Daten beinhalten, die Sie beim `POST`-ing der Anfrage an den Server senden möchten. Formulardaten sollten in einem Format gesendet werden, das der Server parsen kann, wie ein Abfrage-String:

    "name=value&anothername="+encodeURIComponent(myVar)+"&so=on"

oder andere Formate wie `multipart/form-data`, JSON, XML, etc.

Beachten Sie, dass Sie möglicherweise den MIME-Typ der Anforderung angeben müssen, wenn Sie Daten `POST`-en wollen. Verwenden Sie beispielsweise Folgendes, bevor Sie `send()` für Formulardaten aufrufen, die als Abfragezeichenfolge gesendet werden::

```js
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

## Schritt 2 - Behandlung der Server-Antwort

Als Sie die Anfrage abgeschickt haben, haben Sie den Namen einer JavaScript-Funktion zur Behandlung der Antwort angegeben:

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

Was soll diese Funktion tun? Zunächst muss die Funktion den Status der Anfrage überprüfen. Wenn der Status den Wert `XMLHttpRequest.DONE` (entsprechend 4) hat, bedeutet dies, dass die vollständige Serverantwort empfangen wurde und Sie mit der Verarbeitung fortfahren können.

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // Everything is good, the response was received.
} else {
    // Not ready yet.
}
```

Die vollständige Liste `readyState` -Werte ist unter [XMLHTTPRequest.readyState](/de/docs/Web/API/XMLHttpRequest/readyState) dokumentiert und lautet wie folgt:

- 0 (uninitialized) or (**request not initialized**)
- 1 (loading) or (**server connection established**)
- 2 (loaded) or (**request received**)
- 3 (interactive) or (**processing request**)
- 4 (complete) or (**request finished and response is ready**)

Überprüfen Sie als Nächstes die [HTTP response status codes](/de/docs/Web/HTTP/Status) der HTTP-Antwort. Die möglichen Codes sind beim [W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) aufgelistet. Im folgenden Beispiel unterscheiden wir zwischen einem erfolgreichen und einem nicht erfolgreichen AJAX-Aufruf, indem wir nach einem `200 OK`-Antwort-Code suchen.

```js
if (httpRequest.status === 200) {
    // Perfect!
} else {
    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}
```

Nachdem Sie den Status der Anfrage und den HTTP-Statuscode der Antwort überprüft haben, können Sie mit den vom Server gesendeten Daten tun, was Sie wollen. Sie haben zwei Möglichkeiten, auf diese Daten zuzugreifen:

- `httpRequest.responseText` – gibt die Server-Antwort als eine Zeichenkette aus Text zurück
- `httpRequest.responseXML` – gibt die Antwort als ein XMLDocument-Objekt zurück, das Sie mit JavaScript-DOM-Funktionen durchlaufen können

Beachten Sie, dass die obigen Schritte nur gültig sind, wenn Sie eine asynchrone Anforderung verwendet haben (der dritte Parameter von `open()` war nicht spezifiziert oder auf true gesetzt). Wenn Sie eine synchrone Anforderung verwendet haben, brauchen Sie keine Funktion anzugeben, aber davon wird dringend abgeraten, da dies eine schlechte Benutzerführung zur Folge hat.

## Schritt 3 – Ein einfaches Beispiel

Lassen Sie uns das alles mit einer einfachen HTTP-Anfrage zusammenfassen. Unser JavaScript wird ein HTML-Dokument, `test.html`, anfordern, das den Text "Ich bin ein Test" enthält. Dann `alert()` wir den Inhalt der Antwort. Beachten Sie, dass dieses Beispiel [Vanilla JavaScript](https://wiki.selfhtml.org/wiki/Vanilla-JS) verwendet - es handelt sich nicht um jQuery. Außerdem sollten sich die HTML-, XML- und PHP-Dateien im selben Verzeichnis befinden.

```html
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>
```

In this example:

- Der Benutzer klickt auf den "Make a request"- Button;
- Der Ereignisbehandler ruft die `makeRequest()-`Funktion auf;
- Die Anfrage wird gestellt und dann (`onreadystatechange`) zur Ausführung an `alertContents()` übergeben;
- `alertContents()` prüft, ob die Antwort empfangen wurde und OK ist, dann `alert()` den Inhalt der `test.html`-Datei.

> **Hinweis:** Wenn Sie eine Anfrage an ein Stück Code senden, das XML statt einer statischen HTML-Datei zurückgibt, müssen Sie die Antwortheader so einstellen, dass sie im Internet Explorer funktionieren.. Wenn Sie den Header Content-Type `Content-Type: application/xml nicht angeben`, gibt IE nach der Zeile, in der Sie versucht haben, auf ein XML-Element zuzugreifen, einen JavaScript-Fehler " Object Expected " aus.

> **Note:** **Hinweis 2**: Wenn Sie den Header `Cache-Control: no-cache` nicht setzen, wird der Browser die Antwort zwischenspeichern und die Anfrage nie erneut senden, was das Debugging erschwert. Sie können auch einen immer unterschiedlichen GET-Parameter hinzufügen, wie einen Zeitstempel oder eine Zufallszahl (siehe [bypassing the cache](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache))

> **Note:** **Hinweis 3**: Wenn die `httpRequest`-Variable global verwendet wird, können sich konkurrierende Aufrufe von `makeRequest()` gegenseitig überschreiben und eine Wettlaufsituation auslösen. Wird der `httpRequest`lokal ain einer [closure](/en/JavaScript/Guide/Closures) Umgebung mit einer AJAX-Function deklariert, so wird dies vermieden.

Im Falle eines Kommunikationsfehlers (z. B. bei einem Serverausfall) wird beim Zugriff auf den Antwortstatus in der Methode `onreadystatechange` eine Ausnahmemeldung zurückgegeben. Um dieses Problem zu beheben, könnten Sie Ihre `if...then`-Anweisung in a `try...catch` packen:

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  catch( e ) {
    alert('Caught Exception: ' + e.description);
  }
}
```

## Schritt 4 – Arbeiten mit der XML-Antwort

Im vorherigen Beispiel haben wir nach dem Empfang der Antwort auf die HTTP-Anforderung die Eigenschaft `responseText` des Anforderungsobjekts verwendet, die den Inhalt der Datei `test.html` enthielt. Lassen Sie uns nun die `responseXML`-Eigenschaft ausprobieren.

Lassen Sie uns zunächst ein gültiges XML-Dokument erstellen, das wir später anfordern werden. Das Dokument (`test.xml`) enthält Folgendes:

```html
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

Im Skript brauchen wir nur die Anforderungszeile zu ändern:

```html
...
onclick="makeRequest('test.xml')">
...
```

In `alertContents()` müssen wir die Zeile `alert(httpRequest.responseText);`ersetzen mit:

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
```

Dieser Code nimmt das von `responseXML` übergebene `XMLDocument`-Objekt und verwendet DOM-Methoden, um auf einige der im XML-Dokument enthaltenen Daten zuzugreifen. Sie können [here](http://www.w3clubs.com/mozdev/test.xml) das `test.xml` and[here](http://www.w3clubs.com/mozdev/httprequest_test_xml.html) das aktualisierte test script aufrufen.

## Schritt 5 – Arbeiten mit Daten

Zum Schluss senden wir einige Daten an den Server und erhalten eine Antwort. Unser JavaScript wird diesmal eine dynamische Seite `test.php` anfordern, die die von uns gesendeten Daten entgegennimmt und einen "computed" string - "Hello, \[user data]!" - den wir `alert()`-en werden.

Zuerst fügen wir unserem HTML ein Textfeld hinzu, damit der Benutzer seinen Namen eingeben kann:

```html
<label>Your name:
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

Wir fügen auch eine Zeile zu unserem Event-Handler hinzu, um die Daten des Benutzers aus dem Textfeld zu holen und sie zusammen mit der URL unseres serverseitigen Skripts an die Funktion `makeRequest()` zu senden:

```js
  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php',userName);
  };
```

Wir müssen `makeRequest()` so modifizieren, dass es die Benutzerdaten akzeptiert und an den Server weiterleitet. Wir werden die Anfragemethode von `GET` auf `POST` ändern und unsere Daten als Parameter in den Aufruf von `httpRequest.send()` aufnehmen:

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

Die Funktion `alertContents()` kann auf die gleiche Weise wie in Schritt 3 geschrieben werden, um unsere Zeichenfolge zu `alert()`-en, wenn das alles ist, was der Server zurückgibt.. Nehmen wir jedoch an, der Server wird sowohl die berechnete Zeichenkette als auch die ursprünglichen Benutzerdaten zurückgeben. Wenn also unser Benutzer "Jane" in das Textfeld eingibt, würde die Antwort des Servers wie folgt aussehen::

`{"userData":"Jane","computedString":"Hi, Jane!"}`

Um diese Daten mit `alertContents()` zu nutzen, können wir nicht einfach den `responseText` ausgeben, sondern wir müssen ihn parsen und die gewünschte Eigenschaft `computedString` `alert()`-en:

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert('There was a problem with the request.');
    }
  }
}
```

Die `test.php`-Datei sollte folgendes enthalten:

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name . "!";
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

Weitere Informationen zu DOM-Methoden finden Sie unter [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model).

## Einfaches zeitgesteuertes XHR-Beispiel

Es folgt ein weiteres einfaches Beispiel - hier laden wir eine Textdatei über XHR, deren Struktur wie folgt angenommen wird:

    TIME: 312.05
    TIME: 312.07
    TIME: 312.10
    TIME: 312.12
    TIME: 312.14
    TIME: 312.15

Sobald die Textdatei geladen ist, `split()`-en wir die Elemente an jedem Zeilenumbruchszeichen (`\n` - im Grunde genommen dort, wo jeder Zeilenumbruch in der Textdatei steht) in ein Array auf und geben dann die vollständige Liste der Zeitstempel und den letzten Zeitstempel auf der Seite aus.

Dies wird alle 5 Sekunden wiederholt, unter Verwendung eines `setInterval()` Aufrufs. Die Idee wäre, dass eine Art serverseitiges Skript die Textdatei kontinuierlich mit neuen Zeitstempeln aktualisiert, und unser XHR-Code verwendet wird, um den neuesten Zeitstempel auf der Client-Seite zu melden.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>XHR log time</title>
    <style>

    </style>
  </head>
  <body>
    <p id="writeData" class="data">Off-Line</p>
    <p id="lastStamp">No Data yet</p>

    <script>

    const fullData = document.getElementById('writeData');
    const lastData = document.getElementById('lastStamp');

    function fetchData() {
      console.log('Fetching updated data.');
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "time-log.txt", true);
      xhr.onload = function() {
        updateDisplay(xhr.response);
      }
      xhr.send();
    }

    function updateDisplay(text) {
      fullData.textContent = text;

      let timeArray = text.split('\n');

      // included because some file systems always include a blank line at the end of text files.
      if(timeArray[timeArray.length-1] === '') {
        timeArray.pop();
      }

      lastData.textContent = timeArray[timeArray.length-1];
    }

    setInterval(fetchData, 5000);
    </script>
  </body>
</html>
```
