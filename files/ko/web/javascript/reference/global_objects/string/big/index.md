---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`big()`** 메서드는 해당 문자열을 큰 글꼴로 표시되게 만드는 {{HTMLElement("big")}} 요소(`<big>str</big>`)에 해당 문자열을 집어넣은 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. `big()`의 경우에선 `<big>` 요소 자체는 HTML 명세서에서 제거되었기 때문에 더 이상 사용해서는 안됩니다. 웹 개발자는 반드시 대신 [CSS](/ko/docs/Web/CSS) 속성을 사용하시기 바랍니다.

## 구문

```js-nolint
big()
```

### 매개변수

없음.

### 반환 값

`<big>` 시작 태그, 그 다음 `str` 내용, `</big>` 종료 태그로 이어지는 문자열.

## 예제

### big() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

이는 다음과 같은 HTML을 생성합니다.

```html
<big>Hello, world</big>
```

> **경고:** `big`은 더 이상 유효한 요소가 아니기 때문에 이 마크업은 유효하지 않습니다.

`big()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 반드시 CSS를 사용해서 폰트를 조작해야 합니다. 예를 들어 {{domxref("HTMLElement/style", "element.style")}} 속성의 {{cssxref("font-size")}}를 사용하여 조작할 수 있습니다.

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("big")}}
