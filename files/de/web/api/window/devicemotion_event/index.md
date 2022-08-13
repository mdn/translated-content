---
title: Window.ondevicemotion
slug: Web/API/Window/devicemotion_event
tags:
  - API
  - Ausrichtung
  - Beschleunigungssensor
  - Bewegung
  - Eigenschaft
  - Firefox OS
  - Geräteausrichtung
translation_of: Web/API/Window/ondevicemotion
original_slug: Web/API/Window/ondevicemotion
---
{{ ApiRef() }}

## Zusammenfassung

Ein Eventhandler für das {{ event("devicemotion")}} Event, welches an das Fenster gesendet wird.

## Syntax

    window.ondevicemotion = funcRef;

Die Funktion `funcRef` ist eine Referenz für eine Funktion. Diese Funktion erhält ein {{ domxref("DeviceMotionEvent") }} Objekt, welches die aufgetretene Bewegung beschreibt.

## Spezifikationen

| Spezifikation                                | Status                                   | Kommentar              |
| -------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{SpecName('Device Orientation')}} | {{Spec2('Device Orientation')}} | Initial specification. |

## Browserkompatibilität

{{ page("/en-US/docs/Web/API/DeviceMotionEvent","Browser_compatibility") }}

## Siehe auch

- {{ event("devicemotion") }}
- {{ domxref("DeviceMotionEvent") }}
- [Detecting device orientation](/de/docs/Web/API/Detecting_device_orientation "Detecting device orientation")
