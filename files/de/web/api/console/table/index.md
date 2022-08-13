---
title: Console.table()
slug: Web/API/Console/table
tags:
  - Konsole
  - Tabelle
  - log
  - tabellarisch
translation_of: Web/API/Console/table
---
{{APIRef("Console API")}}

Zeigt tabellarische Daten als Tabelle im Log an.

Diese Funktion benötigt einen Parameter `data`, welcher ein Array oder ein Objekt sein muss und außerdem einen optionalen Parameter `columns`.

Die Funktion zeigt `data` als Tabelle im Log an. Jedes Element im Array (bzw. jede zählbare Eigenschaft im `data` Objekt) wird als Tabellenzeile angezeigt.

Die erste Tabellenspalte wird mit `(index)` bezeichnet. Wenn `data` ein Array ist, dann erscheinen in dieser Spalte die Arrayindizes. Wenn `data` ein Objekt ist, dann erscheinen in dieser Spalte die Eigenschaftsnamen. Beachten Sie, dass (bei Firefox) `console.table` maximal 1000 Zeilen anzeigt. (Die erste Zeile ist die Überschriftszeile mit der Bezeichnung index).

{{AvailableInWorkers}}

### Sammlungen (Collections) mit primitiven Datentypen

Der `data` Parameter kann ein Array oder ein Objekt sein.

```js
// Ein String-Array

console.table(["apples", "oranges", "bananas"]);
```

![](https://mdn.mozillademos.org/files/8567/console-table-array.png)

```js
// Ein Objekt mit Eigenschaften, die Strings sind

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);
```

![](https://mdn.mozillademos.org/files/8559/console-table-simple-object.png)

### Sammlungen (Collections) mit zusammengesetzen Typen

Wenn die Arrayinhalte oder die Objekteigenschaften selbt Arrays oder Objekte sind, dann werden deren Elemente einzeln in jeder Spalte dargestellt:

```js
// Ein Array, welches Arrays enthält

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);
```

![Table displaying array of arrays](https://mdn.mozillademos.org/files/8561/console-table-array-of-array.png)

```js
// Ein Array mit Objekten

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
```

Beachten Sie: Wenn das Array Objekte enthält, dann werden die Spalten mit dem Eigenschaftsnamen beschriftet.

![Table displaying array of objects](https://mdn.mozillademos.org/files/8563/console-table-array-of-objects.png)

```js
// Ein Objekt mit Eigenschaften, welche wiederum ein
// Objekt sind

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

![Table displaying object of objects](https://mdn.mozillademos.org/files/8565/console-table-object-of-objects.png)

### Auswahl der anzuzeigenden Spalten

Nromalerweise zeigt `console.table()` alle Elemente in jeder Zeile an. Sie können aber den optionalen Parameter `columns` verwenden, um nur bestimmte Spalten anzuzeigen:

```js
// Ein Array mit Objekten, nur der "firstName"
// wird angezeigt.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);
```

![Table displaying array of objects with filtered output](https://mdn.mozillademos.org/files/8569/console-table-array-of-objects-firstName-only.png)

### Tabelle sortieren

Sie können die Tabelle durch einen Klick auf den jeweiligen Spaltenkopf umsortieren.

## Syntax

    console.table(data [, columns]);

### Parameter

- `data`
  - : Die anzuzeigenden Daten. Diese müssen ein Array oder ein Objekt sein.
- `columns`
  - : Ein Array mit den anzuzeigenden Spalten.

## Spezifikationen

| Specification                                                                | Status                           | Comment            |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#table", "console.table()")}} | {{Spec2("Console API")}} | Initial definition |

## Browserkompatibilität

{{Compat}}
