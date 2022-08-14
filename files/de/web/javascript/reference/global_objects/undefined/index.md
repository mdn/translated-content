---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/undefined
---
{{jsSidebar("Objects")}}

Die globale Eigenschaft **`undefined`** repräsentiert den Wert `{{Glossary("Undefined", "undefined")}}` . Dieser Wert ist einer der {{Glossary("Primitive", "primitiven Typen")}} in JavaScript.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Syntax

    undefined

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objektes_, was bedeutet, dass es eine Variable im globalen Gültigkeitsbereich ist. Der initiale Wert von `undefined` ist der primitive Wert `{{Glossary("Undefined", "undefined")}}`.

In modernen Browsern (JavaScript 1.8.5 / Firefox 4+) ist `undefined` eine nicht konfigurierbare und nicht beschreibbare Eigenschaft. Dieses ist in der ECMAScript 5 Spezifikation definiert. Immer wenn das nicht der Fall ist, sollte das Überschreiben von `undefined` unterlassen werden.

Eine Variable, die nicht mit einem Wert beschrieben wurde, ist vom Typ `undefined`. Methoden oder Anweisungen geben ebenfalls `undefined` zurück, wenn eine Variable, die ausgewertet wird, mit keinem Wert beschrieben ist. Eine Funktion hat `undefined` als Rückgabewert, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wird.

> **Warning:** Weil es möglich ist {{Glossary("Identifier", "Bezeichner")}} (Variablennamen) in jedem anderen Scope anders zu definieren, ist es auch möglich `undefined` neu zu defnieren (weil `undefined` kein {{jsxref("Reserved_Words", "reserviertes Schlüsselwort")}}) ist). Dieses einzusetzen ist jedoch keine gute Idee, weil der Quelltext dadurch schwer zu verstehen ist.```js
> // NICHT NACHMACHEN
>
> // gibt "foo string" aus
> (function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();
>
> // gibt "foo string" aus
> (function(undefined){ console.log(undefined, typeof undefined); })('foo');
>
> ```
>
> ```

## Beispiele

### Identität und `undefined`

Man kann `undefined` in Verbindung mit dem strikten Gleichheitsoperator nutzen, um den Wert von Variablen auf `undefined` zu prüfen. Im folgenden Beispiel ist die Variable `x` nicht definiert und die if-Anweisung wird zu `true` ausgewertet.

```js
var x;
if (x === undefined) {
   // Diese Anweisung wird ausgeführt
}
else {
   // Diese Anweisung wird nicht ausgeführt
}
```

> **Note:** Hinweis: Der strikte Gleichheitsoperator muss statt dem Standard-Gleichheitsoperator benutzt werden, weil `x == undefined` auch prüft, ob `x` `null` ist, was bei strikter Gleichheit nicht so ist. `null` ist nicht äquivalent zu `undefined` Für Details siehe {{jsxref("Operators/Comparison_Operators", "Vergleichsoperatoren")}}

### `Typeof` Operator und `undefined`

Alternativ kann {{jsxref("Operators/typeof", "typeof")}} eingesetzt werden:

```js
var x;
if (typeof x === 'undefined') {
   // Diese Anweisung wird ausgeführt
}
```

Ein Grund {{jsxref("Operators/typeof", "typeof")}} zu nutzen, ist, dass diese Variante keinen Fehler erzeugt, wenn eine Variable nicht definiert ist.

```js
// x wurde nicht definiert
if (typeof x === 'undefined') { // wird ohne Fehler zu true ausgewertet
   // Diese Anweisung wird ausgeführt
}

if(x === undefined){ // erzeugt einen ReferenceError

}
```

Diese Technik sollte so oft es geht vermieden werden. JavaScript ist eine Sprache mit statischen Gültigkeitsbereichen, was bedeutet, dass eine Variable immer in seinem geschlossenen Kontext gelesen werden kann, egal ob sie existiert oder nicht. Die einzige Ausnahme ist der globale Gültigkeitsbereich, jedoch ist dieser an das _globale Objekt_ gebunden, weshalb die Existenz einer Variablen auf dem _globalen Objekt_ geprüft werden kann. Dafür kann der {{jsxref("Operators/in", "in")}}-Operator genutzt werden.

### `Void` Operator und `undefined`

Der {{jsxref("Operators/void", "void")}}-Operator ist die dritte Alternative.

```js
var x;
if (x === void 0) {
   // Diese Anweisung wird ausgeführt
}

// y wurde nicht definiert
if (y === void 0) {
   // erzeugt einen ReferenceError (im gegensatz zu `typeof`)
}
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1', '#sec-4.3.9', 'undefined')}}             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.3', 'undefined')}}     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-undefined', 'undefined')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-undefined', 'undefined')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.undefined")}}
