---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`fontcolor()`** 메서드는 해당 문자열을 특정 글꼴 색상으로 표시하게 만드는 {{HTMLElement("font")}} 요소(`<font color="...">str</font>`)에 해당 문자열을 집어넣은 문자열을 생성합니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다.
> `fontcolor()`의 경우에선 `<font>` 요소 자체는 HTML 명세서에서 제거되었기 때문에 더 이상 사용해서는 안됩니다. 웹 개발자는 반드시 대신 [CSS](/ko/docs/Web/CSS) 속성을 사용하시기 바랍니다.

## 구문

```js-nolint
fontcolor(color)
```

### 매개변수

- `color`
  - : 색상을 16진수 RGB 코드 또는 문자열 리터럴로 표현하는 문자열입니다. 색상 이름에 대한 문자열 리터럴은 [CSS 색상 참고서](/ko/docs/Web/CSS/color_value)에 나열되어 있습니다.

### 반환 값

`<font color="color">` 시작 태그로 시작하고 (`color` 안의 따옴표는 `&quot;`으로 대체됩니다) 그 다음 문자열 `str` 그 다음 `</font>` 종료 태그로 이어지는 문자열

## 설명

`fontcolor()` 메서드 자체는 유효성 검사나 정규화 없이 문자열 부분을 단순히 결합합니다. 그러나 유효한 {{HTMLElement("font")}} 요소를 만들기 위해 색상을 16진수 RGB 코드로 표현하는 경우 `rrggbb` 형식을 사용해야 합니다. 예를 들어 연어의 16진수 RGB 값은 빨강=FA, 녹색=80, 파랑=72이므로 연어의 RGB 삼원색은 `"FA8072"`입니다.

## 예제

### fontcolor() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

이는 다음 HTML을 생성합니다.

```html
<font color="red">Hello, world</font>
```

> **Warning:** `font`는 더 이상 유효한 요소가 아니기 때문에, 이 마크업은 유효하지 않습니다.

`fontcolor()`를 사용하여 HTML 텍스트를 직접 작성하는 대신 반드시 CSS를 사용해서 폰트를 조작해야 합니다. 예를 들어 {{domxref("HTMLElement/style", "element.style")}} 속성의 {{cssxref("color")}}를 사용하여 조작할 수 있습니다.

```js
document.getElementById("yourElemId").style.color = "red";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
