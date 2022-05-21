---
title: URLSearchParams.toString()
slug: Web/API/URLSearchParams/toString
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.toString
translation_of: Web/API/URLSearchParams/toString
---
{{ApiRef("URL API")}}

**`toString()` **은 {{domxref("URLSearchParams")}} 인터페이스의 메소드로서, URL에서 사용할 수 있는 쿼리 문자열을 리턴합니다.

> **참고:** 이 메소드는 물음표가 없는 쿼리 문자열을 리턴합니다. 이는 물음표를 포함하여 리턴하는 [`window.location.search`](/ko/docs/Web/API/HTMLHyperlinkElementUtils/search)와는 다른 부분입니다.

{{availableinworkers}}

## Syntax

```js
URLSearchParams.toString()
```

### Parameters

None.

### Return value

A {{domxref("DOMString")}}, without the question mark.

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//두번째 foo 파라미터를 추가합니다.
params.append('foo', 4);
console.log(params.toString());
//'foo=1&bar=2&foo=4'를 출력합니다.

// note: params can also be directly created
let url = new URL('https://example.com?foo=1&bar=2');
let params = url.searchParams;

// or even simpler
let params = new URLSearchParams('foo=1&bar=2');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
