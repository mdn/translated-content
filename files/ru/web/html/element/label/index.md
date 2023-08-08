---
title: <label>
slug: Web/HTML/Element/label
---

{{HTMLSidebar}}

**HTML-элемент `<label>` **представляет собой подпись к элементу пользовательского интерфейса.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Общий поток](/ru/docs/Web/HTML/Content_categories#Flow_content), [текстовый контент](/ru/docs/Web/HTML/Content_categories#Phrasing_content), [интерактивный контент, элемент формы](/ru/docs/Web/HTML/Content_categories#Interactive_content), ощутимый контент. |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                         | [Текстовый контент](/ru/docs/Web/HTML/Content_categories#Phrasing_content), но без вложенных элементов `label`. Недопустимы другие оборачиваемые в `label` элементы помимо целевого.                                                                              |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                                                                                                                               |
| Допустимые родители                                        | Любой элемент, разрешающий [текстовый контент.](/ru/docs/Web/HTML/Content_categories#Phrasing_content)                                                                                                                                                            |
| Допустимые ARIA-роли                                       | Нет                                                                                                                                                                                                                                                               |
| DOM-интерфейс                                              | {{domxref("HTMLLabelElement")}}                                                                                                                                                                                                                                   |

## Атрибуты

Элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("for")}}
  - : ID [labelable](/ru/docs/Web/Guide/HTML/Content_categories#Form_labelable)-элемента, который находится в том же документе, что и элемент label. Первый такой элемент в документе, ID которого совпадает со значением атрибута `for`, становится `labeled-*` контролом для данного `label`.
    > **Примечание:** Элемент _label_ может иметь как атрибут _for_, так и отдельный элемент управления, если атрибут _for_ указывает на содержащийся элемент управления.
- {{htmlattrdef("form")}}
  - : Элемент формы, с которым связан label (его владелец формы). Если указано, значением атрибута является идентификатор элемента {{HTMLElement ("form")}} в том же документе. Это позволяет размещать элементы label в любом месте документа, а не только как потомки их элементов формы.
    > **Примечание:** Этот атрибут содержимого был удалён из спецификации HTML 28 апреля 2016 г. Однако сценарии по-прежнему имеют доступ только для чтения {{domxref ("HTMLLabelElement.form")}}; он возвращает форму, членом которой является связанный элемент управления label, или значение NULL, если label не связана с элементом управления или элемент управления не является частью формы.

## Примечания по использованию

- \<label> можно связать с элементом управления, поместив элемент управления внутри элемента \<label> или используя атрибут [`for`](/ru/docs/Web/HTML/Global_attributes#for). Такой элемент управления называется помеченным элементом управления надписью. Один вход может быть связан с несколькими метками.
- Метки сами по себе не связаны с формами. Они только косвенно связаны с формами через элементы управления, с которыми они связаны.

## Examples

### Simple label example

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('Simple_label_example', '200', '50', '')}}

### Using the "for" attribute

```html
<label for="username">Click me</label> <input type="text" id="username" />
```

{{EmbedLiveSample('Using_the_for_attribute', '200', '50', '')}}

## Specifications

| Specification                                                                | Status                   | Comment            |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG', 'forms.html#the-label-element', '&lt;label&gt;')}} | {{Spec2('HTML WHATWG')}} |                    |
| {{SpecName('HTML5 W3C', 'forms.html#the-label-element', '&lt;label&gt;')}}   | {{Spec2('HTML5 W3C')}}   |                    |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.9.1', '&lt;label&gt;')}}    | {{Spec2('HTML4.01')}}    | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("input")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
