---
title: Console.timeEnd()
slug: Web/API/Console/timeEnd
translation_of: Web/API/Console/timeEnd
---
{{APIRef("Console API")}}

Stopt einen Timer, der zuvor mit {{domxref("console.time()")}} gestartet wurde.

Siehe auch [Timer](/de/docs/Web/API/console#Timers) in der Dokumentation für mehr Details und Beispiele

{{AvailableInWorkers}}

## Syntax

    console.timeEnd(Bezeichnung);

### Parameter

- `Bezeichnung`
  - : Der Name des zu stoppenden Timers. Nachdem der Timer gestoppt wurde, wird die verstrichene Zeit automatisch in der [Web Konsole](/de/docs/Tools/Web_Console) ausgegeben.

## Specifications

| Specification                                                                    | Status                           | Comment            |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#timeend", "console.timeEnd()")}} | {{Spec2("Console API")}} | Initial definition |

## Browser compatibility

{{Compat("api.Console.timeEnd")}}

## See also

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
