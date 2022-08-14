---
title: li
slug: Web/HTML/Element/li
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/li
---
### Podsumowanie

Element `<li>` ("list item") jest używany do wskazywania punktu listy, zawartej w [liście uporządkowanej](pl/HTML/Element/ol) lub [liście nieuporządkowanej](pl/HTML/Element/ul). Może on występować tylko jako [dziecko](pl/HTML/Child_element) poprzednio wymienionych elementów.

- Dozwolona zawartość: [blokowa](pl/HTML/Elementy_blokowe), [liniowa](pl/HTML/Elementy_liniowe)
- Dozwolony w: [\<ol>](pl/HTML/Element/ol), [\<ul>](pl/HTML/Element/ul)

### Atrybuty

- value {{ Deprecated_inline() }}
  - : Wskazuje aktualny numer pozycji w liście uporządkowanej, zdefiniowanej przez element [\<ol>](pl/HTML/Element/ol). Bez względu na wartość `type`, używaną do ustawienia liczb rzymskich lub liter, jedyną dozwolona wartością tego atrybutu jest liczba. Pozycje listy, które następują dalej, kontynuują numerację od ustawionej wartości. Atrybut `value` nie ma znaczenia w listach nieuporządkowanych.

<!---->

- type {{ Deprecated_inline() }}
  - : Wskazuje typ liczenia: `a` wskazuje małe litery, `A` wskazuje wielkie litery, `i` wskazuje małe cyfry rzymskie, `I` wskazuje wielkie cyfry rzymskie. Atrybut `type` ustawiony w elemencie [\<ol>](pl/HTML/Element/ol) jest używany dla wewnętrznej listy, chyba że atrybut `type` jest użyty wewnątrz zamkniętego elementu `<li>`. Ten atrybut jest wycofywany, użyj zamiast niego własności [CSS](pl/CSS) [list-style-type](pl/CSS/list-style-type).

### Przykłady

```html
<ol>
    <li>pierwszy element</li>
    <li>drugi element</li>
    <li>trzeci element</li>
</ol>
```

Powyższy kod HTML zostanie wyświetlony:

1.  pierwszy element
2.  drugi element
3.  trzeci element

```html
<ul>
    <li>pierwszy element</li>
    <li>drugi element</li>
    <li>trzeci element</li>
</ul>
```

- pierwszy element
- drugi element
- trzeci element

Zobacz przykłady w [\<ol>](/pl/HTML/Element/ol#Przyk.C5.82ady "pl/HTML/Element/ol#Przyk.C5.82ady") i [\<ul>](/pl/HTML/Element/ul#Przyk.C5.82ady "pl/HTML/Element/ul#Przyk.C5.82ady").

### Notatki

### Zobacz także

- [Znacznik `ol` (lista uporządkowana)](pl/HTML/Element/ol)
- [Znacznik `ul` (lista nieuporządkowana)](pl/HTML/Element/ul)
- [Własność CSS `list-style`](pl/CSS/list-style)
- [Liczniki CSS](pl/Liczniki_CSS)

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/li" } ) }}
