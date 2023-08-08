---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
---

{{HTMLSidebar("Global_attributes")}}

**`spellcheck`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 요소의 맞춤법 검사 여부를 지정하는 열거형 특성입니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

가능한 값은 다음과 같습니다.

- `true`는 가능한 경우 요소의 맞춤법을 검사해야 함을 나타냅니다.
- `false`는 요소의 맞춤법을 검사하지 않아야 함을 나타냅니다.

> **참고:** `spellcheck` 특성은 불리언이 아니고 열거형 특성이므로 `true` 또는 `false`를 반드시 지정해야 합니다. 즉, `<textarea spellcheck></textarea>`처럼은 사용할 수 없으며, `<textarea spellcheck="true"></textarea>`와 같이 사용해야 합니다.

특성을 지정하지 않았을 때의 기본값은 브라우저 및 요소에 따라 다릅니다. 또한, `spellcheck` 특성은 상속 대상이므로, 부모 요소의 값에도 영향을 받습니다.

`spellcheck`는 권장사항에 불과하며, 브라우저가 맞춤법을 검사해야 할 의무는 없습니다. 보통 `spllcheck` 특성을 `true`로 지정하더라도, 요소를 편집할 수 없다면 맞춤법 검사를 하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
