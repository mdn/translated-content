---
title: AnimationTimeline.currentTime
slug: Web/API/AnimationTimeline/currentTime
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

Web Animations API의 AnimationTimeline 인터페이스의 currentTime 읽기 전용 속성은 타임 라인의 현재 시간을 밀리 초 단위로 반환하거나 타임 라인이 비활성 상태이면 null을 반환합니다.출력 값이 생성되는 시간 세그먼트를 정의합니다. 이러한 값은 대상 속성에 애니메이션 효과를 적용하는 데 사용됩니다.

```js
var currentTime = AnimationTimeline.currentTime;
```

### Value

타임 라인의 현재 시간을 밀리 초 단위로 나타내는 숫자 또는 타임 라인이 비활성 상태 인 경우 null입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Web Animations API](/ko/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} inherits this property
- {{domxref("Document.timeline")}} returns a timeline object which inherits this property
