---
title: Firefox_3.5_für_Entwickler
slug: Mozilla/Firefox/Releases/3.5
tags:
  - Firefox 3.5
  - Gecko 1.9.1
translation_of: Mozilla/Firefox/Releases/3.5
original_slug: Firefox_3.5_für_Entwickler
---
{{FirefoxSidebar}}

In [Firefox 3.5](http://www.firefox.com) wurde eine nicht geringe Zahl an neuen Bestandteilen eingeführt, darunter zusätzliche und verbesserte Unterstützung für eine Vielzahl von Webstandards. Dieser Artikel stellt eine umfangreiche Liste mit Links zu anderen Artikeln über die Hauptverbesserungen zur Verfügung.

## Neue Bestandteile in Firefox 3.5 für Entwickler

### Für Webseiten und Webanwendungsentwickler

#### HTML5-Unterstützung

- [Audio- und Video-Elemente](/de/Audio_und_video_in_Firefox "de/Audio_und_video_in_Firefox")
  - : Firefox 3.5 fügt Unterstützung für die HTML 5 [`audio`](/de/HTML/Element/audio "de/HTML/Element/audio") und [`video`](/de/HTML/Element/video "de/HTML/Element/video")-Elemente hinzu.
- [Offline-Resourcen](/de/Offline_Ressourcen_in_Firefox "de/Offline_Ressourcen_in_Firefox")
  - : Firefox 3.5 unterstützt nun vollständig die HTML5 „Offline-Resources“ Spezifikation.
- [Drag und Drop](/de/DragDrop/Drag_und_Drop "de/DragDrop/Drag_und_Drop")
  - : Die HTML5 Drag und Drop API bietet Unterstützung für Drag und Drop von Elementen innerhalb einer Webseite und zwischen verschiedenen Webseiten. Dies beinhaltet auch eine einfachere API für die Benutzung von Erweiterungen und Mozilla-basierten Anwendungen.

#### Neu unterstütze CSS Funktionen

- [Unterstützung für ladbare Schriftarten](/de/CSS/@font-face "de/CSS/@font-face")
  - : Die neue {{ cssxref("@font-face") }} @-Regel ermöglicht es Webseiten, ladbare Schriftarten zu enthalten, sodass die Seiten genauso gerendert werden können, wie es der Autor der Seite es erwartet.
- [CSS Media Queries](/de/CSS/Media_Queries "de/CSS/Media_Queries")
  - : Firefox 3.5 unterstützt nun CSS Medienanfragen, die die Unterstützung für medienabhängige Seiten verbessern.
- {{ cssxref(":before") }} und {{ cssxref(":after") }} auf CSS 2.1 aktualisiert
  - : Die `:before` und `:after` Pseudo-Elemente wurden auf volle CSS-2.1-Unterstützung aktualisiert; hinzugefügte Unterstützung für `position`, `float`, `list-style-*`, und einige `display`-Eigenschaften.
- `ch` Einheit für Längenangaben
  - : Die `ch` Einheit könn jetzt überall dort, wo eine Länge angegeben werden kann, verwendet werden. `1ch` entspricht der Länge des »0« (Null) Zeichens.
- [`opacity`](/de/CSS/opacity "de/CSS/opacity")
  - : Die `-moz-opacity` Mozilla CSS Erweiterung wurde zu Gunsten der standardisierten `opacity`-Eigenschaft entfernt.
- [`text-shadow`](/de/CSS/text-shadow "de/CSS/text-shadow")
  - : Die `text-shadow`-Eigenschaft, die es Webinhalten erlaubt Schatteneffekte auf Text und Text-Dekorationen festzulegen, wird nun unterstützt.
- [`word-wrap`](/de/CSS/word-wrap "de/CSS/word-wrap")
  - : Diese neu unterstützte Eigenschaft erlaubt es, festzulegen, ob Zeilen innerhalb von Worten umgebrochen werden dürfen. Das kann nützlich sein, wenn die Wörter aufgrund ihrer Länge sonst zum Überlauf führen.
- Die `white-space` Eingeschaft unterstützt den `pre-line` Wert
  - : Die {{ cssxref("white-space") }} Eigenschaft akzeptiert nun den `pre-linie` Wert.
- Firefox 3.5 fügt die folgenden Mozilla CSS Eingenschaften ein:
  - : [`-moz-box-shadow`](/De/CSS/-moz-box-shadow "De/CSS/-moz-box-shadow")
    [`-moz-border-image`](/de/CSS/-moz-border-image "de/CSS/-moz-border-image")
    [`-moz-column-rule`](/de/CSS/-moz-column-rule "de/CSS/-moz-column-rule")
    [`-moz-column-rule-width`](/de/CSS/-moz-column-rule-width "de/CSS/-moz-column-rule-width")
    [`-moz-column-rule-style`](/de/CSS/-moz-column-rule-style "de/CSS/-moz-column-rule-style")
    [`-moz-column-rule-color`](/de/CSS/-moz-column-rule-color "de/CSS/-moz-column-rule-color")_ Pseudo-Klasse [`-moz-window-shadow`](/de/CSS/-moz-window-shadow "de/CSS/-moz-window-shadow") und Eigenschaft [`-moz-system-metric(mac-graphite-theme)`](</de/CSS/:-moz-system-metric(mac-graphite-theme)> "de/CSS/:-moz-system-metric(mac-graphite-theme)")
    _ : Diese neuen CSS-Eigenschaften wurden hinzugefügt, um das die Arbeit mit Themes zu erleichtern.
    - Neue Werte für [`-moz-appearance`](/de/CSS/-moz-appearance "de/CSS/-moz-appearance")
      - : `-moz-win-glass` und `-moz-mac-unified-toolbar` wurden als Werte zu `-moz-appearance` hinzugefügt.
    - [Verwendung von CSS-Transformationen](/de/CSS/Verwendung_von_CSS_Transformationen "de/CSS/Verwendung_von_CSS_Transformationen")
      - : Firefox 3.5 unterstützt CSS-Transformationen. Siehe [`-moz-transform`](/de/CSS/-moz-transform "de/CSS/-moz-transform") und [`-moz-transform-origin`](/de/CSS/-moz-transform-origin "de/CSS/-moz-transform-origin") für Details.
    - Diese Selektoren werden in Firefox 3.5 neu unterstützt:
      - : [`:nth-child`](/de/CSS/:nth-child "de/CSS/:nth-child")
        [`:nth-last-child`](/de/CSS/:nth-last-child "de/CSS/:nth-last-child")
        [`:nth-of-type`](/de/CSS/:nth-of-type "de/CSS/:nth-of-type")
        [`:nth-last-of-type`](/de/CSS/:nth-last-of-type "de/CSS/:nth-last-of-type")
        [`:first-of-type`](/de/CSS/:first-of-type "de/CSS/:first-of-type")
        [`:last-of-type`](/de/CSS/:nth-last-of-type "de/CSS/:nth-last-of-type")
        [`:only-of-type`](/de/CSS/:only-of-type "de/CSS/:only-of-type")#### Neue DOM Funktionen\* [localStorage](/de/DOM/Storage#localStorage "de/DOM/Storage#localStorage")
      - : Firefox 3.5 fügt Unterstützung für die Web Storage `localStorage` Eigenschaft hinzu, welche einen Weg für Webanwendungen bereitstellt, Daten lokal auf dem Computer des Benutzers zu speichern.
    - [Verwendung von Web Workers](/de/Verwendung_von_Web_Workers "de/Verwendung_von_Web_Workers")
      - : Firefox 3.5 unterstützt Web Workers, um einfaches Multi-Threading in Webanwendungen zu ermöglichen.
    - [Verwendung von Geolocation](/de/Verwendung_von_Geolocation "de/Verwendung_von_Geolocation")
      - : Firefox 3.5 unterstützt die Geolocation API, die es Webanwendungen erlaubt, Informationen über die aktuelle Position des Benutzers zu erhalten, wenn ein Provider für diese Informationen installiert und aktiviert ist.
    - [Mit Selektoren DOM Elemente auswählen](/de/DOM/Mit_Selektoren_DOM_Elemente_auswählen "de/DOM/Mit_Selektoren_DOM_Elemente_auswählen")
      - : Die Selektoren-API erlaubt es, ein Dokument nach Elementen, die einer bestimmten Auswahlregel gerecht werden, abzufragen.
    - [Mausgesten Events](/de/DOM/Mausgesten_Events "de/DOM/Mausgesten_Events")
      - : Firefox 3.5 unterstützt Mausgesten Events wie z.B. »Trackpad-Swipes«.
    - [Das `NodeIterator` Objekt](/de/DOM/NodeIterator "de/DOM/NodeIterator")
      - : Das `NodeIterator` Objekt bietet Unterstützung für das iterieren über eine Liste von Knoten in einem DOM-Unterbaum.
    - [Das MozAfterPaint Event](/de/Gecko-spezifische_DOM_Events#MozAfterPaint "de/Gecko-spezifische_DOM_Events#MozAfterPaint")
      - : Dieses neue DOM-Event wird nach Painting-Aktualisierungen in Fenstern ausgelöst.
    - [Das MozMousePixelScroll Event](/de/Gecko-spezifische_DOM_Events#MozMousePixelScroll "de/Gecko-spezifische_DOM_Events#MozMousePixelScroll")
      - : Dieses neue DOM-Event erlaubt die Erkennung von pixel-basierten Mausrad-Events anstatt von zeilenbasierten Scroll-Events.#### Neue JavaScript Funktionen\* [Neues in JavaScript](/de/Neu_in_JavaScript_1.8.1 "de/Neu_in_JavaScript_1.8.1")
      - : Ein Überblick über die Veränderungen in JavaScript 1.8.1
    - [`Object.getPrototypeOf()`](/de/Core_JavaScript_1.5_Referenz/Globale_Objekte/Object/GetPrototypeOf "de/Core_JavaScript_1.5_Referenz/Globale_Objekte/Object/GetPrototypeOf")
      - : Diese Methode gibt einen Prototyp eines bestimmten Objektes zurück.
    - [Verwendung von nativen JSON](/de/Verwendung_von_nativen_JSON "de/Verwendung_von_nativen_JSON")
      - : Firefox 3.5 besitzt nun nativen [JSON](/de/JSON "de/JSON")-Support.
    - Neue Trim-Methoden für das String-Objekt
      - : Das [`String`](/de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String "de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String")-Objekt besitzt nun die Methoden [`trim()`](/de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/Trim "de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/Trim"), [`trimLeft()`](/de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/TrimLeft "de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/TrimLeft"), und [`trimRight()`](/de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/TrimRight "de/Core_JavaScript_1.5_Referenz/Globale_Objekte/String/TrimRight").#### Netzwerk\* [Cross-Site-Zugriff für HTTP](/de/HTTP_access_control "de/HTTP_access_control")
      - : In Firefox 3.5 ist es nun möglich, über Domaingrenzen hinweg zu arbeiten, auch wenn der HTTP-Request über das [`XMLHttpRequest`](/de/XMLHttpRequest "de/XMLHttpRequest") gestartet wurde, vorrausgesetzt, der Server unterstützt dieses.
    - [Progress-Events für `XMLHttpRequest`](/de/XMLHttpRequest/XMLHttpRequest_verwenden#Monitoring_progress "de/XMLHttpRequest/XMLHttpRequest_verwenden#Monitoring_progress")
      - : Progress-Events werden dazu bereitgestellt, um Erweiterungen zu befähigen, den Fortschritt der Requests zu überwachen.
    - Verbesserte Unterstützung für synchrones `XMLHttpRequest`
      - : [DOM Timeout](https://bugzilla.mozilla.org/show_bug.cgi?id=340345) und [Input Events](https://bugzilla.mozilla.org/show_bug.cgi?id=333198) werden nun während eines synchronen XMLHttpRequest unterdrückt.
    - [DNS-Prefetching_überwachen](/de/DNS-Prefetching_überwachen "de/DNS-Prefetching_überwachen")
      - : Firefox 3.5 stellt DNS-Prefetching zur Verfügung, wobei es die Namensauflösung für Domains vor der Zeit für die Links durchführt, was Zeit spart, wenn die Links aufgerufen werden. Dieser Artikel beschreibt wie Sie Ihre Webseite mit Prefetching-Operationen aufpeppeln können.#### Neue Canvas Funktionen\* [HTML5 Text-API für `canvas`-Elemente](/de/Text_mittels_canvas_zeichnen "de/Text_mittels_canvas_zeichnen")
      - : Canvas-Elemente unterstützten nun die HTML5 Text-API.
    - [Schatteneffekte innerhalb eines `canvas`](/de/Canvas_Tutorial/Styles_und_Farben_anwenden#Schatten "de/Canvas_Tutorial/Styles_und_Farben_anwenden#Schatten")
      - : Schatteneffekte für canvas-Elemente werden nun unterstützt.
    - [`createImageData()`](/de/HTML/Canvas/Pixel-Manipulation_mit_Canvas#Ein_ImageData_Objekt_erstellen "de/HTML/Canvas/Pixel-Manipulation_mit_Canvas#Ein_ImageData_Objekt_erstellen")
      - : Die Canvas-Methode `createImageData()` wird nun unterstützt. Sie erlaubt es ein `ImageData`-Objekt zu erzeugen anstatt es automatisch erzeugen zu lassen. Dies kann die Geschwindigkeit anderer `ImageData`-Methoden steigern, da sie ja kein Objekt mehr erzeugen müssen.
    - `moz-opaque`-Attribut
      - : Dieses Attribut lässt das Canvas wissen, ob Transparenz ein Faktor sein wird oder nicht. Mit diesem Wissen wird die Geschwindigkeit gesteigert.#### Neue SVG-Bestandteile\* [SVG Effekte auf HTML/XHTML anwenden](/de/SVG_Effekte_auf_HTML_Inhalte_anwenden "de/SVG_Effekte_auf_HTML_Inhalte_anwenden")
      - : SVG Effekte können nun auf HTML bzw. XHTML angewandt werden.#### Sonstige neue Funktionen\* [ICC Farbkorrektur](/de/ICC_Farbkorrektur_in_Firefox "de/ICC_Farbkorrektur_in_Firefox")
      - : Firefox 3.5 unterstützt nun ICC-Farbkorrektur für "getaggte" Bilder.
    - `defer`-Attribut Unterstützung für [`script`](/de/HTML/Element/Script "de/HTML/Element/Script")-Elemente
      - : Dieses Attribut weist den Browser an, dass die Verarbeitung der Seite fortgesetzt werden soll, obwohl das Skript noch nicht fertig ausgeführt wurde.### Anderweitige Verbesserungen\* Die Textknoten-Eigenschaften [`wholeText`](de/DOM/Text.wholeText) und [`replaceWholeText()`](de/DOM/Text.replaceWholeText) wurden implementiert.
    - Die Eigenschaft [`element.children`](de/DOM/Element.children) wurde hinzugefügt. Es gibt eine _Sammlung_ mit den Kindelementen des gegebenen Elementes zurück.
    - Die Eigenschaft [`element.contentEditable`](/de/DOM/element.contentEditable) wird von nun an unterstützt, um editierbare Elemente zu ermöglichen.
    - Die Element Traversal API wird nun vom DOM [Element](de/DOM/element)-Objekt unterstützt.
    - HTML-Knoten können nun per [`cloneNode()`](/de/DOM/Node/CloneNode) geklont werden.
    - Die nichtstandardkonforme Methode `getBoxObjectFor()` aus dem DOM wurde zu Gunsten von [`getBoundingClientRect()`](/de/DOM/element.getBoundingClientRect) ersetzt.
    - Versandte DOM-Events können nun re-versandt werden. Dadurch kann der Acid 3 Test 30 bestanden werden.
    - Am DOM 2 Range Handling wurden Verbesserungen vorgenommen.
    - Im nicht-chrome Anwendungsbereich, sind abgefangene Objekte in Exceptions die tätsächlichen Objekte, anstatt eines [XPConnect](/de/XPConnect) Wrappers außerhalb des abgefangenen Objekts.
    - SVG ID Referenzen sind jetzt live.
    - SVG-Filter arbeiten nun auch mit `foreignObject`.
    - Die `GetSVGDocument()`-Methode wurde aus Gründen der Kompatibilität zu [`object`](/de/HTML/Element/object) und [`iframe`](/de/HTML/Element/iframe)-Elementen hinzugefügt.
    - Implizite Einstellungen von Eigenschaften in Objekt- und Array-Initialisierern führen nicht mehr Setter in JavaScript aus. Siehe dazu:[Object and array initializers should not invoke setters when evaluated](http://www.developer.mozilla.org/web-tech/2009/04/29/object-and-array-initializers-should-not-invoke-setters-when-evaluated) for details.
    - Die `gDownloadLastDir.path`-Variable wurde umbenannt zu: `gDownloadLastDir.file`, da es sich nun auf eine `nsIFile` bezieht.
    - Die `gDownloadLastDirPath`-Variable wurde umbenannt zu: `gDownloadLastDirFile`, da es sich nun auf eine `nsIFile` bezieht.
    - Ab Firefox 3.5 können keine `data:` Bindings in chrome Paketen, die `XPCNativeWrapper` Automation abrufen, mehr verwendet werden.### Für XUL und Addon-EntwicklerWenn Sie ein Addon-Entwickler sind, sollten sie das Dokument [Erweiterungen für Firefox 3.5 aktualisieren](/de/Updating_extensions_for_Firefox_3.5 "En/Updating extensions for Firefox 3.5") unbedingt lesen. Diese beinhaltet einen extrem hilfreichen Überblick über das, was geändert wurde und Ihre Erweiterung betrifft oder betreffen könnte.#### Neue Komponenten und Funktionalitäten\* [Erweiterungen im „Private-Browsing“-Modus](/de/Erweiterungen_im_privaten_Modus)
      - : Firefox 3.5 bietet nun den „Private-Browsing“-Modus an, sodass keine Aufzeichnungen über die Aktivität des Benutzer gemacht werden. Erweiterungen können Private-Browsing anhand der in diesem Artikeln beschriebenen Methoden unterstützen.
    - [Sicherheitsverbesserungen in Firefox 3.5](/de/Sicherheitsverbesserungen_in_Firefox_3.5)
      - : Dieser Artikel beschreibt sicherheitsrelevante Verbesserungen in Firefox 3.5
    - [Theme Verbesserungen in Firefox 3.5](/de/Theme_Veränderungen_in_Firefox_3.5)
      - : Dieser Artikel beschreibt Themes betreffende Verbesserungen in Firefox 3.5
    - [Überwachen von WiFi-Zugriffspunkte](/de/Überwachen_von_WiFi_Zugriffspunkten)
      - : Code mit `UniversalXPConnect`-Priviligien kann nun die Liste der verfügbaren Access Points überwachen, Informationen über deren SSIDs, Mac-Adressen und Signalstärke erhaltend. Dies kann zusammen mit der Geolocation für die Bereitstellung von WiFi-basierten Location Services genutzt werden.#### Bemerkenswerte Veränderungen und Verbesserungen\* Das XUL [`textbox`](de/XUL/textbox)-Widget bietet nun ein [`search`](de/XUL/Attribute/textbox.type)-Typ für die Benutzung als Suchfeld an.
    - Um Drag and Drop zwischen Fenster zu unterstützen, bietet das [`browser`](/de/XUL/browser)-Widget nun eine [`swapDocShells()`](/de/XUL/Method/SwapDocShells)-Methode an.
    - Das [`level`](/de/XUL/Attribute/Panel.level) Attribut wurde zum [`panel`](/de/XUL/panel) Element hinzugefügt. Dieses Attribut legt fest, ob das Panel überhalb anderer Anwendungen steht oder einfach überhalb des Fensters indem sich das Panel befindet.
    - XUL-Elemente unterstützen nun die `clientHeight, clientWidth, scrollHeight`und `scrollWidth`Eigenschaften.
    - [`keyset`](/de/XUL/keyset)s beinhalteten nun ein `disabled`-Attribut.
    - Außerdem können[`keyset`](/de/XUL/keyset)s nun dank der [`removeChild()`](/de/DOM/Node.removeChild) Methode des Knotens entfernt werden.
    - Die `initialize()`-Methode aus [`mozIStorageStatement`](de/mozIStorageStatement) wurde entfernt. An ihrer Stelle sollte nun [`createStatement()`](de/mozIStorageConnection#createStatement) benutzt werde.
    - Die [Storage](/de/Storage) API unterstützt nun asynchrone Requests.
    - Die [`nsICookie2`](/de/nsICookie2)-Schnittstelle besitzt nun das neue `creationTime` Attribut. Damit lässt sich der Erstellungszeitpunkt eines Cookies feststellen.
    - Zu [`nsIProtocolHandler`](de/nsIProtocolHandler) wurde ein Flag (`URI_IS_LOCAL_RESOURCE`) hinzugefügt, das während der Chrome-Registrierung für die Überprüfung, ob einem Protokoll erlaubt ist, registriert zu werden, verwendet wird.
    - Unter Linux sieht Firefox auch in `/usr/lib/mozilla/plugins` nach Plugins nach.
    - Die Plugin-API wurde für die Unterstützung des „Private-Browsing“-Modus aktualisiert. Es kann nun [`NPN_GetValue()`](/de/NPN_GetValue) verwendet wurden, um den Status des „Private-Browsing“-Modus mit der Variable `NPNVprivateModeBool` abzufragen.## Neue Funktionen für Endbenutzer### User Experience\* „Dem Ort gerechtes Surfen“
      - : Wenn erwünscht, können Webseiten Informationen über die aktuelle Geoposition des Benutzers erhalten. Um den Datenschutz nicht zu verletzen werden sie selbstverständlich gefragt bevor soetwas getan wird.
    - Offene Audio- und Video-Unterstützung
      - : Firefox 3.5 unterstützt eingebettetes Audio und Video dank des offenen Ogg-Formates und WAV-Formates für Audio. Keine Plugins, keine verwirrende Fehlermeldungen, dass irgendetwas installiert werden müsse oder, das dass dieses oder jenes für Ihre Plattform nicht verfügbar sei.
    - Lokaler Datenspeicher
      - : Webanwendungen können nun die Fähigkeit des lokalen Speichers ausnutzen, um Daten auf Ihrem Computer zu speichern. Dies ist hervorragend und kann von einfachen Seiteneinstellungen bis zu komplexeren Daten eingesetzt werden.### Sicherheit und Datenschutz\* Privates Browsing
      - : Sie müssen eines anderen Browser benutzen? Wechseln sie auf „Privater Modus“ und nichts wird über sie erhalten bleiben, keine Sitzungsdaten, keine Cookies, keine Chronik oder irgendwelche anderen potentiell privaten Informationen.
    - Bessere Kontrolle über den Datenschutz
      - : Die Systemeinstellungen für den Datenschutz wurden komplett neu entworfen, sodass sie nun mehr Kontrolle über den Datenschutz haben. Die Benutzer können auswählen, ob sie irgendetwas behalten oder wegewerfen wollen, miteinbezogen die Chronik, Chronikinformationen, Cookies, Downloads und Formfeld-Informationen. Außerdem kann der Benutzer auswählen, ob die Chronik und/oder Lesezeichen in den Vorschlägen der Locationbar auftauchen sollen oder nicht.### Performance\* Schnelleres JavaScript
      - : Die Geschwindigkeit von JavaScript, das "J" aus dem "AJAX," wurde in Firefox 3.5 dank des neuen TraceMonkey JavaScript-Engines extrem erhöht. Dadurch werden Webanwendung um ein Vielfaches schneller ausgeführt als noch in Firefox 3.
    - Schnelleres Seiten-Rendering
      - : Webinhalte werden in Firefox 3.5 dank Technologien wie z.B. »speculative parsing« deutlich schneller gezeichnet. Man muss nicht wissen, was das heißen soll. Es ist einfach viel schneller.## Siehe auch\* [Firefox 3 für Entwickler](/de/Firefox_3_für_Entwickler)
    - [Firefox 2 für Entwickler](/de/Firefox_2_für_Entwickler)
    - [Firefox 1.5 für Entwickler](/de/Firefox_1.5_für_Entwickler){{ languages( {"en":"en/Firefox\_3.5\_for_developers", "es":"es/Firefox\_3.5\_para_desarrolladores", "ja":"Ja/Firefox\_3.5\_for_developers", "fr": "fr/Firefox\_3.5\_pour_les_développeurs", "pl": "pl/Firefox\_3.5\_dla_programistów", "pt": "pt/Firefox\_3.5\_para_desenvolvedores", "ru": "ru/Firefox\_3.5\_для\_разработчика", "zh-tw": "Zh_tw/Firefox\_3.1\_技術文件"} ) }}
