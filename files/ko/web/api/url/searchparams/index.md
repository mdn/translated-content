---
title: URL.searchParams
slug: Web/API/URL/searchParams
---

{{APIRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`searchParams`** 읽기 전용 속성은 URL 내의 {{httpmethod("GET")}} 디코딩 된 쿼리 매개변수에 접근할 수 있는 {{domxref("URLSearchParams")}} 객체를 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const urlSearchParams = url.searchParams;
```

### 값

{{domxref("URLSearchParams")}} 객체.

## 예제

페이지의 URL을 `https://example.com/?name=Jonathan%20Smith&age=18`로 가정했을 때, `name`과 `age` 매개변수는 다음과 같이 가져올 수 있습니다.

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // is the string "Jonathan Smith".
let age = parseInt(params.get("age")); // is the number 18
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
