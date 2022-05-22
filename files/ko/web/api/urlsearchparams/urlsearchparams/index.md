---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
tags:
  - API
  - Constructor
  - Reference
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.URLSearchParams
translation_of: Web/API/URLSearchParams/URLSearchParams
---
{{ApiRef("URL API")}}

**`URLSearchParams()`** 생성자는 새로운 {{domxref("URLSearchParams")}} 객체를 생성하고 반환합니다.

{{availableinworkers}}

## 구문

```js
new URLSearchParams()
new URLSearchParams(init)
```

### 매개변수

- `init` {{optional_inline}}
  - : 다음 중 하나입니다.
    - 문자열. `application/x-www-form-urlencoded` 형식으로 파싱합니다. 선행 `'?'` 문자는 무시합니다.
    - 이름-값 문자열 쌍을 생성하는 [순회기](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators)를 가지는 객체. {{domxref("FormData")}} 등의 객체가 이 범주에 속합니다. 참고로 {{domxref("File")}} 값은 파일 이름이 아니라 `[object File]`로 직렬화됩니다. (`application/x-www-form-urlencoded` 양식에서의 동작과 동일)
    - 문자열 키와 문자열 값으로 구성된 레코드.

### 반환값

{{domxref("URLSearchParams")}} 객체 인스턴스입니다.

## 예제

다음 예제는 URL 문자열에서 {{domxref("URLSearchParams")}} 객체를 생성하는 모습입니다.

```js
// url 생성자에 전달된 주소를 url.search를 통해 params라는 변수로 검색합니다.
var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams(url.search);

// 문자열 리터럴을 전달합니다.
var params2 = new URLSearchParams("foo=1&bar=2");
var params2a = new URLSearchParams("?foo=1&bar=2");

// 일련의 쌍으로 전달합니다.
var params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// 레코드로 전달합니다.
var params4 = new URLSearchParams({"foo": "1", "bar": "2"});
```

다음 예제는 검색 매개변수를 포함한 URL과, 검색 매개변수 객체를 사용해 새로운 URL을 만드는 모습을 보입니다.

```js
const url = new URL('https://example.com/?a=hello&b=world');

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
    c: 'a',
    d: new String(2),
    e: false.toString(),
}

const new_params = new URLSearchParams([
    ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
    ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// (URL, Record<string, string>)을 받는 함수
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ]).toString()}`
  );
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
