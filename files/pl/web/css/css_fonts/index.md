---
title: basefont
slug: Web/CSS/CSS_Fonts
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/basefont
original_slug: Web/HTML/Element/basefont
---
### Podsumowanie

Element `<basefont>` ustanawia domyślny rozmiar czcionki dla dokumentu. Rozmiar czcionki może być wtedy różnie odnoszony do czcionki bazowej przy użyciu elementu `<font>`.

### Atrybuty

- color
  - : Ten atrybut ustawia kolor tekstu przy użyciu nazwanego koloru lub koloru określonego w formacie szesnastkowym #RRGGBB.

- face
  - : Ten atrybut zawiera listę jednej lub wielu nazw czcionek. Tekst dokumentu w domyślnym stylu jest wyświetlany w pierwszym rodzaju czcionki, który wspiera przeglądarka użytkownika. Jeśli żadna z czcionek podanych w liście nie jest zainstalowana w lokalnym systemie, przeglądarka zwykle wybierze domyślną dla tego systemu czcionkę proporcjonalną lub o stałej szerokości.

- size
  - : Ten atrybut określa rozmiar czcionki w wartościach numerycznych lub względnych. Wartości numeryczne zawierają się w zakresie od 1 do 7, gdzie 1 jest wartością najmniejszą, zaś 3 domyślną.

### Przykład

        <basefont color="#FF0000" face="Helvetica" size="+2" />

### Notatki

HTML 3.2 wspiera `basefont`, ale jedynie z atrybutem `size`.

Specyfikacje Strict HTML oraz XHTML nie wspierają tego elementu.

Wbrew temu, że jest częścią standardu Transitional, część przeglądarek skupionych na standardach, jak Mozilla i Opera, nie wspiera tego elementu.

Ten element może być naśladowany przez regułę CSS dla elementu `body`.

XHTML 1.0 wymaga dla tego elementu zamykającego ukośnika: `<basefont />`.

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/basefont" } ) }}
