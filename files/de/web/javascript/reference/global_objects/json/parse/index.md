---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
tags:
  - ECMAScript5
  - JSON
  - JavaScript
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/parse
---
{{JSRef}}

Die Methode **`JSON.parse()`** erzeugt aus einem JSON-formatierten Text ein entsprechendes Javascript-Objekt. Der optionale **reviver**-Parameter kann die Umwandlung im Detail beeinflussen.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

    JSON.parse(text[, reviver])

### Parameter

- `text`
  - : JSON-formatierter Text, der eingelesen werden soll. Siehe {{jsxref("JSON")}} für eine Beschreibung der JavaScript Objekt Notation.
- `reviver` {{optional_inline}}
  - : Wenn es sich um eine Funktion handelt, schreibt diese vor, wie der ursprünglich vom Parsen erzeugte Wert transformiert wird, bevor er zurückgegeben wird.

### Rückgabewert

Die Funktion gibt das aus `text` erzeugte {{jsxref("Object")}} zurück.

### Ausnahmen

{{jsxref("SyntaxError")}}, falls `text` kein gültiges JSON enthält.

## Beispiele

### `JSON.parse()` verwenden

    JSON.parse('{}');              // {}
    JSON.parse('true');            // true
    JSON.parse('"foo"');           // "foo"
    JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
    JSON.parse('null');            // null

### Verwendung des `reviver`-Parameters

Wenn `reviver` spezifiziert ist, wird der vom Parser berechnete Wert vor der Rückgabe Transformiert. Insbesondere der berechnete Wert und alle seine EIgenschaften (beginnend mit dem am tiefsten geschachtelten Eigenschaft bis hin zum originalen Wert selbst) werden separat mit dem `reviver` Ausgeführt. Dann wird sie aufgerufen, wobei das Objekt, das die Eigenschaft enthält, als `this` und der Eigenschaftsname als Zeichenfolge und der Eigenschaftswert als Argumente verarbeitet werden. Wenn `reviver` {{jsxref("undefined")}} zurück gibt (oder keinen Wert zurück gibt, wenn zum Beispiel die Ausführung der Funktion fehlschlägt), wird die Eigenschaft aus dem Ergebnis entfernt. Anderenfalls wird dessen Wert in den Rückgabewert neu definiert.

Falls `reviver` nur einige Werte ändert, muss sichergestellt sein, dass die unveränderten Werte auch zurückgegeben werden, ansonsten werden diese Werte aus dem Ergebnis gelöscht.

```js
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // Gibt value * 2 für Zahlen zurück.
    : value     // Alle anderen Werte werden unverändert zurückgegeben.
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // Loggt die Namen der Eigenschaften, der letzte ist "".
  return value;     // Gib den unveränderten Eigenschaftenwert zurück.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` erlaubt keine abschließenden Kommas

```js example-bad
// Beides erzeugt einen Syntaxfehler
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse("{ \"foo\" : 1, }");
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.12.2', 'JSON.parse')}}         | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.7. |
| {{SpecName('ES6', '#sec-json.parse', 'JSON.parse')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-json.parse', 'JSON.parse')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.JSON.parse")}}

## Siehe auch

- {{jsxref("JSON.stringify()")}}
