---
title: hr
slug: Web/HTML/Element/hr
tags:
  - HTML:Opis_elementów
translation_of: Web/HTML/Element/hr
---
### Podsumowanie

Element **`<hr>`** reprezentuje zmianę tematu pomiędzy akapitami, np. zmiana sceny w powieści lub przejście do innego tematu w sekcji. W poprzednich wersjach HTML znacznik **`<hr>`** reprezentował poziomą linię. Niektóre przeglądarki nadal mogą wyświetlać go jako wypukłą lub wklęsłą linię, jednak ma on ściśle zdefiniowane semantyczne znaczenie i nie służy względom prezentacyjnym.

### Atrybuty

- align {{ Deprecated_inline() }}
  - : Ustawia położenie na stronie. Jeśli wartość nie jest zdefiniowana, to domyślną wartością jest `left`.
- color {{ Non-standard_inline() }}
  - : Ustawia kolor linii poprzez podanie jego wartości hexadecymalnej lub nazwy.
- noshade {{ Deprecated_inline() }}
  - : Ustawia brak cieniowania linii.
- size {{ Deprecated_inline() }}
  - : Ustawia wysokość, podaną w pikselach.
- width {{ Deprecated_inline() }}
  - : Ustawia długość linii na stronie, którą podajemy w pikselach lub procentach.

### Przykład

        <p>To jest pierwszy akapit tekstu. To jest pierwszy akapit tekstu.
           To jest pierwszy akapit tekstu. To jest pierwszy akapit tekstu.</p>

        <hr>

        <p>To jest drugi akapit tekstu. To jest drugi akapit tekstu.
           To jest drugi akapit tekstu. To jest drugi akapit tekstu.</p>

Powyższy HTML daje w rezultacie:

To jest pierwszy akapit tekstu. To jest pierwszy akapit tekstu. To jest pierwszy akapit tekstu. To jest pierwszy akapit tekstu.

---

To jest drugi akapit tekstu. To jest drugi akapit tekstu. To jest drugi akapit tekstu. To jest drugi akapit tekstu.

### Notatki

Nie jest to wymagane przez [HTML](pl/HTML), jednak w [XHTML](pl/XHTML) linia pozioma musi mieć znacznik zamykający, więc znacznik tego elementu będzie wyglądał tak: **`<hr />`**.

Atrybut `color` zwykle działa w przeglądarkach, lecz nie jest on poprawny według specyfikacji HTML i XHTML. Autorzy stron, którzy troszczą się o poprawność ich stron, powinni użyć CSS do zdefiniowania koloru.

{{ HTML:Element_Navigation() }}

{{ languages( { "en": "en/HTML/Element/hr" } ) }}
