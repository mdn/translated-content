---
title: dd
slug: Web/HTML/Element/dd
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/dd
---
### Podsumowanie

Element **opis definicji** (`<dd>`) wskazuje wyjaśnienie definicji terminu znajdującego się wewnątrz [listy definicji (`<dl>`)](pl/HTML/Element/dl). Ten element może występować tylko jako dziecko [listy definicji](pl/HTML/Element/dl) i powinien być poprzedzony przez element [termin definicji (`<dt>`)](pl/HTML/Element/dt).

- Dozwolona zawartość: [blokowa](pl/HTML/Elementy_blokowe), [liniowa](pl/HTML/Elementy_liniowe)
- Dozwolony w: [`<dl>`](pl/HTML/Element/dl)

### Atrybuty

- nowrap {{ Non-standard_inline() }}
  - : Jeśli wartość tego atrybutu jest ustawiona na `yes`, tekst definicji nie będzie się zawijał. Domyślną wartością jest `no`.

### Przykład

      <dl>
         <dt>wiki</dt>
            <dd>Strona lub podobne źródło, które pozwala na dodawanie i edycję zawartości kolektywnie.</dd>
      </dl>

#### Rezultat

- wiki\</dt>
  - : Strona lub podobne źródło, które pozwala na dodawanie i edycję zawartości kolektywnie.\</dd>

### Notatka

W [HTML](pl/HTML) znacznik zamykający `</dd>` nie jest obowiązkowy. Wymagany jest natomiast w [XHTML](pl/XHTML).

### Zobacz także

[Znacznik `<dl>`](pl/HTML/Element/dl), [Znacznik `<dt>`](pl/HTML/Element/dt)

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/dd" } ) }}
