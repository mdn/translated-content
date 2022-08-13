---
title: 'ReferenceError: deprecated caller or arguments usage'
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
tags:
  - Errors
  - JavaScript
  - Strict Mode
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_caller_or_arguments_usage
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: ReferenceError: deprecated caller usage (Firefox)
    Warning: ReferenceError: deprecated arguments usage (Firefox)
    TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)

## Fehlertyp

Eine {{jsxref("ReferenceError")}} Warnung, die nur im Strict Mode auftaucht. Die JavaScript-Ausführung wird dadurch nicht angehalten.

## Was ist falsch gelaufen?

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wurden die Eigenschaften {{jsxref("Function.caller")}} oder {{jsxref("Function.arguments")}} benutzt, was nicht getan werden sollte. Sie sind veraltet, da sie den Funktionsaufruf verlieren, nicht standardisiert sind, schwer zu optimieren sind und möglicherweise leistungsschädigend sein können.

## Beispiele

### Veraltete `function.caller` oder `arguments.callee.caller` Eigenschaft

{{jsxref("Function.caller")}} und [`arguments.callee.caller`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) sind veraltet (in den Referenzartikeln sind mehr Informationen dazu enthalten).

```js example-bad
'use strict';

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"
```

### `Function.arguments`

{{jsxref("Function.arguments")}} ist veraltet (im Referenzartikel sind mehr Informationen dazu enthalten).

```js example-bad
'use strict';

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
```

## Siehe auch

- [Veraltete and obsolete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.arguments")}}
- {{jsxref("Function.caller")}} und [`arguments.callee.caller`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
