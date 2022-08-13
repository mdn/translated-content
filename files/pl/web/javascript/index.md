---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Nauka
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (**JS**) to skryptowy (interpretowany lub kompilowany metodą [JIT](<https://pl.wikipedia.org/wiki/JIT_(informatyka)>)) język programowania, w którym funkcje są "obywatelami pierwszej kategorii" - obiektami, które można przechowywać w zmiennych jako referencje i przekazywać jak każde inne obiekty. Chociaż JavaScript jest najbardziej znany jako język skryptowy dla stron internetowych, używa go również [wiele środowisk poza przeglądarką](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages), takich jak [Node.js](/pl/docs/Glossary/Node.js), [Apache CouchDB](https://couchdb.apache.org/) czy [Adobe Acrobat](http://www.adobe.com/devnet/acrobat/javascript.html). JavaScript jest językiem opartym na prototypach, wielu paradygmatach, dynamicznej składni, zorientowanym obiektowo, o [stylu imperatywnym](https://pl.wikipedia.org/wiki/Programowanie_imperatywne) i [deklaratywnym](https://pl.wikipedia.org/wiki/Programowanie_deklaratywne) (np. [programowanie funkcyjne](https://pl.wikipedia.org/wiki/Programowanie_funkcyjne)).

Ta sekcja naszego serwisu jest poświęcona samemu językowi JavaScript, a nie zagadnieniom związanym ze stronami internetowymi lub innymi środowiskami hosta. Informacje dotyczące {{Glossary("interfejsów API","Interfejsów API")}} specyficznych dla stron internetowych, prosimy szukać w źródłach: [Internetowe interfesy API](/pl/docs/Web/API) i [DOM](/pl/docs/Glossary/DOM).

Standardem dla JavaScript jest [ECMAScript](/pl/docs/Web/JavaScript/Language_Resources). Od roku 2012, wszystkie [nowoczesne przegladarki](https://kangax.github.io/compat-table/es5/) całkowicie obsługują ECMAScript 5.1. Starsze przegladarki obsługują co najmniej ECMAScript 3. 17 czerwca 2015, [ECMA International](https://www.ecma-international.org) opublikował szóstą główną wersję ECMAScript, która oficjalnie nazywa się ECMAScript 2015, ale początkowo była nazywana też ECMAScript 6 lub ES6. Od tego czasu standardy ECMAScript są wydawane w cyklach rocznych. Niniejszy dokument odnosi sie do szkicu najnowszej wersji, którą obecnie jest [ECMAScript 2018](https://tc39.github.io/ecma262/).

Nie należy mylić JavaScript z [językiem programowania Java](https://pl.wikipedia.org/wiki/Java). Zarówno "Java" jak i "JavaScript" są znakami towarowymi lub zastrzeżonymi znakami towarowymi Oracle w U.S.A. i innych krajach. Jednak obydwa te języki programowania mają bardzo różną składnię, semantykę i zastosowanie.

## Przewodniki

Naucz się programować w JavaScript, studiując nasze przewodniki i samouczki.

### Dla zupełnie początkujących

Jeśli chcesz nauczyć się JavaScript, ale nie masz jeszcze doświadczenia w JavaScript lub programowaniu, przejdź do naszych [tematów w strefie nauki JavaScript](/pl/docs/Learn/JavaScript). Dostępne są tu następujące moduły:

- [Pierwsze kroki w JavaScript](/pl/docs/Learn/JavaScript/First_steps)
  - : Znajdziesz tu odpowiedź na kilka podstawowych pytań, takich jak: "Co to jest JavaScript?", "Jak wygląda?" czy "Co można z nim zrobić?", oraz omówienie kluczowych elementów JavaScript, takich jak zmienne, łańcuchy, liczby i tablice.

**[Klocki JavaScript](/pl/docs/Learn/JavaScript/Building_blocks)**
Kontynuujemy tu opis podstawowych elementów JavaScript, zwracając uwagę na często stosowane typy bloków kodu, takie jak wyrażenia warunkowe, pętle, funkcje i zdarzenia.

- [Wprowadzenie do obiektów JavaScript](/pl/docs/Learn/JavaScript/Objects)
  - : W procesie nauki języka JavaScript ważne jest zrozumienie jego obiektowo zorientowanej natury. Ułatwi Ci to dalsze zgłębianie tajników tego języka i tworzenie bardziej efektywnego kodu w przyszłości. Ten moduł ma Ci w tym pomóc.

[Polecamy także kurs z khan academy](https://pl.khanacademy.org/computing/computer-programming/programming#intro-to-programming)

### Przewodnik JavaScript

- [Przewodnik JavaScript](/pl/docs/Web/JavaScript/Guide)
  - : Znacznie bardziej szczegółowy poradnik JavaScript, przeznaczony dla osób z wcześniejszym doświadczeniem programistycznym w innych jezykach.

### Dla średnozaawansowanych

- [Interfejsy API po stronie klienta](/pl/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Jeśli chcesz pisać kod JavaScript dla stron internetowych lub aplikacji, działający po stronie klienta nie zajdziesz daleko, zanim nie zaczniesz używać odpowiednich interfejsów API — interfejsów do manipulowania róznymi funkcjami zarówno przeglądarki jak i systemu operacyjnego, w którym owa przeglądarka działa, a nawet manipulowania danymi pochodzącymi z innych witryn lub serwisów internetowych. W tym module dowiesz się, jakie są interfejsy API działające po stronie klienta i jak korzystać z najbardziej popularnych z nich.

- [Ponowne wprowadzenie do JavaScript](/pl/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : Przegląd zagadnień związanych z JavaScript, przeznaczony dla tych, co już "wiedzą wszystko".

- [Struktura danych JavaScript](/pl/docs/Web/JavaScript/Data_structures)
  - : Przegląd dostępnych w JavaScript struktur danych.
- [Porównanie a identyczność](/pl/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript zapewnia trzy różne operacje porównywania wartości: ścisłą równość przy użyciu operatoa  `===`, luźną równość przy uzyciu operatoa `== i metodę `{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Domknięcia](/pl/docs/Web/JavaScript/Domkniecia)
  - : Domknięcie jest kombinacją funkcji i środowiska leksykalnego, w którym ta funkcja została zadeklarowana.

### Dla zaawansowanych

- [Dziedziczenie i łańcuch prototypowania](/pl/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Wyjaśnienie powszechnie nierozumianego i niedocenianego dziedziczenia prototypowego.
- [Tryb ścisły](/pl/docs/Web/JavaScript/Reference/Strict_mode)
  - : Tryb ścisły powoduje, że nie jest możliwe użycie jakichkolwiek zmiennych przed ich inicjowaniem. Jest to ścisły wariant ECMAScript 5, zwiekszający wydajność i łatwość debugowania.
- [Tablice typowane JavaScript](/pl/docs/Web/JavaScript/Typed_arrays)
  - : Tablice typowane JavaScript dostarczają mechanizm dostępu do surowych danych binarnych.
- [Zarządzanie pamięcią](/pl/docs/Web/JavaScript/Memory_Management)
  - : Cykl życia pamięci i odśmiecanie kolekcji w JavaScript.
- [Model współbieżności i pętla zdarzeń](/pl/docs/Web/JavaScript/EventLoop)
  - : JavaScript posiada model współbieżny oparty na "pętli zdarzeń".
- [Wprowadzenie do stosowania XPath w JavaScript](/pl/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript)
  - : W tym dokumencie opisano interfejs przeznaczony do używania w JavaScript biblioteki [XPath](/pl/docs/XPath "en/XPath"), w rozszerzeniach i witrynach internetowych.

## Informatory

Przejrzyj kompletną dokumentację [informacyjną JavaScript ](/pl/docs/Web/JavaScript/Reference).

- [Obiekty standardowe](/pl/docs/Web/JavaScript/Reference/Global_Objects)
  - : Poznaj standardowe obiekty wbudowane {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} i inne
- [Wyrażenia i operatory](/pl/docs/Web/JavaScript/Reference/Operators)
  - : Dowiedz się więcej o zachowywaniu się operatorów JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, [pierwszeństwo opertaorów](/pl/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) itd.
- [Instrukcje i deklaracje](/pl/docs/Web/JavaScript/Reference/Statements)
  - : Zapoznaj się jak działają {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} i inne instrukcje i słowa kluczowe JavaScript.
- [Funkcje](/pl/docs/Web/JavaScript/Reference/Functions)
  - : Dowiedz się jak pracować z funkcjami JavaScript przy tworzeniu swoich aplikacji.

## Narzędzia i zasoby

Przydatne narzędzia do pisania i debugowania kodu **JavaScript**.

- [Narzędzia programistyczne Firefox](/pl/docs/Tools)
  - : [Scratchpad](/pl/docs/Tools/Scratchpad), [Web Console](/pl/docs/Tools/Web_Console), [JavaScript Profiler](/pl/docs/Tools/Profiler), [Debugger](/pl/docs/Tools/Debugger) itd.
- [Powłoki JavaScript](/pl/docs/Web/JavaScript/Shells)
  - : Powłoka JavaScript (konsola linii poleceń) pozwala szybko przetestować fragmenty kodu JavaScript.
- [TogetherJS](https://togetherjs.com/)
  - : Ułatwia współpracę. Dodając TogetherJS do swojej witryny, można wpomóc współpracę, poprzez wzajemną komunikację uzytkowników w czasie rzeczywistym.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Zapytania oznaczone tagiem "JavaScript" na platformie Stack Overflow.
- [Wersje JavaScript i uwagi do wydań](/pl/docs/Web/JavaScript/New_in_JavaScript)
  - : Przeglądaj historię wydań JavaScript i stan implementacji.
- [JSFiddle](https://jsfiddle.net/)
  - : Edytowanie JavaScript, CSS i HTML z natychmiastowym podglądem wyników. Pozwala na używanie zasobów zewnętrznych i pracę zespołową.
- [Szablony JavaScript](/pl/docs/Web/JavaScript/JavaScript_templates)
  - : Na tej stronie omawia sie najpopularniejsze systemy szablonowania stosowane w JavaScript.
- [Plunker](https://plnkr.co/)
  - : Plunker to internetowa społeczność, która współpacuje, tworzy i dzieli się pomysłami na tworzenie stron internetowych. Edytuj w przegladarce swoje pliki JavaScript, CSS i HTML i ogladaj na żywo wyniki swojej pracy i strukturę plików.
