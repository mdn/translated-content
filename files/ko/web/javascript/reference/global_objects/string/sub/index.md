---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`sub()`** 메서드는 이 문자열을 {{HTMLElement("sub")}} 요소(`<sub>str</sub>`)에 포함하는 문자열을 생성하여 이 문자열이 아래 첨자로 표시되도록 합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. 대신 [`document.createElement()`](/ko/docs/Web/API/Document_Object_Model)와 같은 [DOM API](/ko/docs/Web/API/Document/createElement)를 사용하시기 바랍니다.

## 구문

```js-nolint
sub()
```

### 매개변수

없음.

### 반환 값

`<sub>` 시작 태그로 시작하는 문자열, 그 다음 `str` 내용, 그 다음 `</sub>` 끝 태그로 끝나는 문자열입니다.

## 예제

### sub() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

이는 다음 HTML을 생성합니다.

```html
<sub>Hello, world</sub>
```

`sub()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 [`document.createElement()`](/ko/docs/Web/API/Document/createElement)와 같은 DOM API를 사용해야 합니다. 아래의 예를 참고하세요.

```js
const contentString = "Hello, world";
const elem = document.createElement("sub");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sub")}}
