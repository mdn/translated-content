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
var URLSearchParams = new URLSearchParams(init);
```

### 매개변수

_`init`_ {{optional_inline}}

다음 중 하나:

- {{domxref("USVString")}}은 `application/x-www-form-urlencoded` 형식에서 해석됩니다. 선행문자인 `'?'` 는 무시됩니다.
- 일련의 {{domxref("USVString")}} 쌍은, 이름/값(names/values)을 나타냅니다.
- {{domxref("USVString")}}은 키(keys)와 속성(values)의 레코드입니다.

### 반환값

{{domxref("URLSearchParams")}} 객체 인스턴스

## 예제

다음 예제는 URL string으로부터 {{domxref("URLSearchParams")}} 객체가 어떻게 만들어지는지를 보여줍니다.

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

## 사양

{{Specifications}}

## 브라우저 호환성

{{Compat}}
