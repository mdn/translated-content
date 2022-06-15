---
title: StorageEvent
slug: Web/API/StorageEvent
tags:
  - API
  - Interface
  - Reference
  - StorageEvent
  - Web Storage API
browser-compat: api.StorageEvent
translation_of: Web/API/StorageEvent
---
{{APIRef("Web Storage API")}}

**`StorageEvent`** 인터페이스는 {{domxref("Window/storage_event", "storage")}} 이벤트가 구현합니다. `storage` 이벤트는 `window`에서 접근 가능한 저장소가 다른 문서에서 변경될 경우 발생합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}
  - : 새로 생성한 `StorageEvent` 객체를 반환합니다.

## 속성

부모 인터페이스인 {{domxref("Event")}}의 속성을 상속합니다.

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : 바뀐 키를 나타내는 {{DOMxRef("DOMString")}}을 반환합니다. `clear()` 메서드에 의해 발생한 이벤트에서는 {{jsxref("null")}}입니다.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : `key`가 가리키는 새로운 값을 나타내는 {{DOMxRef("DOMString")}}을 반환합니다. `clear()` 메서드에 의해, 또는 `key`가 저장소에서 제거되어 발생한 이벤트에서는 {{jsxref("null")}}입니다.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : `key`가 가리키던 원래 값을 나타내는 {{DOMxRef("DOMString")}}을 반환합니다. 저장소에 `key`를 새로 추가해서 발생한 경우, 이전 값이 존재할 수 없으므로 `oldValue`도 {{jsxref("null")}}입니다.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : 영향을 받은 저장소를 나타내는 {{DOMxRef("Storage")}} 객체를 반환합니다.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : `key`를 바꾼 문서의 URL {{DOMxRef("DOMString")}}을 반환합니다.

## 메서드

부모 인터페이스인 {{domxref("Event")}}의 메서드를 상속합니다.
    
## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
