---
title: WebSocket.close()
slug: Web/API/WebSocket/close
tags:
  - API
  - Funktion
  - Referenz
  - Web API
  - WebSocket
translation_of: Web/API/WebSocket/close
---
{{APIRef("Web Sockets API")}}

Die Funktion **`WebSocket.close()`** beendet eine {{domxref("WebSocket")}} Verbindung oder den Versuch eines Verbindungsaufbaus. Wenn diese schon geschlossen ist, passiert nichts weiter.

## Syntax

    WebSocket.close();

### Parameter

- `code` {{optional_inline}}
  - : Ein numerisch Wert, der den Status angibt, warum die Verbindung geschlossen wird. Wird kein Wert spezifiziert, . Zur Referenz kann [diese Liste mit Codes](/de/docs/Web/API/CloseEvent#Status_codes) des {{domxref("CloseEvent")}}s für gültige Werte genommen werden.
- `reason` {{optional_inline}}
  - : Ein lesbarer Text, welcher erklärt, warum die Verbindung geschlossen wird. Dieser muss UTF-8 kodiert und darf nicht länger als 123 Bytes sein.

### Fehler

- `INVALID_ACCESS_ERR`
  - : Ein ungültiger `code` wurde angegeben.
- `SYNTAX_ERR`
  - : Der `reason` Text ist zu lang oder enthält ungültige Zeichen.

> **Note:** In Gecko unterstützte diese Funktion bis zu Version 8.0 {{geckoRelease("8.0")}} keine Parameter.

## Spezifikationen

{{Specifications}}

## Browser Kompatibilität

{{Compat}}
