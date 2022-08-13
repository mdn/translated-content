---
title: Podstawy JavaScript
slug: Learn/Getting_started_with_the_web/JavaScript_basics
tags:
  - Początkujący
translation_of: Learn/Getting_started_with_the_web/JavaScript_basics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript to język programowania, który dodaje interaktywność do Twojej witryny (na przykład: gry, odpowiedzi po naciśnięciu przycisków lub wprowadzeniu danych do formularza, dynamiczne stylowanie, animacja). Ten artykuł pomoże Ci rozpocząć przygodę z tym ekscytującym językiem oraz przedstawi przedsmak tego, co dzięki niemu jest możliwe.

## Czym naprawdę jest JavaScript?

{{Glossary("JavaScript")}} (w skrócie "JS") jest pełnoprawnym {{Glossary("Dynamic programming language", "dynamicznym językiem programowania")}}, który po dodaniu do dokumentu {{Glossary("HTML")}}, może dostarczyć dynamiczną zawartość do stron internetowych. Został stworzony przez Brendan'a Eich, współtwórcę projektu Mozilla, Mozilla Foundation i Mozilla Corporation.

JavaScript jest niezwykle wszechstronny. Możesz zacząć z czymś małym, z karuzelami, galeriami obrazków, zmiennymi układami strony i odpowiedziami na kliknięcia przycisków. Z większym doświadczeniem, będziesz w stanie stworzyć gry, animowane grafiki 2D i 3D, kompleksowe aplikacje oparte na bazach danych i wiele więcej!

JavaScript jest dość zwarty, ale jednocześnie bardzo elastyczny. Programiści napisali wiele różnych narzędzi z wykorzystaniem rdzenia języka JavaScript, otwierając mnóstwo dodatkowych funkcjonalności przy minimalnym wysiłku. Obejmują one:

- Browser Application Programming Interfaces ({{Glossary("API","APIs")}}) — API wbudowane w przeglądarki internetowe, zapewniające takie funkcjonalności jak dynamiczne tworzenie HTML i ustawianie stylów CSS, zbieranie i manipulowanie strumieniem wideo z kamery internetowej użytkownika lub generowanie grafiki 3D i próbek audio.
- API innych firm umożliwiające programistom dołączenie do swoich witryn funkcjonalności pochodzących od innych dostawców treści, takich jak Twitter czy Facebook.
- Frameworki i biblioteki innych firm zewnętrznych, które możesz  wykorzystać w swoim kodzie HTML, by umożliwić sobie szybkie tworzenie witryn i aplikacji internetowych.

Ponieważ ten artykuł ma być jedynie lekkim wprowadzeniem do JavaScript, nie będziemy mieszać Ci na tym etapie mówiąc szczegółowo o tym, jaka jest różnica między jądrem języka JavaScript, a różnymi narzędziami wymienionymi powyżej. Możesz później nauczyć się tego wszystkiego szczegółowo, w naszym [JavaScript learning area](/pl/docs/Learn/JavaScript) i w pozostałych artykułach MDN.

Poniżej przedstawimy kilka aspektów podstaw języka, będziesz miał także okazje pobawić się kilkoma funkcjonalnościami interfejsu API przeglądarki. Baw się dobrze!

## Przykład "hello world"

Powyższa sekcja może brzmieć naprawdę ekscytująco i tak powinno być — JavaScript jest jedną z najbardziej żywych technologii internetowych i kiedy zaczniesz się nią dobrze posługiwać to twoje witryny internetowe wejdą w nowy wymiar mocy i kreatywności.

Jednak uzyskanie poczucia komfortu w używaniu JavaScript jest trudniejsze niż w przypadku korzystania z HTML i CSS. Być może lepiej będzie zacząć powoli i kontynuować pracę za pomocą małych konsekwentnych kroków. Na początek pokażemy, jak dodać podstawowy kod JavaScript do Twojej strony tworząc przykład "hello world!" ([standard w podstawowych przykładach programowania](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)).

> **Ważne:** Jeśli nie podążałeś za wcześniejszą częścią naszego kursu, [pobierz ten przykładowy kod](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip) i użyj go jako punktu wyjścia.

1.  Po pierwsze, przejdź do swojej strony testowej i utwórz nowy folder o nazwie „scripts” (bez cudzysłowów). Następnie w nowym folderze skryptów utwórz nowy plik o nazwie `main.js`. Zapisz go w folrderze `scripts`.
2.  Następnie w pliku `index.html` wprowadź następujący element w nowej linii, tuż przed zamknięciem tagu `</body>`:

        <script src="scripts/main.js"></script>

3.  W zasadzie, ten kod działa identycznie, jak element {{htmlelement("link")}} w CSS — dodaje JavaScript do strony, więc może mieć wpływ na HTML (wraz z CSS i czymkolwiek innym na stronie).
4.  Teraz dodaj następujący kod do pliku `main.js`:

        var myHeading = document.querySelector('h1');
        myHeading.textContent = 'Hello world!';

5.  Na koniec upewnij się, że pliki HTML i JavaScript są zapisane, a następnie załaduj `index.html` w przeglądarce. Powinieneś zobaczyć coś takiego:![](https://mdn.mozillademos.org/files/9543/hello-world.png)

> **Note:** **Notatka**: Powód, dla którego wstawiliśmy element {{htmlelement("script")}} w dolnej części pliku HTML jest to, że elementy w HTML są ładowane przez przeglądarkę w kolejności pojawienia się ich w pliku. Jeśli JavaScript jest ładowany jako pierwszy i ma wpływać na HTML poniżej, może to nie zadziałać, ponieważ JavaScript byłby ładowany przed HTML na którym ma pracować. Dlatego umieszczenie kodu JavaScript w dolnej części strony HTML jest często najlepszą strategią.

### Co się wydarzyło?

Twój tekst nagłówka został zmieniony na "Hello world!" przy użyciu JavaScript. Zrobiłeś to najpierw, używając funkcji zwanej `{{domxref("Document.querySelector", "querySelector()")}}` by chwycić referencje do nagłówka i przechowywać ją w zmiennej o nazwie `myHeading`. Jest to bardzo podobne do tego, co zrobiliśmy przy użyciu selektorów CSS. Kiedy chcesz coś zrobić z elementem, najpierw musisz go wybrać.

Następnie ustawiłeś wartość właściwości`{{domxref("Node.textContent", "textContent")}}` zmiennej `myHeading` (która reprezentuje zawartość nagłówka) na "Hello world!".

> **Note:** **Zanotuj**: Obie funkcje, których używałeś powyżej, są częścią [Document Object Model (DOM) API](/pl/docs/Web/API/Document_Object_Model), który pozwala na manipulowanie treścią strony.

## Podstawy języka

Wytłumaczmy niektóre podstawowe cechy języka JavaScript, aby lepiej zrozumieć, jak to wszystko działa. Warto zauważyć, że te cechy są wspólne dla wszystkich języków programowania, więc jeśli opanujesz te podstawy, jesteś na dobrej drodze aby móc programować w czymkolwiek!

> **Ważne:** W tym artykule spróbuj wprowadzać przykładowe linie kodu do konsoli JavaScript, aby zobaczyć, co się zdarzy. Więcej informacji na temat konsoli JavaScript można znaleźć w sekcji [Discover browser developer tools](/en-US/Learn/Discover_browser_developer_tools).

### Zmienne

{{Glossary("Variable", "Zmienne")}} są kontenerami w których można zapisywać wartości. Zacznij od zadeklarowania zmiennej za pomocą słowa kluczowego `var`, a następnie dowolnej nazwy, której chcesz użyć:

```js
var myVariable;
```

> **Note:** **Zanotuj**: Średnik na końcu wiersza wskazuje, gdzie kończy się instrukcja; jest to bezwzględnie wymagane tylko w przypadku, gdy musisz oddzielić poszczególne instrukcje w jednej linii. Jednak niektórzy uważają, że dobrą praktyką jest umieszczenie ich pod koniec każdej instrukcji. Istnieją inne zasady kiedy należy, a kiedy nie powinno się ich używać — po więcej szczegółów zobacz [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/blog/78).

> **Note:** **Zanotuj**: Możesz dowolnie nazwać zmienną, ale istnieją pewne zastrzeżone nazwy (zobacz [w tym artykule o regułach nazewnictwa zmiennych](http://www.codelifter.com/main/tips/tip_020.shtml)). Jeśli nie jesteś pewien, [możesz sprawdzić nazwę zmiennej](https://mothereff.in/js-variables), aby upewnić się, czy jest prawidłowa.

> **Note:** **Zanotuj**: JavaScript rozróżnia małe i duże litery — `myVariable`jest inną zmienną niż `myvariable`. Jeśli pojawiają się problemy w kodzie, sprawdź wielkość liter!

Po zadeklarowaniu zmiennej możesz nadać jej wartość:

```js
myVariable = 'Bob';
```

Jeśli chcesz, możesz wykonać obydwie operacje w tej samej linii:

    var myVariable = 'Bob';

Możesz pobrać wartość przez wywołanie zmiennej po nazwie:

```js
myVariable;
```

Po podaniu wartości zmiennej można ją później zmienić:

    var myVariable = 'Bob';
    myVariable = 'Steve';

Warto zauważyć, że zmienne mają różne [typy danych](/pl/docs/Web/JavaScript/Data_structures):

| Typ                              | Wyjaśnienie                                                                                                                  | Przykład                                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("String")}}     | Sekwencja tekstu znana jako ciąg znaków. Aby potwierdzić, że zmienna jest ciągiem, należy zamknąć jej wartość w apostrofach. | `var myVariable = 'Bob';`                                                                                                    |
| {{Glossary("Number")}}     | Liczba. Liczb nie zamyka się w apostrofach.                                                                                  | `var myVariable = 10;`                                                                                                       |
| {{Glossary("Boolean")}} | Prawda / Fałsz. Słowa `true` i `false` to specjalne słowa kluczowe w JS i nie potrzebują apostrofów.                         | `var myVariable = true;`                                                                                                     |
| {{Glossary("Array")}}     | Konstrukcja, która pozwala na przechowywanie wielu wartości w jednym odniesieniu.                                            | `var myVariable = [1,'Bob','Steve',10];` Odwołaj się do każdego elementu tej tablicy: `myVariable[0]`, `myVariable[1]`, itd. |
| {{Glossary("Object")}}     | Zasadniczo cokolwiek. Wszystko w JavaScript jest obiektem i może być przechowywane w zmiennej. Pamiętaj o tym podczas nauki. | `var myVariable = document.querySelector('h1');` Również wszystkie powyższe przykłady.                                       |

Więc dlaczego potrzebujemy zmiennych? Cóż, zmienne są potrzebne, aby zrobić cokolwiek interesującego w programowaniu. Jeśli nie moglibyśmy zmieniać wartości, to nie możnaby zrobić nic dynamicznego, jak personalizacja powitania lub zmiana wyświetlanego obrazu w galerii.

### Komentarze

Możesz umieścić komentarze w kodzie JavaScript, tak samo jak w CSS:

```js
/*
Wszystko pomiędzy to komentarz.
*/
```

Jeśli Twój komentarz nie zawiera przerw między wierszami, często łatwiej jest umieścić go za dwoma ukośnikami:

```js
// To jest komentarz
```

### Operatory

`{{Glossary("Operator")}}` jest symbolem matematycznym, który generuje wynik w oparciu o dwie wartości (lub zmienne). W poniższej tabeli można zobaczyć niektóre z najprostszych operatorów oraz kilka przykładów, które można wypróbować w konsoli JavaScript.

| Operator                         | Wyjaśnienie                                                                                                                                                                                      | Symbole       | Przykład                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dodawanie                        | Służy do dodawania dwóch liczb lub sklejenia dwóch ciągów znaków.                                                                                                                                | `+`           | `6 + 9; "Hello " + "world!";`                                                                                                                                                                                                                                                                    |
| Odejmowanie, Mnożenie, Dzielenie | Robią to, co można oczekiwać od nich w podstawowej matematyce.                                                                                                                                   | `-`, `*`, `/` | `9 - 3; 8 * 2; // mnożenie w JS jest gwiazdką 9 / 3;`                                                                                                                                                                                                                                            |
| Przypisanie wartości             | Widzieliście już to: przypisuje wartość zmiennej.                                                                                                                                                | `=`           | `var myVariable = 'Bob';`                                                                                                                                                                                                                                                                        |
| Znak równości                    | Wykonuje test sprawdzający, czy dwie wartości są sobie równe i zwraca wynik `true` / `false` (Boolean).                                                                                          | `===`         | `var myVariable = 3; myVariable === 4;`                                                                                                                                                                                                                                                          |
| Zaprzeczenie, Nie równa się      | Zwraca logicznie odwrotną wartość tego, co poprzedza; zmienia `true` w `false`, itd. Kiedy jest używany wraz z operatorem równości, operator negacji sprawdza, czy dwie wartości _nie_ są równe. | `!`, `!==`    | Podstawowe wyrażenie jest `true`, ale porównanie zwraca `false`, ponieważ zostało ono zanegowane:`var myVariable = 3; !(myVariable === 3);`Tu testujemy "czy `myVariable` NIE równa się 3". To zwraca wartość `false` ponieważ `myVariable` JEST równa 3.`var myVariable = 3; myVariable !== 3;` |

Istnieje wiele więcej operatorów, ale to wystarczy na razie. Jeśli chcesz zobacz pełną listę sprawdź w [Expressions and operators](/pl/docs/Web/JavaScript/Reference/Operators).

> **Note:** **Zanotuj**: Mieszanie typów danych może powodować dziwne efekty podczas wykonywania obliczeń, dlatego należy uważać, aby prawidłowo odwoływać się do zmiennych i uzyskać spodziewane wyniki. Na przykład wprowadź `"35" + "25"` do konsoli. Dlaczego nie dostaniesz oczekiwanego rezultatu? Ponieważ znaki cudzysłowów zmieniają liczby w ciągi znaków, więc skończyłeś na łączeniu łańcuchów zamiast dodawać liczby. Jeśli wpiszesz, `35 + 25` otrzymasz poprawny wynik.

### Warunki

Warunkami są struktury kodu, które pozwalają na sprawdzenie, czy wyrażenie zwraca `true`, czy nie, i uruchamia inny kod ujawniony przez jego wynik. Bardzo popularną formą warunku są instrukcje `if ... else`. Na przykład:

```js
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
```

Wyrażenie wewnątrz `if (...)` jest testem — który używa operatora tożsamości (opisanego powyżej) w celu porównania zmiennej `iceCream` z ciągiem znaków `chocolate`, aby sprawdzić, czy te dwa są równe. Jeśli to porównanie zwróci `true`, uruchomiony zostanie pierwszy blok kodu. Jeśli porównanie nie jest prawdziwe, pierwszy blok jest pomijany, a drugi blok kodu, po wywołaniu `else`, jest uruchamiany.

### Funkcje

{{Glossary("Function", "Funkcje")}} są sposobem na zapakowanie funkcjonalności, które chcesz wykorzystać ponownie. Gdy potrzebujesz procedury, zamiast pisać cały kod za każdym razem, możesz wywołać funkcję z nazwą funkcji. Powyżej widzieliście już niektóre zastosowania funkcji, na przykład:

1.  ```js
    var myVariable = document.querySelector('h1');
    ```
2.  ```js
    alert('hello!');
    ```

Funkcje te, `document.querySelector` i `alert`, są wbudowane w przeglądarkę, aby używać w dowolnym momencie.

Jeśli widzisz coś, co wygląda jak nazwa zmiennej, ale ma nawiasy — `()` — po niej, to prawdopodobnie jest to funkcja. Funkcje często biorą {{Glossary("Argument", "argumenty")}} — bity danych potrzebne do wykonywania ich pracy. Znajdują się one w nawiasach, oddzielone przecinkami jeśli jest więcej niż jeden argument.

Na przykład, funkcja `alert ()` powoduje pojawienie się okna podręcznego wewnątrz okna przeglądarki, ale musimy dać mu ciąg znaków jako argument, aby powiedzieć użytkownikowi o tym, co należy wyświetlić w wyskakującym okienku.

Dobrą wiadomością jest możliwość zdefiniowania własnych funkcji — w następnym przykładzie napiszemy prostą funkcję, która przyjmuje dwie liczby jako argumenty i mnoży je:

```js
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
```

Spróbuj uruchomić powyższą funkcję w konsoli, a następnie przetestuj kilka argumentów. Na przykład:

```js
multiply(4,7);
multiply(20,20);
multiply(0.5,3);
```

> **Note:** **Zanotuj**: [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) informuje przeglądarkę o zwróceniu zmiennej `result` z funkcji, dzięki czemu jest ona dostępna. Jest to konieczne, ponieważ zmienne zdefiniowane wewnątrz funkcji są dostępne tylko w tych funkcjach. Jest to tak zwany {{Glossary("Scope", "zakres")}} zmiennej. (Poczytaj [więcej o zakresie zmiennej](/pl/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope).)

### Zdarzenia

Prawdziwa interaktywność na stronie internetowej potrzebuje zdarzeń. Są to struktury kodu nasłuchające rzeczy, które dzieją się w przeglądarce i uruchamiajace kod w odpowiedzi. Najbardziej oczywistym przykładem jest zdarzenie kliknięcia, które jest uruchamiane przez przeglądarkę po kliknięciu na coś za pomocą myszy. Aby to zademonstrować, wpisz następujący kod w konsoli, a następnie kliknij na bieżącej stronie internetowej:

    document.querySelector('html').onclick = function() {
        alert('Ouch! Stop poking me!');
    }

Istnieje wiele sposobów dołączania zdarzenia do elementu. Tutaj wybieramy element {{htmlelement("html")}} i ustawiamy obsługę jego właściwości `onclick` równą funkcji anonimowej (tj. bezimiennej), która zawiera kod, który ma być uruchamiany.

Zauważ że

    document.querySelector('html').onclick = function() {};

jest równe temu

    var myHTML = document.querySelector('html');
    myHTML.onclick = function() {};

To jest po prostu krócej.

## Podrasowanie naszej przykładowej strony

Omówiliśmy kilka podstawowych zasad JavaScript, dodajmy kilka ciekawych funkcji do naszej przykładowej witryny, aby zobaczyć, co jest możliwe.

### Dodawanie zmieniarki obrazu

W tej sekcji dodajemy dodatkowy obraz do naszej witryny, korzystając z kilku innych funkcji DOM API, używając JavaScript, aby przełączać się między nimi, gdy klikniesz obraz.

1.  Na samym początku znajdź inne zdjęcie, które chciałbyś pokazać na stronie. Upewnij się, że jest tego samego rozmiaru, co pierwsze - albo przynajmniej jak najbliżej się da.
2.  Zachowaj zdjęcie w swoim katalogu `images`.
3.  Nazwij je 'firefox2.png' (bez apostrofów).
4.  Otwórz swój plik `main.js`, następnie dopisz następujący kod (jeżeli nadal znajduje się tam skrypt "witaj, świecie" - usuń go).

        var myImage = document.querySelector('img');

        myImage.onclick = function() {
            var mySrc = myImage.getAttribute('src');
            if(mySrc === 'images/firefox-icon.png') {
              myImage.setAttribute ('src','images/firefox2.png');
            } else {
              myImage.setAttribute ('src','images/firefox-icon.png');
            }
        }

5.  Zapisz wszystko i otwórz `index.html` w przeglądarce. Teraz gdy klikniesz na obrazek, zmieni on się w inny!

Przechowujesz odwołanie do elementu {{htmlelement("img")}} w zmiennej `myImage`. Następnie ustawiasz dla tej zmiennej obsługę zdarzenia `onclick` jako funkcję bez nazwy (finkcja anonimowa). Teraz za każdym razem, gdy kliknięty zostanie ten element:

1.  Pobierasz wartość atrybutu `src` tego obrazu.
2.  Za pomocą wyrażenia warunkowego sprawdzasz, czy wartość `src` jest równa ścieżce do oryginalnego obrazu:

    1.  Jeśli tak, zmienisz wartość `src` na ścieżkę do drugiego obrazu, zmuszając drugi obraz do załadowania do elementu {{htmlelement("img")}}.
    2.  Jeśli nie (to oznacza, że ​​już musiała się zmienić), wartość `src` zmienia się z powrotem na ścieżkę oryginalnego obrazu, do stanu oryginalnego.

### Dodanie spersonalizowanej wiadomości powitalnej

Następnie dodamy kolejny fragment kodu, zmieniając tytuł strony na spersonalizowaną wiadomość powitalną, gdy użytkownik po raz pierwszy odwiedzi witrynę. Ta wiadomość powitalna będzie trwała, nawet jeśli użytkownik opuści witrynę, a później wróci - zapiszemy ją za pomocą interfejsu [Web Storage API](/pl/docs/Web/API/Web_Storage_API). Będzie również zawierać opcję zmiany użytkownika, a zatem będziemy mogli zmienić wiadomość powitalną w dowolnym momencie.

1.  W pliku `index.html`, dodaj następujący wiersz tuż przed elementem {{htmlelement("script")}}:

        <button>Change user</button>

2.  Na końcu pliku `main.js`, umieść następujący kod, dokładnie tak, jak napisano — pobiera on odwołania do nowego przycisku i nagłówka, przechowując je w zmiennych:

        var myButton = document.querySelector('button');
        var myHeading = document.querySelector('h1');

3.  Teraz dodaj następującą funkcję, aby ustawić spersonalizowane powitanie — to jeszcze nic nie zrobi, ale poprawimy to za chwilę:

        function setUserName() {
          var myName = prompt('Please enter your name.');
          localStorage.setItem('name', myName);
          myHeading.textContent = 'Mozilla is cool, ' + myName;
        }

    Ta funkcja zawiera funkcję [`prompt()`](/pl/docs/Web/API/Window.prompt), która wyświetla okno dialogowe, przypominające komunikat `alert()`. Jednak ten komunikat `prompt()`, prosi użytkownika o wprowadzenie danych i zapisanie ich w zmiennej po naciśnięciu przycisku **OK**_._ W takim przypadku prosimy użytkownika o podanie jego nazwy. Następnie wywołujemy interfejs API o nazwie `localStorage`, który pozwala nam przechowywać dane w przeglądarce, a następnie je odzyskać. Używamy funkcji `setItem()` dla localStorage, aby utworzyć i przechować element danych o nazwie `'name'`, ustawiając jego wartość jako wartość zmiennej `myName` która zawiera dane wprowadzone przez użytkownika. Na koniec ustawiamy `textContent` nagłówka jako string, oraz nowo zapisaną nazwę użytkownika.

4.  Następnie dodaj poniższy blok `if ... else`, który możemy nazwać kodem inicjalizacji, ponieważ tworzy strukturę aplikacji podczas pierwszego ładowania:

        if(!localStorage.getItem('name')) {
          setUserName();
        } else {
          var storedName = localStorage.getItem('name');
          myHeading.textContent = 'Mozilla is cool, ' + storedName;
        }

    W tym bloku najpierw używamy operatora negacji (logiczne NIE, reprezentuje znak wykrzyknika !) aby sprawdzić, czy obiekt `name` istnieje. Jeśli nie, to uruchamiana jest funkcja `setUserName()`, aby go utworzyć. Jeśli on istnieje (to znaczy, że użytkownik ustawił go podczas poprzedniej wizyty), pobieramy zapisaną nazwę za pomocą `getItem()` i ustawiamy `textContent` nagłówka jako string oraz nazwę użytkownika, podobnie jak robiliśmy to w `setUserName()`.

5.  Na koniec poniższą funkcję przypisujemy do zdarzenia `onclick` przycisku. Kiedy zostanie on kliknięty, zostanie uruchomiona funkcja `setUserName()`. Dzięki temu użytkownik może ustawić nową nazwę, kiedy chce, naciskając przycisk:

        myButton.onclick = function() {
          setUserName();
        }

Teraz, kiedy po raz pierwszy odwiedzisz witrynę, poprosi ona o podanie nazwy użytkownika, a następnie otrzymasz spersonalizowaną wiadomość. Możesz zmienić nazwę w dowolnym momencie, naciskając przycisk. Dodatkowym bonusem jest to, że nazwa utrzymuje się po zamknięciu strony, zachowując spersonalizowaną wiadomość przy następnym otwarciu strony! Dzieje się tak, ponieważ nazwa przechowywana jest w localStorage.

## Wniosek

Jeśli wykonałeś wszystkie instrukcje zawarte w tym artykule, powinieneś otrzymać stronę, która wygląda mniej więcej tak (możesz również [zobaczyć naszą wersję tutaj](https://mdn.github.io/beginner-html-site-scripted/)):

![](https://mdn.mozillademos.org/files/9539/website-screen-scripted.png)

Jeśli utkniesz, możesz porównać swoją pracę z naszym [gotowym przykładowym kodem na GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js).

Ledwo zarysowaliśmy powierzchnię JavaScript. Jeśli lubisz grać i chcesz posunąć się jeszcze dalej, przejdź do naszego [następnego tematu kursu JavaScript](/pl/docs/Learn/JavaScript).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
