---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3
original_slug: Firefox_3_für_Entwickler
---
{{FirefoxSidebar}}

Wenn Sie als Entwickler versuchen mit den neuen Funktionen in Firefox 3 umzugehen, ist dies der perfekte Ort, um zu beginnen. Dieser Seite liefert eine Liste der neuen Artikel, die die in Firefox 3 neu hinzugekommenen Funktionen erläutern. Es wird sicher nicht jede kleine Änderung erfasst werden können, allerdings hilft werden die hauptsächlichen Verbesserungen in Firefox 3 vorgestellt.

### Neue Bestandteile in Firefox 3 für Entwickler

#### Für Webseiten und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/Updating_web_applications_for_Firefox_3 "de/Updating_web_applications_for_Firefox_3")
  - : Dieser Artikel beinhaltet Informationen über Veränderungen, die Sie kennen sollten, wenn Sie die neuen Funktionen in Firefox 3 für Ihre Webseite und Webanwendung ausnutzen wollen.
- [Online- und Offline-Events](/de/Online-_und_Offline-Events "de/Online-_und_Offline-Events")
  - : Firefox 3 unterstützt WHATWG Online- und Offline-Events, die Anwendungen und Erweiterungen erkennen lassen, ob eine aktive Internetverbindung besteht oder nicht und genauso erkennen lassen, wenn die Verbindung hoch oder runter geht.
- [Web-basierende Protokollroutinen](/de/Web-basierende_Protokllroutinen "de/Web-basierende_Protokllroutinen")
  - : Sie können nun Webanwendungen als Protokollroutinen mit der `navigator.registerProtocolHandler()` Methode verwenden.
- [Zeichnen von Text mit Canvas](/de/Zeichnen_von_Text_mit_Canvas "de/Zeichnen_von_Text_mit_Canvas")
  - : Es ist nun möglich, Text in einem Canvas mit einer nicht-standardisierten API zu schreiben.
- [Transform-Unterstützung für Canvas](/de/Canvas_Tutorial/Transformationen#Transforms "de/Canvas_Tutorial/Transformationen#Transforms")
  - : Firefox unterstützt die `transform()` und `setTransform()`-Methoden für Canvas.
- [Benutzung von Mikroformaten](/de/Benutzung_von_Microformats "de/Benutzung_von_Microformats")
  - : Firefox besitzt nun eine API für das Arbeiten mit Mikroformaten.
- [Drag und Drop-Ereignisse](/de/Drag_und_Drop_Ereignisse "de/Drag_und_Drop_Ereignisse")
  - : Firefox 3 unterstützt neue Ereignisse, die zu dem Ursprungsknoten einer Drag-Operation gesendet werden, sobald die Drag-Operation beginnt und aufhört.
- [Fokus-Management in HTML](/de/Fokus-Management_in_HTML "de/Fokus-Management_in_HTML")
  - : Das neue HTML 5 `activeElement` und `hasFocus`-Attribut wird unterstützt.
- [Offline-Ressourcen](/de/Offline_Ressourcen_in_Firefox "de/Offline_Ressourcen_in_Firefox")
  - : Firefox ermöglicht Anwendungen nun das Zwischenspeichern von Ressourcen, damit die Anwendung offline verwendet werden kann.
- [CSS-Verbesserungen in Firefox 3](/de/CSS-Verbesserungen_in_Firefox_3 "de/CSS-Verbesserungen_in_Firefox_3")
  - : Firefox 3 beinhaltet eine nicht geringe Zahl an Verbesserungen, was die CSS-Unterstützung angeht.
- [DOM-Verbesserungen in Firefox 3](/de/DOM_Verbesserungen_in_Firefox_3 "de/DOM_Verbesserungen_in_Firefox_3")
  - : Firefox 3 bietet eine nicht geringe Anzahl an neuen Bestandteilen in der DOM-Implementierung an, darunter Unterstützung für mehrere Erweiterungen für den für Internet Explorer für das DOM.
- [JavaScript 1.8 Unterstützung](/de/Neu_in_JavaScript_1.8 "de/Neu_in_JavaScript_1.8")
  - : Firefox 3 stellt Unterstützung für JavaScript zur Verfügung.
- [EXSLT Unterstützung](/de/EXSLT "de/EXSLT")
  - : Firefox 3 beinhaltet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/EXSLT "de/EXSLT")-Erweiterungen zu [XSLT](/de/XSLT "de/XSLT").
- [SVG-Verbesserungen in Firefox 3](/de/SVG_Verbesserungen_in_Firefox_3 "de/SVG_Verbesserungen_in_Firefox_3")
  - : Die SVG-Unterstützung wurde signifikant verbessert, darunter Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute und andere Verbesserungen.
- [Animierte PNG-Grafiken](/de/Animierte_PNG-Grafiken "de/Animierte_PNG-Grafiken")
  - : Firefox 3 bietet Unterstützung für das Format für animiertes PNG (APNG) an.

#### Für XUL- und Erweiterungsentwickler.

##### Wesentliche Änderungen und Verbesserungen

- [Erweiterungen für Firefox 3 aktualisieren](/de/Erweiterungen_für_Firefox_3_aktualisieren "de/Erweiterungen_für_Firefox_3_aktualisieren")
  - : Bietet einen Leitfaden für das, was Sie tun müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 fähig zu machen.
- [XUL-Verbesserungen](/de/XUL_Verbesserungen_in_Firefox_3 "de/XUL_Verbesserungen_in_Firefox_3")
  - : Firefox 3 bietet eine Vielzahl von neuen XUL Elementen, darunter neue Schieberegler, Datum- und Zeitwähler und Dreh-Buttons
- [Templates in Firefox 3](/de/Templates_in_Firefox_3 "de/Templates_in_Firefox_3")
  - : Templates wurden mit Firefox 3 stark verbessert. Die Schlüsselverbesserung ist die Verwendung von benutzerdefinierten Query-Processors als Datenquelle neben RDF.
- [Sichheitsupdates](/de/Erweiterungsversionen,_Aktualisierungen_und_Kompatibilität "de/Erweiterungsversionen,_Aktualisierungen_und_Kompatibilität")
  - : Um sichere Add-ons bereitzustellen, wird nun eine Sicherheitsmethode gebraucht, bevor diese installiert werden können. Add-ons, die auf [AMO](http://addons.mozilla.org) bereitgestellt werden, verfügen automatisch darüber. Jedes installierte Add-on, das nicht darüber verfügt, wird bei der Aktualisierung auf Firefox 3 automatisch deaktiviert. Firefox wird jedoch weiterhin auf Updates der Erweiterung über den unsicheren Pfad überprüfen und versuchen die neue Version zu installieren (Die Installation schlägt fehl, wenn auch in der neuen Version keine sichere Aktualisierungsmethode angeboten wird).
- [Places Entwicklerbuch](/de/Places_Entwicklerbuch "de/Places_Entwicklerbuch")
  - : Ein Artikel über die Aktualisierung einer Anwendung zur Verwendung der Places API.
- [Download-Manager Verbesserungen in Firefox 3](/de/Download-Manager_Verbesserungen_in_Firefox_3 "de/Download-Manager_Verbesserungen_in_Firefox_3")
  - : Der Firefox 3 Download-Manager verfügt nun über eine neue und verbesserte API mit Unterstützung von mehreren Fortschritts-Listener.
- [Verwendung von nsILoginManager](/de/Verwendung_von_nsILoginManager "de/Verwendung_von_nsILoginManager")
  - : Der Password-Manager wurde vom neuen Login-Manager ersetzt.
- [XBL bindings](/de/XBL/XBL_1.0_Referenz/Elemente#binding "de/XBL/XBL_1.0_Referenz/Elemente#binding")
  - : Es können jetzt `data:` URL Schemata verwendet werden, um XBL bindings direkt einzubinden.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/Lokalisierung_von_Erweiterungsbeschreibungen "de/Lokalisierung_von_Erweiterungsbeschreibungen")
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on Metadaten. Damit werden lokalisierte Details verfügbar, sobald das Add-on heruntergeladen wird und wenn es deaktiviert wird
- [Lokalisierung und Mehrzahlen](/de/Lokalisierung_und_Mehrzahlen "de/Lokalisierung_und_Mehrzahlen")
  - : Firefox 3 fügt ein neues PluralForm Modul hinzu, welches das richtige Werkzeug für korrekte Mehrzahlen in Lokalisierungen bereitstellt.
- [Theme Änderungen in Firefox 3](/de/Theme_Änderungen_in_Firefox_3 "de/Theme_Änderungen_in_Firefox_3")
  - : Hinweise und Informationen zur Verwendung und Erstellung von Themes für Firefox 3.

##### Neue Komponenten und Funktionalitäten

- [FUEL Library](/de/Toolkit_API/FUEL "de/Toolkit_API/FUEL")
  - : FUEL wird es Erweiterungsentwicklern leichter machen produktiv zu arbeiten, indem die XPCOM Formalitäten verkleinert werden und einige "moderne" JavaScript Ideen hinzugefügt werden.
- [Places](/de/Places "de/Places")
  - : Die Verlaufs- und Lesezeichen-Schnitstelle wurde komplett durch die [Places](/de/Places "de/Places") API ersetzt.
- [Idle Service](/de/nsIIdleService "de/nsIIdleService")
  - : Firefox 3 bietet das neue `nsIIdleService` Interface, welches Erweiterungen bestimmen lässt wie lange es her ist, dass ein Benutzer zu letzt eine Taste gedrükt oder die Maus bewegt hat.
- [ZIP Writer](/de/nsIZipWriter "de/nsIZipWriter")
  - : Das neue `nsIZipWriter` Interface ermöglicht die Erstellung von ZIP Archiven.
- [Vollbild-Zoom](/de/Vollbild-Zoom "de/Vollbild-Zoom")
  - : Firefox 3 bietet einen Vollbild-Zoom neben dem Text-only Zoom an.
- [Interfacing mit dem XPCOM Cycle-Collector](/de/Interfacing_mit_dem_XPCOM_Cycle-Collector "de/Interfacing_mit_dem_XPCOM_Cycle-Collector")
  - : XPCOM Code kann nun Vorteile des Cycle-Collectors nutzen, welcher dabei hilft, das nicht verwendeter Speicher freigegeben wird.
- [Der Thread-Manager](/de/Der_Thread-Manager "de/Der_Thread-Manager")
  - : Firefox 3 stellt das neue `nsIThreadManager` Interface bereit, mit neuen Schnittstellen für Threads und Thread-Ereignisse, welche zur Erstellung und Verwaltung von Threads im Code dienen.
- [JavaScript Module](/de/JavaScript_Code-Module "de/JavaScript_Code-Module")
  - : Firefox 3 bietet nun die Möglichkeit zur Erstellung von Modulen in JavaScript, die von Erweiterungen und Anwendungen zur Verwendung geladen werden können, ähnliche wie gemeinsam genutzte Bibliotheken.
- [Das `nsIJSON` Interface](/de/nsIJSON "de/nsIJSON")
  - : Firefox 3 stellt das neue `nsIJSON` Interface bereit, welches high-performance Encoding und Decoding von [JSON](/de/JSON "de/JSON") Strings ermöglicht.
- [Das nsIParentalControlsService Interface](/de/XPCOM_Interface_Referenz/nsIParentalControlsService "de/XPCOM_Interface_Referenz/nsIParentalControlsService")
  - : Firefox 3 unterstützt nun die Microsoft Windows Vista "Parental Control" Funktion, und ermöglicht dem Code damit zu interagieren.
- [Verwendung von Inhaltseinstellungen](/de/Verwendung_von_Inhaltseinstellungen "de/Verwendung_von_Inhaltseinstellungen")
  - : Firefox 3 enthält einen neuen Dienst zum Setzen und Abrufen von willkürlichen Seiten-spezifischen Einstellungen, die Erweiterungen genau wie Kerncode verwenden können, um auf die Benutzereinstellungen für individuelle Seiten Rücksicht zu nehmen.
- [Plug-ins überwachen](/de/Plugins_überwachen "de/Plugins_überwachen")
  - : Eine neue Komponente des Plugin-System ist nun verfügbar, um festzustellen wie lange Plug-ins (z.B. Macromedia Flash) brauchen, um ihre Anfragen auszuführen.

##### Behobene Fehler

- [Behobene Fehler in Firefox 3](/de/Behobene_Fehler_in_Firefox_3 "de/Behobene_Fehler_in_Firefox_3")
  - : Dieser Artikel bietet Informationen über Bugs, die in Firefox 3 behoben wurden und nennenswert sind.

### Neue Bestandteile für den Endbenutzer

#### User Experience.

- **Einfacheres Passwort-Management.** Eine Informationsleiste oben im Browser-Fenster ermöglicht Ihnen Passwörter nach einem erfolgreichen Login zu speichern.
- **Vereinfachte Add-on installation.** Sie können nun Erweiterungen von Drittanbieter-Seiten schnell downloaden, dank der Entfernung der Add-on Downloadseiten Whiteliste.
- **Neuer Download-Manager.** Der Download-Manager macht es einfacher Ihre heruntergeladenen Dateien aufzufinden.
- **Downloads fortführen.** Sie können nun Downloads nach dem Browser-Neustart oder dem Reset der Netzwerkverbindung wieder aufnehmen.
- **Voller Seitenzoom.** Aus dem Ansichtmenü und über Tastatur-Shortcuts können Sie nun rein und raus zoomen und dabei die gesamte Seite skalieren, mit Bildern und dem Layout der Seite.
- **Tab-Scrolling und Schnellmenü.** Tabs sind einfacher zu bedienen mit den neuen Funktionen zum Scrollen un dem Tab-Schnellmenü.
- **Speichern Sie, was Sie gemacht haben.** Firefox 3 fragt Sie beim Beenden, ob Sie Ihre Tabs speichern wollen, bevor Sie die Sitzung schließen.
- **Optimiertes Öffnen in Tabs Verhalten.** Wird ein Lesezeichenverzeichnis geöffnet, wird der aktuelle Tab beibehalten und neue Tabs mit den entprechenden Seiten werden geöffnet.
- **Einfache Größenänderung an URL- und Suchleiste.** Die beiden Leisten können nun einfach mit einem Klick dazwischen geändert werden.
- **Textauswahl Verbesserungen.** Sie können nun mehrere Textbereiche mit der Strg-Taste (bzw. Command auf Macintosh) auswählen. Doppelklick wählt den "wort-für-wort" Modus. Dreifach-Klick wählt den gesamten Absatz aus.
- **Find Toolbar.** Die Find Toolbar öffnet sich mit der aktuellen Auswahl.
- **Plugin Management.** Benutzer können nun einzelne Plugins im Add-on Manager deaktivieren.
- **Integration mit Windows Vista.** Menüs unter Firefox zeigen nun das native Vista Theme an.
- **Integration mit Mac OS X.** Firefox unterstützt nun [Growl](http://growl.info/) für Hinweise zu fertiggestellten Downloads und verfügbaren Updates.
- **Stern Button.** Mit dem neuen Stern in der URL-Leiste können schnell neue Lesezeichen mit einem einzigen Klick hinzugefügt werden. Ein zweiter Klick lässt Sie Ihr Lesezeichen bearbeiten.
- **Schlagwörter.** Sie können jetzt Schlagwörter zu Ihren Lesezeichen zuordnen, um Sie einfach zu sortieren.
- **URL-Leiste und Auto-Vervollständigung.** Tippen Sie den Titel oder ein Schlagwort einer Seiten in die URL-Leiste, um schnell zur gesuchten Seite zu wechseln, die Sie im Verlauf oder in den Lesezeichen gespeichert haben. Favicons, Lesezeichen und Tags helfen zu sehen, woher die Seite kommt.
- **Ordner für Lesezeichen.** Lesezeichen können nun in Ordnern organisiert werden, um Ihre gespeicherten Lesezeichen schnell zu finden.
- **Lesezeichen- und Verlaufsmanager.** Der neue, vereinte Lesezeichen- und Verlaufsmanager ermöglicht einfache Suchen durch die Lesezeichen sowie dem Verlauf. Durch Ordner können sogar Suchdurchgänge gespeichert werden.
- **Web-basierende Protokollroutinen.** Webanwendungen, wie Ihr Webmail Anbieter, können nun verwendet werden, anstatt wie bisher ein Desktop-Programm, dass ausschließlich `mailto:` Links von anderen Seiten aufrufen konnte. Gleiches gilt für andere Protokolle ebenso (Webanwendungen müssen erst registriert sein, bevor sie mit Firefox zusammenarbeiten können).
- **Einfache Download-Aktionen.** Ein neues Einstellungsfeld bietet eine verbesserte Benutzeroberfläche zur Konfiguration von unterschiedlichen Dateitypen und Protokoll-Schemata.
- **Verbessertes Aussehen und Verwendung.** Grafiken und Schrift wurden verbessert, um Webseiten besser anzeigen zu können. Darunter schärferer Text und bessere Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Außerdem werden Mac und Linux (Gnome) Benutzer merken, dass sich Firefox mehr als eine native Anwendung in das Betriebssystem einfügt.
- **Farbmanagement Unterstützung.** In dem die Einstellung `gfx.color_management.enabled` in `about:config` aktiviert wird, kann Firefox das Farbprofil verwenden, das von Bildern verwendet wird, um die Farben auf den Bildschirm korrekt einzustellen.
- **Offline Unterstützung.** Webanwendungen können die Vorteile der neuen Funktionen nutzen, wenn keine Internetverbindung aktiv ist.

#### Sicherheit und Privatsphäre

- **Ein-Klick Seiteinformationen.** Wollen Sie mehr über die Seiten erfahren, die Sie besucht haben? Klicken Sie auf das Seitenicon in der Location-Leiste, um zu sehen zu wem diese gehört. Informationen werden einfach zu verstehen angezeigt.
- **Malware Schutz.** Firefox 3 warnt Sie, wenn Sie auf einer Webseite landen, die bekannt für Viren, Spyware, Trojaner oder anderer schädlicher Software ist. Sie können sehen wie diese Warnung aussieht, wenn Sie [hier klicken](https://www.mozilla.com/firefox/its-an-attack.html).
- **Verbesserte Schutz vor Webfälschungen.** Falls Sie eine Seite besuchen, die mutmaßlich eine Fälschung ist, wird eine spezielle Seite angezeigt, anstatt die Inhalte der Seite. [Klicken Sie hier](https://www.mozilla.com/firefox/its-a-trap.html), um zu sehen wie eine solche Seite aussieht.
- **Einfachere SSL Fehlermeldungen.** Die Fehler, die bei einem ungültigem SSL Zertifikat auftauchen wurden vereinfacht, sodass es einfacher ist das Problem zu verstehen.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft nun automatisch Add-on und Plugin Versionen und deaktiviert alte, unsichere Versionen.
- **Sichere Add-on Aktualisierung.** Die Add-on Update-Sicherheit wurde verbessert, in dem Add-ons, die unsichere Update-Mechanismen verwenden deaktivieren werden.
- **Anti-Virus integration.** Firefox 3 informiert nun Anti-Viren Software, wenn ausführbare Dateien heruntergeladen werden.
- **Windows Vista parental Control.** Firefox 3 unterstützt unter Vista System-weite "parental control" Einstellungen zur Deaktivierung von Dateidownloads.

#### Performance

- **Verlässiichkeit.** Firefox 3 speichert Lesezeichen, Verlauf, Cookies und Einstellungen in einem sicheren Datenbankformat. Das bedeutet, dass Ihre Daten sicher vor Datenverlust ist, auch wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat einen Performance Boost erhalten indem der Teil, der für das Zeichnen der Oberfläche verantwortlich ist, komplett ausgetauscht wurde.
- **Reduzierter Speicherverbrauch.** Firefox 3 nutzt den Speicher effizienter aus als jemals zuvor, mit mehr als 300 behobenen Speicher "leak" Fehlern und neuen Funktionen, die automatisch Speicherlecks ausfindig machen und diese beseitigen.

### Siehe auch

- [Erweiterungen für Firefox 3 aktualisieren](/de/Erweiterungen_für_Firefox_3_aktualisieren "de/Erweiterungen_für_Firefox_3_aktualisieren")
- [Webanwendungen für Firefox 3 aktualisieren](/de/Updating_web_applications_for_Firefox_3 "de/Updating_web_applications_for_Firefox_3")
- [Firefox 2 für Entwickler](/de/Firefox_2_für_Entwickler "de/Firefox_2_für_Entwickler")
- [Firefox 1.5 für Entwickler](/de/Firefox_1.5_für_Entwickler "de/Firefox_1.5_für_Entwickler")

{{ languages( { "en": "en/Firefox\_3\_for_developers", "es": "es/Firefox\_3\_para_desarrolladores", "fr": "fr/Firefox\_3\_pour_les_d\u00e9veloppeurs", "ja": "ja/Firefox\_3\_for_developers", "ko": "ko/Firefox\_3\_for_developers", "pl": "pl/Firefox\_3\_dla_programist\u00f3w", "pt": "pt/Firefox\_3\_para_desenvolvedores" } ) }}
