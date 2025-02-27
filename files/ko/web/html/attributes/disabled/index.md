---
title: HTML disabled 속성
slug: Web/HTML/Attributes/disabled
l10n:
  sourceCommit: db32c2f103885a65715e2cce48bda44be03f44f7
---

{{HTMLSidebar}}

참과 거짓 중 하나의 값을 갖는 **`disabled`** 속성이 있을 경우 해당 요소는 수정하거나 포커스를 맞출 수 없고, 폼을 통해 제출될 수도 없습니다. 사용자는 컨트롤이나 폼 컨트롤의 자손 요소들을 편집하거나 포커스할 수 없습니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-disabled.html", "tabbed-standard")}}

## 개요

`disabled` 속성이 폼 컨트롤 요소에 지정되면 해당 요소와 하위 폼 컨트롤 요소들은 제약 조건 검증에 참여하지 않습니다. 브라우저는 종종 해당 컨트롤들을 회색으로 나타내고 마우스 클릭이나 포커스와 관련된 브라우징 이벤트를 수신하지 않습니다.

`disabled` 속성은 {{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("input")}} 에서 지원됩니다.

참과 거짓 중 하나의 값을 갖는 비활성화 속성은 사용자가 컨트롤 또는 하위 컨트롤들과 상호작용할 수 없음을 의미합니다. 이 속성이 지정되지 않은 경우 컨트롤은 상위 요소, 예를 들어 `fieldset`에서 설정을 상속받습니다. `disabled` 속성이 설정된 상위 요소가 없고, 컨트롤도 해당 속성을 갖지 않는다면 컨트롤이 활성화됩니다. {{ HTMLElement("optgroup") }}에 선언되었을 경우 선택 요소와는 여전히 상호작용이 가능하지만 (다른 요소들은 비활성화되지 않았을 때), 옵션 그룹 내의 어떤 항목도 선택할 수 없습니다.

> **참고:** {{ HTMLElement("fieldset") }} 이 비활성화된 경우 {{ HTMLElement("legend") }} 내의 폼 컨트롤을 제외한 모든 하위 폼 컨트롤들이 비활성화됩니다.

지원하는 요소에 `disabled` 속성이 적용되면 {{cssxref(":disabled")}} 의사 클래스가 해당 요소에 적용됩니다. 반대로 `disabled` 속성을 지원하지만 속성이 설정되지 않은 요소는 {{cssxref(":enabled")}} 의사 클래스가 적용됩니다.

이 불리언 속성은 사용자가 버튼과 상호작용하는 것을 방지합니다. 해당 속성이 지정되지 않은 경우에도 {{htmlelement('fieldset')}} 과 같은 상위 요소에 의해 버튼이 여전히 비활성화된 상태일 수도 있습니다. 만약 `disabled` 속성이 지정된 상위 요소가 없다면 버튼이 활성화됩니다.

Firefox는 다른 브라우저들과 달리 페이지를 불러올 때마다 {{htmlelement('button')}} 의 동적 비활성화 상태를 유지합니다. 이 기능을 제어하기 위해서는 [`autocomplete`](/ko/docs/Web/HTML/Attributes/autocomplete) 속성을 사용합니다.

### 속성 상호작용

`disabled`와 [`readonly`](/ko/docs/Web/HTML/Attributes/readonly)의 차이는 읽기 전용으로 지정된 컨트롤은 여전히 동작하고 포커스가 가능하다는 반면, 비활성화된 컨트롤은 포커스를 받거나 폼과 함께 제출되지 않고 일반적으로 활성화될 때까지 컨트롤로서 동작하지 않는다는 것입니다.

비활성화된 필드는 그 값이 변경될 수 없기 때문에, [`required`](/ko/docs/Web/HTML/Attributes/required)는 `disabled` 속성이 지정된 입력 필드에 아무 영향도 미치지 않습니다. 또한 요소들이 변경 불가능하게 되므로 [`pattern`](/ko/docs/Web/HTML/Attributes/pattern) 과 같은 대부분의 다른 속성들도 컨트롤이 활성화될 때까지 영향을 미치지 않습니다.

> **참고:** `disabled` 속성이 지정된 입력 필드에는 `required` 속성을 사용할 수 없습니다.

### 유용성

브라우저는 비활성화된 폼 컨트롤들을 회색으로 표시합니다. 비활성화된 폼 컨트롤은 변경되거나 폼과 함께 제출되지 않으며, 마우스 클릭이나 포커스와 관련된 브라우징 이벤트를 수신하지 않습니다.

지원하는 요소에 존재하는 경우 `{{cssxref(':disabled')}}` 의사 클래스가 적용됩니다. 해당 속성이 지정되지 않았을 경우에는 `{{cssxref(':enabled')}}` 의사 클래스가 적용됩니다. 요소가 비활성화 속성을 지원하지 않는 경우에는 해당 속성이 어떤 효과도 갖지 않으며, `:disabled` 와 `:enabled` 의사 클래스도 적용되지 않습니다.

### 제약 조건 검증

요소가 `disabled` 상태일 경우 해당 요소의 값은 포커스를 받거나 사용자에 의해 값이 변경될 수 없으며, 제약 조건 검증에도 참여하지 않습니다.

## 예시

많은 브라우저들은 기본적으로 폼 컨트롤이 비활성화되면 이를 더 밝은 회색의 색상으로 표시합니다. 다음은 비활성화된 체크박스, 라디오 버튼, {{ HTMLElement("option") }}, {{ HTMLElement("optgroup") }}의 예시이며, 상위 `{{ HTMLElement("fieldset")}}` 요소에 적용된 disabled 속성에 의해 비활성화된 일부 폼 컨트롤의 예시입니다. {{ HTMLElement("option") }}들은 비활성화되지만 {{ HTMLElement("select") }}은 그렇지 않습니다. {{ HTMLElement("select") }} 전체를 비활성화하기 위해서는 하위 요소가 아닌 해당 요소에 속성을 추가해야 합니다.

```html
<fieldset>
  <legend>체크박스</legend>
  <p>
    <label> <input type="checkbox" name="chbox" value="regular" /> 일반 </label>
  </p>
  <p>
    <label>
      <input type="checkbox" name="chbox" value="disabled" disabled /> 비활성
    </label>
  </p>
</fieldset>

<fieldset>
  <legend>라디오 버튼</legend>
  <p>
    <label> <input type="radio" name="radio" value="regular" /> 일반 </label>
  </p>
  <p>
    <label>
      <input type="radio" name="radio" value="disabled" disabled /> 비활성
    </label>
  </p>
</fieldset>

<p>
  <label
    >옵션 선택:
    <select>
      <optgroup label="그룹 1">
        <option>옵션 1.1</option>
      </optgroup>
      <optgroup label="그룹 2">
        <option>옵션 2.1</option>
        <option disabled>옵션 2.2</option>
        <option>옵션 2.3</option>
      </optgroup>
      <optgroup label="그룹 3" disabled>
        <option>비활성 3.1</option>
        <option>비활성 3.2</option>
        <option>비활성 3.3</option>
      </optgroup>
    </select>
  </label>
</p>

<fieldset disabled>
  <legend>비활성 fieldset</legend>
  <p>
    <label>
      이름: <input type="radio" name="radio" value="regular" /> 일반
    </label>
  </p>
  <p>
    <label>숫자: <input type="number" /></label>
  </p>
</fieldset>
```

{{EmbedLiveSample('Examples', 500, 450)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref(':disabled')}} and {{cssxref(':enabled')}}
