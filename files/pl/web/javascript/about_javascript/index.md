---
title: O JavaScript
slug: Web/JavaScript/About_JavaScript
translation_of: Web/JavaScript/About_JavaScript
original_slug: Web/JavaScript/O_JavaScript
---
{{JsSidebar}}

## Co to jest JavaScript?

**JavaScript**® (w skrócie **JS**) jest lekkim, interpretowanym, zorientowanym obiektowo językiem z funkcjami [pierwszej klasy](https://en.wikipedia.org/wiki/First-class_function), i jest najbardziej znany jako język skryptowy dla stron sieci Web, ale jest także [używany w wielu innych środowiskach niż przeglądarka](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages). It is a [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming "Prototype-based"), multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.

JavaScript działa po stronie klienta, co można wykorzystać w projektowaniu / programowaniu jak strona ma się zachowywać w przypadku wystąpienia jakiegoś zdarzenia. JavaScript jest łatwym do opanowania i jednocześnie potężnym językiem skryptowym, powszechnie używany do kontrolowania zachowania strony internetowej.

Wbrew powszechnemu przekonaniu, **JavaScript _nie_ jest "zinterpretowaną Java"**. W skrócie, JavaScript jest dynamicznym językiem skryptowym obsługującym prototypową konstrukcję obiektów. Podstawowa składnia jest celowo podobna zarówno do Java i C++, aby zmniejszyć liczbę nowych pojęć potrzebnych do nauki języka. Konstrukcje językowe, takie jak istrukcje `if` i `switch`, pętle `for` i `while`, oraz blok `try ... catch` funkcjonują tak samo w tych językach (lub bardzo podobnie).

JavaScript może funkcjonować jako język [proceduralny](https://en.wikipedia.org/wiki/Procedural_programming), jak również [język zorientowany obiektowo](/pl/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript "https://developer.mozilla.org/en-US/docs/Introduction_to_Object-Oriented_JavaScript"). Obiekty w JavaScript są tworzone automatycznie, poprzez dołączenie metod i właściwości do pustego obiektów **w czasie wykonywania**, w przeciwieństwie do definicji składniowych klasy wspólnych zestawionych w językach takich jak C ++ i Java. Raz stworzony obiekt może być stosowany jako projekt (lub prototyp) do tworzenia podobnych obiektów.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval "en-US/docs/JavaScript/Reference/Global_Functions/eval")), object introspection (via `for ... in`), and source code recovery (JavaScript programs can decompile function bodies back into their source text).

For a more in depth discussion of JavaScript programming follow the [JavaScript resources](#JavaScript_resources) links below.

## What JavaScript implementations are available?

The Mozilla project provides two JavaScript implementations. The first **ever** JavaScript was created by Brendan Eich at Netscape, and has since been updated to conform to ECMA-262 Edition 5 and later versions. This engine, code named [SpiderMonkey](/pl/docs/Mozilla/Projects/SpiderMonkey "en-US/docs/SpiderMonkey"), is implemented in C/C++. The [Rhino](/pl/docs/Rhino "en-US/docs/Rhino") engine, created primarily by Norris Boyd (also at Netscape) is a JavaScript implementation written in Java. Like SpiderMonkey, Rhino is ECMA-262 Edition 5 compliant.

Several major runtime optimizations such as TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) and IonMonkey were added to the SpiderMonkey JavaScript engine over time. Work is always ongoing to improve JavaScript execution performance.

Besides the above implementations, there are other popular JavaScript engines such as:-

- Google's [V8](https://code.google.com/p/v8/), which is used in the Google Chrome browser and recent versions of Opera browser. This is also the engine used by [Node.js](http://nodejs.org).
- The [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro) used in some WebKit browsers such as Apple Safari.
- [Carakan](http://my.opera.com/ODIN/blog/carakan-faq) in old versions of Opera.
- The [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) engine used in Internet Explorer (although the language it implements is formally called "JScript" in order to avoid trademark issues).

Each of Mozilla's JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the [DOM](http://www.w3.org/DOM/) into JavaScript.

Another common application for JavaScript is as a (Web) server side scripting language. A JavaScript web server would expose host objects representing a HTTP request and response objects, which could then be manipulated by a JavaScript program to dynamically generate web pages. [Node.js](http://nodejs.org) is a popular example of this.

## JavaScript resources

- [SpiderMonkey](/pl/docs/Mozilla/Projects/SpiderMonkey "en-US/docs/SpiderMonkey")
  - : Information specific to Mozilla's implementation of JavaScript in C/C++ engine (aka SpiderMonkey), including how to embed it in applications.

<!---->

- [Rhino](/pl/docs/Rhino "en-US/docs/Rhino")
  - : Information specific to the JavaScript implementation written in Java (aka Rhino).
- [Language resources](/pl/docs/Web/JavaScript/Language_Resources "en-US/docs/JavaScript_Language_Resources")
  - : Pointers to published JavaScript standards.
- [A re-introduction to JavaScript](/pl/docs/Web/JavaScript/A_re-introduction_to_JavaScript "en-US/docs/A_re-introduction_to_JavaScript")
  - : [JavaScript guide](/pl/docs/Web/JavaScript/Guide "en-US/docs/JavaScript/Guide") and [JavaScript reference](/pl/docs/Web/JavaScript/Reference "en-US/docs/JavaScript/Reference").

JavaScript® is a trademark or registered trademark of Oracle in the U.S. and other countries.
