---
title: Fetch API
slug: Web/API/Fetch_API
translation_of: Web/API/Fetch_API
---
{{DefaultAPISidebar("Fetch API")}}

Die Fetch API bietet eine Schnittstelle zum Abrufen von Ressourcen (auch über das Netzwerk). Wer schon einmal mit {{DOMxRef("XMLHttpRequest")}} gearbeitet hat wird Ähnlichkeiten erkennen. Die neue API bietet jedoch einen ganzen Satz leistungsfähigerer und flexiblerer Funktionen.

## Konzepte und Verwendung

Fetch bietet eine generische Definition von {{DOMxRef("Request")}} und {{DOMxRef("Response")}} Objekten (und anderen Dingen, die mit Anfragen über ein Netzwerk zu tun haben). Dadurch können sie überall dort eingesetzt werden, wo sie in Zukunft benötigt werden, sei es für Service Worker, die Cache-API und andere ähnliche Dinge, mit denen Anfragen und Antworten abgewickelt oder geändert werden, oder in jedem Anwendungsfall, für den Sie möglicherweise eigene Antworten programmatisch erstellen müssen.

Sie enthält auch eine Definition für verwandte Konzepte wie CORS und die HTTP-Origin-Semantik, die ihre separaten Definitionen an anderer Stelle ersetzen.

Verwenden Sie zum Erstellen einer Anfrage und zum Abrufen einer Ressource die Methode {{DOMxRef("WindowOrWorkerGlobalScope.fetch()")}}. Es ist in mehreren Schnittstellen implementiert, insbesondere {{DOMxRef("Window")}} und {{DOMxRef("WorkerGlobalScope")}}. Dadurch ist es in nahezu jedem Kontext verfügbar, in dem Sie Ressourcen abrufen möchten.

Die Methode `fetch()` nimmt ein obligatorisches Argument entgegen, den Pfad zu der Ressource, die Sie abrufen möchten. Sie gibt ein {{DOMxRef("Promise")}} zurück, das in die {{DOMxRef("Response")}} dieser Anfrage aufgelöst wird, unabhängig davon, ob sie erfolgreich ist oder nicht. Sie können optional auch ein `init` Objekt mit Optionen als zweites Argument übergeben (siehe {{DOMxRef("Request")}}).

Nachdem eine {{DOMxRef("Response")}} abgerufen wurde, stehen eine Reihe von Methoden zur Verfügung, mit denen der Antwort-Inhalt (Body) definiert werden kann und wie er verarbeitet werden soll (siehe {{DOMxRef("Body")}}).

Sie können eine Anfrage und Antwort direkt erstellen, indem Sie die Konstruktoren {{DOMxRef("Request.Request", "Request()")}} und {{DOMxRef("Response.Response", "Response()")}} verwenden, was Sie aber wahrscheinlich in den seltensten Fällen tun werden. Stattdessen werden diese eher als Ergebnis anderer API-Aktionen erstellt (z. B. durch {{DOMxRef("FetchEvent.respondWith()")}} von Service Workern).

> **Hinweis:** Erfahren Sie mehr über die Verwendung der Funktionen der Fetch API in der [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch) und lernen Sie die [Grundkonzepte von Fetch](/de/docs/Web/API/Fetch_API/Basic_concepts).

### Einen Abruf abbrechen

Browser haben begonnen, experimentelle Unterstützung für die Schnittstellen {{DOMxRef("AbortController")}} und {{DOMxRef("AbortSignal")}} hinzuzufügen (auch Abort API genannt), die den Abbruch von Operationen durch Fetch und XHR ermöglichen, sofern diese noch nicht abgeschlossen sind. Weitere Informationen finden Sie auf den Schnittstellenseiten.

## Fetch Interfaces

- {{DOMxRef("WindowOrWorkerGlobalScope.fetch()")}}
  - : Die `fetch()` Methode zum Abrufen einer Ressource.
- {{DOMxRef("Headers")}}
  - : Stellt die Antwort-/Anfrageheader dar, damit Sie sie abfragen und je nach Ergebnis unterschiedliche Aktionen ausführen können.
- {{DOMxRef("Request")}}
  - : Stellt eine Ressourcenanfrage dar.
- {{DOMxRef("Response")}}
  - : Stellt die Antwort auf eine Anfrage dar.

## Fetch mixin

- {{DOMxRef("Body")}}
  - : Stellt Methoden bereit, die sich auf den Hauptteil (Body) der Antwort/Anfrage beziehen, sodass Sie den Inhaltstyp angeben können und wie dieser behandelt werden soll.

## Spezifikationen

| Specification                | Status                   | Comment            |
| ---------------------------- | ------------------------ | ------------------ |
| {{SpecName("Fetch")}} | {{Spec2("Fetch")}} | Initial definition |

## Browserkompatibilität

{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/de/docs/Web/HTTP)
- [Fetch Polyfill](https://github.com/github/fetch)
- [Grundkonzepte von Fetch](/de/docs/Web/API/Fetch_API/Basic_concepts)
