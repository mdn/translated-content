---
title: Window.confirm()
slug: Web/API/Window/confirm
tags:
  - API
  - DOM
  - Method
  - NeedsBrowserCompatibility
  - NeedsCompatTable
  - NeedsMobileBrowserCompatibility
  - Reference
  - Window
  - confirm
translation_of: Web/API/Window/confirm
---
{{ApiRef("Window")}}

Die **`Window.confirm()`** Funktion zeigt ein modales Dialogfenster mit einem optionalen Text und zwei Buttons an, OK und Abbrechen.

## Syntax

    eingabe = window.confirm(nachricht);

- `nachricht` ist der optionale Text, der im Dialogfenster angezeigt wird.
- `eingabe` ist ein _boolean_-Wert, der angibt, welche Schaltfläche gedrückt wurde (`true` heißt OK).

## Beispiel

```js
if (window.confirm("Willst du die Seite wirklich verlassen?")) {
    window.open("exit.html", "Auf Wiedersehen!");
}
```

Erzeugt (_englisch_):

![firefox confirm](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

## Anmerkungen

The following text is shared between this article, DOM:window\.prompt and DOM:window\.alert Dialogfenster sind _modal_ - sie verhindern, dass der Anwender auf den Rest der Seite zugreifen kann, bis das Dialogfenster geschlossen wurde. Aus diesen Grund sollte man Funktionen, die Dialogfenster anzeigen, nicht zu oft verwenden. Und unabhängig davon gibt es gute Gründe dafür, [Dialogfenster zum Bestätigen einer Aktion zu vermeiden](http://alistapart.com/article/neveruseawarning).

[Mozilla Chrome](/en-US/Chrome "Chrome")-Nutzer (z.B. Firefox-Erweiterungen) sollten stattdessen `nsIPromptService` verwenden.

Seit Chrome {{CompatChrome(46.0)}} wird diese Funktion innerhalb eines {{htmlelement("iframe")}}s blockiert, es sei denn, dessen sandbox-Attribut hat den Wert `allow-modal`.

{{gecko_minversion_inline("23.0")}} Der Parameter ist optional und wird laut Spezifikation nicht benötigit.

## Spezifikation

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#dom-confirm', 'confirm()')}} | {{Spec2('HTML WHATWG')}} |           |

## Siehe auch

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
