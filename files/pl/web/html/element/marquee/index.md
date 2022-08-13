---
title: marquee
slug: Web/HTML/Element/marquee
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/marquee
---
{{ non-standard_header() }}

## Podsumowanie

Element `<marquee>...</marquee>` wykorzystywany jest do przewijanego tekstu wewnątrz pola tekstowego.

## Atrybuty

- behavior
  - : Ustawienia, w jaki sposób jest przewijany tekst w `marquee`. Możliwymi wartościami są `scroll`, `slide` i `alternate`. Jeśli wartość nie jest określona, to domyślnie jest ustawiona wartość `scroll`.
- bgcolor
  - : Ustawienia koloru tła, podane jako nazwa koloru lub wartości szesnastkowe.
- direction
  - : Ustawienia kierunku, w jakim przewijać ma się zawartość `marquee`. Możliwymi wartościami są `left` (w lewo), `right` (w prawo), `up` (do góry) i `down` (w dół). Jeśli wartość nie jest określona, to domyślnie jest ustawiona wartość `left` (w lewo).
- height
  - : Ustawienia wysokości. Wartości podajemy w pikselach lub procentach.
- hspace (1.9a)
  - : Ustawienia poziomego marginesu.
- loop (1.9a)
  - : Ustawienia, ile razy zostanie przewinięty znacznik `marquee`. Jeśli wartość nie jest określona, to domyślnie jest ustawiona wartość −1, która znaczy, że zawartość `marquee` będzie przewijana ciągle.
- scrollamount
  - : Ustawienia sumy przewinięć każdej przerwy, wyrażona w pikselach. Domyślnym ustawieniem jest 6.
- scrolldelay
  - : Ustawia przerwę pomiędzy każdym przesunięciem przewinięcia w milisekundach. Domyślną wartością jest 85. Uwaga, ta wartość nie może być mniejsza niż 60, bo mniejsze wartości są ignorowane i użyta jest wartość 60 zamiast wpisanej mniejszej wartości.
- truespeed (1.9a)
  - : Ustawia, czy czas przewijania nie jest mniejszy niż 60, bo mniejsze wartości będą ignorowane. Możliwe wartości to `true` lub `false`. Domyślną wartością jest `false`
- vspace (1.9a)
  - : Ustawienia pionowego marginesu w pikselach lub procentach.
- width
  - : Ustawia wartość długości w pikselach lub procentach.

## Zdarzenia

- onbounce
  - : Zdarzenie jest wywołane, gdy tekst odbije się od końca jego pola. Może zdarzyć się tylko wtedy, gdy właściwość `behavior` jest ustawiona na `alternate`.
- onfinish
  - : Zdarzenie jest wywołane, kiedy tekst skończy się przewijać (przewijanie ustawiamy za pomocą atrybutu pętli). Może się zdarzyć tylko, gdy atrybut pętli jest większy niż 0.
- onstart
  - : Zdarza się, kiedy tekst zaczyna się przewijać.

## Metody

- start
  - : Uruchamia przewijanie zawartości znacznika `marquee`.
- stop
  - : Zatrzymuje przewijanie zawartości znacznika `marquee`.

## Przykład

```html
<marquee>This text will scroll from right to left</marquee>
<marquee direction="up">Ten tekst będzie się przewijał do góry</marquee>
<marquee direction="down" width="250" height="200"
            behavior="alternate" style="border:1px solid black">
  <marquee behavior="alternate">
    This text will bounce
  </marquee>
</marquee>
```

## Notatka

Znacznik `marquee` został wymyślony dla przeglądarki IE.

Znacznik `marquee` nie jest zgodny ze specyfikacją HTML lub XHTML. Autor strony, aby zachować zgodność ze standardami, nie powinien używać tego znacznika.

Znacznik `marquee` jest zaimplementowany w Mozilla przy użyciu [XBL](/pl/XBL "pl/XBL"): [http://lxr.mozilla.org/seamonkey/sou...bl-marquee.xml](http://lxr.mozilla.org/seamonkey/source/layout/style/xbl-marquee/xbl-marquee.xml)

{{ HTML:Element_Navigation() }}
