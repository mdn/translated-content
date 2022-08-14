---
title: Firefox 56 for developers
slug: Mozilla/Firefox/Releases/56
translation_of: Mozilla/Firefox/Releases/56
---
{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 56, die Entwickler betreffen. Firefox 56 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [26. September 2017](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates) veröffentlicht werden

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

- Implementiert die Label-Eigenschaft für beschreibbare Formular-Steuerelemente, zum Beispiel {{domxref("HTMLInputElement.labels")}} ({{bug(556743)}}).
- Implementiert `<link rel="preload">`; siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Preloading_content) für mehr Details ({{bug(1222633)}}).

### CSS

- Implementiert die propietären Mozilla-spezifischen Werte {{cssxref("&lt;color&gt;")}} `-moz-win-accentcolor` und `-moz-win-accentcolortext` (see {{bug(1344910)}}), und die propietäre Medienabfrage [`-moz-windows-accent-color-in-titlebar`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#-moz-windows-accent-color-in-titlebar) (see {{bug(1379938)}}).

### SVG

_Keine Änderungen._

### JavaScript

- The [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) has been enabled on Firefox for Android ({{bug(1344625)}}).

### APIs

#### New APIs

_Keine Änderungen._

#### DOM

- Auf Macist jetzt {{domxref("Document.hidden")}} wahr, wenn das Fenster hinter einer anderen nicht-lichtdurchlässigen Anwendung steht {{bug(1236512)}}.
- Die Eigenschaft {{domxref("Gamepad.displayId")}} wurde implementiert ({{bug(1375816)}}).
- Die Methode {{domxref("CanvasRenderingContext2D.drawImage()")}} wurde aktualisiert, so dass so dass die Glättung beim Downscaling erfolgt, auch wenn `imageSmoothingEnabled` ist `false`. Dies ist nicht obligatorisch wie pro Spezifikation, sondern folgt Chromes Verhalten. Siehe {{bug(1360415)}}.
- Die Eigenschaft {{domxref("PerformanceTiming.secureConnectionStart")}} wurde implementiert ({{bug(772589)}}).
- Firefox verwendet` iso-2022-jp-2`, um Sequenzen zu nehmen, wenn ein iso-2022-jp {{domxref ("TextDecoder.TextDecoder", "TextDecoder ()")}} instanziiert wurde. Dies wurde nun entfernt, um die API zu vereinfachen, da keine anderen Browser oder Webseiten es unterstützen. ({{bug(715833)}}).
- Das 4ms- Klemmeverhalten von {{domxref("WindowOrWorkerGlobalScope.setTimeout","setTimeout()")}} und {{domxref("WindowOrWorkerGlobalScope.setInterval","setInterval()")}} wurde aktualisiert, um besser in Einklang mit anderen Browsern, wie in [Timeouts throttled to >=4ms](/de/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Timeouts_throttled_to_%3E4ms) zu sein. ({{bug(1378586)}}).
- Der [Page Visibility API's](/de/docs/Web/API/Page_Visibility_API) {{domxref("Document.onvisibilitychange")}} handler wurde hinzugefügt ({{bug("1333912")}}).

#### DOM events

- {{domxref("GlobalEventHandlers.onwheel")}} ist ab sofort verfügbar {{domxref("HTMLElement")}} — es war nicht vorher ({{bug(1370550)}}).

#### WebRTC

- Firefox unterstützt nun die {{domxref("RTCPeerConnection")}} Eigenschaften, die Sie die aktuellen und ausstehenden Konfigurationen der lokalen und entfernten Enden der Verbindung untersuchen lassen, um zu helfen, Änderungen in der Konfiguration zu verwalten:{{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}}, {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}}, and {{domxref("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}}.

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Weiteres

- Gecko kodiert nun URLs intern als [punycode](https://en.wikipedia.org/wiki/Punycode), um URL-Codierungsprobleme zu vermeiden (siehe {{Bug ("945240")}}, siehe auch Diskussion in {{Bug ("942074")}}).
- Firefox unter Windows und Mac OS X kann nun im [headless Modus](/de/docs/Mozilla/Firefox/Headless_mode) mit der -headless-Flagge ausgeführt werden (siehe {{bug (1355150)}} und {{bug (1355147)}}).

## Von der Web-Plattform entfernt

### HTML

- Das {{htmlelement("isindex")}} Element wurde vom HTML parser und aus der Formularvorlage entfernt. ({{bug(1266495)}}).
- Das {{htmlelement("applet")}} Element wurde entfernt ({{bug(1279218)}}).

### APIs

- Die {{domxref("KeyframeEffectReadOnly.spacing")}} Eigenschaft wurde von dem {{SpecName('Web Animations')}} spec entfernt, und deswegen wurde es auch von Gecko entfernt ({{bug(1339690)}}).

### SVG

_Keine Änderungen._

## Änderungen für add-on und Mozilla-Entwickler

### WebExtensions

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers(55)}},
