---
title: Struktura plików witryny
slug: Learn/Getting_started_with_the_web/Dealing_with_files
translation_of: Learn/Getting_started_with_the_web/Dealing_with_files
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Strona internetowa zawiera wiele plików: pliki z treścią, kod, arkusze stylów, media, i więcej. Kiedy budujesz stronę internetową, musisz zebrać je wszystkie razem i stworzyć z nich rozsądną strukturę na swoim komputerze oraz upewnić się, że mogą się one między sobą komunikować, zanim [wyślesz je na serwer hostingowy](/en-US/Learn/Getting_started_with_the_web/Publishing_your_website). Sekcja _Struktura plików witryny_ omawia podstawowe kwestie jakich powinieneś być świadomy, aby zbudować racjonalną strukturę plików dla twojej strony internetowej.

## Gdzie na twoim komputerze powinna znajdować się twoja strona internetowa?

Kiedy pracujesz lokalnie na swoim komputerze, powinieneś wszystkie pliki zwiazane z daną stroną trzymać w pojedynczym folderze, który będzie odzwierciedlał folder na serwerze, na którym zamierzasz publikować stronę.  Ten folder może się znajdować gdzie tylko chcesz, na twoim komputerze, choć raczej powinieneś go przechowywać w miejscu, które łatwo odnajdziesz. Może to być twój Pulpit czy folder domowy linuxa, albo bezpośrednio na dysku twardym bez katalogów nadrzędnych.

1.  Wybierz miejsce przechowywania projektu strony. Utwórz katalog o nazwie `web-projects` (lub podobnej). Tu będzie się znajdował projekt twojej strony.
2.  Wewnątrz katalogu utwórz kolejny folder do przechowywania twojej pierwszej strony internetowej. Nazwij go `test-site` (lub w bardziej kreatywny sposób).

## Nazewnictwo folderów i plików

Jak zauważysz, w tym artykule poprosimy cię o nazywanie folderów i plików tylko małymi literami i bez spacji w nazwie. A to dlatego, że:

1.  Wiele komputerów, a w szczególności serwerów sieciowych, jest wrażliwych na wielkość liter w nazwach. Tak więc na przykłąd, jeśli umieścisz obraz z twojej strony w `test-site/MyImage.jpg`, a następnie w innym pliku odwołasz się do niego jako `test-site/myimage.jpg`, to może nie zadziałać.
2.  Przeglądarki, serwery sieciowe oraz języki programowania nie do końca radzą sobie ze spacjami w nazwach. Na przykład, jeśli użyjesz spacji w nazwie pliku, niektóre systemy potraktują tę nazwę jako dwie nazwy dwóch plików. Niektóre serwery zastąpią spacje w nazwie symbolem "%20" (kod znaku dla spacji w URIs), w rezultacie przestaną działać wszystkie twoje odnośniki do takiego pliku. Lepiej jest stosować myślniki niż podkreślenia: `my-file.html` vs. `my_file.html`.

Krótko mówiąc powinieneś używać myślników w nazwach plików (oczywiście jeśli chcesz używać kilkuwyrazowych nazw). Wyszukiwarka Google traktuje myślnik jako separator słów, ale podkreślenie już nie. Z tego powodu najlepiej jest wyrobić sobie nawyk pisania nazw plików i folderów małymi literami i bez spacji, i raczej nie używać myślników czy podkreśleń, chyba że wiesz co robisz. W ten sposób unikniesz już części problemów jakie możesz napotkać.

## Jaką strukturę powinna mieć twoja strona internetowa?

Następnie zobaczmy jaką strukturę powinna mieć twoja strona internetowa. Najczęściej rzeczy, które będziemy mieli w każdym projekcie strony internetowej, który tworzymy, to podstawowy plik HTML `index.html` i foldery zawierające obrazy, pliki stylów i pliki skryptów . Stwórzmy je teraz:

1.  **`index.html`**: Ten plik zawiera podstawową treść strony głównej twojej witryny, czyli tekst i obrazy jakie ludzie widzą wchodząc na twoją stronę. Przy pomocy twojego edytora tekstowego stwórz plik o nazwie `index.html` i zapisz go w twoim folderze projektu `test-site`.
2.  **katalog `images`**: Ten folder będzie zawierał obrazy jakie użyjesz na twojej stronie. Utwórz katalog `images` wewnątrz folderu `test-site`.
3.  **katalog `styles`**: Ten folder będzie zawierał pliki CSS do nadania wyglądu twojej strony (np. ustawieni koloru tekstu i tła strony). Utwórz katalog `styles` wewnątrz folderu `test-site`.
4.  **katalog `scripts`**: Ten folder będzie zawierał cały JavaScript użyty do uczynienia twojej strony interaktywną (np. przyciski wczytujące dane po kliknięciu). Utwórz folder o nazwie `scripts` wewnątrz katalogu `test-site`.

> **Uwaga:** W systemie Windows, możesz napotkać na problem z wyświetlaniem nazw plików, ponieważ domyślnie włączona jest opcja folderów zwana **Ukryj rozszeżenia znanych typów plików**. Możesz ją wyłączyć w prosty sposób. Otwórz Eksplorator Plików, kliknij opcję w menu **Organizuj** a następnie  **Opcje folderów i wyszukiwania**. W zakładce **Widok** odzdnacz opcję **Ukryj rozszeżenia...** Po bardziej szczegółowe informacje (w zależności od twojej wersji systemu Windows) sięgnij do strony Microsoft lub po prostu poszukaj w Internecie!

## Ścieżki do plików

Aby pliki mogły się między sobą komunikować, musisz ustawić odpowiednie ścieżki między nimi — po prostu chodzi o takie ścieżki, żeby pliki wiedziały wzajemnie, gdzie który się znajduje. Pokażemy ci o co chodzi tworząc nieco kodu w naszym pliku `index.html`, tak aby wyświetlał obraz jaki wybrałeś zgodnie ze wskazówkami artykułu ["Jak będzie wyglądała twoja strona internetowa?"](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like)

1.  Skopiuj uprzednio wybrany obrazek do katalogu `images`.
2.  Otwórz plik `index.html` i wklej do niego poniższy kod. Nie martw się na razie tym co on oznacza - przyjżymy się jego strukturze dalej.

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <img src="" alt="My test image">
      </body>
    </html>
    ```

3.  W linii `<img src="" alt="My test image">` znajduje się kod HTML, który odpowiada za umieszczenie obrazu na twojej stronie. Musimy mu tylko wskazać, gdzie znajduje się plik z obrazem. Obrazek jest w katalogu _images_, który z kolei jest w tym samym folderze co `index.html`. Aby przejść od pliku `index.html` do naszego obrazu, ścieżka jaką potrzebujemy wskazać to `images/your-image-filename`. Na przykład, jeśli plik z obrazkiem nazywa się `firefox-icon.png`, ścieżką do niego jest `images/firefox-icon.png`.
4.  Wstaw sieżkę do pliku we wskazanej wcześniej linii w cudzysłowie atrybutu `src=""`.
5.  Zapisz plik HTML i otwórz go w przeglądarce (klikając na niego dwa razy). Powinieneś zobaczyć w oknie przeglądarki swój obrazek!

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](https://mdn.mozillademos.org/files/9229/website-screenshot.png)

Kilka ogólnych reguł tworzenia ścieżek:

- Aby wskazać plik znajdujący się w tym samym katalogu, co plik HTML, który się do niego odwołuje, po prostu podaj nazwę pliku, np. `moj-obraz.jpg`.
- Aby wskazać plik znadujący się w podkatalogu, podaj nazwę katalogu, następnie slash i nazwę pliku, np. `podkatalog/moj-obraz.jpg`.
- Aby wskazać plik znadujący się **powyżej** odwołującego się do niego pliku HTML, napisz dwie kropki. Przykładowo, jeśli `index.html` jest w podfolderze katalogu `test-site` a `moj-obraz.jpg` jest wewnątrz folderu `test-site`, możesz się do niego odnieść pisząc `../moj-obraz.jpg`.
- Możesz łączyć powyższe reguły na różne sposoby, np `../podkatalog/inny-podkatalog/moj-obraz.jpg`.

Jak narazie to wszystko co powinieneś o tym wiedzieć.

> **Uwaga:** W systemie Windows w ścieżkach do plików używa się znaku backslash a nie slash, enp. `C:\windows`. To jest nieistotne dla HTML — nawet jeśli tworzysz strony na Windowsie, nadal powinieneś używać w ścieżkach znaku slash.

## Co jeszcze należy zrobić?

Na razie to tyle, a twoja struktura plików i folderów powinna wyglądać mniej więcej tak:

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](https://mdn.mozillademos.org/files/9231/file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
