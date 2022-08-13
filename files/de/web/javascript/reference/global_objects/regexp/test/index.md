---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/test
---
{{JSRef}}

Die **`test()`** Methode führt eine Suche nach einer Übereinstimmung zwischen einer regular expression und einem String durch. Sie gibt `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

    regexObj.test(str)

### Parameter

- `str`
  - : Der String, mit dem die regular expression verglichen wird.

### Rückgabewerte

`true` wird zurückgegeben, wenn es eine Übereinstimmung zwischen der regular expression und dem String gibt `str`. Anderenfalls wird `false` zurückgegeben.

## Beschreibung

Verwenden Sie `test()`, wenn Sie wissen möchten, ob ein Muster auf einen String zutrifft. `test()` gibt einen boolschen Wert zurück, wohingegen die {{jsxref("String.prototype.search()")}} Methode den Index der Übereinstimmung, oder wenn keine Übereinstimmung gefunden wird, `-1` zurück gibt.

Um mehr Informationen zu erhalten, können Sie alternativ die langsammere {{jsxref("RegExp.prototype.exec()", "exec()")}} Methode verwenden. (Sie ähnelt {{jsxref("String.prototype.match()")}} Methode.)

As with `exec()` (or in combination with it), `test()` called multiple times on the same global regular expression instance will advance past the previous match.

## Beispiele

### test() anwenden

Ein einfaches Beispiel, um zu testen, ob `"hello"` am Anfang eines Strings enthalten ist. Die Ausgabe ist ein boole'scher Wert.

```js
const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
```

Das folgende Beispiel logt eine Nachricht, die vom Erfolg des Tests abhängt:

```js
function testInput(re, str) {
  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
  } else {
    midstring = 'does not contain';
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### Anwendung von test() mit dem Kennzeichen "global"

When a regex has the [global flag](/de/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2) set, `test()` will advance the {{jsxref("RegExp.lastIndex", "lastIndex")}} of the regex. ({{jsxref("RegExp.prototype.exec()")}} also advances the `lastIndex` property.)

Further calls to `test(str)` will resume searching `str` starting from `lastIndex`. The `lastIndex` property will continue to increase each time `test()` returns `true`.

> **Note:** As long as `test()` returns `true`, `lastIndex` will _not_ reset—even when testing a different string!

When `test()` returns `false`, the calling regex's `lastIndex` property will reset to `0`.

The following example demonstrates this behaviour:

```js
const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test('foo')     // true

// regex.lastIndex is now at 3
regex.test('foo')     // false

// regex.lastIndex is at 0
regex.test('barfoo')  // true

// regex.lastIndex is at 6
regex.test('foobar')  //false

// regex.lastIndex is at 0
// (...and so on)
```

## Spezifikationen

| Spezifikation                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-regexp.prototype.test', 'RegExp.test')}} |

## Browser -Kompatibilität

{{Compat("javascript.builtins.RegExp.test")}}

## Firefox-specific notes

Prior to Firefox 8, `test()` was implemented incorrectly. When called without parameters, it would match against the value of the previous input (`RegExp.input` property) instead of against the string `"undefined"`.

This is fixed. Now, `/undefined/.test()` correctly results in `true`, instead of throwing an error.

## Siehe auch

- Das Kapitel [Regular Expressions](/de/docs/Web/JavaScript/Guide/Regular_Expressions) im [JavaScript Guide](/de/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype")}}
