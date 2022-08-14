---
title: Browser storage limits and eviction criteria
slug: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
tags:
  - Datenbank
  - Datenlöschung
  - IndexDB
  - Speicher
  - Speicherung
  - client-seitig
translation_of: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
---
{{DefaultAPISidebar("IndexedDB")}}

Es gibt eine Reihe von Web-Technologien, die Daten auf die eine oder andere Art und Weise client-seitig speichern (bspw. auf der lokalen Festplatte). Der Prozess, durch welchen der Browser bestimmt, wieviel Speicherplatz er der Webdatenspeicherung zur Verfügung stellen soll, und was gelöscht werden soll, wenn dieses Limit erreicht wurde, ist nicht einfach und unterscheidet sich zwischen verschiedenen Browsern. Dieser Artikel versucht zu erklären, wie dies funktioniert.

> **Note:** **Info**: Die untenstehenden Informationen sollten für die meisten modernen Browser zutreffen. Wo bekannt, werden browserspezifische Eigenheiten benannt. Opera und Chrome sollten sich in allen Fällen gleich verhalten. [Opera Mini](http://www.opera.com/mobile/mini) (noch presto-basiert, serverseitiges Rendering) speichert kein Daten lokal auf dem Client.

## Welche Technologien nutzen Browser zur lokalen Datenspeicherung?

In Firefox werden die folgenden Technologien eingesetzt, um Daten lokal bei Bedarf zu sichern. Wir bezeichnen sie in diesem Zusammenhang als "Quota Clients" :

- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
- [asm.js](http://asmjs.org/) caching
- [Cache API](/de/docs/Web/API/Cache)
- Cookies

> **Note:** **Info**: In Firefox, [Web Storage](/de/docs/Web/API/Web_Storage_API) wird bald die gleichen Speichermanagement Tools wie in diesem Dokument beschrieben einsetzen.

> **Note:** **Info**: Im privaten Browsermodus werden die meisten Speichermethoden nicht unterstützt. Local storage Daten und Cookies werden zwar noch immer gespeichert, aber sie sind flüchtig — sie werden gelöscht, wenn das letzte private Browserfenster geschlossen wurde.

Die "letzte Zugriffszeit" der Quelle wird aufdatiert wenn irgendeine von ihnen aktiviert oder deaktiviert wird — die Löschung der Quelle löscht die Daten für alle diese "Quota Clients".

In Chrome/Opera kümmert sich die Quota Management API um das Quota Management für den [AppCache](/de/docs/Web/HTML/Using_the_application_cache), die [IndexedDB](/de/docs/Web/API/IndexedDB_API), WebSQL und die [File System API](/de/docs/Web/API/File_System_API).

## Unterschiedliche Typen der Datenspeicherung

Sogar wenn man die gleiche Speichermethode im gleichen Browser verwendet, muss man unterschiedliche Klassen der Datenspeicherung verstehen. Dieser Abschnitt behandelt die Unterschiede in verschiedenen Browsern.

Speicherung kann auf zwei Arten vorkommen:

- Persistent: Persistente Daten sollen für einen längeren Zeitraum zur Verfügung stehen. Sie werden nur gelöscht, wenn sich der Benutzer aktiv dazu entschließt (zum Beispiel kann man in Firefox und Chrome auswählen, alle Daten oder nur Daten von bestimmten Seiten zu löschen, indem man dies über _Einstellungen_ und _Datenschutz & Sicherheit > Websitedaten_ auswählt).
- Temporär: Diese Daten müssen nicht über einen längeren Zeitraum gespeichert werden. Sie werden in der Reihenfolge gelöscht, wie sie am wenigsten benutzt wurden ([LRU policy](#lru_policy)) sobald [Storage limits](#storage_limits) erreicht wurden.

Sobald persistente Daten gespeichert werden sollen, bekommt ein Benutzer in Firefox eine Popup-Warnung, um darauf hinzuweisen, dass die Daten dauerhaft gespeichert werden sollen und fragt gleichzeitig ab, ob er damit einverstanden ist. Temporäre Datenspeicherung löst nicht eine solche Warnung aus.

Datenspeicherung ist standardmäßig temporär. Entwickler können die Nutzung persistenten Speichers durch Aufruf der Methode {{domxref("StorageManager.persist()")}} aus der [Storage API](/de/docs/Web/API/Storage_API) erreichen.

## Wo werden die Daten gespeichert?

Jeder Speichertyp nutzt ein eigenes Repository. Hier ist ein konkretes Mapping auf die Verzeichnisse im Profil eines Firefox Benutzers (andere Browser können hiervon leicht abweichen):

- `<profile>/storage` — das Hauptverzeichnis für Speicher, die durch den Quota Manager verwaltet werden (siehe unten)
- `<profile>/storage/permanent` — Repository für die Speicherung persistenter Daten
- `<profile>/storage/temporary` — Repository für die Speicherung temporärer Daten
- `<profile>/storage/default` — Standard-Repository für die Speicherung von Daten

> **Note:** **Info**: Nach Einführung der [Storage API](/de/docs/Web/API/Storage_API) kann das "permanent" Verzeichnis als obsolet bestrachtet werden. Das "permanent" Verzeichnis beinhaltet nur noch persistente IndexedDB Datenbasen. Es macht keinen Unterschied, ob der box mode "best-effort" oder "persistent" ist — die Daten werden unter \<profile>/storage/default abgelegt.

> **Note:** **Info**: In Firefox kann man sein Profilverzeichnis aufrufen, indem man `about:support` in die URL Adresszeile eingibt und den _Ordner öffnen_ Knopf in der Zeile _Profilordner_ drückt.

> **Note:** **Info**: Wenn man im Profilordner in den Datenspeicherordnern sucht, findet man noch einen vierten Ordner namens `persistent`. Der `persistent` Ordner wurde ursprünglich vor einer Weile in `permanent` umbenannt, um Upgrades und Migrationen zu vereinfachen.

> **Note:** **Info**: Benuter sollten unter dem Verzeichnis `<profile>/storage` keine eigenen dateien oder Verzeichnisse anlegen. Dies führt dazu, dass die Speicherinitialisierung fehlschlägt; zum Beispiel führt dann {{domxref("IDBFactory.open()", "open()")}} zu einem Fehlerevent.

## Speichergrenzen

Der maximale Speicherplatz des Browsers ist dynamisch — er basiert auf der Größe der Festplatte. Das **globale Limit** berechnet sich als 50% des freien Plattenspeichers. In Firefox überwacht ein internes Tool namensQuota Manager wieviel Speicher jede Quelle nutzt und löscht gegebenenfalls Daten.

Wenn die Festplatte 500 GB freien Speicher aufweist, ist die maximale Größe des Speichers 250 GB. Wenn diese Größe überschritten wird, kommt ein Prozess namens **origin eviction** ins Spiel, welcher die kompletten Daten einzelner Quellen löscht, bis diese Größe wieder unterschritten wurde. Es werden nie Teile von Quellen gelöscht, da teilweise Daten einer Quelle zu Inkonsistenzen führen können.

Zudem gibt es eine weitere Begrenzung namens **Gruppenlimit** — dieses ist definiert als 20% des globalen Limits, aber hat ein Minimum von 10 MB und ein Maximum von 2 GB. Jede Quelle ist Teil einer Gruppe (Gruppe von Quellen). Es gibt eine Gruppe für jede eTLD+1 Domain. Zum Beispiel:

- `mozilla.org` — Gruppe 1, Quelle 1
- `www.mozilla.org` — Gruppe 1, Quelle 2
- `joe.blogs.mozilla.org` — Gruppe 1, Quelle 3
- `firefox.com` — Gruppe 2, Quelle 4

Innerhalb dieser Gruppe, `mozilla.org`, `www.mozilla.org`, und `joe.blogs.mozilla.org` können zusammen ein Maximum von 20% des globalen Limits nutzen. `firefox.com` hat als weitere Gruppe ein separates Maximum von 20%.

Beide Limits haben unterschiedliche Auswirkungen, wenn sie erreicht werden:

- Das Gruppenlimit ist eine harte Grenze: es löst keien Datenlöschung aus.
- Das globale Limit ist eine weiche Grenze, da eine Möglichkeit besteht, dass durch die ausgelöste Datenlöschung Speicher frei wird und sofort genutzt werden kann.

> **Note:** **Info**: Das Gruppenlimit kann nie mehr als das globale Limit sein. Bei extrem niedrigen Speicherstand von beispielsweisen 8MB globalen Limit, ist das Gruppenlimit ebenfalls nur 8MB.

> **Note:** Wenn das Gruppenlimit überschritten wird oder eine ausgelöste automatische Datenlöschung nicht genug Speicher freiräumen kann, wirft der Browser einen `QuotaExceededError`.

## LRU Policy

Wenn der verfügbare Speicherplatz aufgebnraucht wurde, startet das Quota Management eine Datenlöschung nach der LRU (Least Recently Used) Policy — die Daten der am längsten nicht benutzten Quellen werden zuerst gelöscht, dann die zweitältesten usw., bis der Browser wieder unter das Speicherlimit fällt.

Die letzte Zugriffszeit für jede Quelle wird im temporären Speicher vorgehalten. Sobald das globale Limit für temporären Speicher erreicht wurde, (mehr dazu später), werden alle derzeit ungenutzten Quellen identifiziert (z.Bsp., ohne offene Tabs oder Apps, die aktuell auf den Datenspeicher zugreifen). Diese werden dann nach der letzten Zugriffszeit sortiert. Die am längsten ungenutzten Daten werden dann zuerst gelöscht, bis genug Speicher frei wird, dass die Operation ausgeführt werden kann, die zur Auslösung der Datenlöschung verantwortlich war.

## Siehe auch

- [Working with quota on mobile browsers](http://www.html5rocks.com/en/tutorials/offline/quota-research/), von[ Eiji Kitamura.](http://blog.agektmr.com "Eiji Kitamura") Eine detaillierte Analyse client-seitiger Speicherung in mobilen Browsern.
- [Quota Management API: Fast Facts](https://developers.google.com/web/updates/2011/11/Quota-Management-API-Fast-Facts), von[ Eiji Kitamura.](http://blog.agektmr.com "Eiji Kitamura") Ein Blick auf die Quota Management API in Chrome/Blink (welche auch Opera berücksichtigen sollte).
