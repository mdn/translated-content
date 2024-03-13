---
title: URL.href
slug: Web/API/URL/href
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`href`** 속성은 전체 URL을 담은 {{domxref("USVString")}}입니다.

{{AvailableInWorkers}}

## 구문

```js
const urlString = url.href;
url.href = newUrlString;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL("https://developer.mozilla.org/ko/docs/Web/API/URL/href");
console.log(url.href); // Logs: 'https://developer.mozilla.org/ko/docs/Web/API/URL/href'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
