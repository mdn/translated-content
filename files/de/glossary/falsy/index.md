---
title: Falsy
slug: Glossary/Falsy
tags:
  - CodingScripting
  - Glossary
  - JavaScript
translation_of: Glossary/Falsy
---
Ein **falsy-**Wert ist ein Wert welcher zu `false` übersetzt, wenn er in einem {{Glossary("Boolean", "booleschen")}} Kontext ausgewertet wird.

{{Glossary("JavaScript")}} nutzt {{Glossary("Type_Conversion", "Type Conversion")}} (Typ-Konvertierung) um für beliebige Werte eine boolesche Entsprechung zu erzwingen, wenn der Kontext es erfordert, beispielsweise bei {{Glossary("Conditional", "Conditionals")}} (Bedingungen) und {{Glossary("Loop", "Loops")}} (Schleifen).

> **Note:** Es gibt 8 **falsy**-Werte in JavaScript.Das heißt, wenn JavaScript einen Booleschen Wert erwartet und einen der folgenden erhält, es diesen als “falsy” auswerten wird.

| `false`                          | Das Schlüsselwort [false](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Reservierte_zukünftige_Schlüsselworte)                                                                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`                              | Die Zahl [zero](/de/docs/Web/JavaScript/Datenstrukturen#Number_Datentyp)                                                                                                                                                                                                              |
| `-0`                             | Die negative Zahl [zero](/de/docs/Web/JavaScript/Datenstrukturen#Number_Datentyp)                                                                                                                                                                                                     |
| `0n`                             | [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt), sofern es als Boolescher Wert genutzt wird, folgt den gleichen Regeln wie eine Number. `0n` ist _falsy_.                                                                                                           |
| `""`, `''`, ` `` `               | Dies ist ein leerer String (die Länge des Strings ist null). Strings in JavaScript können mit doppelten Anführungszeichen **`""`**, einfachen Anführungszeichen **`''`**, oder [Template literals](/de/docs/Web/JavaScript/Reference/template_strings) **` `` `**``definiert werden. |
| {{Glossary("null")}}     | [null](/de/docs/Web/JavaScript/Reference/Global_Objects/null) - die Abwesenheit irgendeines Wertes                                                                                                                                                                                    |
| {{Glossary("undefined")}} | [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) - der primitive Wert                                                                                                                                                                                          |
| {{Glossary("NaN")}}         | [NaN](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN)- not a number (keine Zahl)                                                                                                                                                                                               |

## Beispiele

Beispiele von \_falsy-\_Werten in JavaScript (welche zu false übersetzen und somit folgende `if` Konditionen nicht erfüllen):

```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```

> **Note:** `document.all` wurde in der Vergangenheit zur Browsererkennung verwendet und die [HTML-Spezifikation definiert hier eine absichtliche Verletzung](http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#dom-document-all) des ECMAScript-Standards, um eine Kompatibilität mit Legacy-Code zu gewährleisten `(if (document.all) { // Internet Explorer code here }` oder nutzen von `document.all` ohne vorher auf dessen Existenz zu prüfen: `document.all.foo`).

### Der logische AND Operator, &&

Falls das erste Objekt _falsy_ ist, wird dieses zurückgegeben

```js
let pet = false && "dog";

// ↪ false
```

Manchmal begegnet man auch der Schreibweise **falsey**, obwohl im Englischen die Bildung von Adjektiven mit _-y_ zu einem Wegfall des Buchstaben _e_ am Ende des Wortes führt (z.B. noise => noisy, ice => icy, shine => shiny).

## Spezikationen

| Spezifikation                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-toboolean", "<code>ToBoolean</code> abstract operation")}} |

## Mehr erfahren

- {{Glossary("Truthy")}}
- {{Glossary("Boolean")}}

{{QuickLinksWithSubpages("/de/docs/Glossar")}}
