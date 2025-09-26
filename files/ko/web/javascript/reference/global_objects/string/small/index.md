---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`small()`** 메서드는 문자열을 작은 폰트로 표시되도록 하는 {{HTMLElement("small")}} 요소(`<small>str</small>`)에 안에 들어가는 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. 대신 [`document.createElement()`](/ko/docs/Web/API/Document_Object_Model)와 같은 [DOM API](/ko/docs/Web/API/Document/createElement)를 사용하시기 바랍니다.

## 구문

```js-nolint
small()
```

### 매개변수

없음.

### 반환 값

`<small>` 시작 태그로 시작한 다음 `str` 내용이 이어지고, 그 후 `</small>` 태그로 끝마치는 문자열

## 예제

### small() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

이는 다음과 같은 HTML을 생성합니다.

```html
<small>Hello, world</small>
```

`small()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 [`document.createElement()`](/ko/docs/Web/API/Document/createElement)와 같은 DOM API를 사용해야 합니다. 아래의 예를 참고하세요.

```js
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.small` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("small")}}
