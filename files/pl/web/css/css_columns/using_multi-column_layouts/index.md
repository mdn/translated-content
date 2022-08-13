---
title: Kolumny CSS3
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
tags:
  - CSS
  - CSS_3
  - Wszystkie_kategorie
translation_of: Web/CSS/CSS_Columns/Using_multi-column_layouts
original_slug: Web/Guide/CSS/Kolumny_CSS3
---
### Wprowadzenie

Czytanie tekstu wyświetlanego w długich wierszach jest trudne i męczące dla oczu - jeśli przenoszenie wzroku z końca jednej linii na początek drugiej zajmuje zbyt wiele czasu, łatwo jest zgubić się w tekście i rozpocząć czytanie niewłaściwego wiersza. Z tego powodu i aby w pełni wykorzystać szerokość ekranu, tekst na stronach internetowych - tak samo jak w gazetach - powinien być układany w sąsiadujących kolumnach o stałej szerokości. Niestety osiągnięcie tego efektu nie jest możliwe przy użyciu języków HTML i obecnego CSS bez wymuszania sztywnej wysokości kolumn, znacznego ograniczania dozwolonej składni wewnątrz tekstu bądź też bez stosowania skomplikowanych skryptów.

[Szkic specyfikacji CSS3](http://www.w3.org/TR/2001/WD-css3-multicol-20010118) proponuje kilka nowych własności CSS, które rozwiązałyby ten problem. W Firefoksie 1.5 i następnych zaimplementowana została część tych własności i zachowują się one w sposób opisany przez szkic specyfikacji (z jednym wyjątkiem opisanym niżej).

Aby zobaczyć, jak działają kolumny CSS, odwiedź (korzystając z Firefoksa 1.5) [blog Roberta O'Callahana](http://weblogs.mozillazine.org/roc/).

### Stosowanie kolumn

#### Liczba i szerokość kolumn

Własności CSS pozwalają okreslić liczbę i szerokość kolumn, w jakich zostanie wyświetlony tekst na stronie: `-moz-column-count` oraz `-moz-column-width`.

`-moz-column-count` pozwala ustalić liczbę kolumn. Na przykład:

    <div style="-moz-column-count:2">Z powodu trwających przygotowań do wydania Mozilli
    Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś w nocy o 23:59 PDT (UTC -7:00).
    Od tego momentu żadne nowe poprawki nie będą przyjmowane do Firefoksa 1.5 Beta 1,
    którego wydanie zaplanowane jest na czwartek.</div>

Powyższy tekst powinien zostać w Firefoksie 1.5 wyświetlony w dwu kolumnach:

Z powodu trwających przygotowań do wydania Mozilli Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś w nocy o 23:59 PDT (UTC -7:00). Od tego momentu żadne nowe poprawki nie będą przyjmowane do Firefoksa 1.5 Beta 1, którego wydanie zaplanowane jest na czwartek.

`-moz-column-width` pozwala natomiast określić minimalną pożądaną szerokość kolumn. Jeśli przy okazji własność `-moz-column-count` nie jest ustalona, przeglądarka automatycznie wyświetli tyle kolumn, ile zmieści się w jej oknie. Na przykład tekst:

    <div style="-moz-column-width:20em;">Z powodu trwających przygotowań do wydania Mozilli
    Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś w nocy o 23:59 PDT (UTC -7:00).
    Od tego momentu żadne nowe poprawki nie będą przyjmowane do Firefoksa 1.5 Beta 1,
    którego wydanie zaplanowane jest na czwartek.</div>

przeglądarka wyświetli następująco:

Z powodu trwających przygotowań do wydania Mozilli Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś w nocy o 23:59 PDT (UTC -7:00). Od tego momentu żadne nowe poprawki nie będą przyjmowane do Firefoksa 1.5 Beta 1, którego wydanie zaplanowane jest na czwartek.

Szczegóły dotyczące kolumn CSS opisano w [szkicu specyfikacji CSS3](http://www.w3.org/TR/2001/WD-css3-multicol-20010118).

W przypadku wyświetlania wielokolumnowego, treść automatycznie przepływa do następnych kolumn, jeśli zachodzi taka potrzeba. Cała funkcjonalność HTML, CSS oraz DOM jest zachowana, podobnie jak możliwość edycji i drukowania.

#### Wyrówywanie wysokości kolumn

Szkic specyfikacji CSS3 zakłada, że wysokości kolumn powinny być wyrównywane przez przeglądarkę w taki sposób, by wysokości treści w każdej kolumnie były możliwie najbardziej zbliżone. I to właśnie robi Firefox.

Czasami jednak pojawia się potrzeba jednoznacznego zdefiniowania wysokości kolumn. W takim przypadku treść - w zależności od długości - wyświetlana powinna być w różnej, nieznanej projektantowi liczbie kolumn. Efekt ten zastosowano na stronach [International Herald Tribune](http://iht.com), gdzie jednak użyto w tym celu odpowiednich skryptów. Firefox rozszerza szkic specyfikacji CSS w taki sposób, że nadanie blokowi kolumn własności `height` powoduje wydłużanie się kolumn do określonej wysokości, a po osiągnięciu tejże - utworzeniu nowej kolumny. Zachowanie to jest bardzo przydatne przy tworzeniu układów stron WWW.

#### Odstęp między kolumnami

Domyślnie, przeglądarka wyświetla kolumny jedna tuż obok drugiej, przylegające do siebie. Zazwyczaj jednak nie jest to zachowanie pożądane. Aby poprawić tę sytuację, można za pomocą CSS ustawić dla kolumn odpowiednie wartości marginesów wewnętrznych, często jednak o wiele łatwiej zastosować jest własność `-moz-column-gap` ustawianą dla bloku kolumn:

    <div style="-moz-column-width:20em; -moz-column-gap:2em;">Z powodu trwających
    przygotowań do wydania Mozilli Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś
    w nocy o 23:59 PDT (UTC -7:00). Od tego momentu żadne nowe poprawki nie będą
    przyjmowane do Firefoksa 1.5 Beta 1, którego wydanie zaplanowane jest na czwartek.</div>

Z powodu trwających przygotowań do wydania Mozilli Firefox 1.5 Beta 1 drzewo zostanie zamrożone dziś w nocy o 23:59 PDT (UTC -7:00). Od tego momentu żadne nowe poprawki nie będą przyjmowane do Firefoksa 1.5 Beta 1, którego wydanie zaplanowane jest na czwartek.

#### Czytelność w starszych przeglądarkach

Starsze przeglądarki ignorują własności -moz-column, dzięki czemu stosunkowo łatwo jest utworzyć stronę, której treść będzie wyświetlana w pojedynczej kolumnie w starszych przeglądarkach, a w wielu kolumnach w Firefoksie 1.5.

### Zakończenie

Kolumny w CSS3 to nowe narzędzie, które pomoże projektantom stron internetowych w najlepszy możliwy sposób wykorzystywać cenną powierzchnię ekranów uzytkowników. Dzięki takim opcjom jak automatycze wyrównywanie wysokości, kolumny na pewno znajdą wiele zastosowań w tworzeniu stron internetowych.

### Dodatkowe zasoby

- [http://weblogs.mozillazine.org/roc/a...18_for_we.html](http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)

{{ languages( { "en": "en/CSS3\_Columns", "es": "es/Columnas_con_CSS-3", "fr": "fr/Colonnes_CSS3", "it": "it/Le_Colonne_nei_CSS3", "ja": "ja/CSS3\_Columns", "ko": "ko/CSS3\_Columns" } ) }}
