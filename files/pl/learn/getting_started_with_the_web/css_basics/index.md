---
title: CSS podstawy
slug: Learn/Getting_started_with_the_web/CSS_basics
translation_of: Learn/Getting_started_with_the_web/CSS_basics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

Kaskadowe arkusze stylów CSS (ang. Cascading Style Sheets) to kod służący do nadawania wyglądu strony. _CSS Podstawy_ przeprowadzi cię przez bazowe zagadnienia, abyś mógł zacząć modyfikować wygląd swojej strony. Odpowiemy na takie pytania jak: Jak zrobić, żeby mój tekst był czarny albo czerwony? Jak wyświetlić poszczególną zawartość strony w wybranych miejscach ekranu? Jak dekorować stronę obrazami czy nadać kolor tła?

## Czym właściwie jest CSS?

Podobnie jak HTML, CSS nie jest językiem programowania. Nie jest jednak też _językiem znaczników_ — jest językiem arkuszy stylów (ang. _style sheet language_). Oznacza to, że pozwala on selektywnie stosować style do elementów w dokumentach HTML. Na przykład, aby zaznaczyć wszystkie paragrafy na stronie HTML i zmienić w nich kolor tekstu na czerwono, należy napisać ten kod CSS:

```css
p {
  color: red;
}
```

Sprawdźmy: wklej te trzy linie kodu do nowego pliku. Plik nazwij `style.css` i umieść go w katalogu `styles`.

Wciąż jednak musimy powiązać ten kod CSS z twoim dokumentem HTML. W przeciwnym wypadku stworzony kod CSS nie będzie miał wpływu na wygląd twojej strony. (Jeśli nie śledzisz naszego projektu od poczatku, przeczytaj [Struktura plików witryny](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files) oraz [HTML podstawy](/en-US/Learn/Getting_started_with_the_web/HTML_basics), żeby dowiedzieć się co wpierw należy wykonać.)

1.  Otwórz plik `index.html` i wklej poniższy kod gdzieś w sekcji nagłówka (czyli pomiędzy elementami `<head>` i `</head>`):

    ```html
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    ```

2.  Zapisz plik `index.html` a następnie otwórz go w przeglądarce. Powinieneś móc zobaczyć coś takiego:

![A mozilla logo and some paragraphs. The paragraph text has been styled red by our css.](https://mdn.mozillademos.org/files/9435/website-screenshot-styled.png)Jeśli tekst twoich akapitów jest czerwony, gratulacje! Właśnie napisałeś swój pierwszy skuteczny kod CSS.

### Anatomia reguł CSS

Przyjrzyjmy się nieco bardziej szczegółowo naszemu kodowi CSS:

![](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)

Cała struktura jest nazywana **listą** **dyrektyw** - reguł. Oto nazwy poszczególnych części:

- Selektor
  - : Element HTML na początku reguły. Wybiera poszczególne elementy (bądź też tylko jeden) do wystylizowania - w tym wypadku wszystkie elementy `p`. Aby dodać styl do innego elementu, po prostu zmień selektor;
- Deklaracja
  - : Pojedyncza reguła, taka jak `color: red;`, która ustala jakie **właściwości** elementu chcesz wystylizować.
- Właściwości
  - : Sposoby stylizowania danego elementu HTML. (W powyższym przykładzie `color` jest właściwością selektrora `p`.) W CSS wybierasz, która właściwość ma być nadana w danej deklaracji.
- Wartość właściwości
  - : Po prawej stronie właściwości za dwukropkiem mamy wartość właściwości, która wybiera jeden z wielu możliwych wyglądów dla danej właściwości (istnieje wiele wartości `color` oprócz `red`).

Zauważ inne ważne części składni:

- Każda deklaracja (oprócz selektror) musi być ujęta w nawias klamrowy (`{}`).
- W ramach każdej deklaracji należy użyć dwukropka (`:`), aby oddzielić właściwość od jej wartości.
- W ramach każdej deklaracji należy użyć średnika (`;`), aby oddzielić każdą deklarację od następnej.

Aby zmodyfikować wiele wartości właściwości jednocześnie, wystarczy napisać je oddzielone średnikami, np.:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Wybieranie wielu elementów

Możesz również wybrać wiele typów elementów i zastosować dla nich jeden zestaw deklaracji. Wypisz kilka selektorów oddzielonych przecinkami. Na przykład:

```css
p,li,h1 {
  color: red;
}
```

### Inne typy selektorów

Istnieje wiele innych typów selektorów. Do tej pory używaliśmy tylko **selektorów elementów**, które wybierają wszystkie elementy danego typu z kodu HTML. Ale możemy stworzyć bardziej szczegółowe selektory. Oto kilka powszechnych typów selektorów:

| Nazwa selektora                                              | Co wybiera?                                                                                    | Przykład                                                                  |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Selektor elementu (czasem nazywany selektorem tagu lub typu) | Element(y) HTML o podanym typie.                                                               | `p` Wybiera elementy `<p>`                                                |
| Selektor ID                                                  | Element na stronie o podanym ID (na jednej stronie HTML możesz użyć konkretnego ID tylko raz). | `#my-id` Wybiera `<p id="my-id">` lub `<a id="my-id">`                    |
| Selektor klasy                                               | Element(y) na stronie o podanej klasie (Tej samej klasy możesz użyć wiele razy na stronie).    | `.my-class` Wybiera `<p class="my-class">` oraz `<a class="my-class">`    |
| Selektor atrybutu                                            | Element(y) na stronie o podanym atrybucie.                                                     | `img[src]` wybiera `<img src="myimage.png">` ale nie `<img>`              |
| Selektor pseudo-klasy                                        | Element(y) o określonym stanie np. najechanie myszą na element                                 | `a:hover` Wybiera `<a>`, ale tylko gdy kursor znajduje się nad elementem. |

Istnieje wiele innych typów selektorów, możesz je poznać w naszym [Selectors guide](/pl/docs/Web/Guide/CSS/Getting_started/Selectors).

## Czcionki i tekst

Teraz, gdy poznaliśmy podstawy CSS, dodajmy więcej reguł i informacji do naszego pliku `style.css` żeby nasz przykład wyglądał lepiej. Zacznijmy od zmiany wyglądu czcionek i tekstu.

1.  Na początek, cofnij się i znajdź [output from Google Fonts](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Font), który przechowałeś w bezpiecznym miejscu. Dodaj element {{htmlelement("link")}} gdzieś wewnątrz sekcji head w pliku `index.html` (gdziekolwiek pomiędzy tagami `<head>` i `</head>`). Linijka będzie wyglądała podobnie do:

    ```html
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    ```

2.  Następnie, usuń istniejące reguły w pliku `style.css`. To był dobry test, ale czerwony tekst nie wygląda najlepiej.
3.  Dodaj poniższy kod, zastępując linie "placeholder" z `font-family` wygenerowanym w Google Fonts. (`font-family` oznacza czcionkę lub czcionki których chcesz używać). Pierwsza reguła ustala bazową wielkość tekstu i czcionkę dla całej strony (ponieważ `<html>` to element-rodzic całej strony i wszystkie elementy wewnątrz niego dziedziczą ten sam `font-size` i `font-family`):

    ```css
    html {
      font-size: 10px; /* px oznacz 'piksele': bazowy rozmiar tekstu to teraz 10 pikseli wysokości  */
      font-family: placeholder; /* tu powinnien być font-family wygenerowany w Google fonts */
    }
    ```

    > **Uwaga:** Wszystko w dokumencie CSS pomiędzy `/*` i `*/` jest **komentarzem** **CSS**, który przyglądarka zignoruje podczas wyświetlania strony. To miejsce dla Ciebie na notatki dotyczące tego co dzieje się w danym miejscu.

4.  Teraz ustawimy rozmiar czcionki dla elementów zawierających tekst wewnątrz ciała (body) HTML: ({{htmlelement("h1")}}, {{htmlelement("li")}}, i {{htmlelement("p")}}). Wycentrujemy również tekst naszego nagłówka i ustawimy wysokość linii tekstu i odstęp między znakami dla głównej treści aby uczynić ją bardziej czytelną:

    ```css
    h1 {
      font-size: 60px;
      text-align: center;
    }

    p, li {
      font-size: 16px;
      line-height: 2;
      letter-spacing: 1px;
    }
    ```

Możesz dostosować wartości `px` na jakiekolwiek chcesz, aby uzyskać wygląd jaki chcesz, ale generalnie twoja strona powinna wyglądać podobnie jak ta:

![a mozilla logo and some paragraphs. a sans-serif font has been set, the font sizes, line height and letter spacing are adjusted, and the main page heading has been centered](https://mdn.mozillademos.org/files/9447/website-screenshot-font-small.png)

## Pudełka, pudełka, wszędzie pudełka

Jedną z rzeczy którą zauważysz podczas pisania CSS to, że wiele z nich dotyczy pudełek (ang. boxes) — ustawianie ich rozmiaru, koloru, pozycji etc. O większości elementów na stronie możesz myśleć jak o pudełkach stawianych jedne na drugim.

![a big stack of boxes or crates sat on top of one another](https://mdn.mozillademos.org/files/9441/boxes.jpg)

Nic dziwnego, że układ CSS opiera się głównie na _modelu pudełkowym_ (ang. _box model_). Każdy z bloków zajmujących miejsce na Twojej stronie ma takie właściwości:

- `padding`, przestrzeń wokół elementu (np. wokół paragrafu tekstu)
- `border`, obramowanie poza padding-iem
- `margin`, przestrzeń wokół zewnętrznej części elementu

![three boxes sat inside one another. From outside to in they are labelled margin, border and padding](https://mdn.mozillademos.org/files/9443/box-model.png)

W tej sekcji możemy także użyć:

- `width`, szerokość elementu,
- `background-color`, kolor pod zawartością i paddingiem elementu,
- `color`, kolor treści elementu (zazwyczaj tekstu),
- `text-shadow`: ustawia cień pod tekstem wewnątrz elementu,
- `display`: określa sposób wyświetlania elementu (póki co nie martw się tym).

Dodajmy trochę więcej CSS do naszej strony! Dodawaj nowe reguły na dole pliku i nie bój się eksperymentować ze zmianą wartości, aby zobaczyć, jak działają.

### Zmiana koloru strony

```css
html {
  background-color: #00539F;
}
```

Ten zestaw reguł ustawi kolor tła dla całej strony. Zmień powyższy kod koloru na dowolny wybrany podczas[ planning your site](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Theme_color).

### Sortowanie elementów body

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Teraz element {{htmlelement("body")}}. Jest tu kilka deklaracji, więc przejrzyjmy je wszystkie jedna po drugiej:

- `width: 600px;` — wymusza, aby szerokość elementu body wynosiła 600 pikseli.
- `margin: 0 auto;` — Kiedy ustawiasz dwie wartości na właściwościach takich jak `margin` czy `padding`, pierwsza wartość dotyczy górnej i dolnej strony elementu (ustawia je na 0 w tym wypadku), a druga wartość ustawia lewą i prawą stronę (`auto` to specjalna wartość która dzieli dostępną przestrzeń w poziomie równo pomiędzy lewą i prawą stronę). Możesz równiej użyć jednej, dwóch, trzech lub czterech wartości tak jak zostało to opisane [tutaj](/pl/docs/Web/CSS/margin#Values).
- `background-color: #FF9500;` — jak wcześniej, ustawia tło elementu. Użyliśmy czerwono-pomarańczowego koloru dla body, jako przeciwieństwa dla ciemno niebieskiego koloru dla elementu {{htmlelement("html")}}, ale nie krępuj się eksperymentować.
- `padding: 0 20px 20px 20px;` — mamy cztery wartości do ustawienia odstępów do uzyskania przestrzeni wokół elementu. Tym razem ustawiamy brak górnego odstępu i po 20 pikseli odstępu dla prawej strony, dołu i lewej strony. Wartości ustawiają kolejno górę, prawą stronę, dół i lewą stronę.
- `border: 5px solid black;` — ta prosta reguła ustawia obramowanie ciągłą linią o szerokości 5-ciu pikseli w czarnym kolorze dla każdego z boków.

### Ustawianie i stylowanie głównego nagłówka

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
}
```

Być może zauważysz paskudną szparę na górze ciała strony. Dzieje się tak dlatego, że przeglądarki stosują pewne **domyślne style** dla elementu {{htmlelement("h1")}} (oraz innych), nawet jeżeli nie użyjesz żadnego stylu CSS! To może brzmieć jak zła koncepcja, ale chcemy by nawet nieostylowana strona wyglądała czytelnie. Aby pozbyć się luki, zmieniliśmy domyślny styl, ustawiając `margin: 0;`.

Następnie ustawiliśmy górny i dolny margines nagłówka na 20 pikseli i nadaliśmy tekstowi nagłówka taki sam kolor, jak kolor tła dla html.

Ciekawą właściwością, którą tutaj wykorzystaliśmy, jest `text-shadow`, który nadaje cień dla tekstu wewnątrz elementu. Jego cztery wartości są następujące:

- Pierwsza wartość w pikselach określa **przesunięcie poziome** cienia od tekstu - jak daleko przesunąć go w poprzek: wartość ujemna powinna przesunąć cień w lewo.
- Druga wartość w pikselach określa **pionowe przesunięcie** cienia - jak daleko przesunąć go w dół; Wartość ujemna przesunie cień w górę.
- Trzecia wartość w pikselach to **promień rozmycia** cienia — większa wartość oznacza bardziej rozmyty cień.
- Czwarta wartość określa kolor cienia.

Ponownie, eksperymentuj z innymi wartościami i zobacz co możesz zrobić!

### Centrowanie obrazka

```css
img {
  display: block;
  margin: 0 auto;
}
```

Wreszcie wycentrujemy obrazek żeby wyglądał lepiej. Możemy użyć ponownie triku `margin: 0 auto` którego użyliśmy w przypadku body, ale dodatkowo musimy zrobić coś jeszcze. Element {{htmlelement("body")}} jest **blokowy (ang. block)**, co oznacza, że zajmuje całą dostępną przestrzeń na stronie i możesz zastosować dla niego marginesy i inne ustawienia wielkości. Z drugiej strony, obrazki są elementali **liniowymi** (ang.inline) i nie posiadają takich właściwości. Dlatego żeby zastosować marginesy dla grafiki musimy zmienić jej sposób wyświetlania na blokowy używając `display: block;`.

> **Note:** Powyższe instrukcje zakładają, że używasz obrazu o szerokości mniejszej niż szerokość ustawiona dla elementu body (600 pikseli). Jeśli obraz jest większy, spowoduje to przelanie treści i rozlanie jej na resztę strony. Aby temu zapobiec możesz 1) zmniejszyć wielkość obrazu za pomocą [editora graficznego](https://pl.wikipedia.org/wiki/Edytor_grafiki_rastrowej), lub 2) zmniejszyć obraz przy użyciu CSS ustawiając właściwość {{cssxref("width")}} dla elementu `<img>` na mniejszą wartość (np., `400 px;`).

> **Uwaga:** Nie przejmuj się jeżeli jeszcze nie rozumiesz `display: block;` i różnicy między elementami liniowymi a blokowymi. Zrozumiesz z czasem zgłębiania wiedzy o CSS. Więcej o różnych dostępnych sposobach wyświetlania możesz znaleźć w naszym [display reference page](/pl/docs/Web/CSS/display).

## Konkluzja

Jeżeli prześledziłeś instrukcje z tego artykułu powinieneś zakończyć ze stroną wyglądającą jak ta (możesz również zobaczyć [naszą wersję tutaj](http://mdn.github.io/beginner-html-site-styled/)):

![a mozilla logo, centered, and a header and paragraphs. It now looks nicely styled, with a blue background for the whole page and orange background for the centered main content strip.](https://mdn.mozillademos.org/files/9455/website-screenshot-final.png)

Jeżeli utkniesz możesz zawsze porównać swój kod z naszym [gotowym przykładem na GitHub](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css).

To naprawdę podstawowe informacje o CSS. Aby dowiedzieć się więcej sprawdź nasz [CSS Learning topic](https://developer.mozilla.org/en-US/Learn/CSS).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
