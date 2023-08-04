---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
---

{{{APIRef("DOM 이벤트")}}
{{domxref("MouseEvent")}}} 인터페이스의 clientX 읽기 전용 속성은 이벤트가 발생한 애플리케이션 {{glossary("viewport")}}}} 내에 수평 좌표를 제공한다(페이지 내의 좌표와는 반대).

예를 들어 뷰포트의 왼쪽 가장자리를 클릭하면 페이지가 수평으로 스크롤되는지 여부에 관계없이 항상 clientX 값이 0인 마우스 이벤트가 발생한다.

## Syntax

```js
var x = instanceOfMouseEvent.clientX;
```

### Return value

CSSOM 뷰 모듈에 의해 재정의된 이중 부동 소수점 값. 원래 이 속성은 긴 정수로 정의되었다. 자세한 내용은 "브라우저 호환성" 섹션을 참조하십시오.

## Example

이 예에서는 {{Event("mousemove")}}} 이벤트를 트리거할 때마다 마우스 좌표를 표시한다.

### HTML

```html
<p>위치를 보려면 마우스를 이동하십시오..</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### Result

{{EmbedLiveSample("Example")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고 항목

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
