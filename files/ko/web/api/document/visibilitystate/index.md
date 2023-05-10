---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
---
{{ ApiRef("DOM") }}

**`Document.visibilityState`** 읽기 전용 property로, 이 element가 현재 표시된 컨텍스트를 나타내는 {{domxref('document')}}의 가시성을 반환합니다. document가 background 또는 보이지 않는 탭(다른 탭)에 있는지, 또는 pre-rendering을 위해 로드 된 것인지를 아는 것은 유용합니다. 가능한 값은 다음과 같습니다.

- `'visible'` : 페이지 내용은 적어도 부분적으로 보일 수 있습니다. 실제로 이는 페이지가 최소화 되지 않은 창(브라우저)에서의 선택된 탭 을 의미 합니다.
- `'hidden`' : 페이지 내용은 사용자에게 표시되지 않습니다. 실제로 이는 document가 background-tap(다른 탭)이거나, 최소화 된 창의 일부이거나, OS 화면 잠금이 활성 상태임을 의미합니다.
- `'prerender'` : 페이지 내용이 pre-rendering되어 사용자에게 보이지 않습니다 (document.hidden 목적으로 숨겨진 것으로 간주 합니다.). document는이 상태에서 시작될 수 있지만, 절대로 다른 값에서 이 값으로 전환되지는 않습니다. 참고 : 브라우저 지원은 선택 사항입니다.
- `'unloaded`' : 페이지가 메모리에서 로드되지 않았습니다. 참고 : 브라우저 지원은 선택 사항입니다.

이 property의 값이 변경되면 {{domxref("Document/visibilitychange_event", "visibilitychange")}} 이벤트가 {{domxref ( "Document")}}로 전송됩니다.

일반적으로 document pre-rendering 시에 일부 assets의 다운로드를 막을 수 있습니다(역:초기 로딩 속도 향상). document가 백그라운드에 있거나 최소화 된 상태에서 일부 작업을 중지 할 수 있습니다(역:대표적으로 interval). 브라우저를 참고하십시오.

## 예제

```js
document.addEventListener("visibilitychange", function() {
  console.log(document.hidden);
  // 숨김 여부가 변했을 때의 행동
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
