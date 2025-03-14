---
title: "Element: insertAdjacentHTML() 메서드"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

{{domxref("Element")}} 인터페이스의 **`insertAdjacentHTML()`** 메서드는 지정된 텍스트를 HTML 혹은 XML로 파싱하고 결과 노드들을 지정된 위치의 DOM 트리에 삽입합니다.

## 구문

```js-nolint
insertAdjacentHTML(position, text)
```

### 매개변수

- `position`

  - : 요소와 상대적인 위치를 나타내는 문자열입니다. 다음 문자열 중 하나여야 합니다.

    - `"beforebegin"`
      - : 요소 이전에 위치합니다. 오직 요소가 DOM 트리에 있고 부모 요소를 가지고 있을 때만 유효합니다.
    - `"afterbegin"`
      - : 요소 바로 안에서 처음 자식 이전에 위치합니다.
    - `"beforeend"`
      - : 요소 바로 안에서 마지막 자식 이후에 위치합니다.
    - `"afterend"`
      - : 요소 이후에 위치합니다. 오직 요소가 DOM 트리에 있고 부모 요소를 가지고 있을 때만 유효합니다.

- `text`
  - : HTML 혹은 XML로 파싱되고 트리에 삽입되는 문자열입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

이 메서드는 다음 타입 중 하나의 {{domxref("DOMException")}}를 발생시킬 수 있습니다.

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : `position`이 `"beforebegin"` 혹은 `"afterend"`이고 요소가 부모를 가지고 있지 않거나 부모가 `Document` 객체인 경우 에러를 던집니다.
- `SyntaxError` {{domxref("DOMException")}}
  - : `position`이 나열된 네 개의 값 중 하나가 아닌 경우 에러를 던집니다.

## 설명

`insertAdjacentHTML()` 메서드는 사용되고 있는 요소를 다시 파싱하지 않아서 해당 요소 내의 기존 요소들을 손상시키지 않습니다. 이는 추가적인 직렬화 단계를 피하므로 직접적인 {{domxref("Element.innerHTML", "innerHTML")}} 조작보다 훨씬 빠릅니다.

다음과 같이 삽입된 콘텐츠의 가능한 위치를 시각화할 수 있습니다.

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

### 보안 고려 사항

`insertAdjacentHTML()`을 사용하여 페이지에 HTML을 삽입할 때, 이스케이프 문자열이 아닌 사용자 입력을 사용하지 않도록 조심해야 합니다.

일반 텍스트를 삽입할 때 `insertAdjacentHTML()`을 사용해서는 안됩니다. 대신, {{domxref("Node.textContent")}} 속성 혹은 {{domxref("Element.insertAdjacentText()")}} 메서드를 사용합니다. 이는 전달된 콘텐츠를 HTML로 해석하지 않습니다. 대신 원시 텍스트로 삽입합니다.

## 예시

### HTML 삽입

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">Insert HTML</button>
<button id="reset">Reset</button>

<p>
  Some text, with a <code id="subject">code-formatted element</code> inside it.
</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

```js
const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>",
  );
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 결과

{{EmbedLiveSample("Examples", 100, 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: DOM 트리를 XML 문자열로 직렬화
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) 경우에 따라 insertAdjacentHTML가 더 빠를 수 있다는 것을 벤치마크를 포함해 보여주는 Henri Sivonen 게시물.
