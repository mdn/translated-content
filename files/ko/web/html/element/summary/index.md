---
title: <summary>
slug: Web/HTML/Element/summary
---

{{HTMLSidebar}}

**HTML 공개 요약 요소** (**`<요약>`**) 요소는 ("상세") 요소의 공개 상자에 대한 요약, 캡션 또는 범례를 지정한다. `<요약>` 요소를 클릭하면 부모 `<상세>` 요소의 상태가 열리거나 닫힌다.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a>and send us a pull request.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >
        or one element of
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#Heading_content"
          >Heading content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the start tag and the end tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>The {{HTMLElement("details")}} element.</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/button_role'><code>button</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/ko/docs/Web/HTML/Global_attributes).

## Usage notes

The `<summary>` element's contents can be any heading content, plain text, or HTML that can be used within a paragraph.

A `<summary>` element may _only_ be used as the first child of a `<details>` element. When the user clicks on the summary, the parent `<details>` element is toggled open or closed, and then a {{event("toggle")}} event is sent to the `<details>` element, which can be used to let you know when this state change occurs.

### Default label text

If a `<details>` element's first child is not a `<summary>` element, the {{Glossary("user agent")}} will use a default string (typically "Details") as the label for the disclosure box.

### Default style

Per the HTML specification, the default style for `<summary>` elements includes `display: list-item`. This makes it possible to change or remove the icon displayed as the disclosure widget next to the label from the default, which is typically a triangle.

You can also change the style to `display: block` to remove the disclosure triangle.

See the [Browser compatibility](#browser_compatibility) section for details, as not all browsers support full functionality of this element yet.

## Examples

Below are some examples showing `<summary>` in use. You can find more examples in the documentation for the {{HTMLElement("details")}} element.

### Basic example

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

{{EmbedLiveSample("Basic_example", 650, 120)}}

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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{HTMLElement("details")}}
