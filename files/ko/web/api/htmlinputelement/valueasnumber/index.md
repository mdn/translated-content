---
title: "HTMLInputElement: valueAsNumber 속성"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

**`valueAsNumber`** 속성은 {{DOMxRef("HTMLInputElement")}} 인터페이스에서 {{htmlelement("input")}} 요소의 현재 값을 숫자로 반환하고 숫자로 변환할 수 없는 경우 `NaN`을 반환합니다.

또한, 특정 조건에 따라 속성을 직접 설정하여 기본 숫자 값을 지정할 수 있습니다.

## 값

요소의 값을 나타내는 숫자이며 숫자로 변환할 수 없는 경우 `NaN`

## 예제

### 숫자 값 가져오기

이번 예제에서는 {{HTMLElement("input/number", "number")}} 입력 값이 변경될 때 로그에 현재 값이 표시됩니다.

#### HTML

`number` 타입의 {{htmlelement("input")}}, 이와 연관된 {{htmlelement("label")}} 그리고 출력을 위한 {{htmlelement("pre")}} 컨테이너를 포함하고 있습니다.

```html
<label for="number">Pick a number between 1 and 10:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

`<pre>` 요소의 {{domxref("HTMLElement.innerText", "innerText")}}는 {{domxref("HTMLElement/change_event", "change")}} 이벤트가 발생할 때마다 `<input>`의 현재 값으로 업데이트 됩니다.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("number");

inputElement.addEventListener("change", () => {
  logElement.innerText = `Number: ${inputElement.valueAsNumber}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### 결과

{{EmbedLiveSample("Retrieving a number value", "", 100)}}

위젯에서 숫자를 삭제하면 결과는 `NaN`이 됩니다.

### 날짜 값을 숫자로 변환하여 가져오기

이번 예제에서는 {{HTMLElement("input/datetime-local", "datetime-local")}} 타입의 `<input>`에서 `valueAsNumber` 속성을 보여줍니다.

#### HTML

`datetime-local` 타입의 `<input>`을 포함하고 있습니다.

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

날짜와 시간이 선택되지 않으면 빈 문자열이 `NaN`으로 처리됩니다. 시간이 선택될 때마다 {{domxref("HTMLElement/change_event", "change")}} 이벤트가 발생하며, `<pre>` 콘텐츠가 업데이트 되어 폼 컨트롤의 {{DOMXref("HTMLInputElement.value")}} 값을 숫자 값과 비교하여 표시됩니다.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Initial value: ${inputElement.valueAsNumber}`;

inputElement.addEventListener("change", () => {
  const d = new Date(inputElement.valueAsNumber);
  logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsNumber}, \nwhich is ${d.toDateString()} at ${d.toTimeString()}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### 결과

{{EmbedLiveSample("Retrieving a date value as a number", "", 100)}}

## 명세서서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
