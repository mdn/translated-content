---
title: URLSearchParams.toString()
slug: Web/API/URLSearchParams/toString
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 인터페이스의 **`toString()`** 메서드는 URL에 사용할 수 있는 쿼리 문자열을 반환합니다.

> **참고:** 이 메서드는 선행 `'?'`를 붙이지 않은 쿼리 문자열을 반환합니다. 이 동작은 `'?'`를 포함한 값을 반환하는 [`window.location.search`](/ko/docs/Web/API/HTMLHyperlinkElementUtils/search)와 다릅니다.

{{availableinworkers}}

## 구문

```js
toString();
```

### 매개변수

없음.

### 반환 값

물음표 없는 문자열입니다. 아무런 검색 매개변수도 설정하지 않은 경우에는 빈 문자열을 반환합니다.

## 예제

```js
const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);

// 두 번째 foo 매개변수 추가
params.append("foo", 4);
console.log(params.toString()); // 'foo=1&bar=2&foo=4' 출력
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("URL")}} 인터페이스.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
