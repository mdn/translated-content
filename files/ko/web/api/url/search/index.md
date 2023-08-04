---
title: URL.search
slug: Web/API/URL/search
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`search`** 속성은 맨 앞의 `'?'`와 함께 URL의 쿼리 문자열, 즉 검색 매개변수를 나타내는 {{domxref("USVString")}}입니다.

신형 브라우저에서는 {{domxref("URL.searchParams")}} 속성을 통해 간편한 쿼리 문자열 분석을 지원합니다.

{{AvailableInWorkers}}

## 구문

```js
const searchParams = object.search;
url.search = newSearchParams;
```

### 값

{{domxref("USVString")}}.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- 속성이 속한 {{domxref("URL")}} 인터페이스.
