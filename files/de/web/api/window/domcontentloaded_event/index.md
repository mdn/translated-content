---
title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
tags:
  - Referenz
  - Web
  - events
translation_of: Web/API/Window/DOMContentLoaded_event
original_slug: Web/Events/DOMContentLoaded
---
Das `DOMContentLoaded`-Event wird ausgelöst, wenn das initiale HTML-Dokument vollständig geladen und geparst ist. Es wird dabei nicht auf Stylesheets, Bilder und Frames gewartet. Das [`load-Event`](/de/docs/Mozilla_event_reference/load) sollte im Gegensatz dazu nur benutzt werden um eine komplett geladene Seite zu erkennen. Es ist ein weit verbreiteter Fehler das [`load-Event`](/de/docs/Mozilla_event_reference/load) zu benutzen, obwohl `DOMContentLoaded` wesentlich besser geeignet wäre.

{{Note("Synchrones JavaScript pausiert das Parsen des DOM.")}}

{{Note("Es gibt viele Bibliotheken, die Methoden bereitstellen, um bei verschiedenen Browsern zu erkennen, ob das DOM bereit ist.")}}

## Performanz

Wenn DOM so schnell wie möglich geladen werden soll, nachdem der Benutzer die Seite angefragt hat, sollte zum einen das [JavaScript asynchron](/de/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) ausgeführt und [das Laden der Stylesheets optimiert](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) werden, was bei zu häufigem Einsatz den Aufbau der Seite durch das parallele Laden verlangsamen kann.

## Allgemeine Informationen

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)
- Interface
  - : Event
- Bubbles
  - : Ja
- Abbrechbar
  - : Ja (Auch wenn es als ein einfaches Event spezifiziert ist, das nicht abgebrochen werden kann)
- Ziel
  - : Dokument
- Standardaktion
  - : Keine

## Eigenschaften

| Property                              | Type                                 | Description                                                |
| ------------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | Das Zielelement des Events (das oberste Ziel im DOM Baum). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | Der Typ des Events.                                        |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Gibt an, ob das Event weiter nach oben wandert (bubble).   |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Gibt and, ob das Event abbrechbar ist.                     |

## Beispiel

```html
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });
</script>
```

```html
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

for(var i=0; i<1000000000; i++)
{} // Dieses synchrone Script wird das Parsen des DOMs verzögern. Dadurch wird das DOMContentLoaded-Event erst später ausgelöst.
</script>
```

## Browserkompatibilität

{{Compat}}

\[1] Bubbling für dieses Event benötigt mindestens Gecko 1.9.2, Chrome 6, and Safari 4.

\[2] Internet Explorer 8 unterstützt das `readystatechange`-Event, welches genutzt werden kann um festzustellen, wenn das DOM fertig ist. In früheren Versionen des Internet Explorers kann dieser Status festgestellt werden, indem wiederholt versucht wird, `document.documentElement.doScroll("left");` auszuführen. Dieser Befehl gibt einen Error zurück, bis das DOM bereit ist.

## Verwandte Events

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
