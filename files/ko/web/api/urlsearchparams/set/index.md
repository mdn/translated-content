---
title: URLSearchParams.set()
slug: Web/API/URLSearchParams/set
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 인터페이스의 **`set()`** 메서드는 주어진 검색 매개변수의 값을 지정한 값으로 설정합니다. 만약 해당 검색 매개변수에 연관된 값이 여러 개라면, 설정한 값을 제외한 나머지는 모두 제거됩니다. 반대로 검색 매개변수가 존재하지 않으면 새로 생성합니다.

{{availableinworkers}}

## 구문

```js
set(name, value);
```

### 매개변수

- `name`
  - : 설정할 매개변수의 이름입니다.
- `value`
  - : 설정할 매개변수의 값입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 세 번째 매개변수 추가
params.set("baz", 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
