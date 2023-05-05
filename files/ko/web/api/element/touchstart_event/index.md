---
title: GlobalEventHandlers.ontouchstart
slug: Web/API/Element/touchstart_event
original_slug: Web/API/GlobalEventHandlers/ontouchstart
---

{{ApiRef("HTML DOM")}}

{{event("touchstart")}} 이벤트를 위한 {{domxref("GlobalEventHandlers","global event handler")}}

{{SeeCompatTable}}

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
