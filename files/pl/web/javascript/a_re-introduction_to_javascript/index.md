---
title: Ponowne wprowadzenie do JavaScript (JS tutorial)
slug: Web/JavaScript/A_re-introduction_to_JavaScript
translation_of: Web/JavaScript/A_re-introduction_to_JavaScript
original_slug: Web/JavaScript/Ponowne_wprowadzenie_do_JavaScript
---
{{jsSidebar}}Po co ponowne wprowadzanie? Ponieważ {{Glossary("JavaScript")}} osławiony jest jako [najbardziej niezrozumiany język świata](http://crockford.com/javascript/). Często wyśmiewany jest jako bycie zabawką, jednak pod warstwą jego prosoty czekają potężne funkcje. Obecnie JavaScript używany jest w niewiarygodnie dużej ilości wysokoprofilowych aplikacji, pokazując, że dogłębne zrozumienie tej technologii jest ważną umiejętnością dla każdego, webowego jak i mobilnego, dewelopera.Warto rozpocząć od zaznajomienia się z historią tego języka. JavaScript został stworzony w 1995 roku przez Brendah Eich, który w tym czasie był inżynierem w Netscape. Pierwszy raz JavaScript został wydany z Netscape 2 początkiem 1996 roku. Pierwotnie miał on być nazywany LiveScript, został jednak przemianowany za sprawą feralnej decyzji marketingowej, która miała na celu wykorzystanie popularności języka Java Sun Microsystem - pomijając znikome części wspólne. Od tego czasu jest to źrodłem wielu nieporozumień.  Kilka miesięcy poźniej Microsoft wydał JScript razem z Internet Explorer 3. Był to w większości kompatybilny i podobny w pracy do JavaScript. Kilka miesięcy po tym, Netscape zgłosił JavaScript do [Ecma International](http://www.ecma-international.org/), europejskiego stowarzyszenia standaryzującego, czego rezultatem było wydanie pierwszej edycji {{Glossary("ECMAScript")}}. Standard otrzymał znaczącą aktualizację jako [ECMAScript edition 3](http://www.ecma-international.org/publications/standards/Ecma-262.htm) w 1999 roku i od tego czasu został prawie niezmieniony. Czwarta edycja została porzucona z powodu różnic politycznych dotyczących złożoności języka. Wiele części czwartej edycji uformowało podstawy dla piątej ECMAScript - opublikowanej w grudniu 2009 roku, oraz szóstej, której publikacja wypadła w czerwcu 2015 roku.

> **Note:** Od tej pory określenie "JavaScript" będzie używane w odniesieniu do ECMAScript, ponieważ określenie to jest bardziej rozpoznawalne.

W odróżnieniu od innych języków programowania, JavaScript nie posiada koncepcji wejścia ani wyjścia. Zaprojektowany został do działania jako język skryptowy działający w środowisku hosta i do tego środowiska nalezy zapewnienie mechanizmów komunikacji ze światem. Najbardziej pospolitym środowiskiem jest przeglądarka, jednak interpretatory JavaScript można znaleźć również w wielu innych miejscach włączając w to Adobe Acrobat, Adobe Photoshop, obrazy SVG, silnik wigetów Yahoo, w środowiskach uruchomieniowych takich jak [Node.js](http://nodejs.org/), bazach danych NoSQL - [Apache CouchDB](http://couchdb.apache.org/), systemach wbudowanych czy kompletnych środowiskach graficznych takich jak [GNOME ](http://www.gnome.org/)( jeden z najpopularniejszych GUI dla systemów operacyjnych GNU/Linux ).

## Przegląd

JavaScript jest wieloparadygmatowym, dynamicznym językiem z typami i operatorami, standardowymi wbudowanymi obiektami oraz metodami. Jego składnia opiera się na językach Java i C - wiele struktur tych języków również zostało wprowadzonych do JavaScript-u. JavaScript wspiera programowanie obiektowe z prototypami obiektów zamiast klas ( zobacz więcej [dziedziczenie prototypowe](/pl/docs/Web/JavaScript/dziedziczenie_lancuch_prototypow) oraz [ES2015 klasy](/pl/docs/Web/JavaScript/Reference/Classes) (ang.)). Dodatkowo JavaScript wspiera programowanie funkcyjne - funkcje są obiektami, nadanie funkcjom możliwości przechowywania kodu wykonawczego i przekazywaniu go jak każdemu innemu obiektowi.

Zacznijmy od spojrzenia na budulec każdego języka: typy. Programy JavaScript manipulują wartościami, a wszystkie te wartości należą do typu. W JavaScript wyróżniamy typy:

- {{jsxref("Number")}}
- {{jsxref("String")}}
- {{jsxref("Boolean")}}
- {{jsxref("Function")}}
- {{jsxref("Object")}}
- {{jsxref("Symbol")}} (new in ES2015)

...oraz {{jsxref("undefined")}} i {{jsxref("null")}}, które są nieco dziwne. Obiekty posiadają specjalne rodzaje, więc aby być technicznie poprawnym powyższa lista powinna wyglądać następująco:

- {{jsxref("Number")}}
- {{jsxref("String")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}} (new in ES2015)
- {{jsxref("Object")}}

  - {{jsxref("Function")}}
  - {{jsxref("Array")}}
  - {{jsxref("Date")}}
  - {{jsxref("RegExp")}}

- {{jsxref("null")}}
- {{jsxref("undefined")}}

Istnieją także wbudowane typy {{jsxref("Error")}}. Będzie prościej jeśli będziemy trzymać się pierwszej listy, a więc omówione zostaną wymienione tam typy.

## Liczby

Zgodnie ze specyfikacją numery w JavaScript są "wartościami podwójnie precyzyjnymi 64-bitowego formatu IEEE 754". Ma to pewne interesujące konsekwencje. W JavaScript nie ma rzeczy takiej jak liczba całkowita, należy więc być dość ostrożnym z artmetyką jeśli jesteś przyzywczajony do matematyki w języku C lub Java.

Dodatkowo, zwracaj uwagę na rzeczy takie jak:

```js
0.1 + 0.2 == 0.30000000000000004;
```

W praktyce, liczby całkowite są traktowane jako 32-bitowe jednostki, a niektóre implementacje przechowują je w ten sposób dopóki nie zostaną poproszone o wykonanie instrukcji, która jest poprawna dla liczby, ale nie dla 32-bitowej liczby całkowitej. Może to być istotne dla operacji bitowych.

Standardowe[ operatory arytmetyczne](/pl/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) są wspierane, wliczając w to dodawanie, odejmowanie, modulo i tak dalej. Istnieje też wbudowany obiekt, o którym zapomnieliśmy wspomnieć, {{jsxref("Math")}}, który zapewnia zaawansowane funkcje i stałe matematyczne:

```js
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```

Możesz zamienić String na liczbę całkowitą używając wbudowanej funkcji {{jsxref("Global_Objects/parseInt", "parseInt()")}}. Funkcja ta przyjmuje podstawę do konwersji jako opcjonalny drugi argument, który zawsze należy podawać:

```js
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```

W starszych przeglądarkach, String-i zaczynające się od "0" przyjmowane są w formacie ósemkowym (podstawa 8), jednak od 2013 roku nie stanowiło to problemu. Chyba, że jesteś pewien formatu String-a, mogą zaskoczyć Cię wyniki w starszych przeglądarkach:

```js
parseInt('010');  //  8
parseInt('0x10'); // 16
```

Widzimy tu, że funkcja {{jsxref("Global_Objects/parseInt", "parseInt()")}} traktuje pierwszego Stringa w systemie ósemkowym przez 0 na przodzie, drugi String natomiast traktowny jest w systemie szesnastowym przez "0x" z przodu. _Zapis szesnastkowy nadal istnieje_; tylko ósemkowy został usunięty.

Jeśli chcesz zmenić liczbę binarną na całkowitą, wystarczy zmienić podstawę:

```js
parseInt('11', 2); // 3
```

Podobnie możemy przekształcić liczbę zmiennoprzecinkową używając wbudowanej funckcji {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}.  W odróżnieniu do {{jsxref("Global_Objects/parseInt", "parseInt()")}}, `parseFloat()` zawsze uzywa 10 jako podstawy.

Możesz użyć działania jednoargumentowego `+`, aby zamienić wartości na liczby:

```js
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```

Specjalna wartość {{jsxref("NaN")}} ( skrót od "Not a Number" ( ang. nie numer )) zostaje zwrócona jeśli String nie jest liczbowy:

```js
parseInt('hello', 10); // NaN
```

`NaN` jest toksyczny: jesli podasz go jako argument operacji matematycznej jej wynikiem również będzie `NaN`:

```js
NaN + 5; // NaN
```

Możesz wykorzystać `NaN` do testów używając wbudowanej funkcji {{jsxref("Global_Objects/isNaN", "isNaN()")}}:

```js
isNaN(NaN); // true
```

JavaScript dostarcza również specjalną wartość {{jsxref("Infinity")}} oraz `-Infinity`:

```js
 1 / 0; //  Infinity
-1 / 0; // -Infinity
```

`Infinity`, `-Infinity` oraz `NaN `wykorzystane mogą być do testów za pomocą wbudowanej funkcji {{jsxref("Global_Objects/isFinite", "isFinite()")}}:

```js
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

> **Note:** Funkcje {{jsxref("Global_Objects/parseInt", "parseInt()")}} i {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} przekształcają String dopóki nie napotkają znaku, który nie spełnia wymagań formatu liczbowego, po napotkaniu takiego znaku zwrócona zostanie liczba przekształcona do tego momentu. Jednak operator "+" zwyczajnie zwróci `NaN` jeśli w przekształcanym Stringu znajduje się niepoprawny znak. Spróbuj przekształcić String "10.2abc" używając przedstawionych metod, aby lepiej zrozumieć ich rożnice.

## Strings

String-ami w JavaScript są sekwencje [znaków Unicode](/pl/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode).  To powinna być dobra wiadomość dla każdego kto miał do czynienia z internacjonalizacją. Dokładniej, są to sekwencje jednostek kodowych UTF-16; każda jednostka kodowa jest reprezentowana przez 16-bitową liczbę. Każdy znak Unicode reprezentowany jest przez 1 lub 2 jednostki kodu.

Jeśli chcesz przekazać jeden znak, musisz poprostu użyć String-a składającego się z tego pojedyńczego znaku.

Aby sprawdzić długość String-a (w jednostkach kodu), użyj właściwości [length](/pl/docs/Web/JavaScript/Referencje/Obiekty/String/length):

```js
'hello'.length; // 5
```

To było nasza pierwsza styczność z obiektami JavaScript! Wspominaliśmy, że możesz traktować String-i jak {{jsxref("Object", "obiekty", "", 1)}}? Też posiadają one {{jsxref("String", "metody", "#Methods", 1)}}, które pozwalają nimi manipulować i uzyskiwać informacje na ich temat:

```js
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```

## Inne typy

JavaScript odróżnia {{jsxref("null")}}, który jest wartością wskazujacą na umyślny brak wartości ( dostęp do nich tylko za pomocą słowa kluczowego `null` ), od {{jsxref("undefined")}}, która jest wartością typu `undefinded`, wskazującą na niezainicjowaną wartość - oznacza to, że wartość nie została jeszcze przypisana. Zmienne zostaną omówione później, narazie wystarczy nam wiedza, że w JavaScripcie możliwe jest zdeklarowanie zmiennej bez przypisania do niej wartości. Jeśli to zrobimy zmienna będzie typu `undefinded`. `undefinded` jest w rzeczywistości stałą.

JavaScript posiada boolean (logiczny typ danych) z możliwymi wartościami `true` lub `false` (obie są słowami kluczowymi). Każda wartość może zostać przekonwertowana na typ logiczny zgodnie z zasadami:

1.  `false`, `0`, pusty string (`""`), `NaN`, `null`, oraz `undefined` wszystkie odpowiadają `false`.
2.  Wszystkie inne odpowiadają `true`.

Możesz wykonać jawną konwersję używając wbudowanej funkcji `Boolean()`:

```js
Boolean('');  // false
Boolean(234); // true
```

Jednak, tego typu zamiana jest rzadko potrzeba, ponieważ JavaScript automatycznie wykona konwersję, kiedy oczekiwać będzie typu logicznego jak na przykład w przypadku instrukcji warunkowej `if` (zobacz niżej). Z tego powodu czasami mówi się o "wartościach prawdziwych" (_true values_) i "wartościach fałszywych" (_false value_), które oznaczają wartości, które po konwersji na typ logiczny stają się, odpowienio, prawdziwe lub fałszywe. Alternatywnie wartości te nazywane mogą być "truthy" lub "falsy".

Operatory logiczne takie jak `&&`( i *)*, `||`( lub ) oraz `!`( negacja ) są wspierane; zobacz niżej.

## Zmienne

Do deklaracji nowej zmiennej w JavaScript używamy jednego z trzech słów kluczowych: [let](/pl/docs/Web/JavaScript/Reference/Statements/let), [const](/pl/docs/Web/JavaScript/Reference/Statements/const) lub [var](/pl/docs/Web/JavaScript/Reference/Statements/var).

**`let`\*\*** \*\*pozwala na deklarację zmiennej blokowej. Zadeklarowana zmienna dostępna jest z poziomu *bloku,* w którym została zadeklarowana.

```js
let a;
let name = 'Simon';
```

Poniżej znajduje się przykład zakresu ze zmienną zadeklarowaną za pomocą **`let`**:

```js
// mojaZmiennaLet *nie* jest tutaj widoczna

for (let mojaZmiennaLet = 0; mojaZmiennaLet < 5; mojaZmiennaLet++) {
  // mojaZmiennaLet jest widoczna tylko tutaj
}

// mojaZmiennaLet *nie* jest tutaj widoczna
```

**`const`\*\*** \*\*pozwala zadeklarować zmienne, których wartości z założenia są stałe. Zmienna dostępna jest z *bloku,* w którym została zadeklarowana.

```js
const Pi = 3.14; // deklaruje zmienną Pi
Pi = 1; // zwrócony zostanie błąd ponieważ nie można zmieniać zmiennej const
```

**`var` **jest najczęściej deklarowaną zmienną. W odróżnieniu do dwóch pozostałych zmiennych nie posiada ograniczeń. Jest tak dlatego, że tradycyjnie był to jedeny sposób deklarowania zmiennych w JavaScript. Zmienna zadeklarowana przy użyciu **`var`** dostepna jest z *funkcji,* w której została zadeklarowana.

```js
var a;
var name = 'Simon';
```

Przykład zakresu zmiennej zadeklarowanej za pomocą **`var`:**

```js
// mojaZmiennaVar *jest* tutaj widoczna

for (var mojaZmiennaVar = 0; mojaZmiennaVar < 5; mojaZmiennaVar++) {
  // mojaZmiennaVar jest widoczna dla całej funckji
}

// mojaZmiennaVar *jest* tutaj widoczna
```

Jesli zadeklarujesz zmienną bez przypisania do niej wartości, jej typ stanie się `undefinded`.

Ważną różnicą między JavaScript i innymi językami, jak Java, jest fakt, że w JavaScript bloki nie mają zasiegu; tylko funkcje posiadają zasięg. Więc jeśli zmienna zostanie zadeklarowana przy użyciu `var` w złożonej deklaracji (na przykład wewnątrz instrukcji warunkowej `if`), będzie ona widoczna dla całej funkcji. Jednak, korzystając ze składni ECMAScript 2015, deklaracje [let](/pl/docs/Web/JavaScript/Reference/Statements/let) i [const](/pl/docs/Web/JavaScript/Reference/Statements/const) pozwalają na tworzenie zmiennych o **zasięgu blokowym**.

## Operatory

Operatory liczbowe w JavaScript to `+`, `-`, `*`, `/` oraz `%`, który jest operatorem reszty ([co nie jest tym samym co modulo](/pl/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_%28%29)). Do przypisania wartości używamy =, istnieje także przypisanie złożone jak na przykład += i -=. Ich rozwinięcie to `x = x operator y`

x += 5;
x = x + 5;

Możesz użyć operatorów `++` aby inkrementować oraz `--` aby dekrementować. Mogą one być używane zarówno jako operatory prefiksowe lub  przyrostkowe.

[Operator +](/pl/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition) dodatkowo używany jest do łączenia string-ów.

```js
'hello' + ' world'; // "hello world"
```

Jeśli dodasz string do numeru (lub innej wartości) wszystko zostanie przekształcone w string. Przykład poniżej:

```js
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
```

Dodanie do czegoś pustego string-a jest przydatnym sposobem na zamiane tego w string.

[Porówniania](/pl/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) w JavaScript wykonywane są za pomocą `<`, `>`, `<=` oraz >=. Działają one zarówno ze string-ami jak i numerami. Równość jest trochę mniej prosta. Podwójny operator równości wykonuje przymusowe sprawdzenie kiedy podane zostały wartości o dwóch różnych typach, co czasami może dawać interesujące wyniki:

```js
123 == '123'; // true
1 == true; // true
```

Aby uniknąć przymusowego sprawdzenia, użyj potrójnego operatora równości:

```js
123 === '123'; // false
1 === true;    // false
```

Dodatkowo występują operatory `!=` oraz `!==`.

JavaScript posiada również [operacje bitowe](/pl/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators).

## Struktury kontroli

JavaScript posiada podobny zestaw struktur kontorli do innych języków rodziny C. Instrukcje warunkowe są wspierane przez `if` oraz `else`; jeśli chcesz możesz je ze sobą łączyć:

```js
var name = 'kotki';
if (name == 'pieski') {
  name += ' hau';
} else if (name == 'kotki') {
  name += ' miau';
} else {
  name += '!';
}
name == 'kotki miau';
```

JavaScript ma pętle `while` i `do-while`. Pierwsza jest dobra do prostych pętli; druga, jeśli chcesz mieć pewność, że funkcja zostanie wykonana przynajmniej raz:

```js
while (true) {
  // an infinite loop!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

W JavaScript pętla `for` działa w taki sam sposób jak w C i Java: pozwala na zapewnienie informacji dla pętli w jednej lini.

```js
for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript dodatkowo posiada dwie inne znaczące pętle for: [for...of](/pl/docs/Web/JavaScript/Reference/Statements/for...of)

```js
for (let value of array) {
  // działania na value
}
```

oraz [`for`...`in`](/pl/docs/Web/JavaScript/Reference/Statements/for...in):

```js
for (let własność in obiekt) {
  // działania na własności obiektu
}
```

Operatory `&&` oraz |`|` w których wykonanie drugiego operanda zależne jest od pierwszego. Przydatne do sprawdzania istnienia obiektu przed przypisaniem do niego atrybutów:

```js
var name = o && o.getName();
```

Lub do cachowania wartości (kiedy wartości nieprawdziwe są nieprawidłowe):

```js
var name = cachedName || (cachedName = getName());
```

JavaScript posiada potrójny operator dla wyrażeń warunkowych:

```js
var allowed = (age > 18) ? 'yes' : 'no';
```

Warunek `switch` może być używany dla wielu odgałęzień na podstawie liczby lub ciągu znaków:

```js
switch (action) {
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

Jeśli nie dodasz warunku `break`, wykonanie "przeskoczy" do następnego warunku. Takie działanie jest bardzo rzadko pożądane - w rzeczywistości warto opisać celowy "przeskok" w komentarzu w celu ułatwienia debugowania:

```js
switch (a) {
  case 1: // przeskok
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}
```

Domyślny (`default`) warunek jest opcjonalny. Możesz mieć wyrażenia zarówno w części przełącznika (`switch`), jak i w przypadku (`case`); porównania między nimi odbywają się przy pomocy operatora `===`:

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## Obiekty

Obiekty w JavaScript można opisać jako prostą kolekcję par nazwa-wartość. Jako takie podobne są do:

- Słowniki w Pythonie.
- Tablic asocjacyjnych w Perl i Ruby.
- Tablic asocjacyjnych w C i C++.
- Map w Javie.
- Tablic asocjacyjnych w PHP.

Ze względu na popularność tej struktury danych są one świadectwem wszechstronności. Ponieważ wszystko (poza typami prostymi) jest traktowane w JavaScript jak obiekt, każdy program JavaScript naturalnie objemuje dużą ilość wyszukiwań w tablicach mieszających. Dobrze, że są one takie szybkie!

Część "nazwa" jest stringiem, natomiast wartość może być każdą wartością JavaScript- nawet kolejnym obiektem. Pozwala to na budowanie struktur danych o dowolnej złożoności.

Istnieją dwa podstawowe sposoby tworzenia pustego obiektu:

```js
var obj = new Object();
```

Oraz:

```js
var obj = {};
```

These are semantically equivalent; the second is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times.

Semantycznie obie wersje są równe; druga, nazywana jest literalną składnią obiektu, jest wygodniejsza. Ta składnia jest dodatkowo kluczowym formatem JSON i powinna być preferowana w użyciu.

Literalna składnia może być użyta do zainicjowania obiektu w całości:

```js
var auto = {
  marka: 'Ford',
  model: 'Fiesta',
  detale: {
    kolor: 'grafitowy',
    konieMechaniczne: 96
  }
};
```

Dostęp do atrybutu może być ze sobą połączony:

```js
obj.detale.kolor; // grafitowy
obj['detale']['konieMechaniczne']; // 96
```

The following example creates an object prototype, `Person` and an instance of that prototype, `you`.

Poniższy przykład tworzy prototyp obiektu `Person` i jego instancję, `marek`.

```js
function Person(imie, wiek) {
  this.imie = imie;
  this.wiek = wiek;
}

// Definiowanie obiektu
var marek = new Person('Marek', 24);
// Stworzyliśmy nową osobę o imieniu 'Marek' i wieku 24 lat.
```

**Once created**, an object's properties can again be accessed in one of two ways:

Do właściwości stworzonego obiektu można uzyskać dostep na dwa sposoby:

```js
// notacja kropkowa ( dot notation )
obj.name = 'Simon';
var name = obj.name;
```

oraz...

```js
// notacją nawiasową ( bracket notation )
obj['name'] = 'Simon';
var name = obj['name'];
// zmienna może być użyta do zdefiniowania wartości klucza
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```

Te notacje także są semantycznie jednakowe. Druga metoda ma tę zaletę, że nazwa własności podawana jest jako string, dzięki czemu obliczana jest w czasie wykonywania. Jednak użycie tej metody zapobiega zastosowaniu niektórych mechanizmów JavaScript i procesów minifikacji. Może też być używany do ustawiania i pobierania własności z nazwami wykorzystującymi [słowa zastrzeżone](/pl/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords):

```js
obj.for = 'Simon'; // Syntax error, ponieważ 'for' jest zastrzeżone
obj['for'] = 'Simon'; // kod działa
```

> **Note:** Począwszy od ECMAScript 5, słowa zastrzeżone mogą być używane jako nazwy własności obiektów "w locie". Oznacza to, że nie muszą być zamknięte w cudzysłów podczas definiowania obiektu notacją literałową. Zobacz [specyfikację ES5](http://es5.github.io/#x7.6.1).

For more on objects and prototypes see [Object.prototype](/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). For an explanation of object prototypes and the object prototype chains see [Inheritance and the prototype chain](/pl/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Po więcej informacji na temat obiektów i prototypów zobacz [Object.prototype](pl/docs/Web/JavaScript/Referencje/Obiekty/Object/prototype). Wyjaśnienie prototypów obiektów i łańcuch prototypów zobacz [dziedziczenie i łańcuch prototypów](/pl/docs/Web/JavaScript/dziedziczenie_lancuch_prototypow).

## Tablice

Tablice w JavaScript są specialnym typem obiektu. Działają bardzo podobnie do zwykłych obiektów, jednak posiadają jedną magiczną właściwość `'length'`. Jest ona zawsze o jeden więcej niż najwyższy index w tablicy.

Poniżej jeden z sposób tworzenia tablcy:

```js
var a = new Array();
a[0] = 'pies';
a[1] = 'kot';
a[2] = 'hen';
a.length; // 3
```

Bardziej dogodną notacją jest użycie literału tablicy:

```js
var a = ['dog', 'cat', 'hen'];
a.length; // 3
```

Zauważ, że `array.length` niekoniecznie jest liczbą elementów w tablicy. Rozważ następujący zapis:

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

Pamiętaj - długość tablicy jest o jeden większa niż najwyższy indeks.

If you query a non-existent array index, you'll get a value of `undefined` in return:

```js
typeof a[90]; // undefined
```

If you take the above about `[]` and `length` into account, you can iterate over an array using the following `for` loop:

```js
for (var i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

ECMAScript introduced the more concise [`for`...`of`](/pl/docs/Web/JavaScript/Reference/Statements/for...of) loop for iterable objects such as arrays:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

You could also iterate over an array using a [`for`...`in`](/pl/docs/Web/JavaScript/Reference/Statements/for...in "/en/JavaScript/Reference/Statements/for...in") loop, however this does not iterate over the array elements, but the array indices. Furthermore, if someone added new properties to `Array.prototype`, they would also be iterated over by such a loop. Therefore this loop type is not recommended for arrays.

Another way of iterating over an array that was added with ECMAScript 5 is [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```

If you want to append an item to an array simply do it like this:

```js
a.push(item);
```

Arrays come with a number of methods. See also the [full documentation for array methods](/pl/docs/Web/JavaScript/Reference/Global_Objects/Array).

| Method name                                          | Description                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `a.toString()`                                       | Returns a string with the `toString()` of each element separated by commas.       |
| `a.toLocaleString()`                                 | Returns a string with the `toLocaleString()` of each element separated by commas. |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | Returns a new array with the items added on to it.                                |
| `a.join(sep)`                                        | Converts the array to a string — with values delimited by the `sep` param         |
| `a.pop()`                                            | Removes and returns the last item.                                                |
| `a.push(item1, ..., itemN)`                          | Appends items to the end of the array.                                            |
| `a.reverse()`                                        | Reverses the array.                                                               |
| `a.shift()`                                          | Removes and returns the first item.                                               |
| `a.slice(start[, end])`                              | Returns a sub-array.                                                              |
| `a.sort([cmpfn])`                                    | Takes an optional comparison function.                                            |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | Lets you modify an array by deleting a section and replacing it with more items.  |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | Prepends items to the start of the array.                                         |

## Functions

Along with objects, functions are the core component in understanding JavaScript. The most basic function couldn't be much simpler:

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

This demonstrates a basic function. A JavaScript function can take 0 or more named parameters. The function body can contain as many statements as you like and can declare its own variables which are local to that function. The `return` statement can be used to return a value at any time, terminating the function. If no return statement is used (or an empty return with no value), JavaScript returns `undefined`.

The named parameters turn out to be more like guidelines than anything else. You can call a function without passing the parameters it expects, in which case they will be set to `undefined`.

```js
add(); // NaN
// You can't perform addition on undefined
```

You can also pass in more arguments than the function is expecting:

```js
add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

That may seem a little silly, but functions have access to an additional variable inside their body called [`arguments`](/pl/docs/Web/JavaScript/Reference/Functions/arguments "/en/JavaScript/Reference/Functions_and_function_scope/arguments"), which is an array-like object holding all of the values passed to the function. Let's re-write the add function to take as many values as we want:

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

That's really not any more useful than writing `2 + 3 + 4 + 5` though. Let's create an averaging function:

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

This is pretty useful, but it does seem a little verbose. To reduce this code a bit more we can look at substituting the use of the arguments array through [Rest parameter syntax](/pl/docs/Web/JavaScript/Reference/Functions/rest_parameters). In this way, we can pass in any number of arguments into the function while keeping our code minimal. The **rest parameter operator** is used in function parameter lists with the format: **...variable** and it will include within that variable the entire list of uncaptured arguments that the function was called with. We will also replace the **for** loop with a **for...of** loop to return the values within our variable.

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

> **Note:** In the above code, the variable **args** holds all the values that were passed into the function.
>
> It is important to note that wherever the rest parameter operator is placed in a function declaration it will store all arguments _after_ its declaration, but not before. _i.e. function_ _avg(_**firstValue,** _...args)_\*\* **will store the first value passed into the function in the **firstValue** variable and the remaining arguments in **args\*\*. That's another useful language feature but it does lead us to a new problem. The `avg()` function takes a comma-separated list of arguments — but what if you want to find the average of an array? You could just rewrite the function as follows:

```js
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

But it would be nice to be able to reuse the function that we've already created. Luckily, JavaScript lets you call a function with an arbitrary array of arguments, using the {{jsxref("Function.apply", "apply()")}} method of any function object.

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

The second argument to `apply()` is the array to use as arguments; the first will be discussed later on. This emphasizes the fact that functions are objects too.

> **Note:** You can achieve the same result using the [spread operator](/pl/docs/Web/JavaScript/Reference/Operators/Spread_operator) in the function call.For instance: `avg(...numbers)`

JavaScript lets you create anonymous functions.

```js
var avg = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

This is semantically equivalent to the `function avg()` form. It's extremely powerful, as it lets you put a full function definition anywhere that you would normally put an expression. This enables all sorts of clever tricks. Here's a way of "hiding" some local variables — like block scope in C:

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

JavaScript allows you to call functions recursively. This is particularly useful for dealing with tree structures, such as those found in the browser DOM.

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

This highlights a potential problem with anonymous functions: how do you call them recursively if they don't have a name? JavaScript lets you name function expressions for this. You can use named IIFEs (Immediately Invoked Function Expressions) as shown below:

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

The name provided to a function expression as above is only available to the function's own scope. This allows more optimizations to be done by the engine and results in more readable code. The name also shows up in the debugger and some stack traces, which can save you time when debugging.

Note that JavaScript functions are themselves objects — like everything else in JavaScript — and you can add or change properties on them just like we've seen earlier in the Objects section.

## Custom objects

> **Note:** For a more detailed discussion of object-oriented programming in JavaScript, see [Introduction to Object-Oriented JavaScript](/pl/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript).

In classic Object Oriented Programming, objects are collections of data and methods that operate on that data. JavaScript is a prototype-based language that contains no class statement, as you'd find in C++ or Java (this is sometimes confusing for programmers accustomed to languages with a class statement). Instead, JavaScript uses functions as classes. Let's consider a person object with first and last name fields. There are two ways in which the name might be displayed: as "first last" or as "last, first". Using the functions and objects that we've discussed previously, we could display the data like this:

```js example-bad
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

s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

This works, but it's pretty ugly. You end up with dozens of functions in your global namespace. What we really need is a way to attach a function to an object. Since functions are objects, this is easy:

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

s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

There's something here we haven't seen before: the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this "/en/JavaScript/Reference/Operators/this") keyword. Used inside a function, `this` refers to the current object. What that actually means is specified by the way in which you called that function. If you called it using [dot notation or bracket notation](/pl/docs/Web/JavaScript/Reference/Operators/Object_initializer#Accessing_properties "/en/JavaScript/Reference/Operators/Member_Operators") on an object, that object becomes `this`. If dot notation wasn't used for the call, `this` refers to the global object.

Note that `this` is a frequent cause of mistakes. For example:

```js
s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
```

When we call `fullName()` alone, without using `s.fullName()`, `this` is bound to the global object. Since there are no global variables called `first` or `last` we get `undefined` for each one.

We can take advantage of the `this` keyword to improve our `makePerson` function:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
```

We have introduced another keyword: [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new "/en/JavaScript/Reference/Operators/new"). `new` is strongly related to `this`. It creates a brand new empty object, and then calls the function specified, with `this` set to that new object. Notice though that the function specified with `this` does not return a value but merely modifies the `this` object. It's `new` that returns the `this` object to the calling site. Functions that are designed to be called by `new` are called constructor functions. Common practice is to capitalize these functions as a reminder to call them with `new`.

The improved function still has the same pitfall with calling `fullName()` alone.

Our person objects are getting better, but there are still some ugly edges to them. Every time we create a person object we are creating two brand new function objects within it — wouldn't it be better if this code was shared?

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

That's better: we are creating the method functions only once, and assigning references to them inside the constructor. Can we do any better than that? The answer is yes:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};
```

`Person.prototype` is an object shared by all instances of `Person`. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of `Person` that isn't set, JavaScript will check `Person.prototype` to see if that property exists there instead. As a result, anything assigned to `Person.prototype` becomes available to all instances of that constructor via the `this` object.

This is an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime:

```js
s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

Interestingly, you can also add things to the prototype of built-in JavaScript objects. Let's add a method to `String` that returns that string in reverse:

```js
var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

Our new method even works on string literals!

```js
'This can now be reversed'.reversed(); // desrever eb won nac sihT
```

As mentioned before, the prototype forms part of a chain. The root of that chain is `Object.prototype`, whose methods include `toString()` — it is this method that is called when you try to represent an object as a string. This is useful for debugging our `Person` objects:

```js
var s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

Remember how `avg.apply()` had a null first argument? We can revisit that now. The first argument to `apply()` is the object that should be treated as '`this`'. For example, here's a trivial implementation of `new`:

```js
function trivialNew(constructor, ...args) {
  var o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}
```

This isn't an exact replica of `new` as it doesn't set up the prototype chain (it would be difficult to illustrate). This is not something you use very often, but it's useful to know about. In this snippet, `...args` (including the ellipsis) is called the "[rest arguments](/pl/docs/Web/JavaScript/Reference/Functions/rest_parameters)" — as the name implies, this contains the rest of the arguments.

Calling

```js
var bill = trivialNew(Person, 'William', 'Orange');
```

is therefore almost equivalent to

```js
var bill = new Person('William', 'Orange');
```

`apply()` has a sister function named [`call`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/call "/en/JavaScript/Reference/Global_Objects/Function/call"), which again lets you set `this` but takes an expanded argument list as opposed to an array.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
```

### Inner functions

JavaScript function declarations are allowed inside other functions. We've seen this once before, with an earlier `makePerson()` function. An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope:

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

This provides a great deal of utility in writing more maintainable code. If a function relies on one or two other functions that are not useful to any other part of your code, you can nest those utility functions inside the function that will be called from elsewhere. This keeps the number of functions that are in the global scope down, which is always a good thing.

This is also a great counter to the lure of global variables. When writing complex code it is often tempting to use global variables to share values between multiple functions — which leads to code that is hard to maintain. Nested functions can share variables in their parent, so you can use that mechanism to couple functions together when it makes sense without polluting your global namespace — "local globals" if you like. This technique should be used with caution, but it's a useful ability to have.

## Closures

This leads us to one of the most powerful abstractions that JavaScript has to offer — but also the most potentially confusing. What does this do?

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

The name of the `makeAdder()` function should give it away: it creates new 'adder' functions, each of which, when called with one argument, adds it to the argument that it was created with.

What's happening here is pretty much the same as was happening with the inner functions earlier on: a function defined inside another function has access to the outer function's variables. The only difference here is that the outer function has returned, and hence common sense would seem to dictate that its local variables no longer exist. But they _do_ still exist — otherwise, the adder functions would be unable to work. What's more, there are two different "copies" of `makeAdder()`'s local variables — one in which `a` is 5 and the other one where `a` is 20. So the result of that function calls is as follows:

```js
x(6); // returns 11
y(7); // returns 27
```

Here's what's actually happening. Whenever JavaScript executes a function, a 'scope' object is created to hold the local variables created within that function. It is initialized with any variables passed in as function parameters. This is similar to the global object that all global variables and functions live in, but with a couple of important differences: firstly, a brand new scope object is created every time a function starts executing, and secondly, unlike the global object (which is accessible as `this` and in browsers as `window`) these scope objects cannot be directly accessed from your JavaScript code. There is no mechanism for iterating over the properties of the current scope object, for example.

So when `makeAdder()` is called, a scope object is created with one property: `a`, which is the argument passed to the `makeAdder()` function. `makeAdder()` then returns a newly created function. Normally JavaScript's garbage collector would clean up the scope object created for `makeAdder()` at this point, but the returned function maintains a reference back to that scope object. As a result, the scope object will not be garbage-collected until there are no more references to the function object that `makeAdder()` returned.

Scope objects form a chain called the scope chain, similar to the prototype chain used by JavaScript's object system.

A **closure** is the combination of a function and the scope object in which it was created. Closures let you save state — as such, they can often be used in place of objects. You can find [several excellent introductions to closures](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work).
