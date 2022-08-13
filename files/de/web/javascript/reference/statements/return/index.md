---
title: return
slug: Web/JavaScript/Reference/Statements/return
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/return
---
{{jsSidebar("Statements")}}

Die **`return` **Anweisung beendet einen Funktionsaufruf und spezifiziert einen Wert, der von der Funktion zum Aufrufer zurückgegeben wird.

## Syntax

    return [[expression]];

- `expression`
  - : Ausdruck, der zurückgegeben wird. Wenn er weggelassen wird, wird `undefined` zurückgegeben.

## Beschreibung

Wenn in einer Funktion eine `return` Anweisung aufgerufen wird, wird der Aufruf der Funktion gestoppt. Wenn ein Rückgabewert spezifiziert ist, wird dieser zu der aufrufenden Funktion zurückgegeben. Wenn kein Rückgabewert angegeben wird, wird stattdessen `undefined` zurückgegeben. Die folgenden `return` Anweisungen unterbrechen alle den Funktionsaufruf:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### Automatische Semikolon-Einfügung

Die `return` Anweisung wird von der [automatischen Semikolon-Einfügung (Automatic semicolon insertion, kurz ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) beeinflusst. Es ist kein Zeilenumbruch zwischen dem `return` Schlüsselwort und dem nachfolgenden Ausdruck erlaubt.

```js
return
a + b;
```

wird durch ASI umgewandelt in:

    return;
    a + b;

Die Konsole wird folgende Warnung ausgeben: "unreachable code after return statement".

> **Note:** Mit Gecko 40 {{geckoRelease(40)}}, wird eine Warnung in der Konsole ausgegeben, wenn Quelltext gefunden wird, der nach einer return Anweisung steht.

## Beispiele

### return

Die folgende Funktion gibt das Quadrat von `x` zurück. Dabei ist `x` eine Zahl.

```js
function square(x) {
   return x * x;
}
```

### Unterbrechen einer Funktion

Eine Funktion stoppt die Ausführung, wenn `return` aufgerufen wird.

```js
function counter() {
  for (var count = 1; ; count++) {  // infinite loop
    console.log(count + "A"); // until 5
      if (count === 5) {
        return;
      }
      console.log(count + "B");  // until 4
    }
  console.log(count + "C");  // never appears
}

counter();

// Output:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Funktion als Rückgabewert

Sie dazu auch im Artikel [Closures](/de/docs/Web/JavaScript/Closures).

```js
function magic(x) {
  return function calc(x) { return x * 42 };
}

var answer = magic();
answer(1337); // 56154
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-12.9', 'Return statement')}}                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-return-statement', 'Return statement')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-return-statement', 'Return statement')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Functions](/de/docs/Web/JavaScript/Reference/Functions "En/Core_JavaScript_1.5_Reference/Functions")
- [Closures](/de/docs/Web/JavaScript/Closures)
