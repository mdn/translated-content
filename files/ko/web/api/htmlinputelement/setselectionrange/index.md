---
title: "HTMLInputElement: setSelectionRange() method"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement.setSelectionRange()`** 메서드는 {{HTMLElement("input")}} 또는 {{HTMLElement("textarea")}} 요소의 현재 텍스트 선택 부분의 시작과 끝 위치를 설정합니다.

선택적으로, 최신 브라우저 버전에서는 선택이 발생한 방향을 지정할 수 있습니다. 이를 통해 다음을 나타낼 수 있습니다. 사용자가 선택한 텍스트의 끝에서부터 시작 지점으로 클릭하고 드래그한 것임을 나타낼 수 있습니다.

이 방법은 `HTMLInputElement.selectionStart`, `selectionEnd` 및 `selectionDirection` 속성을 한 번에 업데이트합니다.

[WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) 에 따르면 `selectionStart`, `selectionEnd` 속성 및 `setSelectionRange` 메서드는 텍스트, 검색, URL, 전화 및 비밀번호 유형의 입력 요소에만 적용됩니다. Chrome은 버전 33부터 나머지 입력 유형에서 이러한 속성 및 메서드에 액세스할 때 예외를 발생시킵니다. 예를 들어, 숫자 유형의 입력에서는 "HTMLInputElement의 'selectionStart' 속성을 읽지 못했습니다: 입력 요소의 유형('number')이(가) 선택을 지원하지 않습니다"라는 메시지가 표시됩니다.

입력 요소의 **모든** 텍스트를 선택하려면 [HTMLInputElement.select()](/ko/docs/Web/API/HTMLInputElement/select) 메서드를 사용할 수 있습니다.

## 구문

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### 매개변수

만약 `selectionEnd`가 `selectionStart`보다 작다면, 두 값 모두 `selectionEnd`의 값으로 취급됩니다.

- `selectionStart`
  - : 선택된 첫 번째 문자의 0부터 시작하는 인덱스입니다. 요소의 값의 길이보다 큰 인덱스는 값의 끝을 가리키는 것으로 간주됩니다.
- `selectionEnd`
  - : 마지막 선택된 문자의 _다음_ 문자의 0부터 시작하는 인덱스입니다. 요소의 값의 길이보다 큰 인덱스는 값의 끝을 가리키는 것으로 간주됩니다.
- `selectionDirection` {{optional_inline}}

  - : 선택이 수행된 방향을 나타내는 문자열입니다. 가능한 값은 다음과 같습니다:

    - `"forward"`
    - `"backward"`
    - `"none"` 방향을 알 수 없거나 관련이 없는 경우입니다. 기본 값입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

이 예제에서 버튼을 클릭하여 텍스트 상자에서 세 번째, 네 번째 및 다섯 번째 문자("Mozilla"에서 "zil")를 선택하세요.

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button onclick="selectText()">Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
}
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
