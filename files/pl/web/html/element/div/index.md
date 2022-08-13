---
title: '<div>: The Content Division element'
slug: Web/HTML/Element/div
translation_of: Web/HTML/Element/div
---
{{HTMLRef}}

**HTML Content Division element** (**`<div>`**) jest rodzajem pojemnika na treść. Nie ma on żadnego wpływu na treść ani układ graficzny, dopóki nie zostanie ostylizowany z użyciem CSS.  Element `<div>` jako "czysty" pojemnik niczego nie reprezentuje. Zamiast tego, jest on używany do grupowania zawartości, dzięki czemu można go łatwo stylizować za pomocą atrybutu {{htmlattrxref("class")}} lub {{htmlattrxref("id")}}, oznaczające część dokumentu jako napisaną w innym języku (używając atrybutu {{htmlattrxref("lang")}}), i tak dalej.

| [Kategorie zawartości](/pl/docs/Web/HTML/Content_categories) | [Tekst lub treść osadzona](/pl/docs/Web/HTML/Content_categories#Flow_content), namacalna zawartosć.                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dopuszczalna zawartość                                       | [Tekst lub treść osadzona](/pl/docs/Web/HTML/Content_categories#Flow_content). Lub (w [WHATWG](/pl/docs/Glossary/WHATWG) HTML): Jeżeli rodzic jest elementem {{HTMLElement("dl")}}: jednego lub więcej elementów {{HTMLElement("dt")}}, po których następuje jeden lub więcej elementów {{HTMLElement("dd")}}, opcjonalnie zmieszanych z elementami {{HTMLElement("script")}} i {{HTMLElement("template")}}. |
| Pominięcie znacznika                                         | Brak, zarówno znacznik początku, jak i końca jest obowiązkowy.                                                                                                                                                                                                                                                                                                                                                                                    |
| Dozwoleni rodzice                                            | Każdy element akceptujący [tekst lub treść osadzoną](/pl/docs/Web/HTML/Content_categories#Flow_content). Lub (w [WHATWG](/pl/docs/Glossary/WHATWG) HTML): element {{HTMLElement("dl")}}.                                                                                                                                                                                                                                                   |
| Wsparcie [ARIA](/pl/docs/Web/Accessibility/ARIA)             | Tak                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Interfejs DOM                                                | {{domxref("HTMLDivElement")}}                                                                                                                                                                                                                                                                                                                                                                                                          |

## Atrybuty

Element ten obejmuje [atrybuty globalne](/pl/docs/Web/HTML/Global_attributes).

Atrybut `align` jest przestarzały; nie używaj go już dłużej. Zamiast tego należy użyć właściwości lub technik CSS takich jak [CSS Grid](/pl/docs/Web/CSS/CSS_Grid_Layout) lub [CSS Flexbox](/pl/docs/Learn/CSS/CSS_layout/Flexbox) do wyrównania i pozycjonowania elementów `<div>` na stronie.

## Wskazówki dot. użytkowania

- Element `<div>` należy stosować tylko wtedy, gdy nie może go zastąpić żaden inny element semantyczny (np. {{HTMLElement("article")}} lub {{HTMLElement("nav")}}).

## Przykłady

### Prosty przykład

```html
<div>
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

Rezultat wygląda tak:

{{EmbedLiveSample("A_simple_example", 650, 60)}}

### Przykład z użyciem stylów

Ten przykład tworzy cieniowane pole, stosując styl dla `<div>` za pomocą CSS. Zwróć uwagę na użycie atrybutu {{htmlattrxref("class")}} na elemencie `<div>` aby zastosować styl o nazwie `"shadowbox"`.

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a
  lovely shadowed box.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Rezultat

{{EmbedLiveSample("A_styled_example", 650, 120)}}

## Specyfikacje

| Specification                                                                                                    | Status                           | Comment                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------ |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-div-element', '&lt;div&gt;')}} | {{Spec2('HTML WHATWG')}} | No changes since the latest snapshot |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-div-element', '&lt;div&gt;')}}     | {{Spec2('HTML5 W3C')}}     | Obsoleted **align**                  |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.4', '&lt;div&gt;')}}                     | {{Spec2('HTML4.01')}}     |                                      |

## Kompatybilność z przeglądarkami

{{Compat("html.elements.div")}}

## Zobacz także

- Semantic sectioning elements: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}} element for styling of phrasing content
