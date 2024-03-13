---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---

{{jsSidebar("Objects")}}

**`decodeURIComponent()`** 함수는 {{jsxref("encodeURIComponent")}} 나 비슷한 방법으로 생성된 Uniform Resource Identifier(URI) 컴포넌트를 해독합니다.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuricomponent.html")}}

## 구문

```js
decodeURIComponent(encodedURI);
```

### 매개변수

- `encodedURI`
  - : 암호화된 Uniform Resource Identifier(URI) 컴포넌트.

### 반환 값

이스케이프되지 않은 특정 글자들 중 새로운 문자열.

### 예외

잘못 사용되었을 경우 {{jsxref ( "URIError")}} ( " malformed URI sequence ") 예외를 발생시킵니다.

## 설명

암호화된 URI 컴포넌트에서 각각의 이스케이프 시퀀스(확장 문자열)를 자신을 나타내는 문자로 바꿉니다.

## 예제

### 키릴문자 URL 컴포넌트의 복호화

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
