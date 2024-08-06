---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`anchor()`** 메서드는 name(`<a name="...">str</a>`)이 있는 {{HTMLElement("a")}} 요소 안에 해당 문자열을 집어넣은 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. 대신 [`document.createElement()`](/ko/docs/Web/API/Document_Object_Model)와 같은 [DOM API](/ko/docs/Web/API/Document/createElement)를 사용하시기 바랍니다.
>
> HTML 명세서는 더 이상 {{HTMLElement("a")}} 요소가 `name` 특성을 가지는걸 허용하지 않기 때문에 이 메서드는 유효한 마크업을 생성할 수 없습니다.

## 구문

```js-nolint
anchor(name)
```

### 매개변수

- `name`
  - : 생성된 `<a name="...">` 시작 태그에 넣을 `name`의 값을 표현하는 문자열.

### 반환 값

`<a name="name">` 시작 태그(`name`의 쌍따옴표는 `&quot;`로 대체), 그 다음 `str` 내용, `</a>` 종료 태그로 이어지는 문자열.

## 예제

### anchor() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

이는 다음과 같은 HTML을 생성합니다.

```html
<a name="hello">Hello, world</a>
```

> **경고:** `name`이 {{HTMLElement("a")}} 요소의 유효한 특성이 아니기 때문에 이 마크업은 유효하지 않습니다.

`anchor()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 [`document.createElement()`](/ko/docs/Web/API/Document/createElement)와 같은 DOM API를 사용해야 합니다. 아래의 예를 참고하세요.

```js
const contentString = "Hello, world";
const elem = document.createElement("a");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `String.prototype.anchor` 폴리필](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
