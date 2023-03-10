---
title: <form>
slug: Web/HTML/Element/form
---

{{HTMLSidebar}}

HTML **`<form>`** 元素表示提交訊息的區塊，此區塊含有許多可互動的控制項。

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

It is possible to use the {{cssxref(':valid')}} and {{cssxref(':invalid')}} CSS [pseudo-classes](/zh-TW/docs/Web/CSS/Pseudo-classes) to style a `<form>` element based on whether or not the {{domxref("HTMLFormElement.elements", "elements")}} inside the form are valid.

| [Content categories](/zh-TW/docs/Web/Guide/HTML/Content_categories) | [Flow content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Flow_content), [palpable content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Palpable_content)                                                                                           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                                   | [Flow content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Flow_content), but not containing `<form>` elements                                                                                                                                         |
| Tag omission                                                        | {{no_tag_omission}}                                                                                                                                                                                                                                 |
| Permitted parents                                                   | Any element that accepts [flow content](/zh-TW/docs/Web/Guide/HTML/Content_categories#Flow_content)                                                                                                                                                      |
| Implicit ARIA role                                                  | [`form`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/Form_Role) if the form has an [accessible name](https://www.w3.org/TR/accname-1.1/#dfn-accessible-name), otherwise [no corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role) |
| Permitted ARIA roles                                                | [`search`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/Search_role), [`none`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/none_role) or [`presentation`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/presentation_role)                                                                                                                   |
| DOM interface                                                       | {{domxref("HTMLFormElement")}}                                                                                                                                                                                                                 |

## Attributes

This element includes the [global attributes](/zh-TW/docs/Web/HTML/Global_attributes).

- `accept` {{Deprecated_Inline}}
  - : Comma-separated [content types](/zh-TW/docs/Web/SVG/Content_type) the server accepts.

    > **備註：** **This attribute was removed in HTML5 and should not be used.** Instead, use the {{htmlattrxref("accept", "input")}} attribute on `<input type=file>` elements.
- `accept-charset`
  - : Space-separated [character encodings](/zh-TW/docs/Web/Guide/Localizations_and_character_encodings) the server accepts. The browser uses them in the order in which they are listed. The default value means [the same encoding as the page](/zh-TW/docs/Web/HTTP/Headers/Content-Encoding).
    (In previous versions of HTML, character encodings could also be delimited by commas.)
- `action`
  - : The URL that processes the form submission. This value can be overridden by a {{htmlattrxref("formaction", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) element.
- `autocapitalize` {{non-standard_inline}}
  - : A nonstandard attribute used by iOS Safari that controls how textual form elements should be automatically capitalized. `autocapitalize` attributes on a form elements override it on `<form>`. Possible values: `none`: No automatic capitalization.
    - `sentences` (default): Capitalize the first letter of each sentence.
    - `words`: Capitalize the first letter of each word.
    - `characters`: Capitalize all characters — that is, uppercase.
- `autocomplete`
  - : Indicates whether input elements can by default have their values automatically completed by the browser. `autocomplete` attributes on form elements override it on `<form>`. Possible values: `off`: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see [The autocomplete attribute and login fields](/zh-TW/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).)
    - `on`: The browser may automatically complete entries.
- `enctype`
  - : If the value of the `method` attribute is `post`, `enctype` is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of the form submission. Possible values: `application/x-www-form-urlencoded`: The default value.
    - `multipart/form-data`: Use this if the form contains {{HTMLElement("input")}} elements with `type=file`.
    - `text/plain`: Introduced by HTML5 for debugging purposes.This value can be overridden by {{htmlattrxref("formenctype", "button")}} attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) elements.
- `method`
  - : The [HTTP](/zh-TW/docs/Web/HTTP) method to submit the form with. Possible values: `post`: The [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data sent as the [request body](/zh-TW/docs/Web/API/Body).
    - `get`: The [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data appended to the `action` URL with a `?` separator. Use this method when the form [has no side-effects](/zh-TW/docs/Glossary/Idempotent).
    - `dialog`: When the form is inside a {{HTMLElement("dialog")}}, closes the dialog on submission.This value is overridden by {{htmlattrxref("formmethod", "button")}} attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) elements.
- `name` {{deprecated_inline}}
  - : The name of the form. Deprecated as of HTML 4 (use `id` instead). It must be unique among the forms in a document and not an empty string as of HTML5.
- `novalidate`
  - : This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form _**is**_ validated), it can be overridden by a {{htmlattrxref("formnovalidate", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) element belonging to the form.
- `rel`
  - : Creates a hyperlink or annotation depending on the value, see the [`rel`](/docs/Web/HTML/Attributes/rel) attribute for details.
- `target`
  - : Indicates where to display the response after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or iframe). The following keywords have special meanings `_self` (default): Load into the same browsing context as the current one.
    - `_blank`: Load into a new unnamed browsing context.
    - `_parent`: Load into the parent browsing context of the current one. If no parent, behaves the same as `_self`.
    - `_top`: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as `_self`.This value can be overridden by a {{htmlattrxref("formtarget", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/zh-TW/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/zh-TW/docs/Web/HTML/Element/input/image) element.

## Examples

### HTML

```html
<!-- Form which will send a GET request to the current URL -->
<form>
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio"> Select me</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Examples', '100%', 110) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/zh-TW/docs/Web/Guide/HTML/Forms)
- Other elements that are used when creating forms: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Getting a list of the elements in the form: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form role](/zh-TW/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [ARIA: Search role](/zh-TW/docs/Web/Accessibility/ARIA/Roles/Search_role)
