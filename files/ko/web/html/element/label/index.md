---
title: <label>
slug: Web/HTML/Element/label
---

{{HTMLSidebar}}

**HTML `<label>` 요소**는 사용자 인터페이스 항목의 설명을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/label.html", "tabbed-shorter")}}

`<label>` 을 {{htmlelement("input")}} 요소와 연결하면 몇 가지 이점이 있습니다:

- label 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐만 아니라 프로그래밍적으로도 관련이 있습니다. 예를 들어, 화면리더기(screenreader) 는 폼 입력(form input)에서 label 을 읽어서 보조기술(assistive technology) 사용자가 입력해야하는 텍스트가 무엇인지 더 쉽게 이해할 수 있게 합니다.
- 관련 label 을 클릭해서 input 자체에 초점을 맞추거나 활성화를 시킬 수 있습니다. (활성되어서)늘어난 누를 수 있는 영역(hit area)은 터치스크린 사용자를 포함해 입력하려하는 모든 사람에게 이점을 줍니다.

`<label>` 을 `<input>` 요소와 연관시키려면, `<input>` 에 `id` 속성을 넣어야합니다. 그런 다음 `<label>` 에 `id` 와 같은 값의 `for` 속성을 넣어야합니다.

또는, `<label>` 안에 `<input>` 을 중첩시킬 수 있습니다. 이 경우 연관이 암시적이므로 `for` 및 `id`속성이 필요없습니다.

```html
<label
  >Do you like peas?
  <input type="checkbox" name="peas" />
</label>
```

다른 사용법 메모:

- label 이 붙여진 양식 컨트롤(form control) 은 _레이블된 제어 labeled control_ 라고 불립니다. 하나의 input 은 여러 label들에 연관되어있습니다.
- 연관된 양식 컨트롤(form control) 이 있는 `<label>` 이 클릭되거나 터치되면, 이 label의 `click` 이벤트는 연관된 control 도 동작시킵니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("for")}}

  - : 같은 문서 내의 `<label>` 요소로서, [레이블 가능](/ko/docs/Web/Guide/HTML/Content_categories#레이블_가능)한 form-related 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id). 레이블 가능한 요소일 때, `for` 속성값과 일치하는 `id`를 가진 문서의 첫 번째 요소는 그 label 요소의 *라벨 제어(labeled control)*라고 합니다. label을 지정할 수 없으면 `for` 속성은 영향을 미치지 않습니다. 문서의 뒷부분에 `id` 값과 일치하는 다른 요소들은 무시합니다.

    > **참고:** `<label>` 요소는 `for` 속성과 제어control 요소를 동시에 가질 수 있습니다. 이 때 `for` 속성은 포함되어있는 제어control 요소를 가리키고 있어야 합니다.

- {{htmlattrdef("form")}}
  - : label과 연관된 {{htmlelement ( "form")}} 요소(_양식 소유자 form owner_). 이 속성이 지정된 경우, 이 속성 값은 동일한 문서의 {{HTMLElement ( "form")}} 요소의 id입니다. 따라서 label 요소를 양식 요소의 자손이 아닌 문서의 어느 곳에나 배치 할 수 있습니다.

## CSS 스타일링

`<label>` 요소에 대한 특별한 스타일 고려 사항은 없습니다. 구조적으로 단순한 인라인 요소이므로 {{htmlelement ( "span")}} 또는 {{htmlelement ( "a")}} 요소와 같은 방식으로 스타일을 지정할 수 있습니다 }}. 텍스트를 읽기 어렵게하지 않는 한 원하는 방식으로 스타일을 적용 할 수 있습니다.

## 예제

### 간단한 label 예제

```html
<label>Click me <input type="text" /></label>
```

{{EmbedLiveSample('간단한_label_예제', '200', '50', '')}}

### "for" 속성 예제

```html
<label for="username">Click me</label> <input type="text" id="username" />
```

{{EmbedLiveSample('for_속성_예제', '200', '50', '')}}

## 접근성 고려사항

### 인터랙티브 콘텐츠

Don't place interactive elements such as {{HTMLElement("a", "anchors")}} or {{HTMLElement("button", "buttons")}} inside a `label`. Doing so makes it difficult for people to activate the form input associated with the `label`.

`label` 안에 {{HTMLElement ( "a", "anchors")}} 또는 {{HTMLElement ( "button", "buttons")}}와 같은 인터랙티브 요소를 배치하지 마십시오. 그렇게하면 사람들이 `label`과 관련된 양식을 입력하기 어렵습니다.

#### 하지 마세요

```html example-bad
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

#### 이렇게 하세요

```html example-good
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions
</label>
<p>
  <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
```

### 제목

제목은 일반적으로 [탐색 목적](/ko/docs/Web/HTML/Element/Heading_Elements#navigation)의 보조 도구로 사용되므로 `<label>` 내에 [제목 요소](/ko/docs/Web/HTML/Element/Heading_Elements)를 배치하면 많은 종류의 보조 기술을 방해합니다. label의 텍스트를 시각적으로 조정해야하는 경우, `<label>` 요소에 적용된 CSS 클래스를 사용하십시오.

[양식(form)](/ko/docs/Web/HTML/Element/form) 또는 양식의 섹션에 제목이 필요한 경우 {{HTMLElement ( "fieldset")}} 내에 배치 된 {{HTMLElement ( "legend")}} 요소를 사용하십시오.

#### 하지 마세요

```html example-bad
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

#### 이렇게 하세요

```html example-good
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### 버튼

`type="button"`선언과 유효한 `value` 속성을 가진 {{HTMLElement ( "input")}} 요소에는 연관된 레이블이 필요하지 않습니다. 그렇게하면 보조 기술이 버튼 입력을 구문 분석하는 방법을 실제로 방해 할 수 있습니다. {{HTMLElement ( "button")}} 요소에도 동일하게 적용됩니다.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >. 단, 다른 <code>&#x3C;label></code> 요소는 자손으로 올 수 없습니다.
        레이블을 지정한 컨트롤 외의 다른
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#레이블_가능"
          >레이블 가능</a
        >
        요소는 자손으로 사용할 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLLabelElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
