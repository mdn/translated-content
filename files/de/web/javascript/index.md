---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Learn
  - l10n:priority
translation_of: Web/JavaScript
---
{{JsSidebar}}

JavaScript (JS) ist eine leichtgewichtige, interpretierte oder JIT-übersetzte Sprache mit {{Glossary("First-class_Function", "First-Class-Funktion")}}. Bekannt ist sie hauptsächlich als Skriptsprache für Webseiten geworden, jedoch wird sie auch in [vielen Umgebungen außerhalb des Browsers](http://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages) wie zum Beispiel [Node.js](http://nodejs.org/), [Apache CouchDB](http://couchdb.apache.org) und [Adobe Acrobat](http://www.adobe.com/devnet/acrobat/javascript.html) eingesetzt. JavaScript ist eine {{Glossary("Prototype-based_programming", "prototypbasierte")}} Sprache, die mehreren Paradigmen folgt, dynamisch ist und sowohl objektorientierte, imperative als auch deklarative Programmierung (z. B. funktionales Programmieren) ermöglicht. Weitere Informationen [über JavaScript](/de/docs/Web/JavaScript/Guide/Ueber_JavaScript).

Dieser Bereich dient zur Beschreibung der Sprache JavaScript selbst, also allgemeinen Inhalten, die nicht nur speziell für Webseiten oder andere Umgebungen gelten. Für weitere Informationen zu bestimmten {{Glossary("API","APIs")}} für Webseiten, siehe auf den Seiten für [Web APIs](/docs/Web/API) und [DOM](/docs/Glossary/DOM).

Der Standard für JavaScript ist [ECMAScript](/de/docs/Web/JavaScript/Language_Resources). Stand 2012 unterstützen alle [modernen Browser](https://kangax.github.io/compat-table/es5/)ECMAScript 5.1 vollständig. Ältere Browser unterstützen mindestens ECMAScript 3. Am 17. Juni 2015 veröffentlichte [ECMA International](https://www.ecma-international.org) die sechste Version von ECMAScript, welche offiziell ECMAScript 2015 genannt wird und initial mit ECMAScript 6 oder ES6 referenziert wurde. Seitdem gibt es jedes Jahr eine neue Version von ECMAScript-Standards. Diese Dokumentation referenziert den letzen Entwurfsstand, welcher aktuell [ECMAScript 2019](https://tc39.github.io/ecma262/) ist.

Man sollte JavaScript nicht mit der [Programmiersprache Java](<https://de.wikipedia.org/wiki/Java_(Programmiersprache)>) verwechseln. Beide, "Java" und "JavaScript" sind Handelsmarken und/oder registrierte Handelsmarken von Oracle in den USA oder anderen Ländern. Die beiden Programmiersprachen haben eine sehr unterschiedliche Syntax, Semantik und Verwendung.

## Tutorials

Lernen Sie, wie man mit JavaScript programmiert, mit Guides und Tutorials.

### Für komplette Einsteiger

Besuchen Sie unseren Lernbereich zu JavaScript-Themen, wenn Sie noch keine Erfahrungen mit JavaScript oder Programmierung haben. Die folgenden Module sind dort verfügbar:

- [Erste Schritte mit JavaScript](/de/Learn/JavaScript/First_steps)
  - : Beantwortet einige fundamentale Fragen, wie "Was ist JavaScript?", "Wie sieht es aus?" und "Was kann es machen?", und diskutiert Schlüsselfunktionen von JavaScript, wie Variablen, Strings, Zahlen und Arrays.
- [JavaScript Bausteine](/de/Learn/JavaScript/Bausteine)
  - : Erweitert die Kenntnisse über JavaScripts fundamentale Schlüsselfunktionen und lenkt die Aufmerksamkeit auf häufig eingesetzte Arten von Codeblöcken, wie Bedingte Statements, Schleifen, Funktionen und Events.
- [Einführung in JavaScript Objekte](/de/docs/Learn/JavaScript/Objects)
  - : Die objektorientierte Natur von JavaScript ist wichtig zu verstehen, wenn man die Sprache weiter lernen möchte und effizienteren Code schreiben möchte. Deswegen ist dieses Modul hier, um Ihnen zu dabei zu helfen.

### JavaScript Guide

- [JavaScript Guide](/docs/Web/JavaScript/Guide)
  - : Ein deutlich detaillierterer Guide für die Sprache JavaScript, der für Leute gedacht ist, die schon Programmiererfahrung mit JavaScript oder anderen Sprachen gesammelt haben.

### Fortgeschritten

- [Clientseitige Web APIs](/de/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Wenn Clientseitige JavaScript für Webseiten oder Applikationen geschrieben werden, kommt man nicht weit ohne den Einsatz von APIs — Schnittstellen für das Manipulieren von verschiedenen Aspekten des Browsers und des Operationssystem, auf dem die Seite läuft oder einfach Daten für andere Webseiten oder Services. Dieses Modul gibt einen Überblick über die APIs und zeigt, wie die am häufigsten eingesetzten APIs oft in der Entwicklungsarbeit benutzt werden.
- [Eine Wiedereinführung in JavaScript](/de/docs/Web/JavaScript/Eine_Wiedereinfuehrung_in_JavaScript)
  - : Ein Überblick für diejenigen, die _meinen_, dass sie JavaScript bereits kennen.

- [JavaScript-Datenstrukturen](/docs/Web/JavaScript/Data_structures)
  - : Überblick über vorhandene Datenstrukturen in JavaScript.
- [Vergleiche auf Gleichheit und deren Verwendung](/de/docs/Web/JavaScript/Vergleiche_auf_Gleichheit_und_deren_Verwendung)
  - : JavaScript stellt drei verschieden Vergleichsoperatoren bereit: Strikte Gleichheit mit `===`, lose Gleichheit mit `==` und die {{jsxref("Global_Objects/Object/is", "Object.is()")}} Methode.

### Erweitert

- [Vererbung und die Prototyp-Kette](/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Erläuterung der vielfach missverstandenen und unterschätzten prototypbasierte Vererbung.
- [Strict mode](/docs/Web/JavaScript/Reference/Strict_mode)
  - : Der Strict mode definiert, dass man keine Variable vor der Initialisierung benutzen kann. Es ist eine eingeschränkte Variante von ECMAScript 5 für bessere Performance und einfacheres Debuggen.
- [JavaScripts typisierte Arrays](/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript typisierte Arrays ermöglichen es, auf binäre Rohdaten zuzugreifen.
- [Speicherverwaltung](/de/docs/Web/JavaScript/Speicherverwaltung)
  - : Speicherzyklen und Garbage Collection in JavaScript.
- [Parallelitätsmodell und Ereignisschleife](/de/docs/Web/JavaScript/EventLoop)
  - : JavaScript hat ein Parallelitätsmodell basierend auf einer Ereignisschleife.

## Referenz

In der kompletten [JavaScript Referenz](/docs/Web/JavaScript/Reference) Dokumentation nachschlagen.

- [Standardobjekte](/docs/Web/JavaScript/Reference/Global_Objects)
  - : Eingebaute Objekte der Standardbibliothek wie {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} und weitere.
- [Ausdrücke & Operatoren](/docs/Web/JavaScript/Reference/Operators)
  - : Mehr lernen über die Bedeutung von JavaScript Operatoren {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, die [Operationsreihenfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) und mehr.
- [Statements & Deklarationen](/docs/Web/JavaScript/Reference/Statements)
  - : Lernen wie {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} und weitere JavaScript Statements und Schlüsselwörter funktionieren.
- [Funktionen](/docs/Web/JavaScript/Reference/Functions)
  - : Lernen, wie man mit JavaScripts Funktionen Erarbeitet, um eine Applikation zu entwickeln.

## Werkzeuge & Hilfen

Hilfreiche Werkzeuge zum Schreiben und Debuggen von JavaScript Code.

- [Firefox Developer Tools](/docs/Tools)
  - : [Scratchpad](/docs/Tools/Scratchpad), [Web-Konsole](/docs/Tools/Web_Console), [JavaScript Profiler](/docs/Tools/Profiler), [Debugger](/docs/Tools/Debugger) und weitere.
- [JavaScript Shells](/docs/Web/JavaScript/Shells)
  - : Mit einer JavaScript-Shell ermöglicht es schnell und einfach Code-Schnipsel auszuprobieren.
- [TogetherJS](https://togetherjs.com/)
  - : Zusammenarbeit einfach gemacht. Wenn TogetherJS auf einer Seite hinzugefügt wurde, können sich die Benutzer der Seit in Echtzeit helfen!
- [Stack Overflow](http://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow Fragen, die mit "JavaScript" markiert sind.
- [JavaScript Versionen und Release Notes](/de/docs/Web/JavaScript/Neu_in_JavaScript)
  - : Geschichte und Status der Implementierungen von JavaScript Funktionen.
- [JSFiddle](https://jsfiddle.net/)
  - : Bearbeiten von JavaScript, CSS und HTML und live Ergebnisse sehen. Man kann zudem externe Ressourcen benutzen und mit seinem Team online miteinander arbeiten.
- [Plunker](https://plnkr.co/)
  - : Plunker ist eine online Community zum erstellen, zusammenarbeiten und teilen von Ideen in der Webentwicklung. Man kann JavaScript CSS und HTML Dateien bearbeiten und live Resultate und Dateistrukturen sehen.
