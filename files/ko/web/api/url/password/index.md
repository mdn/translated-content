---
title: URL.password
slug: Web/API/URL/password
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`password`** 속성은 도메인 이름 이전의 비밀번호를 포함한 {{domxref("USVString")}}을 반환합니다.

{{domxref("URL.username", "username")}} 설정 전에 `password`를 먼저 지정하려 시도하면 조용히 실패합니다.

{{AvailableInWorkers}}

## 구문

```js
const passwordString = url.password;
url.password = newPassword;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/ko/docs/Web/API/URL/password",
);
console.log(url.password); // Logs "flabada"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
