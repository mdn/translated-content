---
title: Window.prompt()
slug: Web/API/Window/prompt
translation_of: Web/API/Window/prompt
---
{{ApiRef("Window")}}

`Window.prompt()` zeigt ein Dialogfenster mit einem Text-Eingabefeld an, mit einer optionalen Nachricht an den Benutzer.

## Syntax

    eingabe = window.prompt(nachricht, default);

- `eingabe` ist ein String, der den vom Benutzer eingegeben Text enthält, oder null.
- `nachricht` ist der String, der dem Benutzer angezeigt wird. Dieser Parameter ist optional und kann weggelassen werden, wenn es im Fenster nichts anzuzeigen gibt.
- `default` ist ein String mit dem voreingestellten Wert im Eingabefeld. Es ist ein optionaler Parameter. Beachte, dass in Internet Explorer 7 und 8 der String "undefined" im Eingabefeld steht, wenn der Parameter weggelassen wird.

## Beispiel

```js
var sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// es gibt viele Möglichkeiten, um die prompt-Funktion zu nutzen
var sign = window.prompt(); //  Öffnet das leere Eingabefenster
var sign = prompt();       //   Öffnet das leere Eingabefenster
var sign = window.prompt('Are you feeling lucky'); // Öffnet das Eingabefenster mit dem Text "Are you feeling lucky"
var sign = window.prompt('Are you feeling lucky', 'sure'); // Öffnet das Eingabefenster mit dem Text "Are you feeling lucky" und dem Standardwert "sure"
```

Wenn der Benutzer den OK-Button drückt, wird der Text im Eingabefeld zurückgegeben. Falls das Feld leer ist, wenn der Benutzer den OK-Button drückt, wird ein leerer String zurückgegeben. Wird der Abbrechen-Button gedrückt, gibt die Funktion `null` zurück.

Die obige Eingabeaufforderung wird wie folgt angezeigt (in Chrome auf OS X):

[![prompt() dialog in Chrome on OS X](https://mdn.mozillademos.org/files/11303/prompt.png)](https://mdn.mozillademos.org/files/11303/prompt.png)

## Anmerkungen

Ein prompt-Dialogfenster einen einzeiligen Text, einen Abbrechen-Button und einen OK-Button und gibt den (möglicherweise leeren) Text zurück, der ins Textfeld eingegeben wurde.

The following text is shared between this article, DOM:window\.confirm and DOM:window\.alert Dialogfenster sind _modal_ - sie verhindern, dass der Anwender auf den Rest der Seite zugreifen kann, bis das Dialogfenster geschlossen wurde. Aus diesen Grund sollte man Funktionen, die Dialogfenster anzeigen, nicht zu oft verwenden.

Beachte, dass ein String zurückgegeben wird. Das heißt, die Eingabe muss manchmal gecasted werden. Beispiel: Falls eine Zahl eingegeben werden soll, sollte der String zu einer Zahl gecasted werden. `var aNumber = Number(window.prompt("Gib eine Zahl ein", ""));`

[Mozilla Chrome](/en-US/Chrome "Chrome")-Nutzer (z.B. Firefox-Erweiterungen) sollten stattdessen `nsIPromptService` verwenden.

Seit Chrome {{CompatChrome(46.0)}} wird diese Funktion innerhalb eines {{htmlelement("iframe")}}s blockiert, es sei denn, dessen sandbox-Attribut hat den Wert `allow-modal`.

In Safari wird auch dann ein leerer String zurückgegeben, wenn _Abbrechen_ gedrückt wurde. Es macht also keinen Unterschied, ob OK oder Abbrechen gedrückt wird, wenn das Eingabefeld leer ist.

Diese Funktion hat keinen Effekt in der Modern UI/Metro-Version von Internet Explorer für Windows 8. Es zeigt kein Dialogfenster an und gibt immer `undefined` zurück. Es ist unklar, ob dieses Verhalten Absicht oder ein Bug ist. Desktopversionen von Internet Explorer implementieren die Funktion aber.

## Spezifikationen

| Spezifikationen                                                                      | Status                                       | Kommentar               |
| ------------------------------------------------------------------------------------ | -------------------------------------------- | ----------------------- |
| {{SpecName('HTML5 Web application', '#dom-prompt', 'prompt()')}} | {{Spec2('HTML5 Web application')}} | Anfängliche Definition. |

## Siehe auch

- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
