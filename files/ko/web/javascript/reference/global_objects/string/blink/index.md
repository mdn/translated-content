---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("String")}} 값의 **`blink()`** 메서드는 `<blink>`요소(`<blink>str</blink>`)에 해당 문자열을 집어넣은 문자열을 생성하여 해당 문자열을 깜빡이게 만듭니다.

> [!NOTE]
> 모든 [HTML 래퍼 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)는 더 이상 사용되지 않으며 호환성 목적으로만 표준화되었습니다.
> `blink()`의 경우에선 `<blink>` 요소 자체는 모던 브라우저에서 제거되었으며, 깜빡이는 텍스트는 여러 접근성 표준에서 눈살을 찌푸리게 합니다. 어떤 방식으로든 이 요소를 사용을 피하시기 바랍니다.

## 구문

```js-nolint
blink()
```

### 매개변수

없음.

### 반환 값

`<blink>` 시작 태그, 그 다음 `str` 내용, `</blink>` 종료 태그로 이어지는 문자열.

## 예제

### blink() 사용하기

아래 코드는 HTML 문자열을 생성한 다음 document의 body를 해당 문자열로 대체합니다.

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

이는 다음과 같은 HTML을 생성합니다.

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> `blink`는 더 이상 유효한 요소가 아니기 때문에 이 마크업은 유효하지 않습니다.

또한 깜빡이는 객체 사용을 피해야 합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
