---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String
---
{{JSRef}}

Das globale **`String`**-Objekt ist ein Konstruktor für Strings, auch Zeichenketten genannt.

## Syntax

String-Literale haben folgende Formen:

    'string-text'
    "string-text"
    "中文 español deutsch English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ்"

Strings können auch direkt mit dem globalen `String`-Objekt erzeugt werden:

    String(thing)

### Parameter

- `thing`
  - : Alles, was in einen String umgewandelt werden kann.

### Template-Literale

Ab ECMAScript 2015 können String-Literale auch durch sogenannte [Template-Literale](/de/docs/Web/JavaScript/Reference/template_strings) verkörpert werden:

    `hallo welt`
    `hallo!
     welt!`
    `hallo ${wer}`
    escape `${wer}`

### Escape-Notation

Neben gewöhnlichen, druckbaren Zeichen gibt es Sonderzeichen, die mittels Escape-Notation kodiert werden können:

| Code                     | Ausgabe                                            |
| ------------------------ | -------------------------------------------------- |
| `\0`                     | das NULL-Zeichen                                   |
| `\'`                     | einfaches Anführungszeichen                        |
| `\"`                     | doppeltes Anführungszeichen                        |
| `\\`                     | Rückwärtsschrägstrich (backslash)                  |
| `\n`                     | Zeilenumbruch (new line)                           |
| `\r`                     | Zeilenanfang (carriage return)                     |
| `\v`                     | vertikaler Tabulator                               |
| `\t`                     | Tabulator                                          |
| `\b`                     | Backspace                                          |
| `\f`                     | Seitenvorschub (form feed)                         |
| `\uXXXX`                 | Unicode-Codepoint                                  |
| `\u{X}` ... `\u{XXXXXX}` | Unicode-Codepoint {{experimental_inline}} |
| `\xXX`                   | Latin-1-Zeichen                                    |

> **Note:** Im Gegensatz zu einigen anderen Sprachen unterscheidet JavaScript nicht zwischen mit einfachen und doppelten Anführungszeichen versehenen Strings; deswegen funktionieren die obigen Escape-Sequenzen in Strings, die entweder mit einfachen oder doppelten Anführungszeichen erstellt wurden.

### Lange String-Literale

Manchmal enthält der Programm-Code Strings, die sehr lang sind. Anstatt endlose Zeilen zu bewirken, die vielleicht am Rand des Editors umbrechen, kann ein String ausdrücklich in mehrere Zeilen im Quell-Code eingepasst werden, ohne seinen Inhalt zu beeinflussen. Es gibt zwei Arten, um das zu tun.

Es kann der [+](</de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_()>)-Operator benutzt werden, um auf folgende Weise mehrere Strings aneinanderzuhängen:

```js
let langerString = "Dies ist ein sehr langer String, der über " +
                 "mehrere Zeilen verteilt werden muss, weil " +
                 "sonst der Code unleserlich ist.";
```

Oder der Rückwärtsschrägstrich ("\\") wird am Ende jeder Zeile benutzt, um anzugeben, dass der String in der nächsten Zeile weitergeht. Es sollte sichergestellt werden, dass nach dem Rückwärtsschrägstrich (backslash) kein Leer- oder ein anderes Zeichen (außer ein Zeilenumbruch) steht oder als Einrückung dient; sonst funktioniert es nicht. Diese Form sieht wie folgt aus:

```js
let langerString = "Dies ist ein sehr langer String, der über \
mehrere Zeilen verteilt werden muss, weil \
sonst der Code unleserlich ist.";
```

Beide Arten erzeugen identische Strings.

## Beschreibung

Strings sind nützlich, um Daten in Textform zu speichern. Manche der meist benutzten String-Operationen sind es, die {{jsxref("String.length", "length")}} abzufragen, Strings mittels [+ und += String-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) zu verbinden, mit der {{jsxref("String.prototype.indexOf()", "indexOf()")}} -Methode die Existenz oder Position von Sub-Strings festzustellen oder Sub-Strings mit der {{jsxref("String.prototype.substring()", "substring()")}}-Methode zu extrahieren.

### Zeichenabfrage

Es gibt zwei Möglichkeiten auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String.prototype.charAt()", "charAt()")}}-Methode:

```js
return 'Katze'.charAt(1); // gibt "a" zurück
```

Die andere Möglichkeit (eingeführt in ECMAScript 5) ist, den String als ein Array-ähnliches Objekt zu behandlen, in dem einzelne Zeichen zu einem numerischen Index gehören:

```js
return 'Katze'[1]; // gibt "a" zurück
```

Bei einen Zeichenzugriff mittels Klammernotation ist es nicht möglich, einen Wert zu löschen oder zuzuweisen. Die entsprechenden Eigenschaften sind weder überschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für mehr Informationen.)

### Strings vergleichen

C-Entwicklern steht die `strcmp()`-Funktion zur Verfügung, um Strings zu vergleichen. In JavaScript können die [kleiner-als- und größer-als-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Vergleichsoperatoren) benutzt werden:

```js
var a = 'a';
var b = 'b';
if (a < b) { // true
  console.log(a + ' ist geringer als ' + b);
} else if (a > b) {
  console.log(a + ' ist größer als ' + b);
} else {
  console.log(a + ' und ' + b + ' sind gleich.');
}
```

Ein ähnliches Ergebnis kann durch die {{jsxref("String.prototype.localeCompare()", "localeCompare()")}}-Methode erzielt werden, die von `String`-Instanzen übernommen wird.

### Unterscheidung von String-Primitives und `String`-Objekten

Es ist zu betonen, dass JavaScript zwischen `String`-Objekten und primitiven String-Werten unterscheidet. (Das selbe gilt für {{jsxref("Boolean")}} und {{jsxref("Global_Objects/Number", "Numbers")}}.)

String-Literale (definiert mit doppelten oder einfachen Anführungszeichen) und Strings, die von` String`-Aufrufen in einem Nicht-Konstruktor-Kontext (z. B. ohne das {{jsxref("Operators/new", "new")}}-Schlüsselwort zu benutzen) zurückgegeben werden, sind String-Primitives. JavaScript wandelt automatisch Primitives zu `String`-Objekten um, so dass es möglich ist `String`-Objekt-Methoden für String-Primitives zu nutzen. In Kontexten, in denen eine Methode auf ein String-Primitive bezogen aufgerufen oder eine Eigenschaft eines solchen abgefragt wird, sorgt JavaScript dafür, dass das String-Primitive wie ein Objekt behandelt wird.

```js
var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Loggt "string"
console.log(typeof s_obj);  // Loggt "object"
```

String-Primitives und `String`-Objekte führen auch bei der Nutzung von {{jsxref("Global_Objects/eval", "eval()")}} zu unterschiedlichen Ergebnissen. An `eval` übergebene Primitives werden als Quell-Code behandelt; bei `String`-Objekten wird wie bei allen anderen Objekten das Objekt zurückgegeben. Zum Beispiel:

```js
var s1 = '2 + 2';             // erzeugt ein String-Primitive
var s2 = new String('2 + 2'); // erzeugt ein String-Objekt
console.log(eval(s1));        // gibt die Zahl 4 zurück
console.log(eval(s2));        // gibt den String "2 + 2" zurück
```

Aus diesen Gründen kann Code aufhören zu funktionieren, wenn er `String`-Objekte bemerkt, obwohl ein String-Primitive erwartet wird. Trotzdem brauchen sich Autoren normalerweise nicht um diesen Unterschied zu kümmern.

Ein `String`-Objekt kann mit der {{jsxref("String.prototype.valueOf()", "valueOf()")}}-Methode immer zu seiner Primitive-Entsprechung konvertiert werden.

```js
console.log(eval(s2.valueOf())); // gibt die Zahl 4 zurück
```

> **Note:** **Bemerkung:** Für ein weiteres mögliches Herantreten an Strings in JavaScript sollte der Artikel über [`StringView` — eine C-ähnliche Representation von Strings basierend auf typisierten Arrays](/en-US/Add-ons/Code_snippets/StringView) gelesen werden.

## Eigenschaften

- {{jsxref("String.prototype")}}
  - : Ermöglicht das Hinzufügen von Eigenschaften zu einem `String`-Objekt.

## Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der auf Basis der angegebenen Folge von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der auf Basis der angegebenen Folge von Code-Points erstellt wurde.
- {{jsxref("String.raw()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der auf Basis eines Raw-Template-Strings erstellt wurde.

## Generische `String`-Methoden

> **Warning:** **Generische String-Methoden sind nicht Teil des Standards und werden in naher Zukunft entfernt**.

Die `String`-Instanzmethoden stehen nach JavaScript 1.6 (**nicht** Teil des ECMAScript-Standards) auch in Firefox beim `String`-Objekt zur Verfügung, um `String`-Methoden auf ein beliebiges Objekt anzuwenden:

```js
var num = 15;
console.log(String.replace(num, /5/, '2'));
```

Über die Auflösung von generischen String-Methoden: [Warning: String.x is deprecated; use String.prototype.x instead](/de/docs/Web/JavaScript/Reference/Errors/Deprecated_string_generics).

{{jsxref("Global_Objects/Array", "Generics", "#Array_generic_methods", 1)}} stehen auch bei {{jsxref("Array")}}-Methoden zur Verfügung.

## `String`-Instanzen

### Eigenschaften

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype', 'Properties')}}

### Methoden

#### Nicht HTML-bezogene Methoden

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype', 'Methods_unrelated_to_HTML')}}

#### HTML-Wrapper-Methoden

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype', 'HTML_wrapper_methods')}}

## Beispiele

### String-Konvertierung

Es ist möglich, `String` als eine "sicherere" {{jsxref("String.prototype.toString()", "toString()")}}-Alternative zu benutzen, auch, wenn es gewöhnlich weiterhin das zugrundeliegende `toString()` aufruft. Es funktioniert auch für {{jsxref("null")}}, {{jsxref("undefined")}} und {{jsxref("Symbol", "symbols")}}. Zum Beispiel:

```js
var ausgabeStrings = [];
for (var i = 0, n = eingabeWerte.length; i < n; ++i) {
  ausgabeStrings.push(String(eingabeWerte[i]));
}
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Anmerkung              |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Anfängliche Definition |
| {{SpecName('ES5.1', '#sec-15.5', 'String')}}                 | {{Spec2('ES5.1')}}     |                        |
| {{SpecName('ES2015', '#sec-string-objects', 'String')}}     | {{Spec2('ES2015')}}     |                        |
| {{SpecName('ESDraft', '#sec-string-objects', 'String')}} | {{Spec2('ESDraft')}} |                        |

## Browser-Kompatibilität

{{Compat("javascript.builtins.String.String")}}

## Siehe außerdem

- {{domxref("DOMString")}}
- [`StringView` — eine C-ähnliche Representation von Strings basierend auf typisierten Arrays](/en-US/Add-ons/Code_snippets/StringView)
- [Binäre Strings](/de/docs/Web/API/DOMString/Binary)
