---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - JavaScript
  - Keyword
  - Lexical Grammer
  - Literal
translation_of: Web/JavaScript/Reference/Lexical_grammar
---
{{JsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. Der Programmcode von ECMAScript-Skripten wird von links nach rechts gelesen und in eine Sequenz von Eingangselementen konvertiert, welche Tokens, Kontrollzeichen, Zeilentrenner, Kommentare oder Whitespaces sein können. ECMAScript definiert zudem einige Schlüsselworte und Literale und hat Regeln für automatisch eingefügte Semikolons am ende eines Statements.

## Kontrollzeichen

Kontrollzeichen haben keine sichtbare Repräsentation werden aber für die Kontrolle der Interpretation des Textes benutzt.

| Codepoint | Name                   | Abkürzung | Beschreibung                                                                                                                                                                                                                                 |
| --------- | ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `U+200C`  | Bindehemmer            | <ZWNJ>    | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmte Sprachen in Ligaturen eingebunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Bindehemmer)).                                                                       |
| `U+200D`  | Breitenloser Verbinder | <ZWJ>     | Platziert zwischen Zeichen, die normalerweise nicht verbunden sind, um zu bewirken, dass die Zeichen mit ihrer verbundenen Form in bestimmten Sprachen angezeigt werden ([Wikipedia](https://de.wikipedia.org/wiki/Breitenloser_Verbinder)). |
| `U+FEFF`  | Byte Order Mark        | <BOM>     | Wird am Anfang des Skripts verwendet, um es als Unicode und die Bytereihenfolge des Texts zu markieren ([Wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)).                                                                         |

## Whitespaces

Mit Spacezeichen wird die Lesbarkeit des Quelltextes verbessert und sie trennen Tokens voneinander. Diese Zeichen sind bedeutungslos für die Funktionalität des Programms. [Minification Tools](http://en.wikipedia.org/wiki/Minification_%28programming%29) werden oft benutzt, um Whitespaces zu entfernen, um die übertragenen Daten zu reduzieren.

| Codepoint | Name                         | Abkürzung | Beschreibung                                                                                            | Maskierte Sequenz |
| --------- | ---------------------------- | --------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| U+0009    | Zeichen Tabulator            | <HT>      | Horizontaler Tabulator                                                                                  | \t                |
| U+000B    | Zeilen Tabulator             | <VT>      | Vertikaler Tabulator                                                                                    | \v                |
| U+000C    | Form feed                    | <FF>      | Kontrollzeichen für den Seitenumbruch ([Wikipedia](http://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f                |
| U+0020    | Space                        | <SP>      | Normales Leerzeichen                                                                                    |                   |
| U+00A0    | Nicht unterbrechenedes space | <NBSP>    | Normal Leerzeichen, aber keine Stelle an der die Zeile unterbrochen werden kann.                        |                   |
| Others    | Andere Unicode Spacezeichen  | <USP>     | [Spaces in Unicode auf Wikipedia](https://de.wikipedia.org/wiki/Leerzeichen)                            |                   |

## Zeilenumbruch

Neben Whitespacezeichen werden Zeilenumbrüche auch eingesetzt, um die Lesbarkeit des Programmes zu verbessern. Es gibt ein paar Fälle, bei denen ein Zeilenumbruch einen Einfluss auf die Ausführung von JavaScript Programmen kann und an wenigen Stellen sind sie verboten. Zeilenumbrüche haben zudem einen Einfluss auf den Prozess der [automatischen eingefügten Semikolons](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Automatisches_Einfügen_von_Semikolons). Zeilenumbrüche werden mit der **\s** Klasse in [Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_Expressions) erkannt.

Nur die folgenden Unicode Codepoints werden als Zeilenumbrüche in ECMAScript erkannt. Andere Zeilenumbruchszeichen werden als Whitespaces erkannt (zum Beispiel sind Next Line, NEL, U+0085 Whitspaces).

| Codepoint | Name                | Abkürzung | Beschreibung                                                    | Maskierte Sequenz |
| --------- | ------------------- | --------- | --------------------------------------------------------------- | ----------------- |
| U+000A    | Line Feed           | <LF>      | Zeichen für Zeilenumbruch in UNIX Systemen.                     | \n                |
| U+000D    | Carriage Return     | <CR>      | Zeichen für Zeilenumbruch in Commodore und frühen Mac Systemen. | \r                |
| U+2028    | Line Separator      | <LS>      | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)        |                   |
| U+2029    | Paragraph Separator | <PS>      | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)        |                   |

## Kommentare

Kommentare werden benutzt, um Hinweise, Notizen, Vorschläge oder Warnungen im JavaScript Programmcode zu hinterlassen. Das kann zur Lesbarkeit und Verständnis beisteuern. Sie können auch eingesetzt werden, um ein Programmzeil auszuschalten, damit es nicht ausgeführt wird; das kan ein Werkzeug zum Debuggen sein.

JavaScript kennt zwei Typen von Kommentaren.

Der erste Typ ist der `//` Kommentar; Dieser macht alle folgenden Zeichen in der gleichen Zeile zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // Dieses ist ein einzeiliger JavaScript Kommentar
  console.log('Hello world!');
}
comment();
```

Der zweite Typ ist der `/* */` Style, welcher deutlich flexibler ist.

Zum Beispiel kann er auf eine Zeile angewendet werden:

```js
function comment() {
  /* Dieses ist ein einzeiliger JavaScript Kommentar */
  console.log('Hello world!');
}
comment();
```

Man kann aber auch mehrzeilige Kommentare wie folgenden machen:

```js
function comment() {
  /* Dieses ist ein mehrzeiliger Kommentar. Zu beachten ist,
     dass wir den Kommentar erst beenden müssen, wenn wir fertig sind. */
  console.log('Hello world!');
}
comment();
```

Man kann aber auch einen Kommentar mitten in einer Zeile machen. Diese kann die Lesbarkeit aber negativ beeinträchtigen, weshalb diese Art mit Vorsicht zu genießen ist:

```js
function comment(x) {
  console.log('Hello ' + x /* Fügt den Wert von x ein */ + ' !');
}
comment('world');
```

Natürlich kann diese Art auch eingesetzt werden, um Programmteile zu deaktivieren, wie es folgendes Beispiel zeigt:

```js
function comment() {
  /* console.log('Hello world!'); */
}
comment();
```

In diese Fall wird der Aufruf von `console.log()` nie ausgeführt, weil er in einem Kommentar ist. Jede Zeile im Programm kann so deaktiviert werden.

## Schlüsselwörter

### Reservierte Schlüsselwörter in ECMAScript 2015

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/default", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### Reservierte zukünftige Schlüsselworte

Die folgenden Schlüsselwörter sind für die Zukunft von der ECMAScript Spezifikation reserviert. Sie haben aktuell keine spezielle Funktion, können aber in Zukunft eine Funktion bekommen, weshalb sie nicht als Bezeichner verwendet werden können.

Dieses ist immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im strict mode benutzt werden:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

Die folgenden sind nur reserviert, wenn sie im Modul-Quelltext benutzt werden:

- `await`

#### Reservierte zukünftige Schlüsselwörter aus älteren Standards

Die folgenden Schlüsselwörter wurden als zukünftige Schlüsselwörter in älteren ECMAScript Spezifikationen (ECMAScript 1 bis 3) definiert.

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

Zudem können die Literale `null`, `true`, und `false` nicht als Bezeichner in ECMAScript verwendet werden.

### Reservierte Wörter benutzen

Reservierte Wörter gelten aktuell nur für Bezeichner (vs. Bezeichnernamen). Wie im [es5.github.com/#A.1](http://es5.github.com/#A.1) beschrieben ist, sind diese alle Bezeichnernamen welches, bei welchen die Reservierten Wörter nicht ausgenommen sind.

```js
a.import
a['import']
a = { import: 'test' }.
```

Auf der anderes Seite ist das folgende nicht erlaubt, weil es ein Bezeichner ist, der welcher ein Bezeichnername ohne ein reserviertes Wort ist. Bezeichner werden für Funktionsdeklarationen, Funktionsausdrücke, Variablendeklarationen und so weiter benutzt. Bezeichnernamen werden für Eigenschaftsausdrücke, Aufrufausdrücke und so weiter eingesetzt.

```js
function import() {} // Illegal.
```

## Literale

### Null Literal

Sie bei [`null`](/de/docs/Web/JavaScript/Reference/Global_Objects/null) für mehr Informationen.

```js
null
```

### Boolean Literal

Siehe bei [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) für mehr Informationen.

```js
true
false
```

### Nummerische Literale

#### Dezimal

```js
1234567890
42

// Vorsicht beim Einsatz von führenden Nullen:
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

Zu bemerken ist, dass Dezimal Literale mit eine Null (`0`) starten können gefolgt von anderen Dezimalstellen, aber wenn alle Zifferen nach der führenden `0` kleiner als `8` sind, wird die Zahl als Oktalzahl interpretiert. Dieses erzeugt in JavaScript keinen Fehler (siehe {{bug(957513)}}). Sie zudem auch auf der Seite über [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt#Octal_interpretations_with_no_radix).

#### Binär

Die Syntax für Binärzahlen setzt sich aus einer führenden Null gefolgt von einem großen oder kleinen lateinischem Buchstachen "B" (`0b` oder `0B`). Weil dieses Syntax in ECMAScript 2015 neu ist, sollte auf die Kompatibilitätstabelle unten geschaut werden. Wenn Ziffern nach `0b` nicht 0 oder 1 sind, wird folgender [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) erzeugt: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

#### Oktal

Die Syntax für Oktalzahlen setzt sich aus einer führenden Null gefolgt von einem großen oder kleinen lateinischem Buchstachen "O" (`0o` oder `0O`). Weil dieses Syntax in ECMAScript 2015 neu ist, sollte auf die Kompatibilitätstabelle unten geschaut werden. Wenn Ziffern nach `0o` außerhalb der Grenzen (01234567) sind, wird folgender [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) erzeugt: "Missing octal digits after 0o".

```js
var n = 0O755; // 493
var m = 0o644; // 420

// Auch mit nur einer führenden Null möglich (siehe dazu die Bemerkung bei den Dezimalzahlen)
0755
0644
```

#### Hexadezimal

Die Syntax für Hexadezimalahlen setzt sich aus einer führenden Null gefolgt von einem großen oder kleinen lateinischem Buchstachen "X" (`0x` oder `0X`). Wenn Ziffern nach `0x` außerhalb der Grenzen (0123456789ABCDEF) sind, wird folgender [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) erzeugt: "Identifier starts immediately after numeric literal".

```js
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Objekt-Literale

Siehe {{jsxref("Object")}} und [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) für mehr Informationen.

```js
var o = { a: 'foo', b: 'bar', c: 42 };

// Kurzschreibweise. Neu in ES2015
var a = 'foo', b = 'bar', c = 42;
var o = {a, b, c};

// stattdessen
var o = { a: a, b: b, c: c };
```

### Array Literale

Siehe {{jsxref("Array")}} für mehr Informationen.

```js
[1954, 1974, 1990, 2014]
```

### String Literale

```js
'foo'
"bar"
```

#### Hexadezimal maskierte Sequenzen

Hexadezimal maskierte Sequenzen bestehen aus `\x` gefolgt von exakt zwei Hexadezimalziffern, die eine Codeeinheit oder einen Codepoint in einem Bereich von 0x0000 bis 0x00FF repräsentieren.

```js
'\xA9' // "©"
```

#### Unicode maskierte Sequenzen

Eine Unicode maskierte Sequenz besteht aus genau vier Hexadezimalstellen nach einem `\u`. Sie bestimmt ein zwei Byte Zeichen in der UTF-16 Kodierung. Für Codepoints zwischen U+0000 und U+FFFF sind die Ziffern identisch mit den Codepoints. Codepoints von U+10000 bis U+10FFFF müssen über zwei maskierte Sequenzen, einem Ersatzpaar, angegeben werden. Das Ersatzpaar unterscheidet sich vom Codepoint.

Siehe dazu auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
'\u00A9' // "©" (U+A9)
```

#### Unicode Codepointmaskierung

Mit Unicode Codepointmaskierung besteht aus `\u{` gefolgt von einem Codepoint in hexadezimaler Basis gefolgt von `}`. Die Werte der Hexadezimalstellen müssen in einem Bereich von 0 und 0x10FFFF inklusiv sein. Codepoints in einem Bereich von U+10000 bis U+10FFFF müssen nicht als Ersatzpaar angegeben werden. Codepointsmaskierung wurde in ECMAScript 2015 (ES6) zu JavaSCript hinzugefügt.

Siehe zudem auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
'\u{2F804}' // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// Das gleiche mit einfache Unicodemaskierung
'\uD87E\uDC04'
```

### Reguläre Ausdrucksliterale

Siehe zudem [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) für mehr Informationen.

```js
/ab+c/g

// Ein "leerers" Regulärers Ausdrucksliteral
// Die leere Gruppe ist notwendig,
// um einen einzeiligen Kommentar zu verhindern.
/(?:)/
```

### Template Literale

Siehe zudem [Template Strings](/de/docs/Web/JavaScript/Reference/template_strings) für mehr Informationen.

```js
`string text`

`string text zeile 1
 string text zeile 2`

`string text ${ausdruck} string text`

tag `string text ${ausdruck} string text`
```

## Automatisches Einfügen von Semikolons

Eine [JavaScript Statements](/de/docs/Web/JavaScript/Reference/Statements) müssen durch ein Semikolon beendet werden, wodurch die automatisches Einfügen von Semikolon (ASI kurz für _automatic semicolon insertion_) einen Einfluss auf diese hat:

- Leeres Statement
- `let`, `const`, Variablen Statements
- `import`, `export`, Modul Deklarationen
- Ausdrucksstatements
- `debugger`
- `continue`, `break`, `throw`
- `return`

Die ECMAScript Spezifikation erwähnt [drei Regeln für automatisches Einfügen von Semikolons](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion).

1\. Ein Semikolon wird eingefügt, bevor ein Zeilenumbruch oder "}" angegeben wird, welches nicht von der Grammatik erlaubt ist.

```js
{ 1 2 } 3

// Wird von ASI in folgendes transformiert

{ 1 2 ;} 3;
```

2\. Ein Semikolon wird am ende Eingefügt, wenn das Ende der eingehenden Tokens erkannt wurde und der Parser nicht in der Lage ist den Input als ganzes Programm zu erkennen.

Hier wird `++` nicht als [Postfixoperator](</de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Inkrement_()>) für die Variable `b` erkannt, weil ein Zeilenumbruch zwischen `b` und `++` ist.

```js
a = b
++c

// Wird von ASI in folgendes transformiert

a = b;
++c;
```

3\. Ein Semikolon wird am Ende eingefügt, wenn auf eine Anweisung mit eingeschränkten Produktionen in der Grammatik ein Zeilenabschlusszeichen folgt. Diese Anweisungen mit "no LineTerminator here"-Regeln lauten:

- Postfixausdrücke (`++` und `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js
return
a + b

// Wird von ASI in folgendes transformiert

return;
a + b;
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2("ES1")}}         | Initiale Definition.                                                                  |
| {{SpecName('ES5.1', '#sec-7', 'Lexical Conventions')}}                                             | {{Spec2('ES5.1')}}     |                                                                                       |
| {{SpecName('ES6', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}         | {{Spec2('ES6')}}         | Hinzugefügt: Binäre und Oktal Zahlenliterale, Unicode Codepoint-Maskierung, Templates |
| {{SpecName('ESDraft', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}} | {{Spec2('ESDraft')}} |                                                                                       |

## Browserkompatibilität

{{Compat("javascript.grammar")}}

## Siehe auch

- [Jeff Walden: Binary and octal numbers](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: JavaScript character escape sequences](http://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
