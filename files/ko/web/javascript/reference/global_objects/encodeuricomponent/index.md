---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---

{{jsSidebar("Objects")}}

**`encodeURIComponent()`** 함수는 {{glossary("URI")}}의 특정한 문자를 UTF-8로 인코딩해 하나, 둘, 셋, 혹은 네 개의 연속된 이스케이프 문자로 나타냅니다. (두 개의 대리 문자로 이루어진 문자만 이스케이프 문자 네 개로 변환됩니다.)

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html")}}

## 구문

```js
encodeURIComponent(str);
```

### 매개변수

- `str`
  - : URI 구성요소.

### 반환 값

주어진 문자열을 URI 구성요소로서 인코딩한 새로운 문자열.

## 설명

`encodeURIComponent()`는 다음 문자를 **제외**한 문자를 이스케이프 합니다.

```
Not Escaped:

    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

`encodeURIComponent()`와 {{jsxref("encodeURI", "encodeURI()")}}의 차이는 다음과 같습니다.

```js
var set1 = ";,/?:@&=+$"; // Reserved Characters
var set2 = "-_.!~*'()"; // Unescaped Characters
var set3 = "#"; // Number Sign
var set4 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)
```

상위-하위 쌍을 이루지 않은 단일 대리 문자를 인코딩 시도하면 {{jsxref("URIError")}}가 발생합니다.

```js
// high-low pair ok
console.log(encodeURIComponent("\uD800\uDFFF"));

// lone high surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// lone low surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

`encodeURIComponent()`를 사용해, 서버에 {{HTTPMethod("POST")}}로 요청할 양식 필드를 인코딩 하세요. 입력 중 의도치 않게 생성될 수 있는 HTML 특수 개체 등의 `"&"` 문자를 처리할 수 있습니다.

예를 들어 사용자가 입력한 `"Jack & Jill"`은 `"Jack &amp; Jill"`로 인코딩 됩니다. `encodeURIComponent()`를 사용하지 않았다면 서버가 앰퍼샌드를 새로운 필드의 시작으로 인식할 수 있으므로 데이터의 무결성을 해칠 수 있습니다.

[`application/x-www-form-urlencoded`](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm)의 스페이스는 `"+"`로 치환되어야 하므로, `encodeURIComponent()`의 결과에 추가로 `"%20"`을 `"+"`로 바꾸세요.

비록 URI의 구분자로서 형식화된 사용처는 없지만, 그럼에도 `!`, `'`, `(`, `)`, `*`을 추가로 예약하는 [RFC 3986](http://tools.ietf.org/html/rfc3986)을 엄격하게 따르려면 아래의 코드를 사용해보세요.

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
```

## 예제

다음 예제는 UTF-8 {{HTTPHeader("Content-Disposition")}} 과{{HTTPHeader("Link")}} 서버 응답 헤더에서 (UTF-8 파일 이름 등의 이유로) 필요한 문자 인코딩 방법을 보입니다.

```js
var fileName = "my file(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(fileName);

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

// here is an alternative to the above function
function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()*]/g, (c) => "%" + c.charCodeAt(0).toString(16)) // i.e., %27 %28 %29 %2a (Note that valid encoding of "*" is %2A
      // which necessitates calling toUpperCase() to properly encode)
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
