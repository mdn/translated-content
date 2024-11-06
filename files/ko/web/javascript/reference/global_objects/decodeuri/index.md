---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

**`decodeURI()`** 함수는 {{jsxref("encodeURI")}}이나 비슷한 루틴으로 사전에 만들어진 URI(Uniform Resource Identifier, 인터넷식별자)를 디코딩합니다.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## 구문

```js-nolint
decodeURI(encodedURI)
```

### 매개변수

- `encodedURI`
  - : 완전하고 인코딩된 인터넷식별자(URI)

### 반환값

주어진 인코딩된 URI를 디코딩한 새 문자열을 반환합니다.

### 예외

`encodedURI`에 유효하지 않은 문자열이 포함된 경우 {{jsxref("URIError")}} ("malformed URI sequence") 예외가 발생합니다.

## 설명

인코딩된 URI의 각 이스케이프 시퀀스(확장문자열)를 자신을 나타내는 문자로 바꾸지만 {{jsxref("encodeURI")}}에서 도입할 수 없었던 이스케이프 시퀀스는 해독하지 않습니다. `#`문자는 이스케이프 시퀀스에서 디코딩되지 않습니다.

## 예제

### 키릴 URL 디코딩

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### 예외 처리

```js
try {
  var a = decodeURI("%E0%A4%A");
} catch (e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## 사양

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
