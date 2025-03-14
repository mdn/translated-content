---
title: URL.username
slug: Web/API/URL/username
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`username`** 속성은 도메인 이전의 사용자 이름을 담은 {{domxref("USVString")}}을 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const usernameString = url.username;
url.username = newUsername;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ko/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
=======
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
