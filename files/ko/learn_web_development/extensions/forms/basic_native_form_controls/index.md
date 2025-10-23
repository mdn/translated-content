---
title: 기본 네이티브 양식 컨트롤
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
original_slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

[이전 글](/ko/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)에서는 기능적인 웹 폼 예시를 마크업하며, 일부 폼 컨트롤과 공통 구조 요소를 소개하고 접근성 모범 사례에 중점을 두었습니다. 다음에는 폼 컨트롤 또는 위젯의 기능을 자세히 살펴보고, 다양한 유형의 데이터를 수집하기 위한 모든 다른 옵션을 연구할 것입니다. 이 글에서는 웹 초기부터 모든 브라우저에서 사용 가능한 원래의 폼 컨트롤 세트를 살펴볼 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 요구 사항</th>
      <td>
        기본 컴퓨터 지식과 기본
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 이해</a
        >가 필요합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        브라우저에서 사용 가능한 원래의 네이티브 양식 위젯 세트에 대해 자세히 이해하고, 이를 HTML로 구현하는 방법을 알아보십시오.
      </td>
    </tr>
  </tbody>
</table>

이미 {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}}, 그리고 {{HTMLelement('input')}} 같은 몇 가지 양식 요소들을 만나보셨을 것입니다. 이 글에서는 다음을 다룹니다.

- 일반 입력 유형 {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, 그리고 {{HTMLelement('input/text', 'text')}}.
- 몇 가지 속성들은 모든 양식 컨트롤에 공통적으로 적용됩니다.

> [!NOTE]
> 다음 두 글에서 더욱 강력한 양식 컨트롤에 대해 다룹니다. 좀 더 고급 참조를 원하시면, [HTML 양식 요소 참조](/ko/docs/Web/HTML/Reference/Elements#forms)와 특히 [\<input\> 유형](/ko/docs/Web/HTML/Element/input) 참조를 참고하십시오.

## 텍스트 입력 필드

텍스트 {{htmlelement("input")}} 필드는 가장 기본적인 양식 위젯입니다. 이것은 사용자가 어떠한 종류의 데이터라도 입력하는 데 매우 편리한 방법이며, 이미 몇 가지 간단한 예제를 보셨을 것입니다.

> [!NOTE]
> HTML 양식 텍스트 필드는 간단한 일반 텍스트 입력 컨트롤입니다. 이는 풍부한 텍스트 편집(볼드체, 이탤릭체 등)을 수행할 수 없다는 것을 의미합니다. 당신이 마주칠 모든 리치 텍스트 편집기는 HTML, CSS, 그리고 JavaScript로 만들어진 사용자 정의 위젯입니다.

모든 기본 텍스트 컨트롤은 몇 가지 공통 행동을 공유합니다.

- [`readonly`](/ko/docs/Web/HTML/Element/input#readonly)로 표시될 수 있습니다(사용자는 입력 값을 수정할 수 없지만, 나머지 양식 데이터와 함께 전송됩니다) 또는 [`disabled`](/ko/docs/Web/HTML/Element/input#disabled) (입력 값은 수정할 수 없고, 나머지 양식 데이터와 함께 전송되지 않습니다).
- [`placeholder`](/ko/docs/Web/HTML/Element/input#placeholder)를 가질 수 있습니다. 이는 텍스트 입력 상자 안에 나타나는 텍스트로, 텍스트 입력 상자의 목적을 간략하게 설명하는 데 사용되어야 합니다.
- [`size`](/ko/docs/Web/HTML/Reference/Attributes/size) (상자의 물리적 크기)와 [`maxlength`](/ko/docs/Web/HTML/Reference/Attributes/maxlength) (상자에 입력할 수 있는 최대 문자 수)에서 제한될 수 있습니다.
- 브라우저가 지원하는 경우 철자 검사를 받을 수 있습니다([`spellcheck`](/ko/docs/Web/HTML/Reference/Global_attributes/spellcheck) 속성 사용).

> [!NOTE]
> {{htmlelement("input")}} 요소는 입력 유형에 따라 여러 가지 형태를 취할 수 있기 때문에 HTML 요소 중에서 유일합니다. 단일 줄 텍스트 필드, 시간 및 날짜 컨트롤, 텍스트 입력 없는 컨트롤(예: 체크박스, 라디오 버튼, 색상 선택기) 및 버튼을 포함한 대부분의 양식 위젯을 생성하는 데 사용됩니다.

### 단일 줄 텍스트 필드

단일 줄 텍스트 필드는 `type` 속성 값이 `text`로 설정된 {{HTMLElement("input")}} 요소를 사용하여 만들어집니다. 또는 `type` 속성을 전체적으로 생략하여 (`text`는 기본값입니다) 생성할 수 있습니다. `type` 속성에 지정한 값이 브라우저에서 알 수 없는 경우 (`type="color"`를 지정하고 브라우저가 기본 색상 선택기를 지원하지 않는 경우) 이 속성의 값 `text`는 대체 값이 됩니다.

> [!NOTE]
> 모든 단일 줄 텍스트 필드 유형의 예제는 GitHub에서 [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html)에서 확인할 수 있습니다. ([라이브 데모도 확인하세요](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

다음은 기본 단일 줄 텍스트 필드 예제입니다.

```html
<input
  type="text"
  id="comment"
  name="comment"
  value="저는 텍스트 필드입니다." />
```

단일 줄 텍스트 필드에는 하나의 제약만 있습니다. 줄 바꿈이 있는 텍스트를 입력하면 브라우저는 해당 데이터를 서버로 전송하기 전에 줄 바꿈을 제거합니다.

### 비밀번호 필드

원래의 입력 유형 중 하나는 `password` 텍스트 필드 유형입니다.

```html
<input type="password" id="pwd" name="pwd" />
```

`password` 값은 입력된 텍스트에 특별한 제약 조건을 추가하지 않지만, 필드에 입력된 값을 은폐합니다(예: 점 또는 별표로) 다른 사람이 쉽게 읽을 수 없습니다.

이것은 단순히 사용자 인터페이스 기능일 뿐입니다. 양식을 안전하게 제출하지 않으면 데이터는 일반 텍스트로 전송되므로 보안에 좋지 않습니다. 악의적인 당사자가 데이터를 가로채어 비밀번호, 신용카드 정보 또는 제출한 기타 내용을 훔칠 수 있습니다. 이로부터 사용자를 보호하는 가장 좋은 방법은 보안 연결(즉, `https://` 주소에 위치한)을 통해 양식과 관련된 모든 페이지를 호스팅하는 것입니다. 그러면 데이터가 전송되기 전에 암호화됩니다.

브라우저는 안전하지 않은 연결을 통해 양식 데이터를 전송하는 것의 보안 문제를 인식하며, 사용자가 안전하지 않은 양식을 사용하지 않도록 경고합니다. Firefox에서 구현하는 내용에 대한 자세한 내용은 [Insecure passwords](/ko/docs/Web/Security/Insecure_passwords)를 참조하세요.

### 숨겨진 컨텐츠

또 다른 원래의 텍스트 컨트롤은 `hidden` 입력 유형입니다. 이것은 사용자에게 보이지 않는 양식 컨트롤을 만드는 데 사용됩니다. 그러나 제출된 양식 데이터와 함께 서버로 전송됩니다. 예를 들어 주문이 접수되었을 때 서버에 타임스탬프를 제출하려고 할 수 있습니다. 숨겨져 있기 때문에 사용자는 값을 볼 수 없고 의도적으로 편집할 수 없으며 포커스를 받지 않으며 스크린 리더도 이를 인식하지 않습니다.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

이러한 요소를 만들려면 `name` 및 `value` 속성을 설정해야 합니다. 값은 JavaScript를 통해 동적으로 설정할 수 있습니다. `hidden` 입력 유형에는 관련 레이블이 없어야 합니다.

다른 텍스트 입력 유형, 예를 들면 {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, 그리고 {{HTMLElement("input/tel", "tel")}}은 다음 자습서인 [HTML5 입력 유형](/ko/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)에서 다룰 것입니다.

## 체크 가능한 항목: 체크박스와 라디오 버튼

체크 가능한 항목은 클릭하여 또는 관련 레이블을 클릭하여 상태를 변경할 수 있는 컨트롤입니다. 체크 가능한 항목에는 체크박스와 라디오 버튼 두 가지 유형이 있습니다. 둘 다 기본적으로 위젯이 체크되어 있는지 여부를 나타내는 [`checked`](/ko/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 속성을 사용합니다.

이러한 위젯이 다른 양식 위젯과 정확히 같은 방식으로 동작하지 않는 것은 주목할 만한 사실입니다. 대부분의 양식 위젯의 경우, 양식이 제출되면 [`name`](/ko/docs/Web/HTML/Element/input#name) 속성을 가진 모든 위젯이 전송됩니다. 값을 입력하지 않아도 마찬가지입니다. 체크 가능한 항목의 경우, 체크되어 있으면 값만 전송됩니다. 이름조차도 체크되어 있지 않으면 아무것도 전송되지 않습니다, 값이 없지만 체크되어 있으면 이름이 _on_ 값과 함께 전송됩니다.

### 체크박스

체크박스는 {{HTMLElement("input")}} 요소를 사용하여 생성되며, 그 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성 값은 {{HTMLElement("input/checkbox", "checkbox")}}로 설정됩니다.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

관련 체크박스 항목은 동일한 [`name`](/ko/docs/Web/HTML/Element/input#name) 속성을 사용해야 합니다. [`checked`](/ko/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 속성을 포함하면 페이지가 로드될 때 체크박스가 자동으로 체크됩니다. 체크박스를 클릭하거나 관련 레이블을 클릭하면 체크박스가 켜고 꺼집니다.

### 라디오 버튼

라디오 버튼은 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성 값이 `radio`로 설정된 {{HTMLElement("input")}} 요소를 사용하여 생성됩니다.

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

여러 라디오 버튼을 함께 연결할 수 있습니다. 그들이 [`name`](/ko/docs/Web/HTML/Element/input#name) 속성의 동일한 값을 공유하면, 그들은 동일한 버튼 그룹에 있다고 간주됩니다. 주어진 그룹의 버튼 중 하나만 한 번에 체크될 수 있습니다. 이는 그 중 하나가 체크되면 다른 모든 것이 자동으로 체크 해제된다는 것을 의미합니다.

## 실제 버튼

라디오 버튼은 이름에도 불구하고 실제 버튼이 아닙니다. 실제 버튼을 살펴보겠습니다! 세 가지 입력 유형이 버튼을 생성합니다.

- `submit`
  - : 양식 데이터를 서버로 전송합니다. {{HTMLElement("button")}} 요소의 경우, `type` 속성을 생략하거나 `type`의 잘못된 값은 제출 버튼으로 간주됩니다.
- `reset`
  - : 모든 양식 위젯을 기본 값으로 재설정합니다.
- `button`
  - : 자동 효과가 없는 버튼이지만 JavaScript 코드를 사용하여 사용자 정의할 수 있습니다.

그리고 우리는 {{htmlelement("button")}} 요소 그 자체를 가지고 있습니다. 이는 위에서 언급한 세 가지 `<input>` 유형의 동작을 흉내내기 위해 `submit`, `reset`, 또는 `button` 값의 `type` 속성을 가질 수 있습니다. 두 요소 사이의 주요 차이점은 실제 `<button>` 요소가 스타일을 적용하기가 훨씬 쉽다는 것입니다.

버튼은 사용자가 {{HTMLElement("button")}} 요소를 사용하던지 {{HTMLElement("input")}} 요소를 사용하던지 항상 동일하게 동작합니다. 그러나 예제에서 볼 수 있듯이, {{HTMLElement("button")}} 요소는 내용에 HTML을 사용할 수 있게 해줍니다. 이 내용은 여는 `<button>` 태그와 닫는 `<button>` 태그 사이에 삽입됩니다. 반면에 {{HTMLElement("input")}} 요소는 {{glossary("void element", "void elements")}}입니다. 따라서 표시된 내용은 `value` 속성 내부에 삽입되며, 내용으로 일반 텍스트만 허용됩니다.

**이미지 버튼** 컨트롤은 사용자가 클릭하면 제출 버튼처럼 동작하는 것을 제외하고는 {{HTMLElement("img")}} 요소와 정확히 똑같이 렌더링됩니다.

이미지 버튼은 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성 값이 `image`로 설정된 {{HTMLElement("input")}} 요소를 사용하여 생성됩니다. 이 요소는 {{HTMLElement("img")}} 요소가 지원하는 동일한 속성 집합을 지원하며, 다른 양식 버튼이 지원하는 모든 속성도 지원합니다.

만약 이미지 버튼이 양식을 제출하는 데 사용된다면, 이 컨트롤은 그 값을 제출하지 않습니다. 대신 이미지에 클릭된 X와 Y 좌표가 제출됩니다(좌표는 이미지에 상대적으로, 즉 이미지의 왼쪽 상단 모서리는 좌표 (0, 0)을 나타냅니다). 좌표는 두 개의 키/값 쌍으로 전송됩니다.

- X 값 키는 [`name`](/ko/docs/Web/HTML/Element/input#name) 속성의 값 뒤에 문자열 "_.x_"가 붙은 것입니다.
- Y 값 키는 [`name`](/ko/docs/Web/HTML/Element/input#name) 속성의 값 뒤에 문자열 "_.y_"가 붙은 것입니다.

예를 들어 이미지의 좌표 (123, 456)에서 클릭하여 `get` 방식으로 제출하면, URL에 다음과 같이 값이 추가되어 표시됩니다.

```url
http://foo.com?pos.x=123&pos.y=456
```

이것은 "핫 맵"을 구성하는 매우 편리한 방법입니다. 이러한 값들이 어떻게 전송되고 검색되는지에 대한 자세한 내용은 [양식 데이터 보내기](/ko/docs/Learn/Forms/Sending_and_retrieving_form_data) 글에서 확인할 수 있습니다.

## 파일 선택기

마지막으로 초기 HTML에서 우리에게 제공된 `<input>` 유형이 하나 있습니다. 파일 입력 유형. 양식은 서버로 파일을 전송할 수 있습니다. 파일 선택기 위젯은 전송할 하나 이상의 파일을 선택하는 데 사용될 수 있습니다.

{{HTMLElement("input")}} 요소의 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성 값을 `file`로 설정하여 [파일 선택기 위젯](/ko/docs/Web/HTML/Reference/Elements/input/file)을 만듭니다. [`accept`](/ko/docs/Web/HTML/Element/input#accept) 속성을 사용하여 허용되는 파일의 유형을 제한할 수 있습니다. 또한 사용자가 여러 파일을 선택하도록 허용하려면 [`multiple`](/ko/docs/Web/HTML/Element/input#multiple) 속성을 추가하면 됩니다.

### 예시

이 예시에서는 그래픽 이미지 파일을 요청하는 파일 선택기를 생성합니다. 이 경우 사용자는 여러 파일을 선택할 수 있습니다.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

일부 모바일 기기에서는 `accept` 속성에 캡처 정보를 추가함으로써 파일 선택기가 기기의 카메라와 마이크로 직접 캡처한 사진, 비디오 및 오디오에 액세스 할 수 있습니다.

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

## 공통 속성

폼 컨트롤을 정의하는데 사용되는 많은 요소들은 고유한 특정 속성들을 가지고 있습니다. 그러나 모든 폼 요소에 공통으로 적용되는 속성들이 있습니다. 아래에는 이미 알고 있는 것들을 포함한 그러한 공통 속성들의 목록이 있습니다.

| 속성 이름                                                   | 기본 값 | 설명                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [autofocus](/ko/docs/Web/HTML/Global_attributes/autofocus)  | false   | 이 부울 속성은 페이지가 로드될 때 요소가 자동으로 입력 포커스를 가져야 함을 지정합니다. 문서에 이 속성을 지정할 수 있는 폼 관련 요소는 하나뿐입니다.                                                                                                          |
| [disabled](/ko/docs/Web/HTML/Reference/Attributes/disabled) | false   | 이 부울 속성은 사용자가 요소와 상호 작용할 수 없음을 나타냅니다. 이 속성이 지정되지 않으면 요소는 포함하는 요소, 예를 들어, {{HTMLElement("fieldset")}}의 설정을 상속합니다. `disabled` 속성이 설정된 포함 요소가 없으면 요소는 활성화됩니다.                 |
| [form](/ko/docs/Web/HTML/Reference/Elements/form)           |         | 위젯이 연결된 <code>&#x3C;form></code> 요소, 중첩되어 있지 않은 경우에 사용됩니다. 속성의 값은 같은 문서의 {{HTMLElement("form")}} 요소의 <code>id</code> 속성이어야 합니다. 이를 통해 폼 컨트롤을 다른 폼 요소 내부에 있더라도 해당 폼과 연결할 수 있습니다. |
| [name](/ko/docs/Web/HTML/Element/input#name)                |         | 요소의 이름입니다. 이것은 폼 데이터와 함께 제출됩니다.                                                                                                                                                                                                        |
| [value](/ko/docs/Web/HTML/Element/input#value)              |         | 요소의 초기 값입니다.                                                                                                                                                                                                                                         |

## 실력을 시험해 보세요!

이 글의 끝에 도달했지만, 가장 중요한 정보를 기억하고 있나요? 이 정보를 기억하고 있는지 확인하기 위한 추가 테스트를 찾을 수 있습니다 — [지식 테스트: 기본 컨트롤](/ko/docs/Learn/Forms/Test_your_skills:_Basic_controls)를 참조하세요.

## 요약

이 글은 모든 브라우저에서 잘 지원되는 HTML 초기 시절에 도입된 원래의 입력 유형들을 다루었습니다. 다음 섹션에서는 `type` 속성의 더 현대적인 값들을 살펴볼 것입니다.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### 고급 주제

- [How to build custom form controls](/ko/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Sending forms through JavaScript](/ko/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Property compatibility table for form widgets](/ko/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
