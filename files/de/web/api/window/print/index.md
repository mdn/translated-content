---
title: Window.print()
slug: Web/API/Window/print
translation_of: Web/API/Window/print
---
{{ ApiRef() }}

Öffnet den Dialog zum Drucken des aktuellen Dokuments.

In den meisten Browsern wird die Methode nicht ausgeführt, sofern bereits ein Druck-Dialog geöffnet ist.

## Syntax

    window.print()

## Anmerkungen

Seit Chrome Version {{CompatChrome(46.0)}} wird diese Methode innerhalb eines {{htmlelement("iframe")}} Elements blockiert, solange kein sandbox Attribut mit dem Wert `allow-modal` gesetzt ist.

## Spezifikation

| Spezifikation                                                                        | Status                                       | Kommentare        |
| ------------------------------------------------------------------------------------ | -------------------------------------------- | ----------------- |
| {{SpecName('HTML5 Web application', '#dom-print', 'print()')}} | {{Spec2('HTML5 Web application')}} | Erste Definition. |

## Browserkompatibilität

{{Compat("api.Window.print")}}

## Siehe auch

- [Printing](/en/Printing "en/Printing")
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}

{{ languages( { "ja": "ja/DOM/window\.print", "it": "it/DOM/window\.print" , "zh-cn": "zh-cn/DOM/window\.print" } ) }}
