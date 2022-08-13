---
title: Console.time()
slug: Web/API/Console/time
translation_of: Web/API/Console/time
---
{{APIRef("Console API")}}

Startet einen Timer, den man benutzen kann, um zu überprüfen wie lange eine bestimmte Operation. Man kann jedem Timer einen einzigartigen Namen geben und kann bis zu 10000 Timer gleichzeitig auf einer Seite laufen lassen. Wenn man {{domxref("console.timeEnd()")}} mit dem selben Namen aufruft, gibt der Browser die Zeit in Millisekunden zurück, die seit dem Starten des Timers verstrichen ist.

Siehe auch [Timer](/de/docs/Web/API/console#Timers) in der {{domxref("console")}} Dokumentation für weitere Details und Beispiele.

{{AvailableInWorkers}}

## Syntax

    console.time(Bezeichnung);

## Parameter

- `Bezeichnung`
  - : Der Name des neuen Timers. Dieser wird den Timer identifizieren; Der selbe Name sollte beim aufrufen von {{domxref("console.timeEnd()")}} genutzt werden, um den Timer zu stoppen und das Ergebnis in die Konsole zu drucken.

## Spezifikationen

| Specification                                                            | Status                           | Comment            |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#time", "console.time()")}} | {{Spec2("Console API")}} | Initial definition |

## Browser compatibility

{{Compat("api.Console.time")}}

## See also

- {{domxref("Console.timeEnd()")}}
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
