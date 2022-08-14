---
title: Service Worker API
slug: Web/API/Service_Worker_API
tags:
  - API
  - Offline
  - Referenz
  - Service-Worker
  - Worker
translation_of: Web/API/Service_Worker_API
---
{{ServiceWorkerSidebar}}

{{ SeeCompatTable() }}

Service-Worker verhalten sich im Wesentlichen wie Proxy-Server, welche zwischen der Webanwendung bzw. dem Browser und dem Netzwerk (sofern dieses verfügbar ist) sitzen. Sie sollen u. a. das Erstellen wirksamer Offline-Erfahrungen ermöglichen und können Netzwerkanfragen abfangen und passende Maßnahmen abhängig davon ergreifen, ob das Netzwerk verfügbar ist und ob der Server veränderte Ressourcen enthält. Sie erlauben außerdem den Zugriff auf Push-Benachrichtigungen und Background Sync APIs.

## Konzepte von Service-Workern und deren Nutzung

Ein Service-Worker ist ein ereignisgesteuerter [Worker](/de/docs/Web/API/Worker), der an einem Ursprung und einem Pfad registriert ist. Sie ist eine JavaScript-Datei, die in Abhängigkeit zu einer Webseite steht, Anfragen von Ressourcen abfängt und cached. In manchen Situationen kann es das Verhalten der Webseite beeinflussen. Ein häufiger Anwendungsfall ist die Abfrage, ob ein Netzwerk verfügbar ist, oder nicht.

Ein Service-Worker läuft in einem Worker-Kontext. Es hat keinerlei Zugriff auf das DOM und läuft in einem separaten Thread, also isoliert vom JavaScript, dass die Hauptinteraktionslogik der Website steuert. Es läuft vollständig asynchron und verhindert die Ausführung anderer Scripte nicht. Daraus resultiert, dass APIs wie [XHR](/de/docs/Web/API/XMLHttpRequest) oder [LocalStorage](/de/docs/Web/Guide/API/DOM/Storage) nicht in Service-Workern benutzt werden können.

Service-Worker laufen aus Sicherheitsgründen nur über das HTTPS-Protokoll. Veränderte Netzwerkanfragen könnten "Man in the middle"-Angriffe deutlich leichter machen.

> **Note:** **Hinweis:** Service-Worker haben in Bereichen wie [AppCache](http://alistapart.com/article/application-cache-is-a-douchebag) gezeigt, dass sie dort besonders gut genutzt werden können, da sie keine Vermutungen darüber treffen, was Sie machen wollen und brechen ihre Aktionen entsprechend ab. Sie haben deshalb die Kontrolle über alles.

> **Note:** **Hinweis**: Service-Worker basieren auf [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Generell sind sie abhängig von Anfragen und sie werden mit einer erfolgreichen oder einer fehlerhaften Aktion antworten. Die Architektur ist deshalb ideal dafür.

### Registrierung

Ein Service-Worker wird über die {{domxref("ServiceWorkerContainer.register()")}}-Methode registriert. Falls sie erfolgreich war, wird Ihr Service-Worker vom Client heruntergeladen und versucht eine Installation/Aktivierung (siehe unten) für URLs, die innerhalb der Quelle liegen oder die URLs, die Sie vorgeben.

### Download, Installation und Aktivierung

Ihr Service-Worker muss folgenden Lebenszyklus durchlaufen:

1.  Download
2.  Installation
3.  Aktivierung

Der Service-Worker wird sofort mit heruntergeladen, sobald der Nutzer erstmals eine von Service-Workern kontrollierte Seite aufruft.

Danach wird es alle 24 Stunden neu heruntergeladen. Es kann auch in kürzeren Abständen heruntergeladen werden, aber die 24 Stunden können **nicht** überschritten werden. Damit sollen die Ladezeiten kürzer werden.

Eine Installation wird versucht, wenn die heruntergeladene Datei neu ist, also Unterschiede byteweise verglichen mit dem bestehenden Service-Worker aufweist oder es der erste Service-Worker ist, der für diese Seite heruntergeladen wurde.

Wenn ein Service-Worker erstmals verfügbar ist, wird eine Installation versucht. Nach einer erfolgreichen Installation ist es aktiviert.

Wenn bereits ein bestehender Service-Worker installiert wurde, wird die neue Version im Hintergrund installiert, aber noch nicht aktiviert. Zu diesen Zeitpunkt wartet der Worker, bis alle Seiten heruntergeladen wurden, die noch den alten Service-Worker nutzen. Sobald alle Seiten geladen worden sind, wird der neue Service-Worker aktiviert.

Sie können ein Ereignishandler für das {{domxref("InstallEvent")}} erstellen. Standardmäßig wird der Worker für den Einsatz vorbereitet, wenn das Event feuert. Zum Beispiel beim erstellen eines Caches, bei der die Built-In Storage API verwendet wird und Assets hineingeladen werden, damit die App offline verwendet werden kann.

Außerdem existiert ein `activate`-Event. Wenn es feuert, ist es ein guter Zeitpunkt die alten Caches und andere Daten zu bereinigen, die mit der vorherigen Version ihres Workers zusammenhängen.

Ihr Service-Worker kann mit dem {{domxref("FetchEvent")}} auf Anfragen antworten. Sie können die Antworten auf die Anfragen verändern, wie Sie wollen. Nutzen Sie dazu die {{domxref("FetchEvent.respondWith") }}-Methode.

> **Note:** **Hinweis:** Weil `oninstall`/`onactivate `eine Weile benötigen, um ihre Aktionen abzuschließen, ist es empfehlenswert, eine `waitUntil`-Methode bereitzustellen, die, wenn `oninstall `oder` onactivate` gefeuert werden, ein `Promise` geliefert wird. Events, die der Funktion dienen, werden dem Service-Worker nicht enthalten und der `Promise` wird erfolgreich ausgeführt.

Für eine komplette Anleitung, die zeigt, wie Sie Ihr erstes Beispiel erstellen, siehe [Using Service Workers](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers).

## Weitere Anwendungsbereiche

Service-Worker werden auch benutzt für:

- die Synchronisation von Hintergrunddaten
- um auf Anfragen anderer Quellen zu antworten
- Um Updates von Daten zu erhalten, die sehr teuer in der Kalkulation sind, wie z. B. Standort-Daten, die dann in einem Datensatz verwendet werden können.
- Das clientseitige Kompilieren von CoffeeScript aus Entwicklergründen
- Hooks für Hintergrunddienste
- Zum Erstellen benutzerdefinierter Templates anhand von URL-Mustern
- Performancebeschleunigung wie z. B. das Vorladen von Bildern

In Zukunft werden Service-Worker zu weiteren nützlichen Dingen fähig sein, die sie näher an eine native App bringen. Andere Spezifikationen können und werden den Service-Worker-Kontext benutzen. Zum Beispiel:

- [Hintergrund-Synchronisation](https://github.com/slightlyoff/BackgroundSync): Ein Service-Worker kann gestartet werden, wenn keine Nutzer auf der Seite sind, um den Cache zu aktualisieren usw.
- [Auf Push-Benachrichtigungen reagieren](/de/docs/Web/API/Push_API): Ein Service-Worker kann Benachrichtigungen an Nutzer senden, um mitzuteilen, dass neuer Inhalt verfügbar ist,
- Auf eine bestimmte Uhrzeit und ein bestimmtes Datum reagieren
- Damit kann geofencing betrieben werden

## Schnittstellen

- {{domxref("Cache") }}
  - : Repräsentiert einen Speicher für {{domxref("Request")}} / {{domxref("Response")}}-Objeltpaare, die als ein Teil des {{domxref("ServiceWorker")}}-Lifecycles agieren.
- {{domxref("CacheStorage") }}
  - : Repräsentiert einen Speicher für {{domxref("Cache")}}-Objekte. Es ist das Hauptverzeichnis für {{domxref("ServiceWorker")}}. Es beinhaltet alle benannten Caches basierend auf Strings, auf die der Worker zugreifen kann.
- {{domxref("Client") }}
  - : Repräsentiert den Gültigkeitsbereich von einem Service-Worker-Client. Ein Service-Worker-Client ist entweder ein Dokument in einem Browser-Kontext oder ein {{domxref("SharedWorker")}}, welches von einem aktiven Worker gesteuert wird.
- {{domxref("Clients") }}
  - : Repräsentiert einen Container von {{domxref("Client")}}-Objekten; die hauptsächtliche Methode, um die aktiven Service-Worker-Clients anzusteuern.
- {{domxref("ExtendableEvent") }}
  - : Erweitert die Lebensdauer der `install `und `activate`-Events, die vom {{domxref("ServiceWorkerGlobalScope")}} entfernt werden als teil des Service-Worker-Lebenszyklus. Dies versichert, dass einige Events wie z. B. das {{domxref("FetchEvent")}} nicht vom {{domxref("ServiceWorker")}}, solange sie veraltete Cache-Einträge löschen usw.
- {{domxref("ExtendableMessageEvent") }}
  - : Das Event-Objekt von einem {{event("message_(ServiceWorker)","message")}}-Event, welches von einem Service-Worker gefeuert wird.
- {{domxref("FetchEvent") }}
  - : Die Parameter, die dem {{domxref("ServiceWorkerGlobalScope.onfetch")}}-Handler übergeben werden. `FetchEvent `repräsentiert eine Fetch-Aktion, die vom {{domxref("ServiceWorkerGlobalScope")}} eines {{domxref("ServiceWorker")}} entfernt wird. Es beinhaltet Information über die Anfrage und der daraus resultierenden Antwort, und stellt die {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}-Methode bereit. Es ermöglicht eine willkürliche Antwort, die zurück zur kontrollierten Seite gesendet wird.
- {{domxref("InstallEvent") }}
  - : The parameter passed into the {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}} handler, the `InstallEvent` interface represents an install action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}. As a child of {{domxref("ExtendableEvent")}}, it ensures that functional events such as {{domxref("FetchEvent")}} are not dispatched during installation.
- {{domxref("Navigator.serviceWorker") }}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("NotificationEvent") }}
  - : The parameter passed into the {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} handler, the `NotificationEvent` interface represents a notification click event that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}.
- {{domxref("ServiceWorker") }}
  - : Represents a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same `ServiceWorker` object.
- {{domxref("ServiceWorkerContainer") }}
  - : Provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
- {{domxref("ServiceWorkerGlobalScope") }}
  - : Represents the global execution context of a service worker.
- {{domxref("ServiceWorkerMessageEvent")}}
  - : Contains information about an event sent to a {{domxref("ServiceWorkerContainer")}} target.
- {{domxref("ServiceWorkerRegistration") }}
  - : Represents a service worker registration.
- {{domxref("SyncEvent")}} {{non-standard_inline}}
  - : The SyncEvent interface represents a sync action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a ServiceWorker.
- {{domxref("SyncManager")}} {{non-standard_inline}}
  - : Provides an interface for registering and listing sync registrations.
- {{domxref("WindowClient") }}
  - : Represents the scope of a service worker client that is a document in a browser context, controlled by an active worker. This is a special type of {{domxref("Client")}} object, with some additional methods and properties available.

## Spezifikationen

| Spezifikation                                    | Status                               | Kommentar           |
| ------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '')}} | {{Spec2('Service Workers')}} | Initial definition. |

## Browser-Kompatibilität

{{Compat}}

> **Note:** For backwards compatibility, you could choose to use service workers and AppCache on the same web app to do equivalent things (if the AppCache will support doing those things, of course.) What happens in such a case is that browsers that don’t support Service Workers will use AppCache, and those that do will ignore the AppCache and let the service worker take over.

## Siehe auch

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/de/docs/Web/Guide/Performance/Using_web_workers)
