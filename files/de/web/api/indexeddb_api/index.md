---
title: IndexedDB
slug: Web/API/IndexedDB_API
tags:
  - API
  - Datenbank
  - Einstieg
  - IndexedDB
  - NeedsTranslation
  - Referenz
  - Speicher
  - TopicStub
  - speichern
translation_of: Web/API/IndexedDB_API
---
{{DefaultAPISidebar("IndexedDB")}}

IndexedDB ist eine low-level API für die clientseitige Speicherung großer Mengen strukturierter Daten einschließlich Dateien. Sie erlaubt auch Hochleistungssuchen dieser Daten durch die Verwendung von Indizes. Während der [DOM Speicher](/de/docs/DOM/Storage "en-US/docs/DOM/Storage") nützlich zur Speicherung kleiner Datenmengen ist, ist er für größere Mengen strukturierte Daten wenig hilfreich. IndexedDB stellt hierfür eine Lösung bereit. Dies ist die Einstiegsseite der IndexedDB Referenz von MDN — hier stellen wir Links zur vollständigen API Referenz, Gebrauchsanleitungen, Unterstützungsdetails der Browser und einige Erklärungen des Schlüsselkonzepts zur Verfügung.

{{AvailableInWorkers}}

> **Hinweis:** Die IndexedDB API ist leistungsfähig, kann aber für einfache Anwendungen zu kompliziert erscheinen. Wenn Du eine einfachere API bevorzugst, versuche Sammlungen wie [localForage](https://localforage.github.io/localForage/) und [dexie.js](http://www.dexie.org/). Diese machen IndexedDB benutzerfreundlicher.

> **Hinweis:** Manche älteren Browser unterstützen IndexedDB nicht aber sie unterstützen [WebSQL](http://caniuse.com/sql-storage). Eine Möglichkeit dieses Problem zu umgehen ist es, mittels polyfill auf [WebSQL](http://www.w3.org/TR/webdatabase/) oder auch auf [localStorage](/de/docs/Web/Guide/API/DOM/Storage#localStorage) für nicht unterstützende Browser zurückzugreifen. Das beste erhältiche polyfill ist derzeit [localForage](https://localforage.github.io/localForage/).

## Schlüsselkonzepte und Gebrauch

IndexedDB ist ein direktes Datenbank System, wie ein SQL-basiertes RDMS; während allerdings das Letztere Tabellen mit fixen Spalten benutzt, ist IndexedDB eine JavaScript-basierte objekt-orientierte Datenbank. IndexedDB läßt dich Objekte, die mit einem **Schlüssel** indiziert sind, speichern und wiederfinden. Jedes Objekt, das von einem [strukturierten Klon Algorithmus](/de/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) unterstützt wird, kann gespeichert werden. Du brauchst zum Beschreiben des Datenbankschemas eine offene Verbindung zu deiner Datenbank, dann kannst du Daten mit einer Reihe von Tranaktionen wiederfinden und aktualisieren.

- Lies mehr über die [Konzepte hinter IndexedDB](/de/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB).
- Nutze IndexedDB asynchron, indem du die Grundlagen mit unserer [IndexedDB Anleitung](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) erlernst.
- Finde Entwickler Empfehlungen, um Web Apps offline arbeiten zu lassen auf unserer [Offline Apps](/en-US/Apps/Build/Offline) Seite

> **Hinweis:** wie die meisten Web Speicher Lösungen folgt IndexedDB einem [gleicher-Ursprung Grundsatz](http://www.w3.org/Security/wiki/Same_Origin_Policy). Deshalb ist es nicht möglich auf Daten anderer Domänen zuzugreifen, während man auf gespeicherte Daten innerhalb einer Domäne zugreift.

### Synchron und asynchron

Operationen unter Verwendung von IndexedDB werden asynchron durchgeführt, um Anwendungen nicht zu blockieren. IndexedDB beinhaltete ursprünglich eine asynchrone und eine synchrone API; die synchrone API war nur für den Gebrauch von [Web Workers](/de/docs/Web/Guide/Performance/Using_web_workers) gedacht. Die synchrone Version wurde aus der Spezifikation entfernt, weil ihre Notwendigkeit fraglich war, aber sie kann in Zukunft wieder eingeführt werden, wenn es genug Nachfrage von Web Entwicklern gibt.

### Speichergrenzen und Löschkriterien

Es gibt mehrere Webtechnologien, um Daten auf die eine oder andere Art auf der Client Seite zu speichern (d. h. auf deiner lokalen Festplatte), über IndexedDB wird dabei am häufigsten geredet. Der Prozess mit dem der Browser herausfindet, wieviel Speicherplatz Webdaten zur Verfügung gestellt werden soll und was gelöscht werden soll, wenn die Grenze erreicht ist, ist nicht einfach und unterscheidet sich zwischen den Browsern. [Browser Speichergrenzen und Löschkriterien](/de/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) versuchen zu erklären, wie das geschieht - zumindest im Fall von Firefox.

## IndexedDB Schnittstellen

Um Zugang zu einer Datenbank zu erhalten, benutze [`open()`](/de/docs/Web/API/IDBFactory.open) von den [`indexedDB`](/de/docs/Web/API/IDBEnvironment.indexedDB) Attributen eines [window](/de/docs/DOM/window) Objekts. Diese Methode gibt ein {{domxref("IDBRequest")}} Objekt zurück; asynchrone Operationen kommunizieren mit der aufrufenden Anwendung durch feuern von Events von {{domxref("IDBRequest")}} Objekten.

### Mit einer Datenbank verbinden

- {{domxref("IDBEnvironment")}}
  - : Stellt den Zugang zur IndexedDB Funktionalität zur Verfügung. Es ist implementiert durch die {{domxref("window")}} und {{domxref("worker")}} Objekte.
- {{domxref("IDBFactory")}}
  - : Stellt den Zugang zu einer Datenbank bereit. Dies ist die durch das globale Objekt [`indexedDB`](/de/docs/Web/API/IDBEnvironment.indexedDB)bereitgestellte Schnittstelle und dadurch der Eingangspunkt für die API.
- {{domxref("IDBOpenDBRequest")}}
  - : Stellt eine Anfrage zum Öffnen einer Datenbank dar.
- {{domxref("IDBDatabase")}}
  - : Repräsentiert eine Verbindung zu einer Datenbank. Es ist der einzige Weg eine Transaktion in der Datenbank zu erreichen.

- {{domxref("IDBRequest")}}
  - : Eine allgemeine Schnittstelle, die Datenbankabfragen behandelt und den Zugang zu Ergebnissen bereitstellt.

### Abrufen und modifizieren von Daten

- {{domxref("IDBTransaction")}}
  - : Stellt eine Transaktion dar. Du erstellst eine Transaktion zu einer Datenbank, beschreibst den Geltungsbereich (beispielsweise auf welchen Objekt Speicher du zugreifen willst), und bestimmst die Art des Zugriffs (nur lesen oder lesen und schreiben), den du willst.
- {{domxref("IDBObjectStore")}}
  - : Steht für einen Objektspeicher, der Zugriff auf einen Datensatz in einer IndexedDB Datenbank erlaubt via Primärschlüsselsuche.
- {{domxref("IDBIndex")}}
  - : Gestattet ebenfalls Zugriff auf eine Teilmenge von Daten in einer IndexedDB Datenbank. Nutzt allerdings einen Index anstelle eines Primärschlüssels um an Einträge zu gelangen. Dies kann schneller sein als die Verwendung von {{domxref("IDBObjectStore")}}.
- {{domxref("IDBCursor")}}
  - : Iterates over object stores and indexes.
- {{domxref("IDBCursorWithValue")}}
  - : Iterates over object stores and indexes and returns the cursor's current value.
- {{domxref("IDBKeyRange")}}
  - : Defines a key range that can be used to retrieve data from a database in a certain range.
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : Defines a key range that can be used to retrieve data from a database in a certain range, sorted acording to the rules of the locale specified for a certain index (see [`createIndex()`'s optionalParameters](/de/docs/Web/API/IDBObjectStore/createIndex#Parameters).).

### Custom event interfaces

This specification fires events with the following custom interface:

- {{domxref("IDBVersionChangeEvent")}}
  - : The `IDBVersionChangeEvent` interface indicates that the version of the database has changed, as the result of an {{domxref("IDBOpenDBRequest.onupgradeneeded")}} event handler function.

### Obsolete interfaces

An early version of the specification also defined these now removed interfaces. They are still documented in case you need to update previously written code:

- {{domxref("IDBVersionChangeRequest")}} {{obsolete_inline}}
  - : Represents a request to change the version of a database. The way to change the version of the database has since changed (by calling {{domxref("IDBFactory.open")}} without also calling {{domxref("IDBDatabase.setVersion")}}), and the interface {{domxref("IDBOpenDBRequest")}} now has the functionality of the removed {{domxref("IDBVersionChangeRequest")}}.
- {{domxref("IDBDatabaseException")}} {{obsolete_inline}}
  - : Represents exception conditions that can be encountered while performing database operations.
- {{domxref("IDBTransactionSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBTransaction")}}.
- {{domxref("IDBObjectStoreSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBObjectStore")}}.
- {{domxref("IDBIndexSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBIndex")}}.
- {{domxref("IDBFactorySync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBFactory")}}.
- {{domxref("IDBEnvironmentSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBEnvironment")}}.
- {{domxref("IDBDatabaseSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBDatabase")}}.
- {{domxref("IDBCursorSync")}} {{obsolete_inline}}
  - : Sync version of {{domxref("IDBCursor")}}.

## Examples

- [eLibri:](http://marco-c.github.io/eLibri/) A powerful library and eBook reader application, written by Marco Castelluccio, winner of the IndexedDB Mozilla DevDerby.
- [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/)): The reference application for the examples in the reference docs.
- [Storing images and files in IndexedDB](http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

## Specifications

| Specification                                                                                | Status                       | Comment            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('IndexedDB', '#idl-def-IDBEnvironment', 'IDBEnvironment')}} | {{Spec2('IndexedDB')}} | Initial definition |

## Browser compatibility

{{Compat}}

- \[1] {{domxref("IDBCursorWithValue")}} is not available in workers until Gecko 42.0 {{geckoRelease("42.0")}}.
- \[2] This feature is currently hidden behind a flag — to enable it and experiment, go to about:config and enable dom.indexedDB.experimental.

## See also

- [localForage](https://localforage.github.io/localForage/): A Polyfill providing a simple name:value syntax for client-side data storage, which uses IndexedDB in the background, but falls back to WebSQL and then localStorage in browsers that don't support IndexedDB.
- [dexie.js](http://www.dexie.org/): A wrapper for IndexedDB that allows much faster code development via nice, simple syntax.
