---
title: <optgroup>
slug: Web/HTML/Element/optgroup
---

## 總覽

In a Web form, the **HTML `<optgroup>` element** creates a grouping of options within a {{HTMLElement("select")}} element.

| [Content categories](/zh-TW/docs/HTML/Content_categories) | None.                                                                                                                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content                                         | Zero or more {{HTMLElement("option")}} elements.                                                                                                                  |
| Tag omission                                              | The start tag is mandatory. The end tag is optional if this element is immediately followed by another \<optgroup> element, or if the parent element has no more content. |
| Permitted parent elements                                 | A {{HTMLElement("select")}} element.                                                                                                                              |
| DOM interface                                             | {{domxref("HTMLOptGroupElement")}}                                                                                                                             |

> **備註：** Optgroup elements may not be nested.

## 屬性

This element includes the [global attributes](/zh-TW/docs/HTML/Global_attributes).

- `disabled`
  - : If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.
- `label`
  - : The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.

## 範例

```html
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### 結果

{{EmbedLiveSample("範例")}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLSidebar}}
