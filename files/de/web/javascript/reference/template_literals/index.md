---
title: Template-Strings
slug: Web/JavaScript/Reference/Template_literals
translation_of: Web/JavaScript/Reference/Template_literals
original_slug: Web/JavaScript/Reference/template_strings
---
{{JsSidebar("More")}}

Template-Strings sind {{jsxref("String", "String-Symbole")}}, die über mehrere Zeilen gehende Zeichenketten sowie eingebettete Javascript-Ausdrücke ermöglichen.

## Syntax

    `string text`

    `string text line 1
     string text line 2`

    `string text ${expression} string text`

    tag `string text ${expression} string text`

## Beschreibung

Template-Strings sind anstelle von doppelten bzw. einfachen Anführungszeichen in zwei Akzente Gravis `` ` `` (Französisch: accent grave, Englisch: backtick) eingeschlossen.

Sie können Platzhalter beinhalten, die durch das Dollarsymbol gefolgt von geschweiften Klammern gekennzeichnet sind (`${expression}`). Auf diese Weise dienen sie als Vorlagen (Englisch: template), die, zentral definiert, während des Programmablaufs an verschiedenen Stellen individuell eingesetzt werden können.

Die Ausdrücke in den Platzhaltern sowie der Text selbst können an eine optionale Funktion übergeben werden. Falls vor dem Template-String ein Ausdruck vorhanden ist (hier als `tag` bezeichnet), wird der Template-String „Tagged Template String“ genannt. In diesem Fall wird der `tag`-Ausdruck (üblicherweise eine Funktion) mit dem verarbeiteten Template-String aufgerufen, um den Text vor der Ausgabe zu bearbeiten.

Ein Gravis kann in einen Template-String durch Maskieren mit dem Rückstrich `\` eingefügt werden:

```js
`\`` === '`' // --> true
```

#### Der Gravis und das einfache Anführungszeichen

Der Gravis befindet sich auf deutschen Tastaturen rechts neben dem ß und ist nur zusammen mit der Hochstelltaste und einer anschließenden Betätigung der Leertaste zu erreichen.

Das Zeichen wird gelegentlich mit dem einfachen Anführungszeichen `'` verwechselt; dieses befindet sich rechts neben dem Ä.

Im normalen Sprachgebrauch wird es meist zusammen mit den Tasten e oder a genutzt um è bzw. à zu schreiben, analog zur Notwendigkeit einer zusätzlichen Betätigung der Leertaste für \` alleine.

### Mehrzeilige Zeichenketten

In normale Zeichenketten sind Zeilenumbrüche nur durch Einfügen der Sequenz `\n` zu erreichen:

```js
console.log("string text line 1\nstring text line 2");
// Ausgabe:
// string text line 1
// string text line 2

// Identische Ausgabe, jedoch deutlicher durch Trennung:
console.log("string text line 1\n" +
"string text line 2");
```

Das gleiche Ergebnis kann mit Template-Strings einfacher und übersichtlicher erreicht werden, indem der Text so, wie er erscheinen soll, über mehrere Zeilen geschrieben wird:

```js
console.log(`string text line 1
string text line 2`);
// Ausgabe:
// string text line 1
// string text line 2
```

### Ausdrücke in Zeichenketten

Um Javascript-Ausdrücke in normale Strings einzufügen, müsste die folgende Syntax genutzt werden:

```js
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// Ausgabe:
// Fifteen is 15 and
// not 20.
```

Mit Template-Strings können nun die syntaktischen Vorteile genutzt werden um solche Ersetzungen leserlicher zu machen:

```js
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// Ausgabe:
// Fifteen is 15 and
// not 20.
```

### Verschachtelte Vorlagen

Das Verschachteln von Template-Strings ist manchmal die einfachste und lesbarste Möglichkeit, konfigurierbare Vorlagen zu erhalten, denn auch innerhalb von `${ }` können Template-Strings verwendet werden

Die nachfolgenden drei Beispiele haben eine identische Funktion:

ECMAScript 5:

```js
let classes = 'header';
classes += (isLargeScreen() ?
  '' : item.isCollapsed ?
    ' icon-expander' : ' icon-collapser');
```

Eine nicht verschachtelte Vorlage mit ECMAScript 2015:

```js
const classes = `header ${ isLargeScreen() ? '' :
  (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
```

Verschachtelte Vorlage mit ECMAScript 2015:

```js
const classes = `header ${ isLargeScreen() ? '' :
  `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

### Tagged Template-Strings

Eine erweiterte Form der Template-Strings sind _Tagged_ Template-Strings. Mit ihnen kann die Ausgabe von Template-Strings mit einer Funktion ändern.

Das erste Argument enthält ein Array von Strings ("Hello" und "world" in diesem Beispiel). Alle Argumente nach dem ersten sind die Werte der verarbeiteten (manchmal auch _cooked_ genannt, „vorgekocht“) Ausdrücke (hier: "15" und "50").

Im folgenden Beispiel heißt die Funktion `tag`, was aber keinen besonderen Grund hat, da sie jeden gewünschten Namen haben kann.

```js
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"
```

Tag-Funktionen müssen keinen String zurückgeben, wie das folgende Beispiel zeigt.

```js
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
```

### Raw Strings

Die Eigenschaft raw, verfügbar für das erste Argument eines Tagged Template-Strings, erlaubt den Zugriff auf den unverarbeiteten String, also ohne [Escape-Sequenzen](/de/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings) auszuwerten.

```js
function tag(strings, ...values) {
  console.log(strings.raw[0]);
  // "string text line 1 \\n string text line 2"
}

tag`string text line 1 \n string text line 2`;
```

Zusätzlich exisitert die Methode {{jsxref("String.raw()")}} um unverarbeitete Strings zu erstellen, genauso wie sie die vorgegebene Template-Funktion und String-Verknüpfung erstellen würde.

```js
String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6

str.split('').join(',');
// "H,i,\,n,5,!"
```

## Sicherheit

Template-Strings **SOLLTEN NIEMALS** von Nutzern erstellt werden, denen nicht vertraut werden kann, da diese Zugriff auf Variablen und Funktionen haben.

```js
`${console.warn("this is",this)}`; // "this is" Window

let a = 10;
console.warn(`${a+=20}`); // "30"
console.warn(a); // 30
```

## Spezifikationen

| Spezifikation                                                                            | Status               | Kommentar                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-template-literals', 'Template Literals')}} | {{Spec2('ES6')}} | Erste Definition. Definiert in mehreren Abschnitten der Spezifikation: [Template Literals](http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals), [Tagged Templates](http://www.ecma-international.org/ecma-262/6.0/#sec-tagged-templates) |

## Browserkompatibilität

{{Compat("javascript.grammar.template_literals")}}

## See also

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
