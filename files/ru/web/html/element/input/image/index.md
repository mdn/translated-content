---
title: <input type="image">
slug: Web/HTML/Element/input/image
---

`<input type="image"> - это кнопка отправки в виде изображения. Вы можете использовать атрибут src, чтобы выбрать источник изображения и атрибут alt, чтобы добавить альтернативный текст. Атрибутами width и height можно указать размер изображения в пикселях.`

| Разрешённое содержимое            | Нету, это пустой элемент.                                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Необязательный закрывающийся тег  | Обязательно должен быть открывающийся тег, и обязательно отсутствует закрывающий.                                                 |
| Разрешённые родительские элементы | Любой элемент, которому доступен фразообразующий контент ([phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content)). |
| DOM-интерфейс                     | {{domxref("HTMLInputElement")}}                                                                                                   |

## Атрибуты

Этому элементу доступны глобальные атрибуты ([global attributes](/ru/docs/HTML/Global_attributes)).

{{htmlattrdef("type")}}

- {{htmlattrdef("formaction")}}
  - : The URI of a program that processes the information submitted by the input element, here image if specified, it overrides the [`action`](/ru/docs/Web/HTML/Element/form#action) attribute of the element's form owner.
- {{htmlattrdef("formenctype")}}
  - : If the input element is an image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:
    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the [`type`](/ru/docs/Web/HTML/Element/input#type) attribute set to `file`.
    - `text/plain` If this attribute is specified, it overrides the [`enctype`](/ru/docs/Web/HTML/Element/form#enctype) attribute of the element's form owner.
- {{htmlattrdef("formmethod")}}
  - : In image input element, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:
    - `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form is appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the [`method`](/ru/docs/Web/HTML/Element/form#method) attribute of the element's form owner.
- {{htmlattrdef("formnovalidate")}}
  - : This Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](/ru/docs/Web/HTML/Element/form#novalidate) attribute of the element's form owner.
- {{htmlattrdef("formtarget")}}
  - : This attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](/ru/docs/Web/HTML/Element/form#target) attribute of the element's form owner. The following keywords have special meanings:
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
- {{htmlattrdef("usemap")}}
  - : The name of a {{HTMLElement("map")}} element as an image map.
- {{htmlattrdef("width")}}
  - : This attribute defines the width of the image displayed for the button.

## Примеры

### Поле в виде логотипа Firefox

```html
<input type="image" name="image" src="fxlogo.png" width="50" />
```

#### Результат

{{ EmbedLiveSample('simple_input_image_example') }}

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также
