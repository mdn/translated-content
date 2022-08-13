---
title: Window.alert
slug: Web/API/Window/alert
tags:
  - API
  - DOM
  - Method
  - Reference
  - Window
translation_of: Web/API/Window/alert
---
{{ APIRef }}

Die **`Window.alert()`** Methode zeigt einen Alert-Dialog mit optional spezifiziertem Inhalt und einem OK-Button an.

## Syntax

    window.alert(nachricht);

- `nachricht` ist ein optionaler Text-String, der im Dialog angezeigt werden soll, oder alternativ ein Objekt, das in einen Text-String umgewandelt und angezeigt wird.

## Beispiel

```js
window.alert("Hello world!");
```

erzeugt:

![Image:AlertHelloWorld.png](/files/130/AlertHelloWorld.png)

## Mehr JS:

```js
alert()
```

## Anmerkungen

Der Alert-Dialog sollte für Nachrichten benutzt werden, die keine Reaktion des Nutzers benötigen, außer seiner/ihrer Bestätigung.

Dialog-Boxen sind modale Fenster - der Rest der Oberfläche wird erst geladen, sobald die Box geschlossen wird. Deswegen sollten Funktionen, die Dialog-Boxen (oder modale Fenster) erzeugen, nicht zu oft benutzt werden.

[Mozilla Chrome](https://developer.mozilla.org/en-US/Chrome "Chrome")-Nutzer (z. B. Firefox-Erweiterungen) sollten stattdessen Methoden des `nsIPromptService` verwenden.

Ab Chrome {{CompatChrome(46.0)}} wird diese Methode innerhalb eines {{htmlelement("iframe")}} geblockt, solange sein Sandbox-Attribut nicht den Wert `allow-modal` enthält.

{{gecko_minversion_inline("23.0")}} Das Argument ist nun optional, wie von der Spezifikation gefordert.

## Spezifikationen

| Spezifikation                                                                        | Status                                       | Kommentar              |
| ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------- |
| {{SpecName('HTML5 Web application', '#dom-alert', 'alert()')}} | {{Spec2('HTML5 Web application')}} | Anfängliche Definition |

## Siehe auch

- [`<dialog>`](/de/docs/Web/HTML/Element/dialog)
- [`window.confirm`](/de/docs/Web/API/Window/confirm)
- [`window.prompt`](/de/docs/Web/API/Window/prompt)
