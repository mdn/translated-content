---
title: Optionale Verkettung
slug: Web/JavaScript/Reference/Operators/Optional_chaining
tags:
  - Experimentell
  - JavaScript
  - Operator
  - Optionale Verkettung
  - Referenz
  - Verkettung
translation_of: Web/JavaScript/Reference/Operators/Optional_chaining
original_slug: Web/JavaScript/Reference/Operators/Optionale_Verkettung
---
{{JSSidebar("Operators")}}

{{SeeCompatTable}}

Der **Optionale-Verkettung**s-Operator (Optional Chaining) **`?.`** ermöglicht es, einen Wert aus einer Eigenschaft tief innerhalb einer Verkettung von Objekt-Eigenschaften auszulesen, ohne dabei explizit überprüfen zu müssen, ob jede Referenz in der Kette valide ist.Der `?.` Operator funktioniert ähnlich wie der `.` -Verkettungs Operator, außer dass er keinen Fehler bei einem {{glossary("nullish")}} ({{JSxRef("null")}} oder {{JSxRef("undefined")}}) Wert auswirft, sondern stattdessen den Ausdruck beendet und `undefined` zurückgibt. Wird er mit Funktionsaufrufen verwendet, wirft der Aufruf `undefined` zurück, wenn die Funktion nicht existiert.

Das Ergebnis sind kürzere und einfacherere Anweisungen wenn auf verkettete Eigenschaften zugegriffen wird, bei denen die Möglichkeit besteht, dass sie fehlen. Er kann außerdem hilfreich sein, wenn man den Inhalt eines Objektes erhalten möchte wenn es keine Garantie dafür gibt welche Eigenschaften benötigt werden.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html")}}

## Syntax

    obj?.prop
    obj?.[expr]
    arr?.[index]
    func?.(args)

## Beschreibung

Der Optionale-Verkettungs-Operator ermöglicht einen Weg auf Werte in einer Verkettung aus Eigenschaften zuzugreifen, wenn die Möglichkeit existiert, dass eine der Referenzen oder Funktionen in der Kette `undefined` oder `null` sind.

Als Beispiel nehmen wir ein Objekt `obj`, dass eine verschachtelte Struktur besitzt. Ohne Optionale Verkettung müssen wir beim Zugriff auf einen Wert jede Referenz innerhalb der Kette auf ihre Existenz überprüfen:

```js
let nestedProp = obj.first && obj.first.second;
```

Der Wert von `obj.first` wird darauf geprüft nicht-`null` (und nicht-`undefined`) zu sein und erst dann greifen wir auf den Wert `obj.first.second` zu. Dies verhindet einen Fehler der auftreten würde wenn wir direkt `obj.first.second` ansprechen ohne zuvor `obj.first` zu prüfen.

Mit dem Optionale-Verkettungs-Operator (`?.`) allerdings müssen wir nicht explizit testen und können eine Abkürzung auf Basis des Wertes von `obj.first` nutzen bevor auf auf `obj.first.second` zugreifen:

```js
let nestedProp = obj.first?.second;
```

Durch die Verwendung des `?.`-Operators statt nur dem `.` stellet JavaScript sicher, dass zuvor geprüft wird ob `obj.first` nicht `null` oder `undefined` ist bevor auf `obj.first.second` zugegriffen wird. Wenn `obj.first` `null` oder `undefined` ist, wird der Ausdruck automatisch sofort beendet und wirft den Wert `undefined` zurück

Das ist dasselbe wie folgender Ausdruck:

```js
let nestedProp = ((obj.first === null || obj.first === undefined) ? undefined : obj.first.second);
```

### Optionale Verkettung mit Funktionsaufrufen

Optionale Verkettung kann verwendet werden um Funktionen aufzurufen, die womöglich nicht existeiren. Das kann hilfreich sein wenn man z.B. eine API verwenden möchte die möglicherweise nicht verfügbar ist, entweder durch das Alter der Implementierung oder weil die Funktionalität nicht für das Gerät verfügbar ist.

Verwendet man optionale Verkettung mit Funktionsaufrufen, wird der Ausdruck automatisch `undefined` zurückwerfen, sollte die Funktion nicht existieren:

```js
let result = someInterface.customMethod?.();
```

> **Note:** Wenn eine Eigenschaft mit dem Namen existiert, die aber keine Funktion ist, wird `?.` trotzdem eine {{JSxRef("TypeError")}} Ausnahme auslösen (`x.y`` ist keine Funktion`).

#### Optionale Callbacks oder Event Handler handhaben

If you use callbacks or fetch methods from an object with [a destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), you may have non-existent values that you cannot call as functions unless you have tested their existence. Using `?.`, you can avoid this extra test:

```js
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  }
  catch (err) {
    if (onError) { // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
   // ... do something with the data
  }
  catch (err) {
    onError?.(err.message); // no exception if onError is undefined
  }
}
```

### Optional chaining with expressions

You can also use the optional chaining operator when accessing properties with an expression using [the bracket notation of the property accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation):

```js
let nestedProp = obj?.['prop' + 'Name'];
```

### Array item access with optional chaining

```js
let arrayItem = arr?.[42];
```

## Examples

### Basic example

This example looks for the value of the `name` property for the member `bar` in a map when there is no such member. The result is therefore `undefined`.

```js
let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

let nameBar = myMap.get("bar")?.name;
```

### Short-circuiting evaluation

When using optional chaining with expressions, if the left operand is `null` or `undefined`, the expression will not be evaluated. For instance:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented
```

### Stacking the optional chaining operator

With nested structures, it is possible to use optional chaining multiple times:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls" // detailed address is unknown
  }
};
let customerCity = customer.details?.address?.city;

// … this also works with optional chaining function call
let duration = vacations.trip?.getTime?.();
```

### Combining with the nullish coalescing operator

The nullish coalescing operator may be used after optional chaining in order to build a default value when none was found:

```js
let customer = {
  name: "Carl",
  details: { age: 82 }
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## Specifications

| Specification                                                                                    | Status  | Comment |
| ------------------------------------------------------------------------------------------------ | ------- | ------- |
| [Proposal for the "optional chaining" operator](https://tc39.es/proposal-optional-chaining/#top) | Stage 4 |         |

## Browser compatibility

{{Compat("javascript.operators.optional_chaining")}}

## See also

- The {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator", '', 1)}}
- [TC39 proposals](https://github.com/tc39/proposals)
