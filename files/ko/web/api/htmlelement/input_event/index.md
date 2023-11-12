---
title: "HTMLElement: input 이벤트"
short-title: input
slug: Web/API/HTMLElement/input_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`input`** 이벤트는 {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 요소의 `value`가 바뀔 때 발생합니다.

`input`은 또한 {{domxref("HTMLElement.contentEditable", "contenteditable")}}이나 {{domxref("Document.designMode", "designMode")}}가 활성화된 요소에서도 발생합니다. `contenteditable`과 `designMode`에서의 이벤트 대상은 '편집 호스트'가 됩니다. 이 두 특성이 여러 특성에 적용된 경우, 편집할 수 없는 부모를 둔 가장 가까운 조상 요소이 편집 호스트입니다.

`type=checkbox` 또는 `type=radio`인 `<input>` 요소에서는 [HTML Living Standard 명세](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2)에 따라 사용자가 컨트롤을 토글할 때마다 `input` 이벤트가 발생해야 합니다. 하지만 역사적으로 이 명세가 항상 맞는 것은 아니었습니다. 호환성을 먼저 확인하세요. 이 요소들에서는 {{domxref("HTMLElement/change_event", "change")}} 이벤트로 대체하는 방법도 있습니다.

{{htmlelement("textarea")}}와 텍스트 입력을 허용하는 {{htmlelement("input")}}(`type=text`, `type=tel`, ...)에서의 이벤트 인터페이스는 {{domxref("InputEvent")}}고, 나머지 요소에서는 {{domxref("Event")}}입니다.

> **참고:** `input` 이벤트는 요소의 `value`가 변할 때마다 발생합니다. {{domxref("HTMLElement/change_event", "change")}} 이벤트는 엔터 키를 누르거나 리스트에서 옵션을 선택하는 등 변경점을 '반영'해야 발생한다는 점에서 다릅니다.

## 구문

이벤트 이름을 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 등의 메서드에 제공하거나, 이벤트 처리기 속성을 사용하세요.

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
```

## 이벤트 유형

일반 {{domxref("Event")}}.

## 예제

이 예제에서는 {{htmlelement("input")}} 요소의 값을 바꿀 때마다 기록을 남깁니다.

### HTML

```html
<input placeholder="텍스트 입력" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트

  - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
