---
title: "DOMTokenList: add() 메서드"
short-title: add()
slug: Web/API/DOMTokenList/add
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 인터페이스의 **`add()`** 메서드는 이미 있는 토큰은 생략하면서 목록에 지정된 토큰을 추가합니다.

## 구문

```js-nolint
add(token0)
add(token0, token1)
add(token0, token1, /* … ,*/ tokenN)
```

### 매개변수

- `tokenN`
  - : `DOMTokenList`에 추가할 토큰을 나타내는 문자열입니다.

### 반환 값

없음.

### 예외

- `SyntaxError` {{domxref("DOMException")}}
  - : 전달인자 중 하나가 빈 문자열이면 에러를 발생시킵니다.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 토큰이 ASCII 공백을 포함하면 에러를 발생시킵니다.

## 예제

다음 예제에서 {{domxref("Element.classList")}}를 사용하여 {{htmlelement("span")}} 요소에 설정된 클래스 목록을 `DOMTokenList`로 찾아냅니다. 그 다음으로 목록에 새로운 토큰을 추가하고 `<span>`의 {{domxref("Node.textContent")}}을 활용하여 목록을 작성합니다.

HTML 관련 코드입니다.

```html
<span class="a b c"></span>
```

JavaScript 관련 코드입니다.

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

결과는 다음과 같습니다.

{{ EmbedLiveSample('Examples', '100%', 60) }}

여러 토큰을 추가할 수도 있습니다.

```js
span.classList.add("d", "e", "f");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
