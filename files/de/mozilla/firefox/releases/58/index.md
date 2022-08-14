---
title: Firefox 58 for developers
slug: Mozilla/Firefox/Releases/58
translation_of: Mozilla/Firefox/Releases/58
---
{{FirefoxSidebar}}

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 58, die sich auf Entwickler auswirken. Firefox 58 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [16. Januar 2018](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates) ausgeliefert.

## Änderungen für Web Entwickler

### Developer Tools

- Der Code für den alten Responsive-Design-Modus (standardmäßig aktiviert vor Firefox 52) wurde jetzt aus den Devtools entfernt ({{bug (1305777)}}). Informationen zu den neuen Tools finden Sie im [Responsive Design-Modus](/de/docs/Tools/Responsive_Design_Mode).
- Die Option zum Anzeigen von MDN-Dokumenten aus dem CSS-Bereich des Seiteninspektors wurde entfernt ({{bug (1382171)}}).
- Der [CSS-Formen-Textmarker](/de/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes) wurde standardmäßig für Formen aktiviert, die über {{cssxref ("clip-path")}} ({{bug (1405339)}}) erstellt wurden.
- Der [Netzwerkmonitor](/de/docs/Tools/Network_Monitor) verfügt jetzt über eine Schaltfläche zum [Anhalten / Wiedergeben der Aufzeichnung des Netzwerkverkehr](/de/docs/Tools/Network_Monitor#Pausing_and_resume_network_traffic_recording)s ({{bug (1005755)}}).
- Im [Netzwerkmonitor ](/de/docs/Tools/Network_Monitor)ist die Filterschaltfläche "Flash" nicht mehr verfügbar und Flash-Anforderungen sind im Filter "Others" enthalten ({{bug (1413540)}}).

### HTML

_Keine Änderungen._

### CSS

- Der Deskriptor {{cssxref ("@ font-face / font-display", "font-display")}} ist jetzt standardmäßig auf allen Plattformen verfügbar ({{bug (1317445)}}).

### SVG

_Keine Änderungen_ _._

### JavaScript

- Das Objekt {{jsxref ("Global_Objects / DateTimeFormat", "Intl.DateTimeFormat")}} unterstützt jetzt die Option `hourCycle` und das `hc` Sprachen Tag ({{bug (1386146)}}).

### APIs

#### Neue APIs

- Die API {{domxref ("PerformanceNavigationTiming")}} wurde implementiert ({{bug (1263722)}}).

  - Gecko besitzt nun eine Pref Einstellung, die verwendet werden kann, um die Schnittstelle bei Bedarf zu deaktivieren — `dom.enable_performance_navigation_timing`, Standardwert ist `true` ({{bug(1403926)}}).

#### DOM

- Fehler, die über Fehlerobjekte in bestimmten APIs gemeldet werden - z. B. in der `error` Eigenschaft von {{domxref ("FileReader")}}, {{domxref ("IDBRequest")}} und {{domxref ("IDBTransaction")}}, sowie wenn Anfragen über bestimmte Methoden von {{domxref ("RTCPeerConnection")}} nicht erfolgreich sind - werden jetzt durch {{domxref ("DOMException")}} Instanzen repräsentiert. {{domxref ("DOMError")}} ist veraltet und wurde aus der DOM4-Spezifikation ({{bug (1120178)}}) ​​entfernt.
- Die [WebVR-API](/de/docs/Web/API/WebVR_API) wurde standardmäßig unter macOS aktiviert ({{bug (1374399)}}).
- Die Eigenschaft {{domxref ("PerformanceResourceTiming.workerStart")}} wird jetzt unterstützt ({{bug (1191943)}}).
- Budget-basierte Timeout-Throttling-Regeln wurden implementiert - siehe [Richtlinien zur Unterstützung der Performance von Hintergrundseiten](/de/docs/Web/API/Page_Visibility_API#Policies_in_place_to_aid_background_page_performance) für weitere Details ({{bug (1377766)}}).

#### DOM Events

_Keine Änderungen._

#### Media and WebRTC

- Die vorangestellte Version von {{domxref ("HTMLMediaElement.srcObject")}} wurde entfernt. Es ist sicherzustellen, daß der Code aktualisiert wird, um das Standard-`srcObject` anstelle von `mozSrcObject` ({{bug (1183495)}}) zu verwenden.

#### Canvas und WebGL

_Keine Änderungen._

### HTTP

- [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) wird nicht mehr ignoriert in {{httpheader ("Content-Security-Policy-Report-Only")}} ({{bug (1380755)}}).
- Firefox implementiert jetzt ein TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten des Parameters `network.http.tls-handshake-timeout` in about:config ({{bug(1393691)}}).
- Die [`worker-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) CSP Richtlinie wurde implementiert ({{bug(1302667)}}).

### Security

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Andere

_Keine Änderungen._

## Webplattform Berichtigungen

### HTML

- {{htmlelement ("a")}} -Elemente können nicht mehr in ein {{htmlelement ("map")}} -Element eingebettet werden, um einen Hotspot-Bereich zu erstellen - ein {{htmlelement ("area")}} -Element muss stattdessen verwendet werden ({{bug (1317937)}}).

### CSS

- Die folgenden proprietären Mozilla-Systemmetrik-Pseudoklassen sind für Webinhalte nicht mehr verfügbar ({{bug(1396066)}}):

  - {{Cssxref(":-moz-system-metric(images-in-menus)")}}
  - {{Cssxref(":-moz-system-metric(mac-graphite-theme)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-end-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-backward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-start-forward)")}}
  - {{Cssxref(":-moz-system-metric(scrollbar-thumb-proportional)")}}
  - {{Cssxref(":-moz-system-metric(touch-enabled)")}}
  - {{Cssxref(":-moz-system-metric(windows-default-theme)")}}

- Die folgenden proprietären Mozilla-Medienfunktionen stehen nicht mehr für Webinhalte zur Verfügung ({{bug(1396066)}}):

  - `-moz-color-picker-available`
  - `-moz-is-glyph`
  - [`-moz-mac-graphite-theme`](/de/docs/Web/CSS/@media/-moz-mac-graphite-theme)
  - `-moz-mac-yosemite-theme`
  - [`-moz-os-version`](/de/docs/Web/CSS/@media/-moz-os-version)
  - `-moz-overlay-scrollbars`
  - `-moz-physical-home-button`
  - [`-moz-scrollbar-end-backward`](/de/docs/Web/CSS/@media/-moz-scrollbar-end-backward)
  - [`-moz-scrollbar-end-forward`](/de/docs/Web/CSS/@media/-moz-scrollbar-end-forward)
  - [`-moz-scrollbar-start-backward`](/de/docs/Web/CSS/@media/-moz-scrollbar-start-backward)
  - [`-moz-scrollbar-start-forward`](/de/docs/Web/CSS/@media/-moz-scrollbar-start-forward)
  - [`-moz-scrollbar-thumb-proportional`](/de/docs/Web/CSS/@media/-moz-scrollbar-thumb-proportional)
  - `-moz-swipe-animation-enabled`
  - [`-moz-windows-accent-color-in-titlebar`](/de/docs/Web/CSS/@media/-moz-windows-accent-color-in-titlebar)
  - [`-moz-windows-classic`](/de/docs/Web/CSS/@media/-moz-windows-classic)
  - [`-moz-windows-compositor`](/de/docs/Web/CSS/@media/-moz-windows-compositor)
  - [`-moz-windows-default-theme`](/de/docs/Web/CSS/@media/-moz-windows-default-theme)
  - [`-moz-windows-glass`](/de/docs/Web/CSS/@media/-moz-windows-glass)
  - [`-moz-windows-theme`](/de/docs/Web/CSS/@media/-moz-windows-theme)

- Die proprietäte Mozilla `:-moz-styleeditor-transitioning` steht nicht mehr für Webinhalte zur Verfügung ({{bug(1396099)}}).

### JavaScript

- Die nicht standardmäßige Methode {{jsxref ("Date.prototype.toLocaleFormat ()")}} wurde entfernt ({{bug (818634)}}). [Siehe Warnung: Date.prototype.toLocaleFormat ist für weitere Informationen und die Migrationshilfe veraltet](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters).
- Die nicht standardmäßigen und veralteten Methoden {{jsxref ("Object.prototype.watch ()")}} und {{jsxref ("Object.prototype.unwatch", "unwatch ()")}} wurden entfernt und werden nicht mehr angezeigt ({{bug (638054)}}). Erwägen Sie stattdessen, [Setter und Getter](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) Methoden oder Proxys zu verwenden.
- Das [Legacy-Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol), das [`StopIteration`](/en-US/docs/Archive/Web/StopIteration) Objekt, die [Legacy-Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) und die nicht standardmäßige {{jsxref ("Function.prototype.isGenerator ()")}} - Methode wurden entfernt. Verwenden Sie stattdessen die ES2015-[Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und standardkonforme [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators) ({{bug (1083482)}}, {{bug (1413867)}}, {{bug (1119777)}}).

### APIs

- Die proprietären `moz-blob` und `moz-chunked-text` Werte der {{Domxref ("XMLHttpRequest.responseType")}} - Eigenschaft wurden in Firefox 58 vollständig entfernt ({{bug (1397145)}}, {{bug (1397151)}}, {{bug (1120171)}}).
- Die Voreinstellungen `dom.abortController.enabled` und `dom.abortController.fetch.enabled`, die die Belichtung der Abort-API-Funktionalität kontrollierten, wurden nun entfernt, da diese Funktionen jetzt standardmäßig aktiviert sind ({{bug (1402317)}}).
- Die proprietäre Eigenschaft `mozSrcObject` wurde in Firefox 58 entfernt ({{bug (1183495)}}). Verwenden Sie stattdessen die standardmäßige {{domxref ("HTMLMediaElement.srcObject")}} -Eigenschaft.

### SVG

_Keine Änderungen._

## Änderungen für Add-On und Mozilla Entwickler

### WebExtensions

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers(57)}}
