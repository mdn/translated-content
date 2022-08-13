---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Function/call
---
{{JSRef}}

Die **`call()`** Methode ruft eine Funktion mit dem Argument this und den individuellen Parametern auf.

> **Hinweis:** Die Syntax dieser Funktion ist nahezu identisch zu {{jsxref("Function.prototype.apply", "apply()")}}. Der Unterschied ist, dass `call()` eine **Liste von Argumenten** und `apply()` einen einzelnen **Array von Argumenten** akzeptiert.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntax

    function.call(thisArg, arg1, arg2, ...)

### Parameter

- `thisArg`
  - : Optional. Der Wert von `this`, der für den Aufruf der Funktion _`function`_ genutzt wird. Zu beachten ist, dass `this` möglicherweise nicht der Wert ist, den die Methode sieht: Wenn die Methode eine Funktion in {{jsxref("Functions_and_function_scope/Strict_mode", "non-strict mode", "", 1)}} ist, werden {{jsxref("Global_Objects/null", "null")}} und {{jsxref("Global_Objects/undefined", "undefined")}} mit dem globalen Objekt ersetzt und primitive Werte werden in ein Hüllobjekt umgewandelt.
- `arg1, arg2, ...`
  - : Argumente für das Objekt.

### Rückgabewert

Das Ergebnis der aufgerufenen Funktion mit dem spezifischen **`this`** Wert und Parametern.

## Beschreibung

Beim Aufruf einer existierenden Funktion können Sie für `this` ein neues Objekt zuweisen. `this` verweist auf das aktuelle Objekt, also das aufrufende Objekt. Mit call können Sie eine Methode schreiben und an ein anderes Objekt vererben, ohne die Methode für das neue Objekt neuzuschreiben.

## Beispiele

### Nutzung von `call`, um Konstruktoren für ein Objekt zu verketten

Man kann `call` nutzen, um Konstruktoren für ein Objekt, ähnlich wie in Java, zu verketten. Im folgenden Beispiel wird der Konstruktor für das `Product` Objekt mit zwei Parametern, `name` und `price`, definiert. Zwei andere Funktionen `Food` und `Toy` rufen `Product` auf und übergeben `this`, `name` und `price`. `Product` initialisiert die Eigenschaften `name` und `price` und beide speziellen Funktionen definieren `category`.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

### Nutzung von `call` zum Aufruf einer anonymen Funktion

In diesem komplett konstruierten Beispiel erstellen wir eine anonyme Funktion und nutzen `call`, um diese für jedes Objekt in einem Array aufzurufen. Der Hauptnutzen für die Nutzung anonymer Funktionen hier, ist das hinzufügen einer Print-Funktion für jedes Objekt, welche den rechten Index des Objekts in dem eingegebenen Array ausgeben kann. Die Übergabe des Objektes als `this`-Wert ist hier nicht zwingend erforderlich, wurde aber zur Veranschaulichung genutzt.

```js
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(x) {
    this.print = function() {
      console.log('#' + x + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
```

### Einsatz von `call` zum aufrufen einer Funktion mit spezifiziertem Kontext für '`this`'

Im unten stehenden Beispiel wird das `this`Objekt der `greet` Funktion beim Aufruf auf `obj` gesetzt.

```js
function greet() {
  var reply = [this.animal, 'typically sleep betreen', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### Eine Funktion mit `call` ausführen ohne den ersten Parameter zu setzen.

Im unten stehenden Beispiel wird die `display` Funktion aufgerufen ohne den ersten Parameter zu übergeben. Wenn der erste Parameter nicht übergeben wird, ist `this` das globale Objekt.

```js
var sData = 'Wisen';

function display(){
  console.log('sData value is %s', this.sData);
}

display.call(); // sData value is Wisen
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.3.4.4', 'Function.prototype.call')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function.prototype.call', 'Function.prototype.call')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function.prototype.call', 'Function.prototype.call')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.call")}}

## Siehe auch

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [Einführung in objektorientiertes JavaScript](/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
