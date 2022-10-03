---
title: <input type="image">
slug: Web/HTML/Element/Input/image
---

{{HTMLRef}}

`<input type="image">` 标签是一个图片提交按钮。你必须使用 **src** 属性来定义图片的源，并且使用 **alt** 来定义当图片无法显示的时候的替代文字。 **height** 和 **width** 属性是用来定义图片的高和宽的。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Permitted content</th>
   <td>None, it is an {{Glossary("empty element")}}.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>Must have a start tag and must not have an end tag.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parent elements</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLInputElement")}}</td>
  </tr>
 </tbody>
</table>

## Attributes

This element includes the [global attributes](/zh-CN/docs/HTML/Global_attributes).

{{htmlattrdef("type")}}

- {{htmlattrdef("formaction")}}
  - : The URI of a program that processes the information submitted by the input element, here image if specified, it overrides the {{htmlattrxref("action","form")}} attribute of the element's form owner.

- {{htmlattrdef("formenctype")}}
  - : If the input element is an image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:

    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the {{htmlattrxref("type","input")}} attribute set to `file`.
    - `text/plain`If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the element's form owner.
- {{htmlattrdef("formmethod")}}
  - : In image input element, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:

    - `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form is appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the element's form owner.
- {{htmlattrdef("formnovalidate")}}
  - : This Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the element's form owner.
- {{htmlattrdef("formtarget")}}
  - : This attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the element's form owner. The following keywords have special meanings:

    - `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- {{htmlattrdef("height")}}
  - : This attribute defines the height of the image displayed for the button.
- {{htmlattrdef("required")}}
  - : This attribute specifies that the user must fill in a value before submitting a form but it cannot be used when the **type** attribute is `image` type (`submit`, `reset`, or `button`). The {{cssxref(":optional")}} and {{cssxref(":required")}} CSS pseudo-classes will be applied to the field as appropriate.
- {{htmlattrdef("src")}}
  - : This attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored.
- {{htmlattrdef("usemap")}} {{Deprecated_Inline}}
  - : The name of a {{HTMLElement("map")}} element as an image map.
- {{htmlattrdef("width")}}
  - : This attribute defines the width of the image displayed for the button.

## Examples

### Firefox logo input image example

```html
<input type="image" name="image" src="/files/2917/fxlogo.png" width="50">
```

#### Result

{{ EmbedLiveSample('simple_input_image_example') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
