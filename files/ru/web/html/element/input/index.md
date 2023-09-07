---
title: <input>
slug: Web/HTML/Element/input
---

{{HTMLSidebar}}

## Описание

**Элемент** **HTML `<input>`** используется для создания интерактивных элементов управления в веб-формах для получения данных от пользователя; в зависимости от устройства и {{Glossary("user agent")}}, доступен широкий выбор типов входных данных и виджетов управления. Из-за огромного количества возможных сочетаний типов ввода и атрибутов это один из самых мощных и сложных элементов HTML.

- _[Content categories](/ru/docs/HTML/Content_categories)_ [Flow content](/ru/docs/HTML/Content_categories#Flow_content), listed, submittable, resettable, form-associated element, [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).
  If the [`type`](/ru/docs/Web/HTML/Element/input#type) has not the `hidden` value, labellable element, palpable content.
- _Permitted content_ None, it is an {{Glossary("empty element")}}.
- _Tag omission_ Must have a start tag and must not have an end tag.
- _Permitted parent elements_ Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLInputElement")}}

## Атрибуты

Этот элемент содержит [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- Расширение файла, начинающееся с символа точки (U+002E). Наприм., '.jpg, .png, .doc)
- Валидный тип MIME без расширения
- `audio/*` для аудиофайлов
- `video/*` для видеофайлов
- `image/*` для файлов с изображениями

<!---->

- {{htmlattrdef("type")}}

  - : Тип элемента для отображения. Если этот атрибут не указан, по умолчанию используется `text`. Возможными значениями являются:

    - `button`: Кнопка без предопределённого поведения.
    - `checkbox`: Флажок («чекбокс»). Следует использовать атрибут **value** для определения значения, которое будет отдано этим элементом. Используйте атрибут **checked**, чтобы указать, должен ли флажок быть выставлен. Можно также использовать атрибут **indeterminate**, чтобы указать, что флажок находится в неопределённом состоянии (на большинстве платформ при этом рисуется горизонтальная линия поперёк флажка).
    - `color`: Элемент управления цветом. Пользовательский интерфейс выбора цвета не имеет никаких других функций, кроме принятия простых цветов в виде текста ([больше информации](<http://www.w3.org/TR/html5/forms.html#color-state-(type=color)>)).
    - `date`: Элемент управления для ввода даты (год, месяц и день, без времени).
    - `datetime`: Элемент управления для ввода даты и времени (час, минута, секунда и доля секунды) в соответствии с часовым поясом UTC.
    - `datetime-local`: Элемент управления для ввода даты и времени без часового пояса.
    - `email`: Поле для редактирования адреса электронной почты. Перед отправкой проверяется, что входное значение содержит либо пустую строку, либо один действительный адрес электронной почты. Соответствуют CSS псевдоклассам {{cssxref(":valid")}} and {{cssxref(":invalid")}}.
    - `file`: Элемент управления, который позволяет пользователю выбрать файл. Используйте атрибут **accept**, чтобы определить типы файлов, которые могут быть выбраны.
    - `hidden`: Элемент управления, которые не отображается, но чьё значение отправлено на сервер.
    - `image`: Кнопка вставки изображения. Вы должны использовать атрибут **src**, чтобы определить путь к изображению и атрибут **alt** - для определения альтернативного текста. Вы можете использовать атрибуты **height** и **width**, чтобы определить размер вставки изображения в пикселях.
    - `month`: Элемент управления для ввода месяца и года без часового пояса.
    - `number`: Элемент управления ввода числа(тип **float**).
    - `password`: Однострочное текстовое поле, чьё значение скрыто символом "звёздочка". Используйте атрибуты **minlength** и **maxlength**, чтобы указать минимальную и максимальную длину значения, которое может быть введено.

      > **Примечание:** Любые формы, в которых присутствует важная информация(например, пароль), должны быть обработаны через HTTPS; в настоящий момент Firefox реализует составной механизм предупреждения, направленные против небезопасных форм для входа в систему - смотрите [Небезопасные пароли](/ru/docs/Web/Security/Insecure_passwords).

    - `radio`: Кнопка-переключатель, позволяет выбрать одно значение из множественного выбора.
    - `range`: Элемент управления для ввода числа, точное значение которого не имеет значения. Этот тип управления использует следующие значения по умолчанию, если соответствующие атрибуты не указаны:

      - `min`: 0
      - `max`: 100
      - `value`: `min` + (`max`-`min`)/2, or `min` if `max` is less than `min`
      - `step`: 1

    - `reset`: Кнопка сброса содержимого формы в состояние по умолчанию.
    - `search`: Однострочное текстовое поле для ввода строк поиска; разрывы строк автоматически удаляются из входного значения.
    - `submit`: Кнопка для отправления формы.
    - `tel`: Элемент управления для ввода номера телефона; разрывы строк автоматически удаляются из входного значения, но никакой другой синтаксис не применяется. Можно использовать такие атрибуты как **pattern** и **maxlength**, чтобы ограничить вводимое значение.
      Псевдоклассы CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} применяются при необходимости..
    - `text`: Однострочное текстовое поле. Переносы строк автоматически удаляются из входного значения.
    - `time`: Элемент управления для ввода значения времени без часового пояса.
    - `url`: Поле для редактирования URI. Введённое значение должно содержать либо пустую строку, либо допустимый абсолютный URL. В противном случае значение не будет принято. Переводы строк, лидирующие и завершающие пробельные символы будут автоматически удалены из введённого значения. Можно использовать такие атрибуты как **pattern** или **maxlength**, чтобы ограничить вводимые значения. Псевдоклассы CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} применяются при необходимости.
    - `week`: Элемент управления для ввода даты, содержащей число неделя-год и номер недели без часового пояса.

- {{htmlattrdef("accept")}}
  - : В случае, если значением атрибута **type** является `file`, данный атрибут определяет типы файлов, которые сервер может принять. В противном случае файл игнорируется. Значение должно быть списком уникальных спецификаторов типов содержания, разделённым запятыми:
- {{htmlattrdef("accesskey")}}
  - : Одиночный символ, который пользователь может нажать, чтобы переключить фокус на элемент управления.
- {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}
  - : Определяет "действие-подсказку", которая используется для определения того, как будет обозначаться клавиша enter на мобильных устройствах с виртуальной клавиатурой. Поддерживаемые значения: `go`, `done`, `next`, `search`, и `send`; они автоматически сопоставляются с необходимой строкой (являются чувствительными к регистру).
- {{htmlattrdef("autocomplete")}}
  - : Этот атрибут указывает, разрешено ли автоматическое заполнение поля браузером. Разрешено по умолчанию, даже если не указано. Данный атрибут игнорируется, если атрибут **type** равен `hidden, password,` `checkbox`, `radio`, `file`, или **type** кнопка (`button`, `submit`, `reset`, `image`). Возможные значения:
    - `off`: Пользователь должен каждый раз полностью вводить значение в поле или документ предусматривает свой собственный метод автозаполнения; браузер не делает автоматического заполнения записи.
    - `on`: Браузер автоматически заканчивает значение поля, основываясь на значениях, которые вводились пользователем ранее.Если не атрибут **autocomplete** не указан в `<input>`, тогда браузер использует атрибут **autocomplete** формы, которая является родительской для данной формы. The form owner is either the `form` element that this `<input>` element is a descendant of or the form element whose **id** is specified by the **form** attribute of the input element. For more information, see the [`autocomplete`](/ru/docs/Web/HTML/Element/form#autocomplete) attribute in {{HTMLElement("form")}}.
- {{htmlattrdef("autofocus")}}
  - : This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the **autofocus** attribute, which is a Boolean. It cannot be applied if the **type** attribute is set to `hidden` (that is, you cannot automatically set focus to a hidden control).
- {{htmlattrdef("autosave")}}
  - : This attribute should be defined as a unique value. If the value of the type attribute is `search`, previous search term values will persist in the dropdown across page load.
- {{htmlattrdef("checked")}}
  - : When the value of the **type** attribute is `radio` or `checkbox`, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored.
- {{htmlattrdef("disabled")}}
  - : This Boolean attribute indicates that the form control is not available for interaction. In particular, the `click` event [will not be dispatched](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#enabling-and-disabling-form-controls) on disabled controls. Also, a disabled control's value isn't submitted with the form.
- {{htmlattrdef("form")}}
  - : The form element that the input element is associated with (its _form owner_). The value of the attribute must be an **id** of a {{HTMLElement("form")}} element in the same document. If this attribute is not specified, this `<input>` element must be a descendant of a {{HTMLElement("form")}} element. This attribute enables you to place `<input>` elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form.
- {{htmlattrdef("formaction")}}
  - : The URI of a program that processes the information submitted by the input element, if it is a submit button or image. If specified, it overrides the [`action`](/ru/docs/Web/HTML/Element/form#action) attribute of the element's form owner.
- {{htmlattrdef("formenctype")}}
  - : If the input element is a submit button or image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:
    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the [`type`](/ru/docs/Web/HTML/Element/input#type) attribute set to `file`.
    - `text/plain` If this attribute is specified, it overrides the [`enctype`](/ru/docs/Web/HTML/Element/form#enctype) attribute of the element's form owner.
- {{htmlattrdef("formmethod")}}
  - : If the input element is a submit button or image, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:
    - `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the [`method`](/ru/docs/Web/HTML/Element/form#method) attribute of the element's form owner.
- {{htmlattrdef("formnovalidate")}}
  - : If the input element is a submit button or image, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](/ru/docs/Web/HTML/Element/form#novalidate) attribute of the element's form owner.
- {{htmlattrdef("formtarget")}}
  - : If the input element is a submit button or image, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](/ru/docs/Web/HTML/Element/form#target) attribute of the elements's form owner. The following keywords have special meanings:
    - `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- {{htmlattrdef("height")}}
  - : If the value of the **type** attribute is `image`, this attribute defines the height of the image displayed for the button.
- {{htmlattrdef("inputmode")}}
  - : A hint to the browser for which keyboard to display. This attribute applies when the value of the **type** attribute is text, password, email, or url. Possible values are:
    - `verbatim`: Alphanumeric, non-prose content such as usernames and passwords.
    - `latin`: Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
    - `latin-name`: As _latin_, but for human names.
    - `latin-prose`: As _latin_, but with more aggressive typing aids. For human-to-human communication such as instant messaging for email.
    - `full-width-latin`: As _latin-prose_, but for the user's secondary languages.
    - `kana`: Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `katakana`: Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `numeric`: Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes, e.g. credit card numbers. For actual numbers, prefer using \<input type="number">
    - `tel`: Telephone input, including asterisk and pound key. Use \<input type="tel"> if possible instead.
    - `email`: Email input. Use \<input type="email"> if possible instead.
    - `url`: URL input. Use \<input type="url"> if possible instead.
- {{htmlattrdef("list")}}
  - : В атрибуте указывает `id` элемента {{HTMLElement("datalist")}}, в котором находится список предопределённых значений для заполнения. Браузер отображает только те варианты, которые соответствуют введённым символами. Этот атрибут игнорируется, когда атрибут **type** принимает значения `hidden`, `checkbox`, `radio`, `file`, или **type** в качестве кнопки.
- {{htmlattrdef("max")}}
  - : The maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** attribute) value.
- {{htmlattrdef("maxlength")}}
  - : If the value of the **type** attribute is `text`, `email`,`search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored. It can exceed the value of the **size** attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior; that is, the user can enter an unlimited number of characters. The constraint is evaluated only when the value of the attribute has been changed.
- {{htmlattrdef("min")}}
  - : The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (**max** attribute) value.
- {{htmlattrdef("minlength")}}
  - : If the value of the **type** attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored.
- {{htmlattrdef("multiple")}}
  - : Этот Boolean атрибут указывает, может ли пользователь вводить несколько значений. Этот атрибут применяется, если для атрибута type задано значение `email` или `file`; в противном случае он игнорируется.
- {{htmlattrdef("name")}}
  - : The name of the control, which is submitted with the form data.
- {{htmlattrdef("pattern")}}
  - : A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the **title** attribute to describe the pattern to help the user. This attribute applies when the value of the **type** attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes.
- {{htmlattrdef("placeholder")}}
  - : A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the **type** attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.
    > **Примечание:** Do not use the `placeholder` attribute instead of a {{HTMLElement("label")}} element. Their purposes are different: the {{HTMLElement("label")}} attribute describes the role of the form element; that is, it indicates what kind of information is expected, the `placeholder` attribute is a hint about the format the content should take. There are cases in which the `placeholder` attribute is never displayed to the user, so the form must be understandable without it.
- {{htmlattrdef("readonly")}}
  - : This Boolean attribute indicates that the user cannot modify the value of the control. This attribute is ignored if the value of the **type** attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.
- {{htmlattrdef("required")}}
  - : This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the **type** attribute is `hidden`, `image`, or a button type (`submit`, `reset`, or `button`). The {{cssxref(":optional")}} and {{cssxref(":required")}} CSS pseudo-classes will be applied to the field as appropriate.
- {{htmlattrdef("selectionDirection")}}
  - : The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. This can be "none" if the selection direction is unknown.
- {{htmlattrdef("size")}}
  - : The initial size of the control. This value is in pixels unless the value of the **type** attribute is `text` or `password`, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the **type** attribute is set to `text`, `search`, `tel`, `url`, `email`, or `password`; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used.
- {{htmlattrdef("spellcheck")}}
  - : Setting the value of this attribute to `true` indicates that the element needs to have its spelling and grammar checked. The value `default` indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value. The value `false` indicates that the element should not be checked.
- {{htmlattrdef("src")}}
  - : If the value of the **type** attribute is `image`, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored.
- {{htmlattrdef("step")}}
  - : Works with the **min** and **max** attributes to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this attribute is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.
- {{htmlattrdef("tabindex")}}
  - : The position of the element in the tabbing navigation order for the current document.
- {{htmlattrdef("usemap")}}
  - : The name of a {{HTMLElement("map")}} element to as an image map.
- {{htmlattrdef("value")}}
  - : The initial value of the control. This attribute is optional except when the value of the **type** attribute is `radio` or `checkbox`.
    Note that when reloading the page, Gecko and IE [will ignore the value specified in the HTML source](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186), if the value was changed before the reload.
- {{htmlattrdef("width")}}
  - : If the value of the **type** attribute is `image`, this attribute defines the width of the image displayed for the button.
- {{htmlattrdef("x-moz-errormessage")}} {{non-standard_inline}}
  - : This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate.

## Notes

### File inputs

> **Примечание:** Starting in Gecko 2.0, calling the `click()` method on an {{HTMLElement("input")}} element of type "file" opens the file picker and lets the user select files. See [Using files from web applications](/ru/docs/Using_files_from_web_applications) for an example and more details.

You can't set the value of a file picker from a script; doing something like the following has no effect:

```js
var e = getElementById("someFileInputElement");
e.value = "foo";
```

### Error messages

If you want Firefox to present a custom error message when a field fails to validate, you can use the `x-moz-errormessage` attribute to do so:

```html
<input
  type="email"
  x-moz-errormessage="Please specify a valid email address." />
```

Note, however, that this is not standard and will not have an effect on other browsers.

## Examples

### A simple input box

```html
<!-- A basic input -->
<input type="text" name="input" value="Type here" />
```

### A common use-case scenario

```html
<!-- A common form that includes input tags -->
<form action="getform.php" method="get">
  First name: <input type="text" name="first_name" /><br />
  Last name: <input type="text" name="last_name" /><br />
  E-mail: <input type="email" name="user_email" /><br />
  <input type="submit" value="Submit" />
</form>
```

### Using mozactionhint on Firefox mobile

You can use the [`mozactionhint`](/ru/docs/Web/HTML/Element/input#mozactionhint) attribute to specify the text for the label of the enter key on the virtual keyboard when your form is rendered on Firefox mobile. For example, to have a "Next" label, you can do this:

```html
<input type="text" mozactionhint="next" name="sometext" />
```

The result is:

[![mozactionhint.png](/@api/deki/files/4970/=mozactionhint.png?size=webview)](/@api/deki/files/4970/=mozactionhint.png)

## Specifications

| Specification                                                                            | Status                   | Comment |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'the-input-element.html#the-input-element', '&lt;input&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'forms.html#the-input-element', '&lt;input&gt;')}}               | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.4', '&lt;form&gt;')}}                   | {{Spec2('HTML4.01')}}    |         |

## Совместимость с браузерами

{{Compat}}

\[1] Распознаётся, но UI отсутствует.

\[2] Отсутствует для `type="checkbox"` и `type="radio"`.

\[3] В Safari `autocapitalize="words"` переводит в верхний регистр каждый второй символ слова.

\[4] `datetime` был удалён из спецификации и браузеров в пользу `datetime-local`.

\[5] См {{bug(1355389)}}

\[6] Ещё не имплементировано. Наблюдать: {{bug("888320")}} и [TPE DOM/Date time input types](https://wiki.mozilla.org/TPE_DOM/Date_time_input_types).

### Gecko notes

Starting in Gecko 9.0, Firefox for Android lets users capture images using their camera and upload them, without having to leave the browser. Web developers can implement this feature by simply specifying setting the `accept` attribute's value to "image/\*" on their `file` input, like this:

`<input type="file" accept="image/*">`

Firefox for Android sets a default {{ cssxref("background-image") }} gradient on all `type="text"`, `type="file"`, `type="button"`, and `type="submit"` inputs. This can be disabled using `background-image: none`.

Firefox for Android also sets a default {{ cssxref("border") }} on all `<input type="file">` elements.

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)
