---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} 인터페이스의 **`append()`** 메서드는 지정한 키/값 쌍을 새로운 검색 매개변수로서 추가합니다.

아래 예제에서도 볼 수 있듯, 같은 키를 여러 번 추가하면 매개변수 문자열에 각각의 키와 함께 여러 번 나타나게 됩니다.

{{availableinworkers}}

## 구문

```js
append(name, value);
```

### 매개변수

- `name`
  - : 추가할 매개변수의 이름입니다.
- `value`
  - : 추가할 매개변수의 값입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// 두 번째 foo 매개변수 추가
params.append("foo", 4);
// 이제 쿼리 문자열이 'foo=1&bar=2&foo=4'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- URL 관련 다른 인터페이스: {{domxref("URL")}}, {{domxref("HTMLHyperlinkElementUtils")}}.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
