---
title: History.scrollRestoration
slug: Web/API/History/scrollRestoration
---

{{APIRef("HTML DOM")}}

**`History.scrollRestoration`** 속성을 사용하면 기록 탐색 시 사용할 스크롤 위치 복원 기능의 기본값을 웹 애플리케이션이 지정할 수 있습니다.

## 구문

```js
let scrollRestore = history.scrollRestoration;
```

### 값

- `"auto"`
  - : 페이지 내에서 사용자의 스크롤이 위치했던 장소로 복원합니다.
- `"manual"`
  - : 스크롤을 복원하지 않습니다. 사용자가 직접 스크롤해야 합니다.

## 예제

### 현재 스크롤 복원 여부 알아내기

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "The location on the page is not restored, user will need to scroll manually.",
  );
}
```

### 스크롤 복원 비활성화

```js
if (history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
