---
title: <summary>
slug: Web/HTML/Element/summary
---

{{HTMLSidebar}}

The HTML _summary_ element (`<summary>`) is used as a summary, caption, or legend for the content of a {{HTMLElement("details")}} element.

> **備註：** If the `<summary>` element is omitted, the heading "details" will be used.

> **備註：** The default style for `<summary>` is `display:list-item` per [HTML standard](https://html.spec.whatwg.org/multipage/rendering.html#the-details-and-summary-elements). If the style is being changed to `display:block`, the disclosure triangle will be dismissed, which is expected. See [Bug 1283989](https://bugzilla.mozilla.org/show_bug.cgi?id=1283989) for more information.

## Usage context

| Permitted content        | [Phrasing content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Phrasing_content) or one element of [Heading content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Heading_content) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tag omission             | None, both the start tag and the end tag are mandatory.                                                                                                                               |
| Permitted parent element | The {{HTMLElement("details")}} element.                                                                                                                                     |
| Normative document       | [HTML5, section 4.11.2](https://html.spec.whatwg.org/multipage/forms.html#the-summary-element)                                                                                        |

## Attributes

This element only includes the [global attributes](/zh-TW/docs/HTML/Global_attributes).

## DOM interface

This element implements the {{domxref("HTMLElement")}} interface.

## Examples

```html
<details style="color: blue; margin-left: 15px; margin-bottom: 10px;">
<p>In summation, get details from the link on the next line</p>
</details>
```

{{EmbedLiveSample("Examples")}}

Please see the {{HTMLElement("details")}} page for examples on \<summary>.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("details")}}
