---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{apiref("DOM")}}

{{domxref("Event")}} 인터페이스의 **`preventDefault()`** 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 {{Glossary("user agent", "사용자 에이전트")}}의 기본 동작을 실행하지 않도록 지정합니다.

`preventDefault()`를 호출한 이벤트도 수신기 중 하나에서 {{domxref("Event.stopPropagation", "stopPropagation()")}} 또는 {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}을 호출하기 전까지는 다른 이벤트와 마찬가지로 전파됩니다.

아래에도 적혀있지만, `cancelable: true` 없이 {{domxref("EventTarget.dispatchEvent()")}}로 발송한 이벤트처럼 취소 불가능한 이벤트의 경우, `preventDefault()`를 호출해도 아무 효과도 나타나지 않습니다.

## 구문

```
event.preventDefault();
```

## 예제

### 기본 클릭 동작 방지하기

체크박스의 클릭 기본 동작은 체크박스를 체크하거나 체크 해제하는 것입니다. 이 예제는 체크박스의 클릭 기본 동작을 방지하는 모습을 보입니다.

#### JavaScript

```js
document.querySelector("#id-checkbox").addEventListener(
  "click",
  function (event) {
    document.getElementById("output-box").innerHTML +=
      "죄송합니다! <code>preventDefault()</code> 때문에 체크할 수 없어요!<br>";
    event.preventDefault();
  },
  false,
);
```

#### HTML

```html
<p>체크박스를 클릭해주세요.</p>

<form>
  <label for="id-checkbox">체크박스:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### 결과

{{EmbedLiveSample("기본_클릭_동작_방지하기")}}

### 키 입력이 입력 칸을 채우는 것을 방지하기

이 예제에서는 `preventDefault()`를 사용해서 사용자가 입력 칸에 원하지 않는 문자를 입력하지 못하도록 합니다. 실제로 이런 기능이 필요할 땐 [내장 HTML 양식 검증](/ko/docs/Learn/Forms/Form_validation)을 사용하세요.

#### HTML

```html
<div class="container">
  <p>이름을 입력하세요. 영문 소문자만 사용할 수 있습니다.</p>

  <form>
    <input type="text" id="my-textbox" />
  </form>
</div>
```

#### CSS

사용자가 잘못된 키를 누를 때 보여줄 경고창을 그리기 위한 CSS입니다.

```css
.warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
}
```

#### JavaScript

이제 실제 작업을 수행할 JavaScript 코드입니다. 우선 {{domxref("Element/keypress_event", "keypress")}} 이벤트를 수신합니다.

```js
var myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);
```

`checkName()` 함수는 사용자가 누른 키를 관찰해서 허용할지, 허용하지 않을지 결정합니다.

```js
function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        "영문 소문자만 입력하세요." + "\n" + "charCode: " + charCode + "\n",
      );
    }
  }
}
```

`displayWarning()` 함수는 경고창을 띄웁니다. 완벽한 모습은 아니지만 예제로는 충분합니다.

```js
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### 결과

{{ EmbedLiveSample('키_입력이_입력_칸을_채우는_것을_방지하기', 600, 200) }}

## 참고

이벤트 흐름의 어떤 단계에서라도 `preventDefault()`를 호출하면 이벤트를 취소합니다. 즉, 이벤트에 대한 구현체의 기본 동작을 실행하지 않습니다.

{{domxref("Event.cancelable")}}을 사용해서 이벤트의 취소 가능 여부를 알아낼 수 있습니다. 취소 불가능한 이벤트에 대해 `preventDefault()`를 호출해도 아무 효과가 없습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
