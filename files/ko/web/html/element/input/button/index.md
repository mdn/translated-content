---
title: <input type="button">
slug: Web/HTML/Element/input/button
---

{{HTMLSidebar}}

**`button`** 유형의 {{htmlelement("input")}} 요소는 단순한 푸시 버튼으로 렌더링 됩니다. 이벤트 처리기(주로 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트)를 부착하면, 사용자 지정 기능을 웹 페이지 어느 곳에나 제공할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-standard")}}

> **참고:** `<input>` 요소의 `button` 유형도 전혀 틀리지 않은 방법이지만, 이후에 생긴 {{HTMLElement("button")}} 요소를 사용하는 것이 선호되는 방식입니다. `<button>`의 레이블 텍스트는 여는 태그와 닫는 태그 사이에 넣기 때문에, 심지어 이미지까지도 포함할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#값">값</a></strong>
      </td>
      <td>버튼의 레이블로 사용할 {{domxref("DOMString")}}</td>
    </tr>
    <tr>
      <td>이벤트</td>
      <td><a href="/ko/docs/Web/API/Element/click_event"><code>click</code></a></td>
    </tr>
    <tr>
      <td>지원하는 공용 특성</td>
      <td>
        <a href="/ko/docs/Web/HTML/Element/input#type"><code>type</code></a>,
        <a href="/ko/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL 특성</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td>메서드</td>
      <td>없음</td>
    </tr>
  </tbody>
</table>

## 값

`<input type="button">` 요소의 [`value`](/ko/docs/Web/HTML/Element/input#value) 특성은 버튼의 레이블로 사용할 {{domxref("DOMString")}}을 담습니다.

```html
<input type="button" value="클릭하세요" />
```

{{EmbedLiveSample("summary-example3", 650, 30)}}

`value`를 지정하지 않으면 빈 버튼이 됩니다.

```html
<input type="button" />
```

{{EmbedLiveSample("summary-example1", 650, 30)}}

## 버튼 사용하기

`<input type="button">` 요소는 아무런 기본 기능도 가지지 않습니다. (유사한 요소인 [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit)과 [`<input type="reset">`](/ko/docs/Web/HTML/Element/input/reset)은 각각 양식을 제출하고 초기화할 수 있습니다.) 버튼이 뭐라도 하게 만들려면 JavaScript 코드를 작성해야 합니다.

### 간단한 버튼

[`click`](/ko/docs/Web/API/Element/click_event) 이벤트 처리기를 부착한 간단한 버튼을 통해 기계를 켜고 끄는 기능을 만드는 것으로 시작해보겠습니다. (기계라고는 하지만, 그냥 버튼의 `value`와 문단 내용을 바꾸는 것입니다.)

```html
<form>
  <input type="button" value="기계 켜기" />
</form>
<p>기계가 멈췄습니다.</p>
```

```js
var btn = document.querySelector("input");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "기계 켜기") {
    btn.value = "기계 끄기";
    txt.textContent = "기계가 켜졌습니다!";
  } else {
    btn.value = "기계 켜기";
    txt.textContent = "기계가 멈췄습니다.";
  }
}
```

위의 스크립트는 DOM의 `<input>`을 나타내는 {{domxref("HTMLInputElement")}} 객체의 참조를 획득해 변수 `button`에 저장합니다. 그 후 {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 사용해, [`click`](/ko/docs/Web/API/Element/click_event) 이벤트가 발생했을 때 실행할 함수를 생성합니다.

{{EmbedLiveSample("간단한_버튼", 650, 100)}}

### 버튼에 키보드 단축키 추가하기

접근 키라고도 불리는 키보드 단축키는 사용자가 키보드의 키 혹은 키 조합을 통해 버튼을 누를 수 있는 방법을 제공합니다. 단축키를 추가하는 법은, 다른 {{htmlelement("input")}}과 마찬가지로, [`accesskey`](/ko/docs/Web/HTML/Global_attributes#accesskey) 전역 특성을 추가하는 것입니다.

이번 예제에서는 이전 예제에 더해 <kbd>s</kbd> 키를 접근 키로 지정합니다. (브라우저/운영체제에 따라 특정 조합키를 같이 눌러야 할 수도 있습니다. [`accesskey`](/ko/docs/Web/HTML/Global_attributes/accesskey) 문서를 방문해 조합키 목록을 확인하세요.)

```html
<form>
  <input type="button" value="기계 켜기" accesskey="s" />
</form>
<p>기계가 멈췄습니다.</p>
```

```js hidden
var btn = document.querySelector("input");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "기계 켜기") {
    btn.value = "기계 끄기";
    txt.textContent = "기계가 켜졌습니다!";
  } else {
    btn.value = "기계 켜기";
    txt.textContent = "기계가 멈췄습니다.";
  }
}
```

{{EmbedLiveSample("버튼에_키보드_단축키_추가하기", 650, 100)}}

> **참고:** 위 예제의 문제는, 사용자 입장에선 어떤 단축키가 있는지 알 수도 없다는 것입니다! 실제 웹 사이트에서는, 쉽게 접근 가능한 곳에 놓인 링크로 단축키 정보를 설명하는 문서를 가리키는 등 사이트 디자인을 방해하지 않는 선에서 단축키 정보를 제공해야 할 것입니다.

### 버튼 활성화와 비활성화

버튼을 비활성화하려면 간단히 [`disabled`](/ko/docs/Web/HTML/Global_attributes#disabled) 전역 특성을 지정하는 것으로 충분합니다.

```html
<input type="button" value="Disable me" disabled />
```

런타임에서 바꿀 땐 요소의 `disabled` 속성에 `true`나 `false`를 설정하면 끝입니다. 이번 예제의 버튼은 활성화 상태지만, 누르는 순간 `btn.disabled = true`를 통해 비활성화합니다. 그 후, {{domxref("WindowTimers.setTimeout","setTimeout()")}} 함수를 통해 2초 후 다시 활성화 상태로 되돌립니다.

```html hidden
<input type="button" value="활성" />
```

```js hidden
var btn = document.querySelector("input");

btn.addEventListener("click", disableBtn);

function disableBtn() {
  btn.disabled = true;
  btn.value = "비활성";
  window.setTimeout(function () {
    btn.disabled = false;
    btn.value = "활성";
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_1", 650, 60)}}

`disabled` 특성을 지정하지 않은 경우 부모 요소의 `disabled`를 상속합니다. 이 점을 이용하면, 여러 개의 요소를 {{HTMLElement("fieldset")}} 등 부모 요소로 감싸고, 그 부모의 `disabled` 를 사용해 한꺼번에 상태를 통제할 수 있습니다.

다음 예제로 한 번에 비활성화하는 예제를 볼 수 있습니다. 이전 예제와 거의 똑같지만, 다른 점은 `disabled` 특성을 `<fieldset>`에 설정한다는 점입니다. 1번 버튼을 눌러보세요. 모든 버튼이 비활성화되고, 2초 후 활성화됩니다.

```html hidden
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1" />
  <input type="button" value="Button 2" />
  <input type="button" value="Button 3" />
</fieldset>
```

```js hidden
var btn = document.querySelector("input");
var fieldset = document.querySelector("fieldset");

btn.addEventListener("click", disableBtn);

function disableBtn() {
  fieldset.disabled = true;
  window.setTimeout(function () {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Hidden_code_2", 650, 60)}}

## 유효성 검사

버튼은 제한할 값이 없으므로 유효성 검사의 대상이 아닙니다.

## 예제

아래 예제는 {{htmlelement("canvas")}} 요소와 CSS(분량 조절을 위해 생략), JavaScript를 사용해 만든 매우 단순한 그림 그리기 앱입니다. 위쪽 두 컨트롤은 색과 펜 크기를 조절할 때 사용하고, 버튼은 클릭하면 캔버스의 그림을 모두 지우는 함수를 호출합니다.

```html
<div class="toolbar">
  <input type="color" aria-label="펜 색상" />
  <input type="range" min="2" max="50" value="30" aria-label="펜 크기" /><span
    class="output"
    >30</span
  >
  <input type="button" value="캔버스 지우기" />
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  margin: 0;
  overflow: hidden;
  background: #ccc;
}

.toolbar {
  width: 150px;
  height: 75px;
  background: #ccc;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
var canvas = document.querySelector(".myCanvas");
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight - 85);
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

var colorPicker = document.querySelector('input[type="color"]');
var sizePicker = document.querySelector('input[type="range"]');
var output = document.querySelector(".output");
var clearBtn = document.querySelector('input[type="button"]');

// covert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizepicker output value

sizePicker.oninput = function () {
  output.textContent = sizePicker.value;
};

// store mouse pointer coordinates, and whether the button is pressed
var curX;
var curY;
var pressed = false;

// update mouse pointer coordinates
document.onmousemove = function (e) {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
};

canvas.onmousedown = function () {
  pressed = true;
};

canvas.onmouseup = function () {
  pressed = false;
};

clearBtn.onclick = function () {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("예제", '100%', 600)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("input")}} 요소와 그 인터페이스 {{domxref("HTMLInputElement")}}.
- 보다 현대적인 {{HTMLElement("button")}} 요소.
