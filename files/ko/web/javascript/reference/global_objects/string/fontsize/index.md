---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`fontcolor()`** 메서드는 해당 문자열을 특정 글꼴 크기로 표시하게 만드는 {{HTMLElement("font")}} 요소(`<font size="...">str</font>`)에 해당 문자열을 집어넣은 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다. `fontsize()`의 경우에선 `<font>` 요소 자체는 HTML 명세서에서 제거되었기 때문에 더 이상 사용해서는 안됩니다. 웹 개발자는 반드시 대신 [CSS](/ko/docs/Web/CSS) 속성을 사용하시기 바랍니다.

## 구문

```js-nolint
fontsize(size)
```

### 매개변수

- `size`
  - : 1부터 7 사이의 정수 혹은 1부터 7 사이의 부호 있는 정수를 나타내는 문자열.

### 반환 값

`<font size="color">` 시작 태그로 시작하고 (`size` 안의 따옴표는 `&quot;`으로 대체됩니다) 그 다음 문자열 `str` 그 다음 `</font>` 종료 태그로 이어지는 문자열

## 설명

`fontsize()` 메서드 자체는 유효성 검사나 정규화 없이 문자열 부분을 단순히 결합합니다. 그러나 유효한 {{HTMLElement("font")}} 요소를 생성하려면 크기를 정수로 지정할 때 `str`의 글꼴 크기를 정의된 7가지 크기 중 하나로 설정합니다. `size`를 `"-2"` 또는 `"+3"`과 같은 문자열로 지정하여 기본값인 3을 기준으로 `str`의 글꼴 크기를 조정할 수 있습니다.

## 예제

### fontsize() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

이는 다음 HTML을 생성합니다.

```html
<font size="7">Hello, world</font>
```

> **Warning:** `font`는 더 이상 유효한 요소가 아니기 때문에, 이 마크업은 유효하지 않습니다.

`fontcolor()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 반드시 CSS를 사용해서 폰트를 조작해야 합니다. 예를 들어 {{domxref("HTMLElement/style", "element.style")}} 속성의 {{cssxref("font-size")}}를 사용하여 조작할 수 있습니다.

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
