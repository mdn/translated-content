---
title: Getter
slug: Web/JavaScript/Reference/Functions/get
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Functions
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Functions/get
---
{{jsSidebar("Functions")}}

Die **`get`** Syntax bindet eine Objekteigenschaft an eine Funktion welche aufgerufen wird, wenn die Eigenschaft abgefragt wird.

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## Syntax

    {get prop() { ... } }
    {get [expression]() { ... } }

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden wird.
- `expression`
  - : Beginnend mit ECMAScript 2015, kann auch ein Ausdruck für einen berechneten Eigenschaftsnamen genutzt werden, der an die Funktion gebunden wird.

## Beschreibung

Manchmal ist es wünschenswert, den Zugriff auf eine Eigenschaft zuzulassen, die einen dynamisch berechneten Wert zurückgibt oder man möchten den Status einer internen Variablen widerspiegeln, ohne dass explizite Methodenaufrufe erforderlich sind. In JavaScript kann dieses mit einem _getter_ erreicht werden.

Es ist nicht möglich, dass ein Getter gleichzeitig an eine Eigenschaft gebunden ist und diese Eigenschaft tatsächlich einen Wert enthält, obwohl es möglich ist, einen Getter und einen Setter in Verbindung zu verwenden, um einen Pseudoeigenschaftstyp zu erstellen.

Folgendes ist zu beachten, wenn die `get` Syntax verwendet wird:

- Sie kann ein Bezeichner haben, welche entweder eine Zahl oder ein String ist.
- Sie muss exakt null Parameter haben (siehe [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) für mehr Informationen);
- Es darf nicht in einem Objektliteral mit einem anderen `get` oder Dateneintrag für die gleiche Eigenschaft benutzt werden (`{ get x() { }, get x() { } }` und `{ x: ..., get x() { } }` sind verboten).

## Beispiele

### Definition eines Getters in einem neuen Objekt in der Objektinitialisierung

Folgendes erstellt eine Pseudoeigenschaft `latest` für das Objekt `obj`, welche dan letzte Arrayeintrag von `log` zurückgibt.

```js
const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test".
```

Zu beachten ist, dass die Zuweisung eines Wertes auf `latest` keine Änderung bewirkt.

### Löschen eines Getters mit dem `delete` Operator

Wenn ein Getter gelöscht werden soll, kann einfach {{jsxref("Operators/delete", "delete")}} benutzt werden:

```js
delete obj.latest;
```

### Definition eines Getter auf einem existierenden Objektes mit `defineProperty`

Um einem Getter später zu einem existierenden Objekt hinzuzufügen, kann jederzeit {{jsxref("Object.defineProperty()")}} benutzt werden.

```js
const o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)
```

### Einen berechneten Eigenschaftnamen benutzen

```js
const expr = 'foo';

const obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"
```

### Intelligente / Selbstüberschreibende / Lazy Getter

Mit Gettern kann eine Eigenschaft eines Objekts _definiert_ werden, wobei der Wert der Eigenschaft nicht _berechnen_ wird, bis auf die Eigenschaft zugegriffen wird. Ein Getter verschiebt die Kosten für die Berechnung des Werts auf den Zeitpunkt des Zugriffs. Wenn der der Getter nie benötigt wird, fallen nie Kosten an.

Eine weitere Optimierungstechnik, um die Berechnung eines Eigenschaftswerts zu verzögern und ihn für einen späteren Zugriff zwischenzuspeichern, sind **intelligente (oder "[memoisierte](https://de.wikipedia.org/wiki/Memoisation)") Getter**. Der Wert wird berechnet, wenn der Getter das erste Mal aufgerufen wird und wird dann zwischengespeichert, damit nachfolgende Zugriffe den zwischengespeicherten Wert zurückgeben, ohne ihn neu zu berechnen. Dies ist in den folgenden Situationen nützlich:

- Wenn die Berechnung eines Eigenschaftswerts teuer ist (erfordert viel RAM- oder CPU-Zeit, erzeugen von Worker-Threads, ruft eine Remote-Datei ab usw.).
- Wenn der Wert gerade nicht benötigt wird. Er wird später verwendet oder in einigen Fällen wird er überhaupt nicht verwendet.
- Wenn er verwendet wird, wird mehrmals darauf zugegriffen und er ist nicht erforderlich, den Wert neu zu berechnen, da er nie geändert oder nicht neu berechnet wird.

> **Note:** Das bedeutet, dass keine verzögerten Getter für eine Eigenschaft verwenden werden sollten, deren Wert sich voraussichtlich ändern wird, weil der Getter den Wert nicht neu berechnet.

Im folgenden Beispiel hat das Objekt einen Getter als eigene Eigenschaft. Beim Abrufen der Eigenschaft wird die Eigenschaft aus dem Objekt entfernt und erneut hinzugefügt, diesmal jedoch implizit als Dateneigenschaft. Abschließend wird der Wert zurückgegeben.

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
```

Für Firefox Code sollte zusätzlich das `XPCOMUtils.jsm` Code Modul angeschaut werden, welches die [`defineLazyGetter()`](</de/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>) Funktion definiert.

### `get` vs. `defineProperty`

Das `get` Schlüsselwort und {{jsxref("Object.defineProperty()")}} haben ähnliche Ergebnisse. Es gibt einen kleinen Unterschied zwischen beiden, wenn {{jsxref("classes")}} eingesetzt werden.

Wenn `get` eingesetzt wird, wird die Eigenschaft im Instnaz-Prototyp definiert, während beim Einsatz von {{jsxref("Object.defineProperty()")}} die Eigenschaft auf der Instanz definiert wird.

```js
class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## Spezifikationen

| Spezifikation                                                                                    |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} |

## Browserkompatibilität

{{Compat("javascript.functions.get")}}

## Siehe auch

- [setter](/de/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [Defining Getters and Setters](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) im JavaScript Guide
