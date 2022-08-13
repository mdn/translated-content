---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Read-only
original_slug: Web/JavaScript/Reference/Fehler/Read-only
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: "x" is read-only (Firefox)
    TypeError: 0 is read-only (Firefox)
    TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
    TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Die globale Variable oder Objekteigenschaften werden als nur lesbare Eigenschaften definiert (technisch wird das mit der [`writable` Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute) erreicht).

Der Fehler tritt nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. Im normalen Modus wird eine Zuweisung still ignoriert.

## Beispiele

### Nicht valide Fälle

Nur lesbare Eigenschaften sind nicht sehr weit verbreitet, aber sie können mit {{jsxref("Object.defineProperty()")}} oder {{jsxref("Object.freeze()")}} erstellt werden.

```js example-bad
'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
obj.score = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
```

Zudem gibt es ein paar standard Eigenschaft in JavaScript, die nicht überschrieben werden können. Da währen zum Beispiel mathematische Konstanten.

```js example-bad
'use strict';
Math.PI = 4;  // TypeError
```

Die globale Variable `undefined` ist auch nur lesbar, sodass der berüchtigte Fehler "undefined is not a function" nicht wie folgt umgangen werden kann:

```js example-bad
'use strict';
undefined = function() {};  // TypeError: "undefined" is read-only
```

### Valide Fälle

```js example-good
'use strict';
var obj = Object.freeze({name: 'Score', points: 157});
obj = {name: obj.name, points: 0};   // replacing it with a new object works

'use strict';
var LUNG_COUNT = 2;  // a `var` works, because it's not read-only
LUNG_COUNT = 3;  // ok (anatomically unlikely, though)
```

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
- ["Which animals have three lungs?" on answers.com](https://www.answers.com/Q/Which_animals_have_three_lungs)
