---
title: display
slug: Web/CSS/display
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/display
---
{{ CSSRef() }}

### Podsumowanie

Ta własność określa typ wyświetlania pudełka używanego dla elementu. W języku takim jak HTML, gdzie istniejące elementy mają dobrze określone zachowanie, domyślne wartości własności 'display' są brane z zachowań opisanych w specyfikacji HTML lub z domyślnego arkusza stylu przeglądarki/użytkownika. W językach, gdzie zachowanie 'display' nie jest zdefiniowane (jak XML), domyślną wartością jest 'inline'.

Oprócz wielu różnych dozwolonych typów wyświetlania pudełka, jedna wartość, "none", pozwala wyłączyć wyświetlanie elementu; wszystkie elementy potomne również mają wyłączone wyświetlanie. Dokument jest wyświetlany jak gdyby element nie istniał w drzewie dokumentu. Ta wartość daje potężne możliwości, ale powinna być używana z ostrożnością.

- {{ Xref_cssinitial() }}: {{ Cssxref("inline") }}
- {{ Xref_cssinherited() }}: wszystkich elementów
- Dziedziczona: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jako określone, z wyjątkiem elementu głównego, elementów [pływających](pl/CSS/float) i elementów [pozycjonowanych absolutnie](pl/CSS/position).

### Składnia

`display:` \<display-value> | {{ Cssxref("inherit") }}

### Wartości

- \<display-value>
  - : Wartością 'display' może być jedna z poniższych wartości.

<!---->

- **inherit** : Wyraźnie ustawia wartość tej własności na odpowiadającą rodzicowi.

<!---->

- **none** : Ta wartość wyłącza wyświetlanie elementu (nie ma efektu w układzie); wszystkie elementy potomne również mają bezwarunkowo wyłączone wyświetlanie. Dokument jest wyświetlany tak jakby element nie istniał w drzewie dokumentu. Aby wyświetlić rozmiary pudełka elementu w schemacie formatowania dokumentu, gdy jego zawartość powinna być niewidoczna, zobacz własność 'visibility'.

<!---->

- **inline** : Sprawia, że element generuje jedno lub więcej pudełek elementu liniowego.

<!---->

- **block** : Sprawia, że element generuje pudełko elementu blokowego.

<!---->

- **inline-block** : Wprowadzone w CSS2.1. Sprawia, że element generuje pudełko elementu blokowego, które będzie opływane otaczającą treścią, jakby było pojedynczym pudełkiem liniowym (zachowując się tak, jakby zachowywał się zamieniany element).

<!---->

- **list-item** : Sprawia, że element generuje pudełko blokowe dla zawartości oraz oddzielne pudełko liniowe pozycji listy.

<!---->

- **compact** : Zależnie od kontekstu ta wartość własności 'display' tworzy albo blokowe albo liniowe pudełko. W każdym przypadku odmienne własności CSS mogą stosować się do elementu 'compact'. W kontekście elementu blokowego element 'compact' jest wyświetlany w lewym lub prawym marginesie elementu blokowego. Element 'compact' bierze udział w wyliczaniu wysokości linii dla danej linii, a wartość własności 'vertical-align' jest relatywna do elementu blokowego.

<!---->

- **run-in** : Zależnie od kontekstu ta wartość własności 'display' tworzy albo liniowe albo blokowe pudełko. W każdym przypadku odmienne własności CSS mogą stosować się do elementu 'run-in'. Własności elementu 'run-in' są dziedziczone z jego rodzica w drzewie dokumentu, nie z pudełka elementu blokowego, w którym jest zawarty.

<!---->

- **table-header-group|table-footer-group** : Te wartości sprawiają, że element zachowuje się jak odpowiadający mu element HTML THEAD i TFOOT, od którego wartości wzięły swoją nazwę.

<!---->

- **table** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość ta jest odpowiednikiem elementu `table` w HTML.

<!---->

- **inline-table** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość 'inline-table' nie ma dokładnego odwzorowania w HTML.

<!---->

- **table-caption** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość 'inline-table' nie ma dokładnego odwzorowania w HTML.

<!---->

- **table-cell** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość 'inline-table' nie ma dokładnego odwzorowania w HTML.

<!---->

- **table-row|table-row-group** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość 'inline-table' nie ma dokładnego odwzorowania w HTML.

<!---->

- **table-column|table-column-group** : Te wartości sprawiają, że element zachowuje się jak odpowiadający element tabeli HTML, od którego te wartości wzięły nazwę. Wartość 'inline-table' nie ma dokładnego odwzorowania w HTML.

### Przykłady

[Zobacz przykład](/samples/cssref/display.html)

    Ext/Doc: p  { display: block }
    In-Line:  <p STYLE="display: block">text</p>

### Uwagi

- Zgodność z CSS1: przeglądarki mogą legalnie ignorować własność 'display' i zamiast tego używać domyślnych ustawień przeglądarki dla każdego elementu.
- W CSS1 domyślną wartością dla tej własności było "block". W CSS2 zostało to zmienione na "inline".

##### Elementy blokowe kontra elementy liniowe

- **Elementy blokowe** tworzą odrębne w pionie bloki zawartości (w kontekście wizualnym) - generalnie używając przełamania linii przed zawartością i po niej. Tylko ta wartość dla 'display' jest dopuszczalna do tworzenia elementu pozycjonowanego. Zachowanie blokowe jest pokazywane przez takie elementy HTML jak BLOCKQUOTE (cytaty blokowe), DIV oraz nagłówki. Wartości własności 'display', tworzące blokowy typ elementu, to: 'block', 'list-item', 'table, 'compact' oraz 'run-in'.

<!---->

- **Elementy liniowe** nie tworzą wyraźnych bloków zawartości, zawartość elementu jest wyświetlana przy użyciu pudełka liniowego (zawartość jest rozmieszczana linia po linii wewnątrz zawierającego ją fizycznego lub wirtualnego elementu blokowego). Zachowanie liniowe jest pokazywane przez takie elementy HTML, jak fizyczne i wirtualne formatowanie znaków, nieopływane obrazki i nieobjęta znacznikami zawartość. Wartości własności 'display', tworzące liniowy typ elementu, to: 'inline', 'inline-table', 'compact' oraz 'run-in'.

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#display)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#propdef-display)

### Zgodność z przeglądarką

| Browser           | Lowest Version |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Netscape          | 4              |
| Opera             | 3.5            |

Wartości `table-`\* są wspierane w Firefoksie i ???.

Wartości `compact` oraz `run-in` nie są wspierane w Firefoksie. Wspierane są w ???.

Wartości `inline-block` oraz `inline-table` są wstępnie wspierane w Firefoksie 3 / Gecko 1.9. `inline-block` jest również wspierane w ???, a `inline-table` jest również wspieranie w ???.

### Zobacz także

{{ Cssxref("visibility") }}, {{ Cssxref("float") }}, {{ Cssxref("position") }}





{{ languages( { "en": "en/CSS/display", "es": "es/CSS/display", "fr": "fr/CSS/display", "pt": "pt/CSS/display", "zh-cn": "cn/CSS/display" } ) }}
