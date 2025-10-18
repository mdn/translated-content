---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`strike()`** 메서드는 문자열을 취소선 처리된 텍스트로 표시하게 만드는 {{HTMLElement("strike")}} 요소(`<strike>str</strike>`)에 포함하는 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. `strike()`의 경우, `<strike>` 요소 자체가 HTML 명세에서 제외되었기에 더 이상 사용해서는 안됩니다. 웹 개발자들은 삭제된 컨텐츠에는 {{HTMLElement("del")}}를, 더 이상 정확하지 않거나 연관되지 않은 컨텐츠에는 {{HTMLElement("s")}}를 대신 사용해야 합니다.

## 구문

```js-nolint
strike()
```

### 매개변수

없음.

### 반환 값

`<strike>` 시작 태그로 시작하는 문자열, 그 다음 `str` 내용, 그 다음 `</strike>` 끝 태그로 끝나는 문자열입니다.

## 예제

### strike() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

이는 다음 HTML을 생성합니다.

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> `strike`가 더 이상 유효한 요소가 아니기 때문에 이 마크업은 유효하지 않습니다.

`strike()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 [`document.createElement()`](/ko/docs/Web/API/Document/createElement)와 같은 DOM API를 사용해야 합니다. 아래의 예를 참고하세요.

```js
const contentString = "Hello, world";
const elem = document.createElement("s");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.strike` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("strike")}}
