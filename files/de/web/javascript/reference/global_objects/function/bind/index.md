---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - Class
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Method
  - bind
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Function/bind
---
{{JSRef}}

Die **`bind()`** Methode erzeugt eine neue Funktion die beim Aufruf ihr `this` Schlüsselwort auf den ersten übergebenen Wert setzt. Alle weiteren Argumente werden den beim Funktionsaufruf übergebenen Werten vorangestellt.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## Syntax

    function.bind(thisArg[, arg1[, arg2[, ...]]])

### Parameter

- `thisArg`
  - : Der für `this` zu übergebende Wert an die Zielfunktion sobald die gebundene Funktion aufgerufen wird. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Schlüsselwort initiiert wurde.
- `arg1, arg2, ...`
  - : An die bind Funktion übergebene Werte. Diese Werte werden an die gebundene Funktion überreicht.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten **`this`** Wert und initialen Parametern.

## Beschreibung

Die **bind()** Funktion erstellt eine neue **gebundene Funktion (BF)**. Eine **BF** ist **ein exotisches Funktionsobjekte** (ein Teil von **ECMAScript 2015**) welches die eigentliche Funktion umhüllt. Das Aufrufen einer **BF** führt zum ausführen der **umhüllten Funktion**. Eine **BF** hat die folgenden internen Eigenschaften:

- **\[\[BoundTargetFunction]]** - das umhüllte Funktionsobjekt;
- **\[\[BoundThis]]** - der Wert, der immer als **this** Wert beim Aufruf der umhüllten Funktion genutzt wird.
- **\[\[BoundArguments]]** - eine Liste von Werten, wessen Elemente als erste Argumente bei jedem Aufruf der umhüllten Funktion genutzt werden.
- **\[\[Call]]** - führt Code aus, der mit dem Objekte verbunden ist. Wird über ein Funktionsaufruf ausgeführt. Die Argumente der internen Methode sind ein **this** Wert und eine Liste mit Argumenten, welche beim Aufruf der Funktion übergeben werden.

Wenn die gebundene Funktion aufgerufen wird, ruft diese die interne Methode **\[\[Call]]** auf **\[\[BoundTargetFunction]]** mit den Argumenten **Call(_boundThis_, _args_)** auf. Dabei ist **_boundThis_ **gleich **\[\[BoundThis]]** und \_**args** \_gleich **\[\[BoundArguments]]** gefolgt von den übergebenen Parametern des Funktionsaufrufes.

Eine gebundene Funktion kann zudem mit einen [`new`](/de/docs/Web/JavaScript/Reference/Operators/new "The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.") Operator erstellt werden: Das sieht so aus, als ob die Zielfunktion stattdessen konstruiert worden wäre. Dar übergebene **`this`** Wert wird ignoriert, während die voranstehenden Argumente für die Emulierte Funktion zur Verfügung stehen.

## Beispiele

### Erstellen einer gebunden Funktion

Die einfachste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem **`this`** Wert aufgerufen wird. Ein häufiger Fehler für neue JavaScript-Programmierer besteht darin, eine Methode aus einem Objekt zu extrahieren, diese Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als **`this`** verwendet (z. B. durch Verwendung dieser Methode in Callback-basiertem Code). Ohne besondere Sorgfalt ist das ursprüngliche Objekt jedoch in der Regel verloren. Das Erstellen einer gebundenen Funktion aus der Funktion, die das ursprüngliche Objekt verwendet, löst dieses Problem sauber:

```js
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### Partiell gebunden Funktionen

Der nächste einfache Einsatz von `bind()` ist das Vordefinieren von Initialparameter einer Funktion. Diese Argumente (wenn welche vorhanden) folgen auf den übergebenen `this` Wert und Werten am Anfang der Zielfunktion den Parametern hinzugefügt, gefolgt von den Parametern, die der gebunden Funktion übergeben werden, immer wenn die gebunden Funktion aufgerufen wird.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]
```

### Mit `setTimeout`

Bei {{domxref("window.setTimeout()")}} wird im Standardfall das `this` Schlüsselwort mit dem {{ domxref("window") }} (oder `global`) Objekt versehen. Wenn mit Klassenmethoden gearbeitet wird, die es vorgesehen, dass `this` zu der Klasseninstanz verweist, muss `this` explizit an die Callback-Funktion gebunden werden, damit die Instanz vorhanden ist.

```js
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
// after 1 second, triggers the 'declare' method
```

### Gebunden Funktion mit einem Konstruktor

> **Warning:** **Warnung:** Dieses Kapitel demonstriert JavaScript-möglichkeiten und dokumentiert Randfälle der `bind()` Methode. Die Methoden, die unten gezeigt werden, sind nicht die Besten, um Dinge zu lösen, weshalb sie nicht in einem Produktivsystem eingesetzt werden sollten.

Gebundene Funktion sind automatisch verfügbar für den Einsatz mit dem {{jsxref("Operators/new", "new")}} Operator, um eine neue Instanz von einer Zielfunktion zu erstellen. Wenn eine gebundene Funktion eingesetzt wird, um einen Wert zu erstellen, wird das unterstützte `this` Argument ignoriert. Dahingegen werden unterstützte Argumente vor den Konstruktoraufrufe vorgehängt:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// not supported in the polyfill below,

// works fine with native bind:

var YAxisPoint = Point.bind(null, 0/*x*/);


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

Zu beachten ist, dass nichts spezielles getan werden muss, um eine gebundene Funktion mit {{jsxref("Operators/new", "new")}} zu erstellen. Die Folge ist, dass man nichts Besonderes tun muss, um eine gebundene Funktion zu erzeugen, die einfach aufgerufen werden kann, selbst wenn es gewollt ist, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen wird:

```js
// Example can be run directly in your JavaScript console
// ...continuing from above

// Can still be called as a normal function
// (although usually this is undesired)
YAxisPoint(13);

emptyObj.x + ',' + emptyObj.y;
// >  '0,13'
```

Wenn es gewünscht ist, dass der Einsatz von gebundenen Funktion nur mit {{jsxref("Operators/new", "new")}} oder einem einfachen Aufruf sein soll, so muss die Zielfunktion diese Einschränkung erzwingen.

### Kurzformen erstellen

`bind()` ist nützlich in fällen, in denen man kurzformen erstellen will, bei denen ein spezifischer **`this`** vorhanden sein soll.

Nimmt man zum Beispiel {{jsxref("Array.prototype.slice")}}, welche man zum Konvertieren von Array ähnlichen Objekte zu einem richtigen Array einsetzen mögliche, dann kann man eine Kurzform wie diese erstellen:

```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

Mit `bind()`, kann dieses vereinfacht werden. Im folgenden Codestück ist `slice` eine gebunden Funktion zu der {{jsxref("Function.prototype.apply()", "apply()")}} Funktion von {{jsxref("Function.prototype")}} mit dem **`this`** Wert auf der {{jsxref("Array.prototype.slice()", "slice()")}} Funktion von {{jsxref("Array.prototype")}}. Das bedeutet, dass der zusätzliche Aufruf von `apply()` nicht nötig ist:

```js
// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## Polyfill

Wenn die `bind()` Funktion nicht vorhanden ist, kann ein Großteil der Funktionalität mit trotzdem hinzugefügt werden, indem der folgende Quelltext am Anfang des Skriptes hinzugefügt wird.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

Einige der vielen Unterschiede (es kann durchaus andere geben, weil bei dieser Liste nicht auf Vollständig geachtet wurde) zwischen diesem Algorithmus und dem angegebenen Algorithmus sind:

- Die partielle Implementierung basiert auf der {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}} und {{jsxref("Function.prototype.apply()")}} Methode, um die Originalen Werte zu erhalten.
- Die partielle Implementierung erstellt Funktionen, die keinen unveränderbar {{jsxref("Function.caller", "caller")}} haben und eine `arguments` Eigenschaft die einen {{jsxref("Global_Objects/TypeError", "TypeError")}} auslöst, wenn get, set oder deletion benutzt wird. (Dieses kann hinzugefügt werden, wenn die Implementierung {{jsxref("Object.defineProperty")}} unterstützt oder partiell implementiert \[ohne das Löschverhalten], wenn die Implementierung {{jsxref("Object.defineGetter", "__defineGetter__")}} und {{jsxref("Object.defineSetter", "__defineSetter__")}} Erweiterungen unterstützt.)
- Die partielle Implementierung erstellt Funktionen, die einen `prototype` Eigenschaft haben. (Normale gebundene Funktionen haben keine)
- Die partielle Implementierung erstellt gebundene Funktionen mit der {{jsxref("Function.length", "length")}} Eigenschaft, die nicht mit ECMA-262 übereinstimmt: Sie erstellt Funkton mit `length` 0, während bei der vollständigen Implementierung die Länge von der Zielfunktion und der Anzahl von vordefinierten Parametern abhängt und daher eine andere Länge zurück geben kann.

Wenn diese partielle Implementierung eingesetzt wird, **muss man davon ausgehen, dass dessen Verhalten von dem in ECMA-262 in der 5. Auflage unterscheidet!** Mit etwas Vorsicht (und vielleicht kleinen Modifizierungen für spezielle Anforderungen) kann diese partielle Implementierung eine gute Übergangslösung für die Zeit sein, in der `bind()` noch nicht in allen Umgebungen unterstützt wird.

Auf <https://github.com/Raynos/function-bind> könnte es eine gründlichere Lösung geben!

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                               |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.3.4.5', 'Function.prototype.bind')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-function.prototype.bind', 'Function.prototype.bind')}} | {{Spec2('ES2015')}}     |                                                         |
| {{SpecName('ESDraft', '#sec-function.prototype.bind', 'Function.prototype.bind')}} | {{Spec2('ESDraft')}} |                                                         |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.bind")}}

## Siehe auch

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
