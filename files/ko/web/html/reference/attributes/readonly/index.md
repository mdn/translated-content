---
title: HTML readonly 속성
short-title: readonly
slug: Web/HTML/Reference/Attributes/readonly
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{HTMLSidebar}}

**`readonly`** 는 불리언 속성으로, 이 속성이 있는 경우 해당 요소는 변경 불가능해지며, 이는 사용자가 편집할 수 없음을 의미합니다.

{{InteractiveExample("HTML Demo: readonly", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input id="firstName" name="firstName" type="text" value="Adam" />

<label for="age">Age:</label>
<input id="age" name="age" type="number" value="42" readonly />

<label for="hobbies">Hobbies:</label>
<textarea id="hobbies" name="hobbies" readonly>Baseball</textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:read-only,
textarea:read-only {
  background-color: silver;
}
```

## 개요

만약, 입력 요소에 `readonly` 속성이 있는 경우, 사용자가 입력칸을 편집할 수 없으므로 해당 요소는 유효성 검사에 참여하지 않습니다.

`readonly` 속성은 다음을 포함한 텍스트 형식의 폼 양식에서 지원됩니다:

- {{HTMLElement("input")}} 타입의 요소들:
  - `{{HTMLElement("input/text","text")}}`
  - `{{HTMLElement("input/search","search")}}`
  - `{{HTMLElement("input/tel","tel")}}`
  - `{{HTMLElement("input/url","url")}}`
  - `{{HTMLElement("input/email","email")}}`
  - `{{HTMLElement("input/password","password")}}`
  - `{{HTMLElement("input/date","date")}}`
  - `{{HTMLElement("input/month","month")}}`
  - `{{HTMLElement("input/week","week")}}`
  - `{{HTMLElement("input/time","time")}}`
  - `{{HTMLElement("input/datetime-local","datetime-local")}}`
  - `{{HTMLElement("input/number","number")}}`
- {{HTMLElement("textarea")}}

이 속성은 {{HTMLElement("select")}} 와 {{HTMLElement("button")}}을 포함한 다른 모든 요소에는 적용되지 않습니다. 또한 다음을 포함한 비텍스트 형식의 입력 요소에도 적용되지 않습니다:

- `{{HTMLElement("input/hidden","hidden")}}`
- `{{HTMLElement("input/range","range")}}`
- `{{HTMLElement("input/color","color")}}`
- `{{HTMLElement("input/checkbox","checkbox")}}`
- `{{HTMLElement("input/radio","radio")}}`
- `{{HTMLElement("input/file","file")}}`
- `{{HTMLElement("input/submit","submit")}}`
- `{{HTMLElement("input/image","image")}}`
- `{{HTMLElement("input/reset","reset")}}`
- `{{HTMLElement("input/button","button")}}`

`readonly` 속성을 지원하지만 해당 속성이 없는 입력 요소는 {{cssxref(":read-write")}} 의사 클래스에 일치합니다. 그 외 모든 요소는 {{cssxref(":read-only")}} 의사 클래스에 일치합니다.

### 속성 간의 상호작용

[`disabled`](/ko/docs/Web/HTML/Reference/Attributes/disabled) 과 `readonly` 의 차이는 다음과 같습니다. read-only 속성이 있는 경우 여전히 작동할 수 있고 포커스를 받을 수 있지만, disabled 속성이 있는 경우 포커스를 받을 수 없고, form과 함께 제출되지 않으며, 활성화되기 전까지는 일반적으로 컨트롤로서의 기능을 하지 않는다는 점입니다.

사용자는 `readonly` 속성이 있는 필드의 값을 직접 변경할 수 없기 때문에, [`required`](/ko/docs/Web/HTML/Reference/Attributes/required) 속성은 `readonly` 가 함께 있는 입력 필드에는 아무런 영향을 미치지 않습니다.

`readonly` 속성의 값을 동적으로 변경하는 유일한 방법은 스크립트를 통해서입니다.

> [!NOTE]
> `required` 속성이 있는 입력 요소에는 `readonly` 속성을 함께 사용할 수 없습니다.

### 사용성

브라우저는 `readonly` 속성을 시각적으로 표시합니다.

### 제약 조건 유효성 검사

요소가 read-only 상태인 경우, 사용자가 해당 요소의 값을 변경할 수 없으며 이 요소는 제약 조건 유효성 검사 과정에 포함되지 않습니다.

## 예제

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### 결과

{{EmbedLiveSample('Example')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref(':read-only')}} and {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
