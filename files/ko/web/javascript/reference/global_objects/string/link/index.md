---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`link()`** 메서드는 이 문자열을 {{HTMLElement("a")}} 요소(`<a href="...">str</a>`)에 포함하는 문자열을 생성해, 다른 URL에 대한 하이퍼텍스트 링크로 사용할 수 있도록 합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. 대신 [`document.createElement()`](/ko/docs/Web/API/Document_Object_Model)와 같은 [DOM API](/ko/docs/Web/API/Document/createElement)를 사용하시기 바랍니다.

## 구문

```js-nolint
link(url)
```

### 매개변수

- `url`
  - : `<a>` 요소의 `href` 속성을 지정하는 문자열로, 모든 `&` 문자가 `&amp;`로 이스케이프 처리된 유효한 URL(상대 또는 절대)이어야 합니다.

### 반환 값

`<a href="url">` 시작 태그(`url`의 큰따옴표는 `&quot;`로 대체됨)로 시작하는 문자열, 그 다음 `str` 내용, `</a>` 종료 태그로 이어지는 문자열.

## 예제

### link() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

이는 다음과 같은 HTML을 생성합니다.

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

`link()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 [`document.createElement()`](/ko/docs/Web/API/Document/createElement)와 같은 DOM API를 사용해야 합니다. 아래의 예를 참고하세요.

```js
const contentString = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.link` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
