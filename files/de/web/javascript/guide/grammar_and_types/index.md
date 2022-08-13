---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Grammar_and_types
original_slug: Web/JavaScript/Guide/Grammatik_und_Typen
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Einführung", "Web/JavaScript/Guide/Kontrollfluss_und_Fehlerbehandlung")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Deklaration von Variablen, Datentypen und Objektinstanzen.

## Grundlagen

JavaScript leiht sich den größten Teil seiner Syntax von Java, ist aber auch von Sprachen wie Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitiv** (unterscheidet zwischen Groß- und Kleinschreibung) und benutzt den **Unicode**-Zeichensatz. Zum Beispiel kann das Wort Früh als Variablenname genutzt werden.

```js
var Früh = "foobar";
```

Jedoch ist die Variable `früh` nicht dieselbe wie `Früh`, weil JavaScript case-sensitiv ist.

In JavaScript heißen Anweisungen "{{Glossary("Statement", "statements")}}" und werden durch ein Semikolon (;) voneinander getrennt. Ein Semikolon ist nicht nötig, wenn jedes Statement in einer neuen Zeile ist. Wenn mehrere Statements in einer Zeile geschrieben werden, sollte nach jedes mit einem Semikolon trennen. Zudem ist es gängige Praxis, hinter jedem Statement ein Semikolon zu schreiben. Leerzeichen, Tabulatoren und Zeilenumbrüche werden "Whitespace" genannt. Der Quelltext von JavaScript wird vom Interpreter von links nach rechts gelesen und in Sequenzen von Eingabe-Elementen wie JavaScript-Tokens, Steuerzeichen, Zeichenumbrüche, Kommentare und Objektinstanzen (Literale) umgewandelt. ECMAScript beschreibt für den Interpreter reservierte Schlüsselwörter sowie Objektinstanzen und hat eingebaute Regeln für die automatische Einfügung von Semikola (ASI) um Anweisungen zu beenden. Es wird jedoch empfohlen jede Anweisung mit einem Semikolon zu beenden; dies vermeidet ungewollte Nebeneffekte. Mehr Informationen dazu sind in der detaillierten Referenz über JavaScripts [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) zu finden.

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und in vielen anderen Sprachen:

```js
// Einzeiliger Kommentar

/* Das ist ein langer,
 * mehrzeiliger Kommentar
 */

/* Man kann keine Kommentare, /* Verschachteln */ SyntaxError */
```

Kommentare sind wie Whitespaces und werden bei der Ausführung von Skripten verworfen.

## Deklarationen

Es gibt drei mögliche Arten, Variablen zu deklarieren:

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable. Optional wird ein Wert initialisiert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Variable mit Gültigkeit im aktuellen Block. Optional wird ein Wert initialisiert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine Konstante mit Gültigkeit im aktuellen Block.

### Variablen

Variablen werden benutzt, um Werte zu speichern. Dabei gibt man einer Variablen einen Namen, der {{Glossary("identifier", "Bezeichner")}} bzw. Bezeichner genannt wird und der bestimmten Regeln folgt.

Ein JavaScript Bezeichner muss mit einem Buchstaben, Unterstrich (\_) oder einem Dollarzeichen ($) beginnen. Die nachfolgenden Zeichen können auch Zahlen sein. Da JavaScript case-sensitive ist, wird zwischen Groß- und Kleinschreibung unterschieden und somit repräsentiert "A" einen anderen Buchstaben als "a".

Es kann ein Großteil der ISO 8859-1 und Unicode-Zeichen benutzt werden, wie z.B. ü oder auch å, aber auch [Unicode escape sequences](/de/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) können genutzt werden.

Beispiele für zulässige Bezeichner sind `Number_hits`, `temp99` und `_name.`

### Variablendeklaration

Die Deklaration einer Variable ist durch drei unterschiedliche Wege möglich:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}, wie `var x = 42`. Die Syntax kann benutzt werden, um Variablen lokal und global zu deklarieren.
- Mit dem Zuweisen einer Variable, wie `x = 42`. Wenn diese Form außerhalb einer Funktion genutzt wird, wird die Variable global deklariert. Es wird eine strikte JavaScript-Warnung erzeugt. Diese Variante sollte vermieden werden.
- Mit dem Schlüsselwort {{jsxref("Statements/let", "let")}} , wie `let x = 42`. Die Syntax kann benutz werden, um Variablen nur für ihren Scope (Gültigkeitsbereich) zu deklarieren. Siehe [Variablen Scope](<#Variablen Scope>).

### Variablen auswerten

Eine Variable, die mit `var` ohne Initialisierung deklariert wurde, hat den Wert {{jsxref("undefined")}}.

Der Zugriff auf eine nicht initialisierte Variable und der Zugriff auf eine `let`-Variable, bevor diese Initialisiert wurde, erzeugt einen {{jsxref("ReferenceError")}} Fehler:

```js
var a;
console.log("Der Wert von a ist " + a); // Der Wert von a ist undefined

console.log("Der Wert von b ist " + b); // Der Wert von b ist undefined
var b;

console.log("Der Wert von c ist " + c); // ReferenceError: c is not defined

let x
console.log("Der Wert von x ist " + x); // Der Wert von x ist undefined

console.log("Der Wert von y ist " + y); // ReferenceError: y is not defined
let y;
```

`undefined` kann benutzt werden, um zu überprüfen ob eine Variable einen Wert hat. Im Folgenden Codebeispiel ist der Variable `input` kein Wert zugewiesen worden und das [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Statement wird somit `true` ausgeben.

```js
var input;
if(input === undefined){
  macheDas();
} else {
  macheDasAndere();
}
```

`undefined` verhält sich wie ein `false`, wenn es in einem boolschen Kontext verwendet wird. Zum Beispiel wird im folgendem Codebeispiel die Funktion `myFunction` ausgeführt, weil das `myArray` Element `undefined` ist:

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

`undefined` wird zu `NaN` (Not a Number) konvertiert, wenn es in einem numerischen Kontext verwendet wird:

```js
var a;
a + 2;  //NaN
```

Wenn eine {{jsxref("null")}} Variable ausgewertet wird, verhält sie sich im numerischen Kontext wie `0` und in booleschem Kontext wie `false`:

```js
var n = null;
console.log(n * 32);  // wird 0 in die Konsole eintragen
```

### Variablen Scope

Wird eine Variable außerhalb eines Code-Blocks deklariert, wird sie eine `globale Variable` genannt, da sie jetzt in jedem Bereich verfügbar ist. Wenn eine Variable jedoch innerhalb eines Code-Blocks deklariert wird, so ist sie nur innerhalb dieses Blocks verfügbar und wird aus diesem Grund `lokale Variable` genannt.

JavaScript hatte vor ECMAScript 2015 keinen [Block-Anweisungs](/de/docs/JavaScript/Guide/Statements#Block_Statement) Scope; daher wurde eine deklarierte Variable in einem Block immer zu der Funktion (oder dem globalen Scope) gezählt, in dem sich der Block befand. Zum Beispiel wird der folgende Quelltext 5 ausgeben, weil der Scope von `x` die Funktion ist bzw. der globale Kontext, in dem `x` deklariert wurde, und nicht der Block, in diesem Fall die `if` Anweisung, selbst.

```js
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

Das Verhalten ändert sich, wenn man die in ECMAScript 2015 eingeführte `let` Deklaration benutzt.

```js
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```

### Variablen hochziehen (**hoisting**)

Eine andere Besonderheit mit Variablen in JavaScript ist, dass man eine Variable referenzieren kann, bevor sie deklariert wurde, ohne das es zu einem Fehler kommt. Diese Konzept ist bekannt als **hoisting** (hochziehen); Variablen in JavaScript sind hochgezogen und quasi zum Anfang der Funktion oder des Statements gehoben worden. Immer wenn Variablen hochgezogen werden, werden sie den Wert `undefined` zurückgeben. So wird immer `undefined` zurückgegeben, wenn man die Variablen benutzt, bevor sie deklariert und initialisiert wurden.

```js
/**
 * Beispiel 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Beispiel 2
 * wird den Wert undefined zurückgeben
 */
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```

Das obere Beispiel wird genauso interpretiert, wie das folgende Beispiel:

```js
/**
 * Beispiel 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Beispiel 2
 */
var myvar = "my value";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

Wegen des Hochziehens sollten alle `var` Anweisungen so weit am Anfang der Funktion wie nur möglich platziert werden. Dieses Vorgehen verbessert die Qualität des Quelltextes.

In ECMAScript 2015 wird `let` (bzw. `const`) **nicht** an den Anfang eines Blocks **hochgezogen**. Das Referenzieren der Variable in dem Block, bevor diese deklariert wurde, führt zu einem {{jsxref("ReferenceError")}}. Die Variable ist in einer "temporären toten Zone", die vom Start des Blocks bis zur Deklaration der Variablen besteht.

```js
console.log(x); // ReferenceError
let x = 3;
```

### Funktionen hochziehen (**hoisting**)

Bei Funktionen (nur Funktionsdeklarationen) werden die Deklarationen ebenfalls nach oben gezogen. Bei Funktionsausdrücken gilt das jedoch nicht.

```js
/* Funktionsdeklaration */

foo(); // "bar"

function foo() {
   console.log("bar");
}


/* Funktionsausdruck */

baz(); // TypeError: baz ist keine Funktion

var baz = function() {
   console.log("bar2");
};
```

### Globale Variablen

Globale Variablen sind faktisch Eigenschaften des _globalen Objekts._ In Webseiten ist das globale Objekt das {{domxref("window")}} Objekt, so dass globale Variablen gesetzt und erreicht werden können, indem die Syntax `window.variable` eingesetzt wird.

Folglich kann man globale Variablen, die in einem window oder frame deklariert wurden, aus einem anderen window oder Frame erreichen, indem der window oder framename angegeben wird. Zum Beispiel kann eine Variable `phoneNumber`, die in einem Dokument deklariert wurde, von einem iframe mit `parent.phoneNumber` erreicht werden.

### Konstanten

Man kann eine nur lesende, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax für einen Konstantenbezeichner ist dieselbe, wie für Variablenbezeichner: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen beginnen und kann alphabetische Zeichen, numerische Zeichen und Unterstriche enthalten.

```js
const PI = 3.14;
```

Der Wert einer Konstanten kann nicht zur Laufzeit durch Zuweisungen oder Neudeklarationen geändert werden. Konstanten müssen deswegen immer initialisiert werden.

Die Sichtbarkeitsregeln (Scope) bei Konstanten sind die gleichen, wie für `let` Blockscope Variablen. Wenn das Schüsselwort `const` weggelassen wird, wird vorausgesetzt, dass der Bezeichner eine Variable repräsentiert.

Man kann keine Konstante mit dem gleichen Namen einer Funktion oder Variablen im gleiche Gültigkeitsbereich deklarieren. Zum Beispiel:

```js
// DAS WIRD ZU EINEM ERROR FÜHREN
function f() {};
const f = 5;

// DAS WIRD EBENFALLS ZU EINEM ERROR FÜHREN
function f() {
  const g = 5;
  var g;

  //statements
}
```

Immer, wenn Objektattribute nicht geschützt sind, werden die folgenden Anweisungen ohne Probleme ausgeführt.

```js
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";
```

Jedoch ist der Inhalt eines Arrays nicht geschützt, sodass folgendes Statement ohne Probleme ausgeführt wird.

```js
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); // logs ['HTML','CSS','JAVASCRIPT']
```

## Datenstrukturen und -typen

### Datentypen

Der neuste ECMAScript Standard definiert sieben Datentypen:

- Sechs Datentypen sind {{Glossary("Primitive", "primitive")}} Datentypen:

  - {{Glossary("Boolean")}}. `true` und `false`.
  - {{Glossary("null")}}. Eine spezielles Schlüsselwort, was einen null-Wert kennzeichnet. Weil JavaScript zwischen Groß- und Kleinschreibung unterscheidet, ist `null` nicht das selbe wie `Null`, `NULL` oder einen andere Variante.
  - {{Glossary("undefined")}}. Ein Eigenschaft, wessen Wert nicht Definiert ist.
  - {{Glossary("Number")}}. Eine ganze Zahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  - {{Glossary("String")}}. Eine Sequenz von Zeichen, die einen Textwert repräsentieren Zum Beispiel: "Howdy".
  - {{Glossary("Symbol")}} (neu in ECMAScript 2015). Ein Datentyp, bei dem Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object")}}

Obwohl die Anzahl der Datentypen relativ klein ist, eröffnen sie die Möglichkeit nützliche Funktionen für Applikationen zu erstellen. {{jsxref("Object", "Objects")}} und {{jsxref("Function", "functions")}} sind die anderen fundamentalen Elemente der Sprache. Man kann sich Objekte als benannte Container für Werte und Funktionen, die die Applikation ausführen kann, vorstellen.

### Datentypkonvertierungen

JavaScript ist eine dynamisch typisierte Sprache. Das bedeutet, dass man den Datentypen einer Variable bei der Deklaration nicht mit angibt. Der Datentyp wird während der Ausführung automatisch konvertiert, wenn es notwendig ist. So kann eine Variable folgendermaßen definiert werden:

```js
var answer = 42;
```

Und Später kann der gleichen Variablen eine Zeichenkette zugewiesen werden:

```js
answer = "Thanks for all the fish...";
```

Weil JavaScript dynamisch typisiert ist, erzeugt diese Zuweisung keinen Fehler im Programm.

In Ausdrücken, in denen Zahlen und Zeichenketten mit dem + Operator gebraucht werden, konvertiert JavaScript die Zahlen in Zeichenketten. Siehe dazu das folgende Beispiel:

```js
x = "The answer is " + 42 // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"
```

In Ausdrücken mit anderen Operatoren, konvertiert JavaScript zahlen nicht in Zeichenketten. Zum Beispiel:

```js
"37" - 7 // 30
"37" + 7 // "377"
```

### Konvertieren von Zeichenketten zu Zahlen

In Fällen, in denen eine Zahl durch einen String repräsentiert wird, gibt es folgende Methoden, um die Zeichenkette in eine Zahl umzuwandeln.

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, weshalb der Einsatz für Dezimalzahlen nicht geeignet ist. Zu einem guten Programmierstil gehört es, dass man immer die Basis bei `parseInt` mit angibt. Der _radix_ Parameter der Methode gibt an, aus welchem Zahlensystem die Zahl stammt.

Eine alternative Methode, um einen String in eine Zahl zu konvertieren ist der + (unär Plus) Operator:

```js
"1.1" + "1.1" // "1.11.1"
(+"1.1") + (+"1.1") // 2.2
// Hinweis: die hinzugefügten Klammern sind nur für die Lesbarkeit.
```

## Literale

Man benutzt Literale, um in JavaScript Werte zu repräsentieren. Es sind feste Werte, keine Variablen, die man in einem Skript einsetzt. Dieses Kapitel beschreibt die folgeden Literaltypen:

- [Array Literale](#array_literale)
- [Boolean Literale](#boolean_literale)
- [Gleitkomma Literale](#gleitkomma_literale)
- [Ganze Zahlen](#ganze_zahlen)
- [Objekt Literale](#objekt_literale)
- [RegExp Literale](#regexp_literale)
- [String Literale](#string_literale)

### Array Literal

Ein Array Literal ist eine Liste von null oder mehr Ausdrücken. Jeder Ausdruck repräsentiert ein Element des Arrays. Diese Elemente sind von eckigen Klammern (\[]) umschlossen. Wenn ein Array mit einem Array Literal erstellt wird, wird das Array mit allen definierten Elementen initialisiert und die länge des Arrays wird auf die Menge der Elemente gesetzt.

Das folgende Beispiel erstellt das `coffees` Array mit drei Elementen und der Länge drei:

```js
var coffees = ["French Roast", "Colombian", "Kona"];
```

> **Note:** **Hinweis:** Ein Array Literal ist eine Art von Objektinitialisierung. Sie dazu auch den [Einsatz von Objektinitialisierern](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers).

Wenn ein Array durch ein Literal im Toplevel Skript erstellt wird, interpretiert JavaScript das Array immer dann, wenn ein Ausdruck dieses Literal enthält. Im Gegensatz dazu wird ein Literal in einer Funktion immer neu erstellt, wenn die Funktion aufgerufen wird.

Array Literale sind ebenfalls `Array` Objekte. Für mehr Details siehe {{jsxref("Array")}} und [Indexed collections.](/de/docs/Web/JavaScript/Guide/Indexed_collections)

#### Extra Kommas in Array Literalen

Man muss nicht alle Elemente in einem Array Literal spezifizieren. Wenn man zwei Kommas in einer Reihe verwendet, wird das Array mit einem `undefined` Element erstellt. Das folgende Beispiel erstellt das `fish` Array:

```js
var fish = ["Lion", , "Angel"];
```

Dieses Array hat zwei Elemente mit Werten und ein leeres Element (`fish[0]` ist "Lion",` fish[1]` ist `undefined` und `fish[2]` ist "Angel").

Wenn man ein trennendes Komma am Ende der Elementliste hinzufügt, wird es ignoriert. Im folgenden Beispiel ist die Länge des Arrays drei. Es gibt kein `myList[3]`. Alle weiteren Kommas in der Liste führen zu einem neuen Element.

> **Note:** **Hinweis:** Trennende Kommas können in älteren Browserversionen zu Fehlern führen. Zudem ist es ein guter Stil diese Kommas zu entfernen.

```js
var myList = ['home', , 'school', ];
```

Im folgenden Beispiel hat das Array vier Elemente und `myList[0]` und `myList[2]` sind nicht spezifiziert.

```js
var myList = [ , 'home', , 'school'];
```

Im folgenden Beispiel hat das Array vier Elemente und `myList[1]` und `myList[3]` sind nicht spezifiziert. **Nur das letzte Komma wird ignoriert.**

```js
var myList = ['home', , 'school', , ];
```

Das Verständnis für das Verhalten von extra Kommas ist wichtig, um JavaScript als Sprache zu verstehen. Immer, wenn man seinen eigenen Quelltext schreibt, sollten explizit fehlenden Elementen mit `undefined` deklariert werden, damit die Lesbarkeit und Wartbarkeit des Quelltextes besser ist.

### Boolean Literale

Der Boolean Typ hat zwei Literale: `true` und `false`.

Man sollte die primitiven Werte `true` und `false` jedoch nicht mit den Werten true und false des Boolean Objektes verwechseln. Das Boolean Objekt ist eine Hülle um den primitiven Boolean Datentypen. Siehe im Artikel {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

Ganze Zahlen können als Dezimal- (Basis 10), Hexadezimal- (Basis 16), Oktal- (Basis 8) und Binärzahl (Basis 2) ausgedrückt werden.

- Eine Dezimalzahlenliteral besteht aus einer Sequenz von Ziffern ohne eine führende 0.
- Eine führende 0 oder 0o (oder 0O) bei einem Zahlenliteral deutet eine Oktalzahl an. Oktalzahlen können nur die Ziffern 0 bis 7 enthalten.
- Ein führendes 0x (oder 0X) deutet eine Hexadezimalzahl an. Hexadezimale Ganzzahlen können als Stellen Ziffern (0 - 9) und die Buchstaben a - f bzw. A - F enthalten. (Die Schreibweise des Buchstaben ändert nicht den Wert der Stelle. Z. B. 0xa = 0xA = 10 und 0xf = 0xF = 15.)
- Ein führendes 0b (oder 0B) deutet eine binäre Ganzzahl an. Binäre Ganzzahlen können nur die Ziffern 0 und 1 enthalten.

Im folgenden Beispiel sind einige Beispiele für Zahlenliterale:

    0, 117 und -345 (dezimal, Basis 10)
    015, 0001 und -0o77 (oktal, Basis 8)
    0x1123, 0x00111 und -0xF1A7 (hexadezimal, "hex", Base 16)
    0b11, 0b0011 und -0b11 (binär, Basis 2)

Für weitere Informationen siehe [numerische Literale in der Lexikalischen Grammatik Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals).

### Gleitkomma Literale

Ein Gleitkomma Literal kann die folgenden Abschnitte beinhalten:

- Eine dezimale ganze Zahl, die mit einem Vorzeichen ("+" oder "-") versehen sein kann.
- Einen Dezimalpunkt (".").
- Eine Nachkommazahl (weitere Dezimalzahl).
- Einen Exponenten.

Der Exponent besteht aus einem "e" oder "E" gefolgt von einer ganzen Zahl, die mit einem Vorzeichen ("+" oder "-") versehen sein kann. Eine Gleitkommazahl muss mindestens aus einer Ziffer und entweder einem Dezimalpunkt oder einem "e" (oder "E") bestehen.

Kurz und knapp sieht die Syntax folgendermaßen aus:

    [(+|-)][ziffern][.ziffern][(E|e)[(+|-)]ziffern]

Zum Beispiel:

    3.1415926
    -.123456789
    -3.1E+12
    .1e-23

### Objekt Literale

Ein Objekt Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und -werten, umschlossen von geschweiften Klammern ({}). Man sollte kein Objektliteral am Anfang eines Statements benutzen. Das wird zu einem Fehler führen oder nicht wie erwartet funktionieren, weil das {-Zeichen als Anfang eines Blocks interpretiert wird.

Es folgt ein Beispiel für ein Objekt Literal. Das erste Element des `car` Objektes definiert eine Eigenschaft `myCar` und beschreibt diese mit einem neuen String "`Saturn`". Am zweiten Element, der `getCar` Eigenschaft, wird der Rückgabewert der aufgerufenen Funktion `carTypes("Honda")` zugewiesen. Das dritte Element, die `special` Eigenschaft, benutzt eine existierende Variable `sales`.

```js
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = {
  myCar: "Saturn",
  getCar: carTypes("Honda"),
  special: sales
};

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
```

Für die Namen der Eigenschaften kann auch ein String oder ein Zahlen Literal verwendet werden. Für den Wert kann auch ein verschachteltes Objekt Literal genutzt werden. Das folgende Beispiel nutzt diese Optionen.

```js
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Die Namen von Objekteigenschaften können ein String sein, was auch den leeren String beinhaltet. Wenn die Eigenschaftsnamen keine gültigen JavaScript {{Glossary("Identifier","Bezeichner")}} sind, müssen sie in Anführungszeichen geschrieben werden. Eigenschaftsnamen die keine gültigen Bezeichner sind, können nicht mit der Punktschreibweise (.) erreicht werden. Wohl aber mit der Array ähnlichen Notation ("`[]`").

```js
var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt Literale

In ES2015 wurde das Objekt Literal dahingehend erweitert, dass der Prototyp bei der Erstellung gesetzt wird. Desweiteren sind neue Funktionalitäten hinzugekommen, die eine Kurzschreibweise für `foo: foo` Zuweisungen, die Definitionen für Methoden, das Aufrufen von super Methoden und die Berechnung der Eigenschaftsnamen mit Ausdrücken ermöglichen. Alle diese Funktionen bringen zum Einen Klassendefinition und Objekt Literale näher zusammen und sind somit objektbasiertes Design und zum Anderen häufig vorteilhafter und bequemer.

```js
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

Bitte beachten:

```js
var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
```

### RegExp Literale

Ein RegExp Literal (welcher [im Detail](/de/docs/Web/JavaScript/Guide/Regular_Expressions) später erklärt wird) ist ein Pattern (Muster) umschlossen von Slashes (/). Das Folgende ist ein Beispiel für ein RegExp Literal:

```js
var re = /ab+c/;
```

### String Literale

Ein String Literal besteht aus null oder mehr Zeichen, die von doppelten (") oder einfachen (') Anführungszeichen umschlossen sind. Ein String muss immer von gleichen Anführungszeichen umschlossen sein. Entweder von einfachen oder von doppelten Anführungszeichen. Im folgenden Beispiel sind ein paar String Literale gezeigt:

```js
"foo"
'bar'
"1234"
"eine Zeile \n weitere Zeile"
"John's cat"
```

Man kann alle Methoden des String Objektes auf einem String Literal aufrufen, denn JavaScript konvertiert das Literal automatisch in ein temporäres String Objekt, führt die Methode aus und verwirft danach das temporäre Objekt. Man kann auch die `String.length` Eigenschaft mit einem String Literal benutzen:

```js
console.log("John's cat".length)
// Wird die Anzahl der Zeichen (auch Leerzeichen) ausgeben.
// In diesem Fall 10.
```

In ES2015, wurden zudem Template Literale eingeführt. Template Literale sind von Backticks (\` \`) ([Gravis](<https://de.wikipedia.org/wiki/Gravis_(Typografie)>)) umschlossen. Template Strings bieten syntaktischen Zucker für das Erstellen von Strings an. Sie sind vergleichbar mit den _String Interpolations_ Funktionen in Perl, Python und anderen Sprachen. Optional können Marken eingefügt werden, um einen String benutzerdefiniert zu erstellen. Sie vermeiden Injection-Attacken und ermöglichen es Datenstrukturen in Strings unterzubringen.

```js
// Standardliteral für die String erstellung
`In JavaScript '\n' is a line-feed.`

// Mehrzellige Strings
`In JavaScript ist das
 nicht erlaubt.`

// String Interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Erstellung einer HTTP Anfrage.
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

Man sollte String Literale benutzen, sofern man nicht explizit ein Objekt benötigt. Für weitere Informationen siehe im {{jsxref("String")}} Artikel nach.

#### Einsatz von Sonderzeichen in Strings

Neben den normalen Zeichen ist es auch möglich Sonderzeichen in einem String zu verwenden. Ein Beispiel ist im folgenden zu sehen:

```js
"eine Zeile \n nächste Zeile"
```

Die folgende Tabelle Zeigt die Sonderzeichen, die in JavaScript Strings verwendet werden können:

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `\0`        | Null Byte                                                                                                                                                                                                                                                    |
| `\b`        | Backspace                                                                                                                                                                                                                                                    |
| `\f`        | Form feed                                                                                                                                                                                                                                                    |
| `\n`        | New line                                                                                                                                                                                                                                                     |
| `\r`        | Carriage return                                                                                                                                                                                                                                              |
| `\t`        | Tab                                                                                                                                                                                                                                                          |
| `\v`        | Vertical tab                                                                                                                                                                                                                                                 |
| `\'`        | Einfache Anführungszeichen                                                                                                                                                                                                                                   |
| `\"`        | Doppelte Anführungszeichen                                                                                                                                                                                                                                   |
| `\\`        | Backslash Zeichen                                                                                                                                                                                                                                            |
| `\XXX`      | Das Zeichen, das im Latin-1 Encoding mit drei Oktalzahlen (_XXX_) Spezifiziert wird (0 bis 377). Zum Beispiel ist \251 die Oktalsequenz für das Copyrightsymbol.                                                                                             |
|             |                                                                                                                                                                                                                                                              |
| `\xXX`      | Zeichen, die im Latin-1 Encoding mit zwei Hexadezimalzahlen (_XX_) spezifiziert werden (00 bis FF). Zum Beispiel ist \xA9 die Hexadezimalsequenz für das Copyrightsymbol.                                                                                    |
|             |                                                                                                                                                                                                                                                              |
| `\uXXXX`    | Die Unicode Zeichen, die mit vier Hexadezimalziffern _XXXX_ beschreiben werden. Zum Beispiel ist \u00A9 die Hexadezimalsequenz für das Copyrightsymbol. Siehe [Unicode escape Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals). |
| `\u{XXXXX}` | Unicode code point escapes. Zum Beispiel ist \u{2F804} das gleiche wie das einfache Unicodezeichen \uD87E\uDC04.                                                                                                                                             |

#### Escaping Zeichen

Für nicht in der Tabelle gezeigte Zeichen wird ein voranstehendes Backslash ignoriert. Der Einsatz von Backslashs ist Veraltet und sollte vermieden werden.

Man kann Anführungszeichen in einen String hinzufügen, indem ein Führendes Backslash eingesetzt wird. Das wird auch _escaping_ der Anführungszeichen genannt. Ein Beispiel:

```js
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis ist:

    He read "The Cremation of Sam McGee" by R.W. Service.

Um ein Backslash in einem String zu verwenden, muss dieses mit einem Backslash escaped werden. Zum Beispiel muss der Pfad `c:\temp` wie folgt geschrieben werden:

```js
var home = "c:\\temp";
```

Man kann zudem Zeilenumbrüche mit einem vorangegangenen Backslash escapen. Das Backslash und der Zeilenumbruch werden aus dem String entfernt.

```js
var str = "this string \
is broken \
across multiple\
lines."
console.log(str);   // this string is broken across multiple lines.
```

JavaScript kennt keine "heredoc" Syntax. Um eine solche zu simulieren muss am Ende jeder Zeile mit einem Zeilenumbruch (\n) ein Backslash stehen:

```js
var poem =
"Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo."
```

ECMAScript 2015 führte einen neuen Literaltyp, das Template Literal, ein. Dieses führte, für viele neue Funktionen, Strings mit mehrere Zeilen ein!

```js
var poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`
```

## Mehr Informationen

Dieses Kapitel beschränkt sich auf die Basissyntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu lernen siehe in die folgenden Kapitel dieses Guides:

- [Kontrollfluss und Fehlerbehandlung](/de/docs/web/JavaScript/Guide/Kontrollfluss_und_Fehlerbehandlung)
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Funktionen)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Ausdruecke_und_Operatoren)

Im nächsten Kapitel wird ein Blick auf Kontrollflüsse und Fehlerbehandlungen geworfen.

{{PreviousNext("Web/JavaScript/Guide/Einführung", "Web/JavaScript/Guide/Kontrollfluss_und_Fehlerbehandlung")}}
