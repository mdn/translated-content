---
title: Console.log()
slug: Web/API/Console/log
tags:
  - API
  - Debugging
  - NeedsBrowserCompatibility
  - Web Entwicklung
  - Web Konsole
  - console
  - console.dir
  - console.log
translation_of: Web/API/Console/log
---
{{APIRef("Console API")}}

Gibt eine Nachricht auf der Web-Konsole aus.

{{AvailableInWorkers}}

## Syntax

    console.log(obj1 [, obj2, ..., objN]);
    console.log(msg [, subst1, ..., substN]);

## Parameter

- `obj1` ... `objN`
  - : Eine Liste von auszugebenden JavaScript-Objekten. Die Zeichenfolgedarstellungen der Objekte werden in der angegebenen Reihenfolge aneinandergehängt und ausgegeben.
- `msg`
  - : Eine JavaScript-Zeichenfolge, die Null oder mehr Ersatzzeichefolgen enthält.
- `subst1` ... `substN`
  - : JavaScript-Objekte durch die die Ersatzzeichenfolgen in `msg` ersetzt werden sollen. Dies gibt Ihnen zusätzliche Kontrolle über die Formatierung der Ausgabe.

Weitere Details finden Sie im Abschnitt [Outputting text to the console](/de/docs/Web/API/Console#Outputting_text_to_the_console) in der Dokumentation zu {{domxref("console")}}.

## Spezifikationen

| Spezifikation                                                        | Status                           | Kommentar        |
| -------------------------------------------------------------------- | -------------------------------- | ---------------- |
| {{SpecName("Console API", "#log", "console.log()")}} | {{Spec2("Console API")}} | Erste Definition |

## Browser Kompatibilität

{{Compat}}

\[1] Weisst man `%d` einen negativen Wert zu, wird dieser zur nächsten negative Ganzzahl abgerundet; z. B. wird -0.1 zu -1.

\[2] `%c` wird nicht unterstützt; `%d` wird als 0 angezeigt, falls der Wert keine Nummer ist.

## Unterschied zu console.dir()

In Firefox generieren beide Kommandos dieselbe Ausgabe, wenn als Parameter ein DOM-Element mitgegeben wird: Man erhält in beiden Fällen eine JSON-artige Baumstruktur.

In Chrome besteht aber bei gleicher Eingabe ein nützlicher Unterschied:

![](https://i.imgur.com/DozDcYR.png)

Bemerkung:

- `console.log` gibt das Element als HTML-artige Baumstruktur aus
- `console.dir` gibt das Element als JSON-artige Baumstruktur aus

Mit `console.log` werden DOM-Elemente also speziell behandelt. Bei `console.dir` ist dies nicht der Fall. Dies ist oft dann nützlich, wenn man die vollständige Darstellung des DOM-JS-Objekts ansehen möchte.

Mehr Informationen dazu finden Sie unter [Chrome Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject).

## Siehe auch

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Firebug wiki: Console API](http://getfirebug.com/wiki/index.php/Console_API) - FireBug unterstützt noch weitere Features in seiner console.log()-Implementation, wie z. B. [styled logging](http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/).
- [NodeJS: Console API](http://nodejs.org/docs/latest/api/console.html#console_console_log_data)
