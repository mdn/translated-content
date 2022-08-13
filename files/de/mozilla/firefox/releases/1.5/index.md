---
title: Firefox_1.5_für_Entwickler
slug: Mozilla/Firefox/Releases/1.5
tags:
  - CSS
  - DOM
  - Erweiterungen
  - Firefox 1.5
  - HTML
  - JavaScript
  - RDF
  - SVG
  - Web Development
  - Web Standards
  - XML
  - XML Web Services
  - XSLT
  - XUL
translation_of: Mozilla/Firefox/Releases/1.5
original_slug: Firefox_1.5_für_Entwickler
---
{{FirefoxSidebar}}

Basierend auf der [Gecko](/de/Gecko "de/Gecko") 1.8 Engine, verbessert Firefox 1.5 die Unterstützung von Webstandards und stellt neue Fähigkeiten zur Verfügung, um die nächste Generationen von Webapplikationen zu ermöglichen. Firefox 1.5 verbessert die Unterstützung von CSS2 und CSS3, führt neue APIs für skript- und programmierbare 2D Grafiken durch [SVG](/de/SVG "de/SVG") 1.1 und durch [`<canvas>`](/de/HTML/canvas "de/HTML/canvas") ein, lernt [XForms](/de/XForms "de/XForms") und XML Events kennen und wird außerdem viele DHTML, JavaScript und DOM Erweiterungen mit sich bringen.

### Entwicklertools

Es gibt verschiedene Tools und Browser-Erweiterungen als Hilfe für Entwickler in Firefox 1.5:

- [DOM Inspector](/de/DOM_Inspector "de/DOM_Inspector") ist ein Tool, das Entwicklern erlaubt, ihre Dokumente zu kontrollieren und zu modifizieren, ohne das Dokument selbst zu ändern. Der DOM Inspector kann während der Installation von Firefox 1.5 ausgewählt werden (Developer Tools) und steht dann in Firefox 1.5 zur Verfügung.
- JavaScript-Konsole: Ein Tool, um Javascriptcode zu schreiben und zu testen und nebenbei JavaScript- und CSS-Fehler einer Seite zu sehen.
- Quelltextansicht mit Hervorhebung und Suchhilfen.
- [Browser-Erweiterungen](https://addons.mozilla.org/extensions/showlist.php?application=firefox&category=Developer%20Tools) wie [Firebug](http://getfirebug.com/), [Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/60/), [Live HTTP Headers](http://livehttpheaders.mozdev.org/), [HTML Validator](http://validator.w3.org/) und viele mehr.

**Achtung:** Einige Erweiterungen, wie z.B. [JavaScript Debugger (Venkman)](http://hacksrus.com/~ginda/venkman/) unterstützen Firefox 1.5 nicht vollständig und werden deshalb ausgeschaltet.

### Überblick

Einige der neuen Features von Firefox 1.5:

#### Für Entwickler von Webseiten und Webapplikationen

- [Einführung: SVG in XHTML](/de/SVG_in_HTML "de/SVG_in_HTML")
  - : Lernen Sie, wie sich SVG in XHTML Dokumente einbetten lässt und wie man mit JavaScript und CSS ein Bild manipulieren kann, so einfach als wenn man normales XHTML schreiben würde. Unter [SVG in Firefox](/de/SVG_in_Firefox) finden sich außerdem Informationen zum Status der aktuellen Implementation von SVG.
- [Grafiken mit Canvas zeichnen](/de/Grafiken_mit_Canvas_zeichnen "de/Grafiken_mit_Canvas_zeichnen")
  - : Lernen Sie, wie man mit dem `<canvas>`-Element Grafiken und andere Objekte zeichnet.
- [CSS3 Columns](/de/CSS3_Columns "de/CSS3_Columns")
  - : Lernen Sie etwas über die neue Unterstützung von mehrspaltigen Text-Layout, wie es für CSS3 vorgesehen ist.
- [Firefox 1.5 Caching benutzen](</de/Benutzen_des_Zwischenspeichers_in_Firefox_1.5_(caching)> "de/Benutzen des Zwischenspeichers in Firefox 1.5 (caching)")
  - : Sehen Sie wie schnell vorwärts- und rückwärts-Navigation mit dem `bfcache` ist.

#### Entwickler von XUL und Erweiterungen

- [Building an Extension](/de/Erweiterung_erstellen "de/Erweiterung_erstellen")
  - : In diesem Tutorial wird Ihnen Schritt-für-Schritt erklärt, wie Sie eine einfache Erweiterung für Firefox entwickeln können. Siehe auch [anhand des Tutorials auf MozillaZine(en)](http://kb.mozillazine.org/Getting_started_with_extension_development), welches die neuen Möglichkeiten des Erweiterungsmanagers in Firefox 1.5 erklärt.
- [XPCNativeWrapper](/de/XPCNativeWrapper "de/XPCNativeWrapper")
  - : `XPCNativeWrapper` ist eine Möglichkeit ein Objekt so zu verpacken, dass es sicher ist, es als privilegierten Code zu benutzen. Dies funktioniert in allen Firefox-Versionen, obwohl sich das Verhalten mit Firefox 1.5 verändert hat.
- [Preferences System](/de/Preferences_System "de/Preferences_System")
  - : Erfahren Sie mehr über das Widgets-System mit dem Sie einfacher Optionsfenster erstellen können und dabei sogar Javascript sparen.
- [Internationale Zeichen in XUL JavaScript](/de/Internationale_Zeichen_in_XUL_JavaScript)
  - : XUL JavaScript Dateien können nun Buchstaben enthalten die kein ASCII sind.
- [Tree API Änderungen](/de/Tree_Widget_Änderungen "de/Tree_Widget_Änderungen")
  - : Die Schnittstellen zum Zugriff auf XUL `<tree>`-Elemente haben sich geändert.
- [Änderungen an XUL für Firefox 1.5](/de/Änderungen_an_XUL_für_Firefox_1.5)
  - : Zusammenfassung von XUL Änderungen. Siehe auch [XUL Anwendungen für Firefox 1.5 anpassen](/de/XUL_Anwendungen_für_Firefox_1.5_anpassen).

##### Netzwerk-bezogene Änderungen

- Eingabeaufforderungen zu Zertifikaten können von nun an über Channels überschrieben werden. Das funktioniert über eine Interface-Anforderung als ein [nsIChannel](/de/nsIChannel "de/nsIChannel") notificationCallback und gibt ein Interface für [nsIBadCertListener](/de/nsIBadCertListener "de/nsIBadCertListener") aus.
- Listener von nsIWebBrowserPersist können nun [nsIInterfaceRequestor](/de/XPCOM_Interface_Referenz/nsIInterfaceRequestor "de/nsIInterfaceRequestor")::GetInterface implementieren und verfügen über die Möglichkeit allen Interfaces dies bereitzustellen, darunter [nsIProgressEventSink](/de/nsIProgressEventSink "de/nsIProgressEventSink") (nicht sehr nützlich, überflüssig mit [nsIWebProgressListener](/de/nsIWebProgressListener "de/nsIWebProgressListener")). Nützliche Interfaces enthalten hier [nsIChannelEventSink](/de/NsIChannelEventSink "de/NsIChannelEventSink") und [nsIBadCertListener](/de/nsIBadCertListener "de/nsIBadCertListener").
- Erweiterungen oder andere Necko Anwender, darunter XMLHttpRequest, können einen Cookie Header explizit festlegen, und Necko wird diesen nicht ersetzen. Gespeicherte Cookies werden mit dem gesetzten Header zusammengelegt, sodass der explizit festgelegte Header den gespeicherten Cookie überschreibt.

### Neue Möglichkeiten für den Endbenutzer

#### User Experience

- **Schnelle Navigation** mit verbesserter Vorwärts- und Rückwärts-Performance.
- **Anordnung von Tabs über „Drag und Drop“.**
- **Answers.com ist in der Liste der Suchmaschinen aufgenommen worden**, um schnelle Wörterbuchabfragen zu ermöglichen.
- **Verbesserungen an der Benutzbarkeit**, darunter besser beschriebene Fehlermeldungen, neu angeordnete Optionsmenüs, verbesserte RSS-Unterstützung und „Safe Mode“ für sicheres Surfen.
- **Bessere Zugänglichkeit** durch DHTML.
- **Tool um fehlerhafte Webseiten zu melden**, die nicht mit Firefox kompatibel sind.
- **Bessere Unterstützung für Mac OS X** (10.2 und höher) durch Profil-Imigration von Safari und Mac Internet Explorer.

#### Sicherheit und Privatsphäre

- **Automatische Updates**, um Softwareupdates zu vereinfachen. Benachrichtigung, wenn ein Update zur Verfügung steht. Ein Update wird kleiner als ein MB sein. Das Updaten von Erweiterungen wurde auch verbessert.
- **Verbesserter Popup-Blocker.**
- Die Funktion **Private Daten löschen**, stellt über ein Menü oder einen Tastaturkürzel eine einfache Möglichkeit zum Löschen aller privaten Daten dar.

#### Unterstützung von offenen Webstandards

Mit der Unterstützung von Webstandards bleibt Firefox weiter führend auf dem Markt mit einheitlichen, systemübergreifenden Implementierungen für:

- Hypertext Markup Language ([HTML](/de/HTML "de/HTML")) und Extensible Hypertext Markup Language ([XHTML](/de/XHTML "de/XHTML")): [HTML 4.01](http://www.w3.org/TR/html401/) und [XHTML 1.0/1.1](http://www.w3.org/TR/xhtml1/)
- Cascade Style Sheets ([CSS](/de/CSS "de/CSS")): [CSS Level 1](http://www.w3.org/TR/REC-CSS1), [CSS Level 2](http://www.w3.org/TR/REC-CSS2) und Teile von [CSS Level 3](http://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/de/DOM "de/DOM")): [DOM Level 1](http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](http://www.w3.org/DOM/DOMTR#dom2) und Teile von [DOM Level 3](http://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](http://www.w3.org/Math/)
- Extensible Markup Language ([XML](/de/XML "de/XML")): [XML 1.0](http://www.w3.org/TR/REC-xml), [Namespaces in XML](http://www.w3.org/TR/REC-xml-names/), [Associating Style Sheets with XML Documents 1.0](http://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJ%20un/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/de/XSLT "de/XSLT")): [XSLT 1.0](http://www.w3.org/TR/xslt)
- XML Path Language ([XPath](/de/XPath "de/XPath")): [XPath 1.0](http://www.w3.org/TR/xpath)
- Resource Description Framework ([RDF](/de/RDF "de/RDF")): [RDF](http://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](http://www.w3.org/TR/SOAP/%20)
- [JavaScript](/de/JavaScript "de/JavaScript") 1.6, basierend auf ECMA-262, revision 3: [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

Firefox 1.5 unterstützt folgende Protokolle zum Datentransfer (HTTP, FTP, SSL, TSL, etc.), multi-linguale Buchstaben (Unicode), Grafiken (GIF, JPEG, PNG, SVG und weitere) und die letzte Version der weltweit beliebten Skriptsprache [JavaScript 1.6](/de/Neu_in_JavaScript_1.6 "de/Neu_in_JavaScript_1.6").

### Änderungen seit Firefox 1.0

Viele Neues wurde in Firefox eingeführt, seit dem letzten Release am 9. November 2004. Firefox wurde mit vielen Eigenschaften erweitert und Fehler wurden beseitigt. Eine detailreiche Liste findet sich auf: [squarefree.com (Englisch)](http://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).

{{ languages( { "en": "en/Firefox\_1.5\_for_developers", "es": "es/Firefox\_1.5\_para_Desarrolladores", "fr": "fr/Firefox\_1.5\_pour_les_d\u00e9veloppeurs", "it": "it/Firefox\_1.5\_per_Sviluppatori", "ja": "ja/Firefox\_1.5\_for_developers", "nl": "nl/Firefox\_1.5\_voor_ontwikkelaars", "pl": "pl/Firefox\_1.5\_dla_programist\u00f3w", "pt": "pt/Firefox\_1.5\_para_Desenvolvedores" } ) }}
