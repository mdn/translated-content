---
title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
l10n:
  sourceCommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}} 인터페이스의 **`MutationObserver()`** 생성자는 DOM에 변경이 발생할 때 지정한 콜백을 호출하는 감지기 인스턴스를 새로 생성하고 반환합니다.

생성 시점에는 DOM 변경 감지가 시작하지 않습니다. 감지를 시작하려면 {{domxref("MutationObserver.observe", "observe()")}} 메서드를 호출해 DOM의 어느 부분을 주시할 것인지와 어떤 변경을 감지할 것인지 설정해야 합니다.

## 구문

```js-nolint
new MutationObserver(callback)
```

### 매개변수

- `callback`
  - : 주어진 노드 또는 하위 트리와 옵션을 만족하는 DOM 변경을 감지하면 호출할 콜백입니다.

    `callback` 함수는 두 개의 매개변수를 받습니다.
    1. 일어난 변경 각각을 나타내는 {{domxref("MutationRecord")}} 객체들의 배열
    2. 콜백을 호출한 {{domxref("MutationObserver")}}

    아래의 [예제](#예제)에서 더 자세히 확인하세요.

### 반환 값

DOM 변경이 발생하면 지정한 `callback`을 호출하는 {{domxref("MutationObserver")}} 객체입니다.

## 예제

이 예제는 노드와 그 자식들을 주시하여 요소가 트리에 추가되거나 트리에서 제거되는 경우, 그리고 요소의 특성이 변경되는 경우를 감지하는 새로운 `MutationObserver`를 생성합니다.

### 콜백 함수

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        /* 트리에 한 개 이상의 자식이 추가됐거나 제거된 경우.
           mutation.addedNodes와 mutation.removedNodes를 참고하세요. */
        break;
      case "attributes":
        /* mutation.target이 가리키는 요소의 특성이 바뀐 경우.
           특성의 이름은 mutation.attributeName으로 알 수 있고,
           이전 값은 mutation.oldValue로 알 수 있습니다. */
        break;
    }
  });
}
```

`callback()` 함수는 감지기의 {{domxref("MutationObserver.observe", "observe()")}}를 호출했을 때 지정한 설정을 만족하는 변경을 감지하면 호출됩니다.

일어난 변경의 종류(자식 목록의 변경, 특성의 변경)는 {{domxref("MutationRecord.type", "mutation.type")}} 속성을 통해 알 수 있습니다.

### 감지기 생성과 시작

실제로 감지 절차를 시작하는 코드는 다음과 같습니다.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,

  // false를 지정하거나 아예 생략하여 부모 노드의 변경만 감지
  subtree: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

주시하고자 하는 하위 트리는 `someElement`라는 ID를 가진 요소를 통해 탐색합니다. `observerOptions` 레코드에는 감지기의 옵션을 설정합니다. 자식의 변경과 특성의 변경을 모두 감지하고자 하므로 `childList`와 `attributes`를 모두 `true`로 지정합니다.

그 다음에는 감지기 인스턴스를 생성하면서 `callback()` 함수를 지정하고, `target` 노드와 `options` 객체를 제공하여 `observe()`를 호출, 하위 트리의 변경 감지를 시작합니다.

이후 {{domxref("MutationObserver.disconnect", "disconnect()")}}를 호출하기 전까지는 DOM 트리의 `targetNode` 아래에서 새로운 요소가 추가되거나 제거되는 경우, 또는 `targetNode`까지 포함하여 요소 중 하나의 특성이 바뀌는 경우 `callback()`이 호출됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
