---
title: cursor
slug: Web/CSS/cursor
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/cursor
---
{{CSSRef}}

## Podsumowanie

Własność `cursor` określa kursor myszy wyświetlany, kiedy wskaźnik myszy jest nad elementem.

{{cssinfo}}

## Składnia

    cursor: <std-cursor-name> | <url> [<x> <y>]? [, <url> [<x> <y>]?]* | {{ Cssxref("inherit") }} ;

    cursor: [<url> [<x> <y>]?,]*  <std-cursor-name> ;

### Wartości

- \<url> {{ mediawiki.external(' ') }}?
  - : URL własnego kursora. Może być podany więcej niż jeden w wypadku, kiedy niektóre typy obrazów nie są obsługiwane. Pozostałe adresy URL muszą być podane jako ostatnie. Zobacz [Użycie wartości URL dla własności cursor](pl/U%c5%bcycie_warto%c5%9bci_URL_dla_w%c5%82asno%c5%9bci_cursor) po więcej informacji.
- \<std-cursor-name>
  - : Jedna z nazw kursorów podanych w poniższej tabeli.

- `default`
  - : domyślny kursor (zazwyczaj strzałka)
- `auto`
  - : odpowiednik `text`, kiedy jest ponad tekstem i `default` w innych przypadkach
- `crosshair`
  - : kursor w kształcie krzyżyka, często używany do wskazania zaznaczenia w bitmapie
- `pointer`
  - : kursor używany nad linkami (zwykle ręka)
- `move`
  - : kursor przenoszenia
- `e-resize`
  - : kursor do zmiany rozmiaru prawej krawędzi pudełka
- `ne-resize`
  - : kursor do zmiany rozmiaru górnego prawego rogu pudełka
- `nw-resize`
  - : kursor do zmiany rozmiaru górnego lewego rogu pudełka
- `n-resize`
  - : kursor do zmiany rozmiaru górnej krawędzi pudełka
- `se-resize`
  - : kursor do zmiany rozmiaru dolnego prawego rogu pudełka
- `sw-resize`
  - : kursor do zmiany rozmiaru dolnego lewego rogu pudełka
- `s-resize`
  - : kursor do zmiany rozmiaru dolnej krawędzi pudełka
- `w-resize`
  - : kursor do zmiany rozmiaru lewej krawędzi pudełka
- `text`
  - : kursor wskazujący tekst, który może być zaznaczony (zwykle belka w kształcie I)
- `wait`
  - : kursor wskazujący, że program jest zajęty (czasami klepsydra lub zegarek)
- `help`
  - : kursor wskazujący, że dostępna jest pomoc
- `progress`
  - : kursor wskazujący, że program jest jest zajęty, ale użytkownik może nadal oddziaływać z nim (w przeciwieństwie do `busy`)
- `copy`
  - : kursor pokazujący, że coś może być skopiowane
- `alias`
  - : kursor wskazujący, że alias lub skrót jest do utworzenia
- `context-menu`
  - : kursor wskazujący, że menu kontekstowe jest dostępne pod kursorem
- `cell`
  - : kursor wskazujący, że komórki mogą być zaznaczone
- `not-allowed`
  - : kursor pokazujący, że coś nie może być zrobione
- `col-resize`
  - : kursor do zmiany rozmiaru kolumn poziomo
- `row-resize`
  - : kursor do zmiany rozmiaru wierszy pionowo
- `no-drop`
  - : kursor pokazujący, że opuszczenie nie jest dozwolone w aktualnym położeniu
- `vertical-text`
  - : kursor wskazujący, że poziomy tekst może być zaznaczony (zwykle boczna belka w kształcie I)
- `all-scroll`
  - : kursor pokazujący, że coś może być przewijane w dowolnym kierunku (przesuwane)
- `nesw-resize`
  - : kursor do zmiany rozmiaru w kierunkach górny prawy lub dolny lewy
- `nwse-resize`
  - : kursor do zmiany rozmiaru w kierunkach górny lewy lub dolny prawy
- `ns-resize`
  - : kursor do zmiany rozmiaru w górę lub w dół
- `ew-resize`
  - : kursor do zmiany rozmiaru w lewo lub prawo

## Przykłady

[Zobacz przykład](/samples/cssref/cursor.html)

    Liniowy:

    <span style="cursor: crosshair">Jakiś tekst</span>

    Zewnętrzny:

    .pointer {
    	cursor: pointer;
    }
    .move {
    	cursor: move;
    }

## Notatki

Ta własność działa na starszych przeglądarkach, jednak nie wszystkie wartości są w pełni wspierane.

## Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/ui.html#propdef-cursor)
- [css3-ui](http://www.w3.org/TR/css3-ui/#cursor)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1.5              |
| Netscape          | 6                |
| Opera             | 7                |
