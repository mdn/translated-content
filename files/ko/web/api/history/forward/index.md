---
title: History.forward()
slug: Web/API/History/forward
---

{{APIRef("DOM")}}

**`History.forward()`** 메서드는 브라우저가 세션 기록의 바로 앞 페이지로 이동하도록 지시합니다. {{domxref("History.go", "history.go(1)")}}과 같습니다. 다음 페이지가 없는 경우 아무것도 하지 않습니다.

이 메서드는 비동기적입니다. {{event("popstate")}} 이벤트 처리기를 통해 탐색 완료 시점을 알 수 있습니다.

## 구문

```js
history.forward();
```

## 예제

다음 예제는 클릭했을 때 앞으로 가는 버튼을 생성합니다.

### HTML

```html
<button id="go-forward">앞으로 가기!</button>
```

### JavaScript

```js
document.getElementById("go-forward").addEventListener("click", (e) => {
  window.history.forward();
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("History")}}
