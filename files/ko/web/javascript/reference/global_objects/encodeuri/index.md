---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
---

{{jsSidebar("Objects")}}

**`encodeURI()`** 함수는 {{glossary("URI")}}의 특정한 문자를 UTF-8로 인코딩해 하나, 둘, 셋, 혹은 네 개의 연속된 이스케이프 문자로 나타냅니다. (두 개의 대리 문자로 이루어진 문자만 이스케이프 문자 네 개로 변환됩니다.)

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## 구문

```js
encodeURI(URI);
```

### 매개변수

- `URI`
  - : 완전한 URI.

### 반환 값

주어진 문자열을 URI로서 인코딩한 새로운 문자열.

## 설명

`encodeURI()` 함수는 URI에서 특별한 뜻을 가진 문자(예약 문자)는 인코딩 하지 않습니다. 아래 예제는 "URI 도식"이 포함할 수 있는 모든 부분을 담고 있습니다. 일부 문자가 어떤 방식으로 특별한 의미를 주입하고 있는지 잘 살펴보세요.

```
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

따라서 `encodeURI()`는 완전한 URI를 형성하는데 필요한 문자는 인코딩 **하지 않습니다**. 또한, 예약된 목적을 가지지는 않지만 URI가 그대로 포함할 수 있는 몇 가지 문자("비예약 표식")도 인코딩 **하지 않습니다**. ([RFC 2396](https://www.ietf.org/rfc/rfc2396.txt)을 참고하세요)

`encodeURI()` 는 다음 문자를 **제외**한 문자를 이스케이프 합니다.

```
이스케이프 하지 않는 문자:

    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
```

`encodeURI()`와 {{jsxref("encodeURIComponent", "encodeURIComponent()")}}의 차이는 다음과 같습니다.

```js
var set1 = ";,/?:@&=+$#"; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = "ABC abc 123"; // 알파벳 및 숫자, 공백

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (공백은 %20으로 인코딩)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (공백은 %20으로 인코딩)
```

`encodeURI()` 혼자서는 {{domxref("XMLHttpRequest")}} 등이 사용할, 적합한 HTTP {{httpmethod("GET")}}과 {{httpmethod("POST")}} 요청을 구성할 수 없습니다. `GET`과 `POST`에서 특별한 문자로 취급하는 `"&"`, `"+"`, `"="`를 인코딩 하지 않기 때문입니다. 그러나 `encodeURIComponent()`는 저 세 문자도 인코딩 대상에 포함합니다.

상위-하위 쌍을 이루지 않은 단일 대리 문자를 인코딩 시도하면 {{jsxref("URIError")}}가 발생합니다.

```js
// high-low pair ok
console.log(encodeURIComponent("\uD800\uDFFF"));

// lone high surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// lone low surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

또한, URL의 보다 최신 RFC인 [RFC3986](http://tools.ietf.org/html/rfc3986)을 따르고자 한다면, 대괄호가 {{glossary("IPv6")}} 지원을 위해 추가로 예약됨에 따라 `encodeURI()`가 인코딩하지 않으므로 URL을 생성할 때 주의해야 합니다. 다음 예시 코드가 도움이 될 수도 있습니다.

```js
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
