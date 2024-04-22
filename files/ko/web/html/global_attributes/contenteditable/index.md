---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
---

{{HTMLSidebar("Global_attributes")}}

**`contenteditable`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 사용자가 요소를 편집할 수 있는지 나타내는 열거형 특성입니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

가능한 값은 다음과 같습니다.

- `true` 또는 빈 문자열은 요소가 편집 가능함을 나타냅니다.
- `false`는 요소가 편집 불가능함을 나타냅니다.

값 없이, `<label contenteditable>예제</label>`처럼 사용할 경우 빈 문자열 값으로 간주합니다.

특성이 없거나, 값이 유효하지 않은 경우 부모 요소로부터 상속합니다. 즉, 부모 요소를 편집 가능한 경우 자신도 편집 가능합니다.

가능한 값에 `true`와 `false`가 있긴 하지만, `contenteditable` 특성은 불리언 특성이 아닌 열거형 특성입니다.

텍스트 삽입 시 표시되는 커서의 색은 CSS {{cssxref("caret-color")}} 특성으로 바꿀 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.contentEditable")}}, {{domxref("HTMLElement.isContentEditable")}}
