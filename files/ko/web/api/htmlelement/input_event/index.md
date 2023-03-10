---
title: 'HTMLElement: input event'
slug: Web/API/HTMLElement/input_event
---
{{APIRef}}

**`input`** 이벤트는 {{HTMLElement("input")}}, {{HTMLElement("select")}} 및 {{HTMLElement("textarea")}} 요소의 `value` 속성이 바뀔 때마다 발생한다.

| 전파 가능          | 가능                                                     |
| ------------------ | -------------------------------------------------------- |
| 취소 가능          | 불가                                                     |
| 인터페이스         | {{DOMxRef("InputEvent")}}                         |
| 이벤트 핸들러 속성 | {{domxref("GlobalEventHandlers.oninput")}} |

또한, 이 이벤트는 아무 요소의 {{domxref("HTMLElement.contentEditable", "contenteditable")}} 속성 및 {{domxref("Document.designMode", "designMode")}} 속성이 활성화 되어도 발생할 수 있다. 이런 경우, `contenteditable` 및 `designMode`, 속성이 활성화된 자식을 가진 편집 불가능한 최초 부모 요소에서 발생한다. 예를 들어 특정 요소에서 부모자식관계 중 자식 관계 여러개가 해당 속성이 활성화되어 내용 변경 시 이벤트가 발생해야 할 때, 해당 속성이 활성화되지 않은 최초의 부모 요소를 기준으로 발생하게 된다.

`type=checkbox` 및 `type=radio`, 속성을 가진 `<input>` 요소의 경우, [HTML5 규격](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2)에 의하면, `input` 이벤트는 반드시 사용자가 작동시킬 때마다 발생된다. 하지만 애초부터 그렇게 설계되어 있지 않은 경우가 있으므로, 반드시 아래 호환성 문단을 참고하거나, 호환되지 않을 경우, {{domxref("HTMLElement/change_event", "change")}} 이벤트를 대신해서 사용하도록 한다.

> **참고:** The `input` 이벤트는 {{domxref("HTMLElement/change_event", "change")}} 이벤트와는 달리 `value` 속성이 바뀔 시마다 반드시 일어난다. 값을 선택하거나 옵션 선택하자마자 일어나지만, 특정 글자를 입력 시에는 입력이 끝나고 value 속성에 적용되어야 발생하는데, 예를 들면, 한글 입력의 경우 한글자가 완성된 뒤 다른 키를 입력(예: 엔터 키)이 일어나야 발생된다. 이 또한 브라우저마다 다르므로 호환성을 확인하여 대응해야 한다. (역자 주)

## 예시

이 예시는 {{HtmlElement("input")}} 요소에 값을 입력하자마자 로그에 기록한다.

### HTML

```html
<input placeholder="Enter some text" name="name"/>
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- 관련 이벤트

  - {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - {{domxref("HTMLElement/change_event", "change")}}
  - {{domxref("HTMLInputElement/invalid_event", "invalid")}}
