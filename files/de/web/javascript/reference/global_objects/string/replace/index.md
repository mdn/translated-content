---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
  - Expressions
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/replace
---
{{JSRef}}
Die **`replace()`**-Methode gibt eine neue Zeichenkette zurück, in der einige oder alle Übereinstimmungen mit einem `Muster` durch einen `Ersatz` ausgetauscht wurden. Das `Muster` kann eine Zeichenkette oder eine RegExp sein, als `Ersatz`dienen eine Zeichenkette oder eine Funktion, welche für jede Übereinstimmung aufgerufen wird.

## Syntax

    str.replace(regexp|substr, newSubStr|function);

### Parameter

- `regexp`
  - : Ein {{jsxref("Global_Objects/RegExp", "RegExp")}}-Objekt. Die Übereinstimmung wird durch den Rückgabewert aus Parameter #2 ersetzt.

- `substr`
  - : Eine {{jsxref("Global_Objects/String", "Zeichenkette")}}, welche durch `newSubStr` ersetzt werden soll. Nur das erste Vorkommen wird ersetzt.

- `newSubStr`
  - : Die {{jsxref("Global_Objects/String", "Zeichenkette")}}, welche den Substring aus Parameter #1 ersetzt. Eine Anzahl spezieller Ersetzungsmuster wird unterstützt, siehe den "[Eine Zeichenkette als Parameter angeben](#Eine_Zeichenkette_als_Parameter_angeben)"-Abschnitt weiter unten.

- `function`
  - : Eine Funktion, welche aufgerufen wird, um den neuen Substring zu erzeugen, der an Stelle des gefundenen Substrings aus Parameter #1 stehen soll. Die Argumente für diese Funktion werden im "[Eine Funktion als Parameter angeben](#Eine_Funktion_als_Parameter_angeben)"-Abschnitt unten erläutert.

### Rückgabe

Eine neue Zeichenkette, in der einige oder alle Übereinstimmungen mit einem Muster durch einen Ersatz ausgetauscht wurden.

## Beschreibung

Diese Methode ändert nicht das `String`-Objekt, auf welchem sie aufgerufen wird. Sie gibt lediglich einen neuen String zurück.

Um ein globales Suchen und Ersetzen durchzuführen, setzen Sie den `g`-Umschalter im Regulären Ausdruck.

### Eine Zeichenkette als Parameter angeben

Die Ersatzzeichenkette kann folgende spezielle Ersetzungsmuster beinhalten:

| Pattern  | Inserts                                                                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Fügt ein "$" ein.                                                                                                                                                       |
| `$&`     | Fügt den gefundenen Substring ein.                                                                                                                                      |
| `` $` `` | Fügt den Stringteil vor dem gefundenen Substring ein.                                                                                                                   |
| `$'`     | Fügt den Stringteil nach dem gefundenen Substring ein.                                                                                                                  |
| `$n`     | Mit `n` als nicht negative ganze Zahl kleiner als 100 wird der \_n_te eingeklammerte Submatch-String eingefügt, der im ersten Argument in der `RegExp` angegeben wurde. |

### Eine Funktion als Parameter angeben

Sie können eine Funktion als zweiten Parameter angeben. In diesem Fall wird diese Funktion aufgerufen, nachdem die Suche ausgeführt wurde. Der Rückgabewert der Funktion wird als Ersatz eingesetzt. (Anmerkung: Die oben genannten speziellen Ersetzungsmuster werden in diesem Fall _nicht_ beachtet.) Bedenken Sie, dass die Funktion für jede Übereinstimmung erneut aufgerufen wird, wenn der reguläre Ausdruck im ersten Parameter den global-Flag gesetzt hat.

Die Argumente dieser Funktion lauten wie folgt:

| Möglicher Name | Gelieferter Wert                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`        | Der gefundene Substring. (Entspricht $& oben.)                                                                                                                                                                                                      |
| `p1, p2, ...`  | Der \_n_th eingeklammerte Submatch-String, fall im ersten Argument ein `RegExp-Objekt` angegeben wurde. (Entspricht $1, $2, etc. oben.) Wurde zum Beispiel `/(\a+)(\b+)/ angegeben, so ist` `p1` die Übereinstimmung für`\a+`, und `p2` für `\b+`. |
| `offset`       | Die Position, an welcher der gefundene Substring innerhalb der gesamten Zeichenkette gefunden wurde. War zum Beispiel die gesamte Zeichenkette `"abcd"` und der gefundene Substring `"bc"`, dann wäre das Argument `1`.)                            |
| `string`       | Die gesamte Zeichenkette, welche durchsucht wird.                                                                                                                                                                                                   |

(Die genaue Anzahl der Argumente hängt davon ab, ob das erste Argument eine `RegExp` war und wieviele eingeklammerte Submatches in diesem Fall angegeben wurden.)

Das folgende Beispiel wird `newString`auf `"abc - 12345 - #$*%"` setzen:

```js
function replacer(match, p1, p2, p3, offset, string){
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
```

## Beispiele

### Beispiel: Definieren des regulären Ausdrucks in `replace`

Globales Ersetzen kann nur mit einem regulären Ausdruck durchgeführt werden. Im folgenden Beispiel wird der reguläre Ausdruck in `replace` definiert und beinhaltet den Schalter `ignore case`.

```js
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
print(newstr);
```

Dies erzeugt die Ausgabe "Twas the night before Christmas..."

### Beispiel: Nutzung von `global` und `ignore` mit `replace`

Das nachfolgende Beispiel enthält einen regulären Ausdruck, der sowohl das `global` als auch das `ignore` Flag gesetzt hat. Dadurch wird von `replace` jedes Vorkommnis von 'apples' in der Zeichenkette durch 'oranges' ersetzt.

```js
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
print(newstr);
```

Dies erzeugt die Ausgabe "oranges are round, and oranges are juicy."

### Beispiel: Vertausche Wörter in Strings

Im folgenden Skript werden die Wörter in dem String getauscht. Für die Vertauschung im Text nutzt das Skript die Ersetzungspatterns `$1` und `$2`.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
print(newstr);
```

Die Ausgabe ist: "Smith, John".

### Beispiel: Nutzung von Inline-Funktionen, die die erkannten Zeichen modifizieren

In diesem Beispiel werden alle Großbuchstaben durch einen Bindestrich und den entsprechenden Kleinbuchstaben ersetzt. Der wichtige Punkt in dem Beispiel ist, dass der Additions-Operator (Konkatination) vor dem Zurückgeben der neuen Zeichenkette erfolgen muss.

Die Ersetzungsfunktion bekommt das erkannte Muster als Parameter übergeben und benutzt diesen, um den Buchstaben zu transformieren und ihn mit dem Bindestrich zu verbinden. Zum Schluss wird das Ergebnis zum Ersetzen zurückgegeben.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Gegeben `styleHyphenFormat('borderTop')`, gibt 'border-top' zurück.

Weil das Ergebnis transformiert werden soll, bevor die finale Ersetzung durchgeführt wird, muss eine Funktion eingesetzt werden. Dieses erzwingt die Ausführung von `toLowerCase()`. Wenn man das gleiche versucht ohne eine Funktion zu benutzen, wird die toLowerCase() Methode ohne Wirkung sein.

```js
var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work
```

Dieses ist weil `'$&'.toLowerCase()` ausgeführt wird, bevor der String als Pattern genutzt wird.

### Beispiel: Grad Fahrenheit in Celsius-Grad umwandeln

Das folgende Beispiel ersetzt einen Wert in Grad Fahrenheit durch den entsprechenden Celsius-Wert. Der Fahrenheitwert sollte eine Nummer sein, die mit einem F endet. Die Funktion gibt eine Celsius-Temperatur mit der Endung C aus. Ist zum Beispiel der Eingabewert 212F, so gibt die Funktion 100C zurück. Ist die Nummer 0F, so wird -17,77777777777778C zurück gegeben.

Der reguläre Ausdruck `test` prüft jede Nummer, die mit F endet. Die Nummer in Grad Fahrenheit ist durch den zweiten Funktionsparameter, `p1`, ansprechbar. Die Funktion setzt den Celsiuswert basierend auf dem Fahrenheitwert in einer Zeichenkette in der `f2c`-Funktion. `f2c gibt dann den Celsiuswert zurück. Diese Funktion`ähnelt dem s///e-Flag in Perl.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Beispiel: Verwenden einer inline-Funktion mit einem regulärem Ausdruck um Schleifen zu vermeiden

Das folgende Beispiel nimmt eine Zeichenkettenmuster und konvertiert es in ein Array von Objekten.

**Eingabe:**
Eine Zeichenkette, die aus den Zeichen x, - und \_ besteht

    x-x_
    x---x---x---x---
    x-xxx-xx-x-
    x_x_x___x___x___

**Ausgabe:**Ein Array mit Objekten. Ein 'x' zeigt einen 'an'-Status an, ein '-' (Bindestrich) symbolisiert einen 'aus'-Status und ein '\_' (Unterstrich) gibt die Länge des 'an'-Status an.

```json
[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]
```

**Ausschnitt:**

```js
var str = 'x-x_';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2){
  if(p1) retArr.push({ on: true, length: p1.length });
  if(p2) retArr.push({ on: false, length: 1 });
});

console.log(retArr);
```

Der Ausschnitt generiert ein Array mit drei Objekten im gewünschten Format, ohne eine Schleife zu verwenden.

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.4.11', 'String.prototype.replace')}}                         | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-string.prototype.replace', 'String.prototype.replace')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-string.prototype.replace', 'String.prototype.replace')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat}}

## Firefox-spezifische Bemerkungen

- Mit dem Start von Gecko 27 {{geckoRelease(27)}}, wurde diese Methode an die ECMAScript Spezifikation angepasst. Wenn `replace()` mit einem globalen regulären Ausdruck aufgerufen wird, wird die {{jsxref("RegExp.lastIndex")}} Eigenschaft (wenn sie Spezifiziert wurde) auf 0 zurückgesetzt ({{bug(501739)}}).
- Mit dem Start von Gecko 39 {{geckoRelease(39)}} wurden das nicht standardisierte `flags` Argument als deprecated markiert und wirft eine Warnung in der Konsole ({{bug(1142351)}}).
- Mit dem Start von Gecko 47 {{geckoRelease(47)}} wurden das nicht standardisierte `flags` Argument nicht länger in Nicht-Release-Builds unterstützt und wird bald vollständig entfernt ({{bug(1245801)}}).
- Mit dem Start von Gecko 49 {{geckoRelease(49)}} wurden das nicht standardisierte `flags` Argument nicht mehr unterstützt ({{bug(1108382)}}).

## Siehe auch

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
