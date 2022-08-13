---
title: content
slug: Web/CSS/content
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/content
---
{{ CSSRef() }}

### Podsumowanie

Własność **content** określa, co jest wyświetlane wewnątrz pseudoelementów  :before i :after.

- {{ Xref_cssinitial() }}: {{ Cssxref("normal") }}
- Stosowana do: pseudoelementów {{ Cssxref(":before") }} i {{ Cssxref(":after") }}
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: wszystkie
- {{ Xref_csscomputed() }}:

### Składnia

    content : normal | none | inherit | no-open-quote | no-close-quote ;

    content : [ <string> | <counter> | attr(<identifier>) | <uri>
                         | open-quote | close-quote]+ ;

### Wartości

- {{ Cssxref("none") }}

  {{ Cssxref("normal") }}

  {{cssxref("&lt;string&gt;")}}

  {{cssxref("&lt;uri&gt;")}}

  - : jeden lub więcej identyfikatorów URI odsyłających do zewnętrznego źródła, takiego jak obrazek.

- {{cssxref("&lt;counter&gt;")}}

  open-quote i close-quote

  - : będzie to zamienione przez odpowiednie ciągi z własności 'quotes'.

- no-open-quote i no-close-quote
  - : zwiększa (zmniejsza) poziom zagnieżdżeń cytatów, ale nie dodaje żadnej zawartości.
- attr(attribute-name)
  - : będzie to zamienione przez wartość ciągu atrybutu węzła.

### Przykłady

    q:lang { quotes: '"' '"' "'" "'" }
    q:before { content: open-quote }
    q:after  { content: close-quote }

    h1:before {
      content: "Chapter: ";
    }

### Notatki

### Specyfikacje

- [W3C Cascading Style Sheets, level 2 revision 1](http://www.w3.org/TR/CSS21/generate.html#content)
- [W3C Cascading Style Sheets, level 2](http://www.w3.org/TR/REC-CSS2/generate.html#content)
- [W3C Cascading Style Sheets, level 3](http://www.w3.org/TR/css3-content/#inserting3)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | ?                |
| Firefox           | ?                |
| Netscape          | ?                |
| Opera             | ?                |
| Safari            | ?                |

### Zobacz także

{{ Cssxref("quotes") }}
