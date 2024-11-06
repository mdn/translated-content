---
title: URL.protocol
slug: Web/API/URL/protocol
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`protocol`** 속성은 URL의 프로토콜 스킴과 마지막 `':'`을 포함한 {{domxref("USVString")}}입니다.

{{AvailableInWorkers}}

## 구문

```js
const protocol = url.protocol;
url.protocol = newProtocol;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
