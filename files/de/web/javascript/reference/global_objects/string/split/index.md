---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
translation_of: Web/JavaScript/Reference/Global_Objects/String/split
---
{{JSRef}}

Die **`split()`** Methode teilt ein {{jsxref("String")}} Objekt in ein Array von Strings auf, indem der String in Teilstrings zerteilt wird, wobei ein angegebenes Trennzeichen verwendet wird, um zu bestimmen, wo die Aufteilung erfolgen soll.

{{EmbedInteractiveExample("pages/js/string-split.html")}}

## Syntax

    str.split([separator[, limit]])

> **Warning:** Achtung: Wenn leerer ein String ("") als Trennzeichen verwendet wird, wird der String **nicht** zwischen jedem _vom Benutzer wahrgenommenen Zeichen_ ([Graphem-Cluster](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) oder zwischen jedem Unicode-Zeichen (Codepoint) aufgeteilt, sondern zwischen jeder UTF-16-Codeeinheit. Dadurch werden [Ersatzpaare](http://unicode.org/faq/utf_bom.html#utf16-2) (surrogate pairs) zerstört. Siehe auch [How do you get a string to a character array in JavaScript?](https://stackoverflow.com/a/34717402) auf Stack Overflow.

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, der die Punkte angibt, an denen jede Aufteilung erfolgen soll. `separator` wird als Zeichenfolge oder als {{jsxref("Global_Objects/RegExp", "regulärer Ausdruck", "", 1)}} behandelt. Wenn ein Nur-Text `separator` mehr als ein Zeichen enthält, muss der gesamte String gefunden werden, damit eine Trennung erfolgt. Wenn `separator` nicht angegeben wird oder in `str` nicht vorkommt, enthält das zurückgegebene Array ein Element, das den gesamten String enthält. Wenn `separator` ein leerer String ist, wird jedes Zeichen von `str` in ein Array-Element umgewandelt.
- `limit` {{optional_inline}}
  - : Ganzzahl, die ein Limit für die Anzahl der zu findenden Splits angibt. Wenn dieser Parameter angegeben wird, teilt die `split()` Methode die Zeichenfolge bei jedem Vorkommen des angegebenen `separator` auf, stoppt jedoch, nachdem die Anzahl von `limit` erreicht wurde. Es können immer noch weniger Einträge als `limit` enthalten sein, wenn das Ende des Strings erreicht wurde, bevor das angegebene Limit erreicht wird. Der übrig gebliebene Text wird im neuen Array nicht enthalten sein.

### Rückgabewert

Ein {{jsxref("Array")}} mit Strings, welcher an jedem Punkt aufgeteilt wurde, an dem das Trennzeichen in der angegebenen Zeichenfolge aufgetreten ist.

## Beschreibung

Wenn gefunden, wird `separator` aus dem String entfernt und die Teilstrings werden in einem Array zurückgegeben. Wenn `separator` nicht gefunden oder weggelassen wird, enthält das Array ein Element, das aus dem gesamten String besteht. Wenn `separator` ein leerer String ist, wird `str` in ein Array aus Zeichen umgewandelt. Wenn `separator` am Anfang, Ende oder Anfang und Ende eines Strings gefunden wird, beginnt, endet oder beginnt und endet das Array mit einem leeren String. Besteht ein String daher nur aus einem einzigen Vorkommnis von `separator` besteht, besteht das Array also aus zwei leeren Strings.

Wenn `separator` ein regulärer Ausdruck ist, der runde Klammern enthält, werden die Ergebnisse (einschließlich etwaiger undefinierter Ergebnisse) der Klammern bei jeder Übereinstimmung von `separator` in das ausgegebene Array eingefügt.

> **Note:** **Hinweis:** Wenn `separator` ein Array ist, wird das Array in einen String umgewandelt und als Trennzeichen verwendet.

> **Note:** **Hinweis:** Wenn der String leer ist, gibt `split()` ein Array zurück, das einen leeren String anstelle eines leeren Arrays enthält. Wenn sowohl der String als auch das Trennzeichen leere Zeichenfolgen sind, wird ein leeres Array zurückgegeben.

## Beispiele

### Verwendung von `split()`

Im folgenden Beispiel wird eine Funktion definiert, die einen String mithilfe des angegebenen Trennzeichens in ein Array aus Strings aufteilt. Nach dem Aufteilen des Strings protokolliert die Funktion Meldungen, die den ursprüngliche String angeben (vor der Aufteilung), das verwendete Trennzeichen, die Anzahl der Elemente im Array und die einzelnen Arrayelemente.

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

Das Beispiel erzeugt den folgende Ausgabe:

```js
The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it.

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### Leerzeichen aus einem String entfernen

Im folgenden Beispiel sucht `split()` nach 0 oder mehr Leerzeichen, gefolgt von einem Semikolon und 0 oder mehr Leerzeichen. Wenn es sie findet, entfernt es die Leerzeichen aus dem String. `nameList` ist das Array, was als Ergebnis von `split() zurückgegeben wird`.

```js
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
```

Dies protokolliert zwei Zeilen. Die erste Zeile protokolliert die ursprüngliche Zeichenfolge und die zweite Zeile das resultierende Array.

    Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
    [ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]

### Eine begrenzte Anzahl von Trennungen zurückgeben

Im folgenden Beispiel sucht `split()` nach 0 oder mehr Leerzeichen im String und gibt die ersten 3 Treffer zurück, die es findet.

```js
var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);
```

Dieses Skript gibt folgendes aus:

    ["Hello", "World.", "How"]

### Teilen mit einer `RegExp`, um Teile des Trennzeichens in das Ergebnis aufzunehmen

Wenn `separator` ein regulärer Ausdruck ist, der runde Klammern `()` enthält, werden übereinstimmende Ergebnisse in das Array aufgenommen.

```js
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/(\d)/);

console.log(splits);
```

Dieses Skript gibt folgendes aus:

```js
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

### Teilen mit einem Array als Trennzeichen

```js
var myString = 'this|is|a|Test';
var splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

var myString = 'ca,bc,a,bca,bca,bc';

var splits = myString.split(['a','b']);
// myString.split(['a','b']) ist dasselbe wie myString.split(String(['a','b']))

console.log(splits);  //["c", "c,", "c", "c", "c"]
```

### Einen String mit `split()` umkehren

> **Warning:** Dies ist keine robuste Art einen String umzukehren.`js var str = 'asdfghjkl'; var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa' // split() returns an array on which reverse() and join() can be applied `Das funktioniert nicht, wenn der String Graphem-Cluster enthält, selbst wenn ein Unicode-fähiger Split verwendet wird (verwenden Sie stattdessen bspw. [esrever](https://github.com/mathiasbynens/esrever)).```js
> var str = 'résumé';
> var strReverse = str.split(/(?:)/u).reverse().join('');
> // => "́emuśer"
>
> ```**Bonus:** Verwenden Sie sen {{jsxref("Operators/Comparison_Operators", "===", "#Identity_.2F_strict_equality_(.3D.3D.3D)")}} Operator um zu testen, ob der ursprüngliche String ein Palindrom war.
>
> ```

## Spezifikationen

| Specification                                                                                                | Status                       | Comment                                               |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.14', 'String.prototype.split')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.split', 'String.prototype.split')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.String.split")}}

## Siehe auch

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
