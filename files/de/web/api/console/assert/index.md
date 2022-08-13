---
title: Console.assert()
slug: Web/API/Console/assert
translation_of: Web/API/console/assert
---
{{APIRef("Console API")}}

Schreibt eine Fehlermeldung in die Konsole, wenn eine Behauptung falsch ist. Wenn die Behauptung wahr ist, passiert nichts.

{{AvailableInWorkers}}

Die Methode `console.assert()` wurde in älteren Node.js Versionen anders implementiert als in Browsern. In Browsern wird durch den Aufruf von `console.assert()` mit einer falschen Behauptung `message` in die Konsole ausgegeben, _ohne_ die Ausführung des nachfolgenden Codes zu unterbrechen. Vor Node.js v10.0.0 bewirkt eine falsche Behauptung jedoch auch, dass ein `AssertionError` ausgelöst wird. Diese Diskrepanz wurde mit Node v10 behoben, so dass `console.assert()` jetzt sowohl in Node als auch im Browser gleich funktioniert.

## Syntax

```js
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // c-ähnliche Formatierung
```

### Parameter

- `assertion`
  - : Jeder boolesche Ausdruck. Wenn die Behauptung falsch ist, wird `message` in der Console ausgegeben.
- `obj1` ... `objN`
  - : Eine Liste der auszugebenden JavaScript-Objekte. Die String-Darstellungen jedes dieser Objekte werden in der angegebenen Reihenfolge zusammengefügt und ausgegeben.
- `msg`
  - : Ein JavaScript-String, der keine oder mehrere Ersetzungsstrings enthält.
- `subst1` ... `substN`
  - : JavaScript-Objekte, mit denen Ersetzungsstrings in msg ersetzt werden sollen. Dieser Parameter gibt Ihnen zusätzliche Kontrolle über das Format der Ausgabe.

## Beispiele

Im folgenden Codebeispiel wird die Verwendung eines JavaScript-Objekts nach der Behauptung veranschaulicht:

```js
const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // oder mit ES2015 Object Property Shorthand:
    // console.assert(number % 2 === 0, {number, errorMsg});
}
// Ausgabe:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

Beachten Sie, dass ein String, der einen Ersatzstring enthält, als Parameter für `console.log()` in Node und vielen, wenn nicht allen Browsern, funktioniert...

```js
console.log('the word is %s', 'foo');
// Ausgabe: the word is foo
```

...die Verwendung eines solchen Strings als Parameter für `console.assert()` jedoch derzeit nicht in allen Browsern wie erwartet funktioniert:

```js
console.assert(false, 'the word is %s', 'foo');
// korrekte Ausgabe in Node (e.g. v8.10.0) und einigen Browsern
//     (z. B. Firefox v60.0.2):
// Assertion failed: the word is foo
// inkorrekte Ausgabe in einigen Browsern
//     (z. B. Chrome v67.0.3396.87):
// Assertion failed: the word is %s foo
```

Weitere Informationen finden Sie in der Dokumentation von {{domxref("console")}} unter [Text in der Konsole ausgeben](/de/docs/Web/API/console#Outputting_text_to_the_console).

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar           |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#assert", "console.assert()")}} | {{Spec2("Console API")}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Console.assert")}}

## Siehe auch

- [WHATWG Console Standard: console.assert](https://console.spec.whatwg.org/#assert-condition-data)
- [Console API - Microsoft Edge Development | Microsoft Docs](https://docs.microsoft.com/de-de/microsoft-edge/devtools-guide/console/console-api)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/web/tools/chrome-devtools/console/api#assert)
