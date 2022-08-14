---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
tags:
  - 자바스크립트
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURI
---
{{jsSidebar("Objects")}}

**`decodeURI()`** 함수는 {{jsxref("encodeURI")}}이나 비슷한 루틴으로 사전에 만들어진 URI(Uniform Resource Identifier, 인터넷식별자) 를 해독합니다.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## 구문

```js
    decodeURI(encodedURI)
```

### 파라미터

- `encodedURI`
  - : 완전하고 암호화된 인터넷식별자(URI)

### 리턴 값

주어진 암호화된 URI의 암호화되지 않은 버전을 나타내는 새 문자열을 반환합니다.

### 예외

`encodedURI`에 유효하지 않은 문자열이 포함된 경우 {{jsxref("URIError")}} ("malformed URI sequence") 예외를 던집니다.

## 설명

암호화된 URI의 각 이스케이프 시퀀스(확장문자열)를 자신을 나타내는 문자로 바꾸지만 {{jsxref ( "encodeURI")}}에서 도입할 수 없었던 이스케이프 시퀀스는 해독하지 않습니다. "#"문자는 이스케이프 시퀀스에서 해독되지 않습니다.

## 예제

### Decoding a Cyrillic URL

```js
decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### Catching errors

```js
    try {
      var a = decodeURI('%E0%A4%A');
    } catch(e) {
      console.error(e);
    }

    // URIError: malformed URI sequence
```

## 사양

| Specification                                                                            | Status                       | Comment             |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES3')}}                                                                 | {{Spec2('ES3')}}         | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.1.3.1', 'decodeURI')}}                     | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-decodeuri-encodeduri', 'decodeURI')}}         | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-decodeuri-encodeduri', 'decodeURI')}} | {{Spec2('ESDraft')}} |                     |

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("decodeURIComponent")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
