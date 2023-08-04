---
title: GlobalEventHandlers.onsubmit
slug: Web/API/HTMLFormElement/submit_event
---

{{ApiRef("HTML DOM")}}

현재 창에서 폼을 제출하는 이벤트를 다루는 이벤트 핸들러

## 문법

```js
window.onsubmit = funcRef;
```

### 매개 변수

- `funcRef` 는 함수를 참조하는 변수이다.

## 예제

```html
<html>
  <script>
    function reg() {
      window.captureEvents(Event.SUBMIT);
      window.onsubmit = hit;
    }

    function hit() {
      console.log("hit");
    }
  </script>

  <body onload="reg();">
    <form>
      <input type="submit" value="submit" />
    </form>
    <div id="d"></div>
  </body>
</html>
```

## 알아두기

제출 이벤트는 사용자가 폼 내부에 있는 제출 버튼(`<input type="submit"/>`)을 눌렀을 때 발생한다.

## 명세

{{Specifications}}
