---
title: Console.warn()
slug: Web/API/Console/warn
translation_of: Web/API/Console/warn
---
{{APIRef("Console API")}}{{non-standard_header}}

Ausgabe einer Warnmeldung in der Web-Konsole.

{{AvailableInWorkers}}

{{Note("In Firefox haben Warnungen in der Web-Console ein kleines Ausrufzeichen Symbol neben dem Meldungstext.")}}

## Syntax

    console.warn(obj1 [, obj2, ..., objN]);
    console.warn(msg [, subst1, ..., substN]);

## Parameter

- `obj1` ... `objN`
  - : Eine Liste von JavaScript Objecten, die ausgegeben werden sollen. Die String-Darstellung jedes einzelnen Objekts wird in der angegebenen Reihenfolge aneinander gehangen und ausgegeben.
- `msg`
  - : Ein JavaScript String der keinen oder mehrere Platzhalter-Strings enthält.
- `subst1` ... `substN`
  - : JavaScript Objekte, die in die Platzhalter-Strings in `msg` eingesetzt werden. Dadurch kann das Ausgabeformat der Meldung zusätzlich beeinflusst werden.

Sie [Textausgabe in der Konsole](/de/docs/Web/API/console#Outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}} für weitere Details.

## Spekifikationen

| Spezifikation                                                                                        | Status                           | Kommentar          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#consolewarnobject--object-", "console.warn()")}} | {{Spec2("Console API")}} | Initial definition |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
