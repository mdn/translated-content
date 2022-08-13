---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
tags:
  - ECMAScript5
  - JavaScript
  - NeedsTranslation
  - Strict Mode
  - TopicStub
translation_of: Web/JavaScript/Reference/Strict_mode
---
{{JsSidebar("More")}}Der normale, nicht-strikte Modus wird manchmal auch **"{{Glossary("Sloppy Mode")}}"** (schlampiger Modus) genannt. Das ist zwar keine offizielle Bezeichnung, aber behalten Sie das für den Fall der Fälle im Hinterkopf.

Der in ECMAScript 5 eingeführte strikte Modus von JavaScript ist eine Möglichkeit, sich für eine eingeschränkte Variante von JavaScript zu entscheiden, wodurch der "{{Glossary("Sloppy Mode")}}" implizit deaktiviert wird. Der strikte Modus ist nicht nur eine Teilmenge: Er hat absichtlich eine andere Semantik als normaler Code. Browser, die den strikten Modus nicht unterstützen, führen Code im strikten Modus anders aus, als Browser, die ihn unterstützen. Verlassen Sie sich daher nicht auf den strikten Modus, ohne vorher die relevanten Aspekte des strikten Modus zu testen. Code im strikten Modus und Code im nicht-strikten Modus können beidermaßen vorhanden sein, sodass Skripte nach und nach in den strikten Modus überführt werden können.

Der strikte Modus nimmt einige Änderungen an der normalen JavaScript-Semantik vor:

1.  Bisher still ignorierte Fehler führen zum Skriptabbruch.
2.  Behebt Fehler, die Optimierungen durch JavaScript-Interpreter erschweren oder verhindern. Code im strikten Modus kann manchmal schneller ausgeführt werden als identischer Code im nicht-strikten Modus.
3.  Verbietet Syntax, die in zukünftigen Versionen von ECMAScript wahrscheinlich definiert wird.

Siehe [Wechsel zum Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode/wechsel_zum_strict_mode), falls Ihr Code im eingeschränken Modus von JavaScript funktionieren soll.

## In den strikten Modus schalten

Der strikte Modus gilt entweder für _ganze Skripte_ oder _einzelne Funktionen_. Er kann nicht auf einen Anweisungsblock innerhalb geschweifter Klammern `{}` angewendet werden; bei einem solchen Versuch wird nichts passieren. Code, der an `eval`, `Function` oder Event-Handler-Attribute übergeben wird, sowie an {{domxref("WindowTimers.setTimeout()")}} übergebene Strings und dergleichen sind ganze Skripte, in denen das Einschalten des strikten Modus wie erwartet funktioniert.

### Strikter Modus für Skripte

Um ein ganzes Skript in den strikten Modus zu schalten geben Sie _genau_ die Anweisung `"use strict";` (oder `'use strict';`) als _erste_ Anweisung, noch vor allen anderen Anweisungen an.

```js
// Strikter Modus für komplettes Skript
'use strict';
var v = 'Hi!  Ich bin ein Skript im strikten Modus!';
```

Diese Syntax hat eine Falle, in die [bereits auch](https://bugzilla.mozilla.org/show_bug.cgi?id=579119) eine [große Seite](https://bugzilla.mozilla.org/show_bug.cgi?id=627531) getappt ist: Mehrere Skript-Dateien können nicht einfach aneinander gehängt werden.
Wird ein Skript B, das im strikten Modus laufen soll, an ein Skript A, das nicht im strikten Modus laufen soll, angehängt, erscheint das `"use strict";` des angehängtes Skriptes B de facto in der Mitte der zusammengeführten Datei AB und wird folglich vom Interpreter ignoriert.
Ebenso wird im umgekehrten Fall ein eigentlich nicht-striktes Skript, das an ein striktes angehängt wurde, auch im vom ersten Skript gewünschten strikten Modus ausgeführt werden.

Die Verkettung von Skripten ist im Grunde nie ratsam, falls es aber nicht anders geht, ziehen Sie in Betracht den strikten Modus immer nur für einzelne Funktionen zu aktivieren.
Sie können auch den gesamten Inhalt eines Skripts in eine selbstausführende, anonyme Funktion einschließen und für diese den gewünschten Modus festlegen. Dadurch wird das Verkettungsproblem beseitigt, und Sie müssen alle gemeinsam genutzten Variablen explizit aus dem Geltungsbereich der Funktion exportieren.

### Strikter Modus für Funktionen

Um eine Funktion in den strikten Modus zu schalten geben Sie _genau_ die Anweisung `"use strict";` (oder `'use strict';`) im Rumpf der Funktion als _erste_ Anweisung an, vor allen anderen.

```js
function strict(){
  // Syntac im strikten Modus auf Funktions-Ebene
  'use strict';
  function nested() { return 'Und ich auch!'; }
  return 'Hi! Ich bin eine Funktion im strikten Modus! ' + nested();
}
function notStrict() { return 'Ich bin nicht strikt.'; }
```

### Strikter Modus für Module

In ECMAScript 2015 wurden JavaScript-Module eingeführt und damit eine weitere Möglichkeit, in den strikten Modus zu schalten. Der gesamte Inhalt von JavaScript-Modulen wird per Definition im strikten Modus ausgeführt, ein ausdrückliches Einschalten ist nicht nötig.

```js
function strict() {
    // da ich ein Modul bin, bin ich standardmäßig strikt
}
export default strict;
```

## Änderungen im strikten Modus

Der strikte Modus ändert sowohl die Syntax als auch das Laufzeitverhalten. Änderungen fallen im Allgemeinen in folgende Kategorien:

- Änderungen, die Versehen in Fehler umwandeln (als Syntaxfehler oder zur Laufzeit)
- Änderungen, die die Berechnung der jeweiligen Variablen für eine bestimmte Verwendung eines Namens vereinfachen
- Änderungen, die `eval` und `arguments` vereinfachen
- Änderungen, die das Schreiben von "sicherem" JavaScript erleichtern und
- Änderungen, die zukünftige ECMAScript-Entwicklungen vorwegnehmen.

### Versehen in Fehler umwandeln

Der strikte Modus wandelt einige zuvor still akzeptierte Versehen in ausdrückliche Fehler um. JavaScript wurde konzipiert, um Anfängern den Einstieg zu erleichtern und ignoriert Operationen, die eigentlich Fehler sind, stillschweigend. Manchmal wird dadurch das unmittelbare Problem behoben, das kann später jedoch größeren Problemen führen. Der strikte Modus behandelt diese Versehen als Fehler, so dass sie entdeckt und unverzüglich behoben werden können.

Erstens ist es im strikten Modus nicht mehr möglich, versehentlich eine globale Variable zu erstellen. Vertippt man sich bei einer Zuweisung einer Variable in normalem JavaScript wird eine neue Eigenschaft im globalen Objekt erstellt und alles "funktioniert" noch (es kann in Zukunft jedoch trotzdem schiefgehen: wahrscheinlich in modernem JavaScript). Im strikten Modus lösen Zuweisungen, die versehentlich globale Variablen erzeugen würden, einen Fehler aus:

```js
'use strict';
                     // Angenommen eine globale Variable mit dem Namen
vertipeVaiable = 17; // vertippteVariable existiert, verursacht diese Zeile einen
                     // ReferenceError, weil die Variable falsch geschrieben wurde
```

Zweitens löst der strikte Modus bei Zuweisungen, die sonst im Stillen fehlschlagen, eine Exception aus. `NaN` ist beispielsweise eine nicht beschreibbare globale Variable. Bei normalem Code passiert bei der Zuweisung zu `NaN` nichts weiter, insbesondere wird keine Fehlermeldung ausgegeben. Im strikten Modus löst die Zuweisung an `NaN` eine Exception aus. Jede Zuweisung, die im normalen Code unbemerkt fehlschlägt (Zuweisung an ein nicht beschreibbares globales Objekt oder an eine Eigenschaft, Zuweisung an eine Eigenschaft die nur einen Getter hat, Zuweisung an eine neue Eigenschaft eines nicht-existierenden Objekts), löst im strikten Modus eine Exception aus:

```js
'use strict';

// Zuweisung an ein nicht-beschreibbares, globales Objekt
var undefined = 5; // verursacht TypeError
var Infinity = 5; // verursacht TypeError

// Zuweisung an eine nicht-beschreibbare Eigenschaft
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // verursacht TypeError

// Zuweisung an eine Eigenschaft, die nur einen Getter hat
var obj2 = { get x() { return 17; } };
obj2.x = 5; // verursacht TypeError

// Zuweisung einer neuen Eigenschaft an ein nicht-erweiterbares Objekt
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // verursacht TypeError
```

Drittens löst der strikte Modus beim Versuch unlöschbare Eigenschaften zu löschen ebenfalls eine Exception aus:

```js
'use strict';
delete Object.prototype; // verursacht TypeError
```

Viertens erforderte der strikte Modus bis ECMAScript 2015 (vor Gecko 34), dass alle in einem Objekt-Literal aufgeführten Eigenschaften eindeutig definiert werden. Normaler Code kann Eigenschaften mehrfach definieren, wobei die letzte Definition den Wert der Eigenschaft bestimmt.

> **Note:** Dies ist seit ECMAScript 2015 nicht mehr der Fall ({{bug(1041128)}}).

```js
'use strict';
var o = { p: 1, p: 2 }; // !!! Syntaxfehler
```

Fünftens erfordert der strikte Modus, dass die Namen der Funktionsparameter eindeutig sind. Im normalen Code verbirgt das letzte duplizierte Argument vorherige gleichnamige Argumente. Diese vorherigen Argumente sind weiterhin durch `arguments[i]` verfügbar, sodass sie nicht gänzlich unzugänglich sind. Dieses Verstecken ist jedoch wenig sinnvoll und wahrscheinlich unerwünscht (z. B. bei einem Tippfehler), sodass im strikten Modus doppelte Argumentnamen einen Syntaxfehler darstellen:

```js
function sum(a, a, c) { // !!! Syntaxfehler
  'use strict';
  return a + a + c; // falsch, wenn dieser Code ausgeführt würde
}
```

Sechstens verbietet der strikte Modus seit ECMAScript 5 die allein führende Null als Syntax für Oktalzahlen, zum Beispiel ist `0644 === 420` oder `"\ 045" === "%"`. Diese oktale Syntax ist nicht Teil von ECMAScript 5, wird jedoch von allen Browsern unterstützt. In ECMAScript 2015 werden oktalen Zahlen stattdessen die Zeichen `0o` vorangestellt:

```js
var a = 0o10; // ES2015: Octal
```

Anfänger glauben manchmal, dass führende Nullen entsprechend der landläufigen Nutzung des Dezimalsystems keine semantische Bedeutung für den Wert der Zahl an sich hat – und verwenden sie zur Ausrichtung. Dies führt in Javascript jedoch unweigerlich zum Wechsel vom Dezimal- in das Oktalsystem und ergibt mithin einen völlig anderen Wert! Daher sind führende Nullen im strikten Modus ein Syntaxfehler:

```js
'use strict';
var sum = 015 + // !!! Syntaxfehler
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Siebtens verbietet der strikte Modus in ECMAScript 2015 das Zuweisen von Eigenschaften an {{Glossary("primitive")}} Werte. Ohne den strikten Modus wird das einfach ignoriert (no-op), mit dem strikten Modus wird jedoch ein {{jsxref("TypeError")}} ausgelöst.

```js
(function() {
'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();
```

### Vereinfachung der Verwendung von Variablen

Der strikte Modus vereinfacht die Zuordnung von Variablennamen zu bestimmten Variablendefinitionen im Code. Viele Compiler-Optimierungen setzen voraus, dass die Variable _X_ an _diesem_ Ort gespeichert wird. Dies ist für die vollständige Optimierung von JavaScript-Code von entscheidender Bedeutung. JavaScript macht es manchmal unmöglich, diese grundlegende Zuordnung von Name zu Variablendefinition im Code bis zur Laufzeit durchzuführen. Der strikte Modus entfernt die meisten Fälle, in denen dies geschieht, sodass der Compiler den Code im strikten Modus besser optimieren kann.

Erstens verbietet der strikte Modus `with`. Das Problem bei `with` ist, dass ein beliebiger Name innerhalb des Blocks entweder

- einer Eigenschaft des übergebenen Objekts oder
- einer Variablen im umgebenden (oder sogar globalen) Gültigkeitsbereich zur Laufzeit zugeordnet werden kann

Es ist unmöglich vorher zu wissen, welcher Fall eintritt. Der strikte Modus macht aus `with` einen Syntaxfehler, sodass keine Möglichkeit besteht, dass ein Name innerhalb von `with` zur Laufzeit auf einen unbekannten Ort verweist:

```js
'use strict';
var x = 17;
with (obj) { // !!! Syntaxfehler
  // Wenn dies nicht der strikte Modus wäre, wäre dies var x
  // oder wäre es stattdessen obj.x? Es ist im Allgemeinen unmöglich,
  // dies ohne Ausführen des Codes vorherzusagen, daher kann der Name
  // nicht optimiert werden.
  x;
}
```

Die simple Alternative, ein Objekt einer Variablen mit kurzem Namen zuzuweisen, um dann auf die entsprechende Eigenschaft dieser Variable zuzugreifen, macht `with` überflüssig.

Zweitens führt [`eval` im strikten Modus keine neuen Variablen in den umgebenden Geltungsbereich ein](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). In normalem Code fügt `eval("var x;")` eine Variable `x` in die umgebende Funktion oder den globalen Gültigkeitsbereich ein. Das bedeutet im Allgemeinen, dass in einer Funktion, die einen `eval`-Aufruf enthält, jeder Name, der sich nicht auf ein Argument oder eine lokale Variable bezieht, zur Laufzeit einer bestimmten Definition zugeordnet werden muss (da `eval` eine neue Variable eingeführt haben könnte, die die äußere Variable verbirgt). Im strikten Modus erstellt `eval` nur Variablen für den auszuwertenden Code. Daher kann `eval` nicht beeinflussen, ob ein Name auf eine äußere oder eine lokale Variable verweist:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Wenn die Funktion `eval` von einem Ausdruck der Form `eval(...)` in Code im strikten Modus aufgerufen wird, wird der Code ebenfalls im strikten Modus ausgewertet. Der Code kann zwar explizit den strikten Modus aufrufen, dies ist jedoch überflüssig.

```js
function strict1(str) {
  'use strict';
  return eval(str); // str wird als Code im strikten Modus betrachtet
}
function strict2(f, str) {
  'use strict';
  return f(str); // kein eval(...): str ist nur dann strikt wenn
                 // es den strikten Modus aufruft
}
function nonstrict(str) {
  return eval(str); // str ist nur dann strikt wenn
                    // es den strikten Modus aufruft
}

strict1("'Code im strikten Modus!'");
strict1("'use strict'; 'Code im strikten Modus!'");
strict2(eval, "'Code im nicht-strikten Modus.'");
strict2(eval, "'use strict'; 'Code im strikten Modus!'");
nonstrict("'Code im nicht-strikten Modus.'");
nonstrict("'use strict'; 'Code im strikten Modus!'");
```

Daher verhalten sich Namen in `eval`-Code im strikten Modus identisch zu solchen die in regulärem Code im strikten Modus geschrieben wurden, welche kein Ergebnis eines `eval`-Ausdrucks sind.

Drittens verbietet der strikte Modus das Löschen bloßer Namen. `delete name` ist im strikten Modus ein Syntaxfehler:

```js
'use strict';

var x;
delete x; // !!! Syntaxfehler

eval('var y; delete y;'); // !!! Syntaxfehler
```

### Vereinfachung von `eval` und `arguments`

Der strikte Modus macht `arguments` und `eval` weniger bizarr. Beide haben in normalem Code ein erhebliches Maß an fragwürdigem Verhalten: `eval` fügt Bindungen hinzu, entfernt sie oder ändert ihre Werte, während `arguments` durch seine indizierten Eigenschaften benannten Argumenten Aliase gibt. Der strikte Modus versucht `eval` und `arguments` möglichst als Schlüsselwörter zu behandeln, obwohl vollständige Korrekturen erst in einer zukünftigen Ausgabe von ECMAScript verfügbar sein werden.

Erstens können eval und arguments nicht mit Sprachsyntax gebunden oder zugewiesen werden. Sämtliche Versuche dies zu tun verursachen Syntaxfehler:

```js
'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");
```

Zweitens vergibt Code im strikten Modus Eigenschaften keine Aliase, die in `arguments`-Objekten erstellt wurden. In normalem Code innerhalb einer Funktion, deren erstes Argument `arg` ist, setzt das Festlegen von `arg` auch `arguments[0]` und umgekehrt (sofern keine Argumente angegeben wurden oder `arguments[0]` gelöscht wird). `arguments`-Objekte für Funktionen im strikten Modus speichern die ursprünglichen Argumente, wenn die Funktion aufgerufen wird. `arguments[i]` verfolgt weder den Wert des entsprechenden benannten Arguments, noch verfolgt ein benanntes Argument den Wert im entsprechenden `arguments[i]`.

```js
function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

Drittens wird `arguments.callee` nicht mehr unterstützt. In normalem Code bezieht sich `arguments.callee` auf die umschließende Funktion. Dieser Anwendungsfall ist schwach: benennen Sie einfach die umschließende Funktion! Darüber hinaus behindert `arguments.callee` Optimierungen wie das Inlining von Funktionen im Wesentlichen, da es möglich sein muss, einen Verweis auf die nicht Inline-Funktion bereitzustellen, wenn auf `arguments.callee` zugegriffen wird. `arguments.callee` für Funktionen im strikten Modus ist eine nicht löschbare Eigenschaft, die beim Zuweisen oder Abrufen eine Exception auslöst:

```js
'use strict';
var f = function() { return arguments.callee; };
f(); // verursacht TypeError
```

### JavaScript "absichern"

Der strikte Modus erleichtert das Schreiben von "sicherem" JavaScript. Einige Websites bieten Benutzern heute die Möglichkeit, JavaScript zu schreiben, das von der Website _für andere Benutzer ausgeführt wird_. JavaScript in Browsern kann auf die privaten Informationen des Benutzers zugreifen. Daher muss JavaScript vor der Ausführung teilweise transformiert werden, um den Zugriff auf verbotene Funktionalität zu sperren. Ohne viele Laufzeitüberprüfungen macht die Flexibilität von JavaScript dies praktisch unmöglich. Bestimmte Sprachfunktionen sind so tiefgreifend, dass die Durchführung von Laufzeitüberprüfungen erhebliche Leistungseinbußen nach sich zieht. Ein paar Feinjustierungen im strikten Modus sowie die Notwendigkeit, dass vom Benutzer eingegebenes JavaScript im strikten Modus läuft und auf bestimmte Weise aufgerufen wird, reduzieren die Laufzeitprüfungen erheblich.

Erstens wird der als `this` übergebene Wert an eine Funktion im strikten Modus nicht zwingend zu einem Objekt (auch "boxed" genannt). Bei einer normalen Funktion ist `this` immer ein Objekt: Entweder das bereitgestellte Objekt, wenn `this` mit einem Objektwert aufgerufen wird; der boxed Wert, wenn mit `this` mit einem Boolean, einem String oder Number aufgerufen wird; oder das globale Objekt, wenn es mit einem `undefined` oder `null` `this` aufgerufen wird (verwenden Sie [call](/de/Web/JavaScript/Reference/Global_Objects/Function/call), [apply](/de/Web/JavaScript/Reference/Global_Objects/Function/apply) oder [bind](/de/Web/JavaScript/Reference/Global_Objects/Function/bind), um ein bestimmtes zu `this` spezifizieren). Automatisches Boxing ist nicht nur mit Leistungseinbußen verbunden, es ist darüber hinaus ein Sicherheitsrisiko das globale Objekt in Browsern verfügbar zu machen, da das globale Objekt Zugriff auf Funktionen bietet, die "geschützte" JavaScript-Umgebungen einschränken müssen. Für eine Funktion im strikten Modus wird das übergebene this nicht in ein Objekt geboxed, und wenn keine Angabe erfolgt, wird `this` zu `undefined`:

```js
'use strict';
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

Das bedeutet unter anderem, dass es in Browsern nicht mehr möglich ist, das `window`-Objekt innerhalb einer Funktion im strikten Modus durch `this` zu referenzieren.

Zweitens ist es im strikten Modus nicht mehr möglich, den JavaScript-Stack über allgemein implementierte Erweiterungen von ECMAScript zu "durchwandern". Ist in normalem Code eine Funktion namens `fun` mitten in der Ausführung ist `fun.caller` die Funktion die zuletzt `fun` aufgerufen hat und `fun.arguments` ist das `arguments` des Aufrufs von `fun`. Beide Erweiterungen sind für "sicheres" JavaScript problematisch, weil sie es "sicherem" Code erlauben auf "priviligierte" Funktionen und ihre (potentiell ungesicheren) argumente zuzugreifen. Wenn `fun` im strikten Modus ist, sind sowohl `fun.caller` als auch `fun.argument` nicht-löschbare Eigenschaften, die eine Exception auslösen wenn man versucht auf sie zuzugreifen:

```js
function restricted() {
  'use strict';
  restricted.caller;    // verursacht TypeError
  restricted.arguments; // verursacht TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

Drittens gewährt arguments in Funktionen im strikten Modus keinen Zugriff mehr auf die entsprechenden Variablen des Funktionsaufrufs. In einigen ECMAScript-Implementierungen war arguments.caller ein Objekt, dessen Eigenschaften Aliase zu Funktions-Variablen darstellten. Dies ist ein [Sicherheitsrisiko](https://stuff.mit.edu/iap/2008/facebook/), da es die Möglichkeit priviligierte Werte durch Funktionsabstraktion auszublenden einschränkt; es schließt darüber hinaus die meisten Optimierungen aus. Aus diesen Gründen implementieren aktuellen Browser es auch nicht. Aufgrund seiner historischen Funktionalität ist `arguments.caller` jedoch für eine Funktion im strikten Modus auch eine nicht-löschbare Eigenschaft, die beim Zuweisen oder Abrufen eine Exception auslöst:

```js
'use strict';
function fun(a, b) {
  'use strict';
  var v = 12;
  return arguments.caller; // verursacht TypeError
}
fun(1, 2); // gibt v nicht preis (oder a oder b)
```

### Wegbereiter für zukünftige ECMAScript-Versionen

Zukünftige ECMAScript-Versionen werden wahrscheinlich eine neue Syntax einführen, und der strikte Modus in ECMAScript 5 enthält einige Einschränkungen, um den Übergang zu erleichtern. Es ist einfacher, einige Änderungen vorzunehmen, wenn die Grundlagen dieser Änderungen im strikten Modus verboten sind.

Erstens wird im strikten Modus eine kleine Anzahl von Bezeichnern reservierte Schlüsselwörter. Diese sind `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` und `yield`. Im strikten Modus können Sie daher keine Variablen oder Argumente mit diesen Namen benennen oder verwenden.

```js
function package(protected) { // !!!
  'use strict';
  var implements; // !!!

  interface: // !!!
  while (true) {
    break interface; // !!!
  }

  function private() { } // !!!
}
function fun(static) { 'use strict'; } // !!!
```

Zwei Mozilla-spezifische Vorbehalte:

- Wenn Ihr Code in JavaScript 1.7 oder höher geschrieben ist (etwa, in Chrome-Code oder beim Benutzen des richtigen `<script type="">`) und den strikten Modus verwendet, haben `let` und `yield` die Funktionalität, die sie seit ihrer Einführung gehabt haben. Code im strikten Modus im Web, welcher mit `<script src="">` oder `<script>...</script>` geladen wurde, kann `let`/`yield` nicht als Bezeichner verwenden.
- Während ES5 bedingungslos die Wörter `class`, `enum`, `export`, `extends`, `import` und `super` reserviert, reservierte Mozilla sie vor Firefox 5 nur im strikten Modus.

Zweitens [verbietet der strikte Modus Funktionsanweisungen, die nicht auf der obersten Ebene eines Skripts oder einer Funktion stehen](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/). Im normalen Modus sind Funktionsanweisungen in Browsern "überall" zulässig. _Dies ist nicht Teil von ES5 (oder gar ES3)!_ Es ist eine Erweiterung mit inkompatibler Semantik in verschiedenen Browsern. Beachten Sie, dass Funktionsanweisungen außerhalb der obersten Ebene in ES2015 zulässig sind.

```js
'use strict';
if (true) {
  function f() { } // !!! Syntaxfehler
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() { } // !!! Syntaxfehler
  f2();
}

function baz() { // koscher
  function eit() { } // ebenfalls koscher
}
```

Dieses Verbot ist eigentlich nicht Teil des strikten Modus, da solche Funktionsanweisungen eine Erweiterung von grundlegendem ES5 sind. Dies ist jedoch die Empfehlung des ECMAScript-Komitees und Browser werden es implementieren.

## Strikter Modus in Browsern

Die wichtigsten Browser implementieren heute den strikten Modus. Verlassen Sie sich jedoch nicht blind darauf, da in freier Wildbahn immer noch [zahlreiche Browser-Versionen verwendet werden, die den strikten Modus nur teilweise](https://caniuse.com/use-strict) oder gar nicht unterstützen (z. B. Internet Explorer vor Version 10!). _Strikter Modus ändert die Semantik._ Sich auf diese Änderungen zu verlassen, führt zu Versehen und Fehlern in Browsern, die den strikten Modus nicht implementieren. Seien Sie vorsichtig im strikten Modus und erhöhen Sie die Verlässlichkeit des strikten Modus mit Funktionstests, die prüfen, ob die für Ihren Code relevante Teile des strikten Modus implementiert sind. Testen Sie Ihren Code _in Browsern, die den strikten Modus unterstützen und nicht unterstützen._ Wenn Sie nur in Browsern testen, die den strikten Modus nicht unterstützen, bekommen Sie wahrscheinlich Probleme in Browsern, die ihn unterstützen, und umgekehrt.

## Spezifikationen

| Spezifikation                                                                        | Status                   | Kommentar                                                                                                                |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES5.1', '#sec-10.1.1', 'Strict Mode Code')}}         | {{Spec2('ES5.1')}} | Erste Definition. Siehe: [Strict mode restriction and exceptions](http://www.ecma-international.org/ecma-262/5.1/#sec-C) |
| {{SpecName('ES6', '#sec-strict-mode-code', 'Strict Mode Code')}} | {{Spec2('ES6')}}     | [Strict mode restriction and exceptions](http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-of-ecmascript)  |

## Siehe auch

- [Where's Walden? » New ES5 strict mode support: now with poison pills!](https://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [JavaScript "use strict" tutorial for beginners.](http://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict mode compatibility table](https://kangax.github.io/compat-table/es5/#Strict_mode)
- [Wechsel zum Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode/wechsel_zum_strict_mode)
