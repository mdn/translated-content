---
title: 제출 버튼 (Submit button)
slug: Glossary/Submit_button
l10n:
  sourceCommit: c9a87fc4010cef73c21c5f46662431f3c8ad2d28
---

{{GlossarySidebar}}

**제출 버튼(submit button)** 은 {{HTMLElement("form", "양식")}}을 제출하는 데 사용할 수 있는 HTML의 {{Glossary("element", "요소")}}입니다. 기본 제출 버튼 요소는 아래와 같습니다.

- {{HtmlElement("button")}} (기본 타입은 `type`은 `"submit"`입니다.)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

양식 제출 외에도, 제출 버튼은 양식의 동작과 전송되는 데이터에 영향을 줄 수 있습니다.

## 양식의 동작을 재정의

제출 버튼은 다양한 속성을 통해 양식의 제출 동작을 재정의할 수 있습니다.

- `{{HtmlElement("button#formaction", "formaction")}}`: 양식의 [`action`](/ko/docs/Web/HTML/Reference/Elements/form#action) 속성을 재정의합니다.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: 양식의 [`enctype`](/ko/docs/Web/HTML/Reference/Elements/form#enctype) 속성을 재정의합니다.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: 양식의 [`method`](/ko/docs/Web/HTML/Reference/Elements/form#method) 속성을 재정의합니다.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: 양식의 [`novalidate`](/ko/docs/Web/HTML/Reference/Elements/form#novalidate) 속성을 재정의합니다.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: 양식의 [`target`](/ko/docs/Web/HTML/Reference/Elements/form#target) 속성을 재정의합니다.

## 양식 데이터 항목

제출 버튼이 {{HtmlElement("button")}} 또는 `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` 및 `name` 속성이 있는 경우, 양식 데이터 모음에는 `name` 및 `value`에 대한 항목이 포함됩니다.

제출 버튼이 `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`인 경우, 양식 데이터 세트에는 사용자가 클릭한 X 및 Y 좌표에 대한 항목이 포함됩니다(예, `x=100&y=200` 또는 `buttonName.x=123&buttonName.y=234`).

## 같이 보기

- [기본 네이티브 양식 컨트롤](/ko/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [양식 데이터 제출하기](/ko/docs/Learn/Forms/Sending_and_retrieving_form_data)
