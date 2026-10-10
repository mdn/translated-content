---
title: "Navigation: traverseTo() method"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

{{domxref("Navigation")}} 인터페이스의 **`traverseTo()`** 메서드는 주어진 {{domxref("NavigationHistoryEntry.key", "key")}} 로 식별되는 {{domxref("NavigationHistoryEntry")}} 로 이동합니다.

## 구문

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### 파라미터

- `key`
  - : 이동할 {{domxref("NavigationHistoryEntry")}} 의 `key` 입니다.
- `options` {{optional_inline}}
  - : 다음 속성들을 포함한 옵션 객체입니다.
    - `info` {{optional_inline}}
      - : 개발자가 정의한 정보를 {{domxref("Navigation/navigate_event", "navigate")}} 이벤트로 함께 전달하며, 이 값은 {{domxref("NavigateEvent.info")}}에서 사용할 수 있습니다. 어떤 데이터 타입이든 될 수 있습니다. 예를 들어, (왼쪽 스와이프, 오른쪽 스와이프, 홈으로 이동 등) 어떤 방식으로 이동했는지에 따라 새로 이동한 콘텐츠를 다른 애니메이션으로 표시하고 싶을 수 있습니다. 이때 어떤 애니메이션을 사용할지 나타내는 문자열을 `info` 로 전달할 수 있습니다.

### 반환 값

다음 속성을 가진 객체입니다.

- `committed`
  - : 표시되는 URL이 변경되고 새 {{domxref("NavigationHistoryEntry")}}가 생성되면 이행(fulfilled)되는 {{jsxref("Promise")}}입니다.
- `finished`
  - : `intercept()` 핸들러가 반환한 모든 프로미스가 이행되면 이행(fulfilled)되는 {{jsxref("Promise")}}입니다. 이는 {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} 이벤트가 발생할 때 {{domxref("NavigationTransition.finished")}} 프로미스가 이행되는 것과 동일합니다.

이 두 프로미스 중 어느 것이든지 네비게이션 이동이 실패하면 동작하지 않습니다.

### 예외

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("Navigation.currentEntry")}}의 {{domxref("NavigationHistoryEntry.index")}} 값이 -1인 경우(즉, 현재 {{domxref("Document")}}가 아직 활성 상태가 아님), 혹은 내비게이션 히스토리 목록에 지정한 key를 가진 {{domxref("NavigationHistoryEntry")}}가 없는 경우, 현재 {{domxref("Document")}}가 언로드(종료)되는 중인 경우에 발생합니다.

## 예제

### 홈 버튼 설정하기

```js
function initHomeBtn() {
  // 사용자가 이 화면으로 돌아갈 수 있도록
  // 처음 로드된 시점의 키를 가져옵니다.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// 링크를 클릭하는 행위처럼 이동 이벤트를 방해하고,
// 단일 페이지로 교체됩니다.
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // 다른 화면으로 이동합니다.
      // 하지만 "home" 버튼은 항상 동작합니다.
    },
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [모던 클라이언트 사이드 라우팅: Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API 설명서](https://github.com/WICG/navigation-api/blob/main/README.md)
