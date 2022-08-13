---
title: Erweiterungen für Firefox 3 aktualisieren
slug: Mozilla/Firefox/Releases/3/Updating_extensions
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_extensions
original_slug: Erweiterungen_für_Firefox_3_aktualisieren
---
Dieser Artikel liefert nützliche Informationen für Entwickler, die ihre Erweiterungen aktualisieren möchten, um eine einwandfreie Funktion unter Firefox 3 zu gewährleisten.

Vorweg eine hilfreiche Anmerkung: Wenn die einzig notwendige Änderung an der Erweiterung der Eintrag `maxVersion` im Installationsmanifest ist und die Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org) bereitgestellt wird, ist es nicht nötig eine neue Version der Erweiterung zu veröffentlichen. Im »Developer Control Panel« auf AMO kann die `maxVersion`, ohne einen neuen Upload, eingestellt werden. Dadurch kann auch vermieden werden, dass die Erweiterung nochmal überprüft werden muss.

### Schritt 1: Installationsmanifest aktualisieren

Der erste Schritt - und für die meisten Erweiterungen der einzig Nötige - ist eine Aktualisierung der [Installationsmanifestdatei](/de/Installationsmanifest "de/Installationsmanifest"), `install.rdf`, um die Erweiterung als Firefox 3 kompatibel zu kennzeichnen.

Als erstes muss die Zeile zur Kennzeichnung der maximal kompatiblen Firefox-Version gefunden werden (welche für Firefox 2 so aussehen sollte):

     <em:maxVersion>2.0.0.*</em:maxVersion>

Um als Firefox 3 kompatibel zu gelten, reicht die folgende Änderung:

     <em:maxVersion>3.0.*</em:maxVersion>

Danach muss die Erweiterung neu installiert werden.

Dabei sollte darauf geachtet werden, dass Firefox 3 keine extra ".0" in der Versionsnummer hat, anstatt "3.0.0.\*, sollte nur "3.0.\*" verwendet werden.

Es gab (und es wird weiterhin welche geben) eine Reihe von API Veränderungen, die dazu führen, dass einige Erweiterungen nicht weiter funktionieren. Es wird an einer kompletten Liste gearbeitet, die diese Veränderungen aufzählt.

> **Note:** **Hinweis:** Wenn die Erweiterung noch immer ein [`Install.js`](/de/Install.js "de/Install.js") Skript, anstatt eines [Installationsmanifests](/de/Installationsmanifest "de/Installationsmanifest") benutzt, sollte ein Wechsel jetzt getätigt werden. Firefox 3 unterstützt keine `install.js` Skripte in XPI Dateien mehr.

#### Das Installationsmanifest lokalisieren

Firefox 3 führt neue Eigenschaften ein, um [lokalisierte Beschreibungen](/de/Lokalisierung_von_Erweiterungsbeschreibungen "de/Lokalisierung_von_Erweiterungsbeschreibungen") zu ermöglichen. Die alte Methode funktioniert nach wie vor, auch wenn die neue Firefox-Version erlaubt, sogar dann die lokalisierten Sprachdaten zu nutzen, wenn die Erweiterung deaktiviert oder noch zur Installation vorgesehen ist.

### Schritt 2: Sichere Updates zur Verfügung stellen

Falls die Erweiterungen selbst bereitgestellt wird und nicht bei [addons.mozilla.org](https://addons.mozilla.org) angeboten wird, müssen sichere Updates selbst verwaltet werden. Dazu können die Updates entweder über eine SSL Webseite angeboten werden oder die Updates werden mit einem Kryptographieschlüssel signiert. Weitere Informationen dazu unter: [Sichere Updates](/de/Erweiterungsversionierung,_Updates_und_Kompatibilität#Sichere_Updates "de/Erweiterungsversionierung,_Updates_und_Kompatibilität#Sichere_Updates").

### Schritt 3: Mit geänderten APIs umgehen

Mehrere APIs haben sich erheblich geändert. Die wichtigsten davon, die sich auf viele Erweiterungen auswirken, sind:

#### DOM

Nodes from external documents should be cloned using [`document.importNode()`](/de/docs/Web/API/Document/importNode "Die Document-Methode importNode() erzeugt eine neue Kopie eines konkreten Knotens (Node) oder Dokumenten-Fragments (DocumentFragment) eines anderen Dokuments, so dass diese dann in das aktuelle Dokument eingefügt werden kann. ") (or adopted using [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode "Überträgt einen Knoten. Der Knoten und sein Unterbaum werden aus dem Dokument, in dem sie sich befinden entfernt (so vorhanden), und sein ownerDocument wird zu dem aktuellen Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.")) before they
can be inserted into the current document. For more on the [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!") issues, see the
[W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many
sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for
improved future compatibility.

#### Lesezeichen & Chronik

Falls die Erweiterung in irgendeiner Art auf Lesezeichen oder die Chronik zugreift, sind umfangreichere Änderungen nötig, um die Kompatibilität mit Firefox 3 zu gewährleisten. Die alte API zum Zugriff auf diese Informationen wurde durch die neue [Places](/de/Places "de/Places") Architektur ersetzt. Im [Leitfaden zur Places Migration](/de/Leitfaden_zur_Places_Migration "de/Leitfaden_zur_Places_Migration") finden sich dazu weitere Details, auch wie die bestehende Erweiterung auf die »Places« API aktualisiert werden kann.

#### Download-Manager

Die Download-Manager API hat sich durch den Wechsel vom RDF Datenspeicher zur [Storage](/de/Storage "de/Storage") API ein wenig geändert. Der Wechsel sollte relativ einfach durchzuführen sein. Außerdem hat sich die API zum Überwachen des Downloadfortschritts geändert, um mehrere Download-Manager Listeners zu unterstützen. Unter [`nsIDownloadManager`](/de/docs/XPCOM_Interface_Referenz/nsIDownloadManager), [`nsIDownloadProgressListener`](/de/docs/XPCOM_Interface_Referenz/nsIDownloadProgressListener) und [Downloads überwachen](/de/Downloads_überwachen "de/Downloads_überwachen") sind weitere Informationen verfügbar.

#### Passwort-Manager

Wenn die Erweiterung den Passwort-Manager benutzt, um auf Anmeldeinformationen zuzugreifen muss die Erweiterung auf die neue Login Manager API umgestellt werden.

- Der Artikel [Verwendung von nsILoginManager](/de/Verwendung_von_nsILoginManager) enthält Beispiele. Darunter findet sich auch eine Demo wie die Erweiterung sowohl den Passwort-Manager als auch den Login-Manager benutzen kann. Dadurch kann die Erweiterung von Firefox 3 und von früheren Versionen genutzt werden.
- [`nsILoginInfo`](/de/nsILoginInfo "de/nsILoginInfo")
- [`nsILoginManager`](/de/nsILoginManager "de/nsILoginManager")

Es kann aber auch der integrierte Speicher des Passwort-Managers überschrieben werden, falls eine eigene Implementierung in der Erweiterung angeboten werden soll. Weitere Details unter [Ein Login-Manager Speichermodul erstellen](/de/Ein_Login-Manager_Speichermodul_erstellen "de/Ein_Login-Manager_Speichermodul_erstellen").

#### Popups (Menü, Kontextmenü, Tooltips und Eingabefelder)

Das XUL Popup-System wurde im Firefox 3 stark verändert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup Eingabefelder. Der Artikel zu [Popups](/de/XUL/Popup_Leitfaden "de/XUL/Popup_Leitfaden") beschreibt detailliert wie das System funktioniert. Zu beachten ist außerdem, dass `popup.showPopup` zugunsten von `popup.openPopup` und `popup.openPopupAtScreen` als veraltet gekennzeichnet wurde.

#### Autovervollständigung

Die [`handleEnter()`](/de/NsIAutoCompleteController#Enter_behandeln.28.29 "de/NsIAutoCompleteController#Enter_behandeln.28.29") Methode im [`nsIAutoCompleteController`](/de/docs/XPCOM_Interface_Referenz/nsIAutoCompleteController) Interface wurde um ein Argument erweitert. Dieses kennzeichnet, ob der abgesendete Text im Autovervollständigungspopup ausgewählt wurde oder, ob der Benutzer nach seiner Eingabe »Enter« gedrückt hat.

#### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er das vom aufrufenden Code repräsentierte Dokument sowie `documentURI` und `baseURI` des aufrufenden Fensters.
- Hat der Aufrufende Code UniversalXPConnect Privilegien, kann er Parameter an `new DOMParser()` übergeben. Werden weniger als drei Parameter übergeben werden die übrig gebliebenen standardmäßig mit `null` belegt.

  - Der erste Parameter ist das zu parsende Dokument und überschreibt den für gewöhnlich geerbten Standardwert.
  - Der zweite Parameter enthält `documentURI`.
  - Der dritte Parameter enthält `baseURI`.

- Falls ein `DOMParser` durch einen Auftrag aufgerufen wird, wie z.B. durch `createInstance()`, nicht die `init()` Methode des DOM-Parsers aufgerufen wird und versucht wird eine Parseroperation zu starten, wird der `DOMParser` automatisch mit einem `null` Dokument und `null` Verweisen auf `documentURI` und `baseURI` erstellt und instanziiert.

#### Keine weitere Verwendung der internen String API

Die interne String API wird nicht weiter ausgeführt, stattdessen muss die externe String API benutzt werden. Einige nützliche Informationen dazu:

- [Externe Strings](/de/Externe_Strings)
- [XPCOM Glue](/de/XPCOM_Glue)
- [Von interner Verlinkung zu fester Verlinkung wechseln](/de/Von_interner_Verlinkung_zu_fester_Verlinkung_wechseln)

#### Entfernte Interfaces

Folgende Interfaces wurden aus, der im Firefox 3 enthaltenen, Gecko-Engine 1.9 entfernt. Wenn die Erweiterung eines davon nutzt, muss der Code aktualisiert werden:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (Siehe [Bug 386200](https://bugzilla.mozilla.org/show_bug.cgi?id=386200 'FIXED: SeaMonkey only: no "view cert button" in untrusted cert error dialog'))

### Schritt 4: Auf _Chrome_ Änderungen überprüfen

Es gab einige Veränderungen im _Chrome_-Layout, die eventuell auch Erweiterungen betreffen.

#### Neue Boxen

Es wurden kleinere Änderungen an der Oberfläche vorgenommen, die Änderungen an der Erweiterung nötig machen könnten. Eine neue `vbox` mit dem Namen »browser-bottombox« wurde hinzugefügt, welche die »Find Bar« und die »Status Bar« am unteren Rand des Browsers umschließt. Auch wenn dies nicht die Anzeige selbst beeinflusst, kann dies deine Erweiterung betreffen falls diese »Overlays« verwendet, die Elemente ändern, die relativ zu besagten Elementen positioniert sind.

Zum Beispiel, wenn vorher etwas überlagert wurde, wie im folgendem Codeschnipsel:

    <window id="main-window">
      <something insertbefore="status-bar" />
    </window>

Sollte es nun so überlagert werden:

    <vbox id="browser-bottombox">
      <something insertbefore="status-bar" />
    </vbox>

Oder, um Firefox 2 und Firefox 3 gleichermaßen zu behandeln, kann der folgende Code zum Einsatz kommen:

    <window id="main-window">
      <vbox id="browser-bottombox" insertbefore="status-bar">
        <something insertbefore="status-bar" />
      </vbox>
    </window>

#### Veränderte Boxen

Erweiterungen, die auf die »appcontent« Box überlagern wollten, versuchten dies über das Floaten von Chrome-Inhalten über Dokumenteninhalten. Jetzt wird dann nicht mehr angezeigt. Die Erweiterung sollte auf das neue XUL panel Element aktualisiert werden. Falls es erwünscht ist, dass das Panel nach einer Verzögerung weiter angezeigt wird, sollte `noautohide` auf `true` gesetzt werden.

### Weitere Änderungen

_Einfache Änderungen, die Sie bei der Aktualisierung Ihrer Erweiterung auf Firefox 3 machen mussten, können Sie hier gerne eintragen!_

- [`chrome://browser/base/utilityOverlay.js`]() wird aus Sicherheitsgründen nicht länger unterstützt. Falls dies vorher verwendet wurde, sollte auf [`chrome://browser/content/utilityOverlay.js`](). gewechselt werden.
- Bei [`nsIAboutModule`](/de/docs/XPCOM_Interface_Referenz/nsIAboutModule) Implementierungen wird nun `getURIFlags` Methode benötigt. Siehe [nsIAboutModule.idl](https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/public/nsIAboutModule.idl) für weitere Dokumentation. Das betrifft Erweiterungen, die neue `about:` URIs verwenden. ([Bug 337746](https://bugzilla.mozilla.org/show_bug.cgi?id=337746 'FIXED: [FIX]Move "safe about" hardcoding out of security manager'))
- Das [`tabbrowser`](/de/docs/Mozilla/Tech/XUL/tabbrowser "tabbrowser") Element ist kein Teil mehr von »toolkit« ([Bug 339964](https://bugzilla.mozilla.org/show_bug.cgi?id=339964 "FIXED: move tabbrowser.xml out of mozilla/toolkit and into mozilla/browser")). Das bedeutet, dass dieses Element nicht länger für XUL Anwendungen und Erweiterungen verfügbar ist. Es wird weiterhin in Firefox' Hauptfenster (browser.xul) benutzt.
- Veränderungen an [nsISupports proxies](/de/NsISupports_proxies "de/NsISupports_proxies") und möglicherweise ab Thread-bezogenen Interfaces muss noch dokumentiert werden.
- Wenn XML Prozessanweisungen wie `<?xml-stylesheet ?>` in XUL Dateien verwendet werden, sollten Änderungen durch [Bug 319654](https://bugzilla.mozilla.org/show_bug.cgi?id=319654 "FIXED: Processing instructions in XUL are not added to the content model") beachtet werden:

  1.  XML Prozessanweisungen werden nun in das XUL DOM hinzugefügt. Das bedeutet, dass [`document.firstChild`](/de/docs/Web/API/Document/firstChild "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!") nicht unbedingt mehr das Root-Element sein muss. Wenn das Wurzelelement angesprochen werden muss sollte [`document.documentElement`](/de/docs/Web/API/Document/documentElement "Lesbar, nicht schreibbar") verwendet werden.
  2.  `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Prozessanweisungen haben jetzt außerhalb des Dokumentprologs keinen Effekt mehr.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgeführt, wenn Webinhalte geladen werden (Browser eine Seite lädt). Durch [Bug 296639](https://bugzilla.mozilla.org/show_bug.cgi?id=296639 "FIXED: Split windows into an inner and outer object") wurde die Art und Weise in der innere und äußere Fenster kommunizieren verändert. Ein einfacher Fix, der auch in Firefox 2 funktioniert: `gBrowser.addEventListener("load", myFunc, true)` wie [hier](/de/Codeschnipsel/Tabbed_browser#Detecting_page_load) beschrieben.
- `content.window.getSelection()` gibt ein Objekt zurück (welches durch `toString()` zu einem String umgewandelt werden kann), im Gegensatz zu dem jetzt veraltetem `content.document.getSelection()`, welches einen String zurück gibt.
- `event.preventBubble()` war Firefox 2 in deprecated und wurde in Firefox 3 entfernt. Es sollte [`event.stopPropagation()`](/de/DOM/event.stopPropagation "de/DOM/event.stopPropagation") verwendet werden, was in Firefox 2 ebenso funktioniert.
- Timers, die durch `setTimeout()` initialisiert wurden, werden nun von modalen Fenstern, durch den Fix von [Bug 52209](https://bugzilla.mozilla.org/show_bug.cgi?id=52209 "FIXED: JS timers can fire while a modal dialog is open"), geblockt. Es könnte `nsITimer` stattdessen verwendet werden.
- Wenn die Erweiterung einer nicht vertrauten Quelle (z.B. eine Webseite) Zugang zu Chrome zulassen muss, sollte die neue [`contentaccessible` Flag](/de/Chrome_Registration#contentaccessible "de/Chrome_Registration#contentaccessible") benutzt werden.

<ol><li class="toggle"><details><summary>Firefox developer release notes</summary><ol><li><a href="/de/docs/Mozilla/Firefox/Releases">Firefox developer release notes</a></li></ol></details></li><li class="toggle"><details><summary>Add-ons</summary><ol><li><a href="/de/Add-ons/WebExtensions">Browser extensions</a></li><li><a href="/de/Add-ons/Themes">Themes</a></li></ol></details></li><li class="toggle"><details><summary>Firefox internals</summary><ol><li><a href="/de/docs/Mozilla/">Mozilla project</a></li><li><a href="/de/docs/Mozilla/Gecko">Gecko</a></li><li><a href="/de/docs/Mozilla/Firefox/Headless_mode">Headless mode</a></li><li><a href="/de/docs/Mozilla/JavaScript_code_modules">JavaScript code modules</a></li><li><a href="/de/docs/Mozilla/js-ctypes">JS-ctypes</a></li><li><a href="/de/docs/Mozilla/MathML_Project">MathML project</a></li><li><a href="/de/docs/Mozilla/MFBT">MFBT</a></li><li><a href="/de/docs/Mozilla/Projects">Mozilla projects</a></li><li><a href="/de/docs/Mozilla/Preferences">Preference system</a></li><li><a href="/de/docs/Mozilla/WebIDL_bindings">WebIDL bindings</a></li><li><a href="/de/docs/Mozilla/Tech/XPCOM">XPCOM</a></li><li><a href="/de/docs/Mozilla/Tech/XUL">XUL</a></li></ol></details></li><li class="toggle"><details><summary>Building and contributing</summary><ol><li><a href="/de/docs/Mozilla/Developer_guide/Build_Instructions">Build instructions</a></li><li><a href="/de/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options">Configuring build options</a></li><li><a href="/de/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works">How the build system works</a></li><li><a href="/de/docs/Mozilla/Developer_guide/Source_Code/Mercurial">Mozilla source code</a></li><li><a href="/de/docs/Mozilla/Localization">Localization</a></li><li><a href="/de/docs/Mozilla/Mercurial">Mercurial</a></li><li><a href="/de/docs/Mozilla/QA">Quality assurance</a></li><li><a href="/de/docs/Mozilla/Using_Mozilla_code_in_other_projects">Using Mozilla code in other projects</a></li></ol></details></li></ol>
