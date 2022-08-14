---
title: Eine Wiedereinführung in JavaScript
slug: Web/JavaScript/A_re-introduction_to_JavaScript
tags:
  - Anleitung
  - CodingScripting
  - Einleitung
  - Guide
  - Intermediate
  - JavaScript
  - Lernen
translation_of: Web/JavaScript/A_re-introduction_to_JavaScript
original_slug: Web/JavaScript/Eine_Wiedereinfuehrung_in_JavaScript
---
{{jsSidebar}}

Warum eine "Wieder" - Einführung? Weil {{Glossary("JavaScript")}} als [die am meisten missverstandene Programmiersprache der Welt](http://javascript.crockford.com/javascript.html) bekannt ist. Obwohl die Sprache oft als Spielzeug abgewertet wird, besitzt sie neben ihrer Einfachheit einige mächtige Sprachfunktionen. Heutzutage wird JavaScript in einer Großzahl von wichtigen Anwendungen verwendet, was zeigt, dass Wissen über diese Technologie eine wichtige Eigenschaft für jeden Web- und Mobil-Entwickler ist.

Es ist sinnvoll mit einem Überblick über die Sprachgeschichte zu beginnen. JavaScript wurde im Jahr 1995 von Brendan Eich entworfen, der Ingenieur bei Netscape war. JavaScript wurde erstmals 1996 mit Netscape 2 veröffentlicht. Ursprünglich hieß die Sprache LiveScript, wurde aber wegen unglücklichen Marketingentscheidung umbenannt, die sich die Popularität der Java-Sprache von Sun Microsystem zunutze machen wollte - obwohl beide wenig gemeinsam hatten. Dies ist seither eine Quelle für Verwirrung.

Einige Monate später veröffentlichte Microsoft JScript mit dem Internet Explorer 3. Diese war eine weitgehend zu JavaScript kompatibele Sprache. Einige Monate später übergab Netscape JavaScript an [Ecma International](https://www.ecma-international.org/), einer Europäischen Standardisierungsorganisation, welche noch im selben Jahr die ersten Edition des {{Glossary("ECMAScript")}} Standards veröffentlichten. Der Standard bekam 1999 ein bedeutendes Update mit [ECMAScript Edition 3](https://www.ecma-international.org/publications/standards/Ecma-262.htm) und hält sich seither sehr stabil. Die vierte Edition des Standards wurde aufgrund von politischen Meinungsverschiedenheiten zur Komplexität der Sprache fallen gelassen. Viele Teile der vieren Edition bildeten die Basis der fünften und sechsten Edition des Standards, welche im Dezember 2009 bzw. im Juni 2015 veröffentlicht wurden.

> **Note:** Aus Gründen der Vertrautheit verwenden wir ab hier die Bezeichnung "JavaScript" anstatt "ECMAScript".

Anders als viele andere Programmiersprachen, gibt es bei JavaScript kein Konzept für Eingabe und Ausgabe. JavaScript wurde als Skriptsprache in eine Hostumgebung entworfen und es ist die Aufgabe dieser Umgebung Mechanismen für die Kommunikation mit der Außenwelt bereitzustellen. Die hierfür am meisten genutzte Hostumgebung ist der Browser, jedoch findet man Interpreter auch in vielen anderen Anwendungen, zum Beispiel Adobe Acrobat, Photoshop, SVG Bilder, Yahoo! Widget Umgebung, serverseitigen Applikationen wie [node.js](https://nodejs.org/), NoSQL-Datenbanken wie die Open Source-Datenbank [Apache CouchDB](https://couchdb.apache.org/), integrierte Computer, Desktopumgebungen wie [GNOME](https://www.gnome.org/) (eine der beliebtesten Desktopumgebungen für GNU/Linux Betriebssysteme) und vielen mehr.

## Überblick

JavaScript ist eine dynamische Multi-Paradigmen-Sprache mit Typen und Operatoren, Standardobjekten und Methoden. Die Syntax basiert auf den Sprachen Java und C — viele Strukturen aus diesen Sprachen wurden in JavaScript übernommen. JavaScript unterstützt Objektorientierung mit Prototypobjekten statt Klassen (mehr darüber in [Vererbung mit Prototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und ES2015 [Klassen](/de/docs/Web/JavaScript/Reference/Classes)). JavaScript unterstützt auch funktionale Programmierung — Funktionen sind Objekte, die Funktionen ermöglichen, ausführbaren Code zu speichern und wie jedes andere Objekt weitergegeben zu werden.

Beginnen wir mit einer Betrachtung der Sprachbausteine. JavaScript Programme manipulieren Werte und jeder Wert ist von einem bestimmten Typ. JavaScript Typen sind:

- {{jsxref("Number")}}
- {{jsxref("String")}}
- {{jsxref("Boolean")}}
- {{jsxref("Function")}}
- {{jsxref("Object")}}
- {{jsxref("Symbol")}} (neu in ES 6)

... und {{jsxref("undefined")}} und {{jsxref("null")}}, die ein wenig speziell sind. Und {{jsxref("Array")}} , die eine besonere Art von Objekt ist. Und {{jsxref("Date")}} [](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)und {{jsxref("RegExp")}}, welche man quasi mitgeliefert bekommt. Wenn man genau sein will, sind Funktionen ebenfalls eine spezielle Art von Objekten. Also sieht das Typdiagramm eher so aus:

- {{jsxref("Number")}}
- {{jsxref("String")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}} (neu in ES2015)
- {{jsxref("Object")}}

  - {{jsxref("Function")}}
  - {{jsxref("Array")}}
  - {{jsxref("Date")}}
  - {{jsxref("RegExp")}}

- {{jsxref("null")}}
- {{jsxref("undefined")}}

Zusätzlich gibt es noch einige vordefinierte {{jsxref("Error")}} Typen. Der Einfachheit halber beschränken wir uns im Folgenden erst einmal auf die Typen aus dem ersten Diagramm.

## Numbers

Numbers sind in JavaScript laut der Spezifikation "doppeltpräzise 64-bit Werte im IEEE 754 Format". Das hat einige interessante Konsequenzen. Es gibt in JavaScript nichts vergleichbares wie Integer, weshalb man vorsichtig mit Arithmetik umgehen muss, wenn man Mathematik wie in C oder Java nutzt.

Achte auch auf Dinge wie:

```js
0.1 + 0.2 == 0.30000000000000004
```

In der Praxis werden Integer-Werte wie 32-Bit-Integer behandelt und einige Implementierungen speichern sie sogar so, bis sie einen Befehl ausführen sollen, der für eine Number, aber nicht für eine 32-Bit Integer gültig ist. Das kann z.B. für Bitoperationen wichtig sein.

Unterstützt werden die [arithmetischen Standardoperationen](/de/docs/Web/JavaScript/Reference/Operators#Arithmetische_Operatoren), inklusive Addition, Subtraktion, Modulo (oder Rest) Arithmetik und so weiter. Außerdem existiert noch ein Objekt _Math_ für die Anwendung von mathematischen Funktionen und Konstanten, welches oben noch nicht genannt wurde:

```js
Math.sin(3.5);
var umfang = 2 * Math.PI * r;
```

Man kann Strings mit der eingebauten {{jsxref("Global_Objects/parseInt", "parseInt()")}} Funktion nach Integer konvertieren. Die Funktion enthält die Basis des Zahlensystems für die Konvertierung als zweiten optionalen Parameter, welcher immer angegeben werden sollte:

```js
parseInt("123", 10); // 123
parseInt("010", 10); // 10
```

In älteren Browsern werden Strings, die mit "0" anfangen als Oktalzahlen (Basis 8) interpretiert, seit 2013 ist das aber nicht mehr so. Wenn man sich bei dem Stringformat nicht sicher ist, kann das in den älteren Browsern zu überraschenden Ergebnissen führen:

```js
parseInt("010");  //  8
parseInt("0x10"); // 16
```

Hier sieht man, dass die {{jsxref("Global_Objects/parseInt", "parseInt()")}} Funktion den ersten String als Oktalzahl, wegen der führenden 0, und den zweiten String als Hexadezimalzahl, wegen des führenden "0x", interpretiert. Die Hexadezimalnotation ist immernoch zulässig; nur die Oktalnotation wurde entfernt, weil sie praktisch nicht mehr verwendet wird.

Um eine Binärzahl in ein Integer zu ändern, verwendet man einfach die Basis 2:

```js
parseInt("11", 2); // 3
```

Auf die gleiche Weise lassen sich auch Gleitkommazahlen mit Hilfe der Funktion[ ](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat){{jsxref("Global_Objects/parseFloat", "parseFloat()")}} konvertieren. Anders als bei der {{jsxref("Global_Objects/parseInt", "parseInt()")}} Funktion nutzt `parseFloat()` immer die Basis 10.

Auch der unäre + Operator kann eingesetzt werden, um zu einer Zahl zu konvertieren:

```js
+ "42";   // 42
+ "010";  // 10
+ "0x10"; // 16
```

Ein spezieller Wert mit der Bezeichnung {{jsxref("NaN")}} (für "Not a Number") wird zurückgegeben, wenn der String keinen numerischen Wert enthält:

```js
parseInt("hello", 10); // NaN
```

`NaN` ist gefährlich: Wenn es als Operand in eine mathematische Operation benutzt wird, wird das Ergebnis ebenfalls `NaN` sein;

```js
NaN + 5; // NaN
```

Mit der eingebauten {{jsxref("Global_Objects/isNaN", "isNaN()")}} Funktion kann man auf `NaN` testen:

```js
isNaN(NaN); // true
```

JavaScript kennt außerdem die speziellen Werte {{jsxref("Infinity")}} und `-Infinity`:

```js
 1 / 0; //  Infinity
-1 / 0; // -Infinity
```

Man kann auf `Infinity`, `-Infinity` und `NaN` Werte mit der eingebauten Funktion {{jsxref("Global_Objects/isFinite", "isFinite()")}} testen:

```js
isFinite(1 / 0);     // false
isFinite(-Infinity); // false
isFinite(NaN);       // false
```

> **Note:** Die {{jsxref("Global_Objects/parseInt", "parseInt()")}} und {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} Funktionen lesen einen String, bis ein Zeichen erreicht wird, welches für das Zahlensystem unzulässig ist und geben die Zahl bis zu dieser Stelle zurück. Der unäre + Operator konvertiert den String einfach zu `NaN`, wenn dieser ein unerlaubtes Zeichen enthält. Probiere mal aus, den String "10.2abc" mit jeder der Methoden in der Console zu konvertieren, um die Unterschiede besser zu verstehen.

## Strings

Strings sind in JavaScript eine Folge von [Unicode-Zeichen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#String_Literale). Das sollte für alle erfreulich sein, die mit Internationalisierung arbeiten. Genauer gesagt sind Strings Folgen von UTF-16 Codeeinheit; jeder Codeeinheit ist durch eine 16-Bit Zahl repräsentiert. Jedes Unicode-Zeichen besteht aus 1 oder 2 Codeeinheiten.

Für ein einzelnes Zeichen, verwendet man einfach einen String mit einem Zeichen.

Um die Länge eines Strings (in Codeeinheiten) herauszufinden, nutzt man die [length ](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)Eigenschaft:

```js
'hello'.length; // 5
```

Da ist die erster Begegnung mit JavaScript Objekten! Haben wir schon erwähnt, dass man auch Strings wie {{jsxref("Object", "Objekte", "", 1)}} verwenden kann? Sie haben auch {{jsxref("String", "Methoden", "#Methoden", 1)}}, um den Strings zu verändern und Informationen zu erhalten.

```js
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```

## Andere Datentypen

JavaScript unterscheidet zwischen {{jsxref("null")}}, wobei es sich um einen Wert handelt, der einen "nicht Wert" repräsentiert (und nur über das `null` Schlüsselwort erreichbar ist) und {{jsxref("undefined")}}, wobei es sich um einen Wert vom Typ `undefined` handelt, welcher für einen nicht initialisierten Wert steht - also, dass noch kein Wert zugewiesen wurde. Variablen werden später besprochen, aber in JavaScript ist es möglich Variablen zu deklarieren, ohne ihnen eine Wert zuzuweisen. Wenn das gemacht wird ist die Variable vom Typ `undefined`. `undefined` ist sogar eine Konstante.

JavaScript hat einen Boolean Typ mit den möglichen Werten `true` und `false` (beide sind Schlüsselwörter). Jeder Wert kann mit den folgenden Regeln zu einem Boolean konvertiert werden:

1.  `false`, `0`, leere Strings (`""`), `NaN`, `null`, und `undefined` werden `false`.
2.  Alle anderen Werte werden `true`.

Die Konvertierung kann explizit mit der `Boolean()` Funktion durchgeführt werden:

```js
Boolean('');  // false
Boolean(234); // true
```

Das ist jedoch kaum nötig, da JavaScript die Konvertierung automatisch vornimmt, wenn ein Boolean erwartet wird, wie z.B. bei einer `if`-Anweisung (siehe unten). Aus diesem Grund ist oft von "true Werten" und "false Werten" die Rede, womit Werte gemeint sind, die zu `true` oder `false` werden, nachdem sie zu einem Boolean konvertiert wurden. Alternativ können diese Werte auch "truthy" und "falsy" genannt werden.

Boolesche Operationen wie beispielsweise `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden ebenfalls unterstützt (siehe unten).

## Variablen

Neue Variablen werden in JavaScript mit einem der drei Schlüsselwort [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var "/en/JavaScript/Reference/Statements/var") [](/de/docs/Web/JavaScript/Reference/Statements/var)deklariert.

**`let`** erlaubt es Variablen auf Blockebene zu deklarieren. Die deklarierte Variable ist in dem Block gültig, von dem sie umschlossen wird.

```js
let a;
let name = "Simon";
```

Im folgenden ist ein Beispiel für den Gültigkeitsbereich einer mit **`let`** deklarierten Variablen:

```js
// myLetVariable ist hier *nicht* sichtbar

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable ist nur hier sichtbar
}

// myLetVariable ist hier *nicht* sichtbar
```

**`const`** erlaubt es Variablen zu deklarieren, dessen Wert nie wieder geändert wird. Die Variable ist in dem Block sichtbar, von dem sie umschlossen wird.

```js
const Pi = 3.14;  // Variable Pi wird initialisiert
Pi = 1;  // Führt zu einem Fehler, weil konstante (const) Variablen nicht geändert werden können.
```

**`var`** ist das gebräuchlichste deklarative Schlüsselwort. Es hat nicht die Restriktionen, die die anderen beiden Schlüsselwörter haben. Das liegt daran, dass das traditionell der einzige Weg war, um eine Variable in JavaScript zu deklarieren. Eine Variable, die mit dem **`var`** Schlüsselwort definiert wird, ist in der Funktion, in der sie deklariert wird, erreichbar.

```js
var a;
var name = 'Simon';
```

Im folgenden ist ein Beispiel für den Gültigkeitsbereich einer mit **`var`** deklarierten Variablen:

```js
// myVarVariable *ist* hier sichtbar

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
// myVarVariable ist in der ganzen Funktion sichtbar
}

// myVarVariable *ist* hier sichtbar
```

Deklariert man eine Variable, ohne ihr einen Wert zuzuweisen, ist ihr Typ `undefined`.

Ein sehr wichtiger Unterschied zu anderen Programmiersprachen wie Java besteht darin, dass bei JavaScript keine Blöckegültigkeitsbereiche hat, sondern nur Funktionsgültigkeitsbereiche. Wird eine Variable mit dem `var` Schlüsselwort in einer zusammengesetzten Statement (z.B. if-Anweisung) definiert, so ist diese Variable innerhalb der ganzen Funktion sichtbar. Jedoch ist es ab ECMAScript 2015 mit [let ](/de/docs/Web/JavaScript/Reference/Statements/let)und [const](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen möglich, Variablen mit Blocksichtbarkeitsbereich zu erstellen.

## Operatoren

JavaScripts numerische Operatoren sind `+`, `-`, `*`, `/` und `%` welches der Divisionsrestoperator ist ([nicht dasselbe wie Modulo](</de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Divisionsrest_()>)). Werte werden mit `=` zugewiesen und es gibt zusammengesetzte Zuweisungsstatement wie `+=` und `-=`. Diese werden als `x = x Operator y` interpretiert.

```js
x += 5
x = x + 5
```

Zum Inkrementieren und Dekrementieren kann `++` und `--` verwendet werden. Diese können als Prefix oder Postfix Operatoren benutzt werden.

Mit dem [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition) ist es auch möglich, Strings zu verbinden:

```js
'hello' + ' world'; // "hello world"
```

Addiert man einen String mit einer Zahl (oder einem anderen Wert), wird alles zuerst zu einem String konvertiert. Dies bereitet manchmal Probleme:

```js
"3" + 4 + 5;  // "345"
3 + 4 + "5"; // "75"
```

Das Addieren eines leeren Strings zu einem Wert ist eine hilfreiche Methode, den Wert in einen String zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators/Vergleichsoperatoren "en/Core_JavaScript_1.5_Reference/Operators/Comparison_Operators") können in JavaScript mit `<`, `>`, `<=` und `>=` durchgeführt werden. Dieses funktionieren bei Strings und Zahlen. Gleichheit ist etwas komplizierter. Der Doppelgleichoperator hat einen Typzwang, was zu überraschend Ergebnissen führen kann:

```js
123 == "123"; // true
1 == true;    // true
```

Um den Typzwang zu vermeiden, benutzt man den Dreifachgleichoperator:

```js
123 === "123"; // false
1 === true;    // false
```

Des Weiteren gibt es die Operatoren != und !== für das Testen auf Ungleichheit.

Außerdem gibt es in JavaScript noch [bitweise Operationen](/en/JavaScript/Reference/Operators/Bitwise_Operators "en/Core_JavaScript_1.5_Reference/Operators/Bitwise_Operators").

## Kontrollstrukturen

JavaScript hat eine ähnliche Menge an Kontrollstrukturen wie andere Sprachen aus der C Familie. Bedingte Statements sind durch `if` und `else` unterstützt; man kann sie auch verketten:

```js
var name = 'kittens';
if (name == 'puppies') {
  name += ' woof';
} else if (name == 'kittens') {
  name += ' neow';
} else {
  name += '!';
}
name == 'kittens neow';
```

JavaScript hat `while`- und `do-while`-Schleifen. Die erste ist gut für normale Schleifen. Die zweite ist für Schleifen geeignet, bei denen sichergestellt werden soll, dass der Schleifeninhalt mindestens einmal ausgeführt wird:

```js
while (true) {
  // Endlosschleife!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input))
```

JavaScripts [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die selbe wie in C und Java: Die Kontrollinformationen können in einer einzigen Zeile angegeben werden.

```js
for (var i = 0; i < 5; i++) {
  // Wird 5-Mal ausgeführt
}
```

JavaScript hat zudem zwei weitere bekannte for Schleifen: [`for`...`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)

```js
for (let value of array) {
  // Tue etwas mit value
}
```

und [`for`...`in`](/de/docs/Web/JavaScript/Reference/Statements/for...in):

```js
for (let property in object) {
  // Tue etwas mit dem objects property
}
```

Die Operatoren `&&` und `||` benutzen Kurzschlusslogik, was bedeutet, dass die Ausführung des zweiten Operanden abhängig von dem ersten ist. Dieses ist nützlich für die Überprüfung auf null, bevor auf Objektattribute zugegriffen wird:

```js
var name = o && o.getName();
```

Oder für das Abfangen von Werten (wenn falsy Werte nicht valide sind):

```js
var name = cachedName || (cachedName = getName());
```

JavaScript besitzt einen ternären Operator für bedingte Ausdrücke:

```js
var allowed = (age > 18) ? 'yes' : 'no';
```

Das `switch` Statement kann führ mehrere Zweige abhängig von einer Zahl oder einem String eingesetzt werden:

```js
switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}
```

Lässt man das `break` Statement weg, werden auch der folgezweig ausgeführt. Dieses Verhalten ist selten gewollt — es lohnt sich in solchen Fällen explizite Kommentare hinzuzufügen, um späteres Debugging zu unterstützen:

```js
switch(a) {
    case 1: // fallthrough
    case 2:
        eatit();
        break;
    default:
        donothing();
}
```

Die `default` Klausel ist optional. Wenn gewünscht, können Ausdrücke im `switch` und im `case` eingesetzt werden. Der Vergleiche zwischen beiden wird mit dem === Operator durchgeführt:

```js
switch(1 + 3) {
    case 2 + 2:
        yay();
        break;
    default:
        neverhappens();
}
```

## Objekte

JavaScript Objekte setzen sich aus einfachen Name-Wert-Paaren zusammen. Sie sind ähnlich wie:

- Dictionaries in Python
- Hashes in Perl und Ruby
- Hash tables in C und C++
- HashMaps in Java
- Assoziative Arrays in PHP

Der Fakt, dass diese Datenstruktur so oft eingesetzt wird, zeigt seine Vielseitigkeit. Da alles (reine Kerntypen) in JavaScript ein Objekt ist, beinhaltet jedes JavaScript-Programm natürlich eine große Menge von Suchoperationen in Hashtabellen. Gut, dass diese so schnell sind!

Der "Name"-Teil ist ein JavaScript String, während als Wert jeder JavaScript Wert in Frage kommt — auch andere Objekte. Dies ermöglicht das Erstellen von beliebig komplexen Datenstrukturen.

Es gibt zwei grundlegende Möglichkeiten, ein leeres Objekt zu erstellen:

```js
var obj = new Object();
```

Und:

```js
var obj = {};
```

Beide sind semantisch äquivalent. Die zweite wird "Objektliteral Syntax" genannt und ist verbreiteter. Diese Syntax ist zudem der Kern des JSON Formates und sollte immer bevorzugt genutzt werden.

"Objektliteral Syntax" kann eingesetzt werden, um ein umfassendes Objekt zu erstellen:

```js
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}
```

Der Zugriff auf Eigenschaften kann verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Das folgende Beispiel erstellt einen Prototyp `Person` und eine Instanz dieses Prototyps `you`.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Definiere ein Objekt
var you = new Person('You', 24);
// Wir erstellen eine Person mit dem Namen "You" und dem Alter 24
```

**Nach der Erstellung** kann eine Objekteigenschaft über einem von zwei möglichen Wegen erreicht werden:

```js
obj.name = "Simon";
var name = obj.name;
```

Und...

```js
// Klammernotation
obj['name'] = 'Simon';
var name = obj['name'];
// man kann eine Variable benutzen, um einen Schlüssel zu definieren
var user = prompt('was ist dein Schlüssel?');
obj[user] = prompt('was ist dein Schlüssel?');
```

Beide sind wieder semantisch äquivalent. Die zweite Methode hat den Vorteil, dass der Name der Eigenschaft als String zur Verfügung gestellt wird, was bedeutet, dass dieser zur Laufzeit berechnet werden kann. Jedoch verhindert diese Methode, dass einige JavaScript-Engines "Minifier Optimierungen" durchführen können. Sie kann außerdem eingesetzt werden, um Eigenschaften zu erreichen, die ein [reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Schlüsselwörter "en/Core_JavaScript_1.5_Reference/Reserved_Words") als Namen haben:

```js
obj.for = "Simon"; // Syntaxfehler, da 'for' ein reserviertes Schlüsselwort ist
obj["for"] = "Simon"; // funktioniert
```

> **Note:** Ab ECMAScript 5 können reservierte Wörter bei Objektliteralen verwendet werden. Das bedeutet, dass keine Anführungszeichen und eckige Klammern mehr nötig sind. [Siehe ES5 Spec](https://es5.github.io/#x7.6.1).

Weitere Informationen zu Objekten und Prototypen gibt es im Artikel [Object.prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). Für eine Erklärung von Objektprototypen und die Objektprototypenkette siehe in den Artikel [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

> **Note:** Ab ECMAScript 2015 können Schlüssel mit Variablen definiert werden, indem eckige Klammern verwendet werden. `{[phoneType]: 12345}` ist möglich, statt `var userPhone = {}; userPhone[phoneType] = 12345` zu verwenden.

## Arrays

Arrays sind in JavaScript ein spezieller Typ von Objekten. Sie funktionieren weitgehend wie normale Objekte (numerische Eigenschaften können nur über die `[]`-Syntax erreicht werden), besitzen jedoch eine zusätzliche Eigenschaft `length`. Der Wert dieser Eigenschaft ist immer der höchsten Index des Arrays + 1.

Eine Möglichkeit ein Array zu erstellen ist die folgende:

```js
var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3
```

Eine praktischere Möglichkeit ist die Erstellung über ein Array-Literal.

```js
var a = ['dog', 'cat', 'hen'];
a.length; // 3
```

Zu beachten ist, dass `array.length` nicht unbedingt der Anzahl der Elemente des Arrays entspricht. Siehe das folgende Beispiel:

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

Zur Erinnerung: Der Wert von `length` entspricht immer dem höchsten Index + 1.

Versucht man auf einen nicht-existenten Array-Index zuzugreifen, erhält man `undefined`:

```js
typeof a[90]; // undefined
```

Wenn Sie die obigen Angaben über `[]` und Länge (`array.length`) berücksichtigen, können Sie über ein Array iterieren, indem Sie die folgende for-Schleife verwenden:

```js
for (var i = 0; i < a.length; i++) {
    // Verarbeitung von a[i]
}
```

ECMAScript (ES2015) empfiehlt die wesentlich kürzer gefasste [`for`...`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um über Objekte und Arrays zu iterieren:

```js
for (const currentValue of a) {
  // Tue etwas mit currentValue
}
```

Man kann auch mit einer [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife über ein Array iterieren, wobei diese nicht über die Arrayelemente, sondern die Arrayindizes iteriert. Zudem wird bei einer solchen Schleife auch über Eigenschaften iteriert, die evtl. später in `Array.prototype` hinzugefügt werden. Deshalb wird diese Methode für Arrays nicht empfohlen.

In ECMAScript (ES2015) wurde mit [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) eine weitere Schleife zur Iteration über Arrays eingeführt:

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Verarbeite currentValue oder array[index]
});
```

Das Anhängen eines neuen Elements zu einem Array funktioniert folgendermaßen:

```js
a.push(item);
```

Arrays besitzen viele Methoden. [Hier findet man die Dokumentation für alle Array Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).

| Methodenname                                         | Beschreibung                                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `a.toString()`                                       | Gibt einen String zurück, bei dem `toString()` jedes Objektes getrennt mit Komma ist.           |
| `a.toLocaleString()`                                 | Gibt einen String zurück, bei dem ` toLocaleString``() ` jedes Objektes getrennt mit Komma ist. |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | Erstellt eine Kopie mit den neu hinzugefügten Elemente.                                         |
| `a.join(sep)`                                        | Wandelt das Array in einen String um. Die Elemente werden durch `sep` getrennt.                 |
| `a.pop()`                                            | Entfernt das letzte Element und gibt es zurück.                                                 |
| `a.push(item1, ..., itemN)`                          | Fügt ein oder mehrere Elemente am Ende hinzu.                                                   |
| `a.reverse()`                                        | Kehrt die Reihenfolge des Arrays um.                                                            |
| `a.shift()`                                          | Entfernt das erste Element und gibt es zurück.                                                  |
| `a.slice(start, end)`                                | Gibt einen Teil eines Arrays zurück.                                                            |
| `a.sort([cmpfn])`                                    | Sortiert das Array. Ein Vergleichsfunktion kann optional angegeben werden.                      |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | Modifiziert ein Array, indem ein Teil gelöscht und durch mehrere Elemente ersetzt wird.         |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | Fügt Elemente am Anfang des Arrays hinzu.                                                       |

## Funktionen

Neben Objekten gehören Funktionen zu den Kernkomponenten von JavaScript. Die Syntax für eine einfache Funktion könnte kaum einfacher sein:

```js
function add(x, y) {
    var total = x + y;
    return total;
}
```

Das Beispiel demonstriert eine einfache Funktion. Einer JavaScript-Funktion können 0 oder mehr benannte Parameter übergeben werden. Der Funktionsrumpf kann beliebig viele Anweisungen enthalten und kann seine eigene lokalen Variablen definieren, die nur in der Funktion erreichbar sind. Das `return` Statement kann dazu benutzt werden, um jederzeit einen Rückgabewert festzulegen und die Funktion zu beenden. Wird kein `return`-Statement angegeben (oder ein leeres `return`-Statement ohne Wert), gibt JavaScript `undefined` zurück.

Die benannten Parameter sind eher als Richtlinie zu verstehen, weniger als eine Pflichtangabe. Eine Funktion kann also auch ohne Angabe der Parameter aufgerufen werden, wobei die Parameter dann den Wert `undefined` bekommen.

```js
add() //NaN
// Addition mit undefined ist nicht möglich
```

Mann kann der Funktion auch mehr Parameter übergeben, als erwartet werden:

```js
add(2, 3, 4) // 5
// Addition der ersten beiden Parameter; 4 wird ignoriert
```

Auf den ersten Blick wirkt das komisch, jedoch haben Funktionen innerhalb des Funktionsrumpfes Zugriff auf eine zusätzliche Variable namens [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments "En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments"), welche ein arrayähnliches Objekt ist, das alle der Funktion übergebenen Werte enthält. Hier eine überarbeitete `add-`Funktion, die beliebig viele Parameter verarbeitet:

```js
function add() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

add(2, 3, 4, 5); // 14
```

Das ist jedoch nicht nützlicher als `2 + 3 + 4 + 5` zu schreiben. Deswegen erstellen wir eine Funktion, welche den Durchschnitt aller Werte in unserem Array berechnet:

```js
function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

Das ist wirklich nützlich, jedoch wirkt es noch ein bisschen lang. Um den Code ein wenig zu reduzieren, kann man den Einsatz des `arguments`-Arrays durch eine [Rest Parameter Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) ersetzen. Damit können beliebig viele Argumente übergeben werden und der Code bleibt minimal. Der **Rest Parameter Operator** wird in der Funktionsparameterliste mit dem Format `...variable` geschrieben und enthält alle nicht benannten, der Funktion übergebenen Argumente in der Variable. Zudem kann man die `for`-Schleife durch eine `for...of`-Schleife ersetzen, um die Werte in der Variablen direkt verwenden zu können.

```js
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

> **Note:** Die Variable `args` in der oberen Funktion enthält alle an die Funktion übergebenen Werte.Es ist wichtig zu beachten, dass der Einsatz des **Rest Parameter Operators** in einer Funktionsdeklaration alle Argumente **nach** der Deklaration enthält, jedoch nicht die davor. Z. B. wird bei `function avg(firstValue, ...args)` der erste der Funktion übergebene Wert in der Variable `firstValue` gespeichert und alle folgenden Werte werden in der Variable `args` gespeichert. Das ist eine sehr nützliche Sprachfunktion, die jedoch ein neues Problem aufwirft. Die Funktion `avg()` nimmt eine mit Kommata getrennte Liste von Argumenten entgegen — was ist jedoch, wenn man den Durchschnitt eines Arrays haben möchte? Man kann die Funktion folgendermaßen umschreiben:

```js
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j =  arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

Es wäre jedoch schöner, wenn man die erste Funktion wiederverwenden könnten. Glücklicherweise ist es bei JavaScript möglich, eine Funktion mit einem Array von Argumenten aufzurufen, indem man die Methode `apply()` benutzt, die alle `Function`-Objekte besitzen:

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

Das zweite Argument der `apply()`-Funktion ist das Array mit den Argumenten; das erste Argument wird später bzw. weiter unten näher erklärt. Das betont noch einmal die Tatsache, dass Funktionen auch Objekte sind.

> **Note:** Man kann das gleiche Ergebnis mit dem Einsatz des [Spread operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) im Funktionsaufruf erreichen.Zum Beispiel: `avg(...numbers);`

JavaScript erlaubt es, anonyme Funktionen zu erstellen:

```js
var avg = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
```

Die Semantik ist äquivalent zu `function avg()` Form. Es ist extrem mächtig, weil es erlaubt, an bestimmten Stellen vollständige Funktionsdefinition zu schreiben, wo normalerweise ein Ausdruck verwendet wird. Das ermöglicht allerlei klevere Tricks. Hier eine Möglichkeit, eine Variable zu verbergen — wie Variablen mit Blocksichtbarkeit in C:

```js
var a = 1;
var b = 2;

(function() {
  var b = 3;
  a += b;
})();

a; // 4
b; // 2
```

JavaScript erlaubt den rekursiven Aufruf von Funktionen. Das ist praktisch beim Verarbeiten von Baumstrukturen, wie es beim Browser-[DOM](/en/DOM "en/DOM") der Fall ist.

```js
function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}
```

Das hebt ein potentielles Problem mit anonymen Funktionen hervor: Wie ruft man sie rekursiv auf, wenn sie keinen Namen haben? JavaScript erlaubt hierfür die Benennung von Funktionsausdrücken. Man kann dazu benannte "IIFEs" (Immediately Invoked Function Expressions) wie unten beschrieben benutzen:

```js
var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);
```

Der angegebene Name im Funktionsausdruck ist nur innerhalb der selben Funktion verfügbar. Das erlaubt der JavaScript-Engine, den Code besser zu optimieren und fördert die Lesbarkeit des Codes. Der Name wird zudem im Debugger und einigen Stack Traces angezeigt, was beim Debuggen viel Zeit sparen kann.

Zu beachten ist auch hier wieder, dass JavaScript-Funktionen ebenfalls Objekte sind — wie alles andere in JavaScript. Und man kann Eigenschaften ändern und hinzufügen, wie es im oberen Abschnitt über Objekte bereits gezeigt wurde.

## Benutzerdefinierte Objekte

> **Note:** Detaillierte Informationen zum objektorientiertem Programmieren in JavaScript finden Sie in der [Einführung zu objektorientiertem Programmieren in JavaScript](/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript "https://developer.mozilla.org/en/Introduction_to_Object-Oriented_JavaScript").

In klassischen objektorientierten Programmiersprachen sind Objekte Zusammenstellungen von Daten und Methoden, die mit den Daten arbeiten. JavaScript ist eine Prototypenbasierte Sprache, die anders als in Java oder C++ kein Klassen-Statement besitzt (was manchmal verwirrend für Programmierer ist, die bisher nur mit Sprachen mit Klassen-Statements gearbeitet haben). Stattdessen benutzt JavaScript Funktionen als Klassen. Angenommen es gibt ein Objekt `person` mit Feldern für Vor- und Nachnamen. Es gibt zwei Wege den Namen zu schreiben: als "Vorname Nachname" oder "Nachname, Vorname". Nutzt man die vorher beschriebenen Funktionen und Objekte, lässt sich dies z. B. so umsetzen:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last
  };
}
function personFullName(person) {
  return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
  return person.last + ', ' + person.first;
}

s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

Das funktioniert zwar, ist aber keine schöne Lösung. Man hat am Ende dutzende unnötiger Funktionen im globalen Namensraum. Was man braucht ist die Möglichkeit, eine Funktion an ein Objekt anzuhängen. Weil Funktionen Objekte sind, lässt sich dies einfach realisieren:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

s = makePerson("Simon", "Willison")
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

Hier sehen Sie etwas, was vorher noch nicht eingesetzt wurde: Das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort. Wird es innerhalb einer Funktion benutzt, verweist `this` auf das aktuelle Objekt. Was das tatsächlich bedeutet, hängt davon ab, wie die Funktion aufgerufen wird. Wenn die Funktion mit der [Punkt- oder Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Objekt_Initialisierer#Auf_Eigenschaften_zugreifen) auf einem Objekt aufgerufen wird, repräsentiert `this` dieses Objekt. Wird die Punkt-Notation nicht verwendet, dann verweist `this` auf das globale Objekt.

Zu beachten ist, dass `this` ein häufiger Grund für Fehler ist. Zum Beispiel:

```js
s = makePerson("Simon", "Willison");
var fullName = s.fullName;
fullName(); // undefined undefined
```

Wenn `fullName()` alleine und ohne den Einsatz von `s.fullName()` aufgerufen wird, referenziert `this` das globale Objekt. Dort gibt es keine globalen Variablen `first` oder `last`, weshalb man als Rückgabewert `undefined` erhält.

Man kann Vorteile des `this`-Schlüsselwortes nutzen, um die `makePerson`-Funktion zu optimieren:

```js
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
}
var s = new Person("Simon", "Willison");
```

Hier wird ein neues Schlüsselwort aufgeführt: `new`. `new` steht in starker Beziehung zu `this`. Es erstellt ein neues Objekt und ruft die nachstehende Funktion auf, wobei `this` dann das neue Objekt ist. Zu beachten ist, dass die Funktion keinen Wert zurückgibt, sondern das `this`-Objekt modifiziert. Das `new` gibt dann das `this`-Objekt an den Aufrufer zurück. Funktionen die für den Aufruf mit `new` konzipiert sind, nennt man Konstruktoren. Gängige Praxis ist es, diese Funktionen mit einem großen Anfangsbuchstaben zu versehen, um an den Einsatz von `new` zu erinnern.

Die nun optimiertere Funktion hat jedoch immernoch eine Fehlerquelle mit dem Aufruf von` fullName()`.

Das `person`-Objekt wird besser, weist jedoch noch immer einige unangenehme Effekte auf: Bei jedem Erstellen eines `person`-Objekts werden zwei neue Funktionen erzeugt — wäre es nicht besser, wenn dieser Code wiederverwendet werden könnte?

```js
function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}
```

Das ist besser: Man erstellt die Methodenfunktionen nur einmal und referenziert zu diesen im Konstruktor. Geht das noch besser? Die Antwort ist auch hier wieder ja:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
}
```

`Person.prototype` ist ein Objekt, das sich alle `Person`-Instanzen teilen. Dies ist ein Teil einer Prototypen-Suchkette (mit dem speziellen Namen Prototypenkette (prototype chain)): Bei jedem Versuch, auf eine Eigenschaft von `Person` zuzugreifen, die nicht gesetzt ist, prüft JavaScript ob diese Eigenschaft stattdessen in `Person.prototype` vorhanden ist. Als Ergebnis wird alles in `Person.prototype` für alle Instanzen eines Konstruktors über `this` verfügbar.

Das ist ein unglaublich mächtiges Werkzeug. JavaScript erlaubt es Prototypen irgendwo innerhalb des Programmes zu verändern, was bedeutet, dass man Methoden zur Laufzeit zu existierenden Objekten hinzufügen kann:

```js
s = new Person("Simon", "Willison");
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function firstNameCaps() {
  return this.first.toUpperCase()
};
s.firstNameCaps(); // "SIMON"
```

Interessanterweise können auch neue Eigenschaften zu Prototypen von JavaScript-Objekten hinzugefügt werden. So kann z. B. dem `String`-Objekt eine neue Methode hinzugefügt werden, welche den `String` in umgekehrter Reihenfolge zurückgibt:

```js
var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function reversed() {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

Die neue Methode funktioniert sogar mit String-Literalen!

```js
"This can now be reversed".reversed(); // desrever eb won nac sihT
```

Wie schon vorher erwähnt, ist der Prototyp ein Teil einer Kette. Der Anfang dieser Kette ist `Object.prototype`, welcher die Methode `toString()` enthält — das ist die Methode die aufgerufen wird, wenn ein Objekt als `String` repräsentiert werden soll. Das ist für das Debuggen des `Person`-Objekts nützlich:

```js
var s = new Person("Simon", "Willison");
s; // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
};

s.toString(); // "<Person: Simon Willison>"
```

Erinnern Sie sich an die Stelle weiter oben, als `avg.apply()` als erstes Argument `null` übergeben bekommen hat? Diese Stelle können wir uns zur genaueren Betrachtung wieder heranziehen. Mit diesem ersten übergebenen Argument von `apply()` wird das Objekt festgelegt, welches `this` repräsentiert. Hier ist z. B. eine einfache Implementierung von `new`:

```js
function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}
```

Das ist keine exakte Replikation von `new`, weil die Prototypenkette nicht angelegt wird (es wäre schwer, hier vollständig darzustellen). Das ist nichts, was man häufig benötigt, jedoch ist es nützlich darüber Bescheid zu wissen. In diesem Codeteil nennt man `...args` (mit den Punkten) das sogenannte [Restargument](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) — wie der Name impliziert, enthält dieser alle restlichen Argumente.

Der Aufruf von

```js
var bill = trivialNew(Person, "William", "Orange");
```

ist somit fast äquivalent zu

```js
var bill = new Person("William", "Orange");
```

`apply()` hat eine Schwesterfunktion namens [`call`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call "en/Core_JavaScript_1.5_Reference/Global_Objects/Function/call"), die ebenfalls das Setzen von `this` erlaubt, jedoch statt eines Arrays nimmt sie eine erweiterte Liste mit Argumenten entgegen.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// Das gleiche wie:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();
```

### Innere Funktionen

Funktionsdeklarationen sind in JavaScript auch innerhalb von Funktionen erlaubt. Das lies sich bei der weiter oben verwendeten `makePerson()`-Funktion schon erkennen. Ein wichtige Eigenschaft von verschachtelten Funktionen in JavaScript ist der Zugriff auf Variablen aus der Elternfunktion:

```js
function betterExampleNeeded() {
    var a = 1;
    function oneMoreThanA() {
        return a + 1;
    }
    return oneMoreThanA();
}
```

Dies bietet einen großen Nutzen beim Schreiben von einfacher wartbarem Code. Wenn eine Funktion ein oder zwei andere Funktionen benutzt, diese aber im Code nirgendwo anders benötigt werden, kann man diese Hilfsfunktionen in die Funktion schachteln, die diese schlussendlich eigentlich aufruft. Das hällt die Anzahl der globalen Funktionen niedrig, was immer gut ist.

Dieses ist ein Gegenpool zum oft verlockenden Einsatz von globalen Variablen. Wenn komplexer Code geschrieben wird, ist es oft verlockend und einfach, globale Variablen für das Teilen von Werten zwischen mehreren Funktionen zu benutzen — was aber zu einem unwartbaren Code führen kann. Geschachtelte Funktionen teilen sich Variablen aus der Elternfunktion, weshalb dieser Mechanismus gut für das Koppeln von Funktionen geeignet ist, wenn es Sinn ergibt, ohne dabei den globalen Namensraum zu verunreinigen — "lokal global" wenn man so will. Diese Technik sollte mit Vorsicht eingesetzt werden, ist jedoch eine nützliche Möglichkeit.

## Closures

Nun wird einer der mächtigsten Abstraktionsmechanismen vorgestellt, den JavaScript mit sich bringt — der jedoch oft auch für Verwirrung sorgt. Was passiert im nachfolgenden Codeschnipsel?

```js
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var x = makeAdder(5);
var y = makeAdder(20);
x(6); // ?
y(7); // ?
```

Der Name der `makeAdder`-Funktion lässt es schon vermuten, was diese bewirken soll: sie erstellt neue `adder`-Funktionen, welche dann mit einem Argument aufgerufen werden, welches zu dem Argument addiert wird, mit dem sie erstellt wurden.

Was hier passiert ist das gleiche wie das, was vorab mit den inneren Funktionen geschehen ist: eine Funktion, die in einer anderen Funktion definiert ist, hat Zugriff auf die Variable der äußeren Funktion. Hier jedoch mit dem Unterschied, dass die äußere Funktion etwas zurückgibt und vortäuscht, dass die lokalen Variablen nicht mehr existieren. Doch bleiben diese bestehen — andernfalls könnte die `adder`-Funktion nicht funktionieren. Außerdem gibt es zwei verschiedene Kopien der lokalen Variablen der `makeAdder()`-Funktion — eine, wo `a` den Wert 5 hat und eine wo `a` den Wert 20 hat. Die Ergebnisse der beiden Funktionsaufrufe ist deswegen folgendes:

```js
x(6) // ergibt 11
y(7) // ergibt 27
```

Hier ist, was tatsächlich passiert. Immer, wenn JavaScript eine Funktion ausführt, wird ein **Scopeobjekt** erstellt, welches die lokalen Variablen enthält, die in der Funktion erstellt werden. Es wird mit jeder Variablen initialisiert, die als Funktionsparameter übergeben wird. Das ist wie mit dem globalen Objekt, welches alle globalen Variablen und Funktionen in sich vorhält, jedoch mit einigen wichtigen Unterschieden: erstens wird immer ein neues Scopeobjekt für jeden Aufruf einer Funktion erstellt und zweitens (anders als bei globalen Objekten, welche als `this` und in Browsern als `window` erreichbar sind), sind diese Scopeobjekte nicht direkt im JavaScript Code erreichbar. Es gibt zum Beispiel keinen Mechanismus zum Iterieren aller Eigenschaften eines Scopeobjekts.

Beim Aufruf der `makeAdder()`-Funktion wird ein Scope-Objekt erstellt, das eine Eigenschaft besitzt: `a`, welche das übergebene Argument der `makeAdder()` Funktion ist. `makeAdder()` gibt dann eine neu erstellte Funktion zurück. Normalerweise würde der Garbage Collector von JavaScript das für `makeAdder()` erstellte Scopeobjekt an dieser Stelle entsorgen, doch die zurückgegebene Funktion enthält noch immer eine Referenz auf das Scopeobjekt. Als Resultat wird das Scopeobjekt nicht entsorgt, bis es keine Referenzen mehr auf die von `makeAdder()` zurückgegebene Funktion gibt.

Scopeobjekte bilden eine Scopekette, die ähnlich funktioniert wie die Prototypenkette von JavaScripts Objektsystem.

Eine **Closure** ist eine Kombination aus einer Funktion und dem Scopeobjekt, in dem die Funktion erstellt wurde. Closures sind in der Lage, einen Status zu speichern — als solches können sie oft an Stellen von Objekten eingesetzt werden. [Hier sind einige gute Einführungen zu Closures zu finden](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work).
