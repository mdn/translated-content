---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
translation_of: Web/API/Element/requestFullScreen
---
{{APIRef("Fullscreen API")}}

Die Funktion **`Element.requestFullscreen()`** sendet eine asynchrone Anfrage, um das Element in Vollbild darzustellen.

Es ist nicht garantiert, dass das Element in Vollbild angezeigt werden wird. Wenn die Berechtigung dazu erteilt wird, erhält das Dokument ein {{event("fullscreenchange")}} Event, um es wissen zu lassen, dass nun etwas in Vollbild angezeigt wird. Wird die Berechtigung jedoch verweigert, erhält das Dokument ein {{event('fullscreenerror')}} Event.

> **Note:** Nur Elemente im HTML Namespace (Standard HTML Elemente), plus die {{HTMLElement("svg")}} und {{HTMLElement("math")}} Elemente, welche sich im Top-Level Dokument oder in einem {{HTMLElement('iframe')}} mit dem {{htmlattrxref("allowfullscreen", "iframe")}} Attribut befinden, können im Vollbildmodus angezeigt werden. Das bedeutet, dass ein {{HTMLElement('frame')}} oder ein {{HTMLElement('object')}} dies nicht kann.

## Syntax

    Element.requestFullscreen();

## Beispiel

Bevor `requestFullScreen()` aufgerufen wird, sollte man Eventhandler für die {{event("fullscreenchange")}} und {{event("fullscreenerror")}} Events erstellen, damit man erfährt, wenn das Dokument in den Vollbildmodus wechselt (oder die entsprechende Berechtigung dazu fehlt).

tbd

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullScreen()")}} | {{Spec2("Fullscreen")}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat}}

\[1] Auch implementiert als `webkitRequestFullScreen`.

\[2] Implementiert als `mozRequestFullScreen` (man beachte das große S für Screen). Vor Firefox 44 erlaubte Gecko Elementen innerhalb eines {{HTMLElement('frame')}} oder {{HTMLElement('object')}} fälschlicherweise in den Vollbildmodus zu wechseln. Ab Firefox 44 wurde dieses Verhalten behoben: nur Elemente im Top-Level Dokument oder in einem {{HTMLElement('iframe')}} mit dem {{htmlattrxref("allowfullscreen", "iframe")}} Attribut können in den Vollbildmodus wechseln.

\[3] Siehe [Dokumentation auf MSDN](https://msdn.microsoft.com/en-us/library/dn254939%28v=vs.85%29.aspx).

## Siehe auch

- [Full-screen API](/de/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
