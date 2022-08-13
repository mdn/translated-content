---
title: Wstęp
slug: Web/JavaScript/Guide/Introduction
tags:
  - JavaScript
translation_of: Web/JavaScript/Guide/Introduction
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Ten rozdział służy jako wprowadzenie do języka JavaScript i omawia jego fundamentalne koncepcje.

## Co powinieneś wiedzieć, by zacząć?

Ten poradnik zakłada, że posiadasz podstawową wiedzę w takich obszarach, jak:

- Koncepcja Internetu oraz sieci ({{Glossary("WWW")}});
- Praktyczne wiadomości na temat języka HyperTextMarkup Language ({{Glossary("HTML")}})
- Podstawowe doświadczenie w programowaniu. Jeżeli nigdy dotąd nie miałeś styczności z programowaniem, wypróbuj jeden z naszych poradników na temat języka [JavaScript](/pl/docs/Web/JavaScript "/en-US/docs/"), który znajdziesz na głównej stronie.

## Gdzie szukać informacji na temat języka JavaScript?

Dokumentacja języka JavaScript w MDN zawiera:

- Poradnik [Learning the Web](/pl/Learn), który zawiera informacje dla początkujących oraz wprowadza podstawowe pojęcia dotyczące Internetu, a także programowania.
- Poradnik [JavaScript Guide](/pl/docs/Web/JavaScript/Guide "pl/Core_JavaScript_1.5_Guide") (ten poradnik) służy jako przegląd możliwości i celów posługiwania się językiem JavaScript.
- [JavaScript Reference](/pl/docs/Web/JavaScript/Referencje "pl/JavaScript/Reference") dostarcza szczegółowych informacji o języku JavaScript.

Jeżeli nigdy nie miałeś kontaktu z językiem Javascript, zacznij od artykułów w [strefie nauki](/pl/Learn) i[ JavaScript Guide](/pl/docs/Web/JavaScript/Guide "en/Core_JavaScript_1.5_Guide"). Kiedy poznasz fundamentalne zasady działania języka, będziesz mógł poszerzać wiedzę dzięki [JavaScript Reference](/pl/docs/Web/JavaScript/Reference "en/JavaScript/Reference"), gdzie znajdziesz kody źródłowe i szczegółowe opisy pojedynczych zagadnień.

## Czym jest JavaScript?

JavaScript to wieloplatformowy, zorientowany obiektowo język skryptowy, który cechuje lekkość i szybkość działania. W środowiskach developerskich może zostać połączony z konkretnymi obiektami tak, by zapewnić nad nimi łatwą i przejrzystą kontrolę.

Język JavaScript zawiera standardową bibliotekę, w której zdefiniowano podstawowe elementy  w postaci operatorów, struktur i instrukcji oraz obiektów takich, jak: `Array, Date i Math`. Standardowa biblioteka może być rozszerzana poprzez dodawanie nowych obiektów tak, by ułatwić programiście dopasowanie języka do jego potrzeb. Na przykład:

- *JavaScript* *po stronie klienta* został rozszerzony poprzez wprowadzenie mechanizmów kontroli przeglądarki i jej modelu DOM. Rozszerzenia te umożliwiają każdej aplikacji umieszczanie elementów w formularzach HTML, a także reakcję na wydarzenia wywoływane przez użytkownika, takie, jak: kliknięcie myszką, wpisywanie danych oraz nawigacja po stronie.
- *JavaScript po stronie serwera* został rozszerzony poprzez dodanie elementów, które umożliwiają komunikację z bazą danych, manipulację plikami na serwerze oraz zawierają sposoby na zapewnienie integralności informacji wymienianej między poszczególnymi elementami aplikacji.

## JavaScript i Java

Języki JavaScript i Java cechuje pewne podobieństwo, lecz dzielą fundamentalne różnice. Kod napisany w JavaScript może początkującemu programiście przypominać język Java, ale w przeciwieństwie do niego nie jest statycznie silnie typowany. Składnia obu języków, a także niektóre konwencje, są zbliżone, dlatego początkowa nazwa języka - LiveScript - została zmieniona na: JavaScript.

W przeciwieństwie do klasowego, kompilowanego systemu Javy,  JavaScript jest językiem interpretowanym, opartym na małej liczbie podstawowych typów danych reprezentujących wartości numeryczne (Boolean i string). Obiektowość w JavaScript bazuje na prototypach, które zapewniają dynamiczne dziedziczenie. Umożliwia to programiście wybieranie konkretnych metod i atrybutów, które mają zostać przekazane. Jest to spora różnica względem Javy, która opiera się na modelu dziedziczenia, w którym główną rolę odgrywają klasy. Różnica między językami zachodzi też w podejściu do funkcji - w JavaScript mogą być one atrybutami obiektów, co powoduje, że traktowane są wtedy jako słabo typowane metody.

JavaScript daje programiście większą wolność w tworzeniu kodu - nie musimy deklarować wszystkich zmiennych, klas ani metod. Nie musimy też zastanawiać się, czy dana metoda powinna być prywatna, publiczna czy chroniona, ani tworzyć interfejsów. Typy zmiennych, parametrów i zwracanych przez funkcje wartości nie są formalnie zdefiniowane.

Java służy do budowania aplikacji opartych na klasach, które cechują się szybkością działania i zachowaniem typów danych. Oznacza to, że nie możemy przekazać zmiennej typu integer jako referencji do obiektu, ani uzyskać dostępu do pamięci przez uszkodzenie kodu wykonywalnego Javy. Klasowy model obiektowości w  Javie oznacza, że programy zbudowane są wyłącznie z klas i ich metod, a dziedziczenie zaimplementowane w tym języku wymaga ściśle powiązanych ze sobą hierarchi. Wszystkie te cechy sprawiają, że Java jest o wiele bardziej skomplikowanym i wymagającym językiem w porównaniu do JavaScript.

JavaScript jest duchowym spadkobiercą małych, dynamicznie typowanych języków, takich, jak: HyperTalk i dBASE. Te języki skryptowe oferują narzędzia bardziej dostępne dla przeciętnego programisty ze względu na prostą składnię, wyspecjalizowane funkcjonalności i minimalne wymagania w celu tworzenia nowych obiektów.

| JavaScript                                                                                                                                                   | Java                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zorientowany obiektowo. Bez rozróżnienia na typy obiektów. Dziedziczenie poprzez mechanizm prototypów, atrybuty i metody klas mogą być dodawane dynamicznie. | Zorientowany klasowo. Obiekty podzielone są na klasy i instancje, z dziedziczeniem poprzez ich hierarchie. Atrybuty i metody klas nie mogą być dodawane dynamicznie.  |
| Typy zmiennych nie są deklarowane (dynamiczne typowanie).                                                                                                    | Typy zmiennych muszą być deklarowane (statyczne typowanie)                                                                                                            |
| Nie może automatycznie zapisywać danych na dysk twardy.                                                                                                      | Może automatycznie zapisywać dane na dysk twardy.                                                                                                                     |

Więcej informacji na temat różnic między tymi językami znajdziesz w rozdziale: [Details of the object model](/pl/docs/Web/JavaScript/Guide/Details_of_the_Object_Model "JavaScript/Guide/Details of the Object Model").

## JavaScript i specyfikacja EMCAScript

Specyfikacja JavaScript definiowana jest przez [Ecma International](http://www.ecma-international.org/), stowarzyszenie zajmujące się standaryzacją systemów informatycznych w Europie. Owa standaryzacja ma na celu zapewnienie jednolitości języka, który powinien zachowywać się w ten sam sposób w każdej aplikacji wspierającej ten standard. Wersja JavaScript działająca według tej specyfikacji zwana jest ECMAScript. Otwarty standard zapewnia możliwość wprowadzania przez firmy swoich implementacji w oparciu o podstawowy model. Pełna specyfikacja standardu ECMAScript została zaprezentowana w dokumencie ECMA-262. Aby dowiedzieć się więcej o wydaniach języka JavaScript i specyfikacji ECMAScript, zajrzyj do artykułu: [New in JavaScript](/pl/docs/Web/JavaScript/New_in_JavaScript).

Standard ECMA-262 został zatwierdzony przez [ISO](http://www.iso.ch/) (Międzynarodowa Organizacja Normalizacyjna) jako ISO-16262. Specyfikację możesz znaleźć na [stronie stowarzyszenia ECMA](http://www.ecma-international.org/publications/standards/Ecma-262.htm), jednakże nie przedstawia ona modelu DOM, który został ustandaryzowany przez [World Wide Web Consortium (W3C)](http://www.w3.org/). Model ten pełni bardzo ważną funkcję, gdyż definiuje, w jaki sposób elementy dokumentu HTML dostępne są dla twoich skryptów. By znaleźć więcej informacji o różnych technologiach wykorzystywanych podczas pracy z językiem JavaScript, zerknij na artykuł: [JavaScript technologies overview](/pl/docs/Web/JavaScript/JavaScript_technologies_overview).

### Dokumentacja JavaScript kontra specyfikacja ECMAScript

Specyfikacja ECMAScript precyzuje zestaw wymagań dla implementacji ECMAScript, co przydaje się, gdy chcemy zgodnie z obowiązującym standardem zaimplementować funkcje języka lub stworzyć własny silnik (taki, jak SpiderMonkey w Firefox lub v8 w przeglądarce Chrome).

Jednakże dokument ECMAScript nie powstał po to, by pomóc programiście w pisaniu aplikacji - w tym celu wykorzystuj dokumentacje JavaScript.

W specyfikacji ECMAScript używana składnia i terminologia początkowo mogą być obce dla programisty JavaScript, natomiast nadal jest to ten sam język. JavaScript wspiera każdą funkcjonalność, której ramy zostały nakreślone w tej specyfikacji.

Dokumentacja JavaScript opisuje wszystkie aspekty języka, które mogą być wykorzystane bezpośrednio przez programistę.

## Pierwsze kroki w języku JavaScript

By zacząć pracę z  JavaScript, jedyne, czego potrzebujesz, to nowoczesna przeglądarka. Ten poradnik wykorzystuje funkcje, które są dostępne tylko w najnowszych wersjach Firefox, dlatego zadbaj o to, by twoja wersja przeglądarki była zaktualizowana.

W Firefox wbudowane zostały dwie funkcje znacząco ułatwiające eksperymentowanie z JavaScript - mowa tutaj o konsoli przeglądarki i brudnopisie.

### Konsola WWW

Konsola pozwala obserwować informacje o odwiedzanej przez ciebie stronie i umożliwia wykonywanie skryptów przez wiersz poleceń.

By otworzyć konsolę, z panelu opcji wybierz: "Narzędzia", a następnie: "Konsola WWW" - wtedy powinna się pojawić na dole twojego okna. Pasek wiersza poleceń, w którym możesz uruchamiać swój kod JavaScript, umieszczony jest na dole konsoli, w miejscu wskazanym na obrazku:

![](https://mdn.mozillademos.org/files/7363/web-console-commandline.png)

### Brudnopis

Konsola WWW jest świetna, kiedy chcemy tworzyć pojedyncze linijki skryptów, ale pomimo tego, że możliwe jest wykonywanie dłuższego kodu, rozwiązanie to nie jest wygodne. Konsola nie daje możliwości zapisywania fragmentów kodu, którego używamy. W tym przypadku do pomocy wykorzystamy brudnopis, który stworzony został do pracy z bardziej skomplikowanymi przykładami.

By otworzyć brudnopis, z panelu opcji wybierz: "Narzędzia", a następnie: "Brudnopis" - powinno się otworzyć nowe okno przeglądarki wraz z edytorem tekstu, który umożliwia pisanie i tworzenie kodu JavaScript bezpośrednio w przeglądarce. Możesz także zapisywać i ładować swoje skrypty prosto z dysku twardego.

Po naciśnięciu przycisku: "Wyświetl", znajdującego się w górnej części okienka, twój kod zostanie wykonany i umieszczony w edytorze jako komentarz:

![](https://mdn.mozillademos.org/files/7365/scratchpad.png)

### Hello world

Swoją przygodę z językiem JavaScript rozpocznij od otworzenia konsoli WWW lub brudnopisu i napisania pierwszego skryptu: "Hello world".

```js
function greetMe(user) {
  return "Witaj " + user;
}

greetMe("Alice"); // "Witaj Alice"
```

Na następnych stronach poradnika wprowadzimy cię w składnię JavaScript i pokażemy zestaw możliwości dostarczanych przez ten język, by umożliwić ci napisanie bardziej skomplikowanych aplikacji.

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
