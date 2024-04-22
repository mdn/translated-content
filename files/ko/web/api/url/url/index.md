---
title: URL()
slug: Web/API/URL/URL
---

{{APIRef("URL API")}}

**`URL()`** 생성자는 매개변수로 제공한 URL을 나타내는 새로운 {{domxref("URL")}} 객체를 반환합니다.

주어진 기준 URL이나 결과 URL이 유효하지 않은 URL일 경우, JavaScript {{jsxref("TypeError")}} 예외가 발생합니다.

{{AvailableInWorkers}}

## 구문

```js
const url = new URL(url [, base])
```

### 매개변수

- `url`
  - : 절대 또는 상대 URL을 나타내는 {{domxref("USVString")}}. `url`이 상대 URL인 경우 `base` 매개변수를 기준 URL로 사용하므로 `base`도 필수로 지정해야 합니다. 절대 URL인 경우 `base`는 무시합니다.
- `base` {{optional_inline}}
  - : `url` 매개변수가 상대 URL인 경우 사용할 기준 URL을 나타내는 {{domxref("USVString")}}. 기본값은 `''`입니다.

> **참고:** `base`에는 기존에 존재하는 {{domxref("URL")}} 객체도 사용할 수 있습니다. 그러면 {{domxref("URI.href", "href")}} 속성을 사용해 스스로 문자열화합니다.

### 예외

| 예외                    | 설명                                                                              |
| ----------------------- | --------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | 절대 URL인 경우 `url`, 상대 URL인 경우 `base` + `url`이 유효하지 않은 URL인 경우. |

## 예제

```js
// Base urls
let m = "https://developer.mozilla.org";
let a = new URL("/", m); // => 'https://developer.mozilla.org/'
let b = new URL(m); // => 'https://developer.mozilla.org/'

new URL("en-US/docs", b); // => 'https://developer.mozilla.org/en-US/docs'
let d = new URL("/en-US/docs", b); // => 'https://developer.mozilla.org/en-US/docs'
new URL("/en-US/docs", d); // => 'https://developer.mozilla.org/en-US/docs'
new URL("/en-US/docs", a); // => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/en-US/docs'

new URL("/en-US/docs", ""); // Raises a TypeError exception as '' is not a valid URL
new URL("/en-US/docs"); // Raises a TypeError exception as '/en-US/docs' is not a valid URL
new URL("http://www.example.com"); // => 'http://www.example.com/'
new URL("http://www.example.com", b); // => 'http://www.example.com/'

new URL("//foo.com", "https://example.com"); // => 'https://foo.com' (see relative URLs)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 생성자가 속한 {{domxref("URL")}} 인터페이스.
