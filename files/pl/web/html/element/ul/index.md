---
title: ul
slug: Web/HTML/Element/ul
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/ul
---
### Podsumowanie

Element `<ul>` (Unordered list) jest używany do wskazania listy nieuporządkowanej, mianowicie zestawu punktów, które nie mają porządku liczbowego i ich kolejność w liście nie ma znaczenia. Poszczególne punkty w liście są definiowane poprzez element [pozycja listy](pl/HTML/Element/li) ([\<li>](pl/HTML/Element/li)), który jest jedynym dopuszczalnym elementem w znaczniku `<ul>`.

- Typ elementu: [blokowy](pl/HTML/Elementy_blokowe)
- Dozwolona zawartość: [li](pl/HTML/Element/li)

### Atrybuty

- type {{ Deprecated_inline() }}
  - : Używany do ustawienia typu znaku wypunktowania dla listy. Wartościami zdefiniowanymi w [HTML3.2](pl/HTML3.2) i wersji [HTML 4.0/4.01](pl/HTML4.01) Transitional są `circle`, `disc` oraz `square`. Program użytkownika może zdecydować o wyborze innego wypunktowania, zależnie od poziomu zagnieżdżenia listy, chyba że jest użyty atrybut `type`. Interfejs WebTV wspiera również wypunktowanie `triangle`. Ten atrybut jest wycofywany, użyj zamiast niego własności [CSS](pl/CSS) [list-style-type](pl/CSS/list-style-type).

<!---->

- compact {{ Deprecated_inline() }}
  - : Określa, że lista powinna być wyświetlona w zwartej formie. Interpretacja tego atrybutu zależy od programu użytkownika.

### Przykłady

#### Prosty przykład

      <ul>
        <li>pierwsza pozycja</li>
        <li>druga pozycja</li>
        <li>trzecia pozycja</li>
      </ul>

Powyższy HTML daje w efekcie:

- pierwsza pozycja
- druga pozycja
- trzecia pozycja

#### Zagnieżdżona lista

      <ul>
        <li>pierwsza pozycja</li>
        <li>druga pozycja   <!-- Spójrz, zamykający znacznik </li> nie jest tutaj umieszczony -->
          <ul>
            <li>druga pozycja pierwszy podpunkt</li>
            <li>druga pozycja drugi podpunkt</li>
            <li>druga pozycja trzeci podpunkt</li>
          </ul>
        </li>    <!-- Tutaj jest zamykający znacznik </li> -->
        <li>trzecia pozycja</li>
      </ul>

Powyższy HTML daje w efekcie:

- pierwsza pozycja
- druga pozycja

  - druga pozycja pierwszy podpunkt
  - druga pozycja drugi podpunkt
  - druga pozycja trzeci podpunkt

- trzecia pozycja

#### Zagnieżdżanie \<ul> oraz \<ol>

      <ul>
        <li>pierwsza pozycja</li>
        <li>druga pozycja   <!-- Spójrz, zamykający znacznik </li> nie jest tutaj umieszczony -->
          <ol>
            <li>druga pozycja pierwszy podpunkt</li>
            <li>druga pozycja drugi podpunkt</li>
            <li>druga pozycja trzeci podpunkt</li>
          </ol>
        </li>    <!-- Tutaj jest zamykający znacznik </li> -->
        <li>trzecia pozycja</li>
      </ul>

Powyższy HTML daje w efekcie:

- pierwsza pozycja
- druga pozycja

  1.  druga pozycja pierwszy podpunkt
  2.  druga pozycja drugi podpunkt
  3.  druga pozycja trzeci podpunkt

- trzecia pozycja

### Notatki

Możesz zagnieżdżać tak dużo list `<ul>` i `<ol>`, jak chcesz w dowolnej kolejności.

Aby zmienić wcięcie listy, użyj własności [CSS](pl/CSS) [margin](pl/CSS/margin).

### Zobacz także

- [Znacznik li (pozycja listy)](pl/HTML/Element/li)
- [Znacznik ol (lista uporządkowana)](pl/HTML/Element/ol)
- [Własność CSS list-style](pl/CSS/list-style)
- [Liczniki CSS](pl/Liczniki_CSS)

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/ul" } ) }}
