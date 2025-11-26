---
title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
original_slug: Web/HTML/Element/input/reset
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

**`reset`** 유형의 {{HTMLElement("input")}} 요소는 버튼으로 렌더링되며, 기본 {{domxref("Element/click_event", "click")}} 이벤트 처리기가 설정되어 있어 폼 내 모든 입력 값을 초기 값으로 초기화합니다.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;reset&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <div class="controls">
    <label for="id">User ID:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Reset" />
    <input type="submit" value="Submit" />
  </div>
</form>
```

```css interactive-example
.controls {
  padding-top: 1rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr;
  gap: 0.7rem;
}

label {
  font-size: 0.8rem;
  justify-self: end;
}

input[type="reset"],
input[type="submit"] {
  width: 5rem;
  justify-self: end;
}

input[type="reset"] {
  grid-column: 2;
  grid-row: 2;
}

input[type="submit"] {
  grid-column: 2;
  grid-row: 3;
}
```

> [!NOTE]
> 폼에 초기화 버튼을 포함하는 것은 일반적으로 피하는 것이 좋습니다. 이 버튼은 대부분 유용하지 않으며, 오히려 실수로 클릭했을 때 사용자가 불편함을 겪는 경우가 더 많습니다. 특히, 종종 사용자가 클릭하려던 [제출 버튼](/ko/docs/Web/HTML/Element/input/submit)을 잘못 눌러서 문제가 발생하곤 합니다.

## 값

`<input type="reset">` 요소의 [`value`](/ko/docs/Web/HTML/Element/input#value) 속성은 버튼의 레이블로 사용되는 문자열을 포함하며, 이를 통해 버튼에 {{glossary("accessible description")}} 을 제공합니다. `reset`과 같은 버튼은 그렇지 않으면 값이 없습니다.

### 값 속성 설정

```html
<input type="reset" value="Reset the form" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### 값 속성 생략

`value`를 지정하지 않으면 기본 레이블이 있는 버튼이 생성됩니다(일반적으로 "Reset"이지만, 이는 {{Glossary("user agent", "사용자 에이전트")}}에 따라 달라질 수 있습니다).

```html
<input type="reset" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## 초기화 버튼 사용

`<input type="reset">` 버튼은 폼을 초기화하는 데 사용됩니다. 커스텀 버튼을 만들고 JavaScript를 사용하여 동작을 사용자화하려면 [`<input type="button">`](/ko/docs/Web/HTML/Reference/Elements/input/button) 또는 더 나아가 {{htmlelement("button")}} 요소를 사용해야 합니다.

### 기본 초기화 버튼

기본 초기화 버튼을 생성하는 것부터 시작해 봅시다.

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" />
  </div>
</form>
```

이렇게 렌더링됩니다.

{{EmbedLiveSample("A_basic_reset_button", 650, 100)}}

텍스트 필드에 텍스트를 입력한 후 초기화 버튼을 눌러 보세요.

### 초기화 키보드 단축키 추가

의미 있는 모든 {{HTMLElement("input")}} 요소와 마찬가지로 초기화 버튼에 키보드 단축키를 추가하려면, [`accesskey`](/ko/docs/Web/HTML/Reference/Global_attributes/accesskey) 전역 특성을 사용하면 됩니다.

이 예제에서는 <kbd>r</kbd>이 접근 키로 명세되었습니다. 브라우저/OS 조합에 맞는 특정 수정 키와 함께 <kbd>r</kbd>을 눌러야 합니다. 자세한 내용은 [`accesskey`](/ko/docs/Web/HTML/Reference/Global_attributes/accesskey)에서 유용한 목록을 확인할 수 있습니다.

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Reset the form" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

위 예제의 문제는 사용자가 접근 키가 무엇인지 알 수 없다는 점입니다! 특히 수정 키의 충돌을 피하기 위해 일반적이지 않은 키로 설정하는 경우가 많기 때문에 문제가 더욱 두드러집니다.

사이트를 만들 때는 이 정보를 사이트 디자인에 방해되지 않는 방식으로 제공해야 합니다 (예: 사이트 접근 키에 대한 정보를 제공하는 쉽게 접근할 수 있는 링크를 제공하는 방식). 버튼에 툴팁을 추가하는 것도 도움이 될 수 있지만, [`title`](/ko/docs/Web/HTML/Reference/Global_attributes/title) 속성을 사용하는 것처럼 접근성 측면에서 완전한 해결책은 아닙니다.

### 초기화 버튼 비활성화 및 활성화

초기화 버튼을 비활성화하려면, 그 위에 [`disabled`](/ko/docs/Web/HTML/Element/input#disabled) 속성을 지정하면 됩니다.

```html
<input type="reset" value="Disabled" disabled />
```

버튼은 실행 중에 `disabled`를 `true` 또는 `false`로 설정하여 활성화하거나 비활성화할 수 있습니다. JavaScript에서는 `btn.disabled = true` 또는 `btn.disabled = false`와 같이 작성합니다.

> [!NOTE]
> 버튼을 활성화하거나 비활성화하는 방법에 대한 더 많은 아이디어는 [`<input type="button">`](/ko/docs/Web/HTML/Reference/Elements/input/button#disabling_and_enabling_a_button) 페이지에서 확인할 수 있습니다.

## 유효성 검사

버튼은 제한할 값이 없으므로 유효성 검사의 대상이 아닙니다.

## 예제

초기화 버튼에 대한 추가 예제는 없습니다.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">값</a></strong></td>
      <td>버튼의 레이블로 사용되는 문자열</td>
    </tr>
    <tr>
      <td><strong>메서드</strong></td>
      <td>없음</td>
    </tr>
    <tr>
      <td><strong>암시적 ARIA 역할</strong></td>
      <td><a href="/ko/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
    <tr>
      <td><strong>이벤트</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>지원되는 일반 속성</strong></td>
      <td>
        <a href="/ko/docs/Web/HTML/Element/input#type"><code>type</code></a>와
        <a href="/ko/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>DOM 인터페이스</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>IDL 속성</strong></td>
      <td><code>value</code></td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("input")}}와 이를 구현하는 {{domxref("HTMLInputElement")}} 인터페이스
- [폼과 버튼](/ko/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#actual_buttons)
- [HTML 폼](/ko/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("button")}} 요소
