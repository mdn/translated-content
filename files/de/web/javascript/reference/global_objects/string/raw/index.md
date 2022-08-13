---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/raw
---
{{JSRef}}Die statische **`String.raw()`** Methode ist eine tag Funktion für [template literale](/de/docs/Web/JavaScript/Reference/template_strings) ähnlich dem r Präfix in Python oder dem @ Präfix in C# für String Literale (es gibt jedoch einen Unterschied: siehe in der Beschreibung [dieses Issues](https://bugs.chromium.org/p/v8/issues/detail?id=5016)). Es wird verwendet um rohen, unveränderten Text zu verwenden.

## Syntax

    String.raw(callSite, ...substitutions)
    String.raw`templateString`

### Parameter

- `callSite`
  - : Sauber formatiertes template call object, wie `{ raw: 'string' }`.
- `...substitutions`
  - : Enthält Substitutionswerte.
- `templateString`
  - : Ein [template string](/de/docs/Web/JavaScript/Reference/template_strings), optional mit Substitutionen (`${...}`).

### Rückgabewerte

Einen rohen, unveränderbaren String des template Strings.

### Auftretende Errors

- {{jsxref("TypeError")}}
  - : Ein {{jsxref("TypeError")}} wird ausgeworfen wenn das erste Argument nicht sauber formatiert ist.

## Beschreibung

Meistens wird `String.raw()` mit template strings (Vorlagen-Zeichenketten) benutzt. Die erste oben beschriebene Syntax wird kaum benutzt weil die JavaScript engine die Argumente richtig aufrufen wird so wie bei anderen [tag Funktionen.](/de/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings)

`String.raw()` ist die einzige built-in tag function für template strings; Sie funktioniert wie eine default template function und führt concatenation (Verbindung mehrerer Strings zu einem) aus. Man kann sie sogar mit JS code neu schreiben.

## Beispiele

### Verwendung von `String.raw()`

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', das Zeichen nach 'Hi' ist kein newline (Zeilenumbruch) Zeichen,
// '\' und 'n' sind zwei Zeichen.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', hier genauso, diesmal bekommen wir folgende Zeichen zurrück:
//  \, u, 0, 0, 0, A, 6
// Alle Typen von escape characters (besondere Steuerzeichen) sind ineffektiv
// Backslashes werden unverändert ausgegeben.
// Man kann dies prüfen indem man die .length property des strings abfragt
console.log( String.raw`Hi\u000A!`.length ) // gibt 9 zurrück
console.log( "Hi\u000A!".length ) // gibt 4 zurrück


let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', Substitutionen werden bearbeitet.

// Normalerweise ruft man  String.raw() nicht als function auf aber man kann
//folgendes:
String.raw({ raw: 'test' }, 0, 1, 2);
// 't0e1s2t'
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.raw', 'String.raw')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-string.raw', 'String.raw')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## See also

- [Template strings](/de/docs/Web/JavaScript/Reference/template_strings)
- {{jsxref("String")}}
- [Lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
