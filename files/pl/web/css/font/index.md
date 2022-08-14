---
title: font
slug: Web/CSS/font
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/font
---
{{ CSSRef() }}

### Podsumowanie

Własność `font` jest skrótową własnością do ustawienia {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{ Cssxref("line-height") }} oraz {{ Cssxref("font-family") }} w jednym miejscu w arkuszu stylów.

- {{ Xref_cssinitial() }}: sprawdź indywidualne własności
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: tak
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

`font:` \[ <{{ Cssxref("font-style") }}> || <{{ Cssxref("font-variant") }}> || <{{ Cssxref("font-weight") }}> ]? <{{ Cssxref("font-size") }}> \[ / <{{ Cssxref("line-height") }}> ]? <{{ Cssxref("font-family") }}>

`font:` `caption` | `icon` | `menu` | `message-box` | `small-caption` | `status-bar` | `-moz-window` | `-moz-document` | `-moz-workspace` | `-moz-desktop` | `-moz-info` | `-moz-dialog` | `-moz-button` | `-moz-pull-down-menu` | `-moz-list` | `-moz-field`

`font:` {{ Cssxref("inherit") }}

### Wartości

Użycie skrótowej własności {{ Cssxref("font") }} ustawia własności pisma jako określone oraz ustawia wszystkie inne własności związane z czcionką do ich wartości początkowych.

Zobacz {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }} oraz {{ Cssxref("font-family") }}, by sprawdzić prawidłowe wartości każdej własności.

Również czcionki systemowe mogą być określone przy użyciu własności {{ Cssxref("font") }}_zamiast_ określania indywidualnych własności pisma:

- caption
  - : Czcionka używana w opisanych kontrolkach (na przykład w przyciskach, listach rozwijanych itd.).
- icon
  - : Czcionka używana do podpisywania ikon.
- menu
  - : Czcionka używana w menu (na przykład menu rozwijanym, listach menu).
- message-box
  - : Czcionka używana w oknach dialogowych.
- small-caption
  - : Czcionka używana do opisywania małych kontrolek.
- status-bar
  - : Czcionka używana w pasku stanu okna.
- \-moz-window
  - :
- \-moz-document
  - :
- \-moz-workspace
  - :
- \-moz-desktop
  - :
- \-moz-info
  - :
- \-moz-dialog
  - :
- \-moz-button
  - :
- \-moz-pull-down-menu
  - :
- \-moz-list
  - :
- \-moz-field
  - :

### Przykłady

[Zobacz przykład](/samples/cssref/font.html)

    /* Ustawia rozmiar czcionki na 12pt oraz odstęp między liniami na 14pt.
    Ustawia rodzinę czcionek na bezszeryfowe */
    p { font: 12pt/14pt sans-serif }

<!---->

    /* Ustawia rozmiar czcionki na 80% rozmiaru znacznika-rodzica lub wartości domyślnej
    (jeśli nie ma obecnego znacznika-rodzica) oraz ustawia rodzinę czcionek na bezszeryfowe */
    p { font: 80% sans-serif }

<!---->

    /* Ustawia wagę (grubość) czcionki na pogrubioną, styl czcionki na kursywę,
    rozmiar na duży i rodzinę czcionek na szeryfowe */
    p { font: bold italic large serif }

### Uwagi

Składniki {{ Cssxref("font-size") }} oraz {{ Cssxref("font-family") }} skrótowej własności są obowiązkowe. Pominięcie ich jest błędem składniowym i powoduje, że cała własność zostanie zignorowana.

Własności, dla których nie ma podanych żadnych wartości, są ustawiane do ich wartości domyślnej, którą jest `normal` dla wszystkich własności, które mogą być pominięte ({{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, oraz {{ Cssxref("line-height") }}).

Własność {{ Cssxref("font-size-adjust") }} jest również ustawiana do jej wartości początkowej (`none`), kiedy określona jest skrótowa własność {{ Cssxref("font") }}.

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#font)
- [CSS 2](http://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html#propdef-font) (dla {{ Cssxref("font-size-adjust") }})
- [CSS 2.1](http://www.w3.org/TR/CSS21/fonts.html#propdef-font)
- [css3-ui](http://www.w3.org/TR/css3-ui/#font) (dla nowych wartości czcionek systemowych)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 3                |
| Netscape          | 4                |
| Opera             | 3.5              |

### Zobacz także

{{ Cssxref("font-family") }}, {{ Cssxref("font-size") }}, {{ Cssxref("font-size-adjust") }}, {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("line-height") }}







{{ languages( { "en": "en/CSS/font", "es": "es/CSS/font", "fr": "fr/CSS/font", "ja": "ja/CSS/font" } ) }}
