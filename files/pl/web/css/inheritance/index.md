---
title: Dziedziczenie
slug: Web/CSS/inheritance
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/inheritance
original_slug: Web/CSS/Dziedziczenie
---
{{ CSSRef() }}

### Podsumowanie

Podsumowanie każdej [definicji własności CSS](pl/Dokumentacja_CSS) zawiera informację, czy dana własność jest dziedziczona domyślnie ("Dziedziczona: tak"), czy też nie ("Dziedziczona: nie"). Umożliwia to kontrolę nad tym, co się dzieje, gdy nie została określona żadna wartość własności elementu.

### Własności dziedziczone

Gdy nie została określona wartość **własności dziedziczonej** elementu, element otrzymuje [wartość wyliczoną](pl/CSS/Warto%c5%9b%c4%87_wyliczona) własności elementu-rodzica. Tylko element główny dokumentu otrzymuje [wartość początkową](pl/CSS/Warto%c5%9b%c4%87_pocz%c4%85tkowa) podaną w podsumowaniu własności.

Typowym przykładem własności dziedziczonej jest własność {{ Cssxref("color") }}. Mając następujące reguły stylu:

     p { color: green }

i znaczniki

     <p>Ten akapit zawiera <em>wyróżniony tekst</em> wewnątrz.</p>

wyrażenie "wyróżniony tekst" będzie miało kolor zielony, ponieważ element `em` odziedziczył wartość własności {{ Cssxref("color") }} po elemencie `p`. _Nie_ otrzymuje on początkowej wartości własności (którą jest kolor użyty w elemencie głównym, gdy nie został określony dla strony żaden kolor).

### Własności niedziedziczone

Gdy nie została określona wartość **własności niedziedziczonej** (czasami nazywanej **własnością reset** w kodzie Mozilli) elementu, element otrzymuje [wartość początkową](pl/CSS/Warto%c5%9b%c4%87_pocz%c4%85tkowa) tej własności (jak podano w podsumowaniu własności).

Typowym przykładem własności niedziedziczonej jest własność {{ Cssxref("border") }}. Mając następujące reguły stylu:

     p { border: medium solid }

i znaczniki

     <p>Ten akapit zawiera <em>wyróżniony tekst</em> wewnątrz.</p>

wyrażenie "wyróżniony tekst" nie będzie posiadało ramki (ponieważ wartość początkowa własności {{ Cssxref("border-style") }} to `none`).

### Uwagi

Słowo kluczowe {{ Cssxref("inherit") }} pozwala na bezpośrednie określenie dziedziczenia. Działa ono zarówno na własnościach dziedziczonych jak i niedziedziczonych.

### Zobacz również

{{ Cssxref("inherit") }}, [wartość początkowa](pl/CSS/Warto%c5%9b%c4%87_pocz%c4%85tkowa)

{{ languages( { "en": "en/CSS/inheritance", "es": "es/CSS/inheritance", "fr": "fr/CSS/H\u00e9ritage", "ja": "ja/CSS/inheritance" } ) }}
