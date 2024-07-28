---
title: MutationObserver.disconnect()
slug: Web/API/MutationObserver/disconnect
l10n:
  sourceCommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{APIRef("DOM WHATWG")}}

{{domxref("MutationObserver")}}의 **`disconnect()`** 메서드는 감지기의 주시를 중단합니다.

감지기의 {{domxref("MutationObserver.observe", "observe()")}} 메서드를 다시 호출해서 인스턴스를 재사용할 수 있습니다.

## 구문

```js-nolint
disconnect()
```

### 매개변수

없음.

### 반환 값

없음 ({{jsxref("undefined")}}).

> [!NOTE]
> 감지기가 '감지'했으나 아직 콜백으로 '보고'하지 못한 알림들은 모두 버려집니다. 이런 알림들도 처리하려면 {{domxref("MutationObserver.takeRecords()", "takeRecords()")}} 메서드를 사용해 저장하세요.

## 사용 일람

주시 중인 요소가 DOM에서 제거되어 브라우저의 가비지 컬렉션에 의해 해제된 경우, `MutationObserver`는 자동으로 해당 요소의 주시를 중단합니다. `MutationObserver` 인스턴스 자체는 계속 존재하므로 다른 요소의 주시에 사용할 수 있습니다.

## 예제

이 예제는 감지기를 생성하고 주시를 시작했다가, 나중에 다시 사용하기 위해 주시를 중단하는 모습을 보입니다.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* 이후... */

observer.disconnect();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
