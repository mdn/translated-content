---
title: MutationObserver.observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}}의 **`observe()`** 메서드는 지정한 옵션을 만족하는 DOM 변경 알림을 수신한 경우 `MutationObserver`의 콜백을 호출하도록 설정합니다.

설정에 따라서 `MutationObserver`는 DOM 트리의 단일 {{domxref("Node")}}를 주시하거나, 노드와 그 아래 노드를 모두 주시할 수 있습니다.

`MutationObserver`의 콜백이 더 이상 호출되지 않도록 하려면 {{domxref("MutationObserver.disconnect()")}}를 사용하세요.

## 구문

```js-nolint
observe(target, options)
```

### 매개변수

- `target`
  - : DOM 트리 내에서 변경을 감지할 노드 또는 하위 트리 루트로서의 {{domxref("Node")}}입니다. ({{domxref("Element")}} 포함)
- `options`

  - : 주시하고자 하는 DOM 변경을 나타내는 객체입니다. 이 옵션을 만족하는 DOM 변경들만 `MutationObserver`의 콜백으로 전달됩니다.
    적어도 `childList`, `attributes`, `characterData` 중 하나는 `true`여야 하며 세 속성 모두 `false`면 `TypeError`가 발생합니다.

    사용 가능한 옵션은 다음과 같습니다.

    - `subtree` {{optional_inline}}
      - : `true`로 지정하면 `target`이 루트인 하위 트리 전체를 주시합니다. 다른 옵션들도 `target` 노드 하나가 아니라 이 하위 트리에 속한 모든 노드에 대해 적용됩니다. 기본 값은 `false`입니다.
    - `childList` {{optional_inline}}
      - : `true`로 지정하면 대상 노드에 자식이 추가되거나 기존 자식이 제거되는 것을 감지합니다. `subtree`가 `true`면 자손들의 자식 변경도 감지합니다. 기본 값은 `false`입니다.
    - `attributes` {{optional_inline}}
      - : `true`로 지정하면 주시 중인 노드 또는 노드들의 특성 변경을 감지합니다. 기본 값은 `attributeFilter` 또는 `attributeOldValue`가 지정된 경우 `true`, 아니면 `false`입니다.
    - `attributeFilter` {{optional_inline}}
      - : 변경을 감지할 특성 이름의 배열입니다. 이 속성을 지정하지 않으면 모든 특성의 변경이 알림을 생성합니다.
    - `attributeOldValue` {{optional_inline}}
      - : `true`로 지정하면 노드의 특성 변경을 감지했을 때 해당 특성이 바뀌기 전 값을 기록합니다. 기본 값은 `false`입니다.
    - `characterData` {{optional_inline}}
      - : `true`로 지정하면 대상 노드 내의 텍스트가 바뀌는 것을 감지합니다. `subtree`가 `true`면 자손들의 텍스트 변경도 감지합니다. 기본 값은 `characterDataOldValue`가 지정된 경우 `true`, 아니면 `false`입니다.
    - `characterDataOldValue` {{optional_inline}}
      - : `true`로 지정하면 노드의 텍스트 변경을 감지했을 때 바뀌기 전의 텍스트를 기록합니다. 기본 값은 `false`입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- {{jsxref('TypeError')}}

  - : 다음 상황에서 발생합니다.

    - 지정한 `options`로는 감지할 수 있는 변경이 없을 때
      (`childList`, `attributes`, `characterData`가 모두 `false`일 때)
    - `options`의 `attributes`가 `false`(특성 변경을 감지하지 않음)인데 `attributeOldValue`가 `true`거나 `attributeFilter`를 지정한 경우
    - `options`의 `characterData`가 `false`(텍스트 변경을 감지하지 않음)인데 `characterDataOldValue`가 `true`인 경우

## 사용 일람

### MutationObserver 재활용

`MutationObserver` 인스턴스 하나의 `observe()`를 여러 번 호출하면 DOM 트리 곳곳의 서로 다른 변경 유형을 하나의 감지기만으로 감지할 수 있습니다. 하지만 주의해야 할 점이 있습니다.

- 어떤 `MutationObserver` 인스턴스가 주시 중인 노드를 같은 인스턴스로 다시 주시할 경우, 이 노드에 대한 해당 인스턴스의 기존 주시는 자동으로 해제되고 새로 시작합니다.
- `MutationObserver` 인스턴스가 그 노드를 주시하고 있지 않았다면 다른 주시들은 영향을 받지 않습니다.

### 트리 분리 후에도 주시는 지속됨

`MutationObserver`는 노드들의 연결이 끊어져도 주시가 끊기지 않도록 설계됐습니다. 그래서 주시 중인 하위 트리의 일부를 분리해 DOM의 다른 곳으로 옮기는 동시에 그 노드들의 특성을 변경하는 경우에도 특성 변경 알림까지 수신할 수 있습니다.

다시 말해, 주시 중인 하위 트리에서 노드가 분리된다는 알림이 콜백까지 전달되기 전까지는 분리된 하위 트리와 해당 노드의 변경 사항에 대한 알림을 계속 받습니다.

이와 같은 주시 동작으로 인해, 각각의 변경을 나타내는 {{domxref("MutationRecord")}} 객체들을 보관해둔다면 이론적으로는 트리의 분리를 "실행 취소" 하여 DOM 상태를 되감는 게 가능합니다.

## 예제

### 기본 예제

이 예제에서는 {{domxref("MutationObserver")}} 인스턴스를 생성한 후 대상 노드와 옵션 객체를 사용해 **`observe()`** 메서드를 호출하는 방법을 보입니다.

```js
// 주시할 요소 식별
const elementToObserve = document.querySelector("#targetElementId");

// 콜백 함수를 지정한 새로운 MutationObserver 인스턴스 생성
// observer 변수에 할당
const observer = new MutationObserver(() => {
  console.log("callback that runs when observer is triggered");
});

//
// 위 MutationObserver 인스턴스의 observe() 메서드를 호출
// 주시할 요소와 옵션 객체 전달
observer.observe(elementToObserve, { subtree: true, childList: true });
```

### `attributeFilter` 사용하기

이 예제는 채팅방을 가정하고, 사용자들의 이름을 포함한 하위 트리를 주시하여 `status`와 `username` 특성의 변경를 감지합니다. 그 후에는 사용자가 닉네임을 변경한 경우를 반영하거나, 자리비움 상태를 강조하는 등의 기능을 추가할 수 있을 것입니다.

```js
function callback(mutationList) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        switch (mutation.attributeName) {
          case "status":
            userStatusChanged(mutation.target.username, mutation.target.status);
            break;
          case "username":
            usernameChanged(mutation.oldValue, mutation.target.username);
            break;
        }
        break;
    }
  });
}

const userListElement = document.querySelector("#userlist");

const observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: ["status", "username"],
  attributeOldValue: true,
  subtree: true,
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
