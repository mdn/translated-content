---
title: <button>
slug: Web/HTML/Element/button
tags:
  - Element
  - HTML
  - Web
  - Средний уровень
  - Формы
translation_of: Web/HTML/Element/button
original_slug: Web/HTML/Element/кнопка
---
## Описание

**HTML-элемент _`<button>`_** создаёт кликабельную кнопку, которая может быть использована в формах или в любом другом месте документа, который требует простой, стандартной кнопки. По умолчанию, кнопки HTML обычно представлены в стиле, аналогичном стилю хост-платформы, на которой работает {{Glossary ("user agent")}}, но вы можете изменить внешний вид кнопки, используя CSS.

| [Категории контента](/ru/docs/HTML/Content_categories/) | [Общий поток](/ru/docs/HTML/Content_categories#Flow_content), [текстовый контент](/ru/docs/HTML/Content_categories#Phrasing_content), [интерактивный контент](/ru/docs/HTML/Content_categories#Interactive_content), [listed](/ru/docs/HTML/Content_categories#Form_listed "HTML/Content categories#Form listed"), [labelable](/ru/docs/HTML/Content_categories#Form_labelable "HTML/Content categories#Form labelable"), и [submittable](/ru/docs/HTML/Content_categories#Form_submittable "HTML/Content categories#Form submittable") [form-associated](/ru/docs/HTML/Content_categories#Form-associated_ "HTML/Content categories#Form-associated ") элемент, очевидный контент. |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённый контент                                     | [Текстовый контент](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tag omission                                            | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Разрешённый родительский контент                        | Любой элемент с поддержкой [текстового контента](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Разрешённые роли ARIA                                   | {{ARIARole("checkbox")}}, {{ARIARole("link")}}, {{ARIARole("menuitem")}}, {{ARIARole("menuitemcheckbox")}}, {{ARIARole("menuitemradio")}}, {{ARIARole("radio")}}, {{ARIARole("switch")}}, {{ARIARole("tab")}}                                                                                                                                                                                                                                                                                                                                                                                                      |
| DOM interface                                           | {{domxref("HTMLButtonElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Тип                                                     | Строчный                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Атрибуты

Элемент поддерживает [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("autofocus")}} {{HTMLVersionInline(5)}}
  - : Данный булевый атрибут позволяет указать, будет ли кнопка автоматически сфокусирована после загрузки страницы, до тех пор, пока пользователь не изменит фокус в ручную, например выбрав другой элемент. Только один связанный с формой элемент в документе может иметь данный атрибут.
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : Использование данного атрибута на элементе `<button>` не описано в стандарте и используется только в Firefox браузере. По умолчанию, в отличие от прочих браузеров, [Firefox сохраняет назначенное динамически отключённое состояние ](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)для элемента `<button>` при последующих загрузках страницы. Установка для данного атрибута значения `off` отключает подобное поведение. Смотрите {{bug(654072)}}.
- {{htmlattrdef("disabled")}}
  - : Булевый атрибут, указывающий, что пользователь не может взаимодействовать с кнопкой. Если атрибут не установлен, то кнопка наследует его от элемента-контейнера, в котором она расположена, например от {{HTMLElement("fieldset")}}; если отсутствует элемент-контейнер, с установленным атрибутом **disabled**, то кнопка доступна для взаимодействия.Firefox по умолчанию, в отличие от прочих браузеров, [сохраняет назначенное динамически отключённое состояние ](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)для элемента `<button>`, даже при обновлении страницы. Чтобы изменить поведение браузера в этом случае, используйте атрибут {{htmlattrxref("autocomplete","button")}}.
- {{htmlattrdef("form")}} {{HTMLVersionInline(5)}}
  - : Атрибут **form** позволяет указать элемент {{HTMLElement("form")}}, с которым связана кнопка. Данный атрибут должен хранить значение **id** элемента {{HTMLElement("form")}}. Если данный атрибут не установлен, то элемент `<button>` будет связан с родительским элементом {{HTMLElement("form")}}, если последний существует.Атрибут работает независимо от расположения элементов в документе, поэтому он позволяет связать элемент `<button>` с формой, даже в случае, если `<button>` не является наследником элемента {{HTMLElement("form")}}.
- {{htmlattrdef("formaction")}} {{HTMLVersionInline(5)}}
  - : Ссылка на обработчик формы. Если атрибут определён — он переопределит атрибут {{htmlattrxref("action","form")}} у формы-родителя.
- {{htmlattrdef("formenctype")}} {{HTMLVersionInline(5)}}
  - : Если `button` имеет тип `submit`, то этот атрибут определяет тип контента, отправляемого на сервер. Возможные значения данного атрибута:\* `application/x-www-form-urlencoded`: значение по умолчанию, если атрибут не указан.
    - `multipart/form-data`: следует использовать это значение, если форма содержит элемент {{HTMLElement("input")}} со значением атрибута {{htmlattrxref("type","input")}} `file`.
    - `text/plain`Если этот атрибут определён, он переопределяет атрибут {{htmlattrxref("enctype","form")}} у формы-родителя.
- {{htmlattrdef("formmethod")}} {{HTMLVersionInline(5)}}
  - : Если `button` имеет тип `submit`, то этот атрибут определяет метод HTTP-запроса для отправки данных на сервер. Возможные варианты:
    - `post`: данные формы включаются в тело сообщения и отправляются на сервер.
    - `get`: данные формы отправляются на сервер в виде ссылки, состоящей из URI атрибута {{htmlattrxref("action","form")}} и непосредственно данных, отделённых знаком '?'. Данные формы будут иметь вид ключ/значение и разделены амперсандом, например name=Name\&id=35. Следует использовать этот метод только если нет побочных эффектов и данные формы содержат лишь ASCII-символы.Если этот атрибут определён, он переопределяет атрибут {{htmlattrxref("method","form")}} у формы-родителя.
- {{htmlattrdef("formnovalidate")}} {{HTMLVersionInline(5)}}
  - : Булевый атрибут. Указывает, что данные формы не будут валидироваться при отправке.Если этот атрибут определён, он переопределяет атрибут {{htmlattrxref("novalidate","form")}} у формы-родителя.
- {{htmlattrdef("formtarget")}} {{HTMLVersionInline(5)}}
  - : Если `button` имеет тип `submit`, этот атрибут является именем или ключевым словом,указывающим, где отображать ответ, полученный после отправки формы. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the button's form owner. The following keywords have special meanings:\* `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- {{htmlattrdef("name")}}
  - : The name of the button, which is submitted with the form data.
- {{htmlattrdef("type")}}
  - : The type of the button. Possible values are:\* `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.
    - `reset`: The button resets all the controls to their initial values.
    - `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.
    - menu: The button opens a popup menu defined via its designated {{HTMLElement("menu")}} element.
- {{htmlattrdef("value")}}
  - : The initial value of the button.

## Пример

```html
<button name="button">Тык!</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

### Clicking and focus

Whether clicking on a {{HTMLElement("button")}} causes it to (by default) become focused varies by browser and OS. The results for {{HTMLElement("input")}} of `type="button"` and `type="submit"` are the same.

| Desktop Browsers  | Windows 8.1                | OS X 10.X                                                                                          |
| ----------------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| Firefox           | Yes - Firefox 30.0         | No (even with a `tabindex`) Firefox 63                                                             |
| Chrome            | Yes - Chrome 35            | Yes - Chrome 65                                                                                    |
| Safari            | N/A                        | No (even with a `tabindex`) Safari 12 ([bug 22261](https://bugs.webkit.org/show_bug.cgi?id=22261)) |
| Internet Explorer | Yes - Internet Explorer 11 | N/A                                                                                                |
| Presto            | Yes - Opera 12             | Yes - Opera 12                                                                                     |

| Mobile Browsers | iOS 7.1.2                   | Android 4.4.4 |
| --------------- | --------------------------- | ------------- |
| Safari Mobile   | No (even with a `tabindex`) | N/A           |
| Chrome 35       | No (even with a `tabindex`) | Yes           |

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}
