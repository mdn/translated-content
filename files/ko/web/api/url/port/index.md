---
title: URL.port
slug: Web/API/URL/port
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`port`** 속성은 URL의 포트 숫자를 담은 {{domxref("USVString")}}입니다. URL이 명시적인 포트 번호를 포함하고 있지 않으면 빈 문자열(`''`)입니다.

{{AvailableInWorkers}}

## 구문

```js
const portNumber = url.port;
url.port = newPortNumber;
```

### 값

A {{domxref("USVString")}}.

## 예제

```js
const url = new URL("https://mydomain.com:80/svn/Repos/");
console.log(url.port); // Logs '80'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
