---
title: Über JavaScript
slug: Web/JavaScript/About_JavaScript
tags:
  - Beginner
  - Introduction
  - JavaScript
translation_of: Web/JavaScript/About_JavaScript
---
{{JsSidebar}}

## Was ist JavaScript?

**JavaScript**® (oft auch **JS** abgekürzt) ist eine leichte, interpretierte, objektorientierte Sprache mit [First-Class-Funktionen](https://de.wikipedia.org/wiki/First-Class-Funktion) und ist bekannt als Skriptsprache für Webseiten. Die Sprache wird aber auch [in vielen nicht-Browserumgebungen (englisch)](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages) eingesetzt. Es ist eine [prototypenbasierte](https://de.wikipedia.org/wiki/Prototypenbasierte_Programmierung "Prototype-based"), multiparadigmen Skriptsprache, die dynamisch ist und objektorientierten, imperativen und funktionalen Programmierstil erlaubt.

JavaScript wird auf der Clientseite des Webs ausgeführt, was dazu genutzt werden kann, um das Design und Verhalten einer Webseite ereignisgesteuert zu ändert. JavaScript ist eine leicht zu lernende und mächtige Skriptsprache, die auf Webseiten weit verbreitet ist.

Im Gegensatz zu dem weit verbreiteten Irrtum ist **JavaScript kein interpretiertes Java**. Kurz gesagt ist JavaScript eine dynamische Skriptsprache, die [prototypenbasierte](https://de.wikipedia.org/wiki/Prototypenbasierte_Programmierung "Prototype-based") Objektkonstrukte unterstützt. Die Basissyntax ist absichtlich ähnlich zu Java und C++, um die Anzahl der neu zu lernenden Sprachkonzepte zu reduzieren. Sprachkonstrukte, wie `if`-Anweisungen, `for`- und `while`-Schleifen und `switch`- und `try...catch`-Blöcke funktionieren genauso wie in den oben genannten Sprachen (oder fast genauso).

JavaScript kann sowohl als [prozedurale](https://de.wikipedia.org/wiki/Prozedurale_Programmierung) als auch als [objektorientierte](/de/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript "https://developer.mozilla.org/en-US/docs/Introduction_to_Object-Oriented_JavaScript") Sprache eingesetzt werden. Objekte werden in JavaScript programmatisch erstellt und durch anfügen von Methoden und Eigenschaften zu leeren Objekten **zur laufzeit** erstellt, was anders ist als in Klassendefinitionen in kompilierten Sprachen wie C++ und Java. Wenn ein Objekt erstellt wurde, kann dieses als Blaupause (oder Prototyp) für das erstellen gleicher Objekte verwendet werden.

JavaScripts dynamische Fähigkeiten beinhalten Objekterzeugung zur Laufzeit, variable Parameterlisten, Funktionsvariablen, dynamische Skripterzeugung (mit {{jsxref("eval")}}), Objekt Introspektion (mit {{jsxref("Statements/for...in", "for...in")}}) und Quelltextwiederherstellung (JavaScriptprogramme können Funktionskörper zurück in den Quelltext übersetzen).

Für einen tieferen Einblick in die JavaScript-Programmiersprache folgen den [JavaScript Quellen](<#JavaScript Quellen>) unten.

## Welche JavaScript Implementierungen gibt es?

Das Mozilla Projekt verfügt über zwei JavaScript Implementierungen. Als erstes gab es JavaScript (erstellt von Brendan Eich) in dem Netscape-Browser und seit dem wurde diese JavaScript Version aktualisiert um konform zu dem ECMA-262 Standard in der 5. Auflage und späteren Versionen zu sein. Diese Umgebung, mit dem Codenamen [SpiderMonkey](/de/docs/Mozilla/Projects/SpiderMonkey "en-US/docs/SpiderMonkey"), ist in C/C++ implementiert. Die [Rhino](/de/docs/Rhino "en-US/docs/Rhino") Umgebung, hauptsächlich erstellt von Norris Boyd (auch bei Netscape), ist eine JavaScript Implementierung, die in Java geschrieben wurde. Wie auch SpiderMonkey ist Rhino kompatibel zu dem ECMA-262 Standard in der 5. Auflage.

Einige wichtige Laufzeitoptimierungen, wie TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) and IonMonkey wurden zu der SpiderMonkey JavaScriptumgebung hinzugefügt. Die arbeit geht immernoch weiter, um die Ausführungsperformance in JavaScript zu verbessern.

Neben den oben genannten Implementierungen gibt es weitere bekannte JavaScript-Umgebungen:

- Google's [V8](https://developers.google.com/v8/), welche in dem Browser Google Chrome und den neueren Version des Opera Browsers eingesetzt wird. Sie wird ebenfalls in [Node.js](http://nodejs.org) eingesetzt.
- [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro) wird in einigen WebKit Browsern wie zum Beispiel Apple Safari eingesetzt.
- [Carakan](http://my.opera.com/ODIN/blog/carakan-faq) wurde in alten Opera Browsern eingesetzt.
- Die [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) Umgebung wird im Internet Explorer benutzt (die hier implementierte Sprache heißt JScript um Markenrechten zu umgehen).

Jede JavaScript Umgebung von Mozilla enthält eine öffentliche API, mit der Entwickler JavaScript in ihre Applikationen integrieren können. Bei weitem sind Web-Browser die häufigsten Einsatzgebiete von JavaScript-Umgebungen. Web-Browser benutzen typischeweise die öffentliche API um Host-Objekte zu erstellen, um das [DOM](http://www.w3.org/DOM/) in JavaScript wiederzuspiegeln.

Eine weiteres Einsatzgebiet für JavaScript ist der Einsatz als serverseitige Skriptsprache. Ein JavaScript Web-Server wird Host-Objekte erstellen, die eine HTTP-Anfrage und -Antwort repräsentieren. Diese können dann verändert werden, um dynamische Webseiten zu programmieren. [Node.js](http://nodejs.org) ist das bekannteste Beispiel für einen solchen Server.

## JavaScript Quellen

- [SpiderMonkey](/de/docs/Mozilla/Projects/SpiderMonkey "en-US/docs/SpiderMonkey")
  - : Informationen spezifisch zu Mozillas Implementierung von JavaScript der C/C++ Umgebung SpiderMonkey. Beinhaltet auch Informationen über das einbetten in Applikationen.

<!---->

- [Rhino](/de/docs/Rhino "en-US/docs/Rhino")
  - : Informationen spezifisch zu Mozillas Implementierung von JavaScript in der Java Umgebungen Rhino.
- [Sprachquellen](/de/docs/Web/JavaScript/Language_Resources "en-US/docs/JavaScript_Language_Resources")
  - : Zeigt veröffentliche JavaScript-Standards.
- [Eine (Wieder)-Einführung in JavaScript](/de/docs/Web/JavaScript/A_re-introduction_to_JavaScript "en-US/docs/A_re-introduction_to_JavaScript")
  - : [JavaScript Guide](/de/docs/Web/JavaScript/Guide "en-US/docs/JavaScript/Guide") und [JavaScript-Referenzen](/de/docs/Web/JavaScript/Reference "en-US/docs/JavaScript/Reference").

JavaScript® ist eine Marke oder registrierte Marke von Oracle in den USA und anderen Ländern.
