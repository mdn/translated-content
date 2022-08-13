---
title: void Ausdruck
slug: Web/JavaScript/Reference/Operators/void
tags:
  - JavaScript
  - Operator
  - Unary
translation_of: Web/JavaScript/Reference/Operators/void
---
{{jsSidebar("Operators")}}

Der **`void` Operator** evaluiert einen gegebenen `Ausdruck` und gibt dann {{jsxref("Global_Objects/undefined", "undefined")}} zurück.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html")}}

## Syntax

    void Ausdruck

## Beschreibung

Der Operator erlaubt es, Ausdrücke mit Seiteneffekten an Stellen zu benutzen, an denen ein Ausdruck, der zu {{jsxref("Global_Objects/undefined", "undefined")}} ausgewertet wird, benötigt wird.

Der `void` Ausdruck wird oft nur deswegen verwendet, um den primitiven Wert `undefined` zu erhalten. In diesen Fällen kann auch die globale Variable {{jsxref("Global_Objects/undefined", "undefined")}} benutzt werden (wenn der Wert für diese auf den default-Wert zeigt und nicht geändert wurde)

## Immediately Invoked Function Expressions

Wenn man eine [immediately-invoked function expression](/de/docs/Glossary/IIFE) verwendet, dann kann `void` benutzt werden, um das keyword `function` als Ausdruck und nicht als Deklaration auswerten zu lassen.

```js
void function iife() {
    var bar = function () {};
    var baz = function () {};
    var foo = function () {
        bar();
        baz();
     };
    var biz = function () {};

    foo();
    biz();
}();
```

## JavaScript URIs

Wenn ein Browser einer `javascript:` URI folgt, wird zuerst der Code innerhalb der URI ausgewertet und dann der Inhalt der Seite mit dem Rückgabewert ersetzt. Das ist nicht der Fall, wenn der Rückgabewert {{jsxref("Global_Objects/undefined", "undefined")}} ist. Der `void` Ausdruck kann dazu benutzt werden in diesen Fällen {{jsxref("Global_Objects/undefined", "undefined")}} zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">
  Click here to do nothing
</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

Anmerkung: Die Verwendung des `javascript:` pseudo Protokolls wird gegenüber anderen nicht invasiven Maßnahmen wie Event Handlern nicht empfohlen.

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1', '#sec-11.4.2', 'The void Operator')}}                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1 |
| {{SpecName('ES3', '#sec-11.4.2', 'The void Operator')}}                 | {{Spec2('ES3')}}         |                                                      |
| {{SpecName('ES5.1', '#sec-11.4.2', 'The void Operator')}}             | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-void-operator', 'The void Operator')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-void-operator', 'The void Operator')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.operators.void")}}

## Siehe auch

- {{jsxref("Global_Objects/undefined", "undefined")}}
