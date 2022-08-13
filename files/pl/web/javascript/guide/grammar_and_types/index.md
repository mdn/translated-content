---
title: Składnia i typy
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - JavaScript
  - Poradnik
translation_of: Web/JavaScript/Guide/Grammar_and_types
original_slug: Web/JavaScript/Guide/Składnia_i_typy
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Ten rozdział porusza temat podstawowych elementów języka, takich jak składnia, deklaracje zmiennych, typy danych oraz literały.

## Podstawy

Składnia JavaScripta zapożycza wiele rozwiązań użytych w Javie, jednak w jej konstrukcji można zauważyć również wpływy języków takich jak Awk, Perl i Python

JavaScript jest językiem, w którym **rozróżnialna jest wielkość liter,** oraz wspierany jest standard znaków **Unicode.**

W JavaScripcie instrukcje nazywane są  {{Glossary("Wyrażenie", "wyrażeniami")}} i rozdzielane średnikiem (;). Spacje, tabulatury i znaki nowej linii zaliczają się do grupy tak zwanych znaków białych. Kod źródłowy skryptów napisanych w JavaScripcie skanowany jest przez interpreter od lewej do prawej i konwertowany w sekwencje elementów wejścia, które reprezentowane są przez tokeny, znaki kontrolne, znaki przerwania linii, komentarze i białe znaki. ECMAScript definiuje również zestaw słów kluczowych i literałów oraz zasady automatycznego umieszczania średników ([ASI](/pl/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)), tak by zakończyć dane wyrażenie, jednakże wykorzystywanie tej zasady wiąże się z efektami ubocznymi, dlatego zaleca się samodzielne umieszczanie średników. Więcej informacji na ten temat znajdziesz w szczegółowym opisie [gramatyki języka.](/pl/docs/Web/JavaScript/Reference/Lexical_grammar)

## Komentarze

Składnia komentarzy jest identyczna jak ta używana w języku C++ oraz w wielu innych.

```js
// Komentarz w jednej linii

/* to jest dłuższy,
   wieloliniowy komentarz
 */

/* Nie możesz jednak /* zagnieżdzać komentarzy */ SyntaxError */
```

## Deklaracje 

W języku JavaScript występują trzy typy deklaracji.

- {{jsxref("Statements/var", "var")}}
  - : Deklaruje zmienną, opcjonalnie inicjalizując ją podaną wartością.
- {{experimental_inline}} {{jsxref("Statements/let", "let")}}
  - : Deklaruje zmienną lokalną, ograniczoną do bloku w którym jest zawarta, opcjonalnie inicjalizując ją podaną wartością.
- {{experimental_inline}} {{jsxref("Statements/const", "const")}}
  - : Deklaruje zmienną stałą tylko do odczytu.

### Zmienne

Możesz używać zmiennych jako symbolicznych nazw oraz wartości w swojej aplikacji. Nazwy zmiennych są wtedy nazywane {{Glossary("Identyfikator", "identyfikatorami")}} i podlegają pewnym regułom.

W języku JavaScript indentyfikator musi rozpoczynać się od litery, podkreślnika(\_) lub symbolu dolara ($). Pozostałe znaki w indetyfikatorze mogą być także cyframi(0-9). Ponieważ JavaScript rozróżnia wielkość liter, znaki jakich możemy użyć jako nazw identyfikatora mogą być zarówno wielkimi (A-Z; uppercase) jak i małymi (a-z; lowercase) literami alfabetu.

Możesz również użyć ISO 8859-1 lub znaków Unicodu dla liter takich jak å i  ü. Możesz także użyć [symboli graficzne definiowanych przez Unicode](/pl/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals) jako znaków identyfikatora.

Przykładowymi nazwami zmiennych, z których możemy bezpiecznie korzystać są `Number_hits`, `temp99`, oraz `_name`.

### Deklarowanie zmiennych

Zmienną możemy deklarować na trzy sposoby:

- Wykorzystując słowo kluczowe {{jsxref("Statements/var", "var")}}. Na przykład, var x = 42. Wykorzystując tą opcje możemy deklarować zarówno zmienne lokalne jak i globalne.
- Przez podstawienie wartości do zmiennej. Na przykład x = 42. Jednakże w ten sposób zadeklarować możemy jedynie zmienne globalne, które nie mogą być zmieniane z poziomu lokalnego. W trybie ścisłym wygeneruje nam to ostrzeżenie, stąd też nie jest to preferowana metoda.
- Za pomocą słowa kluczowego  {{jsxref("Statements/let", "let")}}. Na przykład let y = 13. W tym przypadku deklarujemy zmienną ograniczoną do lokalnej [przestrzeni nazw](#Variable_scope), o której więcej informacji znajdziesz poniżej.

### Ewaluacja zmiennych

Zmienna deklarowana przy użyciu `var` lub `let`, której nie przypiszemy początkowej wartości przyjmie automatycznie wartość {{jsxref("undefined")}}.

W poniższym przykładzie chcemy uzyskać dostęp do niezadeklarowanej zmiennej, co skutkować będzie błędem  {{jsxref("ReferenceError")}}:

```js
var a;
console.log("The value of a is " + a); // W konsoli pojawi się komunikat "The value of a is undefined"
console.log("The value of b is " + b); // wyrzuci wyjątek ReferenceError
```

Możesz użyć wartości `undefined` do sprawdzenia czy dana zmienna posiada jakąś wartość. W poniższym kodzie zmienna `input` nie posiada przypisanej wartości, dlatego instrukcja [`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else "en-US/docs/JavaScript/Reference/Statements/if...else") zwróci nam wartość `true`.

```js
var input;
if(input === undefined){
  doThis();
} else {
  doThat();
}
```

Wartość `undefined` zachowuje się jak `false`, kiedy używana jest w kontekście funkcji boolowskich. W poniższym przykładzie kod zawarty w instrukcji if zostanie uruchomiony, ponieważ żądany element nie istnieje w tej tablicy.

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

Wartość `undefined` konwertowana jest do wartości `NaN` kiedy używana jest w kontekście numerycznym.

```js
var a;
a + 2; // ewaluacja do NaN
```

Kiedy ewaluowana jest zmienna typu {{jsxref("null")}}, zachowuje się ona jak 0 w kontekście numerycznym i jako false w kontekście funkcji boolowskich. Ilustruje to poniższy przykład.

```js
var n = null;
console.log(n * 32); // zaloguje 0 w konsoli
```

### Zasięg zmiennej

Zmienna, którą zadeklarujemy poza funkcją nazywana jest zmienną *globalną*, ponieważ jest ona dostępna z każdego miejsca w naszym kodzie. Jeżeli zmienna deklarowana jest wewnątrz funkcji, nazwana jest wtedy *lokalną*, ponieważ używać jej możemy tylko i wyłączenie w ciele tej funkcji.

JavaScript przed wersją ECMAScript 6 nie posiadał zasięgu blokowego, zamiast tego zmienna zadeklarowana w danym bloku była funkcją lokalną dla tej *funkcji (lub zasięgu globalnego)*. Dla przykladu poniższy kod pokaże nam wartość 5, ponieważ zasięgiem zmiennej x jest funkcja, w której została ona zdefiniowana, a nie blok, którym w tym przypadku jest funkcja `if`.

```js
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

Zachowanie zmieni się, kiedy użyjemy deklaracji `let` wprowadzonej w standardzie ECMAScript 6.

```js
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```

### Podnoszenie zmiennych

Kolejną niecodzienną rzeczą, na którą natkniemy się pracując z JavaScript'em jest fakt, że bez żadnego błędu możemy uzyskać dostęp do zmiennych, które zadeklarowane są dalej w naszym skrypcie. Ta koncepcja zwana jest **podnoszeniem lub windowaniem (ang.** **_hoisting_)**, ponieważ zmienne są niejako wyciągane do góry wyrażenia. Nie możemy jednak używać w ten sposób zmiennych, które nie zostały zinicjalizowane, ponieważ zwrócą one wartość `undefined`.

```js
/**
 * Przykład 1
 */
console.log(x === undefined); // Zwróci nam wartość "true"
var x = 3;

/**
 * Przykład 2
 */
// zwróci wartość undefined
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```

Powyższe przykłady intepretowane będą tak samo jak:

```js
/**
 * Przykład 1
 */
var x;
console.log(x === undefined); // Zwaraca wartość "true"
x = 3;

/**
 * Przykład 2
 */
var myvar = "my value";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

Przez podnoszenie wszystkie zmienne deklarowane poprzez użycie `var`, w miarę możliwości powinny być umieszczane na górze funkcji. Zwiększa to czytelność kodu i traktowane jest jako dobra praktyka.

W ECMAScript 2015 `let (const)` **nie zostaną podniesione** na górę bloku kodu. Jednak odwołanie do zmiennej, w bloku przed zadeklarowanymi, da w rezultacie [ReferenceError](/pl/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError). Zmienne będą w tzw. "tymczasowej martwej strefie" od początku bloku aż do stwierdzenia są przetwarzane.

    function do_something() { console.log(foo); // ReferenceError let foo = 2; }

### Zmienne globalne

Zmienne globalne są w istocie właściwością *obiektu globalnego*. W przypadku stron internetowych obiektem tym jest {{domxref("window")}}, co pozwala na wykorzystywanie i manipulowanie zmiennymi globalnymi za pomocą składni `window.variable`.

Pozwala to także na wykorzystywanie zmiennych globalnych zadeklarowanych w jednym oknie przez inne okno, poprzez jego nazwę. Na przykład zmienną `phoneNumber` zadeklarowaną w jednym dokumencie, możemy uzyskać poprzez wykorzystanie `parent.phoneNumber.`

### Stałe

Możesz także tworzyć zmienne tylko do odczytu, zwane zmiennymi stałymi poprzez wykorzystywanie slowa kluczowego {{jsxref("Statements/const", "const")}}. Składnia identyfikatora stałego jest taka sama jak identyfikatora zmiennej. Musi zaczynać się od litery, podkreślnika lub symbolu dolara i może zawierać cyfry i znaki alfabetu.

```js
const prefix = '212';
```

Zmienna nie może zostać ponownie zadeklarowana lub przyjąć nowej wartości kiedy działa nasz skrypt. Możemy to zrobić jedynie przy jej inicjalizacji.

Zasady zasięgu są dla niej takie same jak dla zmiennych tworzonych z użyciem `let`. Jeżeli pominiemy słowo kluczowe `const` identyfikator będzie intepretowany jako reprezentacja zmiennej.

Limitacją dla stałych jest fakt, że nie możemy zadeklarować takiej, która wykorzystuje nazwę występującą już jako identyfikator zmiennej lub funkcji w tym samym bloku. Zachowanie to ilustruje poniższy przykład.

```js example-bad
// SPOWODUJE TO WYRZUCENIE BŁĘDU
function f() {};
const f = 5;

// TO RÓWNIEŻ SPOWODUJE BŁĄD
function f() {
  const g = 5;
  var g;

  //instrukcje
}
```

Jednak atrybuty obiektu nie są chronione, , object attributes are not protected, więc następujące wyrażenie zostanie wykonywane bez problemów.

    const MY_OBJECT = {"key": "value"};
    MY_OBJECT.key = "otherValue";

## Struktury i typy danych

### Typy danych

Najnowszy standard ECMAScript definiuje siedem typów danych:

- Sześć typów danych rodzaju {{Glossary("Primitive", "primitives")}}:

  - {{Glossary("Boolean")}}. true oraz `false`.
  - {{Glossary("null")}}. Specjalne słowo kluczowe oznaczające wartość zerową. Ponieważ w języku JavaScript rozróżniana jest wielkość liter, `null` nie jest tym samym co `Null`, `NULL` lub jakikolwiek inny wariant.
  - {{Glossary("undefined")}}. Najwyższa właściwość, której wartość jest nieokreślona.
  - {{Glossary("Number")}}. `42` lub `3.14159`.
  - {{Glossary("String")}}. "Uszanowanko"
  - {{Glossary("Symbol")}} (nowość w ECMAScript 6). Typ danych, gdzie przykłady są niepowtarzalne i niezmienne.

- oraz typ złożony

  - {{Glossary("Object")}} (do którego można również zaliczyć podtypy functions i array)

Mimo, że typów danych w javascript jest stosunkowo niewiele, pozwalają one na tworzenie  użytecznych funkcji.

### Konwersja typów danych

JavaScript jest językiem dynamicznie typowanym. Oznacza to, że nie musimy deklarować typu zmiennej, ponieważ jest on automatycznie konwertowany do porządanych wartości w czasie wykonywania się skryptu. Przykładowo możemy zdefniniować zmienną w podany sposób:

```js
var answer = 42;
```

A później przypisać do tej samej zmiennej kawałek typu string:

```js
answer = "Dzięki za wszystko...";
```

To przypisanie nie wywołuje błędu, gdyż typ danych został ustalony dynamicznie.

W wyrażeniach, w których tekst mieszany jest z liczbami za pomocą operatora "+" JavaScript konwertuje wartości liczbowe do ciągu znaków. Ilustruje to poniższy przykład:

```js
x = "Odpowiedź to " + 42 // "Odpowiedź to 42"
y = 42 + " jest odpowiedzią" // "42 jest odpowiedzią"
```

W przypadku użycia innych operatorów JavaScript nie używa powyższej metody, ale konwertuje je automatycznie próbując sparować dwie zmienne.

```js
"37" - 7 // 30
"37" + 7 // "377"
```

### Konwersja do typu number

W przypadku kiedy w pamięci programu przechowujemy liczbę pod postacią łancucha znaków możemy posłużyć się poniższymi metodami konwersji:

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` zwróci nam liczbę całkowitą, dobrą praktyką w przypadku zamiany z użyciem tej funkcji jest specyzowanie podstawy, która informuje o tym jaki system liczbowy został przez nas przyjęty.

Alternatywną metodą konwersji jest użycie operatora "+", który działa zarówno z typem string jak i boolean.

```js
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// Notka: Cudzyslowy uzyte sa dla zwiekszenia czytelnosci, nie sa one wymagane
```

### Literały

Literałów używa się w celu przedstawiania wartości w języku JavaScript. Są one ustalonymi wartościami (a nie zmiennymi), które *dosłownie* podajesz w swoim skrypcie. Ten fragment opisuje następujące typy literałów:

- [Literały tablicowe](#literały_tablicowe)
- [Literały boolowskie](#literały_boolowskie)
- [Literały zmiennoprzecinkowe](#literały_zmiennoprzecinkowe)
- [Literały całkowite](#literały_całkowite)
- [Literały obiektowe](#literały_obiektowe)
- [Literały znakowe](#literały_znakowe)

### Literały tablicowe

Literał tablicowy jest listą składającą się z zera lub większej liczby wyrażeń, gdzie każde z nich reprezentuje element tablicy i zamknięty jest w nawiasach kwadratowych. Tablica tworzona za pomocą literału tablicowego zostaje zainicjalizowana podanymi wartościami, które stają się jej elementami, a długość tablicy ustalona zostaje według liczby podanych argumentów.

Poniższy przykład tworzy tablicę długości trzy,  o nazwie `kawy`, w której umieszczone zostają trzy elementy:

    kawy = ["Arabica", "Columbiana", "Zbożowa"]

**Uwaga** Literał tablicowy jest typem inicjalizatora obiektu. Zobacz [Używanie inicjalizatorów obiektu](/pl/docs/Web/JavaScript/Guide/Obsolete_Pages/Przewodnik_po_j%C4%99zyku_JavaScript_1.5/pl/Przewodnik_po_j%c4%99zyku_JavaScript_1.5/Tworzenie_nowych_obiekt%c3%b3w/U%c5%bcywanie_inicjacji_obiektu).

Jeśli tablica została utworzona przy pomocy literału w skrypcie najwyższego poziomu, JavaScript interpretuje tablicę za każdym razem, gdy przelicza wyrażenie zawierające literał tablicowy. Dodatkowo taki literał, kiedy zostaje użyty w funkcji tworzony jest przy każdym jej wywołaniu.

Literały tablicowe są także obiektami typu `Array`. Zobacz [obiekt `Array`](/pl/docs/Web/JavaScript/Referencje/Obiekty/Array), aby uzyskać więcej informacji o obiektach `Array`.

#### Dodatkowe przecinki w literalach tablicowych

W chwili inicjalizacji nie musisz deklarować wszystkich elementów tablicy. Jeżeli umieścisz następujące po sobie dwa przecinki, w miejscu pustego miejsca wstawiona będzie wartość `undefined`. W poniższym przykładzie tworzymy tablice o nazwie `ryby`:

    ryby = ["Piła", , "Młot"]

Tablica ta posiada dwa elementy z wartościami i jeden pusty (wywołanie `ryby[0]` zwróci nam "Piła", wartość `ryby[1]` jest niezdefiniowana, a `ryby[2]` zwróći "Młot"):

W przypadku kiedy pozostawiamy przecinek na końcu listy, jest on ignorowany.  (**Uwaga:** przecinki pozostawione na końcu listy mogą powodować błędy w starszych przeglądarkach i zalecane jest ich usuwanie). W poniższym przypadku długośc tablicy to trzy ponieważ nie istnieje element `mojaLista[3]`. Wszystkie inne przecinki w liście wskazują nowy element.

```js
var mojaLista = ['dom', , 'szkola', ];
```

W poniższym przykładzie długość tablicy wynosi cztery, a elementy niezefiniowane występują pod indeksami 0 i 2.

```js
var mojaLista = [ , 'dom', , 'szkola'];
```

W poniższym przykładzie tablica jest dlugości cztery, brakuje w niej zdefiniowanych elementów  `mojaLista[1]` oraz `mojaLista[3]`. Zignorowany zostaje jedynie ostatni przecinek.

```js
var mojaLista = ['dom', , 'szkola', , ];
```

Zrozumienie zachowania dodatkowych przecinków jest bardzo ważne w procesie nauki języka JavaScript, jednocześnie zalecanym podejściem jest jawne deklarowanie brakujących elementów jako `undefined`, co pomaga zwiększyć czytelność kodu, ułatwia jego utrzymanie oraz wprowadzanie zmian w przyszłości.

### Literały boolowskie

Typ Boolowski posiada dwie wartości literałowe: `true` oraz `false`.

Jednakże nie należy mylić tego z wartościami `true` oraz `false`, które są wartościami obiektu, ponieważ jest on jedynie reprezentacją prymitywnego typu danych. Więcej na ten temat możemy znaleźć w dokumentacji typu {{jsxref("Boolean")}}.

### Literały całkowite

Literały całkowite mogą być wyrażane w systemie decymalnym (baza 10), heksadecymalnym (baza 16), oktalnym (baza 8) oraz binarnym (baza 2).

- Literały dziesiętne zawierają sekwencje cyfr pozbawioną wiodącego zera.
- Wiodące zero w literale całkowitym świadczy o tym że jest on reprezentowany w systemie oktalnym, w którym dopuszczane są cyfry z zakresu 0-7.
- Kiedy łańcuch cyfr zaczyna się od 0x (lub 0X) oznacza to że przyjmujemy reprezentację heksadecymalną, gdzie dopuszczalne jest użycie wszystkich cyfr oraz liter z przedziału a-f lub A-F.

Posłużymy się kilkoma przykładami literałów całkowitych:

    0, 117 and -345 (dziesietne, baza 10)
    015, 0001 and -077 (oktalne, baza 8)
    0x1123, 0x00111 and -0xF1A7 (heksadecymalne, "hex" or baza 16)

By zasięgnąc informacji przejdź do działu [Numeric literals in the Lexical grammar reference](/pl/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals).

### Literały zmiennoprzecinkowe

Literały zmiennoprzecinkowe mogą zawierać poniższe elementy:

- Liczbę dziesiętną z określonym znakiem "+" i "-" ,
- Część dziesiętną,
- Wykładnik potęgi.

Wykładnik potęgi oznaczami małą lub wielką literą "e", a następnie liczbą całkowitą która także może zawierać znak "+" lub "-". Literał zmiennoprzecinkowy musi zawierać conajmniej jedną cyfre oraz przecinek wymiennie z literą "e" (lub "E").

Przykładowymi literałamy zmiennoprzecinkowymi są  3.1415, -3.1E12, .1e12, oraz 2E-12.

Ogólna składnia wyrażenia przedstawiona jest na poniższym przykładzie: :

    [(+|-)][digits][.digits][(E|e)[(+|-)]digits]

Na przykład:

    3.14
    2345.789
    .3333333333333333333
    -.283185307179586

### Literały obiektowe

Literałem obiektowym nazywamy listę złożoną z zera lub większej ilości par indeks - wartość, zamkniętych w nawiasy klamrowe (`{}`). Należy pamiętać by nie używać literałów obiektowych na początku wyrażeń, gdyż może to spowodować błąd programu lub zachowanie którego nie możemy przewidzieć. Jest to wynikiem zachowania intepretera, który odczyta otwierający nawias klamrowy jako początek bloku.

W poniższym przykładzie ilustrujemy literał obiektowy tworząc go i przypisując do zmiennej  `samochod`, następnie definiujemy element `mojSamochod`, którego wartośc ustalamy na `"Saturn"`, do drugiego elementu przypisujemy wynik wywołania funkcji TypSamochodu("Honda"), a trzeci element `specjalizacja` reprezentuje wcześniej zainicjalizowaną zmienną `Sprzedaz`.

```js
var Sprzedaz = "Toyota";

function TypSamochodu(nazwa) {
  if (nazwa == "Honda") {
    return nazwa;
  } else {
    return "Niestety nie sprzedajemy samochodow marki" + " + nazwa + ".";
  }
}

var samochod = { mojSamochod: "Saturn", znajdzSamochod: TypSamochodu("Honda"), specializacja: Sprzedaz };

console.log(samochod.mojSamochod);   // Saturn
console.log(samochod.znajdzSamochod);  // Honda
console.log(samochod.specjalizacja); // Toyota
```

Dodatkowo możemy użyć literału numerycznego lub znakowego jako własności obiektu, a także zagnieżdzać je jeden w drugim. Poniższy przykład ilustruje użycie tych metod.

```js
var samochod = { wieleSamochodow: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(samochod.wieleSamochodow.b); // Jeep
console.log(samochod[7]); // Mazda
```

Własności obiektu mogą być reprezentowane przez łańcuch znaków, także pusty. Jeżeli jego nazwa nie byłaby prawidłowym [identifikatorem](/pl/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variables) JavaScript musi być ujęta w cudzysłowach.

Nazwy własności które nie są prawidłowe nie mogą być dostępne za pomocą operatora kropki (.), natomiast można je wywołać oraz zmieniać dzięki wykorzystaniu notacji tablicowej ("\[]").

```js
var niestandardoweNazwyWlasnosci = {
  "": "Pusty lancuch",
  "!": "Bang!"
}
console.log(niestandardoweNazwyWlasnosci."");   // SyntaxError: Unexpected string
console.log(niestandardoweNazwyWlasnosci[""]);  // Pusty lancuch
console.log(niestandardoweNazwyWlasnosci.!);    // SyntaxError: Unexpected token !
console.log(niestandardoweNazwyWlasnosci["!"]); // Bang!
```

Warto zapamiętać:

```js
var foo = {a: "alfa", 2: "dwa"};
console.log(foo.a);    // alfa
console.log(foo[2]);   // dwa
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alfa
console.log(foo["2"]); // dwa
```

### Literały RegExp

Literały regex są szablonem zamkniętym pomiędzy ukośnikami. Poniższy przykład obrazuje regex.

    var re = /ab+c/

### Literały łańcuchowe

Literałem łancuchowym nazywamy zero lub więcej pojedyńczych znaków ujętych w podwójny (") lub pojedyńczy (') cudzysłów. Należy pamiętać by otwarcie i zamnięcie łańcucha zostało wyrażone za pomocą tego samego wariantu. Przykłady literałów łańcuchowych:

- `"foo"`
- `'bar'`
- `"1234"`
- `"jedna linia \n nastepna linia"`
- `"Kot Jana"`

Na literale łancuchowym możemy wywołać wszystkie metody jakich moglibyśmy użyć na obiekcie tego typu, ponieważ JavaScript automatycznie konwertuje literał do tymczasowego obiektu, na którym zostaje wywołana metoda a następnie jest on niszczony. Przykładem wykorzystania tej możliwości jest wywołanie `String.length` :

```js
console.log("John's cat".length)
// Wypisze ilość symboli użytych w łancuchu łącznie z białymi znakami
// W tym przypadku zwróconą wartością jest 10.
```

Używanie literałów jest korzystniejsze dla wydajności naszych programów, dlatego jeżeli zaawansowane metody obiektu typu String nie są nam potrzebne powinniśmy pozostać przy ich wykorzystaniu. Więcej informacji na ten temat dostępne jest w dokumentacji obiektu {{jsxref("String")}}

#### Używanie specjalnych znaków w łańcuchach

W dodatku to podstawowych znaków w łancuchach możemy umieszczać zdefiniowane znaki specjalne, co ilustruje poniższy przykład.

```js
"jedna linia \n akolejna linia"
```

Poniższa tabela pokazuje zestaw znaków które możemy wykorzystyć.

| Znak     | Znaczenie                                                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`     | Null Byte                                                                                                                                                                                                                                                     |
| `\b`     | Backspace                                                                                                                                                                                                                                                     |
| `\f`     | Form feed                                                                                                                                                                                                                                                     |
| `\n`     | Nowa linia                                                                                                                                                                                                                                                    |
| `\r`     | Powrót wózka                                                                                                                                                                                                                                                  |
| `\t`     | Tabulatura                                                                                                                                                                                                                                                    |
| `\v`     | Wertykalna tabulatura                                                                                                                                                                                                                                         |
| `\'`     | Apostrof lub pojedyńczy cudzysłów                                                                                                                                                                                                                             |
| `\"`     | Podwójny cudzysłów                                                                                                                                                                                                                                            |
| `\\`     | Backslash                                                                                                                                                                                                                                                     |
| `\XXX`   | Znak zakodowany w formacie Latin-1 składający się z trzech znaków w systemie oktalnym, z przedzialu od 0 do 377. Przykładowo, sekwencja \251 reprezentuje symbol praw autorskich.                                                                             |
|          |                                                                                                                                                                                                                                                               |
| `\xXX`   | Znak zakodowany w formacie Latin-1 składający się z dwóch znaków w systemie heksadecymalnym, z przedzialu od 00 do FF. Przykładowo, sekwencja \xA9 reprezentuje symbol praw autorskich                                                                        |
|          |                                                                                                                                                                                                                                                               |
| `\uXXXX` | Znak w formacie Unicode wyznaczony przez cztery liczby w formacie heksadecymalnym. Przykładowo \u00A9 w tym formacie reprezentuje symbol praw autorskich, więcej informacji na ten temat znajdziesz w  [Unicode escape sequences](#unicode_escape_sequences). |

### Unikanie znaków

Dla znaków, które nie zostały wylistowane w Tabeli 2.1 poprzedzające je ukośnik jest ignorowany, jednakże jest to  zachowanie  przestrarzałe i należy go unikać.

By zachować znaki specjalne w łańcuchu należy poprzedzić je ukośnikiem, ta funkcjonalność znana jest jako unikanie znaków. Przykładowo:

```js
var cytat = "On przeczytał \"Kremacje Sama McGee\" autorstwa R.W. Service.";
console.log(cytat);
```

Rezultatem uruchomienia powyższego kodu jest:

    On przeczytał "Kremacje Sama McGee" autorstwa R.W. Service.

By zawrzeć w naszym programie ukośnik należy poprzedzić go drugim ukośnikiem, który spowoduje uniknięcie następującego go znaku. Przykładowo jeżeli chcemy przypisać do zmiennej ścieżkę  `c:\temp` musimy posłużyć się poniższym zapisem:

```js
var sciezka = "c:\\temp";
```

Możemy w ten sposób także  opuszczać znak końca linii, który zostanie usunięty z wartości zwróconej ze zmiennej .

```js
var str = "ten lancuch \
jest rozbity \
na wiele \
linii."
console.log(str);   // ten lancuch jest rozbity na wiele linii.
```

Pomimo tego że natywnie JavaScript nie oferuje składni "heredoc" możemy zasymulować ją poprzed dodanie znaku końca linii i opuszczenie automatycznie dodawanego znaku:

```js
var poem =
"Na górze róże,\n\
na dole fiołki.\n\
Ale z was piękne,\n\
są aniołki."
```

## Więcej informacji

Ten rozdział skupia się na podstawowych własnościach składni umożliwiającej deklaracje i posługiwanie się typami. By dowiedzieć się więcej na temat konstrukcji dozwolonych w języku JavaScript odwiedź poniższe rozdziały w tym przewodniku:

- [Control flow and error handling](/pl/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Loops and iteration](/pl/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Functions](/pl/docs/Web/JavaScript/Guide/Functions)
- [Expressions and operators](/pl/docs/Web/JavaScript/Guide/Expressions_and_Operators)

W następnym rozdziale skupimy się nad kontrolą logiki programów i obsługą błędów.{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
