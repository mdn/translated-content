---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
translation_of: Web/JavaScript/Reference/Global_Objects/Object/proto
---
> **Warning:** **Achtung:** Das Ändern des `[[Prototype]]` von einem Objekt, in der Art wie moderne JavaScript Engines den Zugriff auf Eigenschaften optimieren, ist eine sehr langsame Operation - in **_jedem_** Browser und JavaScript-Engine. Die Auswirkungen auf die Perfomance der veränderten Vererbung sind subtil und weit verstreut und sind nicht einfach auf die Zeit des Zugriffs von `obj.__proto__ = ...` Ausdruck limitiert, sondern können sich auf jeden Code erstrecken, der Zugriff auf ein Objekt hat, dessen `[[Prototype]]` geändert wurde. Wenn du dir um die Perfomance sorgen machst, dann solltest du das Setzen des `[[Prototype]]` auf ein Objekt vermeiden. Stattdessen kannst du ein neues Objekt mit dem gewünschten `[[Prototype]]` mit {{jsxref("Object.create()")}} erstellen.

> **Warning:** **Achtung:** Während `Object.prototype.__proto__` von den meisten Browsern unterstützt wird, ist seine Existenz und exaktes Verhalten nur in der ECMAScript 2015 Spezifikation als Vermächtnis-Funktion standardisiert, um die Kompatibilität für Web-Browser zu gewährleisten. Für bessere Unterstützung wird stattdessen empfohlen {{jsxref("Object.getPrototypeOf()")}} zu nutzen.

{{JSRef}}

Die `__proto__` Eigenschaft von {{jsxref("Object.prototype")}} ist eine Zugriffs-Eigenschaft (ein Erhalten- und Setzen-Funktion), welche den internen `[[Prototype]]` (entweder ein Objekt oder {{jsxref("Global_Objects/null", "null")}}) des Objektes, auf das zugegriffen wird, freilegt.

Die Nutzung von `__proto__` ist umstritten und wird nicht mehr empfohlen. Es war niemals ein Originalteil in der EcmaScript Sprach-Spezifikation, doch haben moderne Browser entschieden es trotzdem zu implementieren. Erst vor kurzem wurde die `__proto__` Eigenschaft als Standard in die ECMAScript 2015 Sprach-Spezifikation aufgenommen, um die Kompatibiliät von modernen Web-Browsern sicherzustellen, sodass es in der Zukunft unterstützt wird. Es ist veraltet zu Gunsten von {{jsxref("Object.getPrototypeOf")}}/{{jsxref("Reflect.getPrototypeOf")}} und {{jsxref("Object.setPrototypeOf")}}/{{jsxref("Reflect.setPrototypeOf")}} (obgleich das Setzen des `[[Prototype]]` eines Objektes immer noch eine langsame Operation ist und daher vermieden werden sollte, wenn Performance eine Rolle spielt).

Die `__proto__` Eigenschaft kann auch in einer Objekt-Literal-Definition verwendet werden, um das Objekt \[\[Prototyp]] bei der Erstellen zu setzen - als Alternative zu {{jsxref("Object.create()")}}. See: [object initializer / literal syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Syntax

```js
var Circle = function () {};
var shape = {};
var circle = new Circle();

// Setzt den Objekt Prototypen.
// DEPRECATED. Dies ist nur eine beispielhafte Verwendung und sollte NICHT in produktivem Code verwendet werden.
shape.__proto__ = circle;

// Liefert den Objekt Prototypen zurück
console.log(shape.__proto__ === circle); // true
```

```js
var shape = function () {
};
var p = {
    a: function () {
        console.log('aaa');
    }
};
shape.prototype.__proto__ = p;

var circle = new shape();

circle.a();//aaa

console.log(shape.prototype === circle.__proto__);//true

//oder

var shape = function () {
};
var p = {
    a: function () {
        console.log('a');
    }
};

var circle = new shape();
circle.__proto__ = p;


circle.a(); //  a

console.log(shape.prototype === circle.__proto__);//false

//oder

function test() {
}
test.prototype.myname = function () {
    console.log('myname');

}
var a = new test()

console.log(a.__proto__ === test.prototype);//true

a.myname();//myname


//oder

var fn = function () {
};
fn.prototype.myname = function () {
    console.log('myname');
}

var obj = {
    __proto__: fn.prototype
};


obj.myname();//myname
```

Anmerkung: das sind zwei Unterstriche, gefolgt von den fünf Zeichen "Proto", gefolgt von zwei weiteren Unterstrichen.

## Beschreibung

The `__proto__` getter function exposes the value of the internal `[[Prototype]]` of an object. For objects created using an object literal, this value is {{jsxref("Object.prototype")}}. For objects created using array literals, this value is {{jsxref("Array.prototype")}}. For functions, this value is {{jsxref("Function.prototype")}}. For objects created using `new fun`, where `fun` is one of the built-in constructor functions provided by JavaScript ({{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("String")}}, and so on — including new constructors added as JavaScript evolves), this value is always `fun.prototype`. For objects created using `new fun`, where `fun` is a function defined in a script, this value is the value of `fun.prototype`. (That is, if the constructor didn't return an other object explicitly, or the `fun.prototype` has been reassigned since the instance was created).

The `__proto__` setter allows the `[[Prototype]]` of an object to be mutated. The object must be extensible according to {{jsxref("Object.isExtensible()")}}: if it is not, a {{jsxref("Global_Objects/TypeError", "TypeError")}} is thrown. The value provided must be an object or {{jsxref("Global_Objects/null", "null")}}. Providing any other value will do nothing.

To understand how prototypes are used for inheritance, see guide article [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

The `__proto__` property is a simple accessor property on {{jsxref("Object.prototype")}} consisting of a getter and setter function. A property access for `__proto__` that eventually consults {{jsxref("Object.prototype")}} will find this property, but an access that does not consult {{jsxref("Object.prototype")}} will not find it. If some other `__proto__` property is found before {{jsxref("Object.prototype")}} is consulted, that property will hide the one found on {{jsxref("Object.prototype")}}.

## Spezifikationen

| Specification                                                                                                                                            | Status                       | Comment                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-additional-properties-of-the-object.prototype-object', 'Object.prototype.__proto__')}} | {{Spec2('ES2015')}}     | Included in the (normative) annex for additional ECMAScript legacy features for Web browsers (note that the specification codifies what is already in implementations). |
| {{SpecName('ESDraft', '#sec-additional-properties-of-the-object.prototype-object', 'Object.prototype.__proto__')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                         |

## Browserkompatibilität

{{Compat}}

## Kompatibiliäts Notizen

Während die ECMAScript 2015-Spezifikation vorschreibt, dass die Unterstützung für `__proto__` nur für Webbrowser erforderlich ist (obwohl sie bestimmend sind), können andere Umgebungen sie auch für den Gebrauch von Benutzern unterstützen

## Siehe auch

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
