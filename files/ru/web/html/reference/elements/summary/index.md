---
title: "<summary>: The Disclosure Summary element"
slug: Web/HTML/Reference/Elements/summary
---

{{HTMLSidebar}}

The **HTML Disclosure Summary element** (**`<summary>`**) element specifies a summary, caption, or legend for a {{HTMLElement("details")}} element's disclosure box. Clicking the `<summary>` element toggles the state of the parent `<details>` element open and closed.

{{InteractiveExample("HTML Demo: &lt;summary&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>
    I have keys but no doors. I have space but no room. You can enter but can’t
    leave. What am I?
  </summary>
  A keyboard.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

| Permitted content    | [Phrasing content](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content) or one element of [Heading content](/ru/docs/Web/HTML/Guides/Content_categories#heading_content) |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tag omission         | None, both the start tag and the end tag are mandatory.                                                                                                                           |
| Permitted parents    | The {{HTMLElement("details")}} element.                                                                                                                                           |
| Permitted ARIA roles | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>                                                                                               |
| DOM interface        | {{domxref("HTMLElement")}}                                                                                                                                                        |

## Атрибуты

Этот элемент включает только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примечания

Содержимым элемента `<summary>` может быть любой заголовок, простой текст или HTML, которые можно использовать в абзаце.

Элемент `<summary>` может быть использован в качестве потомка элемента `<details>` . Когда пользователь кликает по элементу summary, его родитель - `<details>` меняет состояние с раскрытого или закрытого на обратное,и тогда [`toggle`](/ru/docs/Web/API/HTMLElement/toggle_event) event is sent to the `<details>` element, which can be used to let you know when this state change occurs.

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("details")}}
