---
title: delete Operator
slug: Web/JavaScript/Reference/Operators/delete
tags:
  - JavaScript
  - Memory Management
  - Object
  - Operator
  - Property
  - Reference
  - Release
  - Unary
  - delete
translation_of: Web/JavaScript/Reference/Operators/delete
---
{{jsSidebar("Operators")}}

Der JavaScript **`delete`-Operator** entfernt eine Eigenschaft eines Objekts. Wenn keine weitere Referenz auf dieselbe Eigenschaft mehr existiert, wird diese automatisch freigegeben.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Syntax

    delete Ausdruck

wobei _Ausdruck_ zu eine Referenz auf eine Eigenschaft ausgewertet werden sollte, z. B.:

    delete object.property
    delete object['property']

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck der zu einem Objekt ausgewertet wird.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` für alle Fälle, außer wenn die Eigenschaft eine eigene nicht konfigurierbare Eigenschaft ist, in diesem Fall wird im nicht strict Modus `false` zurückgegeben.

### Fehler

Erzeugt einen {{jsxref("Global_objects/SyntaxError")}} im [strict Modus](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode), wenn die Eigenschaft eine eigene nicht konfigurierbare Eigenschaft ist.

## Beschreibung

Anders als es allgemein üblich ist, hat der `delete` Operator **nichts** mit dem Freigeben von Speichers zu tun. Speicherverwaltung wird indirekt über fehlende Referenzen gemacht, dazu mehr Details auf der Seite [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_Management).

Der **`delete`** Operator entfernt eigene gegebene Eigenschaft von einem Objekt. Ist dieses Erfolgreich, wird `true` zurückgegeben, andernfalls `false`. Jedoch ist es wichtig die folgenden Szenarien zu bedenken:

- Wenn die Eigenschaft, die gelöscht werden soll, nicht existiert, hat `delete` keinen Effekt und wird `true` zurückgeben.
- Wenn eine Eigenschaft mit dem selben Namen in der Prototypenkette existiert, wird nach dem Löschen diese Eigenschaft aus der Prototypenkette weiter benutzt (in anderen Worten, `delete` hat nur auf eigenen Eigenschaften einen Effekt).
- Jede Eigenschaft, die mit {{jsxref("Statements/var","var")}} deklariert wurde, kann nicht vom globalen oder Funktionsgültigkeitsbereich gelöscht werden.

  - `delete` kann keine Funktion im globalen Gültigkeitsbereich löschen (egal ob diese Teil einer Funktionsdeklaration oder eines Funktionsausdrucks ist).
  - Funktionen die Teil eines Objektes sind (außer dem globalen Objekt) können mit `delete` gelöscht werden.

- Jede Eigenschaft, die mit {{jsxref("Statements/let","let")}} oder {{jsxref("Statements/const","const")}} deklariert wurde, kann nicht vom Gültigkeitsbereich, indem diese definiert wurde, gelöscht werden.
- Nicht konfigurierbare Eigenschaften können nicht gelöscht werden. Eingenommen sind Eigenschaften von Standardobjekten wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} und Eigenschaften die mit Methoden wie {{jsxref("Object.defineProperty()")}} als nicht konfigurierbar erstellt wurden.

Der folgende Ausschnitt enthält ein einfaches Beispiel:

```js
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);  // gibt true zurück
console.log(delete Employee.age);   // gibt true zurück

// Wenn versucht wird eine Eigenschaft zu löschen,
// die nicht existiert, wird true zurückgegeben
console.log(delete Employee.salery) // gibt true zurück
```

### Nicht konfigurierbare Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar markiert ist, hat `delete` keinen Effekt und wird `false` zurückgeben. Im strict Modus wird es zu einem `SyntaxError` kommen.

```js
var Employee = {};
Object.defineProperty(Employee, 'name', {configurable: false});

console.log(delete Employee.name);  // gibt false zurück
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}} und {{jsxref("Statements/const","const")}} erstellen nicht konfigurierbare Eigenschaften, die nicht mit dem `delete` Operator gelöscht werden können.

```js
var nameOther = 'XYZ';

// Man kann die globale Eigenschaft mit folgenden erreichen:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// output: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Wenn "nameOther" mit dem Schlüsselwort var hinzugefügt
// wird, ist sie als nicht konfigurierbar markiert

delete nameOther;   // gibt false zurück
```

Im strict Modus wird diese zu einem Fehler führen.

### Strict vs. nicht strict Modus

Wenn im strict Mode `delete` direkt auf einer Referenz einer Variablen, eines Funktionsargumentes oder eines Funktionsnamens genutzt wird, wird ein {{jsxref("SyntaxError")}} erzeugt.

Jede Variable, die mit `var` definiert wird, wird als nicht konfigurierbar markiert. Im folgenden Beispiel ist `salary` nicht konfigurierbar und kann nicht gelöscht werden. Im nicht strict Modus wird der `delete` Operator `false` zurückgeben.

```js
function Employee() {
  delete salary;
  var salary;
}

Employee();
```

Mal sehen, wie sich der selbe Code im strict Modus verhält. Statt dem Zurückgeben von `false`, wird das Statement zu einem `SyntaxError` führen.

```js
"use strict";

function Employee() {
  delete salary;  // SyntaxError
  var salary;
}

Employee();

// Genauso führt jeder direkte Zugriff auf
// eine Funktion mit delete zu einem SyntaxError

funciton DemoFunction() {
  // etwas Code
}

delete DemoFunction; // SyntaxError
```

## Beispiele

```js
// Die Eigenschaft adminName im globalen Gültigkeitsbereich erstellen
adminName = 'xyz';

// Die Eigenschaft empCount im globalen Gültigkeitsbereich erstellen
// Weil var genutzt wurde, ist diese als nicht konfigurierbar markiert. Das selbe gibt auch für let und const.
var empCount = 43;

EmployeeDetails = {
  name: 'xyz',
  age: 5,
  designation: 'Developer'
};

// adminName ist eine Eigenschaft im globalen Gültigkeitsbereich.
// Sie kann gelöscht werden, weil sie nicht mit var erstellt wurde.
// Demnach ist sie konfigurierbar.
delete adminName     // gibt true zurück

// Im Gegensatz dazu ist empCount nicht konfigurierbar,
// weil var eingesetzt wurde
delete empCount;     // gibt false zurück

// delete kann für das Löschen von Eigenschaften von Objekte eingesetzt werden.
delete EmployeeDetails.name // gibt true zurück

// Auch wenn die Eigenschaft nicht existiert, wird "true" zurückgegeben.
delete EmployeeDetails.salary; // gibt true zurück

// delete hat keinen Effekt auf statische Eigenschaften von Standardobjekten.
delete Math.PI; // gibt false zurück

// EmployeeDetails ist eine Eigenschaft im globalen Gültigkeitsbereich.
// Weil es ohne "var" definiert wurde, ist es als Konfigurierbar markiert.
delete EmployeeDetails;  // gibt true zurück

function f() {
  var z = 44;

  // delete hat keinen Effekt auf lokale Variablen
  delete z;     // returns false
}
```

### `delete` und die Prototypenkette

Im folgenden Beispiel löschen wir eine eigene Eigenschaft eines Objektes, während ein Eigenschaft mit dem selben Namen in der Prototypenkette vorhanden ist:

```js
function Foo(){
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// gibt true zurück, weil die eigene Eigenschaft
// vom foo Objekt gelöscht wird.
delete foo.bar;

// foo.bar ist weiter verfügbar, weil es
// in der Prototypenkette verfügbar ist.
console.log(foo.bar);

// Löschen der Eigenschaft auf dem Prototypen
delete Foo.prototype.bar;

// gibt "undefined" aus, weil die Eigenschaft
// nicht länger vererbt wird.
console.log(foo.bar);
```

### Arrayelemente löschen

Wenn ein Arrayelement gelöscht wird, hat das keinen Effekt auf die Arraylänge. Das funktioniert nur, wenn man das letzte Arrayelement lösche.

Wenn der `delete` Operator ein Arrayelement löscht, ist das Element nicht mehr länger im Array. Im folgenden Beispiel wird `trees[3]` mit `delete` gelöscht.

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
    // das wird nicht ausgeführt
}
```

Wenn ein Arrayelement existent sein soll, aber den Wert undefined haben soll, benutzt man `undefined` statt dem `delete` Operator. Im folgenden Beispiel bekommt `trees[3]` den Wert undefined zugewiesen, aber das Arrayelement existiert noch:

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
    // das wird ausgeführt
}
```

Wenn stattdessen ein Arrayelement gelöscht werden soll, wobei auch der Inhalt des Arrays geändert werden soll, so benutzt man die `{{jsxref("Array.splice", "splice")}}` Methode. Das folgende Beispiel entfernt `trees[3]` komplett vom Array mit dem Einsatz von `{{jsxref("Array.splice", "splice")}}`:

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"];
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-delete-operator', 'The delete Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-delete-operator', 'The delete Operator')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.4.1', 'The delete Operator')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.4.1', 'The delete Operator')}}                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |

## Browserkompatibilität

{{Compat("javascript.operators.delete")}}

## Browserübergeifende Hinweise

Obwohl ECMAScript die Iterationsreihenfolge von Objekten, die von der Implementierung abhängig ist, vornimmt, scheint es, dass alle gängigen Browser eine Iterationsreihenfolge basierend auf der frühesten hinzugefügten Eigenschaft unterstützen (zumindest für Eigenschaften, die nicht auf dem Prototyp basieren). Wenn jedoch bei Internet Explorer delete für eine Eigenschaft verwendet wird, führt dies zu verwirrendem Verhalten und verhindert, dass andere Browser einfache Objekte wie Objektliterale als geordnete assoziative Arrays verwenden. Wenn im Explorer der Wert der Eigenschaft tatsächlich auf undefiniert festgelegt ist, wird die Eigenschaft, wenn sie später eine Eigenschaft mit demselben Namen zurückgibt, an der alten Position iteriert - nicht am Ende der Iterationssequenz, wie beim löschte und wieder einfügen der Eigenschaft erwartet.

Wenn man also ein geordnetes assoziatives Array in einer browserübergreifenden Umgebung simulieren möchten, muss man entweder zwei separate Arrays verwenden (eines für die Schlüssel und das andere für die Werte) oder ein Array von Objekten mit einer einzigen Eigenschaft erstellen. etc.

## Siehe auch

- [In depth analysis on delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
