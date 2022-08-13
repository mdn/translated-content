---
title: Die Priorität von HTTP-Anfragen ändern
slug: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
tags:
  - HTTP
translation_of: Mozilla/Firefox/Releases/1.5/Changing_the_priority_of_HTTP_requests
original_slug: Firefox_1.5_für_Entwickler/Changing_the_priority_of_HTTP_requests
---
{{FirefoxSidebar}}

### Einleitung

In [Firefox 1.5](/en/Firefox_1.5_for_developers "en/Firefox_1.5_for_developers") (Gecko 1.8), wurde eine API hinzugefügt um die Priorität von [HTTP](/en/HTTP "en/HTTP")-Anfragen zu ändern. Vor dieser Anpassung, gab es keine Möglichkeiten um die Priorität von Anfragen anzupassen. Die API wurde in [nsISupportsPriority](/en/nsISupportsPriority "en/nsISupportsPriority") definiert, aber nur sehr generell, damit jedes Objekt dieses Interface implementieren kann um das Konzept der Änderung der Priorität einzuführen. Dieser Artikel beschreibt die Vorgehensweise wie dieses Interface zu benutzen ist.

Zum Zeitpunkt des Enstehens dieses Artikels, beeinflusst das Ändern der Priorität von HTTP-Anfragen nur die Reihenfolge in der Verbindungsversuche durchgeführt werden. Damit ist gemeint dass die Priorität nur einen Effekt hat, wenn es mehrere Verbindungen (zu einem Server) gibt als erlaubt.

Die Beispiele in dieser Dokumentation wurden in [JavaScript](/en/JavaScript "en/JavaScript") in Verbindung mit [XPCOM](/en/XPCOM "en/XPCOM") geschrieben.

### Verwenden der API

Sie sollten wissen, dass der Wert des `priority` Attributes, UNIX Konventionen befolgt, mit niedrigen Zahlen (inklusive negative Zahlen) die die höhere Priorität darstellen.

#### Auf die Priorität zugreifen ausgehend vom nsIChannel

Um die Priorität einer HTTP Anfrage ändern zu können, müssen Sie Zugriff auf den [nsIChannel](/en/XPCOM_Interface_Reference/nsIChannel "en/XPCOM_Interface_Reference/nsIChannel") haben, von dem die Anfrage ausgeht. Wenn Sie keinen bestehenden Channel haben, dann kann dieser erstellt werden durch:

    var ios = Components.classes["@mozilla.org/network/io-service;1"]
                        .getService(Components.interfaces.nsIIOService);
    var ch = ios.newChannel("http://www.example.com/", null, null);

Sobald der [nsIChannel](/en/XPCOM_Interface_Reference/nsIChannel "en/XPCOM_Interface_Reference/nsIChannel") besteht, ist der Zugriff auf die Priorität wie folgt:

    if (ch instanceof Components.interfaces.nsISupportsPriority) {
      ch.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
    }

Das Interface definiert verschiedene Standard Priorität Werte die benutzt werden können, und zwar zwischen `PRIORITY_HIGHEST` und `PRIORITY_LOWEST`.

#### Einen nsIChannel erhalten ausgehend von einem XMLHttpRequest

Wenn Sie in [JavaScript](/en/JavaScript "en/JavaScript") programmieren, möchten Sie eine [XMLHttpRequest](/en/XMLHttpRequest "en/XMLHttpRequest") benutzen, welche eine höhere Abstraktion einer HTTP Anfrage ist. Sie können auf den `channel` eines [XMLHttpRequest](/en/XMLHttpRequest "en/XMLHttpRequest") zugreifen, nachdem die `open` Methode aufgerufen wurde:

    var req = new XMLHttpRequest();
    req.open("GET", "http://www.example.com", false);
    if (req.channel instanceof Components.interfaces.nsISupportsPriority) {
      req.channel.priority = Components.interfaces.nsISupportsPriority.PRIORITY_LOWEST;
    }
    req.send(null);

Dieses Beispiel beinhaltet einen synchronen [XMLHttpRequest](/en/XMLHttpRequest "en/XMLHttpRequest"), welcher in der Praxis nicht angewendet werden sollte.

#### Die Priorität anpassen

[nsISupportsPriority](/en/nsISupportsPriority#adjustPriority "en/nsISupportsPriority#adjustPriority") beinhaltet eine Methode `adjustPriority`. Diese Methode sollte benutzt werden, wenn die Priorität einer Anfrage um einen gewissen Betrag geändert werden soll. Zum Beispiel, wenn die Priorität etwas höher sein soll, muss folgendes gemacht werden:

    // assuming we already have a nsIChannel from above
    if (ch instanceof Components.interfaces.nsISupportsPriority) {
      ch.adjustPriority(-1);
    }

Hier ist zu bemerken, dass niedrigere Zahlen eine höhere Priorität bedeuten, also wenn um eine negative Zahl angepasst wird, so wird eine höhere Priorität eingestellt.
