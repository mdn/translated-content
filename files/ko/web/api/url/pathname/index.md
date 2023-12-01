---
title: URL.pathname
slug: Web/API/URL/pathname
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`pathname`** 속성은 URL의 경로와 그 앞의 `/`로 이루어진 {{domxref("USVString")}}을 반환합니다. 경로가 없는 경우 빈 문자열을 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const path = url.pathname;
url.pathname = newPath;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
var url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/pathname?q=value",
);
var result = url.pathname; // Returns:"/ko/docs/Web/API/URL/pathname"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
