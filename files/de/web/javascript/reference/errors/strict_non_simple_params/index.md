---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
original_slug: Web/JavaScript/Reference/Fehler/Strict_Non_Simple_Params
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Firefox:
    SyntaxError: "use strict" not allowed in function with default parameter
    SyntaxError: "use strict" not allowed in function with rest parameter
    SyntaxError: "use strict" not allowed in function with destructuring parameter

    Chrome:
    SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist falsch gelaufen?

Eine `"use strict"` Direktive steht am Anfang einer Funktion, die einen der folgende Parameter hat:

- {{jsxref("Functions/Default_parameters", "Standardparameter", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest Parameter", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destrukturierte Parameter", "", 1)}}

Eine `"use strict"` Direktive ist am Anfang solcher Funktionen durch die ECMAScript Spezifikation nicht erlaubt.

## Beispiele

### Funktionsstatement

In diesem Fall hat die Funktion `sum` zwei Standardparameter `a=1` und `b=2`:

```js example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  'use strict';
  return a + b;
}
```

Wenn die Funktion im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sein soll und das Skript oder die umschließende FUnktion auch für den Strict Mode in Ordnung ist, kann man die `"use strict"` Direktive nach außen verschieben:

```js example-good
'use strict';
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Funktionsausdruck

Bei eine Funktionsausdruck kann ein andere Workaround genutzt werden:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  'use strict';
  return a + b;
};
```

Dieses kann zu folgendem Ausdruck konvertiert werden:

```js example-good
var sum = (function() {
  'use strict';
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Pfeilfunktionen

Wenn eine Pfeilfunktion auf die `this` Variable zugreift, so kann eine umschließende Pfeilfunktion benutzt werden:

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  'use strict';
  return this.run(args);
};
```

Dieses kann zu folgendem Ausdruck konvertiert werden:

```js example-good
var callback = (() => {
  'use strict';
  return (...args) => {
    return this.run(args);
  };
})();
```

## Siehe auch

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
