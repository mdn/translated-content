---
title: History API
slug: Web/API/History_API
---

{{DefaultAPISidebar("History API")}}

DOM의 {{domxref("Window")}} 객체는 {{domxref("Window.history", "history")}} 객체를 통해 브라우저의 세션 기록에 접근할 수 있는 방법을 제공합니다. {{domxref("History", "history")}}는 사용자를 자신의 방문 기록 앞과 뒤로 보내고 기록 스택의 콘텐츠도 조작할 수 있는, 유용한 메서드와 속성을 가집니다.

## 개념과 사용 방법

사용자 방문 기록에서 앞뒤로 이동할 땐 {{domxref("History.back","back()")}}, {{domxref("History.forward","forward()")}}, {{domxref("History.go","go()")}} 메서드를 사용합니다.

### 앞으로 가기와 뒤로 가기

방문 기록의 뒤로 이동하려면 다음과 같이 사용합니다.

```js
history.back();
```

위의 코드는 사용자가 브라우저 도구 모음의 뒤로 가기 버튼을 누른 것과 같습니다.

이와 비슷하게, 기록의 앞으로 (도구 모음의 앞으로 가기 버튼) 가는 것도 할 수 있습니다.

```js
history.forward();
```

### 기록의 특정 지점으로 이동

{{domxref("History.go", "go()")}} 메서드를 사용하면 세션 기록에서 현재 페이지의 위치를 기준으로, 상대적인 거리에 위치한 특정 지점까지 이동할 수 있습니다.

한 페이지 뒤로 이동하려면 다음과 같이 사용합니다. ({{domxref("History.back", "back()")}}과 동일)

```js
history.go(-1);
```

한 페이지 앞으로 이동하려면 다음과 같이 사용합니다. ({{domxref("History.forward", "forward()")}}와 동일)

```js
history.go(1);
```

매개변수로 지정한 숫자를 바꾸면 2 페이지씩 이동하는 것도 가능합니다.

`go()`의 다른 사용법은 매개변수를 제공하지 않거나 0을 제공해 현재 페이지를 다시 불러오는 것입니다.

```js
// The following statements
// both have the effect of
// refreshing the page
history.go(0);
history.go();
```

{{domxref("History.length", "length")}} 속성을 사용해 방문 기록 스택의 크기도 알아낼 수 있습니다.

```js
let numberOfEntries = window.history.length;
```

## 인터페이스

- {{domxref("History")}}
  - : 브라우저의 세션 기록에 접근할 수 있는 방법을 제공하는 인터페이스입니다.

## 예제

다음 예제는 {{domxref("window.onpopstate")}} 속성에 이벤트 처리기를 부착한 후, {{domxref("window.history", "history")}} 객체를 사용해 브라우저 방문 기록을 추가하거나 대체한 후 탐색하는 코드입니다.

```js
window.onpopstate = function (event) {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
};

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.history")}}
- {{domxref("window.onpopstate")}}
