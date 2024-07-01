---
title: GlobalEventHandlers.ondblclick
slug: Web/API/Element/dblclick_event
---

{{ApiRef("HTML DOM")}}

**`ondblclick`** property는 현재 요소(element)의 onDblClick 이벤트 핸들러 코드를 돌려줍니다.

## 구문

```js
element.ondblclick = function;
```

- `function` 은 사용자 정의 함수이며, () 나 변수를 제외하고 생성할 수 있고 또는 아래와 같이 함수명을 선언하지 않고 생성할 수 있습니다.

```js
element.ondblclick = function () {
  console.log("ondblclick event detected!");
};
```

## 예제

다음 예제는 더블클릭의 위치를 기록합니다.

### HTML

```html
<p>Double click anywhere in this example.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.getElementById("log");

document.ondblclick = logDoubleClick;

function logDoubleClick(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
