---
title: >-
  SyntaxError: applying the 'delete' operator to an unqualified name is
  deprecated
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
original_slug: Web/JavaScript/Reference/Fehler/Delete_in_strict_mode
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
    SyntaxError: Delete of an unqualified identifier in strict mode. (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Normale Variablen können in JavaScript nicht mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator gelöscht werden. Im Strict Mode führt der Versuch des Löschens zu einem Fehler, weil es nicht erlaubt ist.

Der `delete` Operator kann nur Eigenschaften eines Objektes löschen. Objekteigenschaften müssen dafür Konfigurierbar sein.

Wie oft fälschlicherweise angenommen, hat die `delete` Operation **nichts** mit dem direkten freimachen von Speicher zu tun. Speicherverwaltung wird indirekt gemacht, mehr Informationen darüber auf den Seiten [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_Management) und [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete).

Der Fehler tritt nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In normalem Code gibt die Operation einfach `false` zurück.

## Beispiele

Der Versuch eine einfache Variable zu Löschen funktioniert in JavaScript nicht unf führt im Strict Mode zu einem Fehler:

```js example-bad
'use strict';

var x;

// ...

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

Um den Inhalt einer Variable zu leeren, kann man sie auf {{jsxref("null")}} setzen:

```js example-good
'use strict';

var x;

// ...

x = null;

// x can be garbage collected
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_Management)
- [TypeError: property "x" is non-configurable and can't be deleted](/de/docs/Web/JavaScript/Reference/Errors/Cant_delete)
