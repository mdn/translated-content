---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 인터페이스의 **`delete()`** 메서드는 지정한 키와 연관된 모든 값을 검색 매개변수 리스트에서 제거합니다.

{{availableinworkers}}

## 구문

```js
delete name;
```

### 매개변수

- `name`
  - : 제거할 매개변수의 이름입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
let url = new URL("https://example.com?foo=1&bar=2&foo=3");
let params = new URLSearchParams(url.search);

// foo 매개변수 제거
params.delete("foo"); // 이제 쿼리 문자열이 'bar=2'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
