---
title: click
slug: Web/API/Element/click_event
---

{{APIRef}}

**`click`** 이벤트는 포인팅 디바이스 버튼(일반적으로 마우스 기본 버튼)이 하나의 요소(엘리먼트)에서 눌려지고 놓을 때 시작합니다.

| Interface      | {{domxref("MouseEvent")}} |
| -------------- | -------------------------------- |
| Sync / Async   | Sync                             |
| Bubbles        | Yes                              |
| Cancelable     | Yes                              |
| Target         | {{domxref("Element")}}     |
| Composed       | Yes                              |
| Default Action | Varies                           |

## 속성

| Property                                 | Type                                 | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | 이벤트 타겟 (DOM 트리 내에서의 최상위 타겟).                                                                                                                                                                                                                                                                                                                                     |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}     | 이벤트의 타입.                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbles` {{readonlyInline}}       | {{domxref("Boolean")}}         | 이벤트가 정상적으로 버블을 발생시키는지 여부                                                                                                                                                                                                                                                                                                                                     |
| `cancelable` {{readonlyInline}}    | {{domxref("Boolean")}}         | 이벤트 취소 가능 여부                                                                                                                                                                                                                                                                                                                                                            |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("Document.defaultView")}} (문서의 `window`)                                                                                                                                                                                                                                                                                                               |
| `detail` {{readonlyInline}}        | `long` (`float`)                     | 짧은 시간 내에 발생한 연속 클릭 수로, 1씩 증가합니다.                                                                                                                                                                                                                                                                                                                            |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 이벤트 리스너가 연결된 노드.                                                                                                                                                                                                                                                                                                                                                     |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | `ouseover`, `mouseout`, `mouseenter`, `mouseleave` 이벤트: 이벤트에 대한 보조 타겟 (`mouseenter` 의 경우는 `mouseleave` 타겟). 그렇지 않으면 `null을` 반환합니다.                                                                                                                                                                                                                |
| `screenX` {{readonlyInline}}       | `long`                               | 글로벌(스크린) 좌표에서 마우스 포인터의 X 좌표.                                                                                                                                                                                                                                                                                                                                  |
| `screenY` {{readonlyInline}}       | `long`                               | 글로벌(스크린) 좌표에서 마우스 포인터의 Y 좌표.                                                                                                                                                                                                                                                                                                                                  |
| `clientX` {{readonlyInline}}       | `long`                               | 로컬(DOM 컨텐츠) 좌표에서 마우스 포인터의 X 좌표.                                                                                                                                                                                                                                                                                                                                |
| `clientY` {{readonlyInline}}       | `long`                               | 로컬(DOM 컨텐츠) 좌표에서 마우스 포인터의 Y 좌표.                                                                                                                                                                                                                                                                                                                                |
| `button` {{readonlyInline}}        | `unsigned short`                     | 마우스 이벤트가 발생했을 때 누른 버튼 번호: 왼쪽 버튼=0, 가운데 버튼=1 (있다면), 오른쪽 버튼=2. 왼손잡이용 마우스의 경우 버튼 동작을 반대로하면, 값은 오른쪽에서 왼쪽으로 읽습니다.                                                                                                                                                                                              |
| `buttons` {{readonlyInline}}       | `unsigned short`                     | 마우스 이벤트가 발생했을 때 눌려진 버튼: 왼쪽 버튼=1, 오른쪽 버튼=2, 가운데(휠) 버튼=4, 4번째 버튼(일반적으로 브라우저의 뒤로가기 버튼)=8, 5번째 버튼 (일반적으로 앞으로가기 버튼)=16. 두개 이상의 버튼을 누르면, 값의 논리합이 반환됩니다. 예를 들어 왼쪽 버튼과 오른쪽 버튼을 누르면 3이 반환됩니다. (1 \| 2). [보다 자세한건 여기를 참조하세요](/ko/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | `float`                              | 이벤트를 발생시킬 때 터치 또는 탭 장치에 적용되는 압력의 양; 이 값의 범위는 0.0(최소 압력)과 1.0(최대 압력) 사이 입니다.                                                                                                                                                                                                                                                         |
| `ctrlKey` {{readonlyInline}}       | {{domxref("Boolean")}}         | 이벤트가 발생했을 때 컨트롤 키가 눌러져 있으면 `true` 그렇지 않으면 `false` 를 반환합니다.                                                                                                                                                                                                                                                                                       |
| `shiftKey` {{readonlyInline}}      | {{domxref("Boolean")}}         | 이벤트가 발생했을 때 시프트 키가 눌러져 있으면 `true` 그렇지 않으면 `false` 를 반환합니다.                                                                                                                                                                                                                                                                                       |
| `altKey` {{readonlyInline}}        | {{domxref("Boolean")}}         | 이벤트가 발생했을 때 알트 키가 눌러져 있으면 `true` 그렇지 않으면 `false` 를 반환합니다.                                                                                                                                                                                                                                                                                         |
| `metaKey` {{readonlyInline}}       | {{domxref("Boolean")}}         | 이벤트가 발생했을 때 메타 키가 눌러져 있으면 `true` 그렇지 않으면 `false` 를 반환합니다.                                                                                                                                                                                                                                                                                         |

## 예제

다음 예제는 {{htmlelement("button")}}의 연속한 클릭 수를 표시합니다.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `클릭 수: ${event.detail}`;
});
```

### 결과

빠르고 반복적인 클릭으로 카운터를 늘려보세요. 클릭 중간에 쉬면 숫자가 초기화됩니다.

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
