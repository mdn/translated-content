---
title: URL.toJSON()
slug: Web/API/URL/toJSON
---

{{APIRef("URL API")}}

{{domxref("URL")}} 인터페이스의 **`toJSON()`** 메서드는 URL을 직렬화한 {{domxref("USVString")}}을 반환합니다. 그러나, 사실상 {{domxref("URL.toString", "toString()")}}과 같습니다..

{{AvailableInWorkers}}

## 구문

```js
const href = url.toJSON();
```

### 반환 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/toString",
);
url.toJSON(); // should return the URL as a string
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
