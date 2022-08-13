---
title: 'TypeError: variable "x" redeclares argument'
slug: Web/JavaScript/Reference/Errors/Var_hides_argument
tags:
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Var_hides_argument
original_slug: Web/JavaScript/Reference/Fehler/Var_hides_argument
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: variable "x" redeclares argument (Firefox)

## Fehlertyp

{{jsxref("TypeError")}} Warnung nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Der selbe Variablenname für einen Funktionsparameter und einer Neudeklaration mit einer [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Zuweisung im Funktionskörper ist vorhanden. Dieses ist ein Namenskonflikt, weshalb JavaScript eine Warnung erzeugt.

Dieser Fehler ist eine Warnung, die nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) auftaucht. Ist man nicht im strict mode, so wird die Neudeklaration still ignoriert.

## Beispiele

### Nicht balider Fall

In diesem Fall wird die Variable "arg" neu deklariert.

```js example-bad
'use strict';

function f(arg) {
  var arg = 'foo';
}
```

### Valider Fall

Um diese Warnung zu vermeiden kann das [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) Statement weggelassen werden, weil die Variable schon existiert. In anderen Fällen kann der Funktionsparameter oder die Variable umbenannt werden.

```js example-good
'use strict';

function f(arg) {
  arg = 'foo';
}
```

## Siehe auch

- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
