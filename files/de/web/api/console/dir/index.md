---
title: Console.dir()
slug: Web/API/Console/dir
translation_of: Web/API/Console/dir
---
{{APIRef("Console API")}}

Zeigt eine interaktive Liste der Eigenschaften des angegebenen JavaScript-Objekts an. Die Ausgabe wird als hierarchische Liste mit Aufklapp-Dreiecken angezeigt, in denen Sie den Inhalt untergeordneter Objekte sehen können.

Mit anderen Worten: Mit `console.dir()` können Sie alle Eigenschaften eines angegebenen JavaScript-Objekts in der Konsole anzeigen und problemlos abrufen.

{{AvailableInWorkers}}

![console-dir.png](/@api/deki/files/6081/=console-dir.png)

## Syntax

    console.dir(object);

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften angezeigt werden sollen.

## Spezifikationen

| Spezifikation                                                                            | Status                           | Kommentar           |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#consoledirobject", "console.dir()")}} | {{Spec2("Console API")}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Console.dir")}}

## Siehe auch

- [Console API - Microsoft Edge Development | Microsoft Docs](https://docs.microsoft.com/de-de/microsoft-edge/devtools-guide/console/console-api)
- [Chrome Console API reference](https://developers.google.com/web/tools/chrome-devtools/console/api#dir)
