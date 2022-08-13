---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
tags:
  - ECMAScript5
  - JavaScript
  - Methode(2)
  - Objekt
translation_of: Web/JavaScript/Reference/Global_Objects/Object/freeze
---
{{JSRef}}

Die Methode **`Object.freeze()`** **friert** ein Objekt **ein**. Ein eingefrorenes Objekt kann nicht mehr geändert werden. Das Einfrieren eines Objekts verhindert, dass neue Eigenschaften hinzugefügt oder existierende entfernt und die Aufzählbarkeit, Konfigurierbarkeit oder Schreibbarkeit vorhandener Eigenschaften und deren Werte geändert werden können. Durch das Einfrieren eines Objekts wird außerdem verhindert, dass der Prototyp geändert wird. `freeze()` gibt das gleiche Objekt zurück, das übergeben wurde.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## Syntax

    Object.freeze(obj)

### Parameter

- `obj`
  - : Das einzufrierende Objekt.

### Rückgabewert

Das Objekt, welches an die Funktion übergeben wurde.

## Beschreibung

Zum Eigenschaftssatz eines eingefrorenen Objekts kann nichts hinzugefügt oder daraus entfernt werden. Jeder Versuch, dies zu tun, schlägt fehl, entweder im Hintergrund oder durch Auslösen einer {{jsxref("TypeError")}} Exception (meistens, jedoch nicht ausschließlich, wenn im {{jsxref("Strict_mode", "strikten Modus", "", 1)}}).

Bei Dateneigenschaften eines eingefrorenen Objekts können Werte nicht geändert werden. Die Attribute für Beschreibbarkeit und Konfigurierbarkeit werden auf false gesetzt. Accessor-Eigenschaften (Getter und Setter) funktionieren gleich (und lassen einen nach wie vor in dem Glauben etwas zu ändern). Beachten Sie, dass Werte, die Objekte sind, immer noch geändert werden können, es sei denn, sie werden ebenfalls eingefroren. Da ein Array ein Objekt ist, kann es eingefroren werden. Danach können seine Elemente nicht mehr geändert und keine Elemente hinzugefügt oder entfernt werden.

`freeze()` gibt das gleiche Objekt zurück, das an die Funktion übergeben wurde. Es wird _keine_ eingefrorene Kopie erstellt.

## Beispiele

### Objekte einfrieren

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

// Vor dem Einfrieren: neue Eigenschaften können hinzugefügt
// und vorhandene Eigenschaften geändert oder entfernt werden
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Einfrieren
var o = Object.freeze(obj);

// Der Rückgabewert ist dasselbe Objekt, das übergeben wurde
o === obj; // true

// Das Objekt ist eingefroren
Object.isFrozen(obj); // === true

// Jetzt schlagen sämtliche Änderungen fehl
obj.foo = 'quux'; // nichts passiert, im Stillen
// fügt die Eigenschaft nicht hinzu, im Stillen
obj.quaxxor = 'the friendly duck';

// Im strikten Modus lösen solche Versuche TypeErrors aus
function fail(){
  'use strict';
  obj.foo = 'sparky'; // löst TypeError aus
  delete obj.foo; // löst TypeError aus
  delete obj.quaxxor; // gibt true zurück, da Attribut 'quaxxor' nie hinzugefügt wurde
  obj.sparky = 'arf'; // löst TypeError aus
}

fail();

// Versuchte Änderungen über Object.defineProperty;
// beide Anweisungen lösen TypeError aus
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// Der prototype kann ebenfalls nicht geändert werden
// beide Anweisungen lösen TypeError aus
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### Arrays einfrieren

```js
let a = [0];
Object.freeze(a); // Das Array kann nicht mehr geändert werden

a[0]=1; // schlägt still fehl
a.push(2); // schlägt still fehl

// Im strikten Modus lösen solche Versuche TypeErrors aus
function fail() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

fail();
```

Das eingefrorene Objekt ist _unveränderlich_ (engl. _immutable_). Es ist jedoch nicht notwendigerweise _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (Einfrieren ist flach).

```js
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Verweise auf andere Objekte) nur unveränderliche eingefrorene Objekte referenzieren. Das eingefrorene Objekt wird als unveränderlich (immutable) bezeichnet, da der gesamte _Objektzustand_ (Werte und Verweise auf andere Objekte) innerhalb des gesamten Objekts fix ist. Beachten Sie, dass Strings, Zahlen und Booleans immer unveränderlich (immutable) und Funktionen und Arrays Objekte sind.

#### Was ist "flaches Einfrieren"?

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften von `object` selbst und verhindert, dass zukünftige Eigenschaften hinzugefügt, entfernt oder Werte auf _diesem_ `object` neu zugewiesen werden. Wenn der Wert dieser Eigenschaften selbst Objekte sind, werden diese Objekte nicht eingefroren und können das Ziel von Eigenschaftszusatz-, Entfernungs- oder Wertzuordnungsvorgängen sein.

```js
var employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // schlägt im nicht-strikten Modus still fehl
employee.address.city = "Noida"; // Attribute von Kind-Objekt können geändert werden

console.log(employee.address.city) // Ausgabe: "Noida"
```

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede Eigenschaft vom Typ `object` ein (deep freeze). Verwenden Sie das Muster im Einzelfall basierend auf Ihrem Entwurf, wenn Sie wissen, dass das Objekt keine {{interwiki("wikipedia", "Zyklus_(Graphentheorie)", "Zyklen")}} im Referenzgraph enthält, andernfalls kommt es zu einer Endlosschleife. Eine Verbesserung von `deepFreeze()` wäre eine interne Funktion, die ein Argument für einen Pfad (z. B. ein Array) empfängt, sodass Sie den Aufruf von `deepFreeze()` rekursiv unterdrücken können, wenn ein Objekt gerade unveränderlich gemacht wird. Es besteht weiterhin die Gefahr, dass ein Objekt eingefroren wird, das nicht eingefroren werden sollte, wie z. B. \[window].

```js
function deepFreeze(object) {

  // Abrufen der definierten Eigenschaftsnamen des Objekts
  var propNames = Object.getOwnPropertyNames(object);

  // Eigenschaften vor dem eigenen Einfrieren einfrieren

  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ?
      deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // schlägt im nicht-strikten Modus still fehl
obj2.internal.a; // null
```

## Nutzungshinweise

Wenn das Argument für diese Methode kein Objekt (ein Primitiv) ist, führt dies in ES5 zu einem {{jsxref("TypeError")}}. In ES2015 wird ein Nicht-Objekt-Argument wie ein eingefrorenes gewöhnliches Objekt behandelt und einfach zurückgegeben.

```js
> Object.freeze(1)
TypeError: 1 is not an object // ES5 Code

> Object.freeze(1)
1                             // ES2015 Code
```

Ein {{domxref("ArrayBufferView")}} mit Elementen verursacht einen {{jsxref("TypeError")}}, da diese Ansichten über den Arbeitsspeicher sind und auf jeden Fall andere mögliche Probleme verursachen können:

```js
> Object.freeze(new Uint8Array(0)) // Keine Elemente
Uint8Array []

> Object.freeze(new Uint8Array(1)) // Hat Elemente
TypeError: Cannot freeze array buffer views with elements

> Object.freeze(new DataView(new ArrayBuffer(32))) // Keine Elemente
DataView {}

> Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // Keine Elemente
Float64Array []

> Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // Hat Elemente
TypeError: Cannot freeze array buffer views with elements
```

Beachten Sie, da die drei Standard-Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie die Eigenschaften eines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}) gibt es keinen Grund, diese einzufrieren.

### Vergleich zu `Object.seal()`

Vorhandene Eigenschaften in Objekten, die mit {{jsxref("Object.seal()")}} versiegelt wurden, können geändert werden. Vorhandene Eigenschaften in Objekten, die mit `Object.freeze()` eingefroren wurden, werden unveränderlich gemacht.

## Spezifikationen

| Specification                                                                        | Status                       | Comment                                                 |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.9', 'Object.freeze')}}             | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.freeze', 'Object.freeze')}}         | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-object.freeze', 'Object.freeze')}} | {{Spec2('ESDraft')}} |                                                         |

## Browserkompatibilität

{{Compat("javascript.builtins.Object.freeze")}}

## Siehe auch

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
