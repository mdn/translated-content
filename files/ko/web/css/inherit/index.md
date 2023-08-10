---
title: inherit
slug: Web/CSS/inherit
---

{{CSSRef}}

CSS **`inherit`** 키워드를 사용한 속성은 부모 요소로부터 해당 속성의 [계산값](/ko/docs/Web/CSS/computed_value)을 받아 사용합니다. CSS {{cssxref("all")}} 단축 속성을 포함한 모든 속성에 사용할 수 있습니다.

상속되는 속성([inherited properties](/en/CSS/inheritance))의 경우, 이는 기본 동작(behavior)을 강화하고 오직 다른 규칙을 재정의(override)해야 합니다. 상속되지 않는 속성([non-inherited properties](/en/CSS/inheritance))은, 이는 보통 비교적 거의 의미가 없는 동작을 지정하고 당신은 대신 {{cssxref("initial")}} 혹은 {{cssxref("all")}} 속성에 {{cssxref("unset")}} 사용을 고려할 지도 모릅니다.

상속(Inheritance)은 심지어 부모 요소가 포함(containing) 블록이 아니더라도, 항상 문서 트리 내 부모 요소로부터입니다.

## 예제

```css
/* h2를 green으로 만듦 */
h2 {
  color: green;
}

/* 부모 요소의 color를 사용하도록 sidebar 내의 h2를 홀로 남김 */
#sidebar h2 {
  color: inherit;
}
```

이 예제에서 sidebar 내부의 `h2` 요소는 다른 색일지도 모릅니다. 예를 들어, 그 중 하나는 규칙과 일치하는 div의 자식이라면

```css
div#current {
  color: blue;
}
```

파란색이 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [상속](/ko/docs/Web/CSS/inheritance)
- {{cssxref("initial")}}을 사용해 속성의 초깃값을 사용하세요.
- {{cssxref("unset")}}을 사용해 속성의 상속값 또는 초깃값을 사용하세요.
- {{cssxref("revert")}}를 사용해 사용자 에이전트가 지정한 값(또는 사용자가 수정한 값)으로 속성을 되돌리세요.
- {{cssxref("all")}} 속성을 사용하면 요소의 모든 속성을 한꺼번에 `initial`, `inherit`, `revert`, `unset`할 수 있습니다.
