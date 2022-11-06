---
title: GlobalEventHandlers.ontouchstart
slug: Web/API/Element/touchstart_event
translation_of: Web/API/GlobalEventHandlers/ontouchstart
original_slug: Web/API/GlobalEventHandlers/ontouchstart
---
{{ApiRef("HTML DOM")}}

{{event("touchstart")}} 이벤트를 위한 {{domxref("GlobalEventHandlers","global event handler")}}

{{SeeCompatTable}}

> **참고:** 이 요소는 아직 표준화 되지 _않은_ 기술입니다. It is specified in the {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} 명세에서 작성된 기술이며 {{SpecName('Touch Events')}} {{Spec2('Touch Events')}}에는 포함되어 있지 않습니다. 따라서 아직 대부분의 브라우저에서는 사용되지 않는 요소입니다.

## 문법

```js
var startHandler = someElement.ontouchstart;
```

### 반환 값

- `startHandler`
  - : `someElement`를 위한 _touchstart_ 이벤트 핸들러

## 예제

이 예제는 HTML 요소에 _touchstart_ e이벤트 핸들러를 등록하기 위한 두 방법을 보여주고 있습니다.

```js
<html>
<script>
function startTouch(ev) {
 // 이벤트 내부
}
function init() {
 var el=document.getElementById("target1");
 el.ontouchstart = startTouch;
}
</script>
<body onload="init();">
<div id="target1"> 터치해주세요... </div>
<div id="target2" ontouchstart="startTouch(event)"> 터치해주세요... </div>
</body>
</html>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- {{ event("touchstart") }}
