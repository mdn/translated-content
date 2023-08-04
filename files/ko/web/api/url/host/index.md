---
title: URL.host
slug: Web/API/URL/host
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`host`** 속성은 URL의 호스트, 즉 {{domxref("URL.hostname", "hostname")}}와 함께, {{glossary("port", "포트")}}가 존재하는 경우 `':'`과 그 뒤의 {{domxref("URL.port", "port")}}를 포함하는 {{domxref("USVString")}} 문자열입니다.

{{AvailableInWorkers}}

## 구문

```js
const host = url.host;
url.host = newHost;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
let url = new URL("https://developer.mozilla.org/ko/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/ko/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

url = new URL("https://developer.mozilla.org:4097/ko/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
