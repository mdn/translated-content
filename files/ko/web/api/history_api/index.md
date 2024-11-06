---
title: History API
slug: Web/API/History_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("History API")}}

**History API**는 {{DOMxRef("Window.history","history")}} 전역 객체를 통해 브라우저 세션 히스토리([웹 익스텐션 히스토리](/ko/docs/Mozilla/Add-ons/WebExtensions/API/history)와 혼동해서는 안 됩니다.)에 대한 접근을 제공합니다. 사용자의 방문 기록을 앞뒤로 탐색하고, 방문 기록 스택의 내용을 조작할 수 있는 유용한 메서드와 속성을 노출합니다.

> [!NOTE]
> 이 API는 메인 스레드({{domxref("Window")}})에서만 사용할 수 있습니다. {{domxref("Worker")}} 또는 {{domxref("Worklet")}} 맥락에서는 접근할 수 없습니다.

## 개념 및 사용법

사용자의 방문 기록을 앞뒤로 이동하는 것은 {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}} 그리고 {{DOMxRef("History.go","go()")}} 메서드를 사용하여 수행됩니다.

### 앞으로 가기와 뒤로 가기

방문 기록의 뒤로 이동하려면 다음과 같이 사용합니다.

```js
history.back();
```

이는 사용자가 브라우저 도구 모음에서 <kbd><strong>뒤로 가기</strong></kbd> 버튼을 클릭한 것과 똑같이 작동합니다.

마찬가지로 다음과 같이 사용자가 <kbd><strong>앞으로 가기</strong></kbd> 버튼을 클릭한 것처럼 앞으로 이동할 수도 있습니다.

```js
history.forward();
```

### 방문 기록의 특정 지점으로 이동

{{DOMxRef("History.go","go()")}} 메서드를 사용하여 세션 기록에서 현재 페이지에 대한 상대 위치로 식별되는 특정 페이지를 로드할 수 있습니다. (현재 페이지의 상대 위치는 `0`입니다.)

한 페이지를 뒤로 이동하려면 아래와 같이 사용합니다. ({{DOMxRef("History.back","back()")}}을 호출하는 것과 동일합니다.)

```js
history.go(-1);
```

{{DOMxRef("History.forward","forward()")}}를 호출하는 것과 마찬가지로 페이지를 앞으로 이동할 때는 아래와 같이 사용합니다.

```js
history.go(1);
```

마찬가지로 `2`를 넘기면 2 페이지 앞으로 이동할 수 있습니다.

`go()` 메서드의 또 다른 용도는 `0`을 전달하거나 인수 없이 호출하여 현재 페이지를 새로고침하는 것입니다.

```js
// 아래 두 줄의 코드는
// 모두 페이지를
// 새로고침 합니다.
history.go(0);
history.go();
```

`length` 속성 값을 확인하여 방문 기록 스택의 페이지 수를 확인할 수 있습니다.

```js
const numberOfEntries = history.length;
```

## 인터페이스

- {{domxref("History")}}
  - : 브라우저 세션 기록(즉, 현재 페이지가 로드된 탭 또는 프레임에서 방문한 페이지)을 조작할 수 있습니다.
- {{domxref("PopStateEvent")}}
  - : {{domxref("Window.popstate_event", "popstate")}} 이벤트의 인터페이스입니다.

## 예제

다음 예제에서는 {{domxref("Window.popstate_event", "popstate")}} 이벤트에 대한 수신기를 할당합니다. 그런 다음 현재 탭의 브라우저 기록 내에서 추가, 바꾸기 및 이동하는 history 객체의 몇 가지 메서드를 보여줍니다.

```js
window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // "location: http://example.com/example.html?page=1, state: {"page":1}"라는 알림이 발생합니다.
history.back(); // "location: http://example.com/example.html, state: null"라는 알림이 발생합니다.
history.go(2); // "location: http://example.com/example.html?page=3, state: {"page":3}"라는 알림이 발생합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.history", "history")}} 전역 객체
- {{domxref("Window/popstate_event", "popstate")}} 이벤트
