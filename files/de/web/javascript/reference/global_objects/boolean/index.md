---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Constructor
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
---
{{JSRef}}

Das **`Boolean`** Objekt ist ein Objekt-Wrapper für einen booleschen Wert.

## Syntax

    new Boolean([value])

### Parameter

- `value`
  - : Optional. Der Anfangswert des `Boolean`-Objektes.

## Beschreibung

Der als erster Parameter übergebene Wert wird, wenn nötig, in einen booleschen Wert umgewandelt. Wird der Wert ausgelassen oder ist `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} oder der leere String (`""`), so besitzt das Objekt den Initialwert `false`. Alle anderen Werte, einschließlich eines Objektes oder des Strings `"false"`, erzeugen ein Objekt mit dem Initialwert `true`.

Die Werte `true`und `false`des `Boolean`-Objektes sind nicht zu verwechseln mit den primitiven Booleanwerten `true`und `false.`

Jedes Objekt, dessen Wert nicht {{jsxref("undefined")}} oder {{jsxref("null")}} entspricht, einschließlich eines `Boolean-`Objektes, dessen Wert `false` ist, wird bei der Übergabe an eine Bedingung als `true` gewertet. Beispielsweise wird das folgende {{jsxref("Statements/if...else", "if")}} Konstrukt als `true` ausgewertet:

```js
var x = new Boolean("false");
if (x) {
  // this code is executed
}
```

Dieses Verhalten trifft nicht auf primitive Boolwerte zu. Beispielsweise ergibt das folgende {{jsxref("Statements/if...else", "if")}} Konstrukt `false`:

```js
x = false;
if (x) {
  // this code is not executed
}
```

Ein `Boolean`-Objekt sollte nicht genutzt werden um einen nicht-booleschenWert in einen booleschen Wert umzuwandeln. In diesem Fall wäre es besser, den Boolean als Funktion zu verwenden:

```js
x = Boolean(expression);     // preferred
x = new Boolean(expression); // don't use
```

Wird ein Objekt, einschließlich eines `Boolean`-Objektes dessen Wert `false` ist, als Anfangsparameter an das `Boolean-`Objekt übergeben, so hat das neue `Boolean`-Objekt den Wert `true`.

```js
myFalse = new Boolean(false);   // initialer Wert von false
g = Boolean(myFalse);       // initialer Wert von  true
myString = new String('Hello'); // string objekt
s = Boolean(myString);      //  initialer Wert von true
```

Ein `Boolean`-Objekt darf nicht anstelle eines primitiven `Boolean-wertes`verwendet werden.

> **Hinweis:** Wenn die nicht standardisierte Eigenschaft [`document.all`](/de/docs/Web/API/Document#Properties) als Argument für den Konstruktor benutzt wird, ist das Resultat ein `Boolean` Objekt mit dem Wert `false`. Diese Eigenschaft ist veraltet und nicht standardisierte und darf nicht eingesetzt werden.

## Eigenschaften

- `Boolean.length`
  - : Längen-Eingeschaft, die den Wert 1 hat.
- {{jsxref("Boolean.prototype")}}
  - : Repräsentiert den Prototypen für den `Boolean` Konstruktor

## Methoden

Das globale Objekt `Boolean` enthält zwar keine eigenen Methoden, erbt jedoch einige seiner Methoden durch die Prototypenkette:

## `Boolean` Instanzen

Alle Instanzen von `Boolean` erben von {{jsxref("Boolean.prototype")}}. Wie bei allen Konstruktoren diktiert das Prototyp-Objekt die geerbten Eigenschaften und Methoden der Child-Elemente.

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Methoden')}}

## Beispiele

### Erstellung eines `Boolean` Objektes mit dem Anfangswert `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```

### Erstellung eines `Boolean` Objektes mit dem Anfangswert `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                                  |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Ursprüngliche Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.6', 'Boolean')}}                 | {{Spec2('ES5.1')}}     |                                                            |
| {{SpecName('ES6', '#sec-boolean-objects', 'Boolean')}}     | {{Spec2('ES6')}}         |                                                            |
| {{SpecName('ESDraft', '#sec-boolean-objects', 'Boolean')}} | {{Spec2('ESDraft')}} |                                                            |

## Browserkompatibilität

{{Compat("javascript.builtins.Boolean")}}

## Siehe auch

- {{jsxref("Boolean.prototype")}}
- {{Glossary("Boolean")}}
- [Boolesche Variablen (Wikipedia)](https://de.wikipedia.org/wiki/Boolesche_Variable)
