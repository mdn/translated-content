---
title: "Navigator: userActivation 속성"
short-title: userActivation
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} 인터페이스의 읽기 전용 속성인 **`userActivation`** 은 현재 활성화 되어있는 창의 사용자 활동 정보를 포함하는 {{domxref("UserActivation")}} 객체를 반환합니다.

## 값

{{domxref("UserActivation")}}는 객체입니다.

## 예제

### 사용자 동작이 최근에 수행되었는지 확인

{{domxref("UserActivation.isActive")}}를 통해 사용자가 현재 [임시 활성화](/ko/docs/Glossary/Transient_activation)로 상호작용 하는 중인지 확인할 수 있습니다.

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### 사용자 동작이 수행된 적이 있는지 확인

{{domxref("UserActivation.hasBeenActive")}}를 통해 [고정 활성화](/ko/docs/Glossary/Sticky_activation)로 상호작용 된 적이 있는지 확인할 수 있습니다.

```js
if (navigator.userActivation.hasBeenActive) {
  // proceed with auto-playing an animation, for example
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [사용자 활성화](/ko/docs/Web/API/UserActivation)
- [`UserActivation.hasBeenActive`](/ko/docs/Web/API/UserActivation/hasBeenActive)
- [`UserActivation.isActive`](/ko/docs/Web/API/UserActivation/isActive)
- [사용자 활성화로 제어되는 기능](/ko/docs/Web/Security/User_activation)
