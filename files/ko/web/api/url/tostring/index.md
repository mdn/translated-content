---
title: URL.toString()
slug: Web/API/URL/toString
---

{{ApiRef("URL API")}}

**`URL.toString()`** 문자열화 메서드는 전체 URL을 담은 {{domxref("USVString")}}을 반환합니다. 사실상 읽기 전용 {{domxref("URL.href")}}인 셈입니다.

{{AvailableInWorkers}}

## 구문

```js
href = url.toString();
```

### 반환 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/toString",
);
url.toString(); // should return the URL as a string
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{domxref("URL")}} 인터페이스.
