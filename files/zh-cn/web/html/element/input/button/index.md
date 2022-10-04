---
title: <input type="button">
slug: Web/HTML/Element/Input/button
---

{{HTMLRef}}

**`元素<input type="button">`** 是 **`<input>`** 元素的特殊版本，被用来创建一个没有默认值的可点击按钮。它已经在 HTML5 被 **[\<button>](/zh-CN/docs/Web/HTML/Element/button)元素取代**

浏览器生成一个控件没有默认值的可点击按钮。该按钮上可有任何标签。该控件在不同的浏览器上，可能有不同的样式。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Interactive_content">Interactive content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_listed">listed</a>, <a href="/zh-CN/docs/HTML/Content_categories#Form_labelable">labelable</a>, and <a href="/zh-CN/docs/HTML/Content_categories#Form_submittable">submittable</a> <a href="/zh-CN/docs/HTML/Content_categories#Form-associated_">form-associated</a> element, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签略写</th>
   <td>{{no_tag_omission}} </td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任意可容纳 <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a> 的元素。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>{{ARIARole("checkbox")}}, {{ARIARole("link")}}, {{ARIARole("menuitem")}}, {{ARIARole("menuitemcheckbox")}}, {{ARIARole("menuitemradio")}}, {{ARIARole("radio")}}, {{ARIARole("switch")}}, {{ARIARole("tab")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLButtonElement")}}</td>
  </tr>
 </tbody>
</table>

## Attributes

This element can have any of the [global attributes](/zh-CN/docs/HTML/Global_attributes) in addition to the following:

- {{htmlattrdef("disabled")}}
  - : This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example {{HTMLElement("fieldset")}}; if there is no containing element with the **`disabled`** attribute set, then the button is enabled. The disabled control's value isn't submitted with the form and the `click` event [will not be dispatched](https://html.spec.whatwg.org/multipage/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute) on disabled controls.Firefox will, unlike other browsers, by default, [persist the dynamic disabled state](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the {{htmlattrxref("autocomplete","button")}} attribute to control this feature.
- {{htmlattrdef("autofocus")}}
  - : This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : The use of this attribute on a {{HTMLElement("button")}} is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Setting the value of this attribute to `off` (i.e., `autocomplete="off"`) disables this feature.
- {{htmlattrdef("form")}}
  - : The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a {{HTMLElement("form")}} element in the same document. If this attribute is not specified, the `<button>` element must be a descendent of a form element. This attribute enables you to place `<button>` elements anywhere within a document, not just as descendents of their {{HTMLElement("form")}} elements.
- {{htmlattrdef("formenctype")}}
  - : Since the input element is a submit button, the **`formenctype`** attribute specifies the type of content that is used to submit the form to the server. Possible values are:

    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: This value is used if an {{HTMLElement("input")}} element is used with the {{htmlattrxref("type","input")}} attribute set to `file`.
    - `text/plain`If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the element's form owner.
- {{htmlattrdef("formaction")}}
  - : The URI of a program that processes the information submitted by the button. If specified, it overrides the {{htmlattrxref("action","form")}} attribute of the button's form owner.
- {{htmlattrdef("formmethod")}}
  - : Since the input element is a submit button, the **`formmethod`** attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:

    - `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form is appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the element's form owner.
- {{htmlattrdef("formnovalidate")}}
  - : Since the input element is a submit button, the **`formnovalidate`** attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the element's form owner. This is a Boolean attribute.
- {{htmlattrdef("formtarget")}}
  - : Since the input element is a submit button, the **`formtarget`** attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the element's form owner. The following keywords have special meanings:

    - `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- {{htmlattrdef("name")}}
  - : The name of the button, which is submitted with the form data.
- {{htmlattrdef("type")}}
  - : The type of the button. Possible values are:

    - `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
    - `reset`: The button resets all the controls to their initial values.
    - `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
- {{htmlattrdef("value")}}
  - : The initial value of the button.

## 举例

这创建一个新的按钮\<input>元素，文本显示出 'Click me'。

```html
<input type="button" value="Click me">
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## 更多

- The generic {{HTMLElement("input")}} element and the interface used to manipulate it, {{domxref("HTMLInputElement")}}
- HTML5 的替代方式为 **[\<button>](/zh-CN/docs/Web/HTML/Element/button)** 元素
