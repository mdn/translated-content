---
title: WindowEventHandlers.onafterprint
slug: Web/API/Window/afterprint_event
translation_of: Web/API/WindowEventHandlers/onafterprint
original_slug: Web/API/WindowEventHandlers/onafterprint
---
{{ApiRef}}Die Eigenschaft WindowEventHandlers.onafterprint definiert und gibt den {{event("onafterprint")}} {{event("Event_handlers", "event handler")}} für das aktuelle Window aus.

## Syntax

    window.onafterprint = event handling code

## Beschreibung

Manche Browser (inklusive Firefox 6 und neuer, Internet Explorer) senden `beforeprint`und `afterprint` Events um zu bestimmen, ob ein Druckvorgang stattgefunden hat. Diese Funktion kann genutzt werden um das User-Interface während des Druckvorgangs anzupassen (z.B das Ausblenden von User-Interface Elementen während des Druckvorgangs).

Das `afterprint E`vent wird ausgelöst nachdem der Nutzer gedruckt hat oder den den Druck abgebrochen hat.

## Spezifikation

Nicht Teil einer Spezifikation.

## Browserkompatbilität

{{Compat}}

## Siehe auch

- {{domxref("window.print")}}
- {{domxref("window.onbeforeprint")}}
- [Drucken](/de/docs/)
- In Webkitbrowsern kann eine equivalentes Ergebnis mit `matchMedia('print')` erreicht werden.
- var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
         if (!mql.matches) {
          console.log('onafterprint');
         };
        });
