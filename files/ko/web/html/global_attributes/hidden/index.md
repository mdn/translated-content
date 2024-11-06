---
title: hidden
slug: Web/HTML/Global_attributes/hidden
---

{{HTMLSidebar("Global_attributes")}}

**`hidden`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 해당 요소가 아직, 또는 더 이상 관련이 없음을 나타내는 불리언 특성입니다. 브라우저는 `hidden` 속성을 설정한 요소를 렌더링 하지 않습니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

하나의 표시 방식에서만 숨기려 할 땐 `hidden` 특성이 적합하지 않습니다. 임의의 요소에 `hidden`을 추가하면, 그 요소는 시각적 방식 외에도 스크린 리더 등 다른 모든 표시 방식에서 숨겨집니다.

숨겨지지 않은 요소에서 숨겨진 요소로 연결해서는 안됩니다. 또한, 숨겨진 요소의 자손 요소는 여전히 활성 상태이므로, {{htmlelement("script")}} 요소를 실행할 수 있고 양식 요소도 제출할 수 있습니다. 그러나 스크립트와 요소는 다른 맥락에서 숨겨진 요소를 참조할 수 있습니다.

예를 들어, `hidden` 특성을 적용한 구획으로 링크하는 `href` 특성은 유효하지 않습니다. 콘텐츠가 사용할 수 없거나 더는 관련이 없으면 연결할 이유도 없기 때문입니다.

하지만, 숨겨진 설명문을 참조하기 위해 ARIA `aria-describedby` 특성을 사용하는 것은 괜찮습니다. 숨겨진 설명문 자체로는 쓸모가 없음을 나타내지만 특정 문맥, 즉 자신이 설명하는 요소에서 참조하는 경우 쓸모가 생깁니다.

위와 유사하게, `hidden` 특성을 적용한 {{htmlelement("canvas")}} 요소는 스크립트로 작성한 그래픽 엔진에 의해 화면 외 버퍼로 쓰일 수 있고, 숨겨진 양식 요소도 `form` 특성을 통해 양식 컨트롤에서 참조할 수 있습니다.

> **참고:** `hidden` 특성을 가진 요소의 CSS {{cssxref("display")}} 속성 값을 변경하면 특성으로 인한 동작을 재정의합니다. 예컨대 `display: flex`를 지정한 요소는 `hidden` 특성이 존재하더라도 화면에 보이게 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 속성](/ko/docs/Web/HTML/Global_attributes).
