---
title: Window.performance
slug: Web/API/performance_property
tags:
  - Performanz
  - Timing
translation_of: Web/API/Window/performance
original_slug: Web/API/Window/performance
---
{{APIRef("High Resolution Time")}}

Die Eigenschaft **`performance `**der {{domxref("Window")}} Schnittstelle gibt ein {{domxref("Performance")}} Objekt zurück, welches benutzt werden kann, um Performanz-Informationen über das aktuelle Dokument zu sammeln. Sie dient als Bereitstellungspunkt für die Performance Timeline API, die High Resolution Time API, die [Navigation Timing API](/de/docs/Web/API/Navigation_timing_API), die [User Timing API](/de/docs/Web/API/User_Timing_API), und die [Resource Timing API](/de/docs/Web/API/Resource_Timing_API).

## Syntax

    performanceData = window.performance;

### Wert

Ein {{domxref("Performance")}}-Objekt bietet Zugriff auf Performanz- und Timing-Informationen, die von den APIs, welche es offen legt, bereit gestellt werden.

## Spezifikationen

| Specifikation                                                                                                | Status                           | Kommentar                      |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------ |
| {{SpecName('Highres Time', '#the-performance-interface', 'window.performance')}} | {{Spec2('Highres Time')}} | Definiert die `now()` Methode. |

## Browserkompabilität

{{Compat}}
