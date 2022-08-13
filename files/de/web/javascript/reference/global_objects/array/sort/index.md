---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
---
{{JSRef}}

Die **`sort()`** Methode sortiert die Elemente eines Arrays {{interwiki("wikipedia","in-place")}} und gibt das Array zurück. Standardmäßig werden alle Elemente in Strings umgewandelt und dann anhand ihrer UTF-16 Codepoints miteinander verglichen.

Die Zeit- und Speicherkomplexität des Sortierens kann nicht garantiert werden, weil sie implementierungsabhängig ist.

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## Syntax

    arr.sort([compareFunction])

### Parameter

- `compareFunction` {{optional_inline}}
  - : Gibt eine Funktion an, die die Sortierreihenfolge definiert. Wenn nicht angegeben, wird das Array nach dem [Unicode](/de/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode)-Codepoint jedes Zeichens entsprechend der Stringumwandlung jedes Elements sortiert._ `firstEl`
    _ : Das erste Element zum Vergleich.
    - `secondEl`
      - : Das zweite Element zum Vergleich.

### Rückgabewert

Das sortierte Array. Beachten Sie, dass das Array {{interwiki("wikipedia","in-place")}} sortiert und keine Kopie angelegt wird.

## Beschreibung

Wenn `compareFunction` nicht angegeben wird, werden alle Arrayelemente, die nicht `undefined` sind, sortiert indem sie in Strings konvertiert werden und in UTF-16-Code-Unit-Reihenfolge verglichen werden. Zum Beispiel steht "banana" vor "cherry". Bei einer numerischen Sortierung kommt 9 vor 80, aber weil Zahlen in Strings konvertiert werden, kommt "80" in Unicode vor "9". Alle Elemente die `undefined` sind werden ans Ende des Arrays sortiert.

> **Hinweis:** In UTF-16 werden Unicode-Zeichen über `\uFFFF` als zwei Ersatzcodeeinheiten im Bereich `\uD800` - `\ uDFFF` codiert. Der Wert jeder Codeeinheit wird für den Vergleich gesondert berücksichtigt. Daher wird das durch das Ersatzpaar `\uD655` `\uDE55` gebildete Zeichen vor dem Zeichen `\uFF3A` sortiert.

Wenn `compareFunction` angegeben wird, werden alle Arrayelemente, die nicht `undefined` sind, nach dem Rückgabewert der Vergleichsfunktion sortiert (alle Elemente die `undefined` sind werden ans Ende des Arrays sortiert, ohne Aufruf von `compareFunction`). Wenn `a` und `b` zwei zu vergleichende Elemente sind, gilt Folgendes:

- Ist `compareFunction(a, b)` kleiner als 0, sortiere `a` auf einen niedrigeren Index als `b`, d. h. `a` kommt zuerst.
- Ist `compareFunction(a, b)` gleich 0, bleibt die Reihenfolge von `a` und `b` in Bezug zueinander unverändert, werden aber im Vergleich zu den restlichen Elementen des Arrays einsortiert. Hinweis: Der ECMAscript Standard garantiert dieses Verhalten nicht. Demzufolge berücksichtigen dies nicht alle Browser (z. B. Mozilla Versionen von 2003 und älter).
- Ist `compareFunction(a, b)` größer als 0, sortiere `b` auf einen niedrigeren Index als `a`, d. h. `b` kommt zuerst.
- `compareFunction(a, b)` muss immer denselben Wert zurückgeben, wenn dasselbe Paar an Argumenten `a` und `b` übergeben wird. Werden inkonsistente Ergebnisse zurückgegeben, ist die Sortierreihenfolge undefiniert.

Die Vergleichsfunktion hat die Form:

```js
function compare(a, b) {
  if (a ist kleiner als b anhand von Sortierkriterien) {
    return -1;
  }
  if (a ist größer als b anhand der Sortierkriterien) {
    return 1;
  }
  // a muss gleich b sein
  return 0;
}
```

Um Nummern anstatt Strings zu vergleichen, kann die Vergleichsfunktion einfach `b` von `a` subtrahieren. Die folgende Funktion sortiert ein Array aufsteigend (sofern kein `Infinity` und `NaN` enthalten):

```js
function compareNumbers(a, b) {
  return a - b;
}
```

Die `sort` Methode kann bequem mit {{jsxref("Operators/function", "Funktionsausdrücken", "", 1)}} benutzt werden:

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

ES2015 bietet {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}} mit noch kürzerer Syntax.

```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

Objekte können anhand der Werte eines ihrer Eigenschaften sortiert werden.

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// Sortieren nach Wert
items.sort(function (a, b) {
  return a.value - b.value;
});

// Sortieren nach Wert
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
  var nameB = b.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // Namen müssen gleich sein
  return 0;
});
```

## Beispiele

### Erstellen, Anzeigen und Sortieren eines Arrays

Im folgenden Beispiel werden vier Arrays erstellt, das ursprüngliche Array angezeigt, danach die sortierten Arrays. Die numerischen Arrays werden erst ohne, dann mit Vergleichsfunktion sortiert.

```js
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
```

Dieses Beispiel erzeugt die folgende Ausgabe. Wie die Ausgabe zeigt, werden Zahlen bei Verwendung einer Vergleichsfunktion korrekt sortiert, ob es sich um Zahlen oder numerische Strings handelt.

    stringArray: Blue,Humpback,Beluga
    Sorted: Beluga,Blue,Humpback

    numberArray: 40,1,5,200
    Sorted without a compare function: 1,200,40,5
    Sorted with compareNumbers: 1,5,40,200

    numericStringArray: 80,9,700
    Sorted without a compare function: 700,80,9
    Sorted with compareNumbers: 9,80,700

    mixedNumericArray: 80,9,700,40,1,5,200
    Sorted without a compare function: 1,200,40,5,700,80,9
    Sorted with compareNumbers: 1,5,9,40,80,200,700

### Sortierung von nicht-ASCII Zeichen

Zum Sortieren von Strings mit Nicht-ASCII-Zeichen, d. h. Zeichenfolgen mit Akzentzeichen (e, é, è, a, ä, etc.), Zeichenfolgen aus anderen Sprachen als Englisch: Verwenden Sie {{jsxref("String.localeCompare")}}. Diese Funktion kann diese Zeichen vergleichen, damit sie in der richtigen Reihenfolge angezeigt werden.

```js
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

### Sortieren mit `map()`

Die `compareFunction` kann mehrmals pro Element innerhalb des Arrays aufgerufen werden. Abhängig von der Beschaffenheit von `compareFunction` kann dies zu einem hohen Overhead führen. Je mehr Arbeit eine `compareFunction` erledigt und je mehr Elemente zu sortieren sind, desto sinnvoller ist es die Verwendung von {{jsxref("Array.prototype.map()", "map()")}} zum Sortieren in Betracht zu ziehen. Die Idee ist, das Array einmal zu durchlaufen, um die tatsächlichen Werte für das Sortieren in ein temporäres Array zu extrahieren, das temporäre Array zu sortieren und dann das temporäre Array zu durchlaufen, um die richtige Reihenfolge zu erreichen.

```js
// Das zu sortierende Array
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Temporäres Array enthält Objekte mit Position und Sortierwert
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// Sortieren des gemappten Arrays mit den reduzierten Werten
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// Behälter für die sich ergebende Reihenfolge
var result = mapped.map(function(el){
  return list[el.index];
});
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar           |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Initiale Definition |
| {{SpecName('ES5.1', '#sec-15.4.4.11', 'Array.prototype.sort')}}                 | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-array.prototype.sort', 'Array.prototype.sort')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-array.prototype.sort', 'Array.prototype.sort')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.sort")}}

## Siehe auch

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- [Informationen zur Stabilität des von der V8-Engine verwendeten Algorithmus](https://v8.dev/blog/array-sort) (Englisch)
