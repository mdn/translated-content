---
title: bgsound
slug: Web/HTML/Element/bgsound
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/bgsound
---
### Podsumowanie

Atrybut `<bgsound>` Internet Explorera wiąże dźwięk tła ze stroną

### Atrybuty

- balance
  - : Ten atrybut definiuje liczbę między -10,000 a +10,000, która decyduje, jak natężenie dźwięku będzie dzielone między głośniki.

<!---->

- loop
  - : Ten atrybut wskazuje liczbę powtórzeń dźwięku, który jest do odegrania i może mieć zarówno wartość liczbową, jak i słowo kluczowe `infinite` (nieskończony).

<!---->

- src
  - : Ten atrybut określa URL pliku dźwiękowego do odegrania, który musi być jednym z podanych typów: .wav, .au, or .mid.

<!---->

- volume
  - : Ten atrybut definiuje liczbę pomiędzy -10,000 a 0, która decyduje o głośności dźwięku w tle strony.

### Przykład

        <bgsound src="sound1.mid">

        <bgsound src="sound2.au" loop="infinite">

### Notatki

Podobną funkcjonalność można osiągnąć w niektórych wersjach Netscape, używając znacznika `<embed>` do wywołania odtwarzacza audio.

Możesz pisać `bgsound` z samozamykającym się znacznikiem `<bgsound />`. Jednak, ponieważ ten element nie jest częścią standardu, robienie z niego znacznika w stylu XHTML, nie uczyni go walidowalnym.

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/bgsound" } ) }}
