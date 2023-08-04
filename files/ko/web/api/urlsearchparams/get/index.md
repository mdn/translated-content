---
title: URLSearchParams.get()
slug: Web/API/URLSearchParams/get
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 인터페이스의 **`get()`** 메서드는 지정한 키와 연관된 첫 번째 값을 반환합니다.

{{availableinworkers}}

## 구문

```js
get(name);
```

### 매개변수

- `name`
  - : 반환할 매개변수의 이름입니다.

### Return value

검색 매개변수를 찾으면 문자열, 아니면 **`null`**입니다.

## 예제

페이지 URL이 `https://example.com/?name=Jonathan&age=18`이라고 가정할 때, 다음 코드로 'name'과 'age' 매개변수를 가져올 수 있습니다.

```js
let params = new URLSearchParams(document.location.search);
let name = params.get("name"); // 문자열 "Jonathan"
let age = parseInt(params.get("age"), 10); // 숫자 18
```

쿼리 문자열에 존재하지 않는 매개변수를 가져오려고 시도하면 **`null`**을 반환합니다.

```js
let address = params.get("address"); // null
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
