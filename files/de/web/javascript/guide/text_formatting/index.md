---
title: Textformatierung
slug: Web/JavaScript/Guide/Text_formatting
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Text_formatting
original_slug: Web/JavaScript/Guide/Textformatierung
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}

Dieses Kapitel gibt eine Einführung darüber, wie in JavaScript mit Strings (Zeichenfolgen) und Texten gearbeitet wird.

## Strings

JavaScript's Datentyp {{Glossary("String")}} wird verwendet, um textuelle Daten zu repräsentieren. Es handelt sich um eine Reihe von Elementen, die ganzzahlige 16-Bit-Werte ohne Vorzeichen (UTF-16 Code Units) sind. Jedes Element belegt eine Position im String. Das erste Element befindet hat den Index 0, das nächste den Index 1 usw. Die Länge des Strings ist die Anzahl der Elemente, die darin enthalten sind. Strings können über String-Literale oder String-Objekte erzeugt werden.

ACHTUNG: Beim Bearbeiten dieser Seite keine Zeichen mit Zeichencode größer als U+FFFF einfügen, bis MDN bug 857438 behoben wurde ( <https://bugzilla.mozilla.org/show_bug.cgi?id=857438> ).

### String Literale

Einfache Strings können mittels einfacher oder doppelter Anführungszeichen erzeugt werden:

```js
'foo'
"bar"
```

Anspruchsvollere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach `\x` wird als hexadecimale Zahl interpretiert.

```js
'\xA9' // "©"
```

#### Unicode Escape-Sequenzen

Unicode Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js
'\u00A9' // "©"
```

#### Unicode Code Point Escapes

Diese sind neu in ECMAScript 2015. Mit Unicode Code Point Maskierung können beliebige Zeichen durch Maskierungssequenzen mit hexadezimalen Zahlen erzeugt werden, sodass die Verwendung von Unicode Code Points bis zu `0x10FFFF` möglich ist. Mit einfachen Unicode Maskierungssequenz ist es oft notwendig, Surrogate-Hälften als zwei getrennte Maskierungssequenzen zu schreiben, um dasselbe Ergebnis zu erhalten.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js
'\u{2F804}'

// das gleiche mit einfachen Unicode Escape-Sequenzen
'\uD87E\uDC04'
```

### String Objekte

Das {{jsxref("String")}} Objekt ist ein Wrapper für den primitiven Datentyp String.

```js
var s = new String('foo'); // Erstellt ein String object
console.log(s); // Ausgabe: {'0': 'f', '1': 'o', '2': 'o'}
typeof s; // Gibt 'object' zurück
```

Beliebige Methoden des `String` Objekts können als Methoden eines String-Literals aufgerufen werden – JavaScript wandelt das String-Literal automatisch in ein temporäres `String` Objekt um, ruft die Methode auf und verwirft das temporäre `String` Objekt anschließend. Außerdem kann die `String.length` Eigenschaft mit einem String-Literal verwendet werden.

String-Literale sollten verwendet werden, außer es wird tatsächlich ein `String` Objekt benötigt, da `String` Objekte unerwartetes Verhalten aufweisen können. Beispielsweise:

```js
var s1 = '2 + 2'; // Erzeugt ein String-Literal
var s2 = new String('2 + 2'); // Erzeugt ein String Objekt
eval(s1); // Gibt die Zahl 4 zurück
eval(s2); // Gibt den String "2 + 2" zurück
```

Ein `String` Objekt hat eine Eigenschaft `length`, die die Anzahl von der UTF-16 Code Units im String angibt. Der folgende Code beispielsweise weist der Variable `x` den Wert 13 zu, da "Hello, World!" aus 13 Zeichen besteht. Jedes dieser Zeichen wird durch eine UTF-16 Code Unit dargestellt. Auf jede dieser Code Units kann durch eckige Klammern zugegriffen werden. Es können jedoch keine Zeichen geändert werden, da Strings unveränderbare Array-ähnliche Objekte sind:

```js
var mystring = 'Hello, World!';
var x = mystring.length;
mystring[0] = 'L'; // hat keinen Effekt
mystring[0]; // gibt "H" zurück
```

Zeichen mit einem Unicode-Wert größer als U+FFFF (wie z.B. manche seltene chinesiche/japanische/koreanische/vietnamesische Zeichen und einige Emoji) werden in UTF-16 als zwei Surrogate Code Units gespeichert. Ein String, der nur aus einem Zeichen, U+1F600 ("Emoji grinning face"), besteht, hätte die Länge 2. Der Zugriff auf einzelne Code Units in einem solchen String kann zu unerwünschten Effekten führen, wie z.B. die Entstehung von String mit unvollständigen Surrogate Code Units, was gegen den Unicode Standard verstößt. (Beispiele dafür sollten zu dieser Seite hinzugefügt werden, sobald MDN bug 857438 behoben wurde.) Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

Ein `String` Objekt verschiedenste Methoden, unter anderem auch welche, die den String in abgewandelter Form zurückgeben, wie z.B. `substring` und `toUpperCase`.

Die folgende Tabelle gibt eine Zusammenfassung der Methoden von {{jsxref("String")}} Objekten.

| Methode                                                                                                                                                                          | Beschreibung                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}} | Gibt das Zeichen oder den Zeichencode an der angegebenen Stelle im String zurück.                                                                             |
| {{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}                                                           | Gibt die erste bzw. letzte Position des angegebenen Teilstrings im String zurück.                                                                             |
| {{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}} | Gibt zurück, ob ein String mit dem angegebenen Teilstring beginnt, endet oder den Teilstring enthält.                                                         |
| {{jsxref("String.concat", "concat")}}                                                                                                                                 | Fügt die beiden Strings zusammen und gibt diesen neuen String zurück.                                                                                         |
| {{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}                                           | Erstellt einen String aus den angegebenen Unicode Codes. Es handelt sich um eine Methode der Klasse String, nicht die einer String Instanz.                   |
| {{jsxref("String.split", "split")}}                                                                                                                                 | Teilt ein `String` Objekt in ein Array von Teilstrings.                                                                                                       |
| {{jsxref("String.slice", "slice")}}                                                                                                                                 | Gibt einen Ausschnitt des Strings als neuen String zurück.                                                                                                    |
| {{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}                                                                       | Gibt einen Ausschnitt des Strings zurück, der entweder durch Angabe der Start- und Endindizes oder durch Angabe des Startindex und einer Länge gebildet wird. |
| {{jsxref("String.match", "match")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}}                         | Verwendet Regular Expressions um Übereinstimmungen mit einem Suchmuster zu finden oder Teile des Strings zu ersetzen.                                         |
| {{jsxref("String.toUpperCase", "toUpperCase")}}, {{jsxref("String.toLowerCase", "toLowerCase")}}                                               | Wandelt einen String in Groß- bzw Kleinschreibung um und gibt das Ergebnis als neuen String zurück.                                                           |
| {{jsxref("String.normalize", "normalize")}}                                                                                                                         | Gibt die Unicode Normalization Form des Strings zurück.                                                                                                       |
| {{jsxref("String.repeat", "repeat")}}                                                                                                                                 | Gibt einen String zurück, in dem der ursprüngliche String mehrfach aneinandergereiht wurde.                                                                   |
| {{jsxref("String.trim", "trim")}}                                                                                                                                     | Entfernt Leerzeichen vom Anfang und vom Ende des Strings.                                                                                                     |

### Mehrzeilige Template-Strings

[Template-Strings](/de/docs/Web/JavaScript/Reference/template_strings) sind String-Symbole, die eingebettete Ausdrücke erlauben. Mit diesen Ausdrücken können mehrzeilige Strings und String-Interpolation genutzt werden.

Template-Strings sind anstelle von doppelten bzw. einfachen Anführungszeichen in _Back-Ticks_ (\` \`) ([grave accent](http://en.wikipedia.org/wiki/Grave_accent)) eingeschlossen. Template-Strings können Platzhalter beinhalten, die durch das Dollarsymbol gefolgt von geschweiften Klammern gekennzeichnet sind (`${expression}`).

#### Mehrzeilige Strings

Alle Zeichen, die einen Zeilenumbruch einleiten und sich zwischen Back-Ticks befinden, werden als Teil des Template Strings verwendet. Bei normalen Strings muss die folgende Syntax genutzt werden, um Strings mit Zeilenumbrücken über mehrere Codezeilen zu definieren:

```js
console.log('string text line 1\n\
string text line 2');
// "string text line 1
// string text line 2"
```

Um dasselbe Ergebnis mit Template-Strings zu erreichen, kann die folgende Schreibweise genutzt werden:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Erweiterung von Ausdrücken

Um Ausdrücke in normale Strings einzufügen, müsste die folgende Syntax genutzt werden:

```js
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

Mit Template-Strings können nun die syntaktischen Vorteile genutzt werden um solche Ersetzungen leserlicher zu machen:

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Mehr Informationen sind unter [Template-Strings](/de/docs/Web/JavaScript/Reference/template_strings) in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) nachzulesen.

## Internationalization

Das {{jsxref("Intl")}} Objekt ist der Namespace für das ECMAScript Internationalization API, welches sprachabhängige String-Vergleiche, Zahlen-, Datums- und Uhrzeitformate bereitstellt. Die Konstruktoren für {{jsxref("Collator")}}, {{jsxref("NumberFormat")}} und {{jsxref("DateTimeFormat")}} Objekte sind Eigenschaften des `Intl` Objekts.

### Datums- und Uhrzeitformatierung

Das {{jsxref("DateTimeFormat")}} Objekt hilft bei der Datums- oder Uhrzeitformatierung. Im folgenden Beispiel wird ein Datum für amerikanisches Englisch formatiert. (Das Ergebnis variiert je nach eingestellter Zeitzone.)

```js
var msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
var americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### Zahlenformatierung

Das {{jsxref("NumberFormat")}} Objekt hilft bei der Formatierung von Zahlen, wie z.B. Währungen.

```js
var gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### Sortierung

Das {{jsxref("Collator")}} Objekt hilft beim Vergleichen und Sortieren von Strings.

Zum Beispiel gibt es im Deutschen zwei unterschiedliche Sortierreihenfolgen: Telefonbuchsortierung und Wörterbuchsortierung. Bei der Telefonbuchsortierung werden "ä", "ö" etc. so sortiert, als ob es sich um "ae", "oe" etc. handeln würde.

```js
var names = ['Hochberg', 'Hönigswald', 'Holzman'];

var germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"
```

Bei manchen Beugungsformen wird ein Vokal zu einem Umlaut, daher ist es sinnvoll, Wörterbücher so zu sortieren, dass Vokale und Umlaute gleich sortiert werden. Bei der Sortierung wird dann also "ä" wie "a" und "ö" wie "o" sortiert. Eine Ausnahme stellen Wörter dar, die sich nur im Umlaut unterscheiden. In solchen Fällen wird der Vokal vor dem Umlaut gereiht (z.B. _schon_ vor _schön_).

```js
var germanDictionary = new Intl.Collator('de-DE-u-co-dict');

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"
```

Mehr Informationen über das {{jsxref("Intl")}} API können unter [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/) (in Englisch) nachgelesen werden.

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}
