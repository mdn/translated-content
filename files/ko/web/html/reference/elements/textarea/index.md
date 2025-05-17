---

title: "<textarea>: 텍스트 영역 요소"
slug: Web/HTML/Reference/Elements/textarea
page-type: html-element
browser-compat: html.elements.textarea
--------------------------------------

{{HTMLSidebar}}

**`<textarea>`** [HTML](/en-US/docs/Web/HTML) 요소는 여러 줄의 일반 텍스트를 입력할 수 있는 편집 컨트롤을 나타냅니다. 예를 들어 리뷰의 댓글이나 피드백 폼과 같이 사용자가 많은 양의 자유 형식 텍스트를 입력할 수 있도록 할 때 유용합니다.

{{InteractiveExample("HTML Demo: \<textarea>", "tabbed-standard")}}

```html interactive-example
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

```css interactive-example
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

위의 예시는 `<textarea>`의 여러 기능을 보여줍니다:

* 접근성을 위해 `<textarea>`를 {{htmlelement("label")}} 요소와 연결할 수 있도록 하는 `id` 속성
* 폼이 제출될 때 서버로 전송되는 관련 데이터 항목의 이름을 설정하는 `name` 속성
* `<textarea>`가 차지할 정확한 크기를 지정할 수 있는 `rows` 및 `cols` 속성. 브라우저 기본값이 다를 수 있으므로 이를 설정하는 것이 일관성 유지에 좋습니다.
* `<textarea>` 요소는 HTML과 JavaScript 컨텍스트에서 내용을 다르게 지정합니다:

  * HTML에서는 `<textarea>`의 초기 콘텐츠를 `value` 속성이 아닌 여는 태그와 닫는 태그 사이에 작성합니다.
  * JavaScript에서는 `<textarea>` 요소에 [`value`](/en-US/docs/Web/API/HTMLTextAreaElement/value) 속성을 사용하여 현재 콘텐츠를 가져오거나 설정하고, [`defaultValue`](/en-US/docs/Web/API/HTMLTextAreaElement/defaultValue)로 초기 값을 가져오거나 설정합니다 (HTML 요소의 텍스트 콘텐츠에 해당).

`<textarea>` 요소는 `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, `required`와 같은 여러 `<input>` 관련 속성들도 사용할 수 있습니다.

## 속성

이 요소는 [전역 속성](/en-US/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

- [`autocapitalize`](/en-US/docs/Web/HTML/Reference/Global_attributes/autocapitalize)

  - : 입력된 텍스트가 자동으로 대문자로 변환될지 여부와 방식을 제어합니다.

- [`autocomplete`](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : 입력된 텍스트를 브라우저가 자동으로 완성할 수 있을지를 제어합니다. 가능한 값:

    - `off`: 사용자가 매번 직접 값을 입력해야 하며, 브라우저는 자동 완성을 수행하지 않습니다.
    - `on`: 브라우저가 이전 사용 기록을 기반으로 값을 자동 완성할 수 있습니다.
    - [`<token-list>`](/en-US/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens): 공백으로 구분된 자동 완성 세부 정보 토큰들의 정렬된 집합으로, 섹션 토큰, 청구/배송 그룹 토큰, 수신자 유형 토큰 등이 앞에 올 수 있습니다.

    `autocomplete` 속성이 지정되지 않은 `<textarea>`는 해당 요소의 폼 소유자가 설정한 `autocomplete` 값(`on` 또는 `off`)을 상속받습니다. 폼 소유자는 해당 `<textarea>` 요소가 속한 {{HTMLElement("form")}} 요소이거나, `form` 속성으로 지정된 `id`를 가진 요소입니다. 자세한 내용은 {{HTMLElement("form")}}의 [`autocomplete`](/en-US/docs/Web/HTML/Reference/Elements/form#autocomplete) 속성을 참조하세요.

- [`autocorrect`](/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect)

  - : 사용자가 텍스트를 편집할 때 자동 맞춤법 검사 및 텍스트 처리를 활성화할지 여부를 제어합니다.
    허용되는 값:

    - `on`: 자동 맞춤법 검사 및 텍스트 교정을 활성화합니다.
    - `off`: 자동 맞춤법 검사 및 텍스트 교정을 비활성화합니다.

- [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus)

  - : 페이지가 로드될 때 해당 폼 컨트롤이 자동으로 포커스를 가지도록 지정하는 불리언 속성입니다. 문서 내 하나의 요소만 이 속성을 가질 수 있습니다.

- `cols`

  - : 텍스트 컨트롤의 가시 너비를 평균 문자 너비 기준으로 지정합니다. 양의 정수여야 하며, 지정하지 않으면 기본값은 `20`입니다.

- [`dirname`](/en-US/docs/Web/HTML/Reference/Attributes/dirname)

  - : 요소 콘텐츠의 텍스트 방향성을 나타냅니다. 자세한 내용은 [`dirname` 속성](/en-US/docs/Web/HTML/Reference/Attributes/dirname)을 참조하세요.

- [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled)

  - : 사용자가 이 컨트롤과 상호작용할 수 없도록 하는 불리언 속성입니다. 지정되지 않으면, 예를 들어 {{HTMLElement("fieldset")}} 같은 상위 요소의 설정을 상속받습니다. 포함하는 요소가 없으면 기본적으로 활성화 상태입니다.

- `form`

  - : `<textarea>` 요소가 연결된 폼 요소(`form owner`)를 지정합니다. 값은 동일 문서 내의 폼 요소 `id`여야 합니다. 이 속성이 없으면 `<textarea>`는 폼 요소의 자식이어야 합니다. 이 속성을 통해 문서 내 어디든 `<textarea>`를 배치할 수 있습니다.

- [`maxlength`](/en-US/docs/Web/HTML/Reference/Attributes/maxlength)

  - : 사용자가 입력할 수 있는 최대 문자열 길이(UTF-16 코드 단위)입니다. 지정하지 않으면 문자 수 제한이 없습니다.

- [`minlength`](/en-US/docs/Web/HTML/Reference/Attributes/minlength)

  - : 사용자가 입력해야 하는 최소 문자열 길이(UTF-16 코드 단위)입니다.

- `name`

  - : 컨트롤의 이름을 지정합니다.

- [`placeholder`](/en-US/docs/Web/HTML/Reference/Attributes/placeholder)

  - : 사용자가 컨트롤에 입력할 수 있는 데이터 유형에 대한 힌트를 제공합니다. 줄바꿈 문자는 힌트 렌더링 시 줄바꿈으로 처리되어야 합니다.

  > \[!NOTE]
  > 플레이스홀더는 입력 예시를 제공하는 용도로만 사용해야 하며, 해당 입력에 연결된 {{HTMLElement("label")}} 요소를 대체해서는 안 됩니다. 자세한 내용은 [`<input>` 라벨](/en-US/docs/Web/HTML/Reference/Elements/input#labels)을 참조하세요.

- [`readonly`](/en-US/docs/Web/HTML/Reference/Attributes/readonly)

  - : 사용자가 컨트롤의 값을 수정할 수 없도록 지정합니다. 단, 클릭하거나 선택은 가능하며, 값은 폼 제출 시 포함됩니다.

- [`required`](/en-US/docs/Web/HTML/Reference/Attributes/required)

  - : 폼을 제출하기 전에 반드시 값을 입력해야 함을 지정합니다.

- `rows`

  - : 컨트롤에 보이는 텍스트 줄 수를 지정합니다. 양의 정수여야 하며, 지정하지 않으면 기본값은 2입니다.

- [`spellcheck`](/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck)

  - : `<textarea>`가 브라우저나 운영체제의 맞춤법 검사 대상인지 지정합니다. 값은 다음 중 하나일 수 있습니다:

    - `true`: 철자 및 문법 검사 필요
    - `default`: 기본 동작 따름 (예: 상위 요소의 설정 상속)
    - `false`: 철자 검사 안 함

- `wrap`

  - : 폼 제출 시 값이 어떻게 줄바꿈 될지를 지정합니다. 가능한 값은 다음과 같습니다:

    - `hard`: 컨트롤 너비를 넘는 줄에 대해 브라우저가 자동으로 줄바꿈(CR+LF)을 삽입합니다. 이 경우 `cols` 속성이 반드시 지정되어야 합니다.
    - `soft`: 입력된 줄바꿈은 CR+LF로 처리되며, 추가 줄바꿈은 삽입되지 않습니다.
    - `off` {{non-standard\_inline}}: `soft`와 같지만 `white-space: pre`와 같은 시각적 효과가 적용되어, 줄이 `cols`를 넘어가도 줄바꿈되지 않고 수평 스크롤이 생깁니다.

    이 속성이 지정되지 않으면 기본값은 `soft`입니다.

## CSS로 스타일링하기

`<textarea>`는 {{ glossary("replaced elements", "치환 요소") }}입니다 — 즉, 이미지처럼 고유한 크기를 가지는 요소입니다. 기본적으로 이 요소의 {{cssxref("display")}} 값은 `inline-block`입니다. 다른 폼 요소들에 비해 상대적으로 스타일링이 쉽고, 박스 모델, 폰트, 색 구성 등을 일반적인 CSS로 쉽게 조정할 수 있습니다.

[HTML 폼 스타일링](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)에서는 `<textarea>`를 스타일링하는 유용한 팁들을 제공합니다.

### 기준선 불일치

HTML 명세는 `<textarea>`의 기준선 위치를 정의하지 않기 때문에 브라우저마다 서로 다른 위치를 기준선으로 설정할 수 있습니다. Gecko(Firefox 엔진)에서는 `<textarea>`의 첫 번째 줄 기준선이 기준이 되고, 다른 브라우저에서는 요소 박스의 하단을 기준으로 설정할 수 있습니다. 따라서 {{cssxref("vertical-align", "vertical-align: baseline")}}을 사용하지 않는 것이 좋습니다. 동작이 예측 불가능하기 때문입니다.

### 텍스트 영역 크기 조절 허용 여부

대부분의 브라우저에서 `<textarea>`는 사용자가 크기를 조절할 수 있습니다 — 우측 하단에 드래그 가능한 핸들이 나타납니다. 이 동작은 CSS의 {{ cssxref("resize") }} 속성으로 제어할 수 있습니다. 기본값은 크기 조절 가능이지만, `resize: none`을 사용하면 명시적으로 크기 조절을 비활성화할 수 있습니다:

```css
textarea {
  resize: none;
}
```

### 유효한 값과 유효하지 않은 값 스타일링하기

`<textarea>` 요소의 값이 유효한 경우(`minlength`, `maxlength`, `required` 등의 기준 충족)와 유효하지 않은 경우를 구분하여 스타일링할 수 있습니다. 이를 위해 {{cssxref("\:valid")}} 및 {{cssxref("\:invalid")}} 가상 클래스를 사용할 수 있습니다. 예를 들어, 유효하지 않으면 빨간색 테두리, 유효하면 초록색 테두리를 표시하려면 다음과 같이 작성할 수 있습니다:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## 예제

### 기본 예제

다음은 행(row)과 열(col)의 수가 지정된 텍스트 영역입니다. 기본 내용이 포함되어 있으며, 최대 크기를 제한하는 CSS 스타일도 포함되어 있습니다.

```html
<textarea name="textarea" rows="5" cols="15">여기에 작성하세요</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 결과

{{EmbedLiveSample('Basic\_example')}}

### "minlength" 및 "maxlength" 사용 예제

이 예제는 최소 10자, 최대 20자까지 입력 가능한 텍스트 영역을 보여줍니다.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
여기에 작성하세요…
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 결과

{{EmbedLiveSample('Example using "minlength" and "maxlength"')}}

> 참고: `minlength`만 설정된 경우에도 사용자가 문자를 삭제하여 최소 길이보다 적게 입력할 수 있습니다. 단, `required` 속성도 함께 설정되어 있지 않으면 빈 `<textarea>`도 유효한 입력으로 간주됩니다.

### "placeholder" 사용 예제

다음은 플레이스홀더 텍스트가 설정된 예제입니다. 입력을 시작하면 해당 텍스트는 사라집니다.

```html
<textarea name="textarea" rows="5" cols="30" placeholder="댓글을 입력하세요"></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 결과

{{EmbedLiveSample('Example using "placeholder"')}}

> \[!NOTE]
> 플레이스홀더는 입력 예시를 보여주는 용도로만 사용되어야 하며, 반드시 {{HTMLElement("label")}} 요소와 함께 사용되어야 합니다. 자세한 내용은 [`<input>` 라벨](/en-US/docs/Web/HTML/Reference/Elements/input#labels)을 참조하세요.

### disabled 및 readonly 텍스트 영역 예제

다음 예제는 `readonly`와 `disabled` 속성이 각각 적용된 두 개의 `<textarea>`를 보여줍니다. 둘 다 내용 편집은 불가능하지만, `readonly` 요소는 포커스가 가능하며 폼 제출 시 값이 포함됩니다. 반면 `disabled` 요소는 포커스할 수 없고, 제출 시 값도 포함되지 않습니다.

```html
<textarea name="textarea" rows="5" cols="30" readonly>
읽기 전용 텍스트 영역입니다.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
비활성화된 텍스트 영역입니다.
</textarea>
```

```css
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### 결과

{{EmbedLiveSample('disabled\_and\_readonly\_text\_areas', '', '230')}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories">콘텐츠 분류</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">플로우 콘텐츠</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content">구문 콘텐츠</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content">인터랙티브 콘텐츠</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#listed">리스트 가능</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#labelable">라벨 가능</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#resettable">리셋 가능</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#submittable">제출 가능</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#form-associated_content">폼 연관 요소</a>
      </td>
    </tr>
    <tr>
      <th scope="row">허용 콘텐츠</th>
      <td>텍스트</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>시작 및 종료 태그 모두 필수</td>
    </tr>
    <tr>
      <th scope="row">허용 부모 요소</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content">구문 콘텐츠</a>를 허용하는 모든 요소
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">허용된 ARIA 역할</th>
      <td>지정할 수 있는 <code>role</code> 없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

* 다른 폼 관련 요소:

  * {{ HTMLElement("form") }}
  * {{ HTMLElement("button") }}
  * {{ HTMLElement("datalist") }}
  * {{ HTMLElement("legend") }}
  * {{ HTMLElement("label") }}
  * {{ HTMLElement("select") }}
  * {{ HTMLElement("optgroup") }}
  * {{ HTMLElement("option") }}
  * {{ HTMLElement("input") }}
  * {{ HTMLElement("fieldset") }}
  * {{ HTMLElement("output") }}
  * {{ HTMLElement("progress") }}
  * {{ HTMLElement("meter") }}
