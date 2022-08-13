---
title: <acronym>
slug: Web/HTML/Element/acronym
tags:
  - Element
  - HTML
  - HTML:Treść płynna
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/acronym
---
{{obsolete_header}}

## Podsumowanie

Element HTML Akronim (`<acronym>`) pozwala autorom wyraźnie wskazać ciąg znaków, które składają się na akronim lub skrót słowa. Element ten został usunięty w HTML5. Użyj elementu {{HTMLElement("abbr")}}.

> **Note:** **Uwaga dotycząca użycia:** Ten element został usunięty w HTML5 i nie powinien być już używany. Zamiast tego, programiści powinni używać elementu {{HTMLElement("abbr")}}.

## Atrybuty

Ten element ma tylko [globalne atrybuty](/pl/docs/Web/HTML/Global_attributes "HTML/global attributes"), które są wspólne dla wszystkich elementów.

## Interfejs DOM

Ten element implementuje interfejs {{domxref('HTMLElement')}}.

> **Note:** **Uwaga dotycząca implementacji:** Do Gecko 1.9.2 włącznie, Firefox implementuje interfejs {{domxref('HTMLSpanElement')}} dla tego elementu.

## Przykład

```html
<p><acronym title="World Wide Web">WWW</acronym> jest tylko częścią składową Internetu.</p>
```

## Domyślna stylizacja

Chociaż celem tego znacznika jest jedynie wygoda dla autora, jego domyślna stylizacja różni się w zależności od przeglądarki:

- Niektóre przeglądarki, takie jak Internet Explorer, nie stylizowały go inaczej niż elementu {{HTMLElement("span")}}.
- Opera, Firefox, Chrome i inne dodają kropkowane podkreślenie zawartości elementu.
- Kilka przeglądarek nie tylko dodaje kropkowane podkreślenie, ale także dodaje do nich wariant "small-caps"; aby uniknąć tej stylizacji, dodanie czegoś w rodzaju {{cssxref('font-variant')}}`: none` w CSS załatwia tę sprawę.

Dlatego zaleca się, aby autorzy stron internetowych nie polegali całkowicie na domyślnej stylizacji.

## Specyfikacje

| Specyfikacja                                                                                         | Status                       | Komentarz |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| {{SpecName('HTML4.01', 'struct/text.html#edef-ACRONYM', '&lt;acronym&gt;')}} | {{Spec2('HTML4.01')}} |           |

## Kompatybilność z przeglądarką

{{Compat("html.elements.acronym")}}

## Zobacz także

- Element {{HTMLElement("abbr")}}

{{HTMLRef}}
