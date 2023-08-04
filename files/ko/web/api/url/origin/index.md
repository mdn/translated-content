---
title: URL.origin
slug: Web/API/URL/origin
---

{{APIRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`origin`** 읽기 전용 속성은 표현 중인 URL의 출처를 유니코드로 직렬화한 {{domxref("USVString")}}을 반환합니다. 정확한 구조는 URL의 유형에 따라 다릅니다.

- `http` 또는 `https` URL은 스킴 뒤 `'://'`, 도메인, `':'`, 마지막으로 포트(명시적으로 지정한 경우)로 구성됩니다.
- `file:` URL은 브라우저마다 다릅니다.
- `blob:` URL은 `blob:` 뒤의 URL 출처를 반환합니다. 예를 들어, `"blob:https://mozilla.org"`인 경우 `"https://mozilla.org"`를 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const originString = url.origin;
```

### 값

A {{domxref("USVString")}}.

## 예제

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // Logs 'https://mozilla.org'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
