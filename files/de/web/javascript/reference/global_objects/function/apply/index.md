---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Function/apply
---
{{JSRef}}

Die **`apply()`** Methode ruft eine Funktion mit gegebenem `this` Wert und `arguments` als Array (oder einem [Array ähnlichem Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#Mit_Array-ähnlichen_Objekten_arbeiten)).

> **Hinweis:** Die Syntax dieser Funktion ist größtenteils identisch zu der Funktion {{jsxref("Function.call", "call()")}}. Der fundamentale Unterschied ist, dass `call()` **eine Liste von Argumenten** und `apply()` **ein Array mit Argumenten** übergeben bekommt.

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

    function.apply(thisArg, [argsArray])

### Parameter

- `thisArg`
  - : Optional. Der Wert von `this`, der für den Aufruf der Funktion _`func`_ genutzt wird. Zu beachten ist, dass `this` möglicherweise nicht der Wert ist, den die Methode sieht: Wenn die Methode eine Funktion im {{jsxref("Functions_and_function_scope/Strict_mode", "non-strict mode", "", 1)}} ist, werden {{jsxref("Global_Objects/null", "null")}} und {{jsxref("Global_Objects/undefined", "undefined")}} mit dem globalen Objekt ersetzt und primitive Werte werden in ein Hüllobjekt umgewandelt.
- `argsArray`
  - : Optional. Ein Array ähnliches Objekt, welches die Argumente spezifiziert, welche beim Aufruf von _`func`_ benutzt werden, oder {{jsxref("null")}} oder {{jsxref("undefined")}}, wenn keine Argumente übergeben werden. Mit Einführung von ECMAScript 5 können diese Argumente mit einem generische Array ähnliches Objekt statt einem Array übergeben werden. Für mehr Informationen sollte die [Browserkompatibilität](#browserkompatibilität) geprüft werden.

### Rückgabewert

Das Ergebnis der aufgerufenen Funktion mit dem spezifischen **`this`** Wert und Parametern.

## Beschreibung

Man kann ein anderes `this` Objekt für den Aufruf einer existierenden Funktion zuweisen. `this` referenziert zum aktuellen Objekte, dem aufrufenden Objekt. Mit `apply` kann eine Methode geschrieben und in einem anderen Objekt vererbt werden, ohne die Methode für das neue Objekte neu zu schreiben.

`apply` ist sehr ähnlich zu {{jsxref("Function.call", "call()")}}, mit der Ausnahme des Typen der übergebenen Argumente. Man kann ein Array von Argumenten statt einer Menge von benannten Parametern benutzen. Mit `apply` kann man ein Arrayliteral benutzen, wie zum Beispiel `fun.apply(this, ['eat', 'bananas'])` oder ein {{jsxref("Array")}} Objekt, wie zum Beispiel `fun.apply(this, new Array('eat', 'bananas'))`.

Für den `argsArray` Parameter kann auch {{jsxref("Functions/arguments", "arguments")}} eingesetzt werden. `arguments` ist eine lokale Variable einer Funktion. Sie kann für alle nicht spezifizieren Argumente bei einem Aufruf benutzt werde. Dadurch muss man die Argumente eines Aufrufers nicht kennen, wenn die `apply` Methode genutzt wird. Man kann `arguments` nutzen, um alle Argumente eines Aufrufers zu übergeben. Das aufgerufene Objekt ist dann verantwortlich für das Verarbeiten der Argument.

Seit ECMAScript in der 5. Ausgabe kann jedes Objekt übergeben werden, welches Array ähnlich ist, was in der Praxis bedeutet, dass es eine `length` Eigenschaft hat und Ganzzahlige Eigenschaften im Bereich von `0` bis `length-1` besitzt. Zum Beispiel kann man {{domxref("NodeList")}} oder benutzerdefinierte Objekte wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }` benutzen.

> **Note:** Viele Browser, auch Chrome 14 und Internet Explorer 9, unterstützen keine Array ähnlichen Objekte, was zu einem Fehler führt.

## Beispiele

### Einsatz von `apply` um ein Array an ein anderes zu hängen

Man kann `push` benutzen, um ein Element an ein Array anzufügen. Weil `push` eine variable Anzahl von Argumenten enthält, kann man auch mehrere Element mit einem Aufruf hinzufügen. Übergibt man jedoch ein Array an die `push` Methode, so wird das Array als ein Element hinzugefügt anstatt jedes Element des Arrays hinzuzufügen, was zu einem Array im Array führt. Was tun, wenn das nicht das ist, was gewollt ist? `concat` hat das gewünschte verhalten, jedoch erstellt es ein neues Array und fügt die Elemente nicht an das existierende Array. Was wenn man die Elemente unbedingt an das existierende Array hängen möchte? Eine Schleife schreiben? Sicher nicht!

`apply` ist die Funktion der Wahl!

```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);  // ["a", "b", 0, 1, 2]
```

### Einsatz von `apply` und eingebauten Standardfunktionen

Der clevere Einsatz von `apply` erlaubt es standard Functionen für Aufgaben zu benutzen, für die man sonst schleifen Schreiben müsste, um über alle Elemente eines Arrays zu iterieren. Im folgenden Beispiel wurde `Math.max`/`Math.min` benutzt, um das maximalen/minimalen Wert in einem Array zu finden.

```js
// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

var min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

Jedoch muss man bei einem solchen Einsatz von `apply` vorsichtig sein, weil das Risiko da ist, dass man in das Limit der maximalen Argumente der JavaScriptumgebung überschreitet. Die Konsequenz aus dem ausführen von Funktionen mit zu vielen Argumenten (mehr als Zehntausend Argumente) ist, dass dieses Limit stark variiert (JavaScriptCore hat ein hart Codiertes [Argumentlimit von 65536](https://bugs.webkit.org/show_bug.cgi?id=80797)), weil es in JavaScript nicht spezifiziert ist (tatsächlich sogar die Art eines übermäßig großen Stack-Verhaltens). Einige Umgebungen erzeugen einen Fehler. Andere übergeben nicht alle Argumente der Funktion, um das Limit nicht zu überschreiten. Um diesen Fall man zu schildern: Wenn eine Umgebung ein Limit von 4 Argumenten hätte (aktuelle Limits sind natürlich signifikant höher), würde es so sein, als ob nur die Argumente `5, 6, 2, 3` über `apply` im oberen Beispiel übergeben werden, statt dem ganzen Array.

Wenn das Array in einigen Fällen so groß wird, dass es zehntausend Element erreicht, sollte eine hybride Strategie genutzt werden: Man teilt das Array auf und übergibt diese Teile der Funktion:

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### `apply` für das Verketten von Konstruktoren verwenden

Man kann `apply` einsetzen, um {{jsxref("Operators/new", "Konstruktoren", "", 1)}} für ein Objekt zu verketten, ähnlich wie in Java. Im folgenden Beispiel wird eine globale {{jsxref("Function")}} Methode namens `construct` erstellt, welche es ermöglicht ein Array ähnliches Objekt mit einem Konstruktor anstatt eines Argumentliste zu benutzen.

```js
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

> **Hinweis:** Die oben eingesetzte `Object.create()` Methode ist relativ neu. Alternativ kann eine der folgenden Ansätze verwendet werden:Einsatz von {{jsxref("Object/__proto__", "Object.__proto__")}}:`js Function.prototype.construct = function (aArgs) { var oNew = {}; oNew.__proto__ = this.prototype; this.apply(oNew, aArgs); return oNew; };`Einsatz von [Closures](/de/docs/Web/JavaScript/Closures):`js Function.prototype.construct = function(aArgs) { var fConstructor = this, fNewConstr = function() { fConstructor.apply(this, aArgs); }; fNewConstr.prototype = fConstructor.prototype; return new fNewConstr(); };`Einsatz von {{jsxref("Function")}} Konstruktoren:```js
> Function.prototype.construct = function (aArgs) {
> var fNewConstr = new Function("");
> fNewConstr.prototype = this.prototype;
> var oNew = new fNewConstr();
> this.apply(oNew, aArgs);
> return oNew;
> };
>
> ```
>
> ```

Beispiel für den Einsatz:

```js
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
```

> **Hinweis:** Diese nicht native `Function.construct` Methode funktioniert nicht mit einigen nativen Konstruktoren (mit {{jsxref("Date")}} zum Beispiel). In diesem Fall muss man die {{jsxref("Function.prototype.bind")}} Methode (hat man zum Beispiel ein Array ähnliches Objekt wie folgt, um mit dem {{jsxref("Global_Objects/Date", "Date")}} Konstruktor `[2012, 11, 4]` einzusetzen; in diesem Fall muss folgendes geschrieben werden: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` — Jedoch ist das nicht die beste Art und Weise Probleme zu Lösen, weshalb diese Lösung nicht Praxistauglich ist).

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.3.4.3', 'Function.prototype.apply')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function.prototype.apply', 'Function.prototype.apply')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function.prototype.apply', 'Function.prototype.apply')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.apply")}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Reflect.apply()")}}
