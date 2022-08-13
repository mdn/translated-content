---
title: Console.debug()
slug: Web/API/Console/debug
translation_of: Web/API/Console/debug
---
{{APIRef("Console API")}}

Die Methode **`debug()`** gibt eine Nachricht der Protokollstufe "debug" auf der Konsole aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole für die Anzeige von Debug-Ausgaben konfiguriert ist.

{{AvailableInWorkers}}

## Syntax

    console.debug(obj1 [, obj2, ..., objN]);
    console.debug(msg [, subst1, ..., substN]);

### Parameter

- `obj1` ... `objN` {{optional_inline}}
  - : Eine Liste der auszugebenden JavaScript-Objekte. Die String-Darstellungen jedes dieser Objekte werden in der angegebenen Reihenfolge zusammengefügt und an die Konsole ausgegeben.
- `msg` {{optional_inline}}
  - : Ein JavaScript String, die keine oder mehrere Stringersetzungen enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden.
- `subst1` ... `substN` {{optional_inline}}
  - : JavaScript-Objekte, mit denen Stringersetzungen in `msg` ersetzt werden sollen. Dies gibt Ihnen zusätzliche Kontrolle über das Format der Ausgabe. Eine Beschreibung der Funktionsweise von Ersetzungen finden Sie unter {{SectionOnPage("/de-de/docs/Web/API/Console", "Verwenden von Ersatzstrings")}}.

Weitere Informationen finden Sie unter [Text in der Konsole ausgeben](/de/docs/Web/API/console#Outputting_text_to_the_console) in der Dokumentation des Objekts {{domxref("console")}}.

## Spezifikationen

| Specification                                                                | Status                           | Comment             |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#debug", "console.debug()")}} | {{Spec2("Console API")}} | Initiale definition |

## Browserkompatibilität

{{Compat("api.Console.debug")}}

## Siehe auch

- [Console API - Microsoft Edge Development | Microsoft Docs](https://docs.microsoft.com/de-de/microsoft-edge/devtools-guide/console/console-api)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/web/tools/chrome-devtools/console/api#debug)
