---
title: URLSearchParams
slug: Web/API/URLSearchParams
tags:
  - API
  - Interface
  - Landing
  - Reference
  - URL API
  - URLSearchParams
  - Polyfill
translation_of: Web/API/URLSearchParams
---
{{ApiRef("URL API")}}

**`URLSearchParams`** 인터페이스는 URL의 쿼리 문자열에 대해 작업할 수 있는 유틸리티 메서드를 정의합니다.

`URLSearchParams`를 구현하는 객체는 {{jsxref("Statements/for...of", "for...of")}} 반복문에 바로 사용할 수 있습니다.

```js
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```

{{availableinworkers}}

## 생성자

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - :  `URLSearchParams` 객체 인스턴스를 반환합니다.

## 메서드

- {{domxref("URLSearchParams.append()")}}
  - : 특정 키/값을 새로운 검색 매개변수로 추가합니다.
- {{domxref("URLSearchParams.delete()")}}
  - : 특정 매개변수를 찾아 키와 값 모두 지웁니다.
- {{domxref("URLSearchParams.entries()")}}
  - : 객체의 모든 키/값 쌍을 순회할 수 있는 {{jsxref("Iteration_protocols","순회기")}}를 반환합니다.
- {{domxref("URLSearchParams.forEach()")}}
  - : 객체의 모든 값을 순회하며 지정한 콜백을 호출합니다.
- {{domxref("URLSearchParams.get()")}}
  - : 주어진 검색 매개변수에 연결된 첫 번째 값을 반환합니다.
- {{domxref("URLSearchParams.getAll()")}}
  - : 주어진 검색 매개변수에 연결된 모든 값을 반환합니다.
- {{domxref("URLSearchParams.has()")}}
  - : 주어진 검색 매개변수의 존재 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.
- {{domxref("URLSearchParams.keys()")}}
  - : 객체의 **모든 키**를 순회할 수 있는 {{jsxref("Iteration_protocols", "순회기")}}를 반환합니다.
- {{domxref("URLSearchParams.set()")}}
  - : 주어진 검색 매개변수에 연결된 값을 설정합니다. 연결된 값이 다수라면 나머지는 제거합니다.
- {{domxref("URLSearchParams.sort()")}}
  - : 모든 키/값 쌍을 키로 정렬합니다.
- {{domxref("URLSearchParams.toString()")}}
  - : URL에 쓰기 적합한 형태의 쿼리 문자열을 반환합니다.
- {{domxref("URLSearchParams.values()")}}
  - : 객체의 **모든 값**을 순회할 수 있는 {{jsxref("Iteration_protocols", "순회기")}}를 반환합니다.

## 예제

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

### 주의점

`URLSearchParams` 생성자는 전체 URL을 분석하지 않습니다. 그러나, 맨 앞의 `?`는 제거합니다.

```js
var paramsString1 = "http://example.com/search?query=%40";
var searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (equivalent to decodeURIComponent('%40'))

var paramsString2 = "?query=value";
var searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

var url = new URL("http://example.com/search?query=%40");
var searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query") // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("URL")}} 인터페이스.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
