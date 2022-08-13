---
title: <section>
slug: Web/HTML/Element/section
translation_of: Web/HTML/Element/section
---
{{HTMLRef}}

Element **`<section>` **stanowi samodzielną sekcję tworzącą dokument HTML, której nie można przedstawić za pomocą bardziej szczegółowej semantycznie sekcji. Element \<section> zazwyczaj posiada nagłówek.

Przykładowo, część nawigacyjna powinna być objęta elementem {{htmlelement("nav")}}, ale lista wyników wyszukiwania albo wyświetlana mapa i jej sterowanie nie mają dla siebie szczegółowego elementu, więc powinny zostać umieszczone w `<section>`.

| [Content categories](/pl/docs/Web/HTML/Content_categories) | [Flow content](/pl/docs/Web/HTML/Content_categories#Flow_content), [Sectioning content](/pl/docs/Web/HTML/Content_categories#Sectioning_content), palpable content.                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | [Flow content](/pl/docs/Web/HTML/Content_categories#Flow_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Tag omission                                               | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Permitted parents                                          | Any element that accepts [flow content](/pl/docs/Web/HTML/Content_categories#Flow_content). Note that a {{HTMLElement("section")}} element must not be a descendant of an {{HTMLElement("address")}} element.                                                                                                                                                                                                                                                                                                                  |
| Permitted ARIA roles                                       | {{ARIARole("alert")}}, {{ARIARole("alertdialog")}}, {{ARIARole("application")}}, {{ARIARole("banner")}}, {{ARIARole("complementary")}}, {{ARIARole("contentinfo")}}, {{ARIARole("dialog")}}, {{ARIARole("document")}}, {{ARIARole("feed")}}, {{ARIARole("log")}}, {{ARIARole("main")}}, {{ARIARole("marquee")}}, {{ARIARole("navigation")}}, {{ARIARole("search")}}, {{ARIARole("status")}}, {{ARIARole("tabpanel")}} |
| DOM interface                                              | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Atrybuty

Element zawiera tylko [global attributes](/pl/docs/Web/HTML/Global_attributes).

## Użycie

- Każdy element `<section>` powinien zazwyczaj zawierać nagłówek ({{HTMLElement('h1')}}-{{HTMLElement('h6')}}) jako element potomny `<section>`.
- Jeśli jest konieczne oddzielić podgrupy w treści elementu {{HTMLElement("section")}},  używa się elementów{{HTMLElement("article")}}.
- Nie używa się elementu {{HTMLElement("section")}} w celu stworzenia ogólnego kontenera; do tego służy element {{HTMLElement("div")}}, szczególnie nie robi się tego jesli ma to służyć tylko do nadania stylów. Praktyczną zasadą jest to, że wsytąpeinie elementu \<section> powinną być logiczne w schemacie dokumentu.

## Przykład 1

### Wcześniej

```html
<div>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</div>
```

### Teraz

```html
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

## Przykład 2

### Wcześniej

```html
<div>
  <h2>Heading</h2>
  <img src="bird.jpg" alt="bird">
</div>
```

### Teraz

```html
<section>
  <h2>Heading</h2>
  <img src="bird.jpg" alt="bird">
</section>
```

## Specyfikacje

| Specification                                                                                                    | Status                           | Comments |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-section-element', '&lt;section&gt;')}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5.1', 'sections.html#the-section-element', '&lt;section&gt;')}}         | {{Spec2('HTML5.1')}}     |          |
| {{SpecName('HTML5 W3C', 'sections.html#the-section-element', '&lt;section&gt;')}}     | {{Spec2('HTML5 W3C')}}     |          |

## Zgodność z przeglądarkami

{{Compat("html.elements.section")}}

## Zobacz również

- Inne elementy dotyczące sekcji: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/pl/docs/Sections_and_Outlines_of_an_HTML5_document).
