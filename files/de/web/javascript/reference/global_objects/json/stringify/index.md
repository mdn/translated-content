---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Method
  - Reference
  - stringify
translation_of: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---
{{JSRef}}

Die **`JSON.stringify()`** Methode konvertiert einen JavaScript-Wert in einen JSON-String. Optional werden Werte ersetzt, wenn eine Ersetzungsfunktion angegeben ist. Optional werden nur die angegebenen Eigenschaften einbezogen, wenn ein Ersetzungsarray angegeben ist.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## Syntax

    JSON.stringify(value[, replacer[, space]])

### Parameter

- `value`
  - : Der Wert, der zu einem JSON-String konvertiert werden soll.
- `replacer` {{optional_inline}}
  - : Eine Funktion, die das Verhalten des String- Erstellungsprozesses verändert, oder ein Array von {{jsxref("String")}} und {{jsxref("Number")}} Objekten, die als Whiteliste für die Selektion von Eigenschaften des `value` Objektes fungiert, um nur bestimmte Eigenschaften im JSON-String aufzunehmen. Wenn dieser Parameter null ist oder nicht unterstützt wird, werden alle Eigenschaften des Objektes im JSON-String aufgenommen.
- `space` {{optional_inline}}
  - : Ein {{jsxref("String")}} oder {{jsxref("Number")}} Objekt, welches eingesetzt wird, um Whitespaces in den JSON-String für die Lesbarkeit hinzuzufügen. Wenn eine `Number` angegeben ist, bedeutet dies, dass die angegebene Anzahl an Leerzeichen hinzugefügt werden; Die Anzahl der Leerzeichen ist hierbei auf 10 begrenzt und wird bei einer größeren Anzahl auf 10 gesetzt. Werte kleiner als 1 bedeuten, dass keine Leerzeichen verwendet werden sollen. Wenn ein `String` angegeben wird, wird der String (oder die ersten 10 Zeichen des Strings, wenn er länger ist) als Leerzeichen benutzt. Wenn dieser Parameter null ist oder nicht unterstützt wird, werden keine Whitespaces verwendet.

### Rückgabewert

Ein JSON-String, der den angegebenen Wert repräsentiert.

### Fehler

Erzeugt einen {{jsxref("TypeError")}} ("cyclic object value") Fehler, wenn eine zyklische Referenz gefunden wird.

## Beschreibung

`JSON.stringify()` konvertiert einen Wert in einen in JSON-Notation gleichwertigen Wert:

- Wenn der Wert eine [toJSON()](</de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify$edit#toJSON()_behavior>) Methode hat, definiert diese, welche Daten serialisiert werden.
- {{jsxref("Boolean")}}, {{jsxref("Number")}} und {{jsxref("String")}} Objekte werden zu den entsprechenden primitiven Werten, gemäß der traditionellen Konvertierungssemantik, konvertiert.
- Wenn {{jsxref("undefined")}}, eine {{jsxref("Function", "Funktion")}} oder ein {{jsxref("Symbol")}} während der Konvertierung auftritt, wird es einfach weggelassen (wenn es in einem Objekt gefunden wird) oder zu {{jsxref("null")}} geändert (wenn es in einem Array gefunden wurde). `JSON.stringify` kann `undefined` zurückgeben, wenn nur ein Wert wie `JSON.stringify(function(){})` or `JSON.stringify(undefined)` übergeben wird.
- Alle {{jsxref("Symbol")}}-Schlüssel-Eigenschaften werden komplett ignoriert, auch wenn die `replacer` Funktion genutzt wird.
- Instanzen von {{jsxref("Date")}} implementieren die `toJSON()` Funktion so, dass ein String (der gleich wie bei `date.toISOString()` ist) zurückgibt. Daher werden sie als String behandelt.
- Die Zahlen {{jsxref("Infinity")}} und {{jsxref("NaN")}} genauso wie {{jsxref("null")}} Objekte werden zu `null` umgewandelt.
- Für alle anderen {{jsxref("Object")}} Instanzen (eingeschlossen {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}}) werden nur die aufzählbaren (enumerable) Eigenschaften serialisiert.

```js
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// '[1,"false",false]'

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard-Datenstrukturen
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y} });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'

// Nicht-enumerable Eigenschaften:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'
```

### Der `replacer` Parameter

Der `replacer` Parameter kann entweder eine Funktion oder ein Array sein. Als Funktion erhält diese zwei Parameter, den Schlüssel und den Wert, die in JSON konvertiert werden. Das Objekt, in dem der Schlüssel gefunden wurde, kann in der `replacer` Funktion mit `this` abgefragt werden. Initial wird die `replacer` Funktion mit einem leeren String als Schlüssel aufgerufen, was bedeutet, dass das Objekt konvertiert wird und dieses dann für alle Eigenschaften des Objektes oder Arrays die `replacer` Funktion aufruft. Die Funktion kann den Rückgabewert wie folgt zurückgeben, damit das Objekt zum JSON-String hinzugefügt wird:

- Wenn eine {{jsxref("Number")}} zurückgegeben wird, wird der entsprechende String der Zahl als Wert für die Eigenschaft zum JSON hinzugefügt.
- Wenn ein {{jsxref("String")}} zurückgegeben wird, wird der String als Wert für die Eigenschaft zum JSON hinzugefügt.
- Wenn ein {{jsxref("Boolean")}} zurückgegeben wird, werden "true" oder "false" als Wert für die Eigenschaft im JSON hinzugefügt.
- Wenn `null` zurückgegeben wird, wird `null` zum JSON String kinzugefügt.
- Wenn ein anderes Objekt zurückgegeben wird, wird dieses Objekt wiederum rekursiv in ein JSON-String konvertiert, was bedeutet, dass für jede Eigenschaft auch die `replacer` Funktion wieder aufgerufen wird. Eine Ausnahme ist, wenn das zurückgegebene Objekt eine Funktion ist, dann wird nichts zum JSON hinzugefügt.
- Wenn `undefined` zurückgegeben wird, wird die Eigenschaft nicht in das JSON hinzugefügt.

> **Note:** **Hinweis:** Man kann eine `replacer` Funktion nicht nutzen, um Werte von Arrays zu entfernen. Wenn man `undefined` oder eine function zurückgibt, wird `null` zum JSON hinzugefügt.

> **Note:** **Hinweis:** Wenn man möchten, dass der Replacer ein initiales Objekt von einem Schlüssel mit einer leeren String-Eigenschaft unterscheidet (da beide den leeren String als Schlüssel und möglicherweise ein Objekt als Wert angeben würden), muss man den Anzahl der Iterationen verfolgen (wenn er jenseits der ersten Iteration ist, ist es ein echter leerer String-Schlüssel).

#### Beispiel mit einer Funktion

```js
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);
//  {"week":45,"month":7}
```

#### Beispiel mit einem Array

Wenn `replacer` ein Array ist, geben die Werte des Arrays die Namen der Eigenschaften an, die im JSON-String mit aufgenommen werden sollen.

```js
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', only keep "week" and "month" properties
```

### Der `space` Parameter

Der `space` Parameter wird eingesetzt, um die Abstände in dem JSON-String zu beeinflussen. Wenn es eine Zahl ist, werden sukzessiv alle Stufen um die angegebene Anzahl von Leerzeichen (bis zu 10) eingerückt. Wenn `space` ein String ist, werden sukzessiv alle Stufen mit dem angegebenen String eingerückt (oder mit den ersten zehn Zeichen).

```js
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
```

Einsatz eines Tab-Zeichens als Standard für leserliches Aussehen:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### `toJSON()` Verhalten

Wenn ein Objekt in ein JSON-String umgewandelt werden soll und eine Eigenschaft mit dem Namen `toJSON`, dessen Wert eine Funktion ist, wird die `toJSON()` Funktion eingesetzt um ein JSON-String zu erstellen: Anstatt, dass das Objekt normal serialisiert wird, wird die `toJSON()` Funktion aufgerufen und der Rückgabewert serialisiert. JSON.stringify ruft `toJSON` mit einem Parameter auf:

- wenn das Objekt ein Eigenschaftswert ist, dann der Name der Eigenschaft
- wenn es ein Array ist, dann den Index im Array als String
- ein leerer String, wenn JSON.stringify direkt auf dem Objekt aufgerufen wurde

Zum Beispiel:

```js
var obj = {
    data: 'data',

    toJSON(key){
        if(key)
            return `Now I am a nested Object under key '${key}'`;

        else
            return this;
    }
};

JSON.stringify(obj);
// Returns '{"data":"data"}'

JSON.stringify({ obj });
// Returns '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([ obj ])
// Returns '["Now I am a nested object under key '0'"]'
```

### Probleme mit `JSON.stringify` bei zyklischen Referenzen

Zu beachten ist, dass das [JSON Format](https://www.json.org/) keine Objektreferenzen unterstützt (es existiert nur ein [IETF Entwurf](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)), so dass ein {{jsxref("TypeError")}} erzeugt wird, wenn ein Objekt mit zyklischen Referenzen übersetzt werden soll.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Serializing circular references throws "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Um zyklische Referenzen zu Serialisieren, wird ein Bibliothek mit solchen Funktionen benötigt (z. B. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) von Douglas Crockford) oder es muss eine eigene Lösung implementiert werden, welche zyklische Referenzen bei serialisierbaren Werten findet und ersetzt (oder entfernt).

### Probleme mit reinem Einsatz von `JSON.stringify` für JavaScript

Man muss anmerken, dass JSON [keine komplette strikte Untermenge von JavaScript ist (englisch)](http://timelessrepo.com/json-isnt-a-javascript-subset). Es gibt nämlich zwei Zeilentrenner (Zeilentrenner und Paragraphentrenner), die in JSON nicht escaped werden müssen, in JavasScript jedoch schon. Wenn ein JSON nun ausgewertet oder direkt in [JSONP](https://de.wikipedia.org/wiki/JavaScript_Object_Notation#JSONP) eingesetzt werden soll, kann der folgende Quelltext verwendet werden:

```js
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

var s = {
    a: String.fromCharCode(0x2028),
    b: String.fromCharCode(0x2029)
};
try {
    eval('(' + JSON.stringify(s) + ')');
} catch (e) {
    console.log(e); // "SyntaxError: unterminated string literal"
}

// kein catch benötigt
eval('(' + jsFriendlyJSONStringify(s) + ')');

// console.log in Firefox unescapes den Unicode wenn
// in die Konsole geloggt wird, weshalb hier alert eingesetzt wird.
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

### Beispiel für Einsatz von `JSON.stringify()` mit `localStorage`

In einem Fall, indem man ein Objekt speichern möchte, dass von einem Benutzer erstellt wurde, und dem Benutzer dieses auch nach dem Schließen des Browsers wieder zur Verfügung stellten möchte, ist ein Beispiel für die Anwendung von `JSON.stringify()`:

```js
// Creating an example of JSON
var session = {
  'screens': [],
  'state': true
};
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

// Konvertiert zu einem JSON-String mit JSON.stringify().
// Dann wird der String des session-Objektes im localStorage gespeichert.
localStorage.setItem('session', JSON.stringify(session));

// Beispiel wie man den mit JSON.stringify() generierten und
// im localStorage gespeicherten JSON-String in ein Objekt umwandelt.
var restoredSession = JSON.parse(localStorage.getItem('session'));

// Jetzt enthält die Variable restoredSession das im localStorage
// abgespeicherte Objekt
console.log(restoredSession);
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.12.3', 'JSON.stringify')}}             | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.7. |
| {{SpecName('ES6', '#sec-json.stringify', 'JSON.stringify')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-json.stringify', 'JSON.stringify')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.JSON.stringify")}}

## Siehe auch

- {{jsxref("JSON.parse()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – Führt zwei Funktionen ein, `JSON.decycle` und `JSON.retrocycle`, welche es ermöglichen zyklische Strukturen zu kodieren und dekodieren und eine erweiterbare und JSON Format kompatible Struktur bietet.
