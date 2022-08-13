---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
  - Errors
  - InternalError
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Too_much_recursion
original_slug: Web/JavaScript/Reference/Fehler/Too_much_recursion
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    InternalError: too much recursion

## Fehlertyp

{{jsxref("InternalError")}}.

## Was ist falsch gelaufen?

Eine Funktion, die sich selbst aufruft, wird rekursive Funktion genannt. In manchen Fällen ist Rekursion mit einer Schleife vergleichbar. Beide führen den gleichen Code mehrfach aus und beide brauchen eine Abbruchbedingung (um Endlosschleifen bzw. Endlosrekursion zu vermeiden). Wenn zu tiefe Rekursion oder Endlosrekursion auftritt, erzeugt JavaScript diesen Fehler.

## Beispiele

Diese rekursive Methode wird bis zur Abbruchbedingung 10 mal durchlaufen.

```js
function schleife(x) {
  if (x >= 10) // "x >= 10" ist die Abbruchsbedingung
    return;
  // zu wiederholende Codezeilen
  schleife(x + 1); // rekursiver Methodenaufruf
}
schleife(0);
```

Wird die Abbruchsbedingung auf eine zu hohe Wert gesetzt, ist die Rekursionstiefe zu hoch und es wird einen Fehler erzeugt:

```js example-bad
function boeseSchleife(x) {
  if (x >= 1000000000000)
    return;
  // zu wiederholende Codezeilen
  boeseSchleife(x + 1);
}
boeseSchleife(0);

// InternalError: too much recursion
```

## Siehe auch

- {{Glossary("Recursion")}}
- [Rekursive Methoden](/de/docs/Web/JavaScript/Guide/Funktionen)
