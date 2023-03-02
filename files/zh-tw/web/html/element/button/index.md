---
title: <button>
slug: Web/HTML/Element/button
---

**HTML `<button>` 元素代表一個可點擊的按鈕。**

| [內容類別](/zh-TW/docs/HTML/Content_categories) | [流內容](/zh-TW/docs/HTML/Content_categories#Flow_content), [分段內容](/zh-TW/docs/HTML/Content_categories#Phrasing_content), [互動內容](/zh-TW/docs/HTML/Content_categories#Interactive_content), [條列的](/zh-TW/docs/HTML/Content_categories#Form_listed), [標籤式的](/zh-TW/docs/HTML/Content_categories#Form_labelable), 以及 [可提交式的關係形式](/zh-TW/docs/HTML/Content_categories#Form_submittable)元素, 可觸知的內容. |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 被允許的內容                                    | [分段內容](/zh-TW/docs/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                                                                                |
| 遺漏標籤                                        | 所有標籤皆不可遺漏                                                                                                                                                                                                                                                                                                                                                                                                               |
| 允許的父級元素                                  | 任何接受[分段內容](/zh-TW/docs/HTML/Content_categories#Phrasing_content)的元素.                                                                                                                                                                                                                                                                                                                                                  |
| 可接受 ARIA 設定的角色                          | [`checkbox`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/checkbox_role), [`link`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/link_role), [`menuitem`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), [`menitemradio`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/menitemradio_role), [`radio`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role), [`switch`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role), [`tab`](/zh-TW/docs/Web/Accessibility/ARIA/Roles/tab_role)                                                                                                                                                       |
| DOM 介面                                        | {{domxref("HTMLButtonElement")}}                                                                                                                                                                                                                                                                                                                                                                                     |

## 屬性

這元素的屬性包含[全域屬性](/zh-TW/docs/HTML/Global_attributes).

- `autofocus`
  - : 頁面載入後, 該按鈕如有輸入的焦點, 這個布林值式屬性即可指定上去, 除非使用者覆寫之, 例如通過不同的控制. 文本中只有一個關聯形式元素可以被指定該屬性.
- `autocomplete` {{non-standard_inline}}
  - : The use of this attribute on a {{HTMLElement("button")}} is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [Firefox bug 654072](https://bugzil.la/654072).
- `disabled`
  - : This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example {{HTMLElement("fieldset")}}; if there is no containing element with the **disabled** attribute set, then the button is enabled.Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the {{htmlattrxref("autocomplete","button")}} attribute to control this feature.
- `form`
  - : The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a {{HTMLElement("form")}} element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor {{HTMLElement("form")}} element, if one exists. This attribute enables you to associate `<button>` elements to {{HTMLElement("form")}} elements anywhere within a document, not just as descendants of {{HTMLElement("form")}} elements.
- `formaction`
  - : The URI of a program that processes the information submitted by the button. If specified, it overrides the {{htmlattrxref("action","form")}} attribute of the button's form owner.
- `formenctype`
  - : If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are: `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the {{htmlattrxref("type","input")}} attribute set to `file`.
    - `text/plain`If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the button's form owner.
- `formmethod`
  - : If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are: `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the button's form owner.
- `formnovalidate`
  - : If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the button's form owner.
- `formtarget`
  - : If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the button's form owner. The following keywords have special meanings: `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- `name`
  - : The name of the button, which is submitted with the form data.
- `type`
  - : The type of the button. Possible values are: `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
    - `reset`: The button resets all the controls to their initial values.
    - `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
    - menu: The button opens a popup menu defined via its designated {{HTMLElement("menu")}} element.
- `value`
  - : The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted.

## Notes

`<button>` elements are much easier to style than {{HTMLElement("input")}} elements. You can add inner HTML content (think `<em>`, `<strong>` or even `<img>`), and make use of {{Cssxref(":after")}} and {{Cssxref(":before")}} pseudo-element to achieve complex rendering while {{HTMLElement("input")}} only accepts a text value attribute.

IE7 has a bug where when submitting a form with `<button type="submit" name="myButton" value="foo">Click me</button>`, the `POST` data sent will result in `myButton=Click me` instead of `myButton=foo`.
IE6 has an even worse bug where submitting a form through a button will submit ALL buttons of the form, with the same bug as IE7.
This bug has been fixed in IE8.

Firefox will add, for accessibility purposes, a small dotted border on a focused button. This border is declared through CSS, in the browser stylesheet, but you can override it if necessary to add your own focused style using `button{{cssxref("::-moz-focus-inner")}} { }`

Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Setting the value of the {{htmlattrxref("autocomplete","button")}} attribute to `off` disables this feature. See [Firefox bug 654072](https://bugzil.la/654072).

Firefox <35 for Android sets a default {{ cssxref("background-image") }} gradient on all buttons (see [Firefox bug 763671](https://bugzil.la/763671)). This can be disabled using `background-image: none`.

### Clicking and focus

Whether clicking on a {{HTMLElement("button")}} causes it to (by default) become focused varies by browser and OS. The results for {{HTMLElement("input")}} of `type="button"` and `type="submit"` were the same.

| Desktop Browsers     | Windows 8.1 | OS X 10.9                   |
| -------------------- | ----------- | --------------------------- |
| Firefox 30.0         | Yes         | No (even with a `tabindex`) |
| Chrome 35            | Yes         | Yes                         |
| Safari 7.0.5         | N/A         | No (even with a `tabindex`) |
| Internet Explorer 11 | Yes         | N/A                         |
| Presto (Opera 12)    | Yes         | Yes                         |

| Mobile Browsers | iOS 7.1.2                   | Android 4.4.4 |
| --------------- | --------------------------- | ------------- |
| Safari Mobile   | No (even with a `tabindex`) | N/A           |
| Chrome 35       | No (even with a `tabindex`) | Yes           |

## Example

```html
<button name="button">Click me</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

Please note that this button has CSS applied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

Other elements that are used for creating forms: {{HTMLElement("form")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.

{{HTMLSidebar}}
