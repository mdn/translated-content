---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
tags:
  - JavaScript
  - Object
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/constructor
---
{{JSRef("Global_Objects", "Object")}}

## Zusammenfassung

Gibt eine Referenz zur {{jsxref("Global_Objects/Object", "Object")}}-Funktion, welche die Instanz vom Prototyp herstellt. Merke: Der Wert dieser Eigenschaft ist eine Referenz auf die Funktion selbst und kein String mit dem Funktionsnamen als Inhalt. Der Wert ist nur lesbar für primitive Werte, wie `1`, `true` und `"test"`.

## Beschreibung

Alle Objekte erben eine constructor- Eigenschaft von ihrem `prototype`:

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Beispiele

### Beispiel: zeigen den Konstruktor von einem Objekt an

Das folgende Beispiel erzeugt einen Prototyp: `Tree`, und ein Objekt von jenem Typ: `theTree`. Das Beispiel zeigt danach die Konstruktor-Eigenschaft vom `Objekt:theTree` an.

```js
function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);
```

Das Beispiel erzeugt folgende Ausgabe:

```js
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### Beispiel: Veränderung des Konstruktors eines Objekts

Das folgende Beispiel zeigt, wie man den Konstruktorwert eines generischen Objekts verändert. Nur `true`, `1` und `"test"` werden nicht von der Veränderung betroffen, da sie nur lesbare (read-only) native Konstruktoren haben. Dieses Beispiel zeigt, dass es nicht immer sicher ist, sich auf die Konstruktor-Eigenschaft eines Objekts zu verlassen.

```js
function Type () {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true,             // bleibt unverändert
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1,                // bleibt unverändert
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  'test'            // bleibt unverändert
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
}

console.log(types.join('\n'));
```

Das Beispiel zeigt folgende Ausgabe:

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,тест
```

## Spezifikation

| Spezifikation                                                                                                        | Status                   | Komentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------- |
| ECMAScript 1 te Edition.                                                                                             | Standard                 | Ausgangsdefinition: Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.2.4.1', 'Object.prototype.constructor')}}                         | {{Spec2('ES5.1')}} |                                                      |
| {{SpecName('ES6', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}} | {{Spec2('ES6')}}     |                                                      |

## Browserunterstützung

{{Compat}}
