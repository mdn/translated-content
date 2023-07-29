---
title: URL.hash
slug: Web/API/URL/hash
---

{{ APIRef("URL API") }}

{{domxref("URL")}} 인터페이스의 **`hash`** 속성은 맨 앞의 `'#'`과 함께 URL의 프래그먼트 식별자를 담고 있는 {{domxref("USVString")}}입니다.

프래그먼트에는 [퍼센트 디코딩](/ko/docs/Glossary/percent-encoding)을 적용하지 않습니다. URL이 프래그먼트 식별자를 포함하지 않은 경우 빈 문자열을 반환합니다.

{{AvailableInWorkers}}

## 구문

```js
const string = url.hash;
url.hash = newHash;
```

### 값

{{domxref("USVString")}}.

## 예제

```js
const url = new URL(
  "https://developer.mozilla.org/ko/docs/Web/API/URL/href#예제",
);
console.log(url.hash); // Logs: '#예제'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 속성이 속한 {{domxref("URL")}} 인터페이스.
