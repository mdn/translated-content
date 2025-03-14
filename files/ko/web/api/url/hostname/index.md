---
title: URL.hostname
slug: Web/API/URL/hostname
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`hostname`** 속성은 URL의 {{glossary("domain name", "도메인 이름")}}을 담은 {{domxref("USVString")}}을 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const domain = url.hostname;
url.hostname = domain;
```

### 값

{{domxref("USVString")}},

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
