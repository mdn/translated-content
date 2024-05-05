---
title: ":user-valid"
slug: Web/CSS/:user-valid

---

{{CSSRef}}

The **`:user-valid`** CSS [가짜 클래스](/ko/docs/Web/CSS/Pseudo-classes) 해당 값을 기반으로 올바르게 유효성을 검사하는 유효성이 검사된 양식 요소를 나타냅니다 [validation constraints](/ko/docs/Learn/Forms#constraint_validation). 그러나,  {{cssxref(":valid")}}과 달리 사용자가 상호작용한 후에만 일치합니다

이 가짜(pseudo) 클래스는 양식 컨트롤이 유효하고 다음 중 하나가 발생한 경우 적용됩니다.

- 사용자가 양식 컨트롤을 변경하고 포커스를 다른 곳으로 이동하는 등 변경 사항을 커밋했습니다.
- 컨트롤이 변경되지 않은 경우에도 사용자가 양식 제출을 시도했습니다.
- 포커스를 얻었을 때 값이 유효하지 않았으며 포커스가 여전히 컨트롤에 있는 경우에도 사용자가 값을 유효하게 변경했습니다.

이 가짜(pseudo) 클래스가 적용되면 사용자 에이전트는 컨트롤에 포커스가 있을 때 키를 누를 때마다 컨트롤이 유효한지 여부를 다시 검증합니다.

- 컨트롤에 포커스가 있고 포커스를 얻었을 때 값이 유효하지 않은 경우 키를 누를 때마다 유효성을 다시 검사하세요

결과적으로 사용자가 상호 작용을 시작할 때 컨트롤이 유효했다면 사용자가 다른 컨트롤로 포커스를 이동할 때만 유효성 스타일이 변경됩니다. 그러나 사용자가 이전에 플래그가 지정된 값을 수정하려고 하면 값이 유효해지면 컨트롤이 즉시 표시됩니다. 필수 항목은 사용자가 항목을 변경하거나 변경되지 않은 유효하지 않은 값을 제출하려고 시도하는 경우에만 유효하지 않은 것으로 표시됩니다.

## 문법

```css
:user-valid {
  /* ... */
}
```

## 예제

### Setting a color and symbol on :user-valid

In the following example, the green border and ✅ only display once the user has interacted with the field.
Try changing the email address to another valid email to see it in action.

```html
<form>
  <label for="email">Email *: </label>
  <input
    id="email"
    name="email"
    type="email"
    value="test@example.com"
    required />
  <span></span>
</form>
```

```css
input:user-valid {
  border: 2px solid green;
}

input:user-valid + span::before {
  content: "✓";
  color: green;
}
```

{{EmbedLiveSample("Setting_a_color_and_symbol_on_user-valid", 140, 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기, 추가

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-invalid")}}