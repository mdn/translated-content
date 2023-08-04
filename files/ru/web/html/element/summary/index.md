---
title: "<summary>: The Disclosure Summary element"
slug: Web/HTML/Element/summary
---

{{HTMLSidebar}}

The **HTML Disclosure Summary element** (**`<summary>`**) element specifies a summary, caption, or legend for a {{HTMLElement("details")}} element's disclosure box. Clicking the `<summary>` element toggles the state of the parent `<details>` element open and closed.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

| Permitted content    | [Phrasing content](/ru/docs/Web/Guide/HTML/Content_categories#Phrasing_content) or one element of [Heading content](/ru/docs/Web/Guide/HTML/Content_categories#Heading_content) |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tag omission         | None, both the start tag and the end tag are mandatory.                                                                                                                         |
| Permitted parents    | The {{HTMLElement("details")}} element.                                                                                                                                         |
| Permitted ARIA roles | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>                                                                                             |
| DOM interface        | {{domxref("HTMLElement")}}                                                                                                                                                      |

## Атрибуты

Этот элемент включает только [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

## Примечания

Содержимым элемента `<summary>` может быть любой заголовок, простой текст или HTML, которые можно использовать в абзаце.

Элемент `<summary>` может быть использован в качестве потомка элемента `<details>` . Когда пользователь кликает по элементу summary, его родитель - `<details>` меняет состояние с раскрытого или закрытого на обратное,и тогда {{event("toggle")}} event is sent to the `<details>` element, which can be used to let you know when this state change occurs.

### Default label text

If a `<details>` element's first child is not a `<summary>` element, the {{Glossary("user agent")}} will use a default string (typically "Details") as the label for the disclosure box.

### Default style

Per the HTML specification, the default style for `<summary>` elements includes `display: list-item`. This makes it possible to change or remove the icon displayed as the disclosure widget next to the label from the default, which is typically a triangle.

You can also change the style to `display: block` to remove the disclosure triangle.

See the [Browser compatibility](#browser_compatibility) section for details, as not all browsers support full functionality of this element yet.

## Примеры

Below are some examples showing `<summary>` in use. You can find more examples in the documentation for the {{HTMLElement("details")}} element.

### Простой пример

A simple example showing the use of `<summary>` in a {{HTMLElement("details")}} element:

```html
<details open>
  <summary>Overview</summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

{{EmbedLiveSample("Простой_пример", 650, 120)}}

### Summaries as headings

You can use heading elements in `<summary>`, like this:

```html
<details open>
  <summary><h4>Overview</h4></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

This currently has some spacing issues that could be addressed using CSS.

### HTML in summaries

This example adds some semantics to the `<summary>` element to indicate the label as important:

```html
<details open>
  <summary><strong>Overview</strong></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

{{EmbedLiveSample("HTML_in_summaries", 650, 120)}}

## Specifications

| Specification                                                                                   | Status                   | Comment            |
| ----------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG', 'interactive-elements.html#the-summary-element', '&lt;summary&gt;')}} | {{Spec2('HTML WHATWG')}} |                    |
| {{SpecName('HTML5.1', 'interactive-elements.html#the-summary-element', '&lt;summary&gt;')}}     | {{Spec2('HTML5.1')}}     | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("details")}}
