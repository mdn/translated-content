---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
translation_of: Web/API/Page_Visibility_API
---
{{DefaultAPISidebar("Page Visibility API")}}

Die **Page Visibility API** informiert sobald eine Webseite sichtbar ist und sich im Fokus befindet. Mit dem Konzept des "tabbed browsing" ist es recht wahrscheinlich, dass sich jede Webseite irgendwann im Hintergrund befindet und deshalb nicht aktiv sichtbar für den Benutzer ist. Wenn der Benutzer die Webseite minimiert oder in einen anderen Tab wechselt, sendet die API ein {{event("visibilitychange")}} Event über die geänderte Sichtbarkeit der Seite. Anhand des Events können dann spezifische Aktionen ausgeführt oder ein von der Sichtbarkeit abhängiges Verhalten aktiviert werden. Wenn etwa ein Video in der Webseite abgespielt wird, könnte dieses pausieren solange die Seite für den Benutzer unsichtbar ist und automatisch fortsetzen, sobald er zu ihr zurückkehrt. Der Benutzer verliert somit die Stelle in dem Video nicht und kann dieses einfach weiter anschauen.

Die Status eines {{HTMLElement("iframe")}} sind dieselben wie die des übergeordneten document. Wenn der iframe über CSS Eigenschaften versteckt wird, löst dies nicht die visibility events aus und ändert auch nicht den Status der umliegenden Seite.

### Vorteile

Die API ist besonders hilfreich, um Ressourcen zu sparen und gibt den Entwicklern die Möglichkeit, nicht benötigte Aufgaben einer Webseite oder Web App zu pausieren solange diese nicht sichtbar ist.

### Use cases

Einige Beispiele für die Nutzung sind:

- Eine Webseite beinhaltet ein image carousel, welches nur dann automatisch auf das nächste Bild wechseln soll, wenn der Benutzer die Webseite betrachtet.
- Eine Dashboard-Applikation pollt nur dann nach Updates, wenn diese auch sichtbar ist und pausiert diesen Vorgang solange sie unsichtbar ist.
- Eine Seite benötigt die Information, wenn sie per "prerender" geladen, um die Anzahl der page views richtig zu ermitteln.
- Es können Sounds deaktiviert werden, wenn sich ein Gerät im standby mode befindet (also wenn der Benutzer den Bildschirm seines Smartphones oder Tablets sperrt)

Bisher mussten hierfür Workarounds von den Entwicklern implementiert werden. Dafür wurden Lösungen verwendet etwa auf Basis von onblur/onfocus Event-Handlern auf dem window, worüber sich ermitteln lässt ob die Webseite gerade die aktive ist oder nicht. Allerdings teilt dies nicht mit, ob die Webseite gerade für den Benutzer effektiv sichtbar ist oder nicht. Die Page Visibility API addressiert genau das. (Verglichen mit der onblur/onfocus basierten Lösung ist ein zentraler Unterschied, dass dort die Webseite _nicht_ unsichtbar wurde, wenn ein ganz anderes Fenster aktiv wurde oder der Browser selbst den Fokus verloren hat, weil der Benutzer zu einer anderen Applikation gewechselt ist. Eine Webseite wird hier nur unsichtbar, wenn der Benutzer innerhalb des Browserfensters zu einem anderen Tab wechselt oder das Fenster minimiert.)

## Beispiel

Hier ist ein [live Code-Beispiel](http://daniemon.com/tech/webapps/page-visibility/) (eines Videos mit Sound).

Das Beispiel wurde über folgenden Code realisiert:

```js
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // When the video pauses, set the title.
  // This shows the paused
  videoElement.addEventListener("pause", function(){
    document.title = 'Paused';
  }, false);

  // When the video plays, set the title.
  videoElement.addEventListener("play", function(){
    document.title = 'Playing';
  }, false);

}
```

## Eigenschaften

### `document.hidden` {{ReadOnlyInline}}

Liefert `true` wenn die Webseite als unsichtbar für den Benutzer gewertet wird und `false` andernfalls.

### `document.visibilityState` {{ReadOnlyInline}}

Ist ein `string` welcher den aktuellen Sichtbarkeitsstatus angibt. Mögliche Werte sind:

- `visible` : der Seiteninhalt ist mindestens teilweise oder unvollständig sichtbar. In der Praxis bedeutet dies, dass sich die Seite in dem aktiven Tab eines nicht minimierten Fensters befindet.
- `hidden` : der Seiteninhalt ist nicht für den Benutzer sichtbar. In der Praxis bedeutet dies, die Seite befindet sich in einem nicht aktiven (Hintergrund-)Tab des Browserfensters, das Browserfenster ist minimiert oder die Bildschirmsperre des Betriebssystems ist aktiv.
- `prerender` : der Seiteninhalt wird gerade über "prerender" verarbeitet und ist noch nicht sichtbar für den Benutzer (es gilt somit als "hidden" für `document.hidden`). Ein Dokument kann den Initialzustand "prerender" erhalten und später den Status zu einem anderen Wert wechseln. Dieser kann aber nicht von einem anderen Status zu "prerender" wechseln. Achtung: Nicht alle Browser unterstützen diesen Status.
- `unloaded` : Die Seite wird aus dem Speicher freigegeben / gelöscht. Achtung: Nicht alle Browser unterstützen diesen Status.

```js
//startSimulation and pauseSimulation defined elsewhere
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else  {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## Spezifikationen

| Spezifikation                                    | Status                                       | Bemerkung           |
| ------------------------------------------------ | -------------------------------------------- | ------------------- |
| {{SpecName('Page Visibility API')}} | {{Spec2('Page Visibility API')}} | Initial definition. |

## Browserkompatibilität

{{Compat}}

\[1] Feuert das {{event("visibilitychange")}} Event nicht, wenn das Browserfenster minimiert wird. Ebenso wird `hidden` nicht auf `true`gesetzt.

\[2] In den Versionen Firefox 10 bis Firefox 51 einschließlich, konnte diese Eigenschaft verwendet werden mit Vendor-Prefix `-moz-`.

## Weitere Informationen

- Beschreibung der [Page Visibility API](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx "Page Visibility on IEBlog") im IEBlog.
- Beschreibung der [Page Visibility API](http://code.google.com/chrome/whitepapers/pagevisibility.html "Page Visibility API by Google") von Google
