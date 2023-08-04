---
title: Event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{APIRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`defaultPrevented`** 읽기 전용 속성은 {{domxref("Event.preventDefault()")}}로 이 이벤트를 취소했는지 나타내는 불리언 값을 반환합니다.

## 값

`true`면 {{glossary("user agent", "사용자 에이전트")}}의 기본 동작을 취소했고, `false`면 취소하지 않았음을 나타내는 불리언 값입니다.

## 예제

이 예제는 두 개의 {{htmlelement("a")}} 요소를 사용한 링크 방문 시도를 기록합니다. 두 번째 링크는 JavaScript를 사용해 동작을 막아놨습니다.

### HTML

```html
<p><a id="link1" href="#link1">첫 번째 링크 방문</a></p>
<p><a id="link2" href="#link2">두 번째 링크 방문 시도</a> (사용 불가)</p>
<p id="log"></p>
```

### JavaScript

```js
function stopLink(event) {
  event.preventDefault();
}

function logClick(event) {
  const log = document.getElementById("log");

  if (event.target.tagName === "A") {
    if (event.defaultPrevented) {
      log.innerText =
        "죄송합니다. 이 링크는 방문할 수 없습니다.\n" + log.innerText;
    } else {
      log.innerText = "링크 방문 중...\n" + log.innerText;
    }
  }
}

const a = document.getElementById("link2");
a.addEventListener("click", stopLink);
document.addEventListener("click", logClick);
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
