---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

**`URLSearchParams`** 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드를 정의합니다.

`URLSearchParams`를 구현하는 객체는 {{jsxref("Statements/for...of", "for...of")}} 반복문으로 직접 키/값 쌍을 순회할 수 있습니다. 키/값 쌍의 순회 순서는 쿼리 문자열에 나타나는 순서와 같습니다. 예를 들어, 다음 두 줄의 코드는 동일합니다.

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

{{availableinworkers}}

## 생성자

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : `URLSearchParams` 객체 인스턴스를 반환합니다.

## 메서드

- {{domxref("URLSearchParams.append()")}}
  - : 주어진 키/값 쌍을 새로운 검색 매개변수로 추가합니다.
- {{domxref("URLSearchParams.delete()")}}
  - : 주어진 검색 매개변수와 그 값을 모두 삭제합니다.
- {{domxref("URLSearchParams.entries()")}}
  - : 객체의 모든 키/값 쌍을 쿼리 문자열과 같은 순서로 순회할 수 있는 [순회기](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)를 반환합니다.
- {{domxref("URLSearchParams.forEach()")}}
  - : 객체의 모든 값을 순회하면서 지정한 콜백을 호출합니다.
- {{domxref("URLSearchParams.get()")}}
  - : 주어진 검색 매개변수에 연결된 첫 번째 값을 반환합니다.
- {{domxref("URLSearchParams.getAll()")}}
  - : 주어진 검색 매개변수에 연결된 모든 값을 반환합니다.
- {{domxref("URLSearchParams.has()")}}
  - : 주어진 검색 매개변수의 존재 여부를 나타내는 불리언 값을을 반환합니다.
- {{domxref("URLSearchParams.keys()")}}
  - : 객체의 모든 키/값 쌍에서 키만 순회할 수 있는 [순회기](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)를 반환합니다.
- {{domxref("URLSearchParams.set()")}}
  - : 주어진 검색 매개변수에 값을 설정합니다. 이미 해당 매개변수에 연결된 값이 있으면 우선 모두 제거합니다.
- {{domxref("URLSearchParams.sort()")}}
  - : 모든 키/값 쌍을 키의 순서로 정렬합니다.
- {{domxref("URLSearchParams.toString()")}}
  - : URL에 쓰기 적합한 형태의 쿼리 문자열을 반환합니다.
- {{domxref("URLSearchParams.values()")}}
  - : 객체의 모든 키/값 쌍에서 값만 순회할 수 있는 [순회기](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)를 반환합니다.

## 예제

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
let searchParams = new URLSearchParams(paramsString);

// 검색 매개변수 순회
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

```js
// 검색 매개변수는 객체도 가능
let paramsObj = { foo: "bar", baz: "bar" };
let searchParams = new URLSearchParams(paramsObj);

searchParams.toString(); // "foo=bar&baz=bar"
searchParams.has("foo"); // true
searchParams.get("foo"); // bar
```

### 중복된 검색 매개변수

```js
let paramStr = "foo=bar&foo=baz";
let searchParams = new URLSearchParams(paramStr);

searchParams.toString(); // "foo=bar&foo=baz"
searchParams.has("foo"); // true
searchParams.get("foo"); // bar, 첫 번째 값만 반환
searchParams.getAll("foo"); // ["bar", "baz"]
```

### URL 파싱 없음

`URLSearchParams` 생성자에 URL 파싱 기능은 없습니다. 다만 쿼리 문자열이 `?`로 시작하면 무시합니다.

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has("query"); // false
searchParams1.has("http://example.com/search?query"); // true

searchParams1.get("query"); // null
searchParams1.get("http://example.com/search?query"); // "@" (decodeURIComponent('%40')과 동일)

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has("query"); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
searchParams3.has("query"); // true
```

### 더하기 기호 보존하기

`URLSearchParams` 생성자는 더하기 기호(`+`)를 공백으로 취급하므로 원하지 않는 결과를 낳을 수 있습니다.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+'가 공백으로 대체됨

console.log(atob(binQuery) === rawData); // false
```

{{jsxref("encodeURIComponent", "encodeURIComponent()")}}로 값을 먼저 인코딩하면 이 문제를 피할 수 있습니다.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### 빈 값과 없는 값

`URLSearchParams`는 `=` 뒤에 값이 없는 것과, 아예 `=`조차 없는 매개변수를 구분하지 않습니다.

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
emptyVal.get("foo"); // '' 반환
const noEquals = new URLSearchParams("foo&bar=baz");
noEquals.get("foo"); // '' 반환, 동일함
noEquals.toString(); // 'foo=&bar=baz'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `URLSearchParams` 폴리필](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- {{domxref("URL")}} 인터페이스
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
