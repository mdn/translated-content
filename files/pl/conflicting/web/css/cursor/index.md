---
title: Użycie wartości URL dla własności cursor
slug: conflicting/Web/CSS/cursor
tags:
  - CSS
  - CSS_2.1
  - Programowanie_WWW
  - Programowanie_dla_wielu_przeglądarek
  - Wszystkie_kategorie
translation_of: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
original_slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
---
[Gecko](pl/Gecko) 1.8 ([Firefox 1.5](pl/Firefox_1.5), SeaMonkey 1.0) wspiera wartości URL dla [własności cursor CSS 2/2.1](http://www.w3.org/TR/CSS21/ui.html#cursor-props). To pozwala używać zewnętrzne obrazki jako kursory myszy — można użyć każdego formatu wspieranego przez Gecko.

### Składnia

Składnia dla tej własności:

    cursor: [<url>,]* słowo_kluczowe;

To oznacza, że można podać zero lub więcej adresów URL (oddzielonych przecinkiem), a na końcu musi pojawić się jedno ze słów kluczowych zdefiniowanych w specyfikacji [CSS](pl/CSS), takie jak `auto` czy `pointer`.

Na przykład, taka wartość jest dozwolona:

    cursor: url(foo.cur), url(http://www.example.com/bar.gif), auto;

Najpierw nastąpi próba pobrania pliku foo.cur. Jeżeli ten plik nie istnieje, lub jest nieprawidłowy z jakiegoś powodu, nastąpi próba pobrania bar.gif, a jeśli to się nie uda, zostanie użyta wartość `auto`.

Wsparcie dla [składni](http://www.w3.org/TR/css3-ui/#cursor) CSS3 dla wartości własności cursor zostało dodane w Gecko 1.8beta3 (Deer Partk Alpha 2); zatem działa ono w Firefoksie 1.5. Pozwala to na określanie punktu wiązania kursora, który **musi** być wewnątrz wymiarów obrazka kursora; koordynaty na zewnątrz obrazka będą przybliżane do krawędzi (n.p. ujemna wartość będzie interpretowana jako 0, a wartości wykraczające poza wymiary obrazka będą przycinane do najbliższego piksela w obrazku). Jeśli nie zostaną podane, dla plików CUR i XBM wartości zostaną pobrane z plików, a dla pozostałych zostanie ustalony lewy górny róg obrazka. Przykładem składni CSS3 jest:

    cursor: url(foo.png) 4 12, auto;

Pierwsza liczba to wartość x, a drugi y. W tym przypadku punkt wiązania zostanie ustawiony w pikselu (4,12) licząc od lewego górnego rogu (0,0).

### Ograniczenia

Można używać wszystkich formatów obrazków wspieranych przez Gecko. To oznacza, że możesz użyć BMP, JPG, CUR, GIF, itp. Jednak ANI nie jest wspierane. I nawet, jeżeli zostanie podany animowany GIF, kursor nie będzie animowany. To ograniczenie zostanie usunięte w przyszłych wersjach.

Gecko, samo w sobie, nie tworzy żadnych ograniczeń, co do rozmiaru kursora. Jednak powinieneś ograniczyć obrazek do 32x32 dla maksymalnej kompatybilności z różnymi systemami operacyjnymi. W szczególności kursory większe, niż podany rozmiar nie będą działały na Windows 9x (95, 98, ME).

Przezroczyste kursory nie są wspierane na systemie Windows w wersjach wcześniejszych niż XP. To ograniczenie systemu operacyjnego. Przezroczystość działa na pozostałych platformach.

Tylko wydania Mozilli na platformy Windows, OS/2 i Linux (z GTK+ 2.4 lub nowszym) wspierają wartości URL dla kursorów. Wsparcie dla innych platform może zostać dodane w przyszłości (Mac OS: {{ Bug(286304) }}, QNX Neutrino: {{ Bug(286307) }}, XLib: {{ Bug(286309) }}, Qt: {{ Bug(286310) }}, BeOS: {{ Bug(298184) }}, Gtk 2.0/2.2: {{ Bug(308536) }})

### Kompatybilność z innymi przeglądarkami

Microsoft Internet Explorer także wspiera wartości URI dla własności cursor. Jednak wspiera wyłącznie formaty CUR i ANI.

Jest także znacznie mniej restrykcyjny w zakresie składni. To oznacza, że wartości takie jak:

    cursor: url(foo.cur);

lub:

    cursor: url(foo.cur), pointer, url(bar.cur), auto;

będą działały w MSIE, ale nie będą w Gecko. Dla kompatybilności z Gecko i zgodności ze specyfikacja CSS, zawsze na początku należy podać URI, oraz użyć dokładnie jednego słowa kluczowego na końcu.
