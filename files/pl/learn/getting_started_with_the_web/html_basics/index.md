---
title: HTML podstawy
slug: Learn/Getting_started_with_the_web/HTML_basics
translation_of: Learn/Getting_started_with_the_web/HTML_basics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (**H**yper**t**ext **M**arkup **L**anguage) jest to kod używany do tworzenia struktury strony i jej zawartości. Na przykład treść może być uporządkowana w obrębie zestawu akapitów, listy punktowanych punktów lub tabel obrazów i danych. Jak sugeruje tytuł, ten artykuł daje podstawy do zrozumienia HTML i jego funkcji.

## Czym właściwie jest HTML?

HTML nie jest językiem programowania; jest _językiem znaczników_ (ang. _markup language_). HTML składa się z serii znaczników (tagów), których używa się do zamknięcia, _opakowania_ różnych części treści, tak aby wyglądały i/lub działały w określony sposób. Z pomocą tagów możesz ze słów czy obrazów zrobić linki do innych stron, sprawić by były napisane kursywą, większą czcionką, wytłuścić je itd. Na przykład weźmy poniższą treść:

    My cat is very grumpy

Jeśli chcemy utworzyć z niej paragraf, wystarczy użyć odpowiednich tagów:

```html
<p>My cat is very grumpy</p>
```

### Anatomia elementu HTML

Przyjrzyjmy się nieco dokładniej jak tworzymy paragraf.

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

Główne składniki naszego elementu to:

1.  **Tag otwierający:** Znacznik ten zawiera nazwę elementu (w tym wypadku "p") otoczony parą ostrych nawiasów (_znak mniejszości i większości na klawiaturze - przyp. tłum._)
2.  **Tag zamykający:** Jest w zasadzie taki sam jak tag otwierajacy z wyjątkiem tego, że obowiązkowo musi zawierać znak slash przed nazwą tagu. Oznacza to, że w tym miejscu kończy się dany element. Jeśli w kodzie nie umieścisz znaku końca elementu, co jest częstym błędem poczatkujących twórców stron, może to spowodować nieoczekiwane błędy podczas wyświetlania i działania strony.
3.  **Zawartość:** Po prostu treść elementu, w tym wypadku jest to tekst.
4.  **Element:** Element to całość tej konstrukcji: tag otwierający plus zawartość plus tag zamykajacy.

Elementy mogą zawierać atrybuty, np:

![](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

Atrybuty zawierają dodatkowe informacje o elemencie, które nie są widoczne dla odwiedzających stronę. W tym przykładzie `class` jest _nazwą_ atrybutu, a `editor-note` jest jego _wartością_. Atrybut `class` pozwala nadać elementowi indentyfikator, który potem może być użyty do nadania stylu elementowi przez CSS lub do innych celów.

Atrybut zawsze powinien mieć:

1.  Spację między nazwą tagu a nazwą atrybutu (lub innego atrybutu, jeśli dany element ma więcej atrybutów).
2.  Nazwę atrybutu oraz znak równości.
3.  Wartość podaną w cudzysłowie.

> **Note:** **Uwaga**: Proste wartości atrybutów, które nie zawierają białych znaków ASCII (ani żadnego ze znaków `"` `'` `` ` `` `=` `<` `>` ) mogą pozostać bez cudzysłowów, ale zaleca się używać cudysłowów dla wszystkich wartości atrybutów, ponieważ czyni to kod bardziej spójnym i zrozumiałym.

### Zagnieżdżanie elementów

Możesz elementy umieszczać wewnąrz innych elementów kodu HTML — nazywa się to **zagnieżdżaniem**. Jeśli chcemy podkreślić, że nasz kot jest **bardzo** gderliwy, możemy otoczyć slowo "bardzo" tagiem wytluszczającym {{htmlelement("strong")}}:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Jednak musisz upewnić się, że elementy te są odpowiednio zagnieżdżone: w powyższym przykładzie najpierw otwieramy element {{htmlelement("p")}}, następnie element {{htmlelement("strong")}}, dalej musimy zamknąć element {{htmlelement("strong")}} a dopiero potem {{htmlelement("p")}}. Poniższy przykład jest błędny:

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Elementy muszą zaczynać się i kończyć we właściwy sposób, tak aby jeden zawierał się w drugim. Jeśli elementy będą niewłaściwie domknięte, jak w przykładzie wyżej, przeglądarka będzie próbowała zgadnąć co miałeś na myśli, co może prowadzić do nieoczekiwanych rezultatów. Nie rób tak!

### Elementy puste

Czasem elementy nie mają zawartości i nazwyamy je **elementami pustymi**. Weźmy element {{htmlelement("img")}}, który używaliśmy wcześniej w naszym kodzie HTML:

```html
<img src="images/firefox-icon.png" alt="My test image">
```

Element ten zawiera dwa atrybuty, ale nie posiada tagu zamykającego `</img>`ani żadnej treści. To dlatego, że element ten nie opakowuje żadnej treści, której miałby nadawać wygląd. Jego zadaniem jest załączenie do strony obrazka, który pojawi się na stronie.

### Anatomia dokumentu HTML

Na razie tyle podstaw poszczgólnych elementów. Teraz przyjrzymy się, w jaki sposób są one łączone, aby utworzyć całą stronę HTML. Powróćmy do kodu, który umieściliśmy w naszym przykładzie `index.html` (który poznaliśmy po raz pierwszy w artykule [Struktura plików witryny](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files)):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

Mamy tutaj:

- `<!DOCTYPE html>` — doctype czyli typ dokumentu. Dawno temu, gdy HTML był jeszcze młody (około 1991/2 roku), doctypy miały działać jako linki do zestawu reguł, których strona HTML musiała przestrzegać, aby była uważana za poprawną HTML, co mogło służyć do automatycznego sprawdzania błędów i innych przydatnych rzeczy. Jednak w dzisiejszych czasach nikt nie dba o nie, a tak naprawdę jest tylko historycznym artefaktem, który trzeba uwzględnić, aby wszystko działało dobrze. Na razie to wszystko, co musisz wiedzieć.
- `<html></html>` — element {{htmlelement("html")}} zawiera całą treść strony i czasem nazwany jest elementem bazowym (ang. root element). Wskazuje, gdzie zaczyna i kończy się kod HTML.
- `<head></head>` — element {{htmlelement("head")}} to tzw. nagłówek strony. Ten element działa jak kontener dla wszystkich elementów, które chcesz umieścić na stronie HTML, ale nie w treści, które wyświetlasz przeglądającym twoją stronę. Obejmuje to takie rzeczy jak {Glossary("keyword", "keywords")}} i opis strony, który ma się pojawiać w wynikach wyszukiwania, styl CSS, stylowanie naszej treści, deklaracje zestawu znaków, użytych skryptow i inne.
- `<body></body>` — element {{htmlelement("body")}}. Zawiera _całą_ zawartość, która ma być wyświetlana użytkownikom internetowym podczas odwiedzania Twojej strony, niezależnie od tego, czy chodzi o tekst, obrazy, wideo, gry, odtwarzalne ścieżki dźwiękowe czy cokolwiek innego.
- `<meta charset="utf-8">` — ten element ustawia zestaw znaków, którego twój dokument powinien używać do wyświetlenia treści strony. W tym wypadku jest to UTF-8, który zawiera większość znaków z większości ludzkich języków pisanych. Zasadniczo jest w stanie obsłużyć dowolne treści tekstowe, które można na nim umieścić. Nie ma powodu, aby tego nie ustawiać, a to pomoże uniknąć późniejszych problemów.
- `<title></title>` — element {{htmlelement("title")}}.  Ustawia tytuł strony, który jest tytułem wyświetlanym na karcie przeglądarki, do której wczytywana jest strona. Służy ona również do opisu strony po dodaniu jej do zakładek ulubionych, a także pokazuje tutuł strony w wynikach wyszukiwania.

## Obrazy

Zajmijmy się teraz ponownie elementem {{htmlelement("img")}}:

```html
<img src="images/firefox-icon.png" alt="My test image">
```

Jak powiedzieliśmy wcześniej, ten element odpowiada za wyświetlanie obrazu na stronie. Atrybut `src` (źródło - ang. source) wskazuje ścieżkę do pliku z obrazem.

Mamy również załączony atrybut `alt` (ang. alternative). Ten atrybut określa jaki napis powinien pojawić się na stronie, jeśli użytkownikowi nie został z jakiegoś powodu wyświetlony obraz:

1.  Użytkownicy niewidzący lub z poważnymi wadami wzroku często korzystają z narzędzi nazywanymi czytnikami ekranu, które pozwalają im odczytać tekst alternatywny.
2.  Czasem coś pójdzie nie tak i obraz nie jest wyświetlany na stronie. Na przykład spróbuj zmienić ścieżkę wewnątrz atrybutu `src` na błędną. Jeśli zapiszesz i ponownie załadujesz stronę, powinieneś zobaczyć coś takiego zamiast obrazu:

![](https://mdn.mozillademos.org/files/9349/alt-text-example.png)

Kluczowe dla atrybutu `alt` jest użycie dobrego opisu obrazka. Piszący tekst alternatywny powinien zapewnić czytelnikowi wystarczającą ilość informacji, aby ten mógł dobrze zrozumieć co przekazuje obraz. W tym przykładzie nasz alternatywny tekst "Mój obraz testowy" wcale nie jest dobry. Znacznie lepiej dla naszego obrazka z logo Firefoxa będzie napisać "Logo Firefoxa: płonący lis otaczający Ziemię".

Teraz spróbuj wymyślić dobre teksty alternatywne dla swojego obrazka.

> **Note:** **Uwaga**: Dowiedz się więcej na temat dostępności na stronie [MDN's Accessibility landing page](/pl/docs/Web/Accessibility).

## Tagowanie tekstu

W tej sekcji omowimy podstawowe znaczniki HTML do tagowania tekstu strony.

### Nagłówki

Elementy nagłówków pozwalają określić, że określone części treści są nagłówkami - lub podtytułami - treści. W taki sam sposób, w jaki książka ma tytuł główny, tytuły rozdziałów i napisy, może również wyglądać dokument HTML. HTML zawiera sześć poziomów nagłówków, {{htmlelement ("h1")}} - {{htmlelement ("h6")}}, chociaż najczęściej będziesz używać tylko co najwyżej 3-4 z nich:

```html
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

Teraz spróbuj dodać odpowiedni nagłówej do twojej strony w pliku HTML, tuż nad elementem {{htmlelement("img")}}.

> **Note:** Zobaczysz, że Twój nagłówek na poziomie 1 ma już ustawiony niejawny styl. Nie używaj elementów nagłówka po to, aby uzyskać tekst większy lub pogrubiony, ponieważ są one używane z powodów [semantycznych](/pl/docs/Learn/Accessibility/HTML#Text_content) i [innych przyczyn, takich jak SEO](/pl/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure). Spróbuj utworzyć znaczącą sekwencję nagłówków na swoich stronach, bez pomijania poziomów.

### Paragrafy

Jak wyjaśniono wcześniej, elementy {{htmlelement("p")}} służą do formatowania parafrafów tekstu; będziesz ich często używać podczas oznaczania zwykłej treści tekstowej:

```html
<p>This is a single paragraph</p>
```

Dodaj do swojego tekstu na stronie jeden lub więcej paragrafów (powinieneś go mieć po lekturze artykułu [_Jak powinna wyglądać twoja strona internetowa?_](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like)). Paragrafy umieść bezpośrednio pod elementem {{htmlelement("img")}}.

### Listy

Wiele stron internetowych posiada listy, a HTML ma odpowiedni element do ich utworzenia. Tworzenie listy zawsze wymaga przynajmniej dwóch elementów. Najpopularnieszymi typami list są lista numerowana i lista wypunktowana

1.  **Lista wypunktowana** jest rodzajem listy, gdzie kolejność jej elementów nie ma znaczenia, np. lista zakupów. Aby ją utworzyć użyj znacznika {{htmlelement("ul")}} (ang. unordered list).
2.  **Lista numerowana\*\*** \*\*jest rodzajem listy, gdzie kolejność jej elementów ma znaczenie, np. przepis na coś. Do tego rodzaju listy używany jest znacznik {{htmlelement("ol")}} (ang. ordered list).

Każdy element listy musi być umieszczony w swoim znaczniku {{htmlelement("li")}} (ang. list item).

Na przykład, jeśli chcielibyśmy utworzyć listę z poniższego paragrafu:

```html
<p>At Mozilla, we’re a global community of technologists, thinkers, and builders working together ... </p>
```

Możemy to zrobić w następujący sposób:

```html
<p>At Mozilla, we’re a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together ... </p>
```

Spróbuj dodać oba rodzaje list do swojej przykładowej strony.

## Linki (odnośniki)

Odnośniki są bardzo ważne — są tym co sprawia, że Sieć jest Siecią! Aby utworzyć odnośnik musimy użyć prostego elementu — {{htmlelement("a")}} — "a" jest skrótem od angielskiego "anchor", czyli kotwica. Aby zrobić z twojego teksu w paragrafie link, wykonaj następujące czynności:

1.  Wybierz jakiś tekst. My wybraliśmy "Mozilla Manifesto".
2.  Umieść go wewnątrz elementu {{htmlelement("a")}}:

    ```html
    <a>Mozilla Manifesto</a>
    ```

3.  Nadaj elementowi {{htmlelement("a")}} atrybut `href`:

    ```html
    <a href="">Mozilla Manifesto</a>
    ```

4.  Wypełnij atrybut `href` odpowiednią zawartością, tj. adresem strony do jakiej twoj odnośnik ma prowadzić:

    ```html
    <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
    ```

Możesz otrzymać nieoczekiwany rezultat jeśli w adresie pominiesz część `https://` lub `http://`, zwana  _protokołem._ Po dodaniu linku przetestuj stronę czy odnośnik prowadzi tam gdzie chciałeś.

> **Note:** `href` może się wydawać niejasnym wyborem dla nazwy atrybutu. Jeśli masz problem z zapamiętaniem go, pamietaj że oznacza on hipertekstową referencję _(\_ang._ **h**ypertext **ref**erence\_)

Jeśli tego jeszcze nie zrobiłeś, dodaj odnośnik na twojej stronie.

## Podsumowanie

Jeśli podążałeś za instrukcjami zawartymi w tym artykule, obecnie twoja strona powinna wyglądać podobnie do tej poniżej (możesz ją również zobaczyć [tutaj](http://mdn.github.io/beginner-html-site/)):

![A web page screenshot showing a firefox logo, a heading saying mozilla is cool, and two paragraphs of filler text](https://mdn.mozillademos.org/files/9351/finished-test-page-small.png)

Jeśli gdzieś po drodze utknąłeś, zawsze możesz porównać swój kod z  GitHub [ukończonymi przykładami](https://github.com/mdn/beginner-html-site/blob/gh-pages/index.html) na GitHubie.

Tutaj jedynie prześlizgnęliśmy się po powierzchni HTMLa. Aby dowiedzieć się więcej przejdź do strony [Nauka HTMLa ](/en-US/Learn/HTML).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
