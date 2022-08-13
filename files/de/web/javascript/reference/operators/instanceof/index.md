---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - Object
  - Operator
  - Prototype
  - Relational Operators
  - instanceof
translation_of: Web/JavaScript/Reference/Operators/instanceof
---
{{jsSidebar("Operators")}}

Der **`instanceof` Operator** prüft, ob ein Objekt die prototype Eigenschaft einer Konstruktorfunktion in seiner Prototypenkette besitzt.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntax

    object instanceof constructor

### Parameter

- `object`
  - : Das zu prüfende Objekt.

- `constructor`
  - : Gegen die zu testende Funktion.

## Beschreibung

Der `instanceof` Operator prüft die Anwesenheit des `constructor.prototype` in der Prototypenkette eines Objekts.

```js
// Konstruktoren definieren
function C(){}
function D(){}

var o = new C();

// true, weil: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, weil D.prototype nirgends in o's Prototypenkette ist
o instanceof D;

o instanceof Object; // true, weil:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, weil C.prototype nirgends in
// o's Prototypenkette ist
o instanceof C;

D.prototype = new C(); // Einsatz von Vererbung
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
```

Zu beachten ist, dass sich das Ergebnis des `instanceof` Tests ändern kann, wenn die `prototype` Eigenschaft eines Konstruktors geändert wird und auch, wenn ein Objektprototyp mit `Object.setPrototypeOf` geändert wird. Es ist auch möglich die nicht standardisierte Pseudoeigenschaft `__proto__` zu nutzen.

### `instanceof` und verschiedene Kontexte (z. B. Frames oder Windows)

Verschiedene Scopes haben verschiedene Ausführungsumgebungen. Das bedeutet, sie haben verschiedene Standardobjekte (verschiedene globale Objekte, verschiedene Konstruktoren, etc.). Das kann zu unerwarteten Resultaten führt. Zum Beispiel gibt `[] instanceof window.frames[0].Array` `false` zurück, weil `Array.prototype !== ``window.frames[0].Array` ist und Arrays vom Ersteren erben.

Auf den ersten Blick ergibt das nicht viel Sinn, fängt man jedoch an Objekte zwischen verschiedenen Frames oder Windows zwischen Kontexten auszutauschen, wäre das valide und ein großes Problem. Zum Beispiel kann man mit sicher testen ob ein Objekt ein Array ist, indem man `Array.isArray(myObj)` benutzt.

Zur Prüfung ob ein [Node](/de/docs/Web/API/Node) ein SVGElement ist kann `myNode instanceof myNode.ownerDocument.defaultView.SVGElement` genutzt werden.

> **Note:** **Hinweis for Mozilla Entwickler:**
> In Code mit XPCOM, hat `instanceof` einen speziellen Effekt: `obj instanceof`_`xpcomInterface`_ (z. B. `Components.interfaces.nsIFile`) ruft `obj.QueryInterface(xpcomInterface)` auf und gibt `true` zurück, wenn QueryInterface erfolgreich war. Ein Seiteneffekt ist, dass Eigenschaften von _`xpcomInterface`_ auf `obj` aufgerufen werden können, wenn erfolgreich mit `instanceof` getestet wurde. Im Gegensatz zu JavaScripts Standardobjekten, funktioniert `obj instanceof xpcomInterface` wie erwartet, auch wenn `obj` aus ein anderen Scope stammt.

## Beispiele

### Demonstration, dass `String` und `Date` vom Typ `Object` sind und Ausnahmefälle

Der folgende Quelltext nutzt `instanceof`, um zu demonstrieren, dass `String` und `Date` Objekte von Typ `Object` sind (sie sind von `Object` abgeleitet).

Immer, wenn ein Objekt durch die Objekt Literal Notation erstellt wird, ist das eine Ausnahme: Auch wenn der Prototype `undefined` ist, ergibt `instanceof Object` `true`.

```js
var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};
var myNonObj  = Object.create(null);

simpleStr instanceof String; // gibt false zurück; kontrolliert die Prototypenkette und findet undefined
myString  instanceof String; // gibt true zurück
newStr    instanceof String; // gibt true zurück
myString  instanceof Object; // gibt true zurück

myObj    instanceof Object;    // gibt true zurück, trotz eines undefined Prototypen
({})     instanceof Object;    // gibt true zurück, gleicher Fall wie oben
myNonObj instanceof Object;    // gibt false zurück, ein Weg ein Objekt zu erstellen, welches keine Instanz von Object ist

myString instanceof Date;   // gibt false zurück

myDate instanceof Date;     // gibt true zurück
myDate instanceof Object;   // gibt true zurück
myDate instanceof String;   // gibt false zurück
```

### Demonstration, dass `mycar` vom Typ `Car` und vom Typ`Object` ist

Der folgende Quelltext erstellt ein Objekttyp `Car` und einen Instanz dieses Typen, `mycar`. Der `instanceof` Operator demonstriert, dass das `mycar` Objekt vom Typ `Car` und `Object` ist.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // gibt true zurück
var b = mycar instanceof Object; // gibt true zurück
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-relational-operators', 'Relational Operators')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.8.6', 'The instanceof operator')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.8.6', 'The instanceof operator')}}                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.4. |

## Browserkompatibilität

{{Compat("javascript.operators.instanceof")}}

## Siehe auch

- {{jsxref("operators/typeof","typeof")}}
- {{jsxref("Symbol.hasInstance")}}
