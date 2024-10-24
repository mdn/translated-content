---
title: "HTMLInputElement: selectionEnd property"
short-title: selectionEnd
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLInputElement")}} 인터페이스의 **`selectionEnd`** 속성은 선택된 텍스트의 끝 인덱스를 가리키는 숫자입니다. 이는 선택된 텍스트가 없다면 현재 텍스트 인풋이 커서 위치 바로 다음의 문자 오프셋을 반환합니다.

> [!NOTE] > [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply)에 따르면 `selectionEnd` 속성은 text, search, URL, tel, password 타입을 가진 인풋에만 적용됩니다. 최신 브라우저에서는, 이와 같은 인풋 타입이 아닌 경우에 `selectionEnd` 속성을 설정할 경우 예외가 발생됩니다. 또한, 텍스트 인풋이 아닌 요소에 `selectionEnd` 속성으로 접근할 경우 이 속성은 `null` 를 반환합니다.

`selectionEnd` 가 `selectionStart` 보다 작으면,
두 값은 모두 `selectionEnd` 의 값으로 처리됩니다.

## 값

양수입니다.

## 예제

### HTML

```html
<!-- 텍스트 인풋이 아닌 요소에 selectionEnd 사용하기 -->
<label for="color">type=color의 selectionStart 속성</label>
<input id="color" type="color" />

<!-- 텍스트 인풋 요소에 selectionEnd 사용하기 -->
<fieldset>
  <legend>type=text의 selectionEnd 속성</legend>
  <label for="pin">Input PIN</label>
  <input type="text" id="pin" value="impossible PIN: 102-12-145" />
  <button id="pin-btn" type="button">PIN correction</button>
</fieldset>
```

### JavaScript

```js
const colorEnd = document.getElementById("color");
const text = document.querySelector("#pin");
const pinBtn = document.querySelector("#pin-btn");
const validPinChecker = /[^\d{3}-\d{2}-\d{3}]/g;
const selectionEnd = text.value.length;
const selectedText = text.value.substring(text.selectionStart, selectionEnd);

pinBtn.addEventListener("click", () => {
  const correctedText = selectedText.replace(validPinChecker, "");
  text.value = correctedText;
});

// 결과를 확인하기 위해 브라우저의 콘솔을 확인해 보세요
console.log(colorEnd.selectionEnd); // 결과 : null
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세서

{{Specifications}}

## 브

{{Compat}}

## 같이 보기

- {{domxref("HTMLTextAreaElement.selectionEnd")}} property
- {{domxref("HTMLInputElement.selectionStart")}} property
- {{domxref("HTMLInputElement.setSelectionRange")}} method
