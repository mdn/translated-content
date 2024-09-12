---
title: "HTML attribute: size"
short-title: size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

**`size`** 특성은 {{htmlelement('input')}} 요소의 너비와 {{htmlelement('select')}} 요소의 높이를 정의합니다. `input` 요소의 경우, 사용자가 값을 편집할 때 사용자 에이전트가 보여주는 문자 수를 정의합니다. `select` 요소의 경우, 사용자에게 표시할 옵션의 수를 정의합니다. 이 값은 0보다 큰 유효한 양의 정수여야 합니다.

`size`가 지정되지 않았거나 유효하지 않은 값이 지정된 경우, 입력 필드의 크기는 선언되지 않으며 폼 컨트롤은 사용자 에이전트의 기본 너비를 가지게 됩니다. 만약 CSS가 해당 요소의 너비에 영향을 미치는 속성을 타겟으로 지정한다면, CSS가 우선적으로 적용됩니다.

`size` 특성은 제약 조건 유효성 검사에는 영향을 미치지 않습니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## 예제

일부 input 유형에 `size` 특성을 추가하면 입력 필드의 너비를 제어할 수 있습니다. select 요소에 size를 추가하면 높이가 변경되며, 닫힌 상태에서 보이는 옵션의 수를 정의합니다.

```html
<label for="fruit">Enter a fruit</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Enter a vegetable</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>banana</option>
  <option>cherry</option>
  <option>strawberry</option>
  <option>durian</option>
  <option>blueberry</option>
</select>

<select name="vegetables" size="5">
  <option>carrot</option>
  <option>cucumber</option>
  <option>cauliflower</option>
  <option>celery</option>
  <option>collard greens</option>
</select>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`maxlength`](/ko/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/ko/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/ko/docs/Web/HTML/Attributes/pattern)
