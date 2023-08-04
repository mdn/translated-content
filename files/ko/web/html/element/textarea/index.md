---
title: <textarea>
slug: Web/HTML/Element/textarea
---

{{HTMLSidebar}}

**HTML `<textarea>` 요소**는 멀티라인 일반 텍스트 편집 컨트롤을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a>and send us a pull request.</p>

## 사용 문맥

- [`컨텐츠 범주`](/ko/docs/HTML/Content_categories) [플로우 컨텐츠](/ko/docs/HTML/Content_categories#Flow_content), [구문 컨텐츠](/ko/docs/HTML/Content_categories#Phrasing_content), [대화형 컨텐츠](/ko/docs/HTML/Content_categories#Interactive_content), [listed](/ko/docs/HTML/Content_categories#Form_listed), [labelable](/ko/docs/HTML/Content_categories#Form_labelable), [resettable](/ko/HTML/Content_categories#form_resettable), and [submittable](/ko/docs/HTML/Content_categories#Form_submittable) [form-associated](/ko/docs/HTML/Content_categories#Form-associated) element.
- `허용되는 컨텐츠` 문자 데이터
- `태그 생략` {{no_tag_omission}}
- `허용되는 부모 요소` [구문 컨텐츠](/ko/docs/HTML/Content_categories#Phrasing_content)를 허용하는 모든 요소
- `DOM 인터페이스` {{domxref("HTMLTextAreaElement")}}

## 속성

이 요소는 [전역 속성](/ko/docs/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:

    - `none`: Completely disables automatic capitalization
    - `sentences`: Automatically capitalize the first letter of sentences.
    - `words`: Automatically capitalize the first letter of words.
    - `characters`: Automatically capitalize all characters.
    - `on`: {{deprecated_inline()}} Deprecated since iOS 5.
    - `off`: {{deprecated_inline()}} Deprecated since iOS 5.

- {{htmlattrdef("autocomplete")}}

  - : This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:

    - `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
    - `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.

    If the **autocomplete** attribute is not specified on an textarea element, then the browser uses the **autocomplete** attribute value of the `<textarea>` element's form owner. The form owner is either the `form` element that this `<textarea>` element is a descendant of or the form element whose **id** is specified by the **form** attribute of the input element. For more information, see the {{htmlattrxref("autocomplete", "form")}} attribute in {{HTMLElement("form")}}.

- {{ htmlattrdef("autofocus") }}
  - : 이 불리언 속성은 페이지가 로드 됬을때, 포커스를 오버라이드(예:사용자가 다른 컨트롤에 타이핑) 하지 않는다면, 폼 컨트롤이 입력 포커스를 받을지를 지정합니다.문서에서 오직 하나의 폼 관련 요소만이 이 속성이 지정될수 있습니다.
- {{ htmlattrdef("cols") }}
  - : The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20 (HTML5).
- {{ htmlattrdef("disabled") }}
  - : 사용자가 컨트롤과 상호작용할수 없다는것을 가리키는 불리언 속성 (만약 속성이 지정되지 않았다면, 이 요소를 포함하는 컨테이닝 요소(예: {{ HTMLElement("fieldset") }})에게서 값을 상속받습니다. 예를 들면, disabled 속성을 가진 컨테이닝 요소가 없다면, 컨트롤은 사용 가능합니다)
- {{ htmlattrdef("form") }}
  - : The form element that the textarea element is associated with (its "form owner"). The value of the attribute must be an ID of a form element in the same document. If this attribute is not specified, the textarea element must be a descendant of a form element. This attribute enables you to place textarea elements anywhere within a document, not just as descendants of their form elements.
- {{ htmlattrdef("maxlength") }}
  - : 사용자가 입력할 수 있는 문자(Unicode code points)의 최대 개수. 만약 명시하지 않을 경우 사용자는 무한으로 입력 가능.
- {{ htmlattrdef("minlength") }}
  - : 사용자가 입력해야 할 문자(Unicode code points)의 최소 개수
- {{ htmlattrdef("name") }}
  - : 컨트롤의 이름
- {{ htmlattrdef("placeholder") }}
  - : A hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds.
- {{ htmlattrdef("readonly") }}
  - : 이 불리언 속성은 사용자가 컨트롤의 값을 수정할수 없다는것을 가리킵니다. `disabled` 속성과는 다르게, `readonly` 속성은 사용자가 컨트롤을 클릭하거나 선택하는것을 막지 않습니다. `readonly` 컨트롤의 값은 여전히 폼과 함께 제출 됩니다..
- {{ htmlattrdef("required") }}
  - : 이 속성은 사용자가 폼을 제출하기 전에 반드시 채워야 한다는 것을 가리킵니다.
- {{ htmlattrdef("rows") }}
  - : The number of visible text lines for the control.
- {{ htmlattrdef("selectionDirection") }}
  - : The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. This can be "none" if the selection direction is unknown.
- {{ htmlattrdef("selectionEnd") }}
  - : The index to the last character in the current selection.
- {{ htmlattrdef("selectionStart") }}
  - : The index to the first character in the current selection.
- {{ htmlattrdef("spellcheck") }}
  - : Setting the value of this attribute to `true` indicates that the element needs to have its spelling and grammar checked. The value `default` indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value. The value `false` indicates that the element should not be checked.
- {{ htmlattrdef("wrap") }}

  - : Indicates how the control wraps text. Possible values are:

    - hard: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must be specified.
    - soft: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.

    If this attribute is not specified, soft is its default value.

## DOM 인터페이스

이 요소는 [`HTMLTextAreaElement`](/en/DOM/HTMLTextAreaElement) 인터페이스를 구현합니다.

Gecko 2.0 introduced support for resizable textareas. This is controlled by the [resize (ko)](/ko/docs/Web/CSS/resize) CSS property. Resizing of textareas is enabled by default, but you can explicitly disable it by including the following CSS:

```
textarea {
  resize: none;
}
```

## CSS와 상호작용 하기

In regards to CSS, an `<textarea>` is a [replaced element](/ko/docs/CSS/Replaced_element). The HTML specification doesn't define where the baseline of a `<textarea>` is. So different browsers set it to different positions. For Gecko, the `<textarea>` baseline is set on the baseline of the first line of the textarea's first line, on another browser it may be set on the bottom of the `<textarea>` box. Don't use {{cssxref("vertical-align")}}`: baseline` on it, as the behavior will be unpredictable.

_Textarea_ 는 래스터 이미지 처럼 고유한 넓이를 가지고 있습니다.

## 예제

### HTML Content

```html
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```

{{ EmbedLiveSample('Example','600','200') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

다른 폼 관련 요소들: {{ HTMLElement("form") }}, {{ HTMLElement("button") }}, {{ HTMLElement("datalist") }}, {{ HTMLElement("legend") }}, {{ HTMLElement("label") }}, {{ HTMLElement("select") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }} and {{ HTMLElement("meter") }}.
