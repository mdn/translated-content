---
title: DocumentOrShadowRoot.activeElement
slug: Web/API/Document/activeElement
---

{{APIRef("Shadow DOM")}}

{{domxref("Document")}}와 {{domxref("ShadowRoot")}} 인터페이스의 **`activeElement`** 읽기 전용 속성은 DOM과 섀도우 DOM 내에서 현재 포커스를 받은 {{domxref("Element")}} 객체를 반환합니다. 이 속성은 {{domxref("DocumentOrShadowRoot")}} {{Glossary("mixin", "믹스인")}}에서 상속받습니다.

`activeElement` 접근 시점에 텍스트를 블록 선택하고 있는 경우 해당하는 {{htmlelement("input")}}이나 {{htmlelement("textarea")}} 객체를 반환하는데, 그러면 그 객체의 {{domxref("Document.selectionStart", "selectionStart")}}와 {{domxref("Document.selectionEnd", "selectionEnd")}} 메서드를 사용해 선택에 대한 더 자세한 정보를 알아낼 수 있습니다. 포커스가 자주 가는 다른 경우로는 {{htmlelement("select")}} 요소나 `type`이 `"button"`, `"checkbox"`, `"radio"`인 {{htmlelement("input")}} 요소가 있습니다.

보통 사용자는 포커스 가능한 요소를 Tab 키를 사용해 탐색할 수 있고, 스페이스 바를 사용해 활성화(버튼을 누르거나 라디오 버튼을 켜는 등)할 수 있습니다. 포커스 가능한 요소는 현재 플랫폼과 브라우저 설정에 따라 다릅니다. 가령 macOS의 경우, 기본값에서는 텍스트 입력 칸이 아니면 보통 포커스 할 수 없습니다.

> **참고:** 포커스(사용자의 입력 이벤트를 받는 요소)와 선택(문서 내에서 강조하고 있는 부분)은 다릅니다. 현재 선택 영역은 {{domxref("window.getSelection()")}}을 사용해 가져올 수 있습니다.

## 구문

```js
element = DocumentOrShadowRoot.activeElement;
```

### 값

포커스를 갖고 있는 {{domxref("Element")}}. 그런 요소가 없으면 {{htmlelement("body")}} 또는 {{jsxref("null")}}.

## 예제

### HTML

```html
<p>아래 두 영역에서 텍스트를 선택해보세요.</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
텍스트 영역 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
텍스트 영역 2. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>활성화된 요소 ID: <b id="output-element"></b></p>
<p>선택한 텍스트: <b id="output-text"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### 결과

{{ EmbedLiveSample('예제', '400', '400') }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
