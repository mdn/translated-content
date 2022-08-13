---
title: Service-Worker benutzen
slug: Web/API/Service_Worker_API/Using_Service_Workers
tags:
  - Anleitung
  - Grundlagen
translation_of: Web/API/Service_Worker_API/Using_Service_Workers
---
{{ServiceWorkerSidebar}}

{{ SeeCompatTable() }}

Dieser Artikel informiert über die ersten Schritte mit Service-Workern, inklusive der Basisarchitektur, der Registrierung eines Service-Workers, der Installation und des Aktivierungsprozesses für einen neuen Service-Worker, Aktualisierung eines Service-Workers, Cache-Kontrolle und benutzerdefinierte Antworten, alles im Kontext von einer simplen App mit Offline-Funktionalität.

## Die Voraussetzung von Service-Workern

Ein großes Problem, unter dem Web-User seit Jahren leiden, ist der Verlust der Internetverbindung. Selbst die beste Webanwendung liefert eine furchtbare Benutzererfahrung, wenn sie nicht heruntergeladen werden kann. Es gab verschiedene Versuche, Technologien zu erstellen, die dieses Problem lösen (wie unsere [Offline](/en-US/Apps/Build/Offline)-Seite zeigt) und einige Themen konnten so angegangen werden. Das größte Problem aber ist, dass es immer noch keinen guten allgemeinen Kontroll-Mechanismus für Asset-Caching und eigene Netzwerkanfragen gibt.

Der vorausgegangene Versuch — AppCache — schien eine gute Idee, da er der Entwicklerin erlaubte, Assets zu spezifizieren, die leicht zu cachen sein sollten. Die Technologie traf jedoch Annahmen darüber, was die Entwicklerin zu tun gedachte und schlug an mehreren Stellen fehl, wenn die Webanwendung diesen Annahmen nicht eins zu eins folgte. Mehr Details dazu finden sich in Jake Archibalds "[Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag)".

> **Note:** **Beachte**: Wird [AppCache](/de/docs/Web/HTML/Using_the_application_cache) verwendet, um Offline-Support für eine Seite zur Verfügung zu stellen, wird seit Firefox 44 eine Warnmeldung auf der Console angezeigt, die Entwicklern statt dessen die Verwendung von [Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) empfiehlt ({{bug("1204581")}}).

Service-Worker sollen diese Probleme schließlich beheben. Ihre Syntax ist komplexer als die des AppCaches, der Vorteil ist aber, dass nun JavaScript benutzt werden kann, um die vom AppCache getroffenen Annahmen feinschrittig zu kontrollieren, was das zuvor beschriebene Problem und viele weitere löst. Mit Hilfe eines Service-Workers, kann die Webanwendung leicht aufgesetzt werden, um vorrangig gecachte Assets zu benutzen und so auch im Offline-Fall eine bestimmte Benutzererfahrung zu ermöglichen, bevor weitere Daten aus dem Netzwerk geladen werden (auch bekannt als [Offline First](http://offlinefirst.org/)-Ansatz). Native Apps stellen dieses Feature bereits bereit, was der Grund dafür ist, dass native Apps oft Webanwendungen vorgezogen werden.

## Einrichtung zur Verwendung von Service-Workern

Viele der Eigenschaften von Service-Workern sind inzwischen in neueren Versionen unterstützender Browser standardmäßig eingestellt. Sollte der Beispielcode in einem der installierten Browser jedoch nicht funktionieren, kann die explizite Aktivierung einer Einstellung vonnöten sein:

- **Firefox Nightly**: Navigieren Sie zu `about:config` und setzen Sie `dom.serviceWorkers.enabled` auf true; Starten Sie den Browser anschließend neu.
- **Chrome Canary**: Navigieren Sie zu `chrome://flags` und aktivieren Sie `experimental-web-platform-features`; Starten Sie den Browser anschließend neu (Beachten Sie, dass einige Funktionen jetzt standardmäßig in Chrome aktiviert sind).
- **Opera**: Navigieren Sie zu `opera://flags` und aktivieren Sie `Support for ServiceWorker`; Starten Sie den Browser anschließend neu.

Stellen Sie weiterhin sicher, dass Ihr Code über HTTPS gesendet wird — Service-Worker sind aus Sicherheitsgründen auf HTTPS beschränkt. Da GitHub (resp. GitHub Pages) HTTPS unterstüzt, ist es ein guter Ort, um Experimente zu hosten.

## Grundarchitektur

![](https://mdn.mozillademos.org/files/8241/flowchart-production-version.png)

Ein einfache Implementierung von Service-Workern folgt für gewöhnlich den folgenden Schritten:

1. Die URL des Service-Workers wird aufgerufen und via {{domxref("serviceWorkerContainer.register()")}} registriert.
2. War dies erfolgreich, wird der Service-Worker in einem {{domxref("ServiceWorkerGlobalScope")}} ausgeführt; Im Prinzip ist dies eine besondere Art von Worker-Kontext, welcher außerhalb des Threads des Hauptscriptes läuft und keinen Zugriff auf das DOM hat.
3. Der Service-Worker kann nun Events verarbeiten.
4. Die Installation des Workers wird versucht, wenn Seiten, die durch Service-Worker verwaltet werden, wiederholt besucht werden. Ein Install-Event ist immer das erste, welches an einen Service-Worker gesendet wird (Dies kann beispielsweise benutzt werden, um den Prozess zu starten, der die IndexDB befüllt und Seiten-Assets cacht). Das ist der gleiche Ablauf, der bei der Installation einer nativen oder FirefoxOS App stattfindet - alles für die Offline-Nutzung vorbereiten.
5. Sobald der `oninstall`-Handler abgeschlossen ist, wird der Service-Worker als installiert betrachtet.
6. Der nächste Schritt ist Aktivierung. Sobald der Service-Worker installiert wurde, erhält dieser ein `activate`-Event. Der Hauptnutzen von `onactivate` ist das Aufräumen von Ressourcen, die in vorherigen Versionen des Service-Worker-Scripts genutzt wurden.
7. Der Service-Worker kann nun Webseiten verwalten, aber nur wenn diese nach dem erfolgreichen Abschluss von `register()` aufgerufen wurden. So wird ein Dokument, welches ohne Service-Worker gestartet wurde bis zu einem Neuladen nicht von einem Service-Worker verwaltet werden.

### Promises

[Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sind ein sehr guter Mechanismus um asynchrone Operationen, deren Erfolg voneinander abhängt, auszuführen. Diese Technologie ist zentral für die Arbeitsweise von Service-Workern.

Promises ermöglichen viele verschiedene Dinge, für unseren Zweck reicht es allerdings aus zu wissen, dass, wenn eine Funktion eine Promise zurück gibt, ein `.then()` an das Ende des Aufrufs gehangen werden und mit Callbacks für Erfolg, Misserfolg, etc. versehen werden kann. Des Weiteren kann `.catch()` am Ende benutzt werden, um einen besonderen Callback für den Misserfolg hinzuzufügen.

Vergleichen wir nun die traditionelle synchrone Callback-Struktur mit ihrem asynchronen Promise-Äquivalent.

#### sync

```js
try {
  var value = myFunction();
  console.log(value);
} catch(err) {
  console.log(err);
}
```

#### async

```js
myFunction().then(function(value) {
  console.log(value);
  }).catch(function(err) {
  console.log(err);
});
```

Im ersten Beispiel müssen wir warten, bis die `myFunction()` ausgeführt wird und `value` zurückgegeben wird bevor weiterer Code ausgeführt werden kann. Im zweiten Beispiel gibt `myFunction()` eine Promise für `value`zurück, danach kann weiterer Code ausgeführt werden. Wenn die Promise aufgelöst wird, wird der Code in `then` asynchron ausgeführt.

Nun zu einem echten Beispiel: Was, wenn wir Bilder dynamisch laden, aber sicher stellen wollen, dass sie erst angezeigt werden, wenn sie vollständig geladen sind? Dies ist etwas, was häufig gemacht werden soll, aber sehr kompliziert werden kann. `.onload` kann benutzt werden, um ein Bild erst anzuzeigen, wenn es geladen wurde. Was aber geschieht mit Events, die stattfinden, bevor wir auf diese hören können? Man könnte versuchen, dieses Problem mit Hilfe von `.complete` zu umgehen, was jedoch nicht betriebssicher ist und den Umgang mit mehreren Bildern gleichzeitig nicht abdeckt. Auch ist dieser Ansatz weiterhin synchron und blockiert somit den Haupt-Thread.

Wir können jedoch stattdessen eine eigene Promise bauen, die diesen Fall abdeckt. (Siehe unser [Promises-Test-Beispiel](https://github.com/mdn/promises-test) für den entsprechenden Quellcode, oder [hier](https://mdn.github.io/promises-test/)für eine Liveanwendung.)

{{note("Eine echte Service-Worker-Implementierung würde Caching und das <code>onfetch</code>-Event statt der überholten XMLHttpRequest API benutzen. Diese Features wurden hier nicht benutzt, um den Fokus auf Promises setzen zu können.")}}

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Bild wurde nicht geladen; Fehlercode:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('Ein Netzwerkfehler ist aufgetreten.'));
    };

    request.send();
  });
}
```

Wir geben eine neue Promise mit Hilfe des `Promise()`-Konstruktors zurück, der als Parameter eine Callback-Funktion mit `resolve`- und `reject`- Parametern erhält. Innerhalb dieser Funktion müssen wir definieren, was passieren muss, dass die Promise erfolgreich aufgelöst oder zurückgewiesen wird — In diesem Fall also entweder einen `200 OK` Status zurückgegeben bekommen oder nicht — und dann bei Erfolg `resolve` und bei Misserfolg `reject` aufzurufen. Der restliche Inhalt dieser Funktion sind Schritte zum Umgang mit XHR, über die wir uns im Moment keine Gedanken machen müssen.

Wenn wir beim Aufruf der `imgLoad()`-Funktion angelangt sind, rufen wir diese mit der URL zu dem Bild, welches wir laden möchten, wie erwartet auf, der restliche Code ist jedoch ein bisschen anders:

```js
var body = document.querySelector('body');
var myImage = new Image();

imgLoad('myLittleVader.jpg').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});
```

Die `then()`-Methode wird an das Ende des Funktionsaufrufes gehangen, und enthält zwei Funktionen – die erste wird ausgeführt, wenn die Promise aufgelöst wird, die zweite, wenn sie zurückgewiesen wird. Im Auflösungsfall zeigen wir das Bild innerhalb von `myImage` an und fügen es an den body an (Das Argument der `then()`-Funktion ist die request.response innerhalb der resolve-Methode des Promises); im Zurückweisungsfall geben wir einen Fehler in der Konsole aus.

Dies alles geschieht asynchron.

> **Note:** **Beachte**: Promises können aneinandergekettet werden, zum Beispiel:
> `myPromise().then(success, failure).then(success).catch(failure);`

> **Note:** **Beachte**: Weitere Informationen zu Promises finden sich in Jake Archibalds Artikel [JavaScript Promises: there and back again](http://www.html5rocks.com/en/tutorials/es6/promises/).

## Service-Worker Demo

Um die Grundlagen der Registrierung und Installation eines Service-Workers zu demonstrieren, haben wir eine kleine Demo namens [sw-test](https://github.com/mdn/sw-test) geschaffen, die eine überschaubare Star-Wars-Lego-Bildergalerie ist. Sie nutzt eine Promise-unterstützte Funktion um Bilddaten von einem JSON-Objekt zu lesen und diese Bilder mit Hilfe von Ajax zu laden, bevor sie untereinander auf der Webseite angezeigt werden. Die Anwendung ist statisch und einfach gehalten. Sie registriert, installiert und aktiviert des Weiteren einen Service-Worker und cacht die erforderlichen Dateien für die Offline-Nutzung, sollten weitere Aspekte dieser Spezifikation bei den aufrufenden Browsern aktiviert sein.

![](https://mdn.mozillademos.org/files/8243/demo-screenshot.png)

Der [Quellcode](https://github.com/mdn/sw-test/) ist auf GithHub zu finden, eine Live-Version kann [hier](https://mdn.github.io/sw-test/) betrachtet werden. Der Aspekt, den wir hier betrachten wollen, ist die Promise (siehe [app.js Zeilen 17-42](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L17-L42)), die eine modifizierte Version dessen ist, was in der [Promises Test Demo](https://github.com/mdn/promises-test) zu lesen war. Die Unterschiede sind die folgenden:

1. Im Original haben wir nur eine URL zu einem Bild, welches wir laden wollen, hineingereicht. In dieser Version reichen wir ein JSON-Fragment hinein, welches alle Daten für ein einzelnes Bild beinhaltet (in [image-list.js](https://github.com/mdn/sw-test/blob/gh-pages/image-list.js) kann ein Blick darauf geworfen werden). Das geschieht, weil wegen der Asynchronität die gesamten Daten für jedes Auflösen der Promise in in diese hineingereicht werden müssen. Würde nur die URL hineingereicht werden und versucht werden, während der `for()-`Schleife, auf andere Dinge im JSON zuzugreifen, schlüge dies fehl, da die Promise nicht zeitgleich mit dem Abschluss der Iteration auflösen würde, da dies ein synchroner Prozess ist.
2. Wir lösen die Promise des Weiteren mit einem Array auf, da wir den geladenen Bild-Blob, aber auch Bildname, Bildnachweis und Alt-Text später der auflösenden Funktion zur Verfügung stellen wollen. (siehe [app.js Zeilen 26-29](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L26-L29)). Promises lösen mit einem einzigen Argument auf, werden also mehrere Werte gebraucht, muss dies über ein Array bzw. Objekt gelöst werden.
3. Um auf die Werte der aufgelösten Promise zuzugreifen, greifen wir auf eben jene Funktion zu. (siehe [app.js Zeilen 55-59](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L55-L59).) Dies mag auf den ersten Blick seltsam erscheinen, ist aber die korrekte Handhabung von Promises.

## Service-Worker auf die Bühne, bitte!

Auf geht's zu Service-Workern!

### Service-Worker registrieren

Der erste Code-Block in der JavaScript-Datei unserer App — `app.js` — sieht wie folgt aus. Dies ist unser Startpunkt für die Nutzung von Service-Workern.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {
    // Registrierung erfolgreich
    console.log('Registrierung erfolgreich. Scope ist ' + reg.scope);
  }).catch(function(error) {
    // Registrierung fehlgeschlagen
    console.log('Registrierung fehlgeschlagen mit ' + error);
  });
};
```

1. Der äußere Block kümmert sich um die Feature-Erkennung um sicher zu stellen, dass Service-Worker unterstützt werden, bevor einer registriert wird.
2. Als nächstes nutzen wir die {{domxref("ServiceWorkerContainer.register()") }}-Funktion, um den Service Worker für diese Seite zu registrieren. Dieser ist nur eine JavaScript-Datei innerhalb unserer App. (Beachte, dass die URL der Datei relativ zum Ursprung ist, und nicht zur JavaScript-Datei, die sie referenziert.)
3. Der `scope` Parameter ist optional, und kann benutzt werden, um den Teil der. Applikation einzuschränken, den der Service-Worker kontrollieren soll. In diesem Fall, haben wir '`/sw-test/'`spezifiziert, was alle Inhalte unter dem App-Ursprungsverzeichnis beinhaltet. Wird der Parameter weggelassen, würde standardmäßig dieses Verzeichnis gewählt werden. Wir haben es hier zu Anschauungszwecken jedoch spezifiziert..
4. Die `.then()` Promise-Funktion wird genutzt, um den Erfolgsfall an unsere Promise-Struktur zu hängen. Wenn die Promise erfolgreich auflöst, wird der Programmcode innerhalb dieser Funktion ausgeführt.
5. Zuletzt fügen wir die`.catch()`-Funktion ans Ende an, die ausgeführt wird, sollte die Promise zurückgewiesen werden.

Jetzt ist ein Service-Worker registriert, der in einem Worker-Kontext läuft und daher keinen Zugriff auf das DOM hat. Code im Service-Worker wird außerhalb der normalen Seiten ausgeführt, um deren Laden zu kontrollieren.

Ein einzelner Service-Worker kann viele Seiten kontrollieren. Wird eine Seite innerhalb des spezifizierten Codes geladen, wird der Service-Worker für diese eingerichtet und nimmt seine Arbeit auf. Es sollte daher nicht vergessen werden, dass vorsichtig mit globalen Variablen im Service-Worker-Script umgegangen werden muss: Jede Seite im Scope hat den selben Worker, mit dem sie arbeitet.

> **Note:** **Beachte**: Service-Worker funktionieren wie Proxy-Server, was es unter anderem erlaubt, Netzwerkanfragen und -antworten zu modifizieren und mit Objekten aus dem Cache zu ersetzen.

> **Note:** **Beachte**: Eine gute Sache an Service-Workern ist, dass, wenn Feature-Erkennung wie im obigen Beispiel verwendet wird, Browser, die Service-Worker nicht unterstützen, die App dennoch normal und wie erwartet benutzen können. Wenn weiterhin AppCache und Service-Worker gemeinsam auf einer Seite benutzt werden, werden Browser, die AppCache aber nicht Service-Worker unterstützen, ersteres benutzen. Browser die beides unterstützen, werden AppCache zu Gunsten von Service-Workern ignorieren.

#### Wieso schlägt die Registrierung meines Service Workers fehl?

Dies kann aus folgenden Gründen passieren:

1. Die Applikation läuft nicht unter HTTPS
2. Der Pfad zur Service-Worker-Datei ist nicht korrekt beschrieben — er muss relativ zum Ursprung geschrieben sein, nicht relativ zum Wurzelverzeichnis der App. In unserem Beispiel liegt der Worker unter `https://mdn.github.io/sw-test/sw.js`, wohingegen das Wurzelverzeichnis der App `https://mdn.github.io/sw-test/`ist. Der Pfad muss also als `/sw-test/sw.js`, geschrieben werden, und nicht als `/sw.js`.
3. Der Service-Worker, auf den verwiesen wird, hat einen anderen Ursprung als die App. Auch das ist nicht gestattet.

Weiterhin zu beachten:

- Der Service-Worker wird nur Netzwerkanfragen von Clients innerhalb seines Scopes abgreifen.
- Der maximale Scope eines Service-Workers ist der Ort des Workers selbst.
- Ist der Service-Worker auf einem Client aktiv, der mit dem `Service-Worker-Allowed-`Header ausgeliefert wird, kann eine Liste von maximalen Scopes für diesen Worker definiert werden.
- Im Firefox sind Service-Worker-APIs versteckt und können nicht genutzt werden, wenn die Nutzer sich im Inkognito-Modus befinden.

### Installation und Aktivierung: Füllen des Caches

Nachdem der Service-Worker registriert wurde, versucht der Browser den Service-Worker für die entsprechende Seite zu installieren und zu aktivieren.

Das Install-Event wird abgesetzt wenn eine Installation erfolgreich abgeschlossen wurde. Dieses Event wird für gewöhnlich dazu genutzt, den Offline-Cache des Browsers mit den Assets zu befüllen, die benötigt werden, damit die App offline laufen kann. Um das zu erreichen, nutzen wir die Storage-API der Service-Worker — {{domxref("cache")}} — ein globales Objekt des Service-Workers, welches uns erlaubt Assets, die durch Netzwerkantworten geliefert wurden, zu speichern. Diese API arbeitet ähnlich wie der Browser interne Cache, ist allerdings Domain spezifisch und besteht, bis Gegenteiliges gesagt wird, was erneut volle Kontrolle erlaubt.

> **Note:** **Beachte**: Die Cache API ist nicht in jedem Browser unterstützt. (Siehe auch den Abschnitt [Browserkompabilität](#browserkompabilität) für weitere Informationen.) Soll sie jetzt genutzt werden, kann ein Polyfill in Betracht gezogen werden, wie er beispielsweise in [Googles Topeka Demo](https://github.com/Polymer/topeka/blob/master/sw.js) enthalten ist, oder die Assets in [IndexedDB](/de/docs/Web/API/IndexedDB_API) gespeichert werden.

Wir beginnen diesen Abschnitt mit einem Blick auf ein Code-Beispiel — Das ist der [erste Block in unserem Service-Worker](https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L1-L18):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

1. Hier wird dem Service-Worker (mit Hilfe von `this`) ein `install`Event-Listener hinzugefügt, und die {{domxref("ExtendableEvent.waitUntil()") }}-Methode dem Event angehängt — das stellt sicher, dass der Service-Worker nicht installiert wird, bis der Code innerhalb von `waitUntil()` erfolgreich ausgeführt wurde.
2. Innerhalb von `waitUntil()` benutzen wir die [`caches.open()`](/de/docs/Web/API/CacheStorage/open)-Methode um einen neuen Cache mit dem Namen `v1` zu erstellen, welcher die erste Version des Ressourcenspeichers unserer Seite sein wird. Das gibt eine Promise für den erstellten Cache zurück; sobald diese aufgelöst ist, rufen wir eine Funktion auf, die wiederum `addAll()` auf dem erstellten Cache aufruft und als Parameter einen Array mit zum Ursprung relativen URLs der zu cachenden Ressourcen enthält.
3. Sollte die Promise zurückgewiesen werden, schlägt die Installation fehl und der Worker tut nichts. Das ist in Ordnung und bietet die Möglichkeit, den Code zu korrigieren und es bei der nächsten Registrierung erneut zu versuchen.
4. Nach erfolgreicher Installation wird der Service-Worker aktiviert. Wurde der Service-Worker zum ersten mal installiert und aktiviert ist dies nicht weiter von Bedeutung, aber wichtig, wenn der Service-Worker aktiviert wird. (Siehe den Abschnitt [Aktualisieren des Service-Workers](#aktualisieren_des_service-workers) im späteren Verlauf.)

> **Note:** **Beachte**: [localStorage](/de/docs/Web/Guide/API/DOM/Storage) funktioniert ähnlich wie der Service-Worker-Cache, ist aber synchron und daher in Service-Workern nicht gestattet.

> **Note:** **Beachte**: [IndexedDB](/de/docs/Web/API/IndexedDB_API) kann, wenn nötig, innerhalb eines Service-Workers benutzt werden.

### Eigene Antworten auf Netzwerkanfragen

Da jetzt die Assets der Seite gecacht wurden, kann nun den Service-Workern mitgeteilt werden, was sie mit dem gecachten Inhalt tun sollen. Dies geschieht mit Hilfe des `fetch`-Events.

Ein `fetch`-Event wird jedes Mal abgesetzt, wenn eine Ressource, die vom Service-Worker kontrolliert wird (also die Dokumente innerhalb seines Scopes sowie die dort referenzierten Ressourcen), geladen wird. (Wenn also `index.html` eine Cross-Origin-Anfrage an ein eingebettetes Bild absetzt, geht auch das durch den Service-Worker.)

Ein `fetch` Event-Listener kann dem Service-Worker hinzugefügt, und die `respondWith()`-Methode des Events aufgerufen werden, um die HTTP-Antworten abzufangen und mit unseren eigenen zu ersetzen.

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    // Hier eigene Antworten
  );
});
```

Es kann damit begonnen werden, jedes Mal mit der Ressource zu antworten, deren URL der der Netzwerkanfrage entspricht:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
```

`caches.match(event.request)` erlaubt uns, jede Ressource, die vom Netzwerk angefragt wird, mit der entsprechenden Ressource des Caches zu ersetzen, so diese verfügbar ist. Der Abgleich geschieht wie bei normalen HTTP-Anfragen über URLs und Header.

Betrachten wir einige weitere Optionen, die wir haben, wenn wir unsere eigenen Antworten definieren wollen (siehe auch die [Fetch-API Dokumentation](/de/docs/Web/API/Fetch_API) für weitere Informationen über {{domxref("Request")}}- und {{domxref("Response")}}-Objekte.)

1. Der `{{domxref("Response.Response","Response()")}}`-Konstruktor erlaubt uns das Erstellen einer benutzerdefinierten Antwort. In diesem Fall geben wir eine einfache Zeichenkette zurück:

    ```js
    new Response('Hallo vom freundlichen Service-Worker!');
    ```

2. Das folgende komplexere `Response`-Beispiel zeigt, dass optional eine Anzahl an Headern in der Antwort gesetzt werden können, die die Standard HTTP-Responce-Header emulieren. Hier wird dem Browser nut der Content-Type unserer künstlichen Antwort mitgeteilt:

    ```js
    new Response('<p>Hallo from freundlichen Service-Worker!</p>', {
      headers: { 'Content-Type': 'text/html' }
    })
    ```

3. Wenn im Cache kein Treffer gefunden wurde, könnte der Browser angewiesen werden, die standardmäßigen Netzwerkanfrage mit {{domxref("GlobalFetch.fetch","fetch")}} auszuführen, um die Ressource aus dem Netzwerk zu laden, wenn dieses verfügbar ist:

    ```js
    fetch(event.request)
    ```

4. Wenn es keinen Treffer gab und auch das Netzwerk nicht verfügbar ist, kann die Anfrage mit einer Ausweichseite beantwortet werden, indem {{domxref("CacheStorage.match","match()")}} folgendermaßen verwendet wird:

    ```js
    caches.match('/fallback.html');
    ```

5. Viele Informationen über jeden Request können erhalten werden, indem Parameter des {{domxref("Request")}}-Objekts, welches vom {{domxref("FetchEvent")}} zurückgegeben wird, aufgerufen werden.

    ```js
    event.request.url
    event.request.method
    event.request.headers
    event.request.body
    ```

## Umgang mit fehlgeschlagenen Cache-Anfragen

`caches.match(event.request)`ist hilfreich, wenn es einen Treffer im Service-Worker-Cache gibt. Was aber, wenn das nicht der Fall ist? Stellten wir keine Möglichkeit zur Behandlung einer scheiternden Cache-Anfrage bereit, würde unsere Promise zurückgewiesen werden und wir würden einem Netzwerkfehler gegenüber stehen, wenn es keinen Treffer im Cache gibt.

Glücklicherweise erlaubt die Promise basierte Struktur des Service-Workers weitere Optionen bereitzustellen. Beispielsweise:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    })
  );
});
```

Falls die Promise zurückgewiesen wird, gibt die `catch()`-Funktion die Standard-Netzwerkanfrage für die Ressource zurück, was es erlaubt, diese vom Server zu laden, sollte eine Netzwerkverbindung bestehen.

Ein weiterer Weg wäre, die Ressource nicht bloß aus dem Netzwerk zu laden, sondern für zukünftige Anfragen im Cache zu speichern, damit diese ebenfalls offline verwendet werden können. Das bedeutet, sollten weitere Bilder zur Star-Wars-Galerie hinzugefügt werden, kann unsere App diese laden und cachen. Es würde folgendermaßen implementiert werden:

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
```

Wir geben an dieser Stelle die Standard-Netzwerkanfrage mit `return`` fetch(event.request)`zurück, die wiederum eine Promise zurückgibt. Wenn diese Promise aufgelöst wird, reagieren wir mit einer Funktion, die unseren Cache mit `caches.open('v1')` öffnet, was eine weitere Promise zurückgibt. Wenn diese auflöst, wird `cache.put()` benutzt, um die Ressource dem Cache hinzuzufügen. Diese wird aus `event.request`gezogen, die Netzwerkantwort mit `response.clone()` kopiert und dem Cache hinzugefügt. Die Kopie wird gespeichert und die Original-Netzwerkantwort an den Browser und somit an die Seite, die die Anfrage gestellt hat, zurückgegeben.

Warum das alles? Der Datenstrom von Netzwerkanfrage und -antwort kann nur ein einziges Mal gelesen werden. Damit die Netzwerkantwort an den Browser zurückgegeben werden und trotzdem auch im Cache gespeichert werden kann, muss sie kopiert werden. Dadurch kann das Original an den Browser gereicht und die Kopie im Cache gespeichert werden. Original und Kopie werden somit jeweils nur einmal gelesen.

Zuletzt bleibt noch das Problem, was passieren soll, wenn es weder einen Treffer im Cache noch eine verfügbare Netzwerkverbindung gibt. Zur Zeit schlägt unsere Anfrage an die Ressource fehl. Wenn wir eine Ausweichlösung bereitstellen, werden, egal was passiert, die Nutzer eine Antwort bekommen:

    this.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(resp) {
          return resp || fetch(event.request).then(function(response) {
            caches.open('v1').then(function(cache) {
              cache.put(event.request, response.clone());
            });
            return response;
          });
        }).catch(function() {
          return caches.match('/sw-test/gallery/myLittleVader.jpg');
        })
      );
    });

Wir haben uns an dieser Stelle für ein Ausweichbild entschieden, da die einzigen Anfragen, die potentiell fehlschlagen, die für neue Bilder in der Galerie sein werden. Um alles andere wurde sich bereits während des `install`-Events der Installation gekümmert.

## Aktualisieren des Service-Workers

Wurde der Service-Worker bereits installiert, aber eine neue Version bei Neuladen der Seite bereitgestellt werden, wird dieser neue Worker im Hintergrund installiert, jedoch noch nicht aktiviert. Das geschieht erst dann, wenn keine der Seiten, die den alten Worker nutzen, mehr geladen werden. Sobald dies der Fall ist, wird der neue Service-Worker aktiviert.

Damit dies geschehen kann, muss der`install`-Event-Listener im neuen Service-Worker ungefähr folgendermaßen angepasst werden (Augenmerk auf die neue Versionsnummer):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

             …

              // hier können weitere neue Ressourcen stehen...
      ]);
    });
  );
});
```

Während dies alles geschieht, ist weiterhin die vorherige Version des Service-Workers für die Verwaltung der Anfragen verantwortlich und die neue Version wird im Hintergrund installiert. Der neue Cache hat in diesem Beispiel den Namen `v2`, so dass der Cache mit dem Namen `v1` nicht beeinträchtigt wird.

Wenn keine Seiten mehr die aktuelle Version benutzen, wird der neue Worker aktiviert und verwaltet die Netzwerkanfragen.

### Löschen des alten Caches

Es steht weiterhin ein `activate`-Event zur Verfügung. Es wird generell genutzt, um Dinge abzuhandeln, die die alte Version stark beeinträchtigt hätten, würden sie zu deren Laufzeit ausgeführt werden. Dies betrifft zum Beispiel das Löschen der alten Caches. Das Event ist auch nützlich, um Daten zu löschen, die nicht mehr gebraucht werden und so zu verhindern, dass zu viel Speicherplatz verbraucht wird — jeder Browser hat eine feste Obergrenze für die Menge an Cache-Speicherplatz, die ein Service-Worker nutzen kann. Der Browser selbst verwaltet den Speicherplatz an sich selbstständig, aber es kann passieren, dass der Cache-Speicherplatz für eine Seite gelöscht wird, denn wenn der Browser Daten dieser Art löscht, dann entweder alle oder keine Daten der Seite.

Promises, die `waitUntil()` hineingereicht werden, blockieren weitere Events bis diese abgearbeitet wurden, so dass sicher gestellt werden kann, dass alle Aufräumarbeiten abgeschlossen sind, bevor die erste Netzwerkanfrage an den neuen Cache gestellt wird.

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```

## Entwicklertools

Chrome hat `chrome://inspect/#service-workers`, wo Aktivität und Speicherplatz der aktuellen Service-Worker eingesehen werden können, und `chrome://serviceworker-internals`, wo mehr Details zu finden sind und Service-Worker gestartet, beendet und der Fehlersuche unterworfen werden können. Zukünftige Versionen werden zusätzlich Mittel zur Netzwerkdrosselung und einen Offline-Modus bereitsellen, um schlechte oder nicht vorhandene Netzwerkverbindungen zu simulieren.

Auch Firefox hat die Entwicklung nützlicher Werkzeuge in Bezug auf Service-Worker begonnen:

- Unter `about:serviceworkers` können registrierte Service-Worker eingesehen und aktualisiert oder entfernt werden
- Für Testzwecke kann die HTTPS-Beschränkung durch Aktivieren der "Service-Worker über HTTP aktivieren (bei geöffneten Entwicklerwerkzeugen)"-Option in den Firefox-Entwicklerwerkzeug-Optionen (Zahnrad-Menü)

## Spezifikationen

| Spezifikation                                    | Status                               | Kommentar            |
| ------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '')}} | {{Spec2('Service Workers')}} | Initiale Definition. |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/de/docs/Web/Guide/Performance/Using_web_workers)
