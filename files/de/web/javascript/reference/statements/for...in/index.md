---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...in
---
{{jsSidebar("Statements")}}

Die Schleife `for…in` durchläuft alle [aufzählbaren Eigenschaften](/de/docs/Web/JavaScript/Aufzählbarkeit_und_Zugehörigkeit_von_Eigenschaften) eines Objekts (mit Ausnahme jener, deren Name ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist) in willkürlicher Reihenfolge und führt für jede ihren Anweisungsblock aus.

**Syntax**

    for (variable in object) {... }

- `variable`
  - : Bei jedem Schleifendurchlauf wird der Name der aktuellen Eigenschaft _variable_ zugewiesen.
- `object`
  - : Das Objekt, dessen Eigenschaften durchlaufen werden sollen.

## Beschreibung

Die Schleife `for…in` durchläuft alle eigenen und geerbten Eigenschaften, die als aufzählbar gekennzeichnet sind und deren Name kein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ist, in einer nicht festgelegten Reihenfolge.

#### Aufzählbare Eigenschaften

Die Eigenschaften eines Javascript-Objekts können anhand ihres internen Statusfeldes `enumerable` als [aufzählbar oder nicht aufzählbar](/de/docs/Web/JavaScript/Aufzählbarkeit_und_Zugehörigkeit_von_Eigenschaften) gekennzeichnet werden.

Insbesondere erben manche eingebaute Objekte wie `Array` und `Object` nicht-aufzählbare Eigenschaften von `Object.prototype` and `String.prototype`, unter anderem die Methoden {{jsxref("String.indexOf")}} und {{jsxref("Object.toString")}}.

Nicht-aufzählbare Eigenschaften werden von `for…in` ignoriert.

#### Reihenfolge

Obwohl die Reihenfolge bei Ausführung innerhalb desselben Interpreters als festgelegt erscheinen kann, darf von diesem Umstand nicht ausgegangen werden. Andere Versionen und insbesondere andere Javascript-Interpreter werden die Eigenschaften in einer anderen Reihenfolge durchlaufen.
Die Gründe sind in der Beschreibung des Operators {{jsxref("Operators/delete", "delete")}} näher erklärt.

#### Gelöschte, hinzugefügte oder modifizierte Eigenschaften

Änderungen der Eigenschaften eines Objekts, während dieses Objekt von `for…in` durchlaufen wird, haben nachfolgende Auswirkungen:

- Eine Änderung des Wertes einer Eigenschaft wirkt sich sofort auf alle nachfolgenden Schleifendurchläufe aus.
- Eine Eigenschaft, die gelöscht wurde, bevor die Schleife sie eigentlich erreicht hätte, wird nicht mehr aufgerufen.
- Eine Eigenschaft, die hinzugefügt wird, kann von der Schleife noch abgearbeitet werden, muss jedoch nicht. Das Verhalten ist nicht vorhersehbar.

Im Allgemeinen ist es ratsam, innerhalb einer Schleife keine Änderungen an den Eigenschaften des durchlaufenden Objekts vorzunehmen. Eine Ausnahme bildet lediglich die derzeit bearbeitete Eigenschaft.
Es gibt keine Garantie, dass eine hinzugefügte Eigenschaft von der Schleife noch aufgerufen wird, ob eine geänderte (außer der aktuellen) Eigenschaft vor oder nach der Änderung aufgerufen wird oder ob eine gelöschte Eigenschaft aufgerufen wird, bevor sie gelöscht wird.

### Array und for…in

> **Note:** **Hinweis:** **`for…in` sollte nicht für den Durchlauf eines {{jsxref("Array", "Arrays")}} verwendet werden, bei dem die Indexreihenfolge wichtig ist.**

Anders als vielleicht von vielen anderen Programmiersprachen gewohnt sind bei Javascript die Indizes eines Feldes normale Objekt-Eigenschaften mit Ganzzahlen als Namen.

Wie oben bereits erwähnt, ist nicht sichergestellt, dass `for…in` Eigenschaften eines Objektes in einer bestimmten Reihenfolge durchläuft. Dies gilt, da sie normale Eigenschaften sind, auch für die Feldindizes. Zudem durchläuft `for…in` auch alle anderen (aufzählbaren) Eigenschaften, einschließlich derer mit nicht ganzzahligen Namen sowie geerbte.

`for…in` ist daher nicht geeignet, um die Felder eines Objekts vom Typ Array von 0 bis Array.length der Reihenfolge nach zu durchlaufen.
Zu diesem Zweck kann entweder auf eine {{jsxref("Statements/for", "for-Schleife")}} mit numerischem Zähler, die Array-eigene Methode {{jsxref("Array.prototype.forEach()", "forEach()")}} oder eine {{jsxref("Statements/for...of", "for...of-Schleife")}} verwendet werden.

### Durchlauf nur über eigene Eigenschaften

Sollen nur Eigenschaften berücksichtigen möchten, die direkt mit dem Objekt verknüpft und nicht von dessen Prototypen geerbt sind, bietet sich {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} an. Die Zugehörigkeit auf einer bestimmten Eigenschaft kann mit {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} geprüft werden.
Alternativ können eingebaute Prototypen mit einer Prüfmethode erweitert werden, sofern sichergestellt ist, dass es nicht zu einer Beeinflussung von externem Code kommt.

## Beispiele

Die folgende Funktion erwartet ein Objekt als Argument. Es werden dann alle aufzählbaren Eigenschaften des Objekts durchlaufen und der Name der Eigenschaft mit dem entsprechenden Wert ausgegeben.

```js
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("o." + prop + " = " + obj[prop]);
}

// Ausgabe:
// "o.a = 1"
// "o.b = 2"
// "o.c = 3"
```

Die folgende Funktion verdeutlicht die Verwendung von {{jsxref("Object.hasOwnProperty", "hasOwnProperty()")}}: die geerbten Eigenschaften werden nicht angezeigt.

```js
var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("o." + prop + " = " + obj[prop]);
  }
}

// Ausgabe:
// "o.color = red"
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}                                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES3', '#sec-12.6.4', 'for...in statement')}}                                 | {{Spec2('ES3')}}         |                      |
| {{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}                                 | {{Spec2('ES1')}}         | Initiale Definition. |

## Browserkompatibilität

{{Compat}}

### Kompatibilität: Initialisierender Ausdruck

Vor SpiderMonkey 40 {{geckoRelease(40)}}, war es möglich einen initialisierenden Ausdruck (`i=0`) in einer `for…in`-Schleife zu benutzen:

```js example-bad
var obj = {a:1, b:2, c:3};
for(var i=0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

Dieses nicht standardisierte Verhalten wird ab der Version 40 ignoriert und führt im [strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem {{jsxref("SyntaxError")}}, "[for-in loop head declarations may not have initializers](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)" (siehe {{bug(748550)}} und {{bug(1164741)}}).

Andere Umgebungen wie v8 (Chrome), Chakra (IE/Edge), und JSC (WebKit/Safari) prüfen ebenfalls die Möglichkeit, dieses Verhalten zu entfernen.

## Siehe auch

- {{jsxref("Statements/for...of", "for...of")}} – eine ähnliche Anweisung, die Eigenschafts*werte* durchläuft
- {{jsxref("Statements/for", "for")}}
- [Generatorausdrücke](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators) (verwenden die `for…in`-Syntax)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
